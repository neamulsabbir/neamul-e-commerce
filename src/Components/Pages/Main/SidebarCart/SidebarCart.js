import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SidebarCartPrice from "./SidebarCartPrice/SidebarCartPrice";
import SidebarCartQuantity from "./SidebarCartQuantity/SidebarCartQuantity";
import SubTotal from "./SubTotal/SubTotal";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import {
  clearFromCart,
  deleteFromCart,
} from "../../../../State/ActionCreator/ActionCreator";
import CloseCircle from "../../../Icons/CloseCircle";
import CloseIcon from "../../../Icons/CloseIcon";

const SidebarCart = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const cartItems = useSelector((state) => state.cart.cart);
  // console.log(cartItems);

  const handleDeleteFromCart = (product) => {
    dispatch(deleteFromCart(product));
  };

  return (
    <div
      style={{
        height: "100vh",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
      className={`absolute duration-1000 bg-white p-4 overflow-auto grid grid-cols content-between w-[299px]
      ${isOpen ? "left-0 top-0 " : "left-[-1000px] top-0"}`}
    >
      {cartItems.length ? (
        <div>
          <div
            onClick={() => dispatch(clearFromCart(cartItems))}
            className="flex justify-start items-center"
          >
            <div className="flex items-center text-xs cursor-pointer bg-black px-[6px] py-[6px] rounded-tl-md rounded-bl-md rounded-tr-full rounded-br-full text-white mb-4">
              <h1 className="mr-2">Clear Cart</h1>
              <div className="animate-pulse">
                <CloseCircle />
              </div>
            </div>
          </div>
          {cartItems.map((cart, i) => (
            <div key={i}>
              <div className="flex items-center mb-8">
                <img
                  className="w-20 border border-gray-300 "
                  src={cart?.image}
                  alt=""
                />
                <div className="ml-4 w-52">
                  <h1 className="text-sm font-semibold">{cart?.title}</h1>
                  <SidebarCartPrice cart={cart}></SidebarCartPrice>
                  <SidebarCartQuantity cart={cart}></SidebarCartQuantity>
                </div>
                <CloseIcon
                  className="cursor-pointer"
                  onClick={() => handleDeleteFromCart(cart)}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1 className="text-center text-xl font-semibold">
            Your cart is empty
          </h1>
        </div>
      )}
      <div className="">
        <SubTotal></SubTotal>
        <div className="bg-black text-white font-semibold py-3 px-6 flex justify-around">
          <Link to="/cart">View Cart</Link>
          <div className="border-2"></div>
          <Link to="/checkout">Check Out</Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarCart;
