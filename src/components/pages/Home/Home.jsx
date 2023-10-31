import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';
import Gallery from './Gallery/Gallery';
import Header from './Header/Header';
import Restaurant from './Restaurant/Restaurant';
import OurRooms from './Rooms/OurRooms';
import Testmonials from './Testmonial/Testmonials';

const Home = () => {
    return (
        <div>
            <Header />
            <div id="room" className="mt-10">
                <OurRooms />
            </div>
            <div id="gallery">
                <Gallery />
            </div>
            <div id="restaurant">
                <Restaurant />
            </div>
            <div id="testmonials">
                <Testmonials />
            </div>
            <div id="about-us">
                <AboutUs />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
