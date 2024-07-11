"use client";

import React from "react";
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
import { redirect } from "next/navigation";

const Header = () => {
  const { user } = useUser();

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
        <Search />

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
