import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
    return(
        <div className="sideMenu">
            <h1>Side Menu</h1>
            <ul className="menuItems">
              <li className="menuItem">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="menuItem">
                <Link to="/dashboard">Profile</Link>
              </li>
              <li className="menuItem">
                <Link to="/application">Application Form</Link>
              </li>
              <li className="menuItem">
                <Link to="/dashboard">Track Application</Link>
              </li>
              <li className="menuItem">
                <Link to="/dashboard">Contact Us</Link>
              </li>
            </ul>
          </div>
    )
}

export default SideMenu;