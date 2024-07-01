'use client'

import React, {useEffect, useRef, useState} from "react";
import {Editor, OnMount} from "@monaco-editor/react";

export default function Home() {

    const resizerRef1 = useRef<HTMLDivElement>(null);
    const resizerRef2 = useRef<HTMLDivElement>(null);

    const editorHTMLRef = useRef<any>(null);
    const editorCSSRef = useRef<any>(null);
    const editorJSRef = useRef<any>(null);

    const firstDivRef = useRef<HTMLDivElement>(null);
    const secondDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const resizer1 = resizerRef1.current;
        const resizer2 = resizerRef2.current;

        if (!resizer1 || !resizer2) return;

        const onmousemove = (resizer: HTMLDivElement) => (e: MouseEvent) => {
            if (!resizer._isResizing) return;
            e.preventDefault();

            const clientY = e.clientY;
            const deltaY = clientY - resizer._clientY;
            resizer._clientY = clientY;

            const top = resizer.previousElementSibling as HTMLElement;
            const bottom = resizer.nextElementSibling as HTMLElement;

            // top
            if (deltaY < 0) {
                const height = Math.round(
                    parseInt(getComputedStyle(top).height) + deltaY
                );

                if (top.className == "div2") {
                    top.style.flex = `0 1 ${height < 10 ? 0 : height}px`;
                    firstDivRef.current.style.flex = `0 ${firstDivRef.current.clientHeight}px`;
                    bottom.style.flex = `1 0`;
                } else {
                    top.style.flex = `0 ${height < 10 ? 0 : height}px`;
                    bottom.style.flex = "1 0";
                }
            }

            // bottom
            if (deltaY > 0) {
                const height = Math.round(
                    parseInt(getComputedStyle(bottom).height) - deltaY
                );
                if (bottom.className == "div2") {
                    bottom.style.flex = `0 ${height < 10 ? 0 : height}px`;
                    top.style.flex = "1 0";
                    secondDivRef.current.style.flex = `0 1 ${secondDivRef.current.clientHeight}px`;
                } else {
                    bottom.style.flex = `0 ${height < 10 ? 0 : height}px`;
                    top.style.flex = "1 0";
                }
            }
        };

        const onmousedown = (resizer: HTMLDivElement) => (e: MouseEvent) => {
            e.preventDefault();
            resizer._isResizing = true;
            resizer._clientY = e.clientY;

            document.addEventListener("mousemove", onmousemove(resizer));
            document.addEventListener("mouseup", onmouseup(resizer));
        };

        const onmouseup = (resizer: HTMLDivElement) => (e: MouseEvent) => {
            e.preventDefault();
            resizer._isResizing = false;
            document.removeEventListener("mousemove", onmousemove(resizer));
            document.removeEventListener("mouseup", onmouseup(resizer));
        };

        resizer1.addEventListener("mousedown", onmousedown(resizer1));
        resizer2.addEventListener("mousedown", onmousedown(resizer2));

        return () => {
            resizer1.removeEventListener("mousedown", onmousedown(resizer1));
            resizer2.removeEventListener("mousedown", onmousedown(resizer2));
        };
    }, []);

    const handleEditorHTMLDidMount: OnMount = (editor, monaco) => {
        editorHTMLRef.current = editor;
    };

    const handleEditorCSSDidMount: OnMount = (editor, monaco) => {
        editorCSSRef.current = editor;
    };

    const handleEditorJSDidMount: OnMount = (editor, monaco) => {
        editorJSRef.current = editor;
    };

    const defaultHtml =
        "<img class='img' src='https://cdn.discordapp.com/avatars/1189198536001196074/d2c19716eed1cc330b45902c743916e4.webp?size=100'>";
    const defaultCss = `.img { 
    border-radius: 100%
  }
  `;

    const [html, setHTML] = useState(defaultHtml);
    const [css, setCSS] = useState(defaultCss);
    const [js, setJS] = useState("");

    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (iframe) {
            const document = iframe.contentDocument;
            if (document) {
                document.open();
                document.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>${js}<\/script>
          </body>
          </html>
        `);
                document.close();
            }
        }
    }, [html, css, js]);

    return (
        <div className="app">
            <div className="resizable-x">
                <div className="resizable-y" style={{flex: "50%"}}>
                    <div className="div1" style={{flex: "33.33%"}} ref={firstDivRef}>
                        <Editor
                            height="100%"
                            width="100%"
                            defaultLanguage="css"
                            defaultValue=""
                            theme="light"
                            loading="One minute..."
                            onMount={handleEditorCSSDidMount}
                            value={css}
                            onChange={(value, event) => setCSS(value)}
                        />
                    </div>
                    <div className="resizer-y" ref={resizerRef1}></div>
                    <div className="div2" style={{flex: "66.66%"}}>
                        <Editor
                            height="100%"
                            width="100%"
                            defaultLanguage="javascript"
                            defaultValue=""
                            theme="light"
                            loading="One minute..."
                            onMount={handleEditorJSDidMount}
                            value={js}
                            onChange={(value, event) => setJS(value)}
                        />
                    </div>
                    <div className="resizer-y" ref={resizerRef2}></div>
                    <div className="div0" style={{flex: "0 1 99px"}} ref={secondDivRef}>
                        <Editor
                            height="100%"
                            width="100%"
                            defaultLanguage="html"
                            defaultValue=""
                            theme="light"
                            loading="One minute..."
                            onMount={handleEditorHTMLDidMount}
                            value={html}
                            onChange={(value, event) => setHTML(value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}