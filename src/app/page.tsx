import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import logo from '/logo.svg';
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Navbar>
        <NavbarBrand >
          <Image src="/logo.svg" alt="logo" width={44.23} height={41.49} />
          <h1 className="font-black text-4xl text-center"><span className="text-[#5a58ff]">Code</span><span className="text-[#ff6359]">Save</span></h1>
        </NavbarBrand>

    
        <NavbarContent as="div" className="items-center gap-10" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search"
            size="sm"
            startContent={<Image src='search.svg' alt="search" width={26.49} height={27.11} />}
            type="search"
          />

          <NavbarItem>
            <button>Code</button>
          </NavbarItem>
          <NavbarItem>
            <button>Upload</button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <main className="">
      
      </main>
    </>
    
  );
}
