/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
import React from 'react';
import OurStory from './OurStory';
import Teams from './Teams';

const AboutUs = () => {
    return (
        <div>
            <div className="relative">
                <img className="w-full h-[360px]" src="https://images.pexels.com/photos/261204/pexels-photo-261204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="banner-image" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
                <h2 className="text-3xl font-semibold absolute bottom-1/4 left-1/2 transform -translate-x-1/2 uppercase text-black tracking-[8px]">About Us</h2>
            </div>
            <OurStory />
            <Teams />
        </div>
    );
};

export default AboutUs;
