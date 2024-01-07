import {React, useState, useEffect} from "react";
import {useNagivate, Link} from "react-router-dom";
import "./login.css";

function App() {
    const [login, setLogin]= useState(false);
    const [register, setRegister]= useState(true);
    const showRegister=()=>{
        setRegister(true);
        setLogin(false);
    }
    const showLogin=()=>{
        setRegister(false);
        setLogin(true);
    }
    return (
      <div className="login-body">
        { register &&
        <form className="login-form">
            <div className="spans">
                <div className="span-signup">SIGN UP</div>
                <div className="span-login"  onClick={showLogin}>LOG IN</div>
            </div>
            <h1>
                SIGN UP FOR FREE
            </h1>
            <div className="first-last">
                <input className="first-last-input" type="text" placeholder="First Name"/>
                <input className="first-last-input" type="text" placeholder="Last Name"/>
            </div>
            <input className="login-form-input" type="email" placeholder="Your Email"/>
            <input className="login-form-input" type="password" placeholder="Password"/>
            <input className="login-form-input" type="password" placeholder="Confirm Your Password"/>
            <button type="submit"> SIGN UP </button>
        </form>
}
{ login &&
        <form className="login-form">
            <div className="spans">
                <div className="span-login" onClick={showRegister}>SIGN UP</div>
                <div className="span-signup">LOG IN</div>
            </div>
            <h1>
                LOG IN
            </h1>
            <input className="login-form-input" type="email" placeholder="Your Email"/>
            <input className="login-form-input" type="password" placeholder="Password"/>
            <button type="submit"> LOG IN </button>
        </form>
}
      </div>
    );
  }
  
  export default App;
  