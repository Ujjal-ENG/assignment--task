import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Footer = () => {
    const handleClick = () => {
        Swal.fire({
            title: 'Coming Soon',
            text: 'This feature is under development.',
            icon: 'info',
            confirmButtonText: 'Got it!'
        });
    };
    return (
        <footer className="p-10 mx-auto text-[#FFFFFF] bg-[#1C1C1C] text-xl">
            {/* First Row for Logo and Social Icons */}
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md-4">
                {/* Logo Icon */}
                <div className="mb-4 md:mb-0">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl8lIMmuMwFj3gwp9gyjvs_ymzZZBXFyJ4gvymNbPreg&s" alt="Logo" className="w-[190px] h-[60px]" />
                </div>

                {/* Social Icons */}
                <div className="flex flex-wrap items-center space-x-4 md:space-x-6 mb-4 md:mb-0">
                    <a href="https://www.facebook.com/test" target="_blank" className="link link-hover" rel="noreferrer">
                        <FaFacebook className="text-3xl hover:text-[#0866FF] transition duration-500 ease-in-out transform hover:scale-110 focus:scale-95"> </FaFacebook>
                    </a>
                    <a href="https://twtr.oia.bio/jrpwg" target="_blank" className="link link-hover" rel="noreferrer">
                        <FaTwitter className="text-3xl hover:text-[#199DF0]  transition duration-500 ease-in-out transform hover:scale-110 focus:scale-95"> </FaTwitter>
                    </a>
                    <a href="https://yt.oia.bio/wcq0o" target="_blank" className="link link-hover" rel="noreferrer">
                        <FaYoutube className="text-3xl hover:text-[#F70101]  transition duration-500 ease-in-out transform hover:scale-110 focus:scale-95"> </FaYoutube>
                    </a>
                    <a href="https://insta.oia.bio/dt3na " target="_blank" className="link link-hover " rel="noreferrer">
                        <FaInstagram className="text-3xl hover:text-[#B028AB]  transition duration-500 ease-in-out transform hover:scale-110 focus:scale-95"> </FaInstagram>
                    </a>
                    <a href="https://linkedin.oia.bio/52lzz" target="_blank" className="link link-hover" rel="noreferrer">
                        <FaLinkedin className="text-3xl hover:text-[#0B63BD]  transition duration-500 ease-in-out transform hover:scale-110 focus:scale-95"> </FaLinkedin>
                    </a>
                    <a href="https://wa.oia.bio/r6a9o" target="_blank" className="link link-hover" rel="noreferrer">
                        <FaWhatsapp className="text-3xl hover:text-[#29AD17]  transition duration-500 ease-in-out transform hover:scale-110 focus:scale-95"> </FaWhatsapp>
                    </a>
                    <a href="https://oia.bio/o2zxt" target="_blank" className="link link-hover" rel="noreferrer">
                        <FaPinterest className="text-3xl hover:text-[#B7081B]  transition duration-500 ease-in-out transform hover:scale-110 focus:scale-95"> </FaPinterest>
                    </a>
                    {/* Rest of the icons */}
                </div>
                <div className="relative">
                    <input type="text" placeholder="Email Address" className="input input-bordered w-full pr-36 rounded-md py-2" />
                    <button onClick={handleClick} className="btn  bg-[#42ABBE] absolute top-0 right-0 rounded-l-none rounded-r-md p-2">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Horizontal line */}
            <hr className="my-4" />

            {/* Second Row with Grid for the rest of the footer content */}
            <div className="pt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {/* First column */}
                <div>
                    <span className="text-white font-bold text-3xl">Information</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 pt-3">
                        <div>
                            <div>
                                <a href="/branding" className="link link-hover">
                                    Branding
                                </a>
                            </div>
                            <div>
                                <a href="/design" className="link link-hover">
                                    Design
                                </a>
                            </div>
                            <div>
                                <a href="/marketing" className="link link-hover">
                                    Marketing
                                </a>
                            </div>
                            <div>
                                <a href="/advertisement" className="link link-hover">
                                    Advertisement
                                </a>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a href="/about-us" className="link link-hover">
                                    About us
                                </a>
                            </div>
                            <div>
                                <a href="/contact-us" className="link link-hover">
                                    Contact
                                </a>
                            </div>
                            <div>
                                <a href="/jobs" className="link link-hover">
                                    Jobs
                                </a>
                            </div>
                            <div>
                                <a href="/press" className="link link-hover">
                                    Press kit
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second column */}
                <div>
                    <span className="text-white font-bold text-3xl ">Get the Test app</span>

                    <div className="flex mt-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhFCsuXBtIMH0lmxLgFlAWtGABi1kWgMs-_CXqAQy&s" className="h-[35px]" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfi0T7XeiLDRUedQ_WkPQONnWfZGHhWtuDBThBB9MEcw&s" className="h-[35px] ml-10" alt="" />
                    </div>
                </div>

                {/* Third column */}
                <div>
                    <div className="form-control">
                        <p className="pt-5">Address - 7th Floor, Webel Bhavan Premises, Monibhandar Building, GP Block, Sector V, Bidhannagar, Molakata, Test Bengal 700091</p>
                    </div>
                </div>
            </div>

            {/* Horizontal line */}
            <hr className="my-4" />

            {/* Third Row for Logo and Social Icons */}
            <div className="flex flex-col-reverse md:flex-row md:items-center justify-between mb-4">
                {/* Logo Icon */}
                <div className="mb-4 mt-3 md:mb-0">
                    <h2 className="text-2xl">
                        Test
                        <sup>TM</sup>
                    </h2>
                    <p className="pt-3">© 2023 Test Corporation Inc. All rights reserved.</p>
                </div>

                {/* Social Icons */}
                <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                    <a href="/terms-&-conditions" className="link link-hover">
                        Terms & Conditions
                    </a>
                    <a href="/cookies" className="link link-hover">
                        Cookies
                    </a>
                    <a href="/partner" className="link link-hover">
                        Want to be Partner?
                    </a>
                    <a href="/about-us" className="link link-hover">
                        About Us
                    </a>
                    <a href="/jobs" className="link link-hover">
                        Join Our Team
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
