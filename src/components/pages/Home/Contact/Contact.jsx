/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable eol-last */
import React from 'react';
import ContactBanner from '../../../layouts/shared/ContactBanner';
import ContactAddress from './ContactAddress';
import GoogleMap from './GoogleMap';
import QueryForm from './QueryForm';

const Contact = () => {
    return (
        <section data-aos="fade-zoom-in" data-aos-duration="1200" data-aos-delay="400">

            <div className="my-container lg:grid grid-cols-2 justify-center items-center">
                <div className="col-span-1 pt-16 lg:pt-28">
                    <ContactAddress />
                    <QueryForm />
                </div>
                <div className="col-span-1">
                    <GoogleMap />
                </div>
            </div>
            <ContactBanner />
        </section>
    );
};

export default Contact;
