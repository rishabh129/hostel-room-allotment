import React from "react";
import "./dashboardStyle.css";
import Navbar from "./Navbar";
import MenuBar from "./MenuBar";
import NewApplication from "./NewApplication";

const ApplicationPage = () => {
  return (
    <div className="dashboardBody">
      <Navbar loggedIn={true} />
      <div className="Container">
      <MenuBar/>
      <NewApplication />
      </div>
    </div>
  );
};

export default ApplicationPage;
