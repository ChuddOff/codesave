"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface CustomCheckboxProps {
  defaultBackground: string; // дефолт цвет
  selectedBackground: string; // цвет фона когда кликнут
  svgColor: string; // цвет галочки
  borderColor: string; // цвет бордера
}

export default function CustomCheckbox({
  defaultBackground,
  selectedBackground,
  svgColor,
  borderColor
}: CustomCheckboxProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="inline-block">
      <label className="inline-flex relative items-center cursor-pointer">
        <motion.div
          animate={
            isPressed
              ? { backgroundColor: selectedBackground }
              : { backgroundColor: defaultBackground }
          }
          className={` w-5 h-5 rounded border-1 border-[${borderColor}] transition-colors duration-300`}
          onClick={() => setIsPressed(!isPressed)}
        >
          <div className="flex items-center justify-center h-full">
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              width={16}
              height={12}
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
        </motion.div>
      </label>
    </div>
  );
}
