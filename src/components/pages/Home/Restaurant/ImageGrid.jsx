/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import HeaderTitle from '../../../layouts/shared/HeaderTitle';
import ImageZoom from '../../../layouts/shared/ImageZoomHoverEffect';
import one from './assets/imggrid1.png';
import two from './assets/imggrid2.png';
import three from './assets/imggrid3.png';
import four from './assets/imggrid4.png';

function ImageGrid() {
    return (
        <div>
            <HeaderTitle title="TODAY SPECIAL" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {/* Image 1 */}
                <div className="bg-gray-300 ">
                    <ImageZoom width="100%" height="428px">
                        <img src={one} alt="Image-1" className="w-full h-full md:h-auto duration-500 transition-all ease-linear hover:scale-110" />
                    </ImageZoom>
                </div>

                {/* Image 2 */}
                <div className="bg-gray-300">
                    <ImageZoom width="100%" height="428px">
                        <img src={two} alt="Image-2" className="w-full h-full md:h-auto duration-500 transition-all ease-linear hover:scale-110" />
                    </ImageZoom>
                </div>
            </div>

            <div className=" pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Image 3 */}
                <div className="bg-gray-300 md:h-96">
                    <ImageZoom width="100%" height="428px">
                        <img src={three} alt="Image-3" className="w-full h-full md:h-auto duration-500 transition-all ease-linear hover:scale-110" />
                    </ImageZoom>
                </div>

                {/* Image 4 */}
                <div className="bg-gray-300">
                    <ImageZoom width="100%" height="428px">
                        <img src={four} alt="Image-4" className="w-full h-full md:h-auto duration-500 transition-all ease-linear hover:scale-110" />
                    </ImageZoom>
                </div>
            </div>
        </div>
    );
}

export default ImageGrid;
