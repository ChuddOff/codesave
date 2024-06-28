import React from 'react';
import {Link} from "@nextui-org/react";

const Footer = () => {
    return (
        <footer className='h-[156px] w-[100%] px-[40px] flex items-center gap-[33px] bg-[#6A6A6A]'>
            <nav className='flex flex-col gap-[15px]'>
                <ul><Link href='https://www.youtube.com/@chudd_off' className='text-white'>YouTube</Link></ul>
                <ul><Link href='https://t.me/chudd_off' className='text-white'>Telegram</Link></ul>
                <ul><Link href='https://t.me/chudd_off' className='text-white'>L1ghttt&ChuddOff</Link></ul>
            </nav>
            <nav className='flex flex-col gap-[15px]'>
                <ul><Link href='https://www.youtube.com/@chudd_off' className='text-white'>Code →</Link></ul>
                <ul><Link href='https://t.me/chudd_off' className='text-white'>Upload →</Link></ul>
                <ul><Link href='https://t.me/chudd_off' className='text-white'>Profile →</Link></ul>
            </nav>
        </footer>
    );
};

export default Footer;