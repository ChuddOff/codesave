import Code from "@/components/code/Code";
import React from "react";

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
    const response = await fetch(url + '/api/allCodes', {
        headers: {
            'Content-Type': 'application/json',
        },
    })

    console.log(response)

    return response.json()
}

export default async function Home() {
    const codes: Item[] = await getData()

    return (

        <div className='py-[70px] h-full'>
            <h2 className="text-center font-semibold text-violet text-6xl">Изобретения нашего сообщества!</h2>
            <div className='flex gap-[50px] justify-center mt-[70px]'>
                {codes.map((item, index) => item.show && (
                    <div key={index} className='bg-violet rounded-[20px] p-[20px] w-[200px]'>
                        <h2>{item.name}</h2>
                        <h3>{item.description}</h3>
                    </div>
                ))}
            </div>

        </div>
    );
}