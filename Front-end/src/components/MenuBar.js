import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MenuBarStyles.css";

const MenuBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="menuBar">
      <NavLink exact to="/dashboard" activeClassName="active" className="nav-link">
        Dashboard
      </NavLink>
      <NavLink to="/profile" activeClassName="active" className="nav-link">
        Profile
      </NavLink>
      <div className="dropdown">
        <NavLink
          to="/application"
          activeClassName="active"
          className="nav-link"
          onClick={toggleDropdown}
        >
          Application Form
        </NavLink>
        {showDropdown && (
          <div className="dropdown-content">
            <NavLink
              to="/new-room-application"
              activeClassName="active"
              className="dropdown-link"
            >
              New Room Application
            </NavLink>
            <NavLink
              to="/swap-room-application"
              activeClassName="active"
              className="dropdown-link"
            >
              Swap Room Application
            </NavLink>
            <NavLink
              to="/vacate-room-application"
              activeClassName="active"
              className="dropdown-link"
            >
              Vacate Room Application
            </NavLink>
          </div>
        )}
      </div>
      <NavLink to="/application-status" activeClassName="active" className="nav-link">
        Application Status
      </NavLink>
      <NavLink to="/contact" activeClassName="active" className="nav-link">
        Contact
      </NavLink>
      <div class="slide-menu"></div>
    </nav>
  );
};

export default MenuBar;
