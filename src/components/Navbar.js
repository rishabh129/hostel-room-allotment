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
      <div className="navbar1">
        <div className="navbar__content1">
          <div className="navbar__logo1">
            <img src={logo} alt="Logo" />
          </div>
          <div className="navbar__brand1">BIRLA INSTITUTE OF TECHNOLOGY</div>
          <div className="navbar__links1">
            
          {loggedIn?
            (
            <span className="navbar__link1 email">{user ? "Welcome, "+ user.displayName : ""}</span>
            ):""}
            
            <Link to="/about" className="navbar__link1">
              About
            </Link>

            {loggedIn?
            (
            <span onClick={handleSignOut} className="navbar__link1">Sign Out</span>
            ):(
            <Link to="/" className="navbar__link1">
            Sign-In
          </Link>)
            }

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
