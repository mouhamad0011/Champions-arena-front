import { React, useState, useEffect } from "react";
import { useNagivate, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./footballPage.css";
import "./TennisPage.css";
import logo from "../images/champions-arena-logo.png";
import languagee from "../images/global-svgrepo-com (2).svg";
import insta from "../images/icons8-insta-48.png";
import facebook from "../images/icons8-facebook-48.png";
import tiktok from "../images/icons8-tic-tac-50 (1).png";
import twitter from "../images/icons8-twitterx-50.png";
import lebron from "../images/tenniscut.png";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { getTerrainsBySport } from "../redux/actions/terrain";
import { getBookingsByDateAndName } from "../redux/actions/booking";
import {getUserRole} from "../UserInfo/GetUserInfo";

function TennisPage() {
  const role = getUserRole();
  const bookings = useSelector((state) => state.bookings);
  const terrains = useSelector((state) => state.terrains);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
 
  var today = new Date();

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
  const firstDay = new Date();
  var secondDay = new Date(firstDay);
  secondDay.setDate(secondDay.getDate() + 1);
  var thirdDay = new Date(firstDay);
  thirdDay.setDate(thirdDay.getDate() + 2);
  var fourthDay = new Date(firstDay);
  fourthDay.setDate(fourthDay.getDate() + 3);
  var fifthDay = new Date(firstDay);
  fifthDay.setDate(fifthDay.getDate() + 4);
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  const handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/connect")
  };

  const [date, setDate] = useState(
    firstDay.toLocaleDateString("en-GB").split("/")[0] +
      "-" +
      firstDay.toLocaleDateString("en-GB").split("/")[1] +
      "-" +
      firstDay.toLocaleDateString("en-GB").split("/")[2]
  );

  useEffect(() => {
    dispatch(getTerrainsBySport("tennis"));
    dispatch(getBookingsByDateAndName("65a2817ac29070d467610732", date));
  }, [date]);

  setTimeout(() => {
    console.log(bookings);
  }, 6000);


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
              className={token ? "sports" : "sports2"}
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
          {token && (
            <Link to={role === "admin" ? "/admin" : "user"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M0 0V14.5H14.5V0H0ZM17.625 0V14.5H32.125V0H17.625ZM35.25 0V14.5H50V0H35.25ZM0 17.625V32.125H14.5V17.625H0ZM17.625 17.625V32.125H32.125V17.625H17.625ZM35.25 17.625V32.125H50V17.625H35.25ZM0 35.25V50H14.5V35.25H0ZM17.625 35.25V50H32.125V35.25H17.625ZM35.25 35.25V50H50V35.25H35.25Z"
                fill="white"
              />
            </svg>
            </Link>
          )}
          {/* <img
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
          )} */}
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
          {token && (
            <Link to={role === "admin" ? "/admin" : "user"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M0 0V14.5H14.5V0H0ZM17.625 0V14.5H32.125V0H17.625ZM35.25 0V14.5H50V0H35.25ZM0 17.625V32.125H14.5V17.625H0ZM17.625 17.625V32.125H32.125V17.625H17.625ZM35.25 17.625V32.125H50V17.625H35.25ZM0 35.25V50H14.5V35.25H0ZM17.625 35.25V50H32.125V35.25H17.625ZM35.25 35.25V50H50V35.25H35.25Z"
                fill="white"
              />
            </svg>
            </Link>
          )}
          {/* <img
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
          )} */}
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
        <div className="tennis-page-hero">
          <svg
            className="svg1"
            xmlns="http://www.w3.org/2000/svg"
            width="820"
            height="206"
            viewBox="0 0 820 206"
            fill="none"
          >
            <path d="M-3 0H819.5L709.5 206H-3V0Z" fill="#FFCE00" />
          </svg>
          <div className="t-cut1">
            <div>Life is about timing</div>
            <div className="cut1-2">Just play.</div>
          </div>
          <div className="t-cut2">
            <div className="cut2-1">Have fun.</div>
            <div className="cut2-2">Enjoy the game.</div>
          </div>
        </div>
        <div className="stadiums">
          <div className="stadiums-title">Our Court</div>
          <div className="stadiums-terrain">
            <div className="stadiums-terrain-single">
              <img src={terrains && terrains[0]?.image} alt={terrains && terrains[0]?.name} />
              <div>
                <div>{terrains && terrains[0]?.name}</div>
                <div className="dimensions">({terrains && terrains[0]?.dimensions})</div>
              </div>
            </div>
          </div>
        </div>
        <div className="booking-container">
          <div className="booking">
            <div className="booking-schedule">SCHEDULE AND BOOKINGS</div>
            <div className="dropdown">
              <button className="button">Tennis court</button>
            </div>
            <div className="calendar-days">
            <div
                className="calendar-days-day"
                onClick={() => {
                  setDate(
                    firstDay.toLocaleDateString("en-GB").split("/")[0] +
                      "-" +
                      firstDay.toLocaleDateString("en-GB").split("/")[1] +
                      "-" +
                      firstDay.toLocaleDateString("en-GB").split("/")[2]
                  );
                }}
              >
                {today}
              </div>
              <div
                className="calendar-days-day"
                onClick={() => {
                  setDate(
                    secondDay.toLocaleDateString("en-GB").split("/")[0] +
                      "-" +
                      secondDay.toLocaleDateString("en-GB").split("/")[1] +
                      "-" +
                      secondDay.toLocaleDateString("en-GB").split("/")[2]
                  );
                }}
              >
                {day2}
              </div>
              <div
                className="calendar-days-day"
                onClick={() => {
                  setDate(
                    thirdDay.toLocaleDateString("en-GB").split("/")[0] +
                      "-" +
                      thirdDay.toLocaleDateString("en-GB").split("/")[1] +
                      "-" +
                      thirdDay.toLocaleDateString("en-GB").split("/")[2]
                  );
                }}
              >
                {day3}
              </div>
              <div
                className="calendar-days-day"
                onClick={() => {
                  setDate(
                    fourthDay.toLocaleDateString("en-GB").split("/")[0] +
                      "-" +
                      fourthDay.toLocaleDateString("en-GB").split("/")[1] +
                      "-" +
                      fourthDay.toLocaleDateString("en-GB").split("/")[2]
                  );
                }}
              >
                {day4}
              </div>
              <div
                className="calendar-days-day"
                onClick={() => {
                  setDate(
                    fifthDay.toLocaleDateString("en-GB").split("/")[0] +
                      "-" +
                      fifthDay.toLocaleDateString("en-GB").split("/")[1] +
                      "-" +
                      fifthDay.toLocaleDateString("en-GB").split("/")[2]
                  );
                }}
              >
                {day5}
              </div>
            </div>
            <div className="booking-expamles">
              {bookings &&
                bookings.map(
                  (booking, index) =>
                    index <= 2 && (
                      <div className="booking-expamle" key={index}>
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
                        <div className="booking-expamle-time">
                          {booking.time}
                        </div>
                        <div>
                          {booking.userId
                            ? booking.userId.firstName
                            : booking.firstName}
                        </div>
                      </div>
                    )
                )}
                {bookings.length === 2 && (
                <>
                  <div className="booking-expamle">
                    <div>No more bookings for today</div>
                  </div>
                </>
              )}
              {bookings.length === 1 && (
                <>
                  <div className="booking-expamle">
                    <div>No more bookings for today</div>
                  </div>
                  <div className="booking-expamle">
                    <div>No more bookings for today</div>
                  </div>
                </>
              )}
              {bookings.length === 0 && (
                <>
                  <div className="booking-expamle">
                    <div>No bookings for this day</div>
                  </div>
                  <div className="booking-expamle">
                    <div>No bookings for this day</div>
                  </div>
                  <div className="booking-expamle">
                    <div>No bookings for this day</div>
                  </div>
                </>
              )}
            </div>
            <div className="booking-last">
              <div>If you haven’t played yet in our court, you’re losing.</div>
              <Link className="link" to="/user">
                <button>BOOK AND PLAY</button>
              </Link>
            </div>
          </div>
          <img src={lebron} alt="messi" />
        </div>
      </main>
      <footer className="t-footer">
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
            <Link to="/events" className="link"><li>{language === "english" ? "Events" : "Evénements"}</li></Link> 
            <Link to="/cafeteria" className="link"><li>Cafeteria</li></Link>
            <Link to="/store" className="link"><li>Store</li></Link>
            <Link to="/about" className="link"><li>About</li></Link>
            <Link to="/contact" className="link"><li>Contact</li></Link>
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

export default TennisPage;
