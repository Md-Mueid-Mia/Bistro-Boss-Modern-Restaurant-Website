import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaStackExchange, FaUser, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { AiFillShopping } from "react-icons/ai";import { MdContactMail } from "react-icons/md";
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';
const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    // console.log(isAdmin);
    return (
        <div className='flex'>
            <div className='w-[320px] min-h-screen bg-orange-400 pr-14 pl-6'>
                <ul className="menu text-lg">
                    {
                        isAdmin ? <>
                         <li> <NavLink to='/dashboard/adminHome'><FaHome /> Admin Home</NavLink></li>
                         <li> <NavLink to='/dashboard/addItems'><FaUtensils /> Add Items</NavLink></li>
                         <li> <NavLink to='/dashboard/manageItems'><FaList />
                         Manage Items</NavLink></li>
                         <li> <NavLink to='/dashboard/Booking'><FaBook /> Manage Bookings</NavLink></li>
                         <li> <NavLink to='/dashboard/allUsers'><FaUsers /> All Users</NavLink></li>
                    
                        </> : <>
                            <li> <NavLink to='/dashboard/userHome'><FaHome /> User Home</NavLink></li>
                    <li> <NavLink to='/dashboard/payment'><FaCalendar /> Reservation</NavLink></li>
                    <li> <NavLink to='/dashboard/paymentHistory'><FaWallet /> Payment History</NavLink></li>
                    <li> <NavLink to='/dashboard/cart'><FaShoppingCart /> My Cart ({cart.length})</NavLink></li>
                    <li> <NavLink to='/dashboard/review'><FaStackExchange /> Add Review</NavLink></li>
                    <li> <NavLink to='/dashboard/bookings'><FaList /> My Booking</NavLink></li>
                        </>
                    }

                    <div className="divider"></div>
                    <li> <NavLink to='/'><FaHome /> Home</NavLink></li>
                    <li> <NavLink to='/order'><IoMenu /> Menu</NavLink></li>
                    <li> <NavLink to='/order'><AiFillShopping /> Shop</NavLink></li>
                    <li> <NavLink to='/contact'><FaEnvelope /> Contact</NavLink></li>
                </ul>
            </div>
            <div className='flex-1 p-8 md:px-20'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;

// import React, { useState } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaStackExchange, FaUser, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
// import { IoMenu } from "react-icons/io5";
// import { AiFillShopping } from "react-icons/ai";import { MdContactMail } from "react-icons/md";
// import useCart from '../Hooks/useCart';
// import useAdmin from '../Hooks/useAdmin';
// const Dashboard = () => {
//     const [cart] = useCart();
//     const [isAdmin] = useAdmin();
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     // console.log(isAdmin);
//     return (
//         <div className='relative h-screen'>
//              {/* Mobile Toggle Button */}
//              <button 
//                 onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//                 className="fixed top-4 left-4 z-50 p-2 bg-orange-400 rounded-md lg:hidden"
//             >
//                 <IoMenu className="text-2xl" />
//             </button>
//             <div className='flex'>
//                 <div  className={`
//                     fixed lg:static lg:block
//                     w-[320px] min-h-screen bg-orange-400 
//                     pr-14 pl-6 z-40
//                     transform transition-transform duration-300 ease-in-out
//                     ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
//                 `}>
//                 <ul className="menu text-lg pt-16 lg:pt-4">
//                     {
//                         isAdmin ? <>
//                          <li> <NavLink to='/dashboard/adminHome'><FaHome /> Admin Home</NavLink></li>
//                          <li> <NavLink to='/dashboard/addItems'><FaUtensils /> Add Items</NavLink></li>
//                          <li> <NavLink to='/dashboard/manageItems'><FaList />
//                          Manage Items</NavLink></li>
//                          <li> <NavLink to='/dashboard/Booking'><FaBook /> Manage Bookings</NavLink></li>
//                          <li> <NavLink to='/dashboard/allUsers'><FaUsers /> All Users</NavLink></li>
                    
//                         </> : <>
//                             <li> <NavLink to='/dashboard/userHome'><FaHome /> User Home</NavLink></li>
//                     <li> <NavLink to='/dashboard/payment'><FaCalendar /> Reservation</NavLink></li>
//                     <li> <NavLink to='/dashboard/paymentHistory'><FaWallet /> Payment History</NavLink></li>
//                     <li> <NavLink to='/dashboard/cart'><FaShoppingCart /> My Cart ({cart.length})</NavLink></li>
//                     <li> <NavLink to='/dashboard/review'><FaStackExchange /> Add Review</NavLink></li>
//                     <li> <NavLink to='/dashboard/bookings'><FaList /> My Booking</NavLink></li>
//                         </>
//                     }

//                     <div className="divider"></div>
//                     <li> <NavLink to='/'><FaHome /> Home</NavLink></li>
//                     <li> <NavLink to='/order'><IoMenu /> Menu</NavLink></li>
//                     <li> <NavLink to='/order'><AiFillShopping /> Shop</NavLink></li>
//                     <li> <NavLink to='/contact'><FaEnvelope /> Contact</NavLink></li>
//                 </ul>
//                 </div>
//             </div>
//             {/* Main Content */}
//             <div className='flex-1 p-4 lg:p-8 lg:px-20 mt-16 lg:mt-0'>
//                 <Outlet></Outlet>
//             </div>
//               {/* Mobile Overlay */}
//               {isSidebarOpen && (
//                 <div 
//                     className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
//                     onClick={() => setIsSidebarOpen(false)}
//                 />
//             )}
//         </div>
//     );
// };

// export default Dashboard;