import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileDevice = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="ml-8 md:hidden">
      <div
        className={` flex flex-col items-end bg-white shadow-md mt-[100px] w-1/2 absolute duration-500 text-right font-medium p-5 pr-10 md:hidden ${
          open ? "right-0" : "right-[-1000px] "
        }`}
      >
        <Link to="/" className="mb-2 z-10">
          Home
        </Link>
        <Link to="/wishlist" className="mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M19 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm1.243-9.243c2.16 2.166 2.329 5.557.507 7.91C19.926 12.24 18.99 12 18 12c-3.314 0-6 2.686-6 6 0 1.009.249 1.96.689 2.794l-.69.691-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228z" fill="rgba(239,0,0,1)"/></svg>
        </Link>
        <Link to="/cart" className="mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM5.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
        </Link>
        <Link to="signin" className="flex">
          <h1>SignIn</h1>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/></svg>
        </Link>
      </div>
      <div>
        <span onClick={() => setOpen(!open)} className="md:hidden w-10 h-10">
          {open ? "X" : <FaBars></FaBars>}
        </span>
      </div>
    </div>
  );
};

export default MobileDevice;
