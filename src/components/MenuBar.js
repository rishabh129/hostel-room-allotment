import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuBarStyles.css";

const MenuBar = () => {
  return (
    <nav className="menuBar">
      <NavLink exact to="/dashboard" activeClassName="active" className="nav-link">
        Dashboard
      </NavLink>
      <NavLink to="/profile" activeClassName="active" className="nav-link">
        Profile
      </NavLink>
      <NavLink
        to="/application"
        activeClassName="active"
        className="nav-link"
      >
        Application Form
      </NavLink>
      <NavLink
        to="/application-status"
        activeClassName="active"
        className="nav-link"
      >
        Application Status
      </NavLink>
      <NavLink to="/contactus" activeClassName="active" className="nav-link">
        Contact
      </NavLink>
     
      <div className="slide-menu"></div>
    </nav>
  );
};

export default MenuBar;
