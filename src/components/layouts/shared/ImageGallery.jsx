/* eslint-disable object-curly-newline */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageGallery = ({ img1, img2, img3, img4, img5, img6 }) => {
    return (
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            <section className="text-gray-600 body-font">
                <div className=" px-5 pt-12 pb-10 mx-auto flex flex-wrap">
                    <div>
                        <div className="grid grid-cols-3 gap-6 mb-2">
                            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="col-span-1">
                                <LazyLoadImage alt="gallery" effect="blur" className="object-cover h-96 object-center block rounded-xl" src={img1} width="100%" height="100%" />
                            </div>
                            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="col-span-1">
                                <LazyLoadImage alt="gallery" effect="blur" className="object-cover h-96 object-center block rounded-xl" src={img2} width="100%" height="100%" />
                            </div>
                            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="col-span-1">
                                <LazyLoadImage alt="gallery" effect="blur" className="object-cover h-96 object-center block rounded-xl" src={img3} width="100%" height="100%" />
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="grid grid-cols-3 gap-6 mb-2">
                            <div className="col-span-1">
                                <LazyLoadImage alt="gallery" effect="blur" className="object-cover h-96 object-center block rounded-xl" src={img4} width="100%" height="100%" />
                            </div>
                            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="col-span-1">
                                <LazyLoadImage alt="gallery" effect="blur" className="object-cover h-96 object-center block rounded-xl" src={img5} width="100%" height="100%" />
                            </div>
                            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="col-span-1">
                                <LazyLoadImage alt="gallery" effect="blur" className="object-cover h-96 object-center block rounded-xl" src={img6} width="100%" height="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ImageGallery;
