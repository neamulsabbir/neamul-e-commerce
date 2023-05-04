import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import SearchIcon from "../../../../../Icons/SearchIcon";

const FilterCategoryProduct = () => {

  const data = useSelector(
    (state) => state.categoriesProduct.categoriesProduct
  );
  let datas;
  for (const pd of data) {
    datas = pd;
  }

  return (
    <div >
      <div className="flex bg-white py-1 px-2 rounded-xl border-2 border-black">
        <SearchIcon />
        <input
          className="py-1 px-2 rounded-xl"
          type="search"
          name=""
          placeholder="Search your product"
        />
      </div>
      
      <div
        style={{
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        }}
        className="collapse w-60 bg-white rounded-md mt-5"
      >
        <input type="checkbox" />
        <div className="collapse-title font-medium p-4 flex justify-between items-center">
          <h1 className="font-bold ">Select Color</h1>
          <FaArrowDown className="text-xs"></FaArrowDown>
        </div>
        <div className="collapse-content p-0 px-4">
          {datas?.allProducts?.map((items) => (
            <div className="flex">
              <input type="radio" name="" id="" />
              <p className="ml-2">{items?.color}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        }}
        className="collapse w-60 bg-white rounded-md mt-5"
      >
        <input type="checkbox" />
        <div className="collapse-title font-medium p-4 flex justify-between items-center">
          <h1 className="font-bold ">Select Brand</h1>
          <FaArrowDown className="text-xs"></FaArrowDown>
        </div>
        <div className="collapse-content p-0 px-4">
          {datas?.allProducts?.map((items) => (
            <div className="flex">
              <input type="radio" name="" id="" />
              <p className="ml-2">{items?.brand}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default FilterCategoryProduct;
