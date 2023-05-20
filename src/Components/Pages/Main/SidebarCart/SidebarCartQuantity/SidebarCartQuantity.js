import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../../../State/ActionCreator/ActionCreator';

const SidebarCartQuantity = ({cart}) => {
    const dispatch = useDispatch()
  
    return (
      <div className="">
        <h1 className="text-xs">Quantity:</h1>
        <div className="flex items-center mt-1 border-b-2 border-gray-300 w-24">
          <button onClick={() => dispatch(removeFromCart(cart))} className="border-r-2 px-3 ">-</button>
            <p className="px-3 text-xs">{cart?.quantity}</p>
          <button onClick={() => dispatch(addToCart(cart))} className="px-3 border-l-2 border-gray-300 ">+</button>
        </div>
      </div>
    );
  };
  

export default SidebarCartQuantity;