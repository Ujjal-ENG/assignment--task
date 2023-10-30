/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable eol-last */
import React, { useState } from 'react';

import HeaderTitle from '../../../layouts/shared/HeaderTitle';
import ImageGallery from '../../../layouts/shared/ImageGallery';
import galleryImage01 from './assets/galleryImg01.png';
import galleryImage02 from './assets/galleryImg02.png';
import galleryImage03 from './assets/galleryImg03.png';
import galleryImage04 from './assets/galleryImg04.png';
import galleryImage05 from './assets/galleryImg05.png';
import galleryImage06 from './assets/galleryImg06.png';
import galleryImage07 from './assets/galleryImg07.png';
import galleryImage08 from './assets/galleryImg08.png';
import galleryImage09 from './assets/galleryImg09.png';
import galleryImage10 from './assets/galleryImg10.png';
import galleryImage11 from './assets/galleryImg11.png';
import galleryImage12 from './assets/galleryImg12.png';
import galleryImage13 from './assets/galleryImg13.png';
import galleryImage14 from './assets/galleryImg14.png';
import galleryImage15 from './assets/galleryImg15.png';
import galleryImage16 from './assets/galleryImg16.png';
import galleryImage17 from './assets/galleryImg17.png';
import galleryImage18 from './assets/galleryImg18.png';
import galleryImage19 from './assets/galleryImg19.png';
import galleryImage20 from './assets/galleryImg20.png';
import galleryImage21 from './assets/galleryImg21.png';
import galleryImage22 from './assets/galleryImg22.png';
import galleryImage23 from './assets/galleryImg23.png';
import galleryImage24 from './assets/galleryImg24.png';

const Gallery = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
    return (
        <div>
            <section className="my-container">
                <div className="">
                    <HeaderTitle title="Gallery" />
                    <div>
                        <ImageGallery img1={galleryImage01} img2={galleryImage02} img3={galleryImage03} img4={galleryImage04} img5={galleryImage05} img6={galleryImage06} />
                    </div>
                    <div>{showMore && <ImageGallery img1={galleryImage07} img2={galleryImage08} img3={galleryImage09} img4={galleryImage10} img5={galleryImage11} img6={galleryImage12} />}</div>
                    <div>{showMore && <ImageGallery img1={galleryImage13} img2={galleryImage14} img3={galleryImage15} img4={galleryImage16} img5={galleryImage17} img6={galleryImage18} />}</div>
                    <div>{showMore && <ImageGallery img1={galleryImage19} img2={galleryImage20} img3={galleryImage21} img4={galleryImage22} img5={galleryImage23} img6={galleryImage24} />}</div>
                    <div className="flex justify-center">
                        <button onClick={toggleShowMore} className=" mt-6 underline underline-offset-8 text-xl font-semibold tracking-widest">
                            {showMore ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
