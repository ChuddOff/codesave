"use client";
import Upload from "@/components/upload/Upload";
import Modal from "@/components/modal/modal";

import React, { useEffect, useRef, useState } from "react";
import { Editor, OnMount } from "@monaco-editor/react";

import "./style.css";
import { Button } from "@nextui-org/button";
import AppEditor from "@/components/editor/Editor";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

interface ExtendedDiv extends HTMLDivElement {
  _clientY: number;
  _clientX: number;
  _isResizing: boolean;
}

export default function Home() {
  return (
    <>
      <SignedOut>
        <div className="flex flex-col justify-center items-center w-full h-[calc(100vh-130px)] gap-10">
          <h3 className="text-3xl font-bold">Для доступа войдите в аккаунт.</h3>
          <SignInButton>
            <button className={"text-violet text-3xl font-bold"}>
              Sign in
            </button>
          </SignInButton>
        </div>
      </SignedOut>
      <SignedIn>
        <AppEditor />
      </SignedIn>
    </>
  );
}
