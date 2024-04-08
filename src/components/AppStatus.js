import React from "react";
import Navbar from "./Navbar";
import MenuBar from "./MenuBar";
import NoticeSection from "./NoticeSection";
import SideMenu from "./SideMenu";
import "./dashboardStyle.css";
const AppStatus = () => {
  return (
    <>
      <Navbar loggedIn={true} />
      <MenuBar />
      <div className="bodyContent">
        <SideMenu />
        <div className="mainContent">
            <h2>Status</h2>
        </div>
        <NoticeSection />
      </div>
    </>
  );
};

export default AppStatus;
