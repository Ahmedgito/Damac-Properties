import React from 'react';
import LogoImg from "../assets/images/section1/logo.svg";
import BgImg from '../assets/images/section4/bg.webp';
import MobBgImg from '../assets/images/section4/mob_bg.webp';

const TowerPromo = () => {
    return (
        <>
            {/* Desktop / Tablet View */}
            <section
                className="hidden md:flex relative items-center justify-center min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${BgImg})` }}
            >
                <div className="bg-[#7c7f86]/90 backdrop-blur-md rounded-2xl max-w-lg w-[90%] md:w-[40%] text-center shadow-xl min-h-[400px] flex flex-col items-center justify-center p-8 md:p-10 space-y-6">
                    <img
                        src={LogoImg}
                        alt="Logo"
                        className="h-14 md:h-24 object-contain"
                    />
                    <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                        FIND YOUR HOME<br />IN THE TOWER
                    </h1>
                    <button className="bg-white text-gray-800 font-medium px-6 py-3 rounded-full hover:bg-gray-100 transition">
                        EXPLORE IN 3D
                    </button>
                </div>
            </section>

            {/* Mobile View */}
            <section
                className="md:hidden relative flex flex-col justify-between items-center min-h-screen bg-cover bg-center text-center px-6 py-8"
                style={{ backgroundImage: `url(${MobBgImg})` }}
            >
                {/* Logo at the top */}
                <img
                    src={LogoImg}
                    alt="Logo"
                    className="h-22 mt-12 object-contain mb-6"
                />

                {/* Spacer to push text/button to bottom */}
                <div className="flex-grow" />

                {/* Text and Button */}
                <div>
                    <h1 className="text-2xl font-bold text-white tracking-wide mb-4">
                        FIND YOUR HOME<br />IN THE TOWER
                    </h1>
                    <button className="bg-white text-gray-800 font-medium px-6 py-3 rounded-full hover:bg-gray-100 transition">
                        EXPLORE IN 3D
                    </button>
                </div>
            </section>

        </>
    );
};

export default TowerPromo;
