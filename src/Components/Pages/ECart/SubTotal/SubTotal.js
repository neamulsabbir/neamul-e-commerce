import React from 'react';
import { useSelector } from 'react-redux';

const SubTotal = () => {
    const carts = useSelector(state => state.cart.cart)

    let cart;
    for(const cartItems of carts){
        cart = cartItems
    }

    return (
        <div>
            <hr/>
            {
                cart ? <h1 className='py-4 '>Subtotal: <span className='font-bold'>BDT {cart?.price * cart?.quantity}</span> </h1>
                :
                <h1 className='py-4'>Subtotal: 0</h1>
            }
           
        </div>
    );
};

export default SubTotal;