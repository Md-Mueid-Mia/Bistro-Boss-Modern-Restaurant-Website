import React from 'react';
import { FaWallet, FaStore, FaPhone, FaShoppingCart, FaStar, FaCalendarAlt, FaMoneyCheck } from "react-icons/fa";
import useAuth from '../../../Hooks/useAuth';

const UserHome = () => {
    const {user} = useAuth()
    // console.log(user);
    return (
        <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-xl font-bold mb-4">Hi, Welcome Back! {user?.displayName}</h1>
  
        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-5 bg-gradient-to-r from-purple-500 to-purple-300 text-white p-4 rounded-lg shadow">
            <FaWallet className="text-3xl" />
            <div>
              <p className="text-2xl font-bold">205</p>
              <p className="text-sm">Menu</p>
            </div>
          </div>
  
          <div className="flex items-center gap-5 bg-gradient-to-r from-yellow-500 to-yellow-300 text-white p-4 rounded-lg shadow">
            <FaStore className="text-3xl" />
            <div>
              <p className="text-2xl font-bold">103</p>
              <p className="text-sm">Shop</p>
            </div>
          </div>
  
          <div className="flex items-center gap-5 bg-gradient-to-r from-pink-500 to-pink-300 text-white p-4 rounded-lg shadow">
            <FaPhone className="text-3xl" />
            <div>
              <p className="text-2xl font-bold">03</p>
              <p className="text-sm">Contact</p>
            </div>
          </div>
        </div>
  
        {/* Profile and Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Profile Section */}
          <div className="bg-orange-100 p-4 rounded-lg shadow flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full  border-2 border-orange-300 mb-4">
                 <img referrerPolicy='no-referrer' src={user?.photoURL} alt=""  className='z-20'/> 
            </div>
            <h2 className="text-lg font-semibold">{user?.displayName}</h2>
          </div>
  
          {/* Activities Section */}
          <div className="bg-yellow-100 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Your Activities</h2>
            <ul className="space-y-2">
              <li className="text-blue-600 flex items-center">
                <FaShoppingCart className="mr-2" /> Orders: <span className="ml-1">6</span>
              </li>
              <li className="text-green-600 flex items-center">
                <FaStar className="mr-2" /> Reviews: <span className="ml-1">2</span>
              </li>
              <li className="text-orange-600 flex items-center">
                <FaCalendarAlt className="mr-2" /> Bookings: <span className="ml-1">1</span>
              </li>
              <li className="text-red-600 flex items-center">
                <FaMoneyCheck className="mr-2" /> Payment: <span className="ml-1">3</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default UserHome;