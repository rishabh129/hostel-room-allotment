import React from "react";

export function LoginFunc() {
  return (
    <div>
      <h2 className="heading">Login</h2>

      <div className="contain">
        <form action="/server">
          <div className="user">
          
            <br />
            <input type="text" id="username" placeholder="Enter Username" />
          </div>
          <div className="pass">
           
            <br />
            <input type="password" placeholder="Enter Password" id="password" />
          </div>
          <div className="loginbutton">
            <button className="login">Login</button>
          </div>
        </form>
      </div>
      <div >
        <a href="/forget.html" className="passforget">Forget password?</a>
      </div>
    </div>
  );
}
