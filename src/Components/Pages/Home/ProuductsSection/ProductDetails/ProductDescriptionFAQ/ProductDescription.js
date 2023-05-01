import React, { useState } from "react";
import Description from "./Description/Description";
import Faqs from "./Faqs/Faqs";

const ProductDescription = () => {
  
  const [toggle, setToggle] = useState(1);
  
  return (
    <div className="bg-white rounded-md border-t-2 border-gray-200 shadow-md p-4 sm:p-10 my-10">
        <div className="border-2 border-gray-200 rounded-md p-4 sm:p-10">
          <div className="flex">
            <div className="flex flex-col items-center">
              <h1 className="text-lg font-bold cursor-pointer" onClick={() => setToggle(1)}>
                DESCRIPTIONS
              </h1>
              <div
                className={
                  toggle === 1 ? "border-b-4 border-b-black w-36 rounded-t-xl" : "w-36"
                }
              ></div>
            </div>
            <div className="flex flex-col items-center ml-5">
              <h1 className="text-lg font-bold cursor-pointer" onClick={() => setToggle(2)}>
                FAQS
              </h1>
              <div
                className={toggle === 2 ? "border-b-4 border-b-black w-14 rounded-t-xl" : "w-14"}
              ></div>
            </div>
          </div>
          <hr className="" />
          <div className="my-10">
            <Description toggle={toggle}></Description>
            <Faqs toggle={toggle}></Faqs>
          </div>
        </div>
      </div>
  );
};

export default ProductDescription;
