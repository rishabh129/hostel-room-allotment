import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuBarStyles.css";

const MenuBar = () => {
  return (
    // <div className="menuBar">

    //   <Link to="/dashboard"><button className="menuBarItems">Dashboard</button></Link>
    //   <button className="menuBarItems">Profile</button>

    //   <Link to="/application"><button className="menuBarItems">Application Form</button></Link>
    //   <button className="menuBarItems">Track Application Status</button>
    //   <button className="menuBarItems">Contact Us</button>
    // </div>

    // <nav className="menuBar">
    //   <a href="#">Dashboard</a>
    //   <a href="#">Profile</a>
    //   <a href="#">Application form</a>
    //   <a href="#">Application Status</a>
    //   <a href="#">Contact </a>
    //   <div class="animation start-home"></div>
    // </nav>

    // <nav className="menuBar">
    //   <div>Dashboard</div>
    //   <div>Profile</div>
    //   <div>Application Form</div>
    //   <div>Application Status</div>
    //   <div>Contact </div>
    // </nav>

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
      <NavLink to="/contact" activeClassName="active" className="nav-link">
        Contact
      </NavLink>
      <div class="slide-menu"></div>
    </nav>
  );
};

export default MenuBar;
