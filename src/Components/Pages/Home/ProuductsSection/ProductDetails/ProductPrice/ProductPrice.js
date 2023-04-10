import React from "react";
import { useSelector } from "react-redux";

const ProductPrice = () => {
  const products = useSelector((state) => state.productDetails.product);

  return (
    <div className="my-4">
      {products?.offerPrice ? (
        <div>
          <h1 className="font-semibold text-sm xl:text-base">
            BDT {products?.offerPrice}
          </h1>
          <div className="flex">
            {products?.regularPrice && (
              <>
                <h1 className="line-through decoration-gray-300 text-gray-400 text-xs">
                  BDT {products?.regularPrice}
                </h1>
                <p className="ml-2 font-semibold text-purple-700 text-xs">
                  {products?.percentage}
                </p>
              </>
            )}
          </div>
        </div>
      ) : (
        <h1>BDT {products?.regularPrice}</h1>
      )}
    </div>
  );
};

export default ProductPrice;
