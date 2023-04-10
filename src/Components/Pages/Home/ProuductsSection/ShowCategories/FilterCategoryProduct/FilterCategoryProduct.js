import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

const FilterCategoryProduct = () => {
  const [colorOpen, setColorOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  
  const data = useSelector(state => state.categoriesProduct.categoriesProduct)
  let datas
  for(const pd of data){
    datas= pd
  }

  return (
    <div className=" mb-10 bg-white p-5 rounded-md border-t-2 border-gray-200 shadow-md">
      <div className="flex bg-white py-1 px-2 rounded-xl border-2 border-black">
        <svg class="svg-icon" viewBox="0 0 20 20" className="w-4">
          <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
        </svg>
        <input
          className="py-1 px-2 rounded-xl"
          type="search"
          name=""
          placeholder="Search your product"
        />
      </div>
    <div className="my-10 flex flex-row justify-between md:flex-col">
      <div>
        <span onClick={() => setColorOpen(!colorOpen)}>
          {colorOpen ? (
            <div className="flex items-center justify-between border-b-2 ">
              <h1 className="font-semibold">Select Color</h1>
              <h1 className="w-3 ml-10 lg:ml-0 text-sm font-extrabold cursor-pointer"><FaMinus></FaMinus></h1>
            </div>
          ) : (
            <div className="flex items-center justify-between border-b-2 ">
              <h1 className="font-semibold">Select Color</h1>
              <h1 className="w-3 ml-10 lg:ml-0 text-sm font-extrabold cursor-pointer"><FaPlus></FaPlus></h1>
            </div>
          )}
        </span>
        <div
          className={`absolute bg-white p-4 pr-20 rounded-lg shadow-md border-t-2 border-gray-200 ${
            colorOpen ? "top-50" : "top-[-500px]"
          }`}
        >
          <div className="">
            {datas?.allProducts?.map((items) => (
              <div className="flex">
                <input type="radio" name="" id="" />
                <p className="ml-2">{items?.color}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-5">
        <span onClick={() => setBrandOpen(!brandOpen)}>
          {brandOpen ? (
            <div className="flex items-center justify-between border-b-2 ">
              <h1 className="font-semibold">Select Brand</h1>
              <h1 className="w-3 ml-10 lg:ml-0 text-sm font-extrabold cursor-pointer"><FaMinus></FaMinus></h1>
            </div>
          ) : (
            <div className="flex items-center justify-between border-b-2 ">
              <h1 className="font-semibold">Select Brand</h1>
              <h1 className="w-3 ml-10 lg:ml-0 text-sm font-extrabold cursor-pointer"><FaPlus></FaPlus></h1>
            </div>
          )}
        </span>
        <div
          className={`absolute bg-white p-4 pr-20 rounded-lg shadow-md border-t-2 border-gray-200 ${
            brandOpen ? "top-50" : "top-[-500px]"
          }`}
        >
          <div className="">
            {datas?.allProducts?.map((items) => (
              <div className="flex">
                <input type="radio" name="" id="" />
                <p className="ml-2">{items?.brand}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FilterCategoryProduct;
