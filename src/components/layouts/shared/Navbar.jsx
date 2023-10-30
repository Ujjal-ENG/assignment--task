/* eslint-disable object-curly-newline */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable spaced-comment */
/* eslint-disable func-names */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useLayoutEffect, useState } from 'react';
import { AiFillMail } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaFacebookF, FaLocationDot, FaPhoneVolume, FaYoutube } from 'react-icons/fa6';

const bar = () => {
    useLayoutEffect(() => {
        let theEnd = 0;
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', function () {
            const scrollTop = window.pageXOffset || this.document.documentElement.scrollTop;
            if (scrollTop > theEnd) {
                navbar.style.top = '-100px';
            } else {
                navbar.style.top = '0px';
            }
            theEnd = scrollTop;
        });
    }, []);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <div className="bg-[#805500] py-2 px-40 text-white flex justify-between">
                <div className="flex gap-16">
                    <p className="flex justify-between items-center gap-2">
                        <span className="border p-1 rounded-full bg-white text-[#805500]">
                            <a href="tel:+880 1798421460">
                                <FaPhoneVolume />
                            </a>
                        </span>
                        <a href="tel:+880 1798421460">+880 1798421460</a>
                    </p>
                    <p className="flex justify-between items-center gap-2">
                        <span className="border p-1 rounded-full bg-white text-[#805500]">
                            <a href="mailto:gm@gharanaresort.com">
                                <AiFillMail />
                            </a>
                        </span>
                        <a href="mailto:gm@gharanaresort.com">Email - ujjalroy7862@gmail.com</a>
                    </p>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <a href="https://www.facebook.com/your_facebook_page" target="_blank" className="border p-1 rounded-full bg-white text-[#805500]" rel="noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.youtube.com/your_youtube_channel" target="_blank" className="border p-1 rounded-full bg-white text-[#805500]" rel="noreferrer">
                        <FaYoutube />
                    </a>
                    <a href="https://www.google.com/maps?q=your_location" target="_blank" className="border p-1 rounded-full bg-white text-[#805500]" rel="noreferrer">
                        <FaLocationDot />
                    </a>
                </div>
            </div>

            <div className="text-lg bg-[#FFE5B4] pt-2 pb-3  mx-auto  w-full shadow-2xl">
                <div className="relative  flex items-center justify-between px-4 lg:px-24 mx-auto">
                    <div className="flex items-center gap-4 ">
                        {/*Website logo */}
                        <a href="#">
                            <img className="h-[60px] w-[80px]" src="https://cc-prod.scene7.com/is/image/CCProdAuthor/mascot-logo-design_P5_720x350?$pjpeg$&jpegSize=200&wid=720" alt="testLogo" />
                        </a>
                    </div>

                    <ul className="items-center text-black text-ellipsis hidden space-x-8 lg:flex">
                        <li>
                            <a href="#" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#room" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Room
                            </a>
                        </li>
                        <li>
                            <a href="#roomcategory" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Room Category
                            </a>
                        </li>
                        <li>
                            <a href="#gallery" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Gallery
                            </a>
                        </li>

                        <li>
                            <a href="#restaurant" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Restaurant
                            </a>
                        </li>
                        <li>
                            <a href="#about-us" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="flex justify-center items-center">
                        <div>
                            <a
                                href="#query-form"
                                className="sign-up bg-[#f0ae2a] font-bold text-black rounded-full px-6 py-3 mx-6 sm:inline-block hidden text-base tracking-wider hover:bg-[#e9bc64] hover:border-0 transition duration-500 ease-in-out transform">
                                Ask
                            </a>
                        </div>
                    </div>

                    {/* Mobile bar Section */}
                    <div className="lg:hidden">
                        {/* Dropdown Open Button */}
                        <button aria-label="Open Menu" title="Open Menu" className="text-black focus:outline-none" onClick={() => setIsMenuOpen(true)}>
                            <FaBars className="w-8" />
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className=" bg-[#ffffff] border rounded shadow-sm pb-8">
                                    {/* Logo & Button section */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex gap-2">
                                            <a href="#" className="inline-flex items-center">
                                                <img
                                                    className="h-[60px] w-[80px]"
                                                    src="https://cc-prod.scene7.com/is/image/CCProdAuthor/mascot-logo-design_P5_720x350?$pjpeg$&jpegSize=200&wid=720"
                                                    alt="testLogo"
                                                />
                                            </a>
                                        </div>
                                        {/* Dropdown menu close button */}
                                        <div>
                                            <button type="button" className="text-black  focus:outline-none" onClick={() => setIsMenuOpen(false)}>
                                                <FaTimes className="w-8 h-8 mt-4 mr-3" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Mobile  Items Section */}
                                    <ul className="space-y-2">
                                        <li>
                                            <a
                                                href="#"
                                                className="block
                             px-4 font-semibold  text-black hover:text-[#1c3b47]">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#room"
                                                className="block
                             px-4 font-semibold  text-black hover:text-[#1c3b47]">
                                                Room
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#gallery"
                                                className="block
                             px-4 font-semibold  text-black hover:text-[#1c3b47]">
                                                Gallery
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#packages"
                                                className="block
                             px-4 font-semibold  text-black hover:text-[#1c3b47]">
                                                Packages
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#restaurant"
                                                className="block
                             px-4 font-semibold  text-black hover:text-[#1c3b47]">
                                                Restaurant
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#event"
                                                className="block
                             px-4 font-semibold  text-black hover:text-[#1c3b47]">
                                                Event
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#contact"
                                                className="block
                             px-4 font-semibold  text-black hover:text-[#1c3b47]">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default bar;
