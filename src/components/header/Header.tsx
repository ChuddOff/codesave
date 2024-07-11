"use client";

import React, { useState } from "react";
import {
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Search from "@/components/search/Search";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { redirect, useRouter } from "next/navigation";

const Header = () => {
  const { user } = useUser();
  const router = useRouter();

  const [input, setInput] = useState<string>("");

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log(2323);
      router.push(`/code/${input}`);
    }
  };

  return (
    <Navbar maxWidth="full" isBordered={true} className="select-none">
      <NavbarBrand>
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={44.23} height={41.49} />
          <h1 className="font-black text-4xl text-center">
            <span className="text-violet">Code</span>
            <span className="text-orange">Save</span>
          </h1>
        </Link>
      </NavbarBrand>

      <NavbarContent as="div" className="items-center gap-10" justify="end">
        <div onKeyDown={onKeyPress}>
          <Search input={setInput} />
        </div>

        <NavbarItem>
          <Link className={"text-violet"} href="/code">
            Code
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={"text-violet"} href="/upload">
            Upload
          </Link>
        </NavbarItem>
        <NavbarItem>
          <SignedOut>
            <SignInButton className={"text-violet font-[700]"} />
          </SignedOut>
          <SignedIn>
            <div className={"flex gap-3"}>
              <UserButton />
              <Link className={"text-violet uppercase"} href="/profile">
                {user?.username}
              </Link>
            </div>
          </SignedIn>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
