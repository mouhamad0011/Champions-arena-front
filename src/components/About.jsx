import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./home.css";
import "./about.css";
import logo from "../images/champions-arena-logo.png";
import languagee from "../images/global-svgrepo-com (2).svg";
import insta from "../images/icons8-insta-48.png";
import facebook from "../images/icons8-facebook-48.png";
import tiktok from "../images/icons8-tic-tac-50 (1).png";
import twitter from "../images/icons8-twitterx-50.png";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import first from "../images/Group 46.png";
import second from "../images/Group 47.png";
import third from "../images/Group 48.png";
import {getUserRole} from "../UserInfo/GetUserInfo";

function About() {
  const role = getUserRole();
  const navigate = useNavigate()
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
  const token = localStorage.getItem("token");
  const handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/connect")
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
        <div className="about-hero">
          <div className="desc">
            <div className="about-wel">
              WELCOME TO <br />
              CHAMPIONS ARENA
            </div>
            <div className="cap">
              <div className="one">FITNESS! FUN! COMMUNITY!</div>
              <div className="two">“Agissons maintenant pour demain!”</div>
            </div>
          </div>
        </div>
        <div className="about-main">
          <div className="first-two">
            <div className="block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="121"
                height="131"
                viewBox="0 0 121 131"
                fill="none"
              >
                <path
                  d="M120.195 0.402832H0.195312V130.403H120.195V0.402832Z"
                  fill="white"
                  fill-opacity="0.01"
                />
                <path
                  d="M90.1953 41.0282C97.0988 41.0282 102.695 34.9653 102.695 27.4865C102.695 20.0076 97.0988 13.9448 90.1953 13.9448C83.2918 13.9448 77.6953 20.0076 77.6953 27.4865C77.6953 34.9653 83.2918 41.0282 90.1953 41.0282Z"
                  fill="white"
                  stroke="#FFCE00"
                  stroke-width="12.25"
                />
                <path
                  d="M30.1953 45.8193L50.2031 38.3142L77.6953 52.5292L50.2031 74.731L77.6953 94.3372L60.2161 119.564"
                  stroke="#FFCE00"
                  stroke-width="12.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M88.4941 59.0206L95.1984 62.9705L110.194 47.7063"
                  stroke="#FFCE00"
                  stroke-width="12.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M42.3159 85.8386L34.8916 96.4331L10.2031 111.435"
                  stroke="#FFCE00"
                  stroke-width="12.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="text">
                Revolutionize your sports experience with our all-in-one
                platform, where enthusiasts can effortlessly book football,
                basketball, volleyball, and tennis stadiums to unleash their
                passion for play.
              </div>
            </div>
            <div className="block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="101"
                viewBox="0 0 100 101"
                fill="none"
              >
                <path
                  d="M19.9922 0.844727C19.9922 6.19902 19.9922 21.1896 19.9922 27.6146C19.9922 49.566 39.4087 58.1322 49.9994 58.1322C60.5902 58.1322 80.0067 49.566 80.0067 27.6146C80.0067 21.1896 80.0067 6.19902 80.0067 0.844727H19.9922ZM50.0559 10.718L36.7316 16.532V35.7652L36.7221 39.5797C36.6192 39.5578 27.4812 37.6047 27.4812 24.2689C27.4812 18.767 27.4812 10.6752 27.4812 10.6752H39.2849L50.0559 10.718Z"
                  fill="#FFCE00"
                />
                <path
                  d="M61.6278 79.1096L56.9771 72.6184L54.6529 63.0527L50.0024 63.7359L45.3519 63.0527L43.0267 72.6184L40.101 76.7027L38.377 79.0625H38.4106L38.377 79.1096H61.6278Z"
                  fill="#FFCE00"
                />
                <path
                  d="M71.6843 85.2666V85.2197H28.3164V100.766V100.798V100.845H71.6843V85.2982V85.2666Z"
                  fill="#FFCE00"
                />
                <path
                  d="M99.9701 19.7252C99.9637 19.4775 99.9568 19.2689 99.9568 19.1053V9.65332H85.5134V17.2189H92.3847V19.1053C92.3847 19.3254 92.392 19.6047 92.4016 19.9369C92.4776 22.6666 92.6563 29.0594 88.1901 33.6484C87.189 34.6769 85.9966 35.5599 84.6287 36.3072C83.8697 39.7516 82.6527 42.8627 81.0898 45.6459C86.2818 44.3947 90.4777 42.1502 93.619 38.9228C100.315 32.0428 100.065 23.0943 99.9701 19.7252Z"
                  fill="#FFCE00"
                />
                <path
                  d="M11.8091 33.6484C7.34291 29.0594 7.52157 22.6666 7.59839 19.9369C7.60758 19.6047 7.61442 19.3254 7.61442 19.1053V17.2189H14.4251H14.4388H14.4857V9.65332H0.0425293V19.1053C0.0425293 19.2689 0.0362741 19.4775 0.0292371 19.7252C-0.0649815 23.0943 -0.314798 32.0428 6.38098 38.923C9.52186 42.1504 13.7173 44.3945 18.9093 45.6461C17.3463 42.8629 16.1297 39.7512 15.3706 36.307C14.0025 35.5596 12.8101 34.6769 11.8091 33.6484Z"
                  fill="#FFCE00"
                />
              </svg>
              <div className="text">
                Elevate your game and be part of the excitement! Join our
                thrilling tournaments and events, where enthusiasts unite to
                showcase their skills and passion for sports.
              </div>
            </div>
          </div>
          <div className="last-about">
            <div className="block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="101"
                viewBox="0 0 100 101"
                fill="none"
              >
                <path
                  d="M75 0.0849609H63.1L61.65 2.38496C60.4105 4.34721 58.6945 5.96378 56.6618 7.08404C54.6291 8.20431 52.3459 8.79181 50.025 8.79181C47.7041 8.79181 45.4209 8.20431 43.3882 7.08404C41.3555 5.96378 39.6395 4.34721 38.4 2.38496L36.9 0.0849609H25C18.3696 0.0849609 12.0107 2.71888 7.32233 7.40729C2.63392 12.0957 0 18.4545 0 25.085V50.085H20V100.085H80V50.085H100V25.085C100 18.4545 97.3661 12.0957 92.6777 7.40729C87.9893 2.71888 81.6304 0.0849609 75 0.0849609ZM90 40.085H80V25.085H70V90.085H30V25.085H20V40.085H10V25.085C10 21.1067 11.5804 17.2914 14.3934 14.4784C17.2064 11.6653 21.0218 10.085 25 10.085H31.6C33.8273 12.8141 36.6339 15.0136 39.8163 16.5241C42.9987 18.0346 46.4773 18.8182 50 18.8182C53.5227 18.8182 57.0013 18.0346 60.1837 16.5241C63.3661 15.0136 66.1727 12.8141 68.4 10.085H75C78.9782 10.085 82.7936 11.6653 85.6066 14.4784C88.4196 17.2914 90 21.1067 90 25.085V40.085Z"
                  fill="#FFCE00"
                />
              </svg>
              <div className="text">
                Explore our wide range of high-quality sportswear and equipment,
                curated for athletes who demand performance and style. Elevate
                your game both on and off the field with our premium selection
                of sport clothes and essentials.
              </div>
            </div>
            <div className="description">
              <div className="title">About Champions arena</div>
              <div className="text">
                Empowering the sports community, our all-encompassing platform
                brings together enthusiasts to book stadiums, participate in
                tournaments, and shop top-tier sportswear. Experience a seamless
                blend of passion, competition, and style, all in one innovative
                hub designed for athletes at every level.
              </div>
            </div>
          </div>
        </div>
        <div className="membership-container">
          <div className="title-div">
            <div className="title">MEMBERSHIP</div>
            <div className="sub-title">
              Choose a membership level that fits your needs
            </div>
          </div>
          <div className="memberships">
            <div className="membership">
              <div className="top-part">
                <img src={first} alt="" />
                <div className="price">50$</div>
                <div className="per-month">PER MONTH</div>
              </div>
              <div className="bottom-part">
                <div className="text">7-day advance court booking</div>
                <div className="hr"></div>
                <div className="text">one reservation per day</div>
                <div className="hr"></div>
                <div className="text">Must be between 15 - 18</div>
                <div className="hr"></div>
                <div className="text">50$ initiation fee </div>
              </div>
            </div>
            <div className="membership2">
              <div className="top-part">
                <img src={second} alt="" />
                <div className="price">125$</div>
                <div className="per-month">PER MONTH</div>
              </div>
              <div className="bottom-part">
                <div className="text">7-day advance court booking</div>
                <div className="hr"></div>
                <div className="text">one reservation per day</div>
                <div className="hr"></div>
                <div className="text">8am - 11am access, 7days/week</div>
                <div className="hr"></div>
                <div className="text">125$ initiation fee </div>
              </div>
            </div>
            <div className="membership">
              <div className="top-part">
                <img src={third} alt="" />
                <div className="price">250$</div>
                <div className="per-month">PER MONTH</div>
              </div>
              <div className="bottom-part">
                <div className="text">14-day advance court booking</div>
                <div className="hr"></div>
                <div className="text">two reservations per day</div>
                <div className="hr"></div>
                <div className="text">24/7 free access</div>
                <div className="hr"></div>
                <div className="text">250$ initiation fee </div>
              </div>
            </div>
          </div>
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

export default About;
