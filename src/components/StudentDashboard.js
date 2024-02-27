import React from "react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
    return(
        <div className="mainContent">
            {/* add by rishi */}
            <b>Main Content</b>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="card-box bg-blue">
                  <div className="inner">
                    <h3>13436</h3>
                    <p>Application Form</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                  </div>                 

                  <Link to="/application"><span className="card-box-footer">View More  <i className="fa fa-arrow-circle-right"></i></span></Link>

                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="card-box bg-green">
                  <div className="inner">
                    <h3>185358</h3>
                    <p>Track Application Status</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-money" aria-hidden="true"></i>
                  </div>
                  <a href="#" className="card-box-footer">
                    View More <i className="fa fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="card-box bg-orange">
                  <div className="inner">
                    <h3>5464</h3>
                    <p>Profile</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                  </div>
                  <a href="#" className="card-box-footer">
                    View More <i className="fa fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
    )
}

export default StudentDashboard;