import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // Import CSS file
import logo from "../images/BIT-logo.png";
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Adding event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      className={
        scrolled ? "background_wrapper scrolled" : "background_wrapper"
      }
    >
      <nav className={scrolled ? "navbar scrolled" : "navbar"}>
        <div className="navbar__background"></div>
        <div className="navbar__content">
          <div className="navbar__logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="navbar__brand">BIRLA INSTITUTE OF TECHNOLOGY</div>
          <div className="navbar__links">
            <Link to="/dashboard">
              <button className="nav">Login</button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="login_form_wrapper">
        <form action="#" className="login__form">
          <h1 className="title">Login</h1>
          <div className="login_form_content">
            <div className="login_content_box">
              <ion-icon name="person-outline"></ion-icon>
              <div className="login_content_box--input">
                <input
                  type="email"
                  placeholder=" "
                  className="login__input email--input"
                  required
                />
                <label htmlFor="email" className="login__label">
                  Email
                </label>
              </div>
            </div>
            <div className="login_content_box">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <div className="login_content_box--input">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder=" "
                  className="login__input password--input"
                  required
                />
                <label htmlFor="password" className="login__label">
                  Password
                </label>
                <ion-icon
                  className="password__hidden"
                  id="password__hidden"
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  onClick={togglePasswordVisibility}
                ></ion-icon>
              </div>
            </div>
            <div className="remember_login">
              <div className="remember_login_content">
                <input type="checkbox" className="remember_login_input" />
                <label
                  htmlFor="remember"
                  className="remember_login_label text--sm"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="forget__login text--sm">
                Forgot password?
              </a>
            </div>
            <button className="button__login">Login</button>
            <p className="register__login text--sm">
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
