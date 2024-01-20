import { React, useState, useEffect } from "react";
import { useNagivate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./footballPage.css";
import logo from "../images/champions-arena-logo.png";
import languagee from "../images/global-svgrepo-com (2).svg";
import insta from "../images/icons8-insta-48.png";
import facebook from "../images/icons8-facebook-48.png";
import tiktok from "../images/icons8-tic-tac-50 (1).png";
import twitter from "../images/icons8-twitterx-50.png";
import messi from "../images/Rectangle94.png";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { getTerrainsBySport } from "../redux/actions/terrain";
import { getUserID } from "../UserInfo/GetUserInfo";
import { addBookingByUser } from "../redux/actions/booking";
import { getBookingsBydate } from "../redux/actions/booking";

function FootballPage() {
  const userId = getUserID();
  const terrains = useSelector((state) => state.terrains);
  const bookings = useSelector((state) => state.bookings);
  const dispatch = useDispatch();
  const [stadium, setStadium] = useState("Grand terrain");
  const [stadiumId, setStadiumId] = useState("65a26f3e1c912c4b41ccc4a7");
  const [hourPrice, setHourPrice] = useState(30);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [bill, setBill] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  const [language, setLanguage] = useState("english");
  const [SisHovering, setSIsHovering] = useState(false);
  const [LisHovering, setLIsHovering] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const handleToggle = () => {
    const bars = document.querySelector(".bars");
    bars.classList.toggle("active");
  };
  const handleMenu = () => {
    setBurgerMenu(!burgerMenu);
  };
  const handleSOnHover = () => {
    setSIsHovering(true);
  };
  const handleSOutHover = () => {
    setSIsHovering(false);
  };
  const handleLOnHover = () => {
    setLIsHovering(true);
  };
  const handleLOutHover = () => {
    setLIsHovering(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(getTerrainsBySport("football"));
  }, [dispatch]);

  var today = new Date();
  //console.log(today.toLocaleDateString("en-GB"))
  var day2 = new Date(today);
  day2.setDate(day2.getDate() + 1);
  var day3 = new Date(today);
  day3.setDate(day3.getDate() + 2);
  var day4 = new Date(today);
  day4.setDate(day4.getDate() + 3);
  var day5 = new Date(today);
  day5.setDate(day5.getDate() + 4);
  today = today.toString().split(" ")[2];
  day2 = day2.toString().split(" ")[2];
  day3 = day3.toString().split(" ")[2];
  day4 = day4.toString().split(" ")[2];
  day5 = day5.toString().split(" ")[2];

  const token = localStorage.getItem("token");
  const handlelogout = () => {
    localStorage.removeItem("token");
  };

  


  
  

  
  
  return (
    <div className="body">
      <header className="header">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="title">CHAMPIONS ARENA</div>
        <ul className="menu">
          <li onMouseOver={handleSOnHover}>
            Sports
            <span style={{ fontSize: "13px", paddingLeft: "3px" }}>
              &#11167;
            </span>
          </li>
          {SisHovering && (
            <div
              className="sports"
              onMouseOver={handleSOnHover}
              onMouseOut={handleSOutHover}
            >
              <div>
                <Link to="/football" className="link">
                  Football
                </Link>
              </div>
              <div>
                <Link to="/basketball" className="link">
                  Basketball
                </Link>
              </div>
              <div>
                <Link to="/volleyball" className="link">
                  Volleyball
                </Link>
              </div>
              <div>
                <Link to="/tennis" className="link">
                  Tennis
                </Link>
              </div>
            </div>
          )}
          <Link to="/events" className="link">
            <li>{language === "english" ? "Events" : "Evénements"}</li>
          </Link>
          <Link to="/cafeteria" className="link">
            <li>Cafeteria</li>
          </Link>
          <Link to="/store" className="link">
            <li>Store</li>
          </Link>
          <Link to="/about" className="link">
            <li>About</li>
          </Link>
          <Link to="/contact" className="link">
            <li>Contact</li>
          </Link>
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
          <img
            className="language"
            src={languagee}
            alt="language"
            onMouseOver={handleLOnHover}
          />
          {LisHovering && (
            <div
              className="languages"
              onMouseOver={handleLOnHover}
              onMouseOut={handleLOutHover}
            >
              <div onClick={() => setLanguage("english")}>
                {language === "english" ? "English" : "Anglais"}
              </div>
              <div onClick={() => setLanguage("french")}>
                {language === "english" ? "French" : "Francais"}
              </div>
            </div>
          )}
        </div>
      </header>

      <header className="phone-header">
        <Link to="/">
          <img src={logo} alt="logo" className="phone-logo" />
        </Link>
        <div className="phone-title">CHAMPIONS ARENA</div>
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
          <img
            className="phone-language"
            src={languagee}
            alt="language"
            onMouseOver={handleLOnHover}
          />
          {LisHovering && (
            <div
              className="phone-languages"
              onMouseOver={handleLOnHover}
              onMouseOut={handleLOutHover}
            >
              <div onClick={() => setLanguage("english")}>
                {language === "english" ? "English" : "Anglais"}
              </div>
              <div onClick={() => setLanguage("french")}>
                {language === "english" ? "French" : "Francais"}
              </div>
            </div>
          )}
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
          <ul className="phone-menu">
            <li onClick={handleOpen}>Sports</li>
            <Link to="/events" className="link">
              <li>Events</li>
            </Link>
            <Link to="/cafeteria" className="link">
              <li>Cafeteria</li>
            </Link>
            <Link to="/store" className="link">
              <li>Store</li>
            </Link>
            <Link to="/about" className="link">
              <li>About</li>
            </Link>
            <Link to="/contact" className="link">
              <li>Contact</li>
            </Link>
          </ul>
        )}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal-box">
            <span onClick={handleClose}>&#x2715;</span>
            <div>
              <Link to="/football" className="box-link">
                Football
              </Link>
            </div>
            <div>
              <Link to="/basketball" className="box-link">
                Basketball
              </Link>
            </div>
            <div>
              <Link to="/volleyball" className="box-link">
                Volleyball
              </Link>
            </div>
            <div>
              <Link to="/tennis" className="box-link">
                Tennis
              </Link>
            </div>
          </Box>
        </Modal>
      </header>
      <main>
        <div className="football-page-hero">
          <svg
            className="svg1"
            xmlns="http://www.w3.org/2000/svg"
            width="820"
            height="206"
            viewBox="0 0 820 206"
            fill="none"
          >
            <path d="M-3 0H819.5L709.5 206H-3V0Z" fill="#006A4A" />
          </svg>
          <div className="cut1">
            <div>Life is about timing</div>
            <div className="cut1-2">Just play.</div>
          </div>
          <div className="cut2">
            <div className="cut2-1">Have fun.</div>
            <div className="cut2-2">Enjoy the game.</div>
          </div>
        </div>
        <div className="f-stadiums">
          <div className="stadiums-title">Our stadiums</div>
          <div className="stadiums-terrain">
            {terrains &&
              terrains.map((terrain, index) => (
                <div className="stadiums-terrain-single" key={index}>
                  <img src={terrain.image} alt={terrain.name} />
                  <div>
                    <div>{terrain.name}</div>
                    <div className="dimensions">({terrain.dimensions})</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="booking-container">
          <div className="booking">
            <div className="booking-schedule">SCHEDULE AND BOOKINGS</div>
            <div className="dropdown">
              <button className="button" onClick={toggleDropdown}>
                {stadium}{" "}
                <span style={{ fontSize: "18px", paddingLeft: "3px" }}>
                  &#11167;
                </span>
              </button>
              {isOpen && (
                <div className="dropdown-list">
                  {terrains &&
                    terrains.map((terrain, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setStadium(terrain.name);
                          setStadiumId(terrain._id);
                          setHourPrice(terrain.hourPrice);
                        }}
                      >
                        {terrain.name}
                      </div>
                    ))}
                </div>
              )}
            </div>
            <div className="calendar-days">
              <div className="calendar-days-day">{today}</div>
              <div className="calendar-days-day">{day2}</div>
              <div className="calendar-days-day">{day3}</div>
              <div className="calendar-days-day">{day4}</div>
              <div className="calendar-days-day">{day5}</div>
            </div>
            <div className="booking-expamles">
              <div className="booking-expamle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="63"
                  viewBox="0 0 64 63"
                  fill="none"
                >
                  <path
                    d="M32 0C14.356 0 0 13.9105 0 31.0071C0 48.1036 14.356 62.0141 32 62.0141C49.644 62.0141 64 48.1036 64 31.0071C64 13.9105 49.644 0 32 0ZM32 60.0762C15.458 60.0762 2 47.0358 2 31.0071C2 14.9783 15.458 1.93794 32 1.93794C48.542 1.93794 62 14.9783 62 31.0071C62 47.0358 48.542 60.0762 32 60.0762Z"
                    fill="#006A4A"
                  />
                  <path
                    d="M45.2682 19.6993L28.1762 37.5478C27.7962 37.9509 27.0922 37.947 26.7122 37.5478L18.7342 29.2166C18.3562 28.8232 17.7202 28.7999 17.3202 29.1662C16.9142 29.5305 16.8902 30.1429 17.2682 30.5344L25.2442 38.8656C25.8102 39.4586 26.6142 39.7958 27.4462 39.7958C28.2762 39.7958 29.0782 39.4566 29.6442 38.8656L46.7342 21.0171C47.1102 20.6257 47.0882 20.0114 46.6822 19.649C46.2802 19.2846 45.6442 19.304 45.2682 19.6993Z"
                    fill="#006A4A"
                  />
                </svg>
                <div>7 pm - 8 pm</div>
                <div>Mouhamad</div>
              </div>
              <div className="booking-expamle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="63"
                  viewBox="0 0 64 63"
                  fill="none"
                >
                  <path
                    d="M32 0C14.356 0 0 13.9105 0 31.0071C0 48.1036 14.356 62.0141 32 62.0141C49.644 62.0141 64 48.1036 64 31.0071C64 13.9105 49.644 0 32 0ZM32 60.0762C15.458 60.0762 2 47.0358 2 31.0071C2 14.9783 15.458 1.93794 32 1.93794C48.542 1.93794 62 14.9783 62 31.0071C62 47.0358 48.542 60.0762 32 60.0762Z"
                    fill="#006A4A"
                  />
                  <path
                    d="M45.2682 19.6993L28.1762 37.5478C27.7962 37.9509 27.0922 37.947 26.7122 37.5478L18.7342 29.2166C18.3562 28.8232 17.7202 28.7999 17.3202 29.1662C16.9142 29.5305 16.8902 30.1429 17.2682 30.5344L25.2442 38.8656C25.8102 39.4586 26.6142 39.7958 27.4462 39.7958C28.2762 39.7958 29.0782 39.4566 29.6442 38.8656L46.7342 21.0171C47.1102 20.6257 47.0882 20.0114 46.6822 19.649C46.2802 19.2846 45.6442 19.304 45.2682 19.6993Z"
                    fill="#006A4A"
                  />
                </svg>
                <div>7 pm - 8 pm</div>
                <div>Mouhamad</div>
              </div>
              <div className="booking-expamle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="63"
                  viewBox="0 0 64 63"
                  fill="none"
                >
                  <path
                    d="M32 0C14.356 0 0 13.9105 0 31.0071C0 48.1036 14.356 62.0141 32 62.0141C49.644 62.0141 64 48.1036 64 31.0071C64 13.9105 49.644 0 32 0ZM32 60.0762C15.458 60.0762 2 47.0358 2 31.0071C2 14.9783 15.458 1.93794 32 1.93794C48.542 1.93794 62 14.9783 62 31.0071C62 47.0358 48.542 60.0762 32 60.0762Z"
                    fill="#006A4A"
                  />
                  <path
                    d="M45.2682 19.6993L28.1762 37.5478C27.7962 37.9509 27.0922 37.947 26.7122 37.5478L18.7342 29.2166C18.3562 28.8232 17.7202 28.7999 17.3202 29.1662C16.9142 29.5305 16.8902 30.1429 17.2682 30.5344L25.2442 38.8656C25.8102 39.4586 26.6142 39.7958 27.4462 39.7958C28.2762 39.7958 29.0782 39.4566 29.6442 38.8656L46.7342 21.0171C47.1102 20.6257 47.0882 20.0114 46.6822 19.649C46.2802 19.2846 45.6442 19.304 45.2682 19.6993Z"
                    fill="#006A4A"
                  />
                </svg>
                <div>7 pm - 8 pm</div>
                <div>Mouhamad</div>
              </div>
            </div>
            <div className="booking-last">
              <div>
                If you haven’t played yet in our stadiums, you’re losing.
              </div>
              <Link className="link" to="/booking">
                <button>BOOK AND PLAY</button>
              </Link>
              {/* <Modal
                open={bookingOpen}
                onClose={handleBookingClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="booking-box">
                  <span onClick={handleBookingClose} className="box-close">
                    &#x2715;
                  </span>
                  <div className="stad-name">{stadium}</div>
                  <div className="choose-date">
                    Choose date{" "}
                    <input
                      type="date"
                      onChange={(e) =>{setDate(e.target.value);}}
                    />
                  </div>
                  <div className="duration">
                    1 hour
                    <input
                      type="radio"
                      value="1"
                      onChange={(e) => setDuration(e.target.value)}
                      name="duration"
                    />
                    2 hours
                    <input
                      type="radio"
                      value="2"
                      onChange={(e) => setDuration(e.target.value)}
                      name="duration"
                    />
                  </div>
                  <div className="time">
                    <select name="" id="">
                    {filteredSlots && filteredSlots.map((slot, index)=>(
                      <option value={slot} key={index}>{slot}</option>
                    ))}
                    </select>
                  </div>
                  <div className="bill">{duration * hourPrice}</div>
                </Box>
              </Modal> */}
            </div>
          </div>
          <img src={messi} alt="messi" />
        </div>
      </main>
      <footer className="footer">
        <div className="footer-div">
          <div className="footer-div1">
            <div className="footer-logo-title">
              <img src={logo} alt="logo" className="logo" />
              <div>Champions arena</div>
            </div>
            <div className="footer-social-media">
              <img src={insta} alt="insta" />
              <img src={facebook} alt="facebook" />
              <img src={tiktok} alt="tiktok" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>
          <div className="footer-div2">
            <ul className="menu2">
              <Link to="/events" className="link">
                <li>{language === "english" ? "Events" : "Evénements"}</li>
              </Link>
              <Link to="/cafeteria" className="link">
                <li>Cafeteria</li>
              </Link>
              <Link to="/store" className="link">
                <li>Store</li>
              </Link>
              <Link to="/about" className="link">
                <li>About</li>
              </Link>
              <Link to="/contact" className="link">
                <li>Contact</li>
              </Link>
            </ul>
            <div>
              © {language === "english" ? "Copyright" : "Droit d'auteur"} 2024
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FootballPage;
