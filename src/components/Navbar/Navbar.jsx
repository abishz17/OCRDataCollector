import React, { useState } from "react";
import Logo from "../../assets/logo_pen.png";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const Menus = [
    { title: "Home", to: "/" },
    { title: "Data", to: "/data" },
    { title: "OCR", to: "/ocr" },
    { title: "Privacy Policy", hidden: "true", to: "/privacy" },
    { title: "About Us", hidden: "hidden", to: "/about" },
  ];
  return (
    <nav className="border-gray-200 px-2 mb-10 text-black">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <NavLink to="./" className="flex">
          <img className="h-10 mr-3" src={Logo} />

          <span className="self-center text-lg font-semibold whitespace-nowrap">
            NepaliOcr
          </span>
        </NavLink>
        <div className="flex md:order-2">
          <div className="relative mr-3 md:mr-0 hidden md:block">
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
          <button
            data-collapse-toggle="mobile-menu-3"
            type="button"
            className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
          >
            <MenuIcon />
          </button>
        </div>
        <div
          className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
          id="mobile-menu-3"
        >
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            {Menus.map((menu, index) => (
              <li
                key={index}
                className={`${
                  menu.hidden ? "md:hidden" : ""
                } text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0`}
              >
                <NavLink
                  to={menu.to}
                  className={({ isActive }) =>
                    isActive ? "text-blue-700" : ""
                  }
                  aria-current="page"
                >
                  {menu.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
