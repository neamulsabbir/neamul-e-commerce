import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import banner from "../../../../Images/banner3.png";
import CartTotal from "./CartTotal/CartTotal";
import SidebarCartPrice from "../SidebarCart/SidebarCartPrice/SidebarCartPrice";
import SidebarCartQuantity from "../SidebarCart/SidebarCartQuantity/SidebarCartQuantity";
import { clearFromCart } from "../../../../State/ActionCreator/ActionCreator";
import CloseCircle from "../../../Icons/CloseCircle";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <img className="w-full" src={banner} alt="" />
      <div className="my-10 w-11/12 mx-auto">
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
        {cartItems.length ? (
          <div
            style={{
              boxShadow:
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
            }}
            className="grid sm:grid-cols-3 lg:grid-cols-4 gap-10 items-center p-8 sm:p-14  rounded-md"
          >
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
        ) : (
          <div>
            <h1 className="text-center text-2xl font-semibold">
              Your cart is empty
            </h1>
          </div>
        )}
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
