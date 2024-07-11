"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import Checkbox from "./CustomCheckbox";
import Search from "@/components/search/Search";
import useSWR from "swr";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

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
    cache: "no-store",
  });
  console.log(response);

  return response.json();
}

const Profile: React.FC = () => {
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
                  Элементов
                </p>
                <p className={`font-normal text-orange text-[20px]`}>268</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center border-5 border-violet border-solid rounded-[15px] pt-[15px]    w-[600px] h-[350px]">
            <h3 className={`font-bold text-[30px] text-orange`}>Фильтры</h3>
            <div className="flex flex-col gap-y-[15px] w-[100%] pl-[30px] pt-[30px]">
              <Search />
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
                    if (!isPublic) {
                      return item.show !== true;
                    }
                    if (!isPrivate) {
                      return item.show === true;
                    }
                    if (!isJS) {
                      return item.js !== " " || !item.js;
                    }
                    if (!isCSS) {
                      return item.css !== " " || !item.css;
                    }
                    return true;
                  })
                  .map((item, index) => (
                    <Link key={index} href={"/upload/" + item._id}>
                      <div className="bg-violet rounded-[20px] w-[400px] flex flex-col">
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
                          <hr width="80%" />
                          <p
                            className={`w-100% text-[20px] text-white px-[20px]`}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Link>
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
