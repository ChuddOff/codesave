import React from "react";
import Image from "next/image";
import Hands from "@/components/hands/Hands";
import Counter from "../hands/Counter";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="flex flex-col items-center h-[]">
      <h1 className="text-center font-semibold text-violet text-6xl mt-[70px]">
        Ваш <span className="font-extrabold text-orange">код</span> в надежных
        руках
      </h1>
      <h2 className="text-center font-semibold text-xl text-violet max-w-[600px] mt-[15px]">
        Сохраните свои лучшие строки кода и поделитесь ими с другими
        разработчиками
      </h2>

      <Hands />

      <h3 className="text-center font-semibold text-4xl text-violet mt-[50px] mb-[130px]">
        Поделившись своим кодом, вы:
      </h3>

      <div className="w-[100%] bg-[#C2C2C2] flex flex-col items-center">
        <div className="flex gap-[100px] relative translate-y-[-75px] w-[100%] justify-center">
          <div className="flex gap-[15px] bg-violet px-[10px] py-[25px] w-[350px] justify-center rounded-[20px]">
            <Image src="/Grow.svg" alt="Grow" width="92" height="92" />
            <h3 className="font-semibold text-lg w-[170px] text-white">
              Развиваете сообщество разработчиков
            </h3>
          </div>
          <div className="flex gap-[15px] bg-violet px-[10px] py-[25px] w-[350px] justify-center rounded-[20px]">
            <Image src="/Reuse.svg" alt="Grow" width="92" height="92" />
            <h3 className="font-semibold text-lg w-[170px] text-white">
              Развиваете сообщество разработчиков
            </h3>
          </div>
          <div className="flex gap-[15px] bg-violet px-[10px] py-[25px] w-[350px] justify-center rounded-[20px]">
            <Image src="/Rate.png" alt="Grow" width="92" height="92" />
            <h3 className="font-semibold text-lg w-[170px] text-white">
              Развиваете сообщество разработчиков
            </h3>
          </div>
        </div>
        <div className="w-[1232px] flex justify-between items-center">
          <h2 className="font-normal text-[24px] w-[460px] text-violet">
            <span className="text-orange font-bold">CodeSave</span> - это
            платформа, специализирующаяся на хранении и обмене кода ее
            пользователей, она призвана улучшить жизнь веб-разработчикам,
            оптимизировать их время на поиск готовых шаблонов.
          </h2>
          <h3 className="text-center font-[600] text-[30px] text-violet">
            Было опубликовано: <br />
            <Counter value={15578} />
            <br />
            строчек кода
          </h3>
        </div>

        <button className="rounded-[13px] bg-orange w-[447px] h-[85px] text-[38px] font-[600] text-white mt-[80px] mb-[70px]">
          Перейти в Code →
        </button>
      </div>
    </main>
  );
};

export default About;
