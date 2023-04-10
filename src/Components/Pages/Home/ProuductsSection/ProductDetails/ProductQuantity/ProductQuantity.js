import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../../../State/ActionCreator/ActionCreator";

const ProductQuantity = () => {
  const dispatch = useDispatch()
  const product  = useSelector(state => state.productDetails.product)
  const cartQuantity = useSelector(state => state.cart.cart)

  return (
    <div className="my-4 w-28">
      <h1 className="text-base">Quantity:</h1>
      <div className="flex items-center mt-2 border-b-2 border-gray-300">
        <button className="border-r-2 border-gray-300 px-3">-</button>
        <p className="px-3 border-r-2 border-gray-300">{cartQuantity?.quantity}</p>
        <button onClick={() => dispatch(addToCart(product))} className="px-3">+</button>
      </div>
    </div>
  );
};

export default ProductQuantity;
