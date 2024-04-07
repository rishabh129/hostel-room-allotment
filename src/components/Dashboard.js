import React from "react";
import "./dashboardStyle.css";
import Navbar from "./Navbar";
import MenuBar from "./MenuBar";
import MainMenu from "./MainMenu";

const Dashboard = () => {
  return (
    <div className="dashboardBody">
      <Navbar loggedIn={true} />

      <div className="Container">
      <MenuBar/>
      <MainMenu page={"dashboard"}/>        
      </div>
    </div>
  );
};

export default Dashboard;
