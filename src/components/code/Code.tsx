import React from 'react';
import useSWR from "swr";
import {log} from "node:util";


const Code = async () => {
    const url = process.env.URL;

    const json = await fetch(`http://localhost:3000/api/allCodes`)

    console.log(json)

    return (

        <div className='py-[70px] h-full'>
            <h2 className="text-center font-semibold text-violet text-6xl">Изобретения нашего сообщества!</h2>
        </div>
    );
};

export default Code;