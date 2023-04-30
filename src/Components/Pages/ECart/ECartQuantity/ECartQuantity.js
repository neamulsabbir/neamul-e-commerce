import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../../State/ActionCreator/ActionCreator';

const ECartQuantity = ({cart}) => {
    const dispatch = useDispatch()
  
    return (
      <div className="mt-1 w-24">
        <h1 className="text-sm">Quantity:</h1>
        <div className="flex items-center mt-1 border-b-2 border-gray-300">
          <button onClick={() => dispatch(removeFromCart(cart))} className="border-r-2 border-gray-300 px-3">-</button>
            <p className="px-3 text-xs border-r-2 border-gray-300">{cart?.quantity}</p>
          <button onClick={() => dispatch(addToCart(cart))} className="px-3">+</button>
        </div>
      </div>
    );
  };
  

export default ECartQuantity;