import React from "react";
import "./styles.css";
import logo from "../images/BIT-logo.png";
import Navbar from "./Navbar";

const Dashboard = () => {
  // const history = useHistory();
  // const handleSignOut = () => {
  //   signOut(database).then((val) => {
  //     console.log("Logged out! See you later");
  //     history.push("/");
  //   });
  // };

  return (
    // <div>
    //   <nav className="navbar">
    //     <div className="navbar__content">
    //       <div className="navbar__logo">
    //         <img src={logo} alt="Logo" />
    //       </div>
    //       <div className="navbar__brand">BIRLA INSTITUTE OF TECHNOLOGY</div>
    //       <div class="navbar__links">
    //         <span onClick={handleSignOut} className="navbar__link">Sign Out</span>
            
    //       </div>
    //     </div>
    //   </nav>
    // </div>

    <Navbar loggedIn={true} />
  );
};

export default Dashboard;
