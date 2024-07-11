import React from "react";
import { Input } from "@nextui-org/react";
import Image from "next/image";

interface SearchProps {
  input: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ input }) => {
  return (
    <Input
      classNames={{
        base: "max-w-full sm:max-w-[10rem] h-10 ",
        mainWrapper: "h-full ",
        input: "text-small bg-transparent ",
        inputWrapper:
          "h-full font-normal text-default-500 bg-[#D5D5FF] data-[hover=true]:bg-[#C6C6FF] group-data-[focus=true]:bg-[#C6C6FF] !cursor-text",
      }}
      label="Search"
      size="sm"
      //   startContent={
      //     <Image src="search.svg" alt="search" width={26.49} height={27.11} />
      //   }
      type="search"
      onChange={(e) => input(e.target.value)}
    />
  );
};

export default Search;
