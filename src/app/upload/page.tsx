"use client";
import Upload from "@/components/upload/Upload";
import Modal from "@/components/modal/modal";

import React, { useEffect, useRef, useState } from "react";
import { Editor, OnMount } from "@monaco-editor/react";

import "./style.css";
import { Button } from "@nextui-org/button";
import AppEditor from "@/components/editor/Editor";

interface ExtendedDiv extends HTMLDivElement {
  _clientY: number;
  _clientX: number;
  _isResizing: boolean;
}

export default function Home() {
  return (
    <>
      <AppEditor />
    </>
  );
}
