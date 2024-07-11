"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import Checkbox from "./CustomCheckbox";
import Search from "@/components/search/Search";
import useSWR from "swr";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

interface Item {
  _id: string;
  name: string;
  description: string;
  show: boolean;
  author: string;
  html: string;
  css: string;
  js: string;
}
interface CodesBody {
  status: number;
  code: Item[];
}

async function getData(id: string) {
  const url = process.env.URL;
  const response = await fetch("/api/profiles?author=" + id, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);

  return response.json();
}

async function deleteData(id: string, author: string) {
  const url = process.env.URL;
  const response = await fetch(`/api/code?_id=${id}&author=${author}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);

  return response.json();
}

const Profile = () => {
  const router = useRouter();

  const [data, setData] = useState<CodesBody>();

  const { user } = useUser();

  useEffect(() => {
    getData(user?.id || "").then((data) => {
      setData(data);
    });
  }, [user?.id]);

  const [isPublic, setIsPublic] = useState<boolean>(true);
  const [isPrivate, setIsPrivate] = useState<boolean>(true);
  const [isJS, setIsJS] = useState<boolean>(true);
  const [isCSS, setIsCSS] = useState<boolean>(true);
  const [input, setInput] = useState<string>("");

  return (
    <main className="select-none">
      <h2
        className={`font-extrabold text-[40px] text-center text-violet mt-[35px]`}
      >
        Ваши личные данные
      </h2>
      <section className="flex items-center justify-center pt-[50px] gap-[35px] mb-[50px]">
        <div className="flex flex-col items-center gap-[35px]">
          <div className="flex flex-col items-center border-5 border-violet border-solid rounded-[15px] pt-[15px] justify-between gap-[15px]   w-[600px] h-[350px]">
            <h3 className={`font-bold text-[30px] text-orange`}>Ваши данные</h3>
            <div className="flex flex-wrap pl-[35px] pb-[35px] gap-y-[15px]">
              <div className="flex flex-col gap-[10px] w-[50%]">
                <p className={`italic font-bold text-violet text-[22px]`}>
                  Псевдоним
                </p>
                <p className={`font-normal text-orange text-[20px]`}>
                  {user?.username || ""}
                </p>
              </div>
              <div className="flex flex-col gap-[10px] w-[50%]">
                <p className={`italic font-bold text-violet text-[22px]`}>
                  Почта
                </p>
                <p className={`font-normal text-orange text-[20px]`}>
                  {user?.emailAddresses[0].emailAddress || ""}
                </p>
              </div>
              <div className="flex flex-col gap-[10px] w-[50%]">
                <p className={`italic font-bold text-violet text-[22px]`}>
                  Имя
                </p>
                <p className={`font-normal text-orange text-[20px]`}>
                  {user?.firstName || ""}
                </p>
              </div>
              <div className="flex flex-col gap-[10px] w-[50%]">
                <p className={`italic font-bold text-violet text-[22px]`}>
                  Дата рождения
                </p>
                <p className={`font-normal text-orange text-[20px]`}>
                  Не указана
                </p>
              </div>
              <div className="flex flex-col gap-[10px] w-[50%]">
                <p className={`italic font-bold text-violet text-[22px]`}>
                  Фамилия
                </p>
                <p className={`font-normal text-orange text-[20px]`}>
                  {user?.lastName || ""}
                </p>
              </div>
              <div className="flex flex-col gap-[10px] w-[50%]">
                <p className={`italic font-bold text-violet text-[22px]`}>
                  Строк кода
                </p>
                <p className={`font-normal text-orange text-[20px]`}>
                  {data
                    ? data.code.reduce(
                        (accum: number, item: Item) =>
                          accum +
                          item.html.split("\n").length +
                          item.css.split("\n").length +
                          item.js.split("\n").length,
                        0
                      )
                    : 0}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center border-5 border-violet border-solid rounded-[15px] pt-[15px]    w-[600px] h-[350px]">
            <h3 className={`font-bold text-[30px] text-orange`}>Фильтры</h3>
            <div className="flex flex-col gap-y-[15px] w-[100%] pl-[30px] pt-[30px]">
              <Search input={(value) => setInput(value)} />
              <div className={`flex flex-col gap-[10px] w-[100%]`}>
                <div>
                  <Checkbox
                    defaultBackground="transparent"
                    selectedBackground="#FF6359"
                    svgColor="white"
                    borderColor="gray"
                    text="Публичный"
                    state={() => setIsPublic(!isPublic)}
                  />
                </div>
                <div>
                  <Checkbox
                    defaultBackground="transparent"
                    selectedBackground="#FF6359"
                    svgColor="white"
                    borderColor="gray"
                    text="Приватный"
                    state={() => setIsPrivate(!isPrivate)}
                  />
                </div>
                <div>
                  <Checkbox
                    defaultBackground="transparent"
                    selectedBackground="#FF6359"
                    svgColor="white"
                    borderColor="gray"
                    text="JS"
                    state={() => setIsJS(!isJS)}
                  />
                </div>
                <div>
                  <Checkbox
                    defaultBackground="transparent"
                    selectedBackground="#FF6359"
                    svgColor="white"
                    borderColor="gray"
                    text="CSS"
                    state={() => setIsCSS(!isCSS)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-5 border-orange border-solid rounded-[15px] pt-[15px]   w-[750px] h-[735px] overflow-y-scroll overflow-x-hidden">
          <h3 className={`font-bold text-[30px] text-violet`}>Ваш код</h3>

          <div className="flex flex-wrap gap-[20px] mt-[30px] justify-center ">
            {data ? (
              <>
                {data?.code
                  .filter((item) => {
                    let flag: boolean = true;
                    if (!isPublic) {
                      flag = item.show !== true;
                    }
                    if (!isPrivate && flag) {
                      flag = item.show === true;
                    }
                    if (!isJS && flag) {
                      flag = item.js !== " " || !item.js;
                    }
                    if (!isCSS && flag) {
                      flag = item.css !== " " || !item.css;
                    }
                    if (input && flag) {
                      flag =
                        item.name.includes(input) ||
                        item.description.includes(input);
                    }
                    return flag;
                  })
                  .map((item, index) => (
                    <div key={index} className="flex pl-[48px]">
                      <Link
                        className="bg-violet rounded-[20px] w-[400px] flex flex-col"
                        href={"/upload/" + item._id}
                      >
                        <div
                          className={`w-[100%] bg-amber-400 h-[150px] rounded-t-[20px] text-[40px] flex justify-center items-center`}
                        >
                          Preview
                        </div>
                        <div
                          className={`flex flex-col gap-[10px] pb-[30px] items-center`}
                        >
                          <h2
                            className={`text-center text-[30px] text-white font-semibold p-[15px]`}
                          >
                            {item.name}
                          </h2>
                          <hr className="w-[80%]" />
                          <p
                            className={`w-100% text-[20px] text-white px-[20px]`}
                          >
                            {item.description}
                          </p>
                        </div>
                      </Link>
                      <svg
                        onClick={() => {
                          deleteData(item._id, user?.id || "");
                          window.location.reload();
                        }}
                        className={`translate-x-[-60px] translate-y-[10px]`}
                        width="48"
                        height="48"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z"
                          fill="#000"
                        ></path>
                      </svg>
                    </div>
                  ))}
                <h3>Конец списка, но вы можете дополнить его!</h3>
              </>
            ) : (
              <h3>Тут пока что ничего нет! Но скоро появятся!</h3>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
