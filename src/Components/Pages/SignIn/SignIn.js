import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.png";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center w-11/12 mx-auto h-full my-10">
      <div
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
        className="bg-white p-7 rounded-md md:w-96"
      >
        <form>
          <div className="flex flex-col items-center">
            <img className="w-36 mb-5" src={logo} alt="" />
            <div className="text-center">
              <h1 className="text-xl font-bold">Sign In Now</h1>
              <p className="mb-5">Please fill the details and create account</p>
            </div>
          </div>

          <div className="mb-3">
            <h1 className="font-medium mb-1">Email</h1>
            <input
              className="w-full py-1 px-2 rounded-md border-2 border-gray-300"
              type="text"
              name=""
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <h1 className="font-medium mb-1">Password</h1>
            <input
              className="w-full py-1 px-2 rounded-md border-2 border-gray-300"
              type="password"
              name=""
              placeholder="Password"
            />
          </div>

          <input
            className="text-center bg-black py-2 w-full text-white font-bold mb-3 rounded-md"
            type="submit"
            value="Sign In"
          />
          <h1 className="text-center text-sm">
            Don't have an account?{" "}
            <span>
              <Link className="underline" to="/signup">
                Sign Up
              </Link>
            </span>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
