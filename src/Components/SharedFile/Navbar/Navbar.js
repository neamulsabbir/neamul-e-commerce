import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.png";
import BottomNav from "./BottomNav";
import NavbarIcon from "./NavbarIcon/NavbarIcon";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-20">
      <div className="flex justify-between items-center px-7 md:px-20 py-5 bg-white ">
        <div className="flex items-center mr-5 sm:mr-10">
          <Link to="/">
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
        <NavbarIcon />
      </div>
      <BottomNav></BottomNav>
    </div>
  );
};

export default Navbar;
