import React from "react";
import SideMenu from "./SideMenu";
import StudentDashboard from "./StudentDashboard";
import NoticeSection from "./NoticeSection";
import ApplicationForm from "./ApplicationForm";

const MainMenu = ({page}) => {
    return(
        <div className="bodyContent">
          <SideMenu/>

          {page == "dashboard"?(
            <StudentDashboard />
          ):""
          }
          {page == "application"?(
            <ApplicationForm />
          ):""
          }

          <NoticeSection/>

          
        </div>
    )
}

export default MainMenu;