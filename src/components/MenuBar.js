import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./MenuBarStyles.css";

const MenuBar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleNewApplication = () => {
    console.log("New Application clicked");
  };

  const handleSwapRoom = () => {
    console.log("Swap Room clicked");
  };

  const handleVacateRoom = () => {
    console.log("Vacate Room clicked");
  };

  return (
    <nav className="menuBar">
      <NavLink exact to="/dashboard" activeClassName="active" className="nav-link">
        Dashboard
      </NavLink>
      <div className="nav-link" onClick={togglePopup}>
        Application Form
      </div>
      <NavLink to="/profile" activeClassName="active" className="nav-link">
        Profile
      </NavLink>
      <NavLink to="/application/status" activeClassName="active" className="nav-link">
        Application Status
      </NavLink>
      <NavLink to="/contactus" activeClassName="active" className="nav-link">
        Contact
      </NavLink>

      {showPopup && (
        <div className="popup-menu">
          <button className="close-button" onClick={togglePopup}>
            &#10006; {/* Close symbol (X) */}
          </button>
          <button className="popup-button" onClick={handleNewApplication}>
          <Link to="/application/new">New Application</Link>
          </button>
          <button className="popup-button" onClick={handleSwapRoom}>
          <Link to="/application/swap">Swap Room</Link>
          </button>
          <button className="popup-button" onClick={handleVacateRoom}>
          <Link to="/application/vacate">Vacate Room</Link>
          </button>
        </div>
      )}

      <div className="slide-menu"></div>
    </nav>
  );
};

export default MenuBar;
