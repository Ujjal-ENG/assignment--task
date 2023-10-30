/* eslint-disable eol-last */
import React from 'react';
import { AiFillMail } from 'react-icons/ai';
import { FaPhoneVolume } from 'react-icons/fa6';
import contactBanner from '../../pages/assets/banner/banner003.png';

const ContactBanner = () => {
    return (
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="bg-[#EFE1C6] grid grid-cols-5 gap-32 justify-center items-center ">
            <div className="col-span-2">
                <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="w-full" src={contactBanner} alt="contactBanner" />
            </div>
            <div className="col-span-3 max-w-3xl">
                <h1 className="text-4xl mb-4 text-center  font-bold tracking-widest">Plan an Unforgettable Experience in Test Resort Today!</h1>
                <p className="text-2xl mb-4 text-center  font-semibold tracking-widest">Test Resort, where you will love to visit again and again</p>
                <p className="text-2xl text-center font-bold tracking-widest">BOOK YOUR STAY NOW</p>
                <div className="bg-[#1F1F1F] text-[#F6BA44] font-semibold flex gap-10 w-full mt-10 max-w-lg mx-auto px-10 py-6 rounded-2xl">
                    <div>
                        <span className=" text-[white] flex justify-center items-center mb-2">
                            <FaPhoneVolume />
                        </span>
                        <a className="mb-1" href="tel:+917439959439">
                            +880 1798421460
                        </a>{' '}
                        <br />
                        <a href="tel:+91 8100286250">+880 1798421460</a> <br />
                        <a href="tel:+91 7439944308">+880 1798421460</a>
                    </div>
                    <div>
                        <span className="text-[white] flex justify-center items-center mb-2">
                            <AiFillMail />
                        </span>
                        <a href="mailto:info@gharanaresort.com">Email - ujjalroy7862@gmail.com</a> <br />
                        <a href="mailto:gm@gharanaresort.com">Email - ujjalroy7862@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactBanner;
