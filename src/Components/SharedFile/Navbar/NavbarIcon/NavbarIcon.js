import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSidebar,
  openSidebar,
} from "../../../../State/ActionCreator/ActionCreator";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import WishlistIcon from "../../../Icons/WishlistIcon";
import CartIcon from "../../../Icons/CartIcon";
import ProfileIcon from "../../../Icons/ProfileIcon";
import WishlistModal from "../../../Pages/Main/Wishlist/WishlistModal/WishlistModal";
import SidebarCart from "../../../Pages/SidebarCart/SidebarCart";

const NavbarIcon = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const handleSidebar = () => {
    if (isOpen) {
      dispatch(closeSidebar());
    } else {
      dispatch(openSidebar());
    }
  };
  
  return (
    <div className="hidden md:block">
      <div className="flex justify-between items center ml-8 font-semibold">
        <Link to="/" className="mr-8">
          <FaHome className="text-2xl"></FaHome>
        </Link>

        <div className="mr-8">
          <label htmlFor="wishlist-product">
            <WishlistIcon />
          </label>
          <WishlistModal />
        </div>
        <div onClick={handleSidebar} className="mr-8">
          <CartIcon />
          <SidebarCart />
        </div>

        <Link to="signin" className="flex">
          <ProfileIcon />
          <h1>SignIn</h1>
        </Link>
      </div>
    </div>
  );
};

export default NavbarIcon;
