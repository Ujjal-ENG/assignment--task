/* eslint-disable react/jsx-indent-props */
/* eslint-disable max-len */
import React from 'react';
import HandleLazyLoading from '../../../layouts/shared/HandleLazyLoading';

const OurStory = () => {
    return (
        <div className="my-container grid grid-cols-1 md:grid-cols-2 justify-items-center">
            <div className="">
                <h3 className="text-xl md:text-2xl xl:text-3xl text-[#1B627C] font-semibold">Our Story -</h3>
                <p className="text-lg md:text-xl tracking-wider font-semibold my-3 space-y-1">
                    Test is one of the leading creative platforms in Australian where you can get everything under one roof. We have a team of experts for different types of photography and
                    cinematography, whether it could be wedding photography or cute baby portrait. We are blessed to witness and preserve the magical moments that unfold. With each click, we freeze
                    emotions, stolen glances, and heartfelt exchanges, encapsulating the essence of love. We started our journey in Dubline in the year 2019 as a Professional Wedding photography team,
                    Gradually Austris is making footprints in other sections like Event management, and graphic designing, also started Photography courses and other courses .
                </p>
            </div>
            <div className="w-11/12 h-20">
                <HandleLazyLoading image="https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="100%" height="100%" alt="office-1" />
            </div>
        </div>
    );
};

export default OurStory;
