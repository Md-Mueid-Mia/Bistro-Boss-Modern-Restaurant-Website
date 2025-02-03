import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({img, heading, subHeading}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
        className=' h-[300px] md:h-[550px] mb-10'
    >
       <div className="relative mb-5 hidden md:block">
        {/* <img src={img} alt="" className='h-[700px]'/> */}
        <div className="bg-black bg-opacity-50 mt-28 text-white hidden md:flex flex-col max-w-6xl text-center absolute p-24  -top-[60%] left-[50%] translate-x-[-50%] ">
          <h2 className="text-2xl md:text-7xl mb-3 title-font">{heading}</h2>
          <p className=" leading-6 title-font ">
          {subHeading}
          </p>
        </div>
      </div>
    </Parallax>
        
    );
};

export default Cover;