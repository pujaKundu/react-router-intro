import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink
        to="/home"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/friends"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        Friends
      </NavLink>
      <NavLink
        to="/about"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        About
      </NavLink>
    </nav>
  );
};

export default Header;
