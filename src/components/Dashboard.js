import { signOut } from "firebase/auth";
import React from "react";
import { database } from "./firebase";
import { useHistory } from "react-router-dom";
import "./styles.css";
import logo from "../images/BIT-logo.png";

const Dashboard = () => {
  const history = useHistory();
  const handleSignOut = () => {
    signOut(database).then((val) => {
      console.log("Logged out! See you later");
      history.push("/");
    });
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__background"></div>
        <div className="navbar__content">
          <div className="navbar__logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="navbar__brand">BIRLA INSTITUTE OF TECHNOLOGY</div>
          <div class="navbar__links">
            <button onClick={handleSignOut} className="navbar__link">Sign Out</button>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
