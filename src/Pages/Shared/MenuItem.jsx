import React from 'react';

const MenuItem = ({item}) => {
    const {image, price, name, recipe} = item || {};
    return (
        <div className='flex flex-col md:flex-row justify-center items-center mb-6 md:my-0 space-x-4 p-6 md:p-0'>
           <img style={{borderRadius: '0 200px 200px 200px'}} className='w-32  mb-4 md:mb-0' src={image} alt="" />
           <div>
            <h3 className='title-font text-xl'>{name}-------------</h3>
            <p>{recipe}</p>
           </div>
           <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;