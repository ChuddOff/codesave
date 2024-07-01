import React from 'react';
import {Input} from "@nextui-org/react";
import Image from "next/image";

const Search = () => {
    return (
        <Input
            classNames={{
                base: "max-w-full sm:max-w-[10rem] h-10 ",
                mainWrapper: "h-full ",
                input: "text-small bg-transparent ",
                inputWrapper: "h-full font-normal text-default-500 bg-[#D5D5FF] data-[hover=true]:bg-[#C6C6FF] group-data-[focus=true]:bg-[#C6C6FF] !cursor-text",
            }}

            placeholder="Search"
            size="sm"
            startContent={<Image src='search.svg' alt="search" width={26.49} height={27.11}/>}
            type="search"
        />
    );
};

export default Search;