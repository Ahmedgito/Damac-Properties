import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { FiSearch, FiHeart } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { HiOutlineMenu, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import Blacklogo from "../../assets/images/black_logo.webp";
import Whitelogo from "../../assets/images/white_logo.webp";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full fixed top-0 left-0 z-50">
            {/* Top Bar - Only for Desktop */}
            <div className="hidden md:block bg-[#222] text-white text-[0.75rem]">
                <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">
                    <div>
                        <span className="mr-4">Language: EN</span>
                        <span>Preferences: AED /Imperial</span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <span className="flex items-center space-x-1">
                            <span>WhatsApp</span>
                            <FaWhatsapp className="text-lg" /> {/* Increased size */}
                        </span>
                        <span className="flex items-center space-x-1">
                            <span>Call us</span>
                            <HiOutlinePhone className="text-lg" /> {/* Increased size */}
                        </span>
                        <span className="flex items-center space-x-1">
                            <span>Get in touch</span>
                            <HiOutlineMail className="text-lg" /> {/* Increased size */}
                        </span>
                    </div>

                </div>
            </div>

            {/* Desktop Navbar */}
            <div
                className={`hidden md:flex transition-all duration-300 ease-in-out ${isScrolled
                        ? "bg-white shadow text-gray-800"
                        : "bg-transparent backdrop-blur-md text-white"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 py-3 w-full flex justify-between items-center">
                    {/* Left */}
                    <div className="flex items-center space-x-8">
                        <img
                            src={isScrolled ? Blacklogo : Whitelogo}
                            alt="Logo"
                            className="h-8 object-contain transition-all duration-300"
                        />
                        <nav
                            className={`flex items-center space-x-6 font-medium ${isScrolled ? "text-gray-800" : "text-white"
                                }`}
                        >
                            <a href="#">Browse Properties</a>
                            <a href="#">About DAMAC</a>
                            <a href="#">DHub</a>
                            <a href="#">Blogs</a>
                        </nav>
                    </div>

                    {/* Right */}
                    <div
                        className={`flex items-center space-x-4 ${isScrolled ? "text-gray-800" : "text-white"
                            }`}
                    >
                        <span>Search</span>
                        <FiSearch className="text-xl" />
                        <FiHeart className="text-xl" />
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div
                className={`md:hidden flex justify-between items-center px-4 py-5 transition-all duration-300 ${isScrolled
                        ? "bg-white shadow text-black"
                        : "bg-transparent backdrop-blur-md text-white"
                    }`}
            >
                {/* Left icons */}
                <div className="flex items-center space-x-4">
                    <HiOutlineMenu className="text-2xl" />
                    <FiSearch className="text-xl" />
                </div>

                {/* Logo */}
                <img
                    src={isScrolled ? Blacklogo : Whitelogo}
                    alt="DAMAC Logo"
                    className="h-8 object-contain"
                />

                {/* Right icons */}
                <div className="flex items-center space-x-4">
                    <HiOutlinePhone className="text-lg" />
                    <HiOutlineMail className="text-xl" />
                </div>
            </div>
        </div>
    );
}
