import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./login.css";
import { register, login }  from "../redux/actions/user";
import { toast } from "react-hot-toast";

function App() {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const [loginn, setLogin] = useState(false);
  const [registerr, setRegister] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  

  const showRegister = () => {
    setRegister(true);
    setLogin(false);
  };
  const showLogin = () => {
    setRegister(false);
    setLogin(true);
  };

  const handleRegister = (e)=>{
    e.preventDefault();
    const nameTest = /^[A-Za-z]+$/;
    const emailTest = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passwordTest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!nameTest.test(firstName.trim())){
      toast.error("Firstname should only contain letters*")
      return;
    }
    else if(!nameTest.test(lastName.trim())){
      toast.error("Lastname should only contain letters");
      return;
    }
    else if(!emailTest.test(email.trim())){
      toast.error("Invalid email pattern(e.g., user@example.com)");
      return;
    }
    else if(!passwordTest.test(password.trim())){
      toast.error("Your password should contain at least 8 characters, one lowercase, one uppercase, one digit and one special char");
      return;
    }
    else if(password.trim() !== confirmPass.trim()){
      toast.error("Passwords do not match");
      return;
    }
    else{
      dispatch(register(firstName, lastName, email, password))
      .then(()=>{
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPass("");
        showLogin();
        toast.success("Registered successfully! Verification email sent!")
      })
      .catch((error)=>{
        toast.error(error)
      })
      
    }
  }

  const handleLogin = (e) =>{
    e.preventDefault();
    dispatch(login(email, password))
    .then(()=>{
      setEmail("");
      setPassword("");
      navigate("/");
      toast.success("Logged in successfully!");
    })
    .catch((error)=>{
      console.log(error)
      toast.error(error.response.data.message)
    })
  }
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
      {registerr && (
        <form className="login-form" onSubmit={handleRegister}>
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
              placeholder="Fisrt Name"
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)}
              required
            />
            <input
              className="first-last-input"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e)=>setLastName(e.target.value)}
              required
            />
          </div>
          <input
            className="login-form-input"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
          <input
            className="login-form-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
          <input
            className="login-form-input"
            type="password"
            placeholder="Confirm Your Password"
            value={confirmPass}
            onChange={(e)=>setConfirmPass(e.target.value)}
            required
          />
          <button type="submit"> SIGN UP </button>
        </form>
      )}
      {loginn && (
        <form className="login-form" onSubmit={handleLogin}>
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
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
          <input
            className="login-form-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
          <button type="submit"> LOG IN </button>
        </form>
      )}
    </div>
  );
}

export default App;
