"use client";

import { Spinner } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`rounded-[20px] ${
        pending ? "cursor-not-allowed opacity-25" : ""
      } text-center max-w-max ml-auto flex items-center bg-success-400 text-black shadow-xl py-[10px] px-[20px]`}
    >
      <p className="mr-2">Сохранить</p>
      {pending ? (
        <Spinner
          size="sm"
          classNames={{
            circle1: "border-b-black",
            circle2: "border-b-black",
          }}
        />
      ) : null}
    </button>
  );
}
