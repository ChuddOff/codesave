"use client";

import React, {useState} from "react";

interface ModalProps {
  show: boolean;
  namep: string;
  descriptionp: string;
  htmlp: string;
  cssp: string;
  jsp: string;
}

const AppModal: React.FC<ModalProps> = ({
  show,
  htmlp,
  cssp,
  jsp,
  namep,
  descriptionp,
}) => {
  const [name, setName] = useState<string>(namep);
  const [desc, setDesc] = useState<string>(descriptionp);
  const [showCode, setShowCode] = useState<boolean>(true);

  const postCode = async (e:any) => {
    e.preventDefault();

    // Собираем данные формы в объект
    const formData = {
      name: name,
      description: desc,
      show: showCode,
      author: "chuddoff",
      html: htmlp,
      css: cssp,
      js: jsp,
    };

    // Преобразуем объект в строку JSON
    const jsonData = JSON.stringify(formData);

    await fetch("http://localhost:3000/api/code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    });
  };

  return (
    <>
      {show && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
          <div
            className={` gap-[30px] p-[50px] rounded-[50px] bg-[#c6c6c6] flex flex-col items-center w-[538px] h-[696px]`}
          >
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
                <button type={"button"} onClick={() => {setShowCode(true)}}
                        className={`px-[10px] py-[5px] border-violet border-solid border-[5px] text-center font-semibold text-[30px] rounded-[10px] transition-[0.2s] ${showCode && `bg-violet text-white`}`}>
                  Публичный
                </button>
                <button type={"button"} onClick={() => {setShowCode(false)}}
                        className={`px-[10px] py-[5px] border-orange border-solid border-[5px] text-center font-semibold text-[30px] rounded-[10px] transition-[0.2s] ${!showCode && `bg-orange text-white`}`}>
                  Приватный
                </button>
              </div>
              <button
                  type="submit"
                  className={`w-[420px] rounded-[20px] px-[50px] py-[10px] text-violet border-[3px] border-black text-[36px] text-center font-semibold`}
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AppModal;
