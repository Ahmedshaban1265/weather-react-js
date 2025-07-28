import React from "react";
import logo from "../assets/images/logo.png"

export default function Navbar() {
    return (
        <nav className="bg-[#1E202B] shadow-md  top-0 left-0 right-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center space-x-3 ">
                        <img src={logo} alt="logo" />
                        <h2 className="text-white text-xl ">weather</h2>

                    </div>

                    {/* Menu */}
                    <div className="hidden md:flex space-x-6 text-white">
                        <a href="#" className=" hover:text-blue-600 transition duration-300">
                            Home
                        </a>
                        <a href="#" className=" hover:text-blue-600 transition duration-300">
                            News
                        </a>
                        <a href="#" className=" hover:text-blue-600 transition duration-300">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
