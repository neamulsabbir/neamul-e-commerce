import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishList } from "../../../../../../../State/ActionCreator/ActionCreator";
import WishlistIcon from "../../../../../../Icons/WishlistIcon";

const AddToCartAndWishlist = ({product}) => {

  const products = useSelector(state => state.productDetails.product)
  const wishlistProducts = useSelector(state => state.cart.wishlist)
  const dispatch = useDispatch()

  let pd;
  for(const wishlistProduct of wishlistProducts){
    pd = wishlistProduct;
  }

  return (
    <div className="mt-6 flex items-center">
      <button
        onClick={() => dispatch(addToCart(products))}
        className= {`font-semibold text-white text-sm bg-black px-5 py-2 rounded-full ${!product?.quantity ? "animate-bounce" : null} `}
      >
        ADD TO CART
      </button>

      <div
          onClick={() => dispatch(addToWishList(products))} 
          className="ml-4">
          <WishlistIcon />
        </div>
      {/* {
        pd ? 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 ml-4"><path d="M20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C5.51545 2.99926 8.09315 2.56029 10.2605 3.44044L6.34315 7.35843L7.75736 8.77264L12 4.53L11.9872 4.51617C11.9918 4.52028 11.9964 4.5244 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736Z" fill="rgba(251,3,3,1)"></path></svg>
        :
        <div
          onClick={() => dispatch(addToWishList(products))} 
          className="ml-4">
          <WishlistIcon></WishlistIcon>
        </div>
      }  */}
  </div>
  );
};

export default AddToCartAndWishlist;
