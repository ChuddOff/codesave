'use client'
import React, {useState} from 'react';

interface ModalProps {
    show: boolean;
}

const Modal: React.FC<ModalProps> = ({show}) => {


    if (!show) {
        return null;
    } else
        return (
            <div className='fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm'>
                <div
                    className={` gap-[30px] p-[50px] rounded-[50px] border-[9px] border-solid border-[#ff6359] bg-[#c6c6c6] flex flex-col items-center w-[538px] h-[696px]`}>
                    <form className={`flex flex-col gap-[10px] w-[420px]`}>
                        <h2 className={`font-bold text-[48px] text-center`}>Save</h2>
                        <h3 className={`text-[36px] text-center font-semibold`}>Укажите настройки</h3>
                        <input placeholder={`Название`} type="text"
                               className={`rounded-[20px] border-[3px] border-black py-[10px] pl-[5px] rounded-[10pxS] text-[18px] text-orange'`}/>
                        <textarea className='rounded-[20px] border-[3px] border-black py-[10px] pl-[5px]' name="111"
                                  id="" cols="30"
                                  rows="3"
                                  placeholder={`Описание`}></textarea>
                        <button
                            type='submit'
                            className={`w-[420px] rounded-[20px] px-[50px] py-[20px] text-violet border-[3px] border-black text-[36px] text-center font-semibold`}>
                            Сохранить
                        </button>
                    </form>

                </div>
            </div>

        );
};

export default Modal;