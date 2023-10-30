/* eslint-disable object-curly-newline */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const HandleLazyLoading = ({ image, width, height, alt }) => {
    return (
        <div>
            <LazyLoadImage src={image} width={width} height={height} alt={alt || 'Default Image'} effect="blur" />
        </div>
    );
};

export default HandleLazyLoading;
