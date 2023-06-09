import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaUpload } from "react-icons/fa";
import ProductList from "./ProductList/ProductList";
import CategoryItemDelete from "./CategoryItemDelete/CategoryItemDelete";

const DashboardProduct = ({ product }) => {
  // console.log(product);
  const [displayProduct, setDisplayProduct] = useState(product);
  // console.log(displayProduct?.products);

  return (
    <div className="border-2 border-gray-200 rounded-md mb-8 p-5 ">
      <div className="flex justify-end items-center">
        <div className="flex items-center text-xs cursor-pointer bg-black px-2 py-[6px] rounded-md text-white">
          <Link
            to={`/dashboard/category-item-edit/${product?._id}`}
            className="mr-2"
          >
            Edit <span className="font-bold">{product?.items}</span>
          </Link>
          <FaEdit />
        </div>
        <CategoryItemDelete product={product} />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-center text-lg mb-2">
          Products of <span className="font-bold">{product?.items}</span>
        </h1>
        <img className="w-[550px] " src={product?.banner} alt="" />
        <div>
          <Link to={`/dashboard/add-product/${product?._id}`}>
            <div className="my-2 text-white inline-block bg-black px-2 py-[6px] rounded-md ">
              <div className="flex items-center text-xs cursor-pointer">
                Add Product
                <FaUpload className="ml-2" />
              </div>
            </div>
          </Link>
          <div className="grid grid-cols-4 xl:grid-cols-6 gap-4 overflow-y-scroll h-[360px]">
            {displayProduct?.products?.map((pd, i) => (
              <ProductList
                key={i}
                pd={pd}
                displayProduct={displayProduct}
                setDisplayProduct={setDisplayProduct}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProduct;
