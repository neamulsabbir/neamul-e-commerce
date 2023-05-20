import React from "react";
import { FaHome } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeSidebar, openSidebar } from "../../../State/ActionCreator/ActionCreator";
import BlackWishlistIcon from "../../Icons/BlackWishlistIcon";
import CartIcon from "../../Icons/CartIcon";
import ProfileIcon from "../../Icons/ProfileIcon";
import SidebarCart from "../../Pages/Main/SidebarCart/SidebarCart";

const BottomNavbar = () => {
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
    <div className="sticky bottom-0 bg-white block md:hidden ">
      <div 
        style={{boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"}} 
        className="flex justify-between items-center px-6 mx-auto py-4 ">
        <Link to='/' className="flex flex-col items-center">
          <FaHome className="text-xl"></FaHome>
          <h1 className="text-sm font-semibold">Home</h1>
        </Link>
        <div>
          <Link to="/wishlist" className="flex flex-col items-center">
          <BlackWishlistIcon />
            <h1 className="text-sm font-semibold">Wishlist</h1>
          </Link>
        </div>
        <div onClick={handleSidebar}>
          <Link className="flex flex-col items-center">
            <CartIcon />
            <h1 className="text-sm font-semibold">Cart</h1>
          </Link>
          <SidebarCart />
        </div>
        <div>
          <Link to="signin" className="flex flex-col items-center">
            <ProfileIcon />
            <h1 className="text-sm font-semibold">Profile</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
