import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import banner from "../../../../Images/banner3.png";
import CartTotal from "./CartTotal/CartTotal";
import SidebarCartPrice from "../SidebarCart/SidebarCartPrice/SidebarCartPrice";
import SidebarCartQuantity from "../SidebarCart/SidebarCartQuantity/SidebarCartQuantity";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <div>
      <img className="w-full" src={banner} alt="" />
      <div className="my-10 w-11/12 mx-auto">
        <div style={{
          boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
        }} className="grid sm:grid-cols-3 lg:grid-cols-4 gap-10 items-center p-8 sm:p-14  rounded-md">
          {cartItems.map((cart) => (
            <div className="">
              <img
                className="border border-gray-300 rounded-t-md"
                src={cart?.image}
                alt=""
              />
              <div className="mt-3">
                <h1 className="text-lg font-semibold w-full h-12">
                  {cart?.title}
                </h1>
                <SidebarCartPrice cart={cart}></SidebarCartPrice>
                <SidebarCartQuantity cart={cart}></SidebarCartQuantity>
              </div>
            </div>
          ))}
        </div>
      <CartTotal></CartTotal>
      <Link
        className="bg-black text-white font-semibold py-3 px-4 "
        to="/checkout"
      >
        PROCEED TO CHECKOUT
      </Link>
      </div>
    </div>
  );
};

export default Cart;
