/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/order */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-quotes */
/* eslint-disable eol-last */
import React from 'react';
import roomImg01 from '../../assets/room01.png';
import roomImg02 from '../../assets/room02.png';
import roomImg03 from '../../assets/room03.png';
import roomImg04 from '../../assets/room04.png';
import roomImg05 from '../../assets/room05.png';
import roomImg06 from '../../assets/room06.png';
import RoomCategory from '../Room/RoomCategory';

const OurRooms = () => {
    return (
        <>
            <div className="bg-[#F6BA44] py-20 px-28">
                <h1 className="font-bold tracking-[2px] text-2xl mb-8 text-center">OUR ROOMS</h1>
                <section className="grid gap-10 lg:gap-20 lg:grid-cols-3">
                    <div>
                        <h2 className="text-xl font-bold text-center mb-4 tracking-[4px]">COTTAGE</h2>
                        <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="w-full rounded-xl" src={roomImg01} alt="room-img" />
                        <div className="flex justify-center mt-6">
                            <button type="button" className="check-btn">
                                CHECK DETAILS
                            </button>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-center mb-4 tracking-[4px]">SUPER DELUXE</h2>
                        <img data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="w-full rounded-xl" src={roomImg02} alt="room-img" />
                        <div className="flex justify-center mt-6">
                            <button type="button" className="check-btn">
                                CHECK DETAILS
                            </button>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-center mb-4 tracking-[4px]">DELUXE</h2>
                        <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="w-full rounded-xl" src={roomImg03} alt="room-img" />
                        <div className="flex justify-center mt-6">
                            <button type="button" className="check-btn">
                                CHECK DETAILS
                            </button>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-center mb-4 tracking-[4px]">EXECUTIVE</h2>
                        <img data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="w-full rounded-xl" src={roomImg04} alt="room-img" />
                        <div className="flex justify-center mt-6">
                            <button type="button" className="check-btn">
                                CHECK DETAILS
                            </button>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-center mb-4 tracking-[4px]">FAMILY</h2>
                        <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="w-full rounded-xl" src={roomImg05} alt="room-img" />
                        <div className="flex justify-center mt-6">
                            <button type="button" className="check-btn">
                                CHECK DETAILS
                            </button>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-center mb-4 tracking-[4px]">SUITE</h2>
                        <img data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="w-full rounded-xl" src={roomImg06} alt="room-img" />
                        <div className="flex justify-center mt-6">
                            <button type="button" className="check-btn">
                                CHECK DETAILS
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            <div id="roomcategory">
                <RoomCategory />
            </div>
        </>
    );
};

export default OurRooms;
