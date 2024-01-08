import { React, useState, useEffect } from "react";
import { useNagivate, Link } from "react-router-dom";
import "./footballPage.css";
import logo from "../images/champions-arena-logo.png";
import languagee from "../images/global-svgrepo-com (2).svg";
import insta from "../images/icons8-insta-48.png";
import facebook from "../images/icons8-facebook-48.png";
import tiktok from "../images/icons8-tic-tac-50 (1).png";
import twitter from "../images/icons8-twitterx-50.png";
import grandTerrain from "../images/grandterrain.jpg";
import terrainA from "../images/terrain1.jpg";
import terrainB from "../images/terrain2.jpg";
import terrainC from "../images/terrain3.jpg";
import messi from "../images/Rectangle94.png";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

function FootballPage() {
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

  return (
    <div className="body">
      <header className="header">
      <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
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
              <div><Link to="/football" className="link">Football</Link></div>
              <div><Link to="/basketball" className="link">Basketball</Link></div>
              <div><Link to="/volleyball" className="link">Volleyball</Link></div>
              <div><Link to="/tennis" className="link">Tennis</Link></div>
            </div>
          )}
          <Link to="/events" className="link">
            <li>{language === "english" ? "Events" : "Evénements"}</li>
          </Link>
          <Link to="/cafeteria" className="link"><li>Cafeteria</li></Link>
          <Link to="/store" className="link"><li>Store</li></Link>
          <Link to="/about" className="link"><li>About</li></Link>
          <Link to="/contact" className="link"><li>Contact</li></Link>
        </ul>

        <div className="reg-lan">
          <button className="reg-button">
            <Link to="/connect" className="link">
              {language === "english" ? "Connect" : "Relier"}
            </Link>
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
      <Link to="/"><img src={logo} alt="logo" className="phone-logo" /></Link>
        <div className="phone-title">CHAMPIONS ARENA</div>
        <div className="phone-reg-lan">
          <button className="phone-reg-button">
            {language === "english" ? "Connect" : "Relier"}
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
            <Link to="/events" className="link"><li>Events</li></Link> 
            <Link to="/cafeteria" className="link"><li>Cafeteria</li></Link>
            <Link to="/store" className="link"><li>Store</li></Link>
            <Link to="/about" className="link"><li>About</li></Link>
            <Link to="/contact" className="link"><li>Contact</li></Link>
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
            <div className="stadiums-terrain-single">
              <img src={grandTerrain} alt="grandTerrain" />
              <div>
                <div>Grand terrain</div>
                <div className="dimensions">(90m - 50m)</div>
              </div>
            </div>
            <div className="stadiums-terrain-single">
              <img src={terrainA} alt="terrainA" />
              <div>
                <div>Terrain A </div>
                <div className="dimensions">(45m - 27m)</div>
              </div>
            </div>
            <div className="stadiums-terrain-single">
              <img src={terrainB} alt="terrainB" />
              <div>
                <div>Terrain B </div>
                <div className="dimensions">(45m - 27m)</div>
              </div>
            </div>
            <div className="stadiums-terrain-single">
              <img src={terrainC} alt="terrainC" />
              <div>
                <div>Terrain C </div>
                <div className="dimensions">(45m - 27m)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="booking-container">
          <div className="booking">
            <div className="booking-schedule">SCHEDULE AND BOOKINGS</div>
            <div className="dropdown">
              <button className="button" onClick={toggleDropdown}>
                Grand terrain{" "}
                <span style={{ fontSize: "18px", paddingLeft: "3px" }}>
                  &#11167;
                </span>
              </button>
              {isOpen && (
                <div className="dropdown-list">
                  <div>Grand terrain</div>
                  <div>Terrain A</div>
                  <div>Terrain B</div>
                  <div>Terrain C</div>
                </div>
              )}
            </div>
            <div className="calendar-days">
              <div className="calendar-days-day">30</div>
              <div className="calendar-days-day">31</div>
              <div className="calendar-days-day">1</div>
              <div className="calendar-days-day">2</div>
              <div className="calendar-days-day">3</div>
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
              <button>BOOK AND PLAY</button>
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

export default FootballPage;
