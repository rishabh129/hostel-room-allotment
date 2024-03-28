import React from "react";
import "./dashboardStyle.css";
import Navbar from "./Navbar";
import MenuBar from "./MenuBar";
import ApplicationForm from "./ApplicationForm";
import MainMenu from "./MainMenu";

const ApplicationPage = () => {
  return (
    <div className="dashboardBody">
      <Navbar loggedIn={true} />
      <div className="Container">
      <MenuBar/>
      {/* <MainMenu page={"application"}/>         */}
      <ApplicationForm />
      </div>
    </div>
  );
};

export default ApplicationPage;
