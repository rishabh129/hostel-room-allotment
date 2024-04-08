import React from "react";
import SideMenu from "./SideMenu";
import StudentDashboard from "./StudentDashboard";
import NoticeSection from "./NoticeSection";
import NewApplication from "./NewApplication";

const MainMenu = ({page}) => {
    return(
        <div className="bodyContent">
          <SideMenu/>

          {page === "dashboard"?(
            <StudentDashboard />
          ):""
          }
          {page === "application"?(
            <NewApplication />
          ):""
          }

          <NoticeSection/>

          
        </div>
    )
}

export default MainMenu;