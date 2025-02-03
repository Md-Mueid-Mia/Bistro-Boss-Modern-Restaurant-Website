import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Footer/Navbar';

const Main = () => {
    return (
        <div className=''>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;