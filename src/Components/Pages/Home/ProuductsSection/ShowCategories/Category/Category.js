import React from "react";
import { Link } from "react-router-dom";

const Category = ({ pd }) => {
  // console.log(pd)
  return (
    <Link className="" to={`/product/${pd?.slug}`}>
      <div className=" p-2 rounded-md border-t-2 border-gray-200 shadow-md bg-white">
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
  );
};

export default Category;
