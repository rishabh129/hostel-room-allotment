import React, { useState } from "react";

import { Link } from 'react-router-dom';
export function LoginFunc() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h2 className="heading">Login</h2>

      <div className="contain">
        <form action="/server">
          <div className="user">
            <br />
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              required
            />
          </div>
          <div className="pass">
            <br />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              id="password"
              required
            />
            <div className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? (
                <i className="fas fa-eye" style={{ color: 'black' }}></i>
              ) : (
                <i className="fas fa-eye-slash" style={{ color: 'black' }}></i>
              )}
            </div>

            <br />
          </div>
          <div className="loginbutton">
          <Link to="/dashboard">
            <button className="login">Login</button>
            </Link>
            
          </div>
        </form>
      </div>
      <br />
      <div>
        <a href="#" className="passforget">
          Forget password?
        </a>
      </div>
    </div>
  );
}
