import React, { useState } from "react";
import { css } from "@emotion/react";
import { useHistory, Link } from "react-router-dom";
import "./styles.css"; // Import CSS file
import Navbar from "./Navbar";
import { database } from "./firebase";
import Loader from "./loading";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();
  const [error, setError] = useState("");

  
  const handleLogin = async (e, type) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const auth = getAuth();
    if (type === "signup") {
      
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        
        // Send email verification
        sendEmailVerification(auth.currentUser)
        .then(() => {
          alert("Verification email sent!");
          setLogin(true);
        })
        .catch((error) => {
          console.error("Error sending verification email:", error);
        });
        
        console.log("Account Created! Welcome, ", email);
          // history.push("/dashboard");
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          alert(err.code);
          setLogin(true);
        });

        await updateProfile(auth.currentUser, {
          displayName: name
        });

    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user.emailVerified) {
            console.log("Logged in successfully! Hello, ", email);
            history.push("/dashboard");
          } else {
            setLoading(false);
            alert("Please verify your email to log in.");
          }
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

  const handleForgotPassword = () => {
    setLoading(true);
    const auth = getAuth(); // Get the authentication instance
    const emailAddress = email; // Get the user's email address from the input
    sendPasswordResetEmail(auth, emailAddress)
      .then(() => {
        setLoading(false);
        alert("Password reset email sent!");
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error);
      });
  };

  return (
    <main className="background_wrapper">
      <Navbar loggedIn={false} />

      <Loader loading = {loading}/>
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                  <div className="slide-indicator"></div>
                </div>
              </div>
            ) : null}

            <button className="button__login">
              {login ? "Sign-In" : "Sign-Up"}
            </button>
            {login?
            <Link to="#" onClick={handleForgotPassword} className="forgotPW">Forgot Password?</Link>
            :""}
            
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
