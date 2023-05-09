import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 p-3 gap-3 ">
      <Sidebar />
      <div className="col-span-10 w-full bg-white rounded-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
