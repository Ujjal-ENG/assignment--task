/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
import React from 'react';
import OurStory from './OurStory';
import Teams from './Teams';

const AboutUs = () => {
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center">
                About Us
            </h2>
            <OurStory />
            <Teams />
        </div>
    );
};

export default AboutUs;
