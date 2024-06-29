import React from "react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import Checkbox from "./CustomCheckbox";

const Profile: React.FC = () => {
  return (
    <main>
      <h2
        className={`font-extrabold text-[40px] text-center text-violet mt-[35px]`}
      >
        Ваши личные данные
      </h2>
      <section className="flex items-center justify-center pt-[50px] gap-[35px]">
        <div className="flex flex-col items-center gap-[35px]">
          <div className="flex flex-col items-center border-5 border-violet border-solid rounded-[15px] pt-[15px] justify-between gap-[15px]   w-[600px] h-[350px]">
            <h3 className={`font-bold text-[30px] text-orange`}>Ваши данные</h3>
            <div className="flex flex-wrap pl-[35px] pb-[35px] gap-y-[15px]">
              <div className="flex flex-col gap-[10px] w-[50%]">
                <p className={`italic font-bold text-violet text-[22px]`}>
                  Псевдоним
                </p>
                <p className={`font-normal text-orange text-[20px]`}>aleks</p>
              </div>
              <div className="flex flex-col gap-[10px] w-[50%]">
                <p className={`italic font-bold text-violet text-[22px]`}>
                  Почта
                </p>
                <p className={`font-normal text-orange text-[20px]`}>
                  Destro729@gmail.com
                </p>
              </div>
              <div className="flex flex-col gap-[10px] w-[50%]">
                <p className={`italic font-bold text-violet text-[22px]`}>
                  Имя
                </p>
                <p className={`font-normal text-orange text-[20px]`}>
                  Александра
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
                  AHAHAHHA
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
            <div className="flex flex-col pl-[35px] pb-[35px] gap-y-[15px]">
              <Input
                classNames={{
                  base: "max-w-full sm:max-w-[10rem] h-10",
                  mainWrapper: "h-full",
                  input: "text-small",
                  inputWrapper:
                    "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Search"
                size="sm"
                startContent={
                  <Image
                    src="search.svg"
                    alt="search"
                    width={26.49}
                    height={27.11}
                  />
                }
                type="search"
              />
              <div>Публичный</div>
              <div>Приватный</div>
              <div>
                <Checkbox
                  defaultBackground="transparent"
                  selectedBackground="gray"
                  svgColor="white"
                />
                <label htmlFor="js">JS</label>
              </div>
              <div>
                <input type={`checkbox`} id={`css`} />
                <label htmlFor="css">CSS</label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-5 border-orange border-solid rounded-[15px] pt-[15px]     w-[750px] h-[735px]">
          <h3 className={`font-bold text-[30px] text-violet`}>Ваш код</h3>
        </div>
      </section>
    </main>
  );
};

export default Profile;
