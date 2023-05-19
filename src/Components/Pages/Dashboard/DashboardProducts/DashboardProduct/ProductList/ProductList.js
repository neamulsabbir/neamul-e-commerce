import React from "react";
import { toast } from "react-hot-toast";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductList = ({ pd, setDisplayProduct, displayProduct }) => {
    
  const handleDeleteProduct = (pd) => {
    // console.log(pd?.id);
    const agree = window.confirm(`Are you sure You want DELETE ${pd?.title}`);
    if (agree) {
      fetch(`http://localhost:5000/dashboard/product/${pd?.id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
        //   console.log(data);
          toast.success("Product deleted successfully");
          const remainingProduct = displayProduct?.products.filter(
            (item) => item?.id !== pd?.id
          );
          setDisplayProduct(remainingProduct);
        });
    }
  };

  return (
    <div className=" p-2 rounded-md border-2 border-gray-200">
      <img className="w-44 rounded-sm" src={pd?.image} alt="" />
      <h1 className="mt-1">
        {pd?.title.length > 10 ? pd?.title.slice(0, 15) + "..." : pd?.title}
      </h1>
      <h1>Color: {pd?.color}</h1>
      <div className="flex justify-between text-lg mt-2">
        <Link to={`/dashboard/edit-product/${pd?.id}`}>
          <FaEdit className="cursor-pointer" />
        </Link>
        <div className="border-x"></div>
        <FaTrashAlt
          onClick={() => handleDeleteProduct(pd)}
          className="text-red-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ProductList;
