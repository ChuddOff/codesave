// 'use client'

import React from 'react';

interface Item {
    name: string,
    description: string,
    show: boolean,
    author: string,
    html: string,
    css: string,
    js: string
}

async function getData() {
    const url = process.env.URL
    const response = await fetch(url + '/api/allCodes')
    console.log(response)

    return response.json()
}

const Code = async () => {
    const codes: Item[] = await getData()

    return (

        <div className='py-[70px] h-full'>
            <h2 className="text-center font-semibold text-violet text-6xl">Изобретения нашего сообщества!</h2>
            {codes.map((item, index) => (
                <div key={index}>
                    <h2>{item.name}</h2>
                    <h3>{item.description}</h3>
                </div>
            ))}
        </div>
    );
};

export default Code;