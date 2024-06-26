import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import logo from '/logo.svg';
import Image from "next/image";
import Profile from "@/components/app-profile/Profile";


export default function Home() {
  return (
    <>

        <Profile/>
    </>
    
  );
}
