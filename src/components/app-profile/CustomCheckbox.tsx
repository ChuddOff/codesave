"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface CustomCheckboxProps {
  defaultBackground: string; // дефолт цвет
  selectedBackground: string; // цвет фона когда кликнут
  svgColor: string; // цвет галочки
  borderColor: string; // цвет бордера
  text: string;
}

export default function CustomCheckbox({
  defaultBackground,
  selectedBackground,
  svgColor,
  borderColor,
  text,
}: CustomCheckboxProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="flex items-center">
      <label className="inline-flex relative items-center cursor-pointer" onClick={() => setIsPressed(!isPressed)}>
        <motion.div
          animate={
            isPressed
              ? { backgroundColor: selectedBackground }
              : { backgroundColor: defaultBackground }
          }
          className={` w-[24px] h-[24px] rounded border-1 border-[${borderColor}] transition-colors duration-300 flex items-center gap-[5px]`}
        >
          <div className="flex items-center justify-center">
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              width={24}
              height={18}
              viewBox="0 0 17 18"
            >
              <motion.polyline
                points="1 9 7 14 15 4"
                fill="none"
                stroke={svgColor}
                strokeWidth={2}
                initial={{ pathLength: 0 }}
                animate={isPressed ? { pathLength: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.svg>
          </div>
          <p className={ isPressed ? `text-orange font-semibold select-none text-[20px] transition-[300ms]` : `text-violet font-semibold select-none text-[20px] transition-[300ms]`}>{text}</p>
        </motion.div>
      </label>
    </div>
  );
}
