import React, { useState } from "react";

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
            <input type="text" id="username" placeholder="Enter Username" required/>
          </div>
          <div className="pass">
            <br />
            <input
              type={showPassword ? "text" : "password" }
              placeholder="Enter password"
              id="password"
            required />
            <div className="eye-icon" onClick={togglePasswordVisibility}>
            {showPassword
                ? "🔓"
                : '🔒'}
            </div>
            <br />
          </div>
          <div className="loginbutton">
            <button className="login">Login</button>
          </div>
        </form>
      </div>
      <br />
      <div>
        <a href="/forget.html" className="passforget">
          Forget password?
        </a>
      </div>
    </div>
  );
}
