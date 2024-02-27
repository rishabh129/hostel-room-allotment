import React, {useState, useEffect} from "react";
import "./styles.css";
import logo from "../images/BIT-logo.png";
import { Link } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import { database } from "./firebase";
import { useHistory } from "react-router-dom";


const Navbar = ({loggedIn}) => {

  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const auth = getAuth();
    if (auth.currentUser) {
      setUser(auth.currentUser);
    } else {
      setUser(null);
    }
  }, []);

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
            
          {loggedIn?
            (
            <span className="navbar__link email">{user ? "Welcome "+ user.email : ""}</span>
            ):""}
            
            <Link to="/about" className="navbar__link">
              About
            </Link>

            {loggedIn?
            (
            <span onClick={handleSignOut} className="navbar__link">Sign Out</span>
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
