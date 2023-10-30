import React from 'react';

import Category from './Category';
import ImageGrid from './ImageGrid';

const Restaurant = () => {
    return (
        <div data-aos="fade-zoom-in" data-aos-duration="1200" data-aos-delay="400">
            <div className="my-container pt-20">
                <Category />
                <ImageGrid />
            </div>
        </div>
    );
};

export default Restaurant;
