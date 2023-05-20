import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlackWishlistIcon from "../../../../../../Icons/BlackWishlistIcon";
import { useDispatch, useSelector } from "react-redux";
import RedWishlistIcon from "../../../../../../Icons/RedWishlistIcon";
import { addToWishList, removeToWishList } from "../../../../../../../State/ActionCreator/ActionCreator";

const Category = ({ pd }) => {
  // console.log(pd)
  const [wishlist, SetWishlist] = useState([]);
  const dispatch = useDispatch();
  
  const wishlistProducts = useSelector((state) => state.cart.wishlist);

  useEffect(() => {
    SetWishlist(wishlistProducts.find((product) => product?.slug === pd?.slug));
  }, [pd, wishlistProducts]);

  const handleRemoveWishlist = data => {
    dispatch(removeToWishList(data))
  }

  return (
    <div className="relative">
      <Link className="" to={`/product/${pd?.slug}`}>
        <div
          style={{
            boxShadow:
              "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
          }}
          className=" p-2 rounded-md bg-white"
        >
          <img src={pd?.image} className="w-full" alt="" />
          <div className="mt-2">
            <h1 className="h-12">{pd?.title}</h1>
            {pd?.regularPrice ? (
              <div>
                <h1 className="font-semibold text-sm xl:text-base">
                  BDT {pd?.price}
                </h1>
                <div className="flex">
                  <div className="flex items-center">
                    <h1 className="line-through decoration-gray-300 text-gray-400 text-xs">
                      BDT {pd?.regularPrice}
                    </h1>
                    <p className="ml-4 font-semibold  text-xs text-purple-700 ">
                      {pd?.percentage}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h1 className="font-semibold text-sm xl:text-base">
                  BDT {pd?.price}
                </h1>
                <h1 className="text-gray-400 text-xs">No Offer</h1>
              </div>
            )}
          </div>
        </div>
      </Link>
      <div className="absolute top-2 left-2 cursor-pointer">
        {!wishlist ? (
          <div onClick={() => dispatch(addToWishList(pd))}>
            <BlackWishlistIcon />
          </div>
        ) : (
          <div onClick={() => handleRemoveWishlist(pd)}>
            <RedWishlistIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
