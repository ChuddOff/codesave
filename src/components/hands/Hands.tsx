'use client'

import React from 'react';
import {motion} from "framer-motion";
import Image from "next/image";

const Hands = () => {
    return (
        <div className='flex mt-[150px]'>
            <motion.div
                className='origin-bottom-right translate-x-[180px] translate-y-[-40px]'
                initial={{opacity: 0, rotate: -45, translateX: 180, translateY: -40}}
                animate={{
                    opacity: 1,
                    rotate: 0
                }}
                transition={{duration: 0.7, ease: 'easeOut', delay: 0.5}}>
                <Image src='/hand.png' alt='hand' width={243.24} height={287.07}
                       className='scale-x-[-1]'/>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: -100}}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{duration: 0.7, ease: 'easeOut'}}>
                <h2 className='font-black text-6xl text-orange'>{'<Your Best Code/>'}</h2>
            </motion.div>
            <motion.div
                className='origin-bottom-left translate-x-[180px] translate-y-[-40px]'
                        initial={{opacity: 0, rotate: 45, translateX: -180, translateY: -40}}
                        animate={{
                            opacity: 1,
                            rotate: 0
                        }}
                        transition={{duration: 0.7, ease: 'easeOut', delay: 0.5}}>
                <Image src='/hand.png' alt='hand' width={243.24} height={287.07}/>
            </motion.div>
        </div>
    );
};

export default Hands;