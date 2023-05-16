import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../../../../../State/ActionCreator/ActionCreator";

const ProductQuantity = ({products}) => {
  // console.log(products);
  const dispatch = useDispatch()
  // const product = useSelector(state => state.productDetails.product)
  const cartItems = useSelector((state) => state.cart.cart);
  
  let cart;
  for(const carts of cartItems){
    cart = carts;
  }

  return (
    <div className="mt-4">
      <h1 className="text-base">Quantity:</h1>
        <div className="flex items-center mt-2">
          <button onClick={() => dispatch(removeFromCart(cart))} className="border-r-2 border-b-2 border-gray-300 px-3">-</button>
            <p className="px-3 border-r-2 border-b-2 border-gray-300">{products?.quantity ? products?.quantity : 0}</p>
          <button onClick={() => dispatch(addToCart(cart))} className="px-3 border-b-2">+</button>
      </div>
    </div>
  );
};

export default ProductQuantity;
