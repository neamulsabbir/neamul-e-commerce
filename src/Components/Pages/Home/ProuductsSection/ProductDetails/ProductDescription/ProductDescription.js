import React from "react";
import { useSelector } from "react-redux";

const ProductDescription = ({toggle}) => {
    
  const products = useSelector((state) => state.productDetails.product);

  return (
    <div className={toggle === 1 ? "block" : "hidden"}>
      <h1 className="text-lg font-bold">Product Details:</h1>
      <p>{products?.details}</p>
      <h1 className="text-lg font-bold mt-4">
        Size chart of {products?.title}
      </h1>
      <img src={products?.size} alt="" />
    </div>
  );
};

export default ProductDescription;
