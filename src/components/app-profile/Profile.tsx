import React from 'react';

const Profile = () => {
    return (
        <main>
            <h2 className={`font-bold text-[39px] text-center text-violet`}>Ваши личные данные</h2>
            <section className="flex items-center justify-center pt-[50px] gap-[35px]">
                <div className="flex flex-col items-center gap-[35px]">
                    <div className="flex flex-col items-center border-5 border-orange border-solid rounded-[15px]    w-[600px] h-[350px]">
                        <h3>Ваши данные</h3>
                    </div>
                    <div className="flex flex-col items-center border-5 border-orange border-solid rounded-[15px]    w-[600px] h-[350px]">
                        <h3>Фильтры</h3>
                    </div>
                </div>
                <div className="flex flex-col items-center border-5 border-orange border-solid rounded-[15px]     w-[750px] h-[735px]">
                    <h3>Ваш код</h3>
                </div>
            </section>
        </main>
    );
};

export default Profile;