/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */

import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { FreeMode, Pagination } from 'swiper';
import YoutubeModal from './YoutubeModal';

const TestmonialCard = () => {
    const [link, setLink] = useState('');
    const handleYoutubeVide = (link) => {
        setLink(link);
    };
    return (
        <div className="bg-[#1B627C] relative mb-10">
            <div className="flex md:flex-row flex-col justify-between items-center">
                <div>
                    <h2 className="text-3xl text-center md:text-start md:text-5xl font-semibold tracking-wider px-2 md:px-10 pt-7 md:pt-14 text-white">Client Testimonial</h2>
                </div>
                <div className="px-10 flex justify-center items-center text-white">
                    <h3 className="text-3xl font-bold">Swipe right </h3>
                    <IoIosArrowForward size={34} />
                    <IoIosArrowForward size={34} />
                </div>
            </div>
            <div className="px-4 md:px-20 py-10 mySwiper">
                <Swiper
                    slidesPerView={1}
                    style={{ padding: '50px 10px', overflow: 'hidden' }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50
                        }
                    }}
                    freeMode
                    pagination={{
                        clickable: true
                    }}
                    modules={[FreeMode, Pagination]}>
                    <SwiperSlide>
                        <div className="md:w-96 w-full h-[460px] rounded-2xl relative">
                            <LazyLoadComponent>
                                <img src="https://storage.googleapis.com/fliqaindia_2023/clientTestmonial02.png" alt="avatar" className="object-cover w-full h-full rounded-2xl " />
                            </LazyLoadComponent>

                            <div className="absolute top-3/4 left-2.5">
                                <h1 className="text-xl font-semibold tracking-widest text-white">Abhishek Nigam</h1>
                            </div>
                            <p className="badge p-5 left-2 absolute top-[82%] uppercase text-md font-bold text-[#1B627C] bg-[#D6EDF1]">wedding</p>
                            <label
                                onClick={() => handleYoutubeVide('https://www.youtube.com/watch?v=yVvA76R8i_0')}
                                htmlFor="my_modal_6"
                                type="button"
                                className="btn btn-circle btn-outline absolute top-[78%] right-3 bg-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </label>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:w-96 w-full h-[460px] rounded-2xl relative">
                            <LazyLoadComponent>
                                <img src="https://storage.googleapis.com/fliqaindia_2023/clientTestmonial03.png" alt="avatar" className="object-cover w-full h-full rounded-2xl" />
                            </LazyLoadComponent>

                            <div className="absolute top-3/4 left-2.5">
                                <h1 className="text-xl font-semibold tracking-widest text-white">Jayson Roy</h1>
                            </div>
                            <p className="badge p-5 left-2 absolute top-[82%] uppercase text-md font-bold text-[#1B627C] bg-[#D6EDF1]">pre wedding</p>
                            <label
                                onClick={() => handleYoutubeVide('https://www.youtube.com/watch?v=aK55rsdIdwc')}
                                htmlFor="my_modal_6"
                                type="button"
                                className="btn btn-circle btn-outline absolute top-[78%] right-3 bg-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </label>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:w-96 w-full h-[460px] rounded-2xl relative">
                            <LazyLoadComponent>
                                <img src="https://storage.googleapis.com/fliqaindia_2023/clientTestmonial01.png" alt="avatar" className="object-cover w-full h-full rounded-2xl" />
                            </LazyLoadComponent>

                            <div className="absolute top-3/4 left-2.5">
                                <h1 className="text-xl font-bold uppercase tracking-widest text-white">Aliyna </h1>
                            </div>
                            <p className="badge p-5 left-2 absolute top-[82%] uppercase text-md font-bold text-[#1B627C] bg-[#D6EDF1]">product</p>
                            <label
                                onClick={() => handleYoutubeVide('https://www.youtube.com/watch?v=2AYt-RZdAbE')}
                                htmlFor="my_modal_6"
                                type="button"
                                className="btn btn-circle btn-outline absolute top-[78%] right-3 bg-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </label>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="absolute hidden md:block w-8 h-8 rounded-full bg-white top-28 right-1/2" />
            <div className="absolute hidden md:block w-4 h-4 rounded-full bg-white top-20 right-1/2" />
            <YoutubeModal link={link} />
        </div>
    );
};

export default TestmonialCard;
