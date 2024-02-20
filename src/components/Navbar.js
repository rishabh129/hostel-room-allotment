import React from "react";
import "./styles.css";
import logo from "../images/BIT-logo.png";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
    <div>
      <nav className="navbar">
        
        <div className="navbar__content">
          <div className="navbar__logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="navbar__brand">BIRLA INSTITUTE OF TECHNOLOGY</div>
          <div class="navbar__links">
          <Link to='/about' className="navbar__link">
              About
            </Link>
          </div>
        </div>
      </nav>
    </div>



  );
};

export default Navbar;
