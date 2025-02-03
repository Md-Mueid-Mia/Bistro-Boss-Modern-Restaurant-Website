import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./../../../providers/AuthProvider";
import toast from "react-hot-toast";
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

const Navbar = () => {
  const cart = useCart();
  // console.log(cart[0].length);

  const { user, signOutUser } = useContext(AuthContext);
  const  [isAdmin] = useAdmin()

  const signOut = () => {
    signOutUser().then(() => {
      toast.success("User logged out");
    });
  };

  const links = (
    <>
      <li className="mx-2">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="mx-2">
        <NavLink to={"/menu"}>Our Menu</NavLink>
      </li>
      <li className="mx-2">
        <NavLink to={"/order"}>Our Shop</NavLink>
      </li>
      {
        user && isAdmin && <li className="mx-2">
        <NavLink to={"/dashboard/adminHome"}>Dashboard</NavLink>
      </li>
      }
      {
        user && !isAdmin && <li className="mx-2">
        <NavLink to={"/dashboard/userHome"}>Dashboard</NavLink>
      </li>
      }
      <li className="mx-2">
        <Link to={"/dashboard/cart"}>
          <button className="btn btn-ghost relative">
            <FaCartArrowDown className="text-2xl" />
            {
              cart[0].length > 0 && <span className="badge badge-[#BB8506] absolute top-0 right-0">{cart[0].length}</span>
            }
          </button>
        </Link>
      </li>
      {user ? (
        <li className="mx-2">
          <button className="btn btn-ghost" onClick={signOut}>
            LogOut
          </button>
        </li>
      ) : (
        <li className="mx-2">
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 max-w-7xl mx-auto mt-3 bg-black bg-opacity-40 backdrop-blur-sm text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box bg-slate-400 z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CULINARY CROWN</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* Align navigation items in a single horizontal line */}
          <ul className="menu menu-horizontal px-1 flex items-center">{links}</ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default Navbar;
