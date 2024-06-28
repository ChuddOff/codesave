import React from 'react';
import {Input, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import Image from "next/image";

const Header = () => {
    return (
        <Navbar maxWidth='full' isBordered={true}>
            <NavbarBrand>
                <Link href='/'><Image src="/logo.svg" alt="logo" width={44.23} height={41.49} />
                <h1 className="font-black text-4xl text-center"><span className="text-violet">Code</span><span className="text-orange">Save</span></h1></Link>
            </NavbarBrand>


            <NavbarContent as="div" className="items-center gap-10" justify="end">
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10 ",
                        mainWrapper: "h-full ",
                        input: "text-small bg-transparent ",
                        inputWrapper: "h-full font-normal text-default-500 bg-[#D5D5FF] data-[hover=true]:bg-[#C6C6FF] group-data-[focus=true]:bg-[#C6C6FF] !cursor-text",
                    }}

                    placeholder="Search"
                    size="sm"
                    startContent={<Image src='search.svg' alt="search" width={26.49} height={27.11} />}
                    type="search"
                />

                <NavbarItem>
                    <Link className={'text-violet'} href='/code'>Code</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className={'text-violet'} href='/upload'>Upload</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default Header;