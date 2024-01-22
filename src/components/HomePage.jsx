import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import logo from "../images/champions-arena-logo.png";
import languagee from "../images/global-svgrepo-com (2).svg";
import messiGoal from "../videos/messivsbayern.mp4";
import lebronDunk from "../videos/lebronjames.mp4";
import messi from "../images/messi.jpg";
import insta from "../images/icons8-insta-48.png";
import facebook from "../images/icons8-facebook-48.png";
import tiktok from "../images/icons8-tic-tac-50 (1).png";
import twitter from "../images/icons8-twitterx-50.png";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {getUserRole} from "../UserInfo/GetUserInfo";

function HomePage() {
  const role = getUserRole();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [language, setLanguage] = useState("english");
  const [football, setFootball] = useState(false);
  const [basketball, setBasketball] = useState(false);
  const [tennis, setTennis] = useState(false);
  const [SisHovering, setSIsHovering] = useState(false);
  const [LisHovering, setLIsHovering] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const navigate = useNavigate()
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
  const handleV1Play = () => {
    setFootball(true);
  };
  const handleV1Pause = () => {
    setFootball(false);
  };
  const handleV2Play = () => {
    setBasketball(true);
  };
  const handleV2Pause = () => {
    setBasketball(false);
  };
  const handleV3Play = () => {
    setTennis(true);
  };
  const handleV3Pause = () => {
    setTennis(false);
  };

  const token = localStorage.getItem("token");
  const handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/login")
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
        <div className="home-page-hero">
          <div className="see-more">
            <div className="welcome">Welcome to Champions arena</div>
            <div className="welcome-detail">
              In our website, you can find the sport you want and finally
              achieve your dream
            </div>
            <button className="welcome-button">
              <Link to="/about" className="link">
                More about website
              </Link>
              <span style={{paddingLeft:"5px"}}>&#8594;</span>
            </button>
          </div>
        </div>
        <div className="sports-icons">
          <div className="sport">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 81 80"
              fill="none"
            >
              <path
                d="M71.0117 61.3954C72.5497 61.3954 73.7966 60.1459 73.7966 58.6047C73.7966 57.0634 72.5497 55.814 71.0117 55.814V61.3954ZM46.1164 74.4673C45.6304 75.9297 46.4194 77.5096 47.8787 77.9967C49.338 78.4833 50.915 77.6927 51.401 76.2303L46.1164 74.4673ZM10.9067 55.814C9.36869 55.814 8.12185 57.0634 8.12185 58.6047C8.12185 60.1459 9.36869 61.3954 10.9067 61.3954V55.814ZM30.5177 76.2303C31.0036 77.6927 32.5804 78.4833 34.0397 77.9967C35.499 77.5096 36.2881 75.9297 35.8024 74.4673L30.5177 76.2303ZM16.693 15.663C16.2953 14.1741 14.7685 13.2902 13.2828 13.6886C11.797 14.0871 10.9149 15.6171 11.3126 17.106L16.693 15.663ZM2.10541 39.955C0.822366 40.8048 0.469764 42.5362 1.31789 43.8218C2.16605 45.1077 3.89371 45.4608 5.17675 44.611L2.10541 39.955ZM70.0808 17.1063C70.4785 15.6175 69.5962 14.0874 68.1106 13.689C66.625 13.2905 65.0981 14.1744 64.7004 15.6633L70.0808 17.1063ZM76.2164 44.6114C77.4997 45.4612 79.2274 45.1081 80.0755 43.8221C80.9236 42.5366 80.5709 40.8052 79.288 39.9553L76.2164 44.6114ZM55.8085 9.62318C57.0654 8.73488 57.3655 6.99371 56.4791 5.73421C55.5928 4.47468 53.855 4.17377 52.5981 5.0621L55.8085 9.62318ZM28.053 4.26638C26.8155 3.35103 25.0719 3.61425 24.1585 4.85429C23.2451 6.09429 23.5077 7.84156 24.7452 8.75688L28.053 4.26638ZM74.8815 40C74.8815 59.0121 59.5202 74.4186 40.5779 74.4186V80C62.6025 80 80.4513 62.0882 80.4513 40H74.8815ZM40.5779 74.4186C21.6352 74.4186 6.27384 59.0121 6.27384 40H0.704102C0.704102 62.0882 18.5531 80 40.5779 80V74.4186ZM6.27384 40C6.27384 20.9881 21.6352 5.5814 40.5779 5.5814V0C18.5531 0 0.704102 17.9117 0.704102 40H6.27384ZM40.5779 5.5814C59.5202 5.5814 74.8815 20.9881 74.8815 40H80.4513C80.4513 17.9117 62.6025 0 40.5779 0V5.5814ZM41.1375 32.7795L47.9567 38.006L51.3405 33.5725L44.5209 28.3461L41.1375 32.7795ZM48.2794 39.0214L45.601 47.7172L50.9231 49.3633L53.6014 40.6675L48.2794 39.0214ZM44.7184 48.3721H36.437V53.9535H44.7184V48.3721ZM35.5543 47.7172L32.8759 39.0214L27.5539 40.6675L30.2323 49.3633L35.5543 47.7172ZM33.1987 38.006L40.0179 32.7795L36.6345 28.3461L29.8151 33.5725L33.1987 38.006ZM71.0117 55.814H65.0146V61.3954H71.0117V55.814ZM48.2983 67.9003L46.1164 74.4673L51.401 76.2303L53.5829 69.6633L48.2983 67.9003ZM65.0146 55.814C62.4985 55.814 60.3772 55.8099 58.6498 56.0074C56.8512 56.2136 55.1999 56.6627 53.7013 57.7462L56.9607 62.2724C57.4044 61.9513 58.0153 61.6979 59.2822 61.5527C60.6208 61.3994 62.37 61.3954 65.0146 61.3954V55.814ZM53.5829 69.6633C54.4191 67.1464 54.9764 65.4824 55.5449 64.2564C56.0833 63.0954 56.5163 62.5935 56.9607 62.2724L53.7013 57.7462C52.203 58.8298 51.2569 60.2582 50.4939 61.9044C49.7605 63.4854 49.094 65.5051 48.2983 67.9003L53.5829 69.6633ZM10.9067 61.3954H16.9038V55.814H10.9067V61.3954ZM28.3357 69.6633L30.5177 76.2303L35.8024 74.4673L33.6202 67.9003L28.3357 69.6633ZM16.9038 61.3954C19.5484 61.3954 21.2977 61.3994 22.6362 61.5527C23.9033 61.6979 24.5139 61.9513 24.9579 62.2724L28.2171 57.7462C26.7184 56.6627 25.0675 56.2136 23.2687 56.0074C21.5412 55.8099 19.42 55.814 16.9038 55.814V61.3954ZM33.6202 67.9003C32.8245 65.5051 32.1579 63.4854 31.4248 61.9044C30.6616 60.2586 29.7154 58.8298 28.2171 57.7462L24.9579 62.2724C25.4021 62.5935 25.8353 63.0954 26.3737 64.2564C26.9422 65.4824 27.4995 67.1464 28.3357 69.6633L33.6202 67.9003ZM11.3126 17.106L12.8647 22.9175L18.2451 21.4745L16.693 15.663L11.3126 17.106ZM7.86348 36.1407L2.10541 39.955L5.17675 44.611L10.9348 40.797L7.86348 36.1407ZM12.8647 22.9175C13.5492 25.4801 13.998 27.177 14.1969 28.5144C14.3853 29.7809 14.2995 30.4398 14.1048 30.9545L19.3128 32.9328C19.9678 31.2015 19.9729 29.4871 19.7058 27.6916C19.4493 25.967 18.8964 23.913 18.2451 21.4745L12.8647 22.9175ZM10.9348 40.797C13.0347 39.4061 14.8069 38.237 16.1397 37.117C17.5275 35.9513 18.6578 34.6646 19.3128 32.9328L14.1048 30.9545C13.9101 31.469 13.539 32.0186 12.561 32.8406C11.528 33.7083 10.0703 34.6791 7.86348 36.1407L10.9348 40.797ZM64.7004 15.6633L63.1483 21.4749L68.5287 22.9179L70.0808 17.1063L64.7004 15.6633ZM70.4584 40.7974L76.2164 44.6114L79.288 39.9553L73.53 36.141L70.4584 40.7974ZM63.1483 21.4749C62.497 23.9134 61.9441 25.9673 61.6876 27.6919C61.4206 29.4874 61.4254 31.2019 62.0804 32.9332L67.2885 30.9548C67.0939 30.4401 67.0082 29.7813 67.1964 28.5147C67.3954 27.1773 67.844 25.4804 68.5287 22.9179L63.1483 21.4749ZM73.53 36.141C71.3229 34.6794 69.8654 33.7087 68.8324 32.8406C67.8544 32.0189 67.4831 31.4694 67.2885 30.9548L62.0804 32.9332C62.7354 34.6649 63.8657 35.9516 65.2537 37.1174C66.5863 38.2374 68.3586 39.4065 70.4584 40.7974L73.53 36.141ZM52.5981 5.0621L47.6956 8.52711L50.9057 13.0882L55.8085 9.62318L52.5981 5.0621ZM33.6064 8.37436L28.053 4.26638L24.7452 8.75688L30.2988 12.8649L33.6064 8.37436ZM47.6956 8.52711C45.5335 10.0551 44.1009 11.0624 42.9187 11.7105C41.7991 12.3242 41.1545 12.4698 40.608 12.4638L40.5474 18.0449C42.3955 18.0649 44.0029 17.478 45.5914 16.6073C47.1171 15.771 48.8486 14.542 50.9057 13.0882L47.6956 8.52711ZM30.2988 12.8649C32.324 14.3629 34.0286 15.6291 35.5358 16.4983C37.1053 17.4032 38.6998 18.0249 40.5474 18.0449L40.608 12.4638C40.0614 12.4579 39.4201 12.2984 38.314 11.6606C37.1458 10.987 35.7352 9.94884 33.6064 8.37436L30.2988 12.8649ZM47.9567 38.006C48.1134 38.1258 48.2233 38.288 48.2797 38.4707L53.6014 36.8242C53.2123 35.5609 52.4388 34.4145 51.3405 33.5725L47.9567 38.006ZM48.2797 38.4707C48.3339 38.6471 48.3362 38.8376 48.2794 39.0214L53.6014 40.6675C53.9965 39.3857 53.9783 38.048 53.6014 36.8242L48.2797 38.4707ZM63.6192 29.3657L49.8749 35.069L52.0059 40.2259L65.7501 34.5224L63.6192 29.3657ZM44.5209 28.3461C43.3576 27.4544 41.9662 27.008 40.5779 27.008V32.5894C40.7762 32.5894 40.9715 32.6523 41.1375 32.7795L44.5209 28.3461ZM40.5779 27.008C39.1895 27.008 37.7978 27.4544 36.6345 28.3461L40.0179 32.7795C40.1839 32.6523 40.3792 32.5894 40.5779 32.5894V27.008ZM43.3628 29.7987V15.2544H37.793V29.7987H43.3628ZM45.601 47.7172C45.5439 47.9036 45.4336 48.0595 45.2888 48.1738L48.7346 52.5589C49.7457 51.7611 50.524 50.659 50.9231 49.3633L45.601 47.7172ZM45.2888 48.1738C45.1284 48.3007 44.9304 48.3721 44.7184 48.3721V53.9535C46.2137 53.9535 47.6184 53.4396 48.7346 52.5589L45.2888 48.1738ZM57.4379 58.1842L49.1185 48.541L44.9048 52.1916L53.2245 61.8344L57.4379 58.1842ZM36.437 48.3721C36.2249 48.3721 36.027 48.3007 35.8666 48.1738L32.4209 52.5589C33.537 53.4396 34.9417 53.9535 36.437 53.9535V48.3721ZM35.8666 48.1738C35.7218 48.0595 35.6115 47.9036 35.5543 47.7172L30.2323 49.3633C30.6314 50.659 31.4098 51.7611 32.4209 52.5589L35.8666 48.1738ZM28.7778 61.7328L36.3341 52.09L31.9535 48.643L24.3972 58.2858L28.7778 61.7328ZM32.8759 39.0214C32.8192 38.8376 32.8215 38.6471 32.8759 38.4707L27.5539 36.8242C27.177 38.048 27.1591 39.3857 27.5539 40.6675L32.8759 39.0214ZM32.8759 38.4707C32.9321 38.288 33.0422 38.1258 33.1987 38.006L29.8151 33.5725C28.7166 34.4145 27.9431 35.5609 27.5539 36.8242L32.8759 38.4707ZM31.2964 35.0757L17.7903 29.372L15.6273 34.5154L29.1334 40.2192L31.2964 35.0757Z"
                fill="white"
              />
            </svg>
            <div>Football</div>
            <button>
              <Link to="/football" className="link">
                Check out
              </Link>
            </button>
          </div>
          <div className="sport">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 90 90"
              fill="none"
            >
              <path
                d="M10.316 64.9966C21.3369 84.125 45.7455 90.6791 64.834 79.6353C72.6149 75.1337 78.3108 68.4028 81.5822 60.7129C86.3367 49.5368 85.9707 36.3347 79.4423 25.0034C72.9138 13.672 61.6871 6.7532 49.6515 5.29128C41.3697 4.28533 32.7049 5.86311 24.9241 10.3648C5.83541 21.4086 -0.704847 45.8682 10.316 64.9966Z"
                stroke="white"
                stroke-width="9.5625"
              />
              <path
                d="M64.6349 79.2882C64.6349 79.2882 60.8874 52.9278 52.8643 39.0022C44.8408 25.0764 25.126 10.7139 25.126 10.7139"
                stroke="white"
                stroke-width="9.5625"
                stroke-linecap="round"
              />
              <path
                d="M84.2466 47.3219C62.6513 42.5747 33.1427 62.3902 27.2295 80.266"
                stroke="white"
                stroke-width="9.5625"
                stroke-linecap="round"
              />
              <path
                d="M62.497 9.84241C56.5588 27.5237 27.617 47.0496 6.1228 42.8075"
                stroke="white"
                stroke-width="9.5625"
                stroke-linecap="round"
              />
            </svg>
            <div>Basketball</div>
            <button>
              <Link to="/basketball" className="link">
                Check out
              </Link>
            </button>
          </div>
          <div className="sport">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 81 80"
              fill="none"
            >
              <path
                d="M64.4606 49.3191C65.4951 48.1786 65.4112 46.4138 64.2731 45.3767C63.135 44.3401 61.3739 44.4242 60.339 45.5647L64.4606 49.3191ZM74.4402 35.3213L76.4256 33.3641L76.4097 33.3481L74.4402 35.3213ZM75.2218 40.0967C76.3005 41.1955 78.0635 41.2097 79.16 40.1287C80.2565 39.0482 80.271 37.2811 79.1923 36.1823L75.2218 40.0967ZM16.8492 66.2058C15.3111 66.2058 14.0643 67.4553 14.0643 68.9965C14.0643 70.5377 15.3111 71.7872 16.8492 71.7872V66.2058ZM8.55875 53.9535C7.02072 53.9535 5.77387 55.203 5.77387 56.7442C5.77387 58.2854 7.02072 59.5349 8.55875 59.5349V53.9535ZM25.9821 7.83535C26.5737 6.41265 25.9023 4.77879 24.4826 4.18597C23.0628 3.59319 21.4324 4.26597 20.8408 5.68867L25.9821 7.83535ZM20.8408 52.2363C21.4324 53.6588 23.0628 54.3315 24.4826 53.7388C25.9023 53.146 26.5737 51.5122 25.9821 50.0893L20.8408 52.2363ZM36.4076 16.7442C34.8696 16.7442 33.6227 17.9936 33.6227 19.5349C33.6227 21.0761 34.8696 22.3256 36.4076 22.3256V16.7442ZM69.3658 58.2921C70.2187 59.5747 71.9479 59.9211 73.2275 59.0661C74.5074 58.2114 74.8531 56.4785 73.9998 55.1963L69.3658 58.2921ZM40.1208 74.4186C21.1515 74.4186 5.77387 59.0087 5.77387 40H0.204102C0.204102 62.0915 18.0754 80 40.1208 80V74.4186ZM74.4677 40C74.4677 59.0087 59.0899 74.4186 40.1208 74.4186V80C62.1663 80 80.0374 62.0915 80.0374 40H74.4677ZM40.1208 5.5814C59.0899 5.5814 74.4677 20.9911 74.4677 40H80.0374C80.0374 17.9086 62.1663 0 40.1208 0V5.5814ZM40.1208 0C18.0754 0 0.204102 17.9086 0.204102 40H5.77387C5.77387 20.9911 21.1515 5.5814 40.1208 5.5814V0ZM40.1208 42.7907H40.4613V37.2093H40.1208V42.7907ZM37.9226 38.2865L36.3248 40.3453L40.7212 43.7719L42.319 41.7135L37.9226 38.2865ZM37.5501 1.71736L35.0036 7.84145L40.1449 9.98817L42.6914 3.86404L37.5501 1.71736ZM60.339 45.5647L59.2577 46.7568L63.379 50.5113L64.4606 49.3191L60.339 45.5647ZM72.4551 37.2785L75.2218 40.0967L79.1923 36.1823L76.4256 33.3641L72.4551 37.2785ZM59.2577 46.7568C48.6009 58.5038 32.5491 66.2058 16.8492 66.2058V71.7872C34.258 71.7872 51.7642 63.3142 63.379 50.5113L59.2577 46.7568ZM35.0036 7.84145C30.4308 18.8394 31.4577 31.3757 37.7592 41.4791L42.4823 38.5209C37.1372 29.9508 36.2661 19.317 40.1449 9.98817L35.0036 7.84145ZM36.3248 40.3453C29.6605 48.9314 19.4136 53.9535 8.55875 53.9535V59.5349C21.1324 59.5349 33.0019 53.7176 40.7212 43.7719L36.3248 40.3453ZM20.8408 5.68867C14.6141 20.664 14.6141 37.2607 20.8408 52.2363L25.9821 50.0893C20.3267 36.4882 20.3267 21.4368 25.9821 7.83535L20.8408 5.68867ZM36.4076 22.3256C49.934 22.3256 62.9063 27.7101 72.4711 37.2949L76.4097 33.3481C65.8004 22.7168 51.4111 16.7442 36.4076 16.7442V22.3256ZM40.4613 42.7907C52.0761 42.7907 62.9226 48.6076 69.3658 58.2921L73.9998 55.1963C66.5241 43.9591 53.9386 37.2093 40.4613 37.2093V42.7907Z"
                fill="white"
              />
            </svg>
            <div>Volleyball</div>
            <button>
              <Link to="/volleyball" className="link">
                Check out
              </Link>
            </button>
          </div>
          <div className="sport">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 81 80"
              fill="none"
            >
              <path
                d="M70.2046 79.716C75.5968 79.716 79.968 75.326 79.968 69.9108C79.968 64.4955 75.5968 60.1056 70.2046 60.1056C64.8124 60.1056 60.4412 64.4955 60.4412 69.9108C60.4412 75.326 64.8124 79.716 70.2046 79.716Z"
                fill="#FDFDFD"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M74.2089 6.20971C64.2406 -3.82139 45.6336 -1.44666 32.7556 11.5064C24.9219 19.3586 21.0025 29.3546 21.3575 38.2209C20.9226 38.6175 20.6826 39.215 20.8276 39.8626C23.1372 50.3958 13.9387 61.2302 13.8387 61.3457C13.7187 61.4862 13.6287 61.6569 13.5687 61.8276L1.67066 73.7766C0.230896 75.2225 0.175905 77.5119 1.55068 78.8976L1.66067 78.998C3.02045 80.3787 5.31008 80.3285 6.74484 78.8725L19.0179 66.562C19.8527 65.9244 31.6908 57.1685 40.2144 59.6035C40.7793 59.7692 41.3293 59.6186 41.7442 59.2923C50.7277 59.8495 60.9461 55.8933 68.9498 47.8453C81.8277 34.9073 84.1873 16.2258 74.2089 6.20971ZM31.5708 49.2611C30.291 47.9809 29.3112 46.4998 28.5513 44.8983L35.3252 38.0904L42.4691 45.2698L35.6202 52.153C34.1354 51.4049 32.7606 50.4611 31.5708 49.2611ZM38.8647 34.5458L45.9335 27.4367L53.0824 34.6161L46.0035 41.7152L38.8647 34.5458ZM45.9985 20.4179L38.7047 13.0929C41.3942 10.7182 44.2888 8.8405 47.2483 7.46486L53.0774 13.3138L45.9985 20.4179ZM56.5368 16.7881L63.6856 23.9675L56.6118 31.0666L49.4679 23.8972L56.5368 16.7881ZM35.1703 16.6324L42.4691 23.9675L35.3952 31.0666L29.5712 25.2126C30.9459 22.2505 32.8106 19.3385 35.1703 16.6324ZM56.5368 38.0904L64.0556 45.6363C61.366 48.011 58.4665 49.8837 55.512 51.2644L49.4679 45.1945L56.5368 38.0904ZM60.0712 34.5458L67.1451 27.4367L73.1841 33.5066C71.8193 36.4788 69.9496 39.3907 67.585 42.0867L60.0712 34.5458ZM75.0688 28.3103L70.6745 23.8972L75.7137 18.8314C76.1536 21.8086 75.9187 25.0469 75.0688 28.3103ZM71.1894 9.46807C72.3792 10.668 73.3191 12.0486 74.059 13.5398L67.2101 20.4179L60.0662 13.2435L66.8401 6.44568C68.4399 7.19877 69.9146 8.18782 71.1894 9.46807ZM61.466 4.88428L56.6068 9.7693L52.4275 5.5721C55.542 4.75877 58.6065 4.5228 61.466 4.88428ZM27.6915 30.4189L31.8608 34.6161L26.9966 39.5011C26.6416 36.6244 26.8716 33.5467 27.6915 30.4189ZM19.9377 61.672C19.8227 61.5063 19.7577 61.3155 19.6178 61.1699L19.5128 61.0645C19.3678 60.9189 19.1828 60.8587 19.0179 60.7432C20.8326 58.017 23.1922 53.7495 24.272 48.8193C25.1669 50.4209 26.2617 51.917 27.5965 53.2525C28.8463 54.5127 30.2261 55.577 31.7258 56.4506C27.0566 57.5853 22.7323 59.9148 19.9377 61.672ZM40.8943 53.8048L45.9335 48.739L50.3278 53.1521C47.0733 54.0106 43.8538 54.2466 40.8943 53.8048Z"
                fill="#FDFDFD"
              />
            </svg>
            <div>Tennis</div>
            <button>
              <Link to="/tennis" className="link">
                Check out
              </Link>
            </button>
          </div>
        </div>
        <div className="home-events">
          <div className="home-events-div1">
            {language === "english"
              ? "Looking for new activities?"
              : "À la recherche de nouvelles activités?"}{" "}
            <span className="join">Join our events!</span>
          </div>
          <div className="home-events-div2">
            At Champions arena, we always have events, such as important
            football, basketball, volleyball and tennis matches, broadcasting
            matches on huge screens and a lot more.
          </div>
          <button>
            <Link to="/events" className="link">
              See events
            </Link>
            <span> &#8594;</span>
          </button>
        </div>
        <div className="videos-container">
          <div className="videos-text">
            {language === "english" ? "Our best clips" : "Nos meilleurs clips"}
          </div>
          <div className="videos">
            {football ? (
              <video
                src={messiGoal}
                controls
                autoPlay={true}
                onClick={handleV1Pause}
              ></video>
            ) : (
              <div className="ftb-image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="56"
                  viewBox="0 0 57 56"
                  fill="none"
                  onClick={handleV1Play}
                >
                  <path
                    d="M28.4666 0C35.8772 0 42.9842 2.94999 48.2243 8.20101C53.4644 13.452 56.4082 20.5739 56.4082 28C56.4082 35.4261 53.4644 42.548 48.2243 47.799C42.9842 53.05 35.8772 56 28.4666 56C21.056 56 13.9489 53.05 8.70883 47.799C3.46875 42.548 0.524902 35.4261 0.524902 28C0.524902 20.5739 3.46875 13.452 8.70883 8.20101C13.9489 2.94999 21.056 0 28.4666 0ZM28.4666 52C34.8185 52 40.9103 49.4714 45.4018 44.9706C49.8933 40.4697 52.4166 34.3652 52.4166 28C52.4166 21.6348 49.8933 15.5303 45.4018 11.0294C40.9103 6.52856 34.8185 4 28.4666 4C22.1146 4 16.0229 6.52856 11.5314 11.0294C7.03987 15.5303 4.51657 21.6348 4.51657 28C4.51657 34.3652 7.03987 40.4697 11.5314 44.9706C16.0229 49.4714 22.1146 52 28.4666 52ZM25.4728 36.524L38.2342 28L25.4728 19.476V36.524ZM26.1354 15.108L41.695 25.504C42.105 25.778 42.4412 26.1491 42.6737 26.5845C42.9062 27.02 43.0278 27.5062 43.0278 28C43.0278 28.4938 42.9062 28.98 42.6737 29.4155C42.4412 29.8509 42.105 30.222 41.695 30.496L26.1354 40.892C25.6846 41.1932 25.1606 41.3661 24.6194 41.3923C24.0782 41.4185 23.5401 41.297 23.0623 41.0408C22.5846 40.7846 22.1852 40.4033 21.9067 39.9375C21.6283 39.4717 21.4812 38.939 21.4812 38.396V17.6C21.4812 17.057 21.6283 16.5243 21.9067 16.0585C22.1852 15.5927 22.5846 15.2114 23.0623 14.9552C23.5401 14.699 24.0782 14.5775 24.6194 14.6037C25.1606 14.6299 25.6846 14.8028 26.1354 15.104V15.108Z"
                    fill="white"
                  />
                </svg>
              </div>
            )}
            {basketball ? (
              <video
                src={lebronDunk}
                controls
                autoPlay={true}
                onClick={handleV2Pause}
              ></video>
            ) : (
              <div className="basket-image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="56"
                  viewBox="0 0 57 56"
                  fill="none"
                  onClick={handleV2Play}
                >
                  <path
                    d="M28.4666 0C35.8772 0 42.9842 2.94999 48.2243 8.20101C53.4644 13.452 56.4082 20.5739 56.4082 28C56.4082 35.4261 53.4644 42.548 48.2243 47.799C42.9842 53.05 35.8772 56 28.4666 56C21.056 56 13.9489 53.05 8.70883 47.799C3.46875 42.548 0.524902 35.4261 0.524902 28C0.524902 20.5739 3.46875 13.452 8.70883 8.20101C13.9489 2.94999 21.056 0 28.4666 0ZM28.4666 52C34.8185 52 40.9103 49.4714 45.4018 44.9706C49.8933 40.4697 52.4166 34.3652 52.4166 28C52.4166 21.6348 49.8933 15.5303 45.4018 11.0294C40.9103 6.52856 34.8185 4 28.4666 4C22.1146 4 16.0229 6.52856 11.5314 11.0294C7.03987 15.5303 4.51657 21.6348 4.51657 28C4.51657 34.3652 7.03987 40.4697 11.5314 44.9706C16.0229 49.4714 22.1146 52 28.4666 52ZM25.4728 36.524L38.2342 28L25.4728 19.476V36.524ZM26.1354 15.108L41.695 25.504C42.105 25.778 42.4412 26.1491 42.6737 26.5845C42.9062 27.02 43.0278 27.5062 43.0278 28C43.0278 28.4938 42.9062 28.98 42.6737 29.4155C42.4412 29.8509 42.105 30.222 41.695 30.496L26.1354 40.892C25.6846 41.1932 25.1606 41.3661 24.6194 41.3923C24.0782 41.4185 23.5401 41.297 23.0623 41.0408C22.5846 40.7846 22.1852 40.4033 21.9067 39.9375C21.6283 39.4717 21.4812 38.939 21.4812 38.396V17.6C21.4812 17.057 21.6283 16.5243 21.9067 16.0585C22.1852 15.5927 22.5846 15.2114 23.0623 14.9552C23.5401 14.699 24.0782 14.5775 24.6194 14.6037C25.1606 14.6299 25.6846 14.8028 26.1354 15.104V15.108Z"
                    fill="white"
                  />
                </svg>
              </div>
            )}
            {tennis ? (
              <video
                src={messiGoal}
                controls
                autoPlay={true}
                // onClick={handleV1Pause}
              ></video>
            ) : (
              <div className="tennis-image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="56"
                  viewBox="0 0 57 56"
                  fill="none"
                  // onClick={handleV1Play}
                >
                  <path
                    d="M28.4666 0C35.8772 0 42.9842 2.94999 48.2243 8.20101C53.4644 13.452 56.4082 20.5739 56.4082 28C56.4082 35.4261 53.4644 42.548 48.2243 47.799C42.9842 53.05 35.8772 56 28.4666 56C21.056 56 13.9489 53.05 8.70883 47.799C3.46875 42.548 0.524902 35.4261 0.524902 28C0.524902 20.5739 3.46875 13.452 8.70883 8.20101C13.9489 2.94999 21.056 0 28.4666 0ZM28.4666 52C34.8185 52 40.9103 49.4714 45.4018 44.9706C49.8933 40.4697 52.4166 34.3652 52.4166 28C52.4166 21.6348 49.8933 15.5303 45.4018 11.0294C40.9103 6.52856 34.8185 4 28.4666 4C22.1146 4 16.0229 6.52856 11.5314 11.0294C7.03987 15.5303 4.51657 21.6348 4.51657 28C4.51657 34.3652 7.03987 40.4697 11.5314 44.9706C16.0229 49.4714 22.1146 52 28.4666 52ZM25.4728 36.524L38.2342 28L25.4728 19.476V36.524ZM26.1354 15.108L41.695 25.504C42.105 25.778 42.4412 26.1491 42.6737 26.5845C42.9062 27.02 43.0278 27.5062 43.0278 28C43.0278 28.4938 42.9062 28.98 42.6737 29.4155C42.4412 29.8509 42.105 30.222 41.695 30.496L26.1354 40.892C25.6846 41.1932 25.1606 41.3661 24.6194 41.3923C24.0782 41.4185 23.5401 41.297 23.0623 41.0408C22.5846 40.7846 22.1852 40.4033 21.9067 39.9375C21.6283 39.4717 21.4812 38.939 21.4812 38.396V17.6C21.4812 17.057 21.6283 16.5243 21.9067 16.0585C22.1852 15.5927 22.5846 15.2114 23.0623 14.9552C23.5401 14.699 24.0782 14.5775 24.6194 14.6037C25.1606 14.6299 25.6846 14.8028 26.1354 15.104V15.108Z"
                    fill="white"
                  />
                </svg>
              </div>
            )}
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

export default HomePage;
