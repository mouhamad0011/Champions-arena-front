import { useMemo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/champions-arena-logo.png";
import "./home.css";
import UsersDash from "./UsersDash";
import StoreDash from "./StoreDash";
import CafeteriaDash from "./CafeteriaDash";
import EventsDash from "./EventsDash";
import StadiumsDash from "./StadiumsDash";
import BookingsDash from "./BookingsDash";
import StatisticsDash from "./StatisticsDash";

const AdminDash = () => {
    const [dash, setDash] = useState("users");
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [burgerMenu, setBurgerMenu] = useState(false);
    const handleToggle = () => {
      const bars = document.querySelector(".bars");
      bars.classList.toggle("active");
    };
    const handleMenu = () => {
      setBurgerMenu(!burgerMenu);
    };
    const token = localStorage.getItem("token");
    const handlelogout = () => {
      localStorage.removeItem("token");
    };

    return(
        <>
         <header className="header" style={{ backgroundColor: "#333" }}>
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="title" style={{ color: "white" }}>
          CHAMPIONS ARENA
        </div>
        <ul className="menu">
          <li style={{ color: "white" }} onClick={()=> setDash("users")}>Users</li>
          <li style={{ color: "white" }} onClick={()=> setDash("stadiums")}>Stadiums</li>
          <li style={{ color: "white" }} onClick={()=> setDash("store")}>Store</li>
          <li style={{ color: "white" }} onClick={()=> setDash("cafeteria")}>Cafeteria</li>
          <li style={{ color: "white" }} onClick={()=> setDash("bookings")}>Bookings</li>
          <li style={{ color: "white" }} onClick={()=> setDash("events")}>Events</li>
          <li style={{ color: "white" }} onClick={()=> setDash("statistics")}>Analytics</li>
        </ul>
        <div className="reg-lan">
          <button className="reg-button">
            {!token ? (
              <Link to="/connect" className="link">
                Connect
              </Link>
            ) : (
              <Link to="" className="link" onClick={handlelogout}>
                Log out
              </Link>
            )}
          </button>
        </div>
      </header>
      <header className="phone-header" style={{ backgroundColor: "#333" }}>
        <Link to="/">
          <img src={logo} alt="logo" className="phone-logo" />
        </Link>
        <div className="phone-title" style={{ color: "white" }}>CHAMPIONS ARENA</div>
        <div className="phone-reg-lan">
          <button className="phone-reg-button">
            {!token ? (
              <Link to="/connect" className="link">
                Connect
              </Link>
            ) : (
              <Link to="" className="link" onClick={handlelogout}>
                Log out
              </Link>
            )}
          </button>
        </div>
        <div className="trigger" onClick={handleMenu}>
          <svg className="bars" viewBox="0 0 100 100" onClick={handleToggle}>
            <path
              className="line top"
              d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
            ></path>
            <path
              className="line middle"
              d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
            ></path>
            <path
              className="line bottom"
              d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
            ></path>
          </svg>
        </div>
        {burgerMenu && (
          <ul className="phone-menu" style={{zIndex:"10"}}>
            <li style={{ color: "white" }} onClick={()=> setDash("users")}>Users</li>
            <li style={{ color: "white" }} onClick={()=> setDash("stadiums")}>Stadiums</li>
            <li style={{ color: "white" }} onClick={()=> setDash("store")}>Store</li>
            <li style={{ color: "white" }} onClick={()=> setDash("cafeteria")}>Cafeteria</li>
            <li style={{ color: "white" }} onClick={()=> setDash("bookings")}>Bookings</li>
            <li style={{ color: "white" }} onClick={()=> setDash("events")}>Events</li>
            <li style={{ color: "white" }} onClick={()=> setDash("statistics")}>Analytics</li>
          
          </ul>
        )}
      </header>

      {dash === "users" && <UsersDash/>}
      {dash === "store" && <StoreDash/>}
      {dash === "cafeteria" && <CafeteriaDash/>}
      {dash === "events" && <EventsDash/>}
      {dash === "stadiums" && <StadiumsDash/>}
      {dash === "bookings" && <BookingsDash/>}
      {dash === "statistics" && <StatisticsDash/>}

        </>
    );
}

export default AdminDash;