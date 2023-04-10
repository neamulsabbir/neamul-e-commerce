import React from "react";
import { Link } from "react-router-dom";

const RightSidePd = ({ pd }) => {
  return (
    <Link to={`/product/${pd?.slug}`}>
      <div className="">
        <img src={pd?.image} className="w-full" alt="" />
        <div>
          <h1 className="">
            {pd?.title.length > 10 ? pd?.title.slice(0, 15) + "..." : pd?.title}
          </h1>
          {pd?.offerPrice ? (
            <div>
              <h1 className="font-semibold text-sm xl:text-base">
                BDT {pd?.offerPrice}
              </h1>
              <div className="flex">
                {pd?.regularPrice && (
                  <>
                    <h1 className="line-through decoration-gray-300 text-gray-400 text-xs">
                      BDT {pd?.regularPrice}
                    </h1>
                    <p className="ml-2 font-semibold text-purple-700 text-xs">
                      {pd?.percentage}
                    </p>
                  </>
                )}
              </div>
            </div>
          ) : (
            <h1>BDT {pd?.regularPrice}</h1>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RightSidePd;
