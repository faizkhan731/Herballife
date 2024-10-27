import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import "./Nav.css";
import logo from "/public/icons8-herbalife-48.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onclickbtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container">
        <div className="left">
          <img src={logo} alt="" className="logo" />
          <h3>HERBALIFE</h3>
        </div>

        <ul className={isOpen ? "right active" : "right"}>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/Shop">SHOP</NavLink>
          </li>

          <li>
            <NavLink to="/Aboutus">ABOUT US</NavLink>
          </li>

          <li>
            <NavLink to="/Contact">CONTACT</NavLink>
          </li>
        </ul>

        <button className="secbtn">Login</button>

        <div className="icon" onClick={onclickbtn}>
          <FiAlignJustify />
        </div>
      </div>

    </>
  );
};

export default Nav;
