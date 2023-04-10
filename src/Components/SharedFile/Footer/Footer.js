import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.png";


const Footer = () => {
  return (
    <div className="bg-white">
      <div className="px-16 mx-auto flex flex-col md:flex-row justify-between items-start pt-10">
        <div>
          <div className="flex items-center">
            <img className="w-44" src={logo} alt="" />
          </div>
          <h1>
            Favorite collections and hottest trends, <br /> Find it, love it,
            buy it.
          </h1>
        </div>
        <div className="text-base my-10 md:my-0">
          <h1 className="font-semibold">CONTACT US</h1>
          <div className="mt-5">
            <div>
              <p className="font-semibold">Hotline:</p>
            </div>
            <span>+880 1938927389</span>

            <div>
              <p className="font-semibold">Email:</p>
            </div>
            <span>support@neamul.com</span>
          </div>
        </div>
        <div className="flex md:flex-row">
          <Link
            to="https://www.facebook.com/neamul.sabbir/"
            className="mr-5 border-2 border-black rounded-full p-1 text-black text-xs"
          >
            <FaFacebookF></FaFacebookF>
          </Link>
          <Link
            to="https://www.facebook.com/neamul.sabbir/"
            className="mr-5 border-2 border-black rounded-full p-1 text-black text-xs"
          >
            <FaInstagram></FaInstagram>
          </Link>
          <Link
            to="https://www.facebook.com/neamul.sabbir/"
            className="mr-5 border-2 border-black rounded-full p-1 text-black text-xs"
          >
            <FaYoutube></FaYoutube>
          </Link>
          <Link
            to="https://www.facebook.com/neamul.sabbir/"
            className="mr-5 border-2 border-black rounded-full p-1 text-black text-xs"
          >
            <FaLinkedin></FaLinkedin>
          </Link>
        </div>
      </div>
      <p className="py-8 text-center">
        Copyright © 2023 Neamul's Bazar All rights reserved
      </p>
    </div>
  );
};

export default Footer;
