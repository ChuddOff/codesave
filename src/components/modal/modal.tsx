'use client'
import React from 'react';

interface ModalProps {
    show: boolean;
}

const Modal:React.FC <ModalProps> = ({show}) => {
    if (!show) {
        return null;
    } else
    return (
        <div className={`gap-[30px] p-[50px] rounded-[50px] border-[9px] border-solid border-[#ff6359] bg-[#c6c6c6] flex flex-col items-center `}>
            <h2 className={`font-bold text-[48px] text-center`}>Save</h2>
            <h3 className={`text-[36px] text-center font-semibold`}>Укажите настройки</h3>
            <form className={`flex flex-col gap-[10px] w-[420px]`}>
                <input placeholder={`Название`} type="text" className={`py-[10px] pl-[5px] rounded-[10pxS] text-[18px] text-orange hover:border-none focus:border-none focus-visible:border-none focus-visible:outline-0'`}/>
                <textarea name="111" id="" cols="30" rows="3" placeholder={`Описание`}></textarea>
            </form>
            <button className={`w-[420px] rounded-[20px] px-[50px] py-[20px] text-violet border-[3px] border-black `}>
                Сохранить
            </button>
        </div>
    );
};

export default Modal;