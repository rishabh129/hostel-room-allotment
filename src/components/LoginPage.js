import React, { useState } from "react";
import { useHistory, Link, useNavigate } from "react-router-dom";
import "./styles.css"; // Import CSS file
import logo from "../images/BIT-logo.png";
import { database } from "./firebase";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
const LoginPage = () => {
  const [login, setLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const handleLogin =(e, type)=>{
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value

    if(type == 'signup'){
      createUserWithEmailAndPassword(database,email, password).then(data=>{
      console.log("Account Created! Welcome, ", email)
      history.push('/dashboard')
    }).catch(err=>{
      alert(err.code)
      setLogin(true)
    })
  }
    else{
      signInWithEmailAndPassword(database,email, password).then(data=>{
        console.log("Logged in successfully! Hello, ",email)
        history.push('/dashboard')
      }).catch(err=>{
        alert(err.code)
      })
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="background_wrapper">
      <nav className="navbar">
        <div className="navbar__background"></div>
        <div className="navbar__content">
          <div className="navbar__logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="navbar__brand">BIRLA INSTITUTE OF TECHNOLOGY</div>
        </div>
      </nav>

      <div className="login_form_wrapper">
        <form onSubmit={(e)=>handleLogin(e,login?'signin':'signup')} className="login__form">
          {/* <h1 className="title">{login?'Sign In':'Sign Up'}</h1> */}
          <div className="titleAlign">
          <div className={login==true?'activeSignIn':'activeSignUp'} onClick={()=>setLogin(true)}>Sign In</div>
          <div className={login==false?'activeSignIn':'activeSignUp'} onClick={()=>setLogin(false)}>Sign Up</div>
          </div>
          <div className="login_form_content">
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
            <button className="button__login">
              {login?'Sign-In':'Sign-Up'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
