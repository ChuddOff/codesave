'use client'

import React, {useEffect, useRef, useState} from "react";
import {Editor, OnMount} from "@monaco-editor/react";

import './style.css'

interface ExtendedDiv extends HTMLDivElement {
    _clientY: number;
    _clientX: number;
    _isResizing: boolean;
}

export default function Home() {

    const resizerRef1 = useRef<ExtendedDiv>(null);
    const resizerRef2 = useRef<ExtendedDiv>(null);
    const resizerRef3 = useRef<ExtendedDiv>(null);

    const editorHTMLRef = useRef<any>(null);
    const editorCSSRef = useRef<any>(null);
    const editorJSRef = useRef<any>(null);

    const firstDivRef = useRef<HTMLDivElement>(null);
    const secondDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const resizer1 = resizerRef1.current;
        const resizer2 = resizerRef2.current;
        const resizer3 = resizerRef3.current;

        if (!resizer1 || !resizer2) return;

        const onmousemoveY = (resizer: ExtendedDiv) => (e: MouseEvent) => {
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
                    top.style.flex = `0 1 ${height < 30 ? 0 : height}px`;
                    firstDivRef.current.style.flex = `0 ${firstDivRef.current.clientHeight}px`;
                    bottom.style.flex = `1 0`;
                } else {
                    top.style.flex = `0 ${height < 30 ? 0 : height}px`;
                    bottom.style.flex = "1 0";
                }
            }

            // bottom
            if (deltaY > 0) {
                const height = Math.round(
                    parseInt(getComputedStyle(bottom).height) - deltaY
                );
                if (bottom.className == "div2") {
                    bottom.style.flex = `0 ${height < 30 ? 0 : height}px`;
                    top.style.flex = "1 0";
                    secondDivRef.current.style.flex = `0 1 ${secondDivRef.current.clientHeight}px`;
                } else {
                    bottom.style.flex = `0 ${height < 30 ? 0 : height}px`;
                    top.style.flex = "1 0";
                }
            }
        };

        const onmousemoveX = (resizer: ExtendedDiv) => (e: MouseEvent) => {
            if (!resizer._isResizing) return;
            e.preventDefault();

            const clientX = e.clientX;
            const deltaX = clientX - resizer._clientX;
            resizer._clientX = clientX;

            const left = resizer.previousElementSibling as HTMLElement;
            const right = resizer.nextElementSibling as HTMLElement;

            // top
            if (deltaX < 0) {
                const height = Math.round(
                    parseInt(getComputedStyle(left).width) + deltaX
                );

                if (left.className == "div2") {
                    left.style.flex = `0 1 ${height < 30 ? 0 : height}px`;
                    firstDivRef.current.style.flex = `0 ${firstDivRef.current.clientHeight}px`;
                    right.style.flex = `1 0`;
                } else {
                    left.style.flex = `0 ${height < 30 ? 0 : height}px`;
                    right.style.flex = "1 0";
                }
            }

            // bottom
            if (deltaX > 0) {
                const height = Math.round(
                    parseInt(getComputedStyle(right).width) - deltaX
                );
                if (right.className == "div2") {
                    right.style.flex = `0 ${height < 30 ? 0 : height}px`;
                    left.style.flex = "1 0";
                    secondDivRef.current.style.flex = `0 1 ${secondDivRef.current.clientHeight}px`;
                } else {
                    right.style.flex = `0 ${height < 30 ? 0 : height}px`;
                    left.style.flex = "1 0";
                }
            }
        };

        const onmousedownY = (resizer: ExtendedDiv) => (e: MouseEvent) => {
            e.preventDefault();
            resizer._isResizing = true;
            resizer._clientY = e.clientY;

            document.addEventListener("mousemove", onmousemoveY(resizer));
            document.addEventListener("mouseup", onmouseupY(resizer));
        };
        const onmousedownX = (resizer: ExtendedDiv) => (e: MouseEvent) => {
            e.preventDefault();
            resizer._isResizing = true;
            resizer._clientX = e.clientX;

            document.addEventListener("mousemove", onmousemoveX(resizer));
            document.addEventListener("mouseup", onmouseupX(resizer));
        };

        const onmouseupY = (resizer: ExtendedDiv) => (e: MouseEvent) => {
            e.preventDefault();
            resizer._isResizing = false;
            document.removeEventListener("mousemove", onmousemoveY(resizer));
            document.removeEventListener("mouseup", onmouseupY(resizer));
        };

        const onmouseupX = (resizer: ExtendedDiv) => (e: MouseEvent) => {
            e.preventDefault();
            resizer._isResizing = false;
            document.removeEventListener("mousemove", onmousemoveX(resizer));
            document.removeEventListener("mouseup", onmouseupX(resizer));
        };

        resizer1.addEventListener("mousedown", onmousedownY(resizer1));
        resizer2.addEventListener("mousedown", onmousedownY(resizer2));
        resizer3.addEventListener("mousedown", onmousedownX(resizer3));

        return () => {
            resizer1.removeEventListener("mousedown", onmousedownY(resizer1));
            resizer2.removeEventListener("mousedown", onmousedownY(resizer2));
            resizer3.removeEventListener("mousedown", onmousedownY(resizer3));
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

    const defaultHtml = '';
    const defaultCss = '';

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
                    <div className="div1" style={{flex: "25%"}} ref={firstDivRef}>
                        <h3 className='uppercase w-full text-center	'>html</h3>
                        <Editor
                            height="100%"
                            width="100%"
                            defaultLanguage="html"
                            defaultValue=""
                            theme="light"
                            loading="One minute..."
                            onMount={handleEditorCSSDidMount}
                            value={html}
                            onChange={(value, event) => setHTML(value || '')}
                        />
                    </div>
                    <div className="resizer-y" ref={resizerRef1}></div>
                    <div className="div2" style={{flex: "25%"}}>
                        <h3 className='uppercase w-full text-center	'>css</h3>
                        <Editor
                            height="100%"
                            width="100%"
                            defaultLanguage="css"
                            defaultValue=""
                            theme="light"
                            loading="One minute..."
                            onMount={handleEditorJSDidMount}
                            value={css}
                            onChange={(value, event) => setCSS(value || '')}
                        />
                    </div>
                    <div className="resizer-y" ref={resizerRef2}></div>
                    <div className="div0" style={{flex: "25%"}} ref={secondDivRef}>
                        <h3 className='uppercase w-full text-center	'>javascript</h3>
                        <Editor
                            height="100%"
                            width="100%"
                            defaultLanguage="javascript"
                            defaultValue=""
                            theme="light"
                            loading="One minute..."
                            onMount={handleEditorHTMLDidMount}
                            value={js}
                            onChange={(value, event) => setJS(value || '')}
                        />
                    </div>
                </div>
                <div className="resizer-x" ref={resizerRef3}></div>
                <div className='w-[75%] h-[75%]'>
                    <iframe ref={iframeRef} className='w-full h-full'/>
                </div>
            </div>
        </div>
    );
}