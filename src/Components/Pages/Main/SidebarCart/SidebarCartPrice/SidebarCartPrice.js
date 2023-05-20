import React from "react";

const SidebarCartPrice = ({ cart }) => {
  // console.log(cart);

  return (
    <div className="my-2">
      {cart?.regularPrice ? (
        <div className="h-8">
          <h1 className="font-semibold text-xs ">
            BDT {cart?.price}
          </h1>
          <div className="flex">
            <div className="flex items-center">
              <h1 className="line-through decoration-gray-300 text-gray-400 text-xs">
                BDT {cart?.regularPrice}
              </h1>
              <p className="ml-4 font-semibold  text-xs text-purple-700 ">
                {cart?.percentage}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="font-semibold text-xs">
          BDT {cart?.price}
        </h1>
      )}
    </div>
  );
};

export default SidebarCartPrice;
