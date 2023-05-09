import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "../../../../../Icons/SearchIcon";
import { getColorsCategory } from "../../../../../../State/Thunk/getColorsCategory";
import { sendProductColor } from "../../../../../../State/ActionCreator/ActionCreator";

const FilterProduct = ({ product }) => {
  const [color,setColor] = useState([])
  const dispatch = useDispatch();

  const colors = useSelector((state) => state.colors.colors);

  useEffect(() => {
    dispatch(getColorsCategory());
    const productColor = product?.products.map((pd) => pd?.color.toLowerCase())
    setColor(colors.filter((color) => productColor?.includes(color?.color.toLowerCase())));

  }, [dispatch,product,colors]);
  // console.log(color);

  return (
    <div>
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
          {color?.map((color, i) => (
            <div className="flex" key={i}>
              <input
                type="radio"
                name="radio"
                onChange={() => dispatch(sendProductColor(color))}
              />
              <p className="ml-2">{color?.color}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
