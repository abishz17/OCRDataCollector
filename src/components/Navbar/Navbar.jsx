import React, { useState } from "react";
import Logo from "../../assets/images/logo/logo.png";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

import SideBar from "./SideBar";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const Menus = [
    { title: "Home", to: "/" },
    { title: "Data", to: "/data" },
    { title: "OCR", to: "/ocr" },
  ];

  return (
    <div className=" sticky top-0  bg-primary text-white font-inter z-10 ">
      <nav className="flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center backdrop-filter backdrop-blur-lg z-10">
        <NavLink to="/">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-8 pr-4" />
            <span className="pt-3">NepaliOCR</span>
          </div>
        </NavLink>
        <ul className="font-montserrat items-center hidden md:flex">
          {Menus.map((menu, index) => (
            <li className="mx-3 ">
              <NavLink
                className={({ isActive }) => (isActive ? "text-cyan-600" : "")}
                to={menu.to}
              >
                {menu.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="font-montserrat hidden md:block">
          <button className="mr-6">Privacy</button>
          <NavLink
            className={({ isActive }) => (isActive ? "text-cyan-600" : "")}
            to="/about"
          >
            <button className="py-2 px-4 ">About</button>
          </NavLink>
        </div>
        <button
          data-collapse-toggle="mobileNav"
          aria-controls="mobile-menu-3"
          aria-expanded="false"
          type="button"
          id="showMenu"
          className="md:hidden"
          onClick={() => setOpen(!isOpen)}
        >
          <MenuIcon />
        </button>
      </nav>
      {isOpen && <SideBar setOpen={setOpen} Menus={Menus} />}
    </div>
  );
};
export default Navbar;
