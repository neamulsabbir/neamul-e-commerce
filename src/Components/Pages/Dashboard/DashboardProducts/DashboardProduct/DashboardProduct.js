import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt, FaUpload } from "react-icons/fa";
import { toast } from "react-hot-toast";
import ProductList from "./ProductList/ProductList";

const DashboardProduct = ({ product }) => {
  // console.log(product);
  const [displayProduct, setDisplayProduct] = useState(product);
  // console.log(displayProduct?.products);
 
  return (
    <div className="border-2 border-gray-200 rounded-md my-5">
      <h1 className="text-right bg-red-500">delete</h1>
      <div className="p-5 flex flex-col items-center">
        <h1 className="text-center text-lg mb-2">
          Products of <span className="font-bold">{product?.items}</span>
        </h1>
        <img className="w-[550px] " src={product?.banner} alt="" />
        <div>
          <div className="my-2 text-white inline-block bg-black px-3 py-1 rounded-md ">
            <div className="flex items-center text-sm cursor-pointer">
              <Link to={`/dashboard/add-product/${product?._id}`}>
                Add Product
              </Link>
              <FaUpload className="ml-2" />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4 overflow-y-scroll h-[360px]">
            {displayProduct?.products?.map((pd, i) => 
              <ProductList 
                key={i} 
                pd={pd} 
                displayProduct = {displayProduct}
                setDisplayProduct = {setDisplayProduct}
                />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProduct;
