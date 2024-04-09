import React from "react";
import { Link } from "react-router-dom";

const NoticeSection = () => {
    return(
        <div className="noticeSection">
            <h1 className="NoticeHeading">Notice</h1>
            <ul className="menuItems">
              <li className="menuItem">
                <Link to="/dashboard">Notice 1</Link>
              </li>
              <li className="menuItem">
                <Link to="/dashboard">Notice 2</Link>
              </li>
              <li className="menuItem">
                <Link to="/dashboard">Notice 3</Link>
              </li>
              <li className="menuItem">
                <Link to="/dashboard">Notice 4</Link>
              </li>
              <li className="menuItem">
                <Link to="/dashboard">Notice 5</Link>
              </li>
            </ul>
          </div>
    )
}

export default NoticeSection;