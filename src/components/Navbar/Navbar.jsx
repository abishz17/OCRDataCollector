import React, { useState } from "react";
import Logo from "../../assets/logo_pen.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="p-2 text-gray-900   font-medium capitalize  w-full flex">
        <span className="px-2 border-r border-gray-800 mx-4 my-4 relative">
          <NavLink to="/">
            <img
              src={Logo}
              alt="Logo"
              className="w-8 h-8 -mt-1 inline mx-auto "
            />
            <span className="ml-4">NepaliOCR</span>
          </NavLink>
        </span>
        <div className="ml-10 flex self-center">
          <span className="px-2 mr-2  border-gray-800 mx-4 my-4 hover:text-[#38BDF8] active:text-gray-9 focus:outline-none focus:ring focus:ring-violet-300 ">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-cyan-600" : "")}
            >
              Home
            </NavLink>
          </span>
          <span className="px-2 mr-2  border-gray-800 mx-4 my-4">
            <NavLink
              to="/data"
              className={({ isActive }) => (isActive ? "text-cyan-600" : "")}
            >
              Data
            </NavLink>
          </span>
          <span className="px-2 mr-2  border-gray-800 mx-4 my-4 ">
            <NavLink
              to="/ocr"
              className={({ isActive }) => (isActive ? "text-cyan-600" : "")}
            >
              OCR
            </NavLink>
          </span>
          <span className="px-2 mr-2  border-gray-800 mx-4 my-4">
            <NavLink
              to="/faq"
              className={({ isActive }) => (isActive ? "text-cyan-600" : "")}
            >
              FAQ
            </NavLink>
          </span>
        </div>
        <div className="flex ml-auto ">
          <span className="self-center mx-3 underline decoration-dashed">
            <NavLink
              to="/privacy"
              className={({ isActive }) => (isActive ? "text-cyan-600" : "")}
            >
              Privacy Policy
            </NavLink>
          </span>
          <button className="px-1 rounded h-8 self-center bg-gray-800 text-white mx-3 cursor-pointer overflow-clip ">
            About Us
          </button>
        </div>

        {/* <div className={` ${!isdropped && 'hidden'} absolute right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
    <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
      <div>Test User</div>
      <div className="font-medium truncate">hello@hello.com</div>
    </div>
    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
      <li>
        <a href="./" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="./" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="./" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div className="py-1">
      <a href="./" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div> */}
      </div>
    </nav>
  );
};

export default Navbar;
