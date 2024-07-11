"use client";

import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface ModalProps {
  setColse: () => void;
  namep: string;
  descriptionp: string;
  htmlp: string;
  cssp: string;
  jsp: string;
  edit: string;
}

const AppModal: React.FC<ModalProps> = ({
  setColse,
  htmlp,
  cssp,
  jsp,
  namep,
  descriptionp,
  edit,
}) => {
  const { user } = useUser();

  const [name, setName] = useState<string>(namep);
  const [desc, setDesc] = useState<string>(descriptionp);
  const [showCode, setShowCode] = useState<boolean>(true);

  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const postCode = async (e: any) => {
    e.preventDefault();

    // Собираем данные формы в объект
    const formDataPost = {
      name: name,
      description: desc,
      show: showCode,
      author: user?.id || "chuddoff",
      html: htmlp || " ",
      css: cssp || " ",
      js: jsp || " ",
    };
    const formDataPut = {
      _id: edit || "",
      name: name,
      description: desc,
      show: showCode,
      author: user?.id || "chuddoff",
      html: htmlp || " ",
      css: cssp || " ",
      js: jsp || " ",
    };

    // Преобразуем объект в строку JSON
    const jsonDataPost = JSON.stringify(formDataPost);
    const jsonDataPut = JSON.stringify(formDataPut);

    setLoading(true);

    try {
      const post = await fetch("http://localhost:3000/api/code", {
        method: edit ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: edit ? jsonDataPut : jsonDataPost,
      });
      if (post.ok) {
        router.push("/code");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
      <div
        className={`relative gap-[30px] p-[50px] rounded-[50px] bg-[#c6c6c6] flex flex-col items-center w-[550px]`}
      >
        <svg
          onClick={() => setColse()}
          className={`absolute left-[480px] top-[30px]`}
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
        <form
          onSubmit={postCode}
          className={`flex flex-col gap-[30px] w-[420px]`}
        >
          <h2 className={`font-bold text-[48px] text-center`}>Save</h2>
          <h3 className={`text-[36px] text-center font-semibold`}>
            Укажите настройки
          </h3>
          <input
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={`Название`}
            type="text"
            className={`rounded-[10px] py-[10px] pl-[5px] text-[18px] text-orange'`}
          />
          <textarea
            required={true}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="rounded-[10px] py-[10px] pl-[5px]"
            name="111"
            id=""
            cols={30}
            rows={3}
            placeholder={`Описание`}
          ></textarea>
          <div className={`flex gap-[10px] justify-center`}>
            <button
              type={"button"}
              onClick={() => {
                setShowCode(true);
              }}
              className={`px-[10px] py-[5px] border-violet border-solid border-[5px] text-center font-semibold text-[30px] rounded-[10px] transition-[0.2s] ${
                showCode && `bg-violet text-white`
              }`}
            >
              Публичный
            </button>
            <button
              type={"button"}
              onClick={() => {
                setShowCode(false);
              }}
              className={`px-[10px] py-[5px] border-orange border-solid border-[5px] text-center font-semibold text-[30px] rounded-[10px] transition-[0.2s] ${
                !showCode && `bg-orange text-white`
              }`}
            >
              Приватный
            </button>
          </div>

          <Button
            type="submit"
            isLoading={loading}
            isDisabled={!name || !desc}
            color={!name || !desc ? "default" : "primary"}
            className={`w-[210px] h-[65px] m-auto font-semibold text-[30px]`}
          >
            Сохранить
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AppModal;
