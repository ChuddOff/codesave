import React from 'react';

const Profile = () => {
    return (
        <main className="">
            <h2>Ваши личные данные</h2>
            <section className="flex flex-col items-center">
                <div>
                    <div>
                        <h3>Ваши данные</h3>
                    </div>
                    <div>
                        <h3>Фильтры</h3>
                    </div>
                </div>
                <div>
                    <h3>Ваш код</h3>
                </div>
            </section>
        </main>
    );
};

export default Profile;