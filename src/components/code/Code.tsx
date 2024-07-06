'use client'

import React, {useEffect, useState} from 'react';
import useSWR from "swr";

interface Item {
    name: string,
    description: string,
    show: boolean,
    author: string,
    html: string,
    css: string,
    js: string
}


const fetcher = async (): Promise<Item[]> => {
    const res = await fetch('/api/allCodes')
    return res.json()
}
const Code = () => {
    const {data, error, isLoading} = useSWR<Item[]>('code', fetcher);

    console.log(JSON.stringify(data))

    return (

        <div className='py-[70px] h-full'>
            <h2 className="text-center font-semibold text-violet text-6xl">Изобретения нашего сообщества!</h2>
        </div>
    );
};

export default Code;