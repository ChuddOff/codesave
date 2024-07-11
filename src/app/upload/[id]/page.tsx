"use client";

import "./style.css";
import AppEditor from "@/components/editor/Editor";
import { SignedIn, SignedOut, SignInButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

interface BodyCode {
  code: {
    _id: string;
    name: string;
    description: string;
    show: boolean;
    author: string;
    html: string;
    css: string;
    js: string;
  };
  status: number;
}

interface Props {
  params: {
    id: string;
  };
}

async function getData(id: string, author: string) {
  const response = await fetch(`/api/code?_id=${id}&author=${author}`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  return response.json();
}

export default function Home({ params: { id } }: Props) {
  const { user } = useUser();

  const [data, setData] = useState<BodyCode>();

  useEffect(() => {
    getData(id, user?.id || "").then((data) => {
      setData(data);
    });
  }, [user?.id]);
  console.log(data?.code);

  return (
    <>
      <SignedOut>
        <div className="flex flex-col justify-center items-center w-full h-[calc(100vh-130px)] gap-10">
          <h3 className="text-3xl font-bold">Для доступа войдите в аккаунт.</h3>
          <SignInButton className={"text-violet text-3xl font-bold"} />
        </div>
      </SignedOut>
      <SignedIn>
        {data && data.status !== 403 && (
          <AppEditor
            htmlp={data.code.html}
            cssp={data.code.css}
            jsp={data.code.js}
            namep={data.code.name}
            descriptionp={data.code.description}
            edit={data.code._id}
          />
        )}
        {data && data.status === 403 && <h1>234</h1>}
      </SignedIn>
    </>
  );
}
