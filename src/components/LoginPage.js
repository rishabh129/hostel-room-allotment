import React, { useState } from "react";
import { css } from "@emotion/react";
import { useHistory, Link, useNavigate } from "react-router-dom";
import "./styles.css"; // Import CSS file
import { FadeLoader } from "react-spinners";
import Navbar from "./Navbar";
import { database } from "./firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    z-index: 1200;
  `;

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity here
    zIndex: 9999, // Make sure the z-index is higher than other content
    display: loading ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
  };

  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleLogin = (e, type) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (type == "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log("Account Created! Welcome, ", email);
          history.push("/dashboard");
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log("Logged in successfully! Hello, ", email);
          history.push("/dashboard");
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          alert(err.code);
        });
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <main className="background_wrapper">
      <Navbar loggedIn={false} />

      <div style={overlayStyle}>
        <FadeLoader
          color={"#000000"}
          loading={loading}
          css={override}
          size={150}
        />
      </div>
      <div className="login_form_wrapper">
        <form
          onSubmit={(e) => handleLogin(e, login ? "signin" : "signup")}
          className="login__form"
        >
          <div className="titleAlign">
            <div
              className={login == true ? "activeSignIn" : "activeSignUp"}
              onClick={() => setLogin(true)}
            >
              SIGN IN
            </div>
            <div
              className={login == false ? "activeSignIn" : "activeSignUp"}
              onClick={() => setLogin(false)}
            >
              SIGN UP
            </div>
          </div>

          <div className="login_form_content">
            {login === false ? (
              <div className="login_content_box">
                <ion-icon name="person-outline"></ion-icon>
                <div className="login_content_box--input">
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    className="login__input name--input"
                    // value={name}
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
            ) : null}

            {login === false ? (
              <div className="login_content_box">
                <ion-icon name="person-outline"></ion-icon>
                <div className="login_content_box--input">
                  <input
                    name="roll"
                    type="text"
                    placeholder="Roll Number"
                    className="login__input roll--input"
                    // value={name}
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
            ) : null}

            <div className="login_content_box">
              <ion-icon name="person-outline"></ion-icon>
              <div className="login_content_box--input">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="login__input email--input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="login_content_box">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <div className="login_content_box--input">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="login__input password--input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div
                  className="password__hidden"
                  id="password__hidden"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <i className="fas fa-eye" style={{ color: "black" }}></i>
                  ) : (
                    <i
                      className="fas fa-eye-slash"
                      style={{ color: "black" }}
                    ></i>
                  )}
                </div>
              </div>
            </div>

            {login === true ? (
              <div className="login_content_box">
                <ion-icon name="person-outline"></ion-icon>
                <div className="radio-switch">
                  <input
                    type="radio"
                    id="radio1"
                    name="radioswitch"
                    value="student"
                    checked={selectedOption === "student"}
                    onChange={handleOptionChange}
                    className="radio-switch-input" 
                    
                  />
                  <label htmlFor="radio1" className="radio-switch-label">Student</label>

                  <input
                    type="radio"
                    id="radio2"
                    name="radioswitch"
                    value="admin"
                    checked={selectedOption === "admin"}
                    onChange={handleOptionChange}
                    className="radio-switch-input"
                  />
                  <label htmlFor="radio2" className="radio-switch-label">Admin</label>
                  <div class="slide-indicator"></div>
                </div>
              </div>
            ) : null}

            <button className="button__login">
              {login ? "Sign-In" : "Sign-Up"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
