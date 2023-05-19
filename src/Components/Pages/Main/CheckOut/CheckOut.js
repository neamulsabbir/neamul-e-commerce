import React from "react";
import banner from "../../../../Images/banner3.png";
import OrderDetails from "./OrderDetails/OrderDetails";
import BillingDetails from "./BillingDetails/BillingDetails";

const CheckOut = () => {
  return (
    <div>
      <img className="w-full" src={banner} alt="" />
      <div className="grid lg:grid-cols-2 gap-5 my-10 w-11/12 mx-auto">
        <BillingDetails></BillingDetails>
        <OrderDetails></OrderDetails>
      </div>
    </div>
  );
};

export default CheckOut;
