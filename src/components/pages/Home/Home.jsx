import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Gallery from './Gallery/Gallery';
import Header from './Header/Header';
import Restaurant from './Restaurant/Restaurant';
import OurRooms from './Rooms/OurRooms';

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
            <div id="about-us">
                <AboutUs />
            </div>
        </div>
    );
};

export default Home;
