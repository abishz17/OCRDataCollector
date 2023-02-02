import React from "react";
import CrossIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
const SideBar = (props) => {
  return (
    <div
      id="mobileNav"
      className="px-4 py-6 h-[100vh]  bg-primary animate-fade-in-down text-center"
    >
      <ul
        className="font-montserrat flex flex-col mx-8 my-4 items-center text-3xl"
        id="hideMenu"
      >
        {props.Menus.map((menu, index) => (
          <li className="my-6" onClick={() => props.setOpen(false)}>
            <NavLink className="growing-underline" to={menu.to}>
              {menu.title}
            </NavLink>
          </li>
        ))}
        <li className="my-6" onClick={() => props.setOpen(false)}>
          <NavLink className="growing-underline" to="/about">
            About
          </NavLink>
        </li>
        <li className="my-6" onClick={() => props.setOpen(false)}>
          Privacy
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
