import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-black h-[calc(100vh-25px)] p-5 rounded-lg">
      <div className="flex gap-3  flex-col h-full text-white">
        <h1>Admin Dashboard</h1>
        <h1>
          <Link to="/dashboard/product-list">Product List</Link>
        </h1>
        <h1 className="mt-auto">
          <Link to="/"> Back to Home </Link>
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
