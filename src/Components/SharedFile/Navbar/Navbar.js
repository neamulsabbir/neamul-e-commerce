import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.png";
import BottomNav from "./BottomNav";
import { FaHome } from "react-icons/fa";
import { closeSidebar, openSidebar } from "../../../State/ActionCreator/ActionCreator";
import { useDispatch, useSelector } from "react-redux";
import ECart from "../../Pages/ECart/ECart";
import WishlistModal from "../../Pages/Wishlist/WishlistModal/WishlistModal";

const Navbar = () => {
  
  const isOpen = useSelector(state => state.sidebar.isOpen)
  const dispatch = useDispatch()

  const handleSidebar = () => {
    if(isOpen){
      dispatch(closeSidebar())
    }
    else{
      dispatch(openSidebar())
    }
  }

  return (
    <div className="sticky top-0 z-20">
      <div className="flex justify-between items-center px-7 md:px-20 py-5 bg-white ">
        <div className="flex items-center mr-5 sm:mr-10">
          <Link to='/'>
            <img className="w-full" src={logo} alt="" />
          </Link>
        </div>
        <div className="w-full">
          <input
            className="w-full px-4 py-2 rounded-full border-2 border-black"
            type="search"
            name=""
            placeholder="Search ur Product"
          />
        </div>
        <div className="hidden md:block">
          <div className="flex justify-between items center ml-8 font-semibold">
            <Link to="/" className="mr-8">
              <FaHome className="text-2xl"></FaHome>
            </Link>
            <div className="mr-8">
              <label htmlFor="my-modal-3" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    d="M20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736ZM5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701C17.3397 4.67979 14.9458 4.60806 13.3743 5.98376L9.17157 10.1869L7.75736 8.77264L10.582 5.946L10.5002 5.87701C8.92545 4.61197 6.62322 4.71993 5.17157 6.17157Z"
                    fill="#000"
                  ></path>
                </svg>
              </label>
              <WishlistModal />
            </div>
            <div onClick={handleSidebar} className="mr-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"
                  fill="#000"
                ></path>
              </svg>
            <ECart></ECart>
            </div>
            <Link to="signin" className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
              </svg>
              <h1>SignIn</h1>
            </Link>
          </div>
        </div>
      </div>
      <BottomNav></BottomNav>
    </div>
  );
};

export default Navbar;
