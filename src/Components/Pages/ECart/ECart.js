import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import ECartPrice from "./ECartPrice/ECartPrice";
import ECartQuantity from "./ECartQuantity/ECartQuantity";
import SubTotal from "./SubTotal/SubTotal";
import { deleteFromCart } from "../../../State/ActionCreator/ActionCreator";
import { Link } from "react-router-dom";

const ECart = () => {

  const dispatch = useDispatch()
  const isOpen = useSelector(state => state.sidebar.isOpen)
  const cartItems = useSelector((state) => state.cart.cart);
  // console.log(cartItems);
  return (
    <div className={`absolute duration-1000 bg-white p-4  ${isOpen ? "left-0 top-0 " : "left-[-1000px] top-0"}`}>
      <div className="overflow-auto">
      {cartItems.map((cart) => (
        <>
          <div className="flex items-center mb-8">
            <img className="w-28 border border-gray-300 " src={cart?.image} alt=""/>
            <div className="ml-10">
              <h1 className="text-lg w-72 font-semibold">{cart?.title}</h1>
              <ECartPrice cart={cart}></ECartPrice>
              <ECartQuantity cart={cart}></ECartQuantity>
            </div>
            {/* <FaTrash onClick={dispatch(deleteFromCart(cart))}></FaTrash> */}
          </div>
        </>
      ))}
      <SubTotal></SubTotal>
      
      <Link 
        className="bg-gray-800 text-white font-semibold py-3 px-4 " 
        to='/cart'
        >
          View Cart
      </Link> 
      <Link 
        className="bg-black text-white font-semibold py-3 px-4 " 
        to='/checkout'
        >
          Check Out
      </Link> 
      </div>
      
    </div>
  );
};

export default ECart;
