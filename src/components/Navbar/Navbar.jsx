import React, { useState } from "react";
import Logo from "../../assets/logo_pen.png";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CrossIcon from "@mui/icons-material/Close";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const Menus = [
    { title: "Home", to: "/" },
    { title: "Data", to: "/data" },
    { title: "OCR", to: "/ocr" },
  ];

  return (
    <div className=" sticky top-0 ">
      <nav className="flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center backdrop-filter backdrop-blur-lg z-10">
        <NavLink to="/">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-4" />
            <span>NepaliOCR</span>
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
          <NavLink
            className={({ isActive }) => (isActive ? "text-cyan-600" : "")}
            to="/privacy"
          >
            <button className="mr-6">Privacy</button>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-cyan-600" : "")}
            to="/about"
          >
            <button className="py-2 px-4 text-white bg-black rounded-3xl">
              About
            </button>
          </NavLink>
        </div>
        <button
          data-collapse-toggle="mobileNav"
          aria-controls="mobile-menu-3"
          aria-expanded="false"
          type="button"
          id="showMenu"
          className="md:hidden"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
      </nav>
      {isOpen && (
        <div
          id="mobileNav"
          className="px-4 py-6 fixed top-0 left-0 h-full w-full bg-cyan-200  animate-fade-in-down"
        >
          <div id="hideMenu" className="flex justify-end">
            <CrossIcon
              className="h-16 w-16 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <ul
            className="font-montserrat flex flex-col mx-8 my-24 items-center text-3xl"
            id="hideMenu"
          >
            {Menus.map((menu, index) => (
              <li className="my-6" onClick={() => setOpen(false)}>
                <NavLink className="growing-underline" to={menu.to}>
                  {menu.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
