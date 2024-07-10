import Code from "@/components/code/Code";
import Link from "next/link";
import React from "react";

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

async function getData() {
  const url = process.env.URL;
  const response = await fetch(url + "/api/allCodes", {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  console.log(response);

  return response.json();
}

export default async function Home() {
  const codes: Item[] = await getData();

  return (
    <div className="py-[70px] h-full">
      <h2 className="text-center font-semibold text-violet text-6xl">
        Изобретения нашего сообщества!
      </h2>
      <div className="flex gap-[50px] justify-center mt-[70px] w-[100%] flex-wrap">
        {codes.map(
          (item, index) =>
            item.show && (
              <Link key={index} href={"/upload/" + item._id}>
                <div className="bg-violet rounded-[20px] w-[400px] flex flex-col">
                  <div className={`w-[100%] bg-amber-400 h-[150px] rounded-t-[20px] text-[40px] flex justify-center items-center`}>Preview</div>
                  <div className={`flex flex-col gap-[10px] pb-[30px] items-center`}>
                    <h2 className={`text-center text-[30px] text-white font-semibold p-[15px]`}>{item.name}</h2>
                    <hr width="80%"/>
                    <p className={`w-100% text-[20px] text-white px-[20px]`}>{item.description}</p>
                  </div>
                </div>
              </Link>
              )
        )}
      </div>
    </div>
  );
}
