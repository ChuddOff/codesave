import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NextUIProvider from "./provider/mainProvider";
import React from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextUIProvider>
        <body className={montserrat.className}>{children}</body>
      </NextUIProvider>
    </html>
  );
}
