import React from 'react';
import Category from './Category/Category';

const Room = () => {
    return (
        <div data-aos="fade-zoom-in" data-aos-duration="1200" data-aos-delay="400">
            <div className="my-container p-20">
                <Category />
            </div>
        </div>
    );
};

export default Room;
