import React from "react";
import "./styles.css";
import logo from "../images/BIT-logo.png";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { database } from "./firebase";
import { useHistory } from "react-router-dom";


const Navbar = ({loggedIn}) => {

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
        <div className="navbar__content">
          <div className="navbar__logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="navbar__brand">BIRLA INSTITUTE OF TECHNOLOGY</div>
          <div class="navbar__links">
            <Link to="/about" className="navbar__link">
              About
            </Link>

            {loggedIn?
            (<span onClick={handleSignOut} className="navbar__link">Sign Out</span>
            ):(
            <Link to="/" className="navbar__link">
            Sign-In
          </Link>)
            }

            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
