/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import HeaderTitle from '../../../layouts/shared/HeaderTitle';
import ImageZoom from '../../../layouts/shared/ImageZoomHoverEffect';
import menu1 from './assets/Rectangle 552.png';
import resturant from './assets/Rectangle 553.png';
import menu2 from './assets/Rectangle 554.png';

const Category = () => {
    return (
        <div className="pt-10 lg:pt-20 md:pt-20">
            <HeaderTitle title="MENU CATEGORY" />
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                <a href="#menuveg" className="relative bg-[#F6BA44] rounded-xl pb-6 mb-6">
                    <ImageZoom>
                        <img className="w-full h-[440px] duration-500 transition-all ease-linear hover:scale-110" src={menu1} alt="wedding-img" />
                    </ImageZoom>
                    <h1 className="pt-4 text-center text-white font-semibold tracking-wider text-xl my-auto">MENU (VEG)</h1>
                </a>

                <a href="" className="relative bg-[#F6BA44] rounded-xl pb-6 mb-6">
                    <ImageZoom>
                        <img className="w-full h-[440px] duration-500 transition-all ease-linear hover:scale-110" src={resturant} alt="product-img" />
                    </ImageZoom>
                    <h1 className="pt-4 text-center text-white font-semibold tracking-wider text-xl my-auto">RESTAURANT</h1>
                </a>
                <a href="#menunonveg" className="relative bg-[#F6BA44] rounded-xl pb-6 mb-6">
                    <ImageZoom>
                        <img className="w-full h-[440px] duration-500 transition-all ease-linear hover:scale-110" src={menu2} alt="uiux-img" />
                    </ImageZoom>
                    <h1 className="pt-4 text-center text-white font-semibold tracking-wider text-xl my-auto">MENU (NON-VEG)</h1>
                </a>
            </section>
        </div>
    );
};

export default Category;
