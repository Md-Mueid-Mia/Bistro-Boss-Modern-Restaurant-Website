import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center pb-12 md:w-5/12 mx-auto'>
            <p className='text-[#D99904] py-3'>{subHeading}</p>
            <h3 className='text-xl md:text-3xl uppercase py-4 border-y-4 '>{heading}</h3>
        </div>
    );
};

export default SectionTitle;