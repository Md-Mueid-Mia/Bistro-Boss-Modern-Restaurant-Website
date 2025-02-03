import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import featureImg from '../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item text-white  my-20 bg-fixed bg-opacity-40'>
            <div className='w-full h-full bg-black pt-10 bg-opacity-45'>
            <SectionTitle  heading={'FROM OUR MENU'} subHeading={'---Check it out---'}></SectionTitle>
            <div className='md:flex justify-center items-center gap-10 py-10 md:py-20 pt-12 px-8 md:px-36'>
                <div >
                    <img  src={featureImg} alt="" />
                </div>
                <div className='mt-5'>
                    <p>Aug 20, 2024</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nostrum repellat excepturi, commodi dolorum distinctio accusantium cupiditate quis debitis quia quidem sit quas esse voluptatum illum rerum doloribus recusandae error dignissimos placeat tempora culpa ipsam. Odit voluptates totam eius excepturi.</p>
                    <button className='btn btn-outline text-white mt-5 border-0 border-b-4 border-black'>READ MORE</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;