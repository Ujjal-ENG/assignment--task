/* eslint-disable comma-dangle */
import React from 'react';
import HeaderTitle from '../../../../layouts/shared/HeaderTitle';
import cottage from '../assets/Cottage.png';
import deluxe from '../assets/Deluxe.png';
import executive from '../assets/Executive.png';
import family from '../assets/Family.png';
import suite from '../assets/Suite.png';
import sdeluxe from '../assets/Super deluxe.png';
import LeftCategory from './LeftCategory.jsx';
import RightCategory from './RightCategory.jsx';

const Category = () => {
    const data = [
        {
            id: 1,
            url: '/booking-form',
            img: family,
            title: 'Family',
            capacity: 7,
            price: 11500,
            description:
                'The Family room is designed for big groups of friends and family wanting to stay in the same room. It is well ventilated, can accommodate up to 9 people, and has two full-sized washrooms.'
        },
        {
            id: 2,
            url: '/booking-form',
            img: executive,
            title: 'Executive',
            capacity: 2,
            price: 3000,
            description: 'Executive rooms are the most budget-friendly category among all, come with all basic amenities and a french style window offering a spectacular view.'
        },
        {
            id: 3,
            url: '/booking-form',
            img: sdeluxe,
            title: 'Super deluxe',
            capacity: 2,
            price: 4500,
            description: 'Executive rooms are the most budget-friendly category among all, come with all basic amenities and a french style window offering a spectacular view.'
        },
        {
            id: 4,
            url: '/booking-form',
            img: deluxe,
            title: 'Deluxe',
            capacity: 2,
            price: 4000,
            description: 'Executive rooms are the most budget-friendly category among all, come with all basic amenities and a french style window offering a spectacular view.'
        },
        /* 24*7 Photography */
        {
            id: 5,
            url: '/booking-form',
            img: cottage,
            title: 'Cottage',
            capacity: 2,
            price: 4500,
            description: 'Executive rooms are the most budget-friendly category among all, come with all basic amenities and a french style window offering a spectacular view.'
        },
        {
            id: 6,
            url: '/booking-form',
            img: suite,
            title: 'Suite',
            capacity: 2,
            price: 5000,
            description: 'Executive rooms are the most budget-friendly category among all, come with all basic amenities and a french style window offering a spectacular view.'
        }
    ];

    return (
        <div className="pt-10 lg:pt-20 md:pt-20">
            <HeaderTitle title="ROOM CATEGORY" />
            <RightCategory item={data[0]} />
            <LeftCategory item={data[1]} />
            <RightCategory item={data[2]} />
            <LeftCategory item={data[3]} />
            <RightCategory item={data[4]} />
            <LeftCategory item={data[5]} />
        </div>
    );
};

export default Category;
