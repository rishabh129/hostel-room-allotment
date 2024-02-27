import React from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
    return(
        <div className="menuBar">
          
          <Link to="/dashboard"><button className="menuBarItems">Dashboard</button></Link>
          <button className="menuBarItems">Profile</button>
          
          <Link to="/application"><button className="menuBarItems">Application Form</button></Link>
          <button className="menuBarItems">Track Application Status</button>
          <button className="menuBarItems">Contact Us</button>          
        </div>
    )
}

export default MenuBar;