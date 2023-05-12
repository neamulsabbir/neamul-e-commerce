import React from "react";
import { useSelector } from "react-redux";
import SidebarCartPrice from "./SidebarCartPrice/SidebarCartPrice";
import SidebarCartQuantity from "./SidebarCartQuantity/SidebarCartQuantity";
import SubTotal from "./SubTotal/SubTotal";
import { Link } from "react-router-dom";

const SidebarCart = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const cartItems = useSelector((state) => state.cart.cart);
  // console.log(cartItems);
  return (
    <div
      style={{
        height: "100vh",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
      }}
      className={`absolute duration-1000 bg-white p-4 overflow-auto grid grid-cols content-between w-[241.188px]
      ${
        isOpen ? "left-0 top-0 " : "left-[-1000px] top-0"
      }`}
    >
      <div>
        {cartItems.map((cart, i) => (
          <div key={i}>
            <div className="flex items-center mb-8">
              <img
                className="w-20 border border-gray-300 "
                src={cart?.image}
                alt=""
              />
              <div className="ml-4">
                <h1 className="text-sm font-semibold">{cart?.title}</h1>
                <SidebarCartPrice cart={cart}></SidebarCartPrice>
                <SidebarCartQuantity cart={cart}></SidebarCartQuantity>
              </div>
              {/* <FaTrash onClick={dispatch(deleteFromCart(cart))}></FaTrash> */}
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <SubTotal></SubTotal>
        <Link
          className="bg-gray-800 text-white font-semibold py-3 px-6"
          to="/cart"
        >
          View Cart
        </Link>
        <Link
          className="bg-black text-white font-semibold py-3 px-6"
          to="/checkout"
        >
          Check Out
        </Link>
      </div>
    </div>
  );
};

export default SidebarCart;
