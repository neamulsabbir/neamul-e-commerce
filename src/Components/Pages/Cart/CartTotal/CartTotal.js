import React from "react";
import { useSelector } from "react-redux";

const CartTotal = () => {
  const carts = useSelector((state) => state.cart.cart);

  let cart;
  let price;
  let vat;
  let total;
  for (const cartItems of carts) {
    cart = cartItems;
    price  = cart?.price * cart?.quantity;
    vat = parseFloat((10 / 100) * price);   
    total = parseFloat(price + vat + 80).toFixed(2);
  }

  return (
    <div style={{
      boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
    }} className="p-14 my-14 rounded-md">
      <h1 className="text-lg font-bold pb-4">CART TOTALS</h1>
      <div>
        <div>
          <div className="grid grid-cols-2 border-t border-b border-gray-200 py-4">
            <h1>Subtotal</h1>
            {cart ? (
              <h1>
                <span className="font-bold">
                  BDT {price}
                </span>
              </h1>
            ) : (
              <h1 className="py-4">0</h1>
            )}
          </div>
          <div className="grid grid-cols-2 border-b border-gray-200 py-4">
            <h1>Shipping Charge</h1>
            <h1>
              Delivery ( 2-3 Business Days):
              <span className="font-bold"> ৳ 80.00</span>
            </h1>
          </div>
          <div className="grid grid-cols-2 border-b border-gray-200 py-4">
            <h1>Vat</h1>
            <h1 className="font-bold">10%</h1>
          </div>
          <div className="grid grid-cols-2 text-lg font-bold pt-8">
            <h1 className="">Total</h1>
            <h1>৳{total}</h1>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CartTotal;
