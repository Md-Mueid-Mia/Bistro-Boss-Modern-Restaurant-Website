import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import img from "../../assets/home/chef-service2.jpg"
import MenuItem from '../Shared/MenuItem';
import useMenu from '../../Hooks/useMenu';
import { Link } from 'react-router-dom';
const PopularMenu = () => {
    const [menu, ] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular')
   
   
    return (
        <div className='my-'>
            <div className='relative mb-5'>
                <img src={img} alt="" />
                <div className='bg-base-100 hidden md:flex flex-col max-w-6xl text-center absolute p-24  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h2 className= 'text-2xl md:text-5xl mb-3'>CULINARY CROWN</h2>
                    <p className=' leading-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'---Check it out---'}/>

            <div className='grid md:grid-cols-2 gap-5  md:px-16'>
                {popularItems.map((item, index) => <MenuItem key={index} item={item}></MenuItem>)}
            </div>
            <div className='text-center my-6'>
            <button className="btn border-0 bg-base-200 text-[#BB8506] hover:text-[#BB8506] border-b-4 hover:border-b-4 btn-outline border-[#BB8506] hover:border-[#BB8506]">
            <Link to='/order'>View Full  Menu</Link>
        </button>
            </div>
        </div>
    );
};

export default PopularMenu;