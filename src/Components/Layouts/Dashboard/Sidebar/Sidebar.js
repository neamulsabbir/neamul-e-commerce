import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-black h-[calc(100vh-25px)] p-5 rounded-lg">
      <div className="flex gap-3  flex-col h-full text-white">
        <h1 className="text-center text-xl font-bold">Admin Dashboard</h1>
        <h1 className="mt-5">
          <Link to="/dashboard">Product List</Link>
        </h1>
        <h1>
          <Link to='/dashboard/create-category'>Create New Category</Link>
        </h1>
        <h1>
          <Link to='/dashboard/category-name'>Category Name</Link>
        </h1>
        <h1>
          <Link to='/dashboard/product-color'>Color</Link>
        </h1>
        <h1 className="mt-auto">
          <Link to="/"> Back to Home </Link>
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
