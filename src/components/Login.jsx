import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

function App() {
  const navigate = useNavigate(); 
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(true);
  const showRegister = () => {
    setRegister(true);
    setLogin(false);
  };
  const showLogin = () => {
    setRegister(false);
    setLogin(true);
  };
  return (
    <div className="login-body">
      <div className="go-back">
        <svg
          className="go-back-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="35"
          viewBox="0 0 50 35"
          fill="none"
          onClick={()=>navigate(-1)}
        >
          <path
            d="M31.25 5.38462H18.75V0H15.625L0 13.4615L15.625 26.9231H18.75V21.5385H34.375C43.0044 21.5385 45.3125 27.5654 45.3125 35H50V21.5385C50 12.617 41.6053 5.38462 31.25 5.38462Z"
            fill="white"
          />
        </svg>
      </div>
      {register && (
        <form className="login-form">
          <div className="spans">
            <div className="span-signup">SIGN UP</div>
            <div className="span-login" onClick={showLogin}>
              LOG IN
            </div>
          </div>
          <h1>SIGN UP FOR FREE</h1>
          <div className="first-last">
            <input
              className="first-last-input"
              type="text"
              placeholder="First Name"
            />
            <input
              className="first-last-input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            className="login-form-input"
            type="email"
            placeholder="Your Email"
          />
          <input
            className="login-form-input"
            type="password"
            placeholder="Password"
          />
          <input
            className="login-form-input"
            type="password"
            placeholder="Confirm Your Password"
          />
          <button type="submit"> SIGN UP </button>
        </form>
      )}
      {login && (
        <form className="login-form">
          <div className="spans">
            <div className="span-login" onClick={showRegister}>
              SIGN UP
            </div>
            <div className="span-signup">LOG IN</div>
          </div>
          <h1>LOG IN</h1>
          <input
            className="login-form-input"
            type="email"
            placeholder="Your Email"
          />
          <input
            className="login-form-input"
            type="password"
            placeholder="Password"
          />
          <button type="submit"> LOG IN </button>
        </form>
      )}
    </div>
  );
}

export default App;
