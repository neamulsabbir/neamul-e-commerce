import React from "react";
import { addToCart, addToWishList } from "../../../../../../State/ActionCreator/ActionCreator";
import { useDispatch, useSelector } from "react-redux";

const AddToCartAndWishlist = () => {

  const product = useSelector(state => state.productDetails.product)
  const dispatch = useDispatch()

  return (
    <div className="pt-4 flex items-center">
    <button
      onClick={() => dispatch(addToCart(product))}
      className="font-semibold text-white bg-black px-5 py-2 rounded-full"
    >
      ADD TO CART
    </button>
    <div
      onClick={() => dispatch(addToWishList(product))} 
      className="ml-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7 border-2 border-gray-300 p-1 rounded-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </div>
  </div>
  );
};

export default AddToCartAndWishlist;
