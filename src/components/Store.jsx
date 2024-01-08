import { React, useState, useEffect } from "react";
import { useNagivate, Link } from "react-router-dom";
import "./home.css";
import "./cafeteria.css";
import logo from "../images/champions-arena-logo.png";
import languagee from "../images/global-svgrepo-com (2).svg";
import insta from "../images/icons8-insta-48.png";
import facebook from "../images/icons8-facebook-48.png";
import tiktok from "../images/icons8-tic-tac-50 (1).png";
import twitter from "../images/icons8-twitterx-50.png";
import ball from "../images/ball-removebg-preview.png";
import ball2 from "../images/ball2-removebg-preview.png";
import barcahoodie from "../images/barcahoodie-removebg-preview.png";
import barcashirt from "../images/barcashirt-removebg-preview.png";
import adebayor from "../images/adebayor-removebg-preview.png";
import boots1 from "../images/boots1-removebg-preview.png";
import drogba from "../images/drogba-removebg-preview.png";
import hat1 from "../images/hat1-removebg-preview.png";
import hat2 from "../images/hat2-removebg-preview.png";
import hoodie1 from "../images/hoodie1-removebg-preview.png";
import jacket1 from "../images/jacket1-removebg-preview.png";
import jacket2 from "../images/jacket2-removebg-preview.png";
import messi from "../images/messi-removebg-preview.png";
import socks from "../images/socks-removebg-preview.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  height: "fit-content",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Store() {
  const [language, setLanguage] = useState("english");
  const [football, setFootball] = useState(false);
  const [basketball, setBasketball] = useState(false);
  const [tennis, setTennis] = useState(false);
  const [SisHovering, setSIsHovering] = useState(false);
  const [LisHovering, setLIsHovering] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        <Link to="/">
          <img src={logo} alt="logo" className="phone-logo" />
        </Link>
        <div className="phone-title">CHAMPIONS ARENA</div>
        <div className="phone-reg-lan">
          <button className="phone-reg-button">
            <Link to="/connect" className="link">
              {language === "english" ? "Connect" : "Relier"}
            </Link>
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
            <li onMouseOver={handleSOnHover}>Sports</li>
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
        )}
      </header>
      <main>
        <div className="cafeteria-hero">
          <div className="our-products">Our products</div>
          <div className="text">
            Elevate Your Game, Elevate Your Style: Fuel Your Passion with
            Premium Sports Apparel, Trendsetting Hoodies, and Performance Boots
            – Where Fashion Meets the Field!
          </div>
          <img src={ball2} alt="ball" className="ball1" />
          <img src={ball} alt="ball" className="ball2" />
          <img src={adebayor} alt="shirt" className="adebayor" />
        </div>
        <div className="cafeteria-store">
          <div className="menu">
            <div className="cafeteria2">
              <Link to="/cafeteria" className="link">Cafeteria</Link>
            </div>
            <div className="store2">
              <div>Store</div>
            </div>
          </div>
          <div className="display">
            <div className="item-div">
              <div className="price">
                <div>20$</div>
              </div>
              <img src={hoodie1} alt="" onClick={handleOpen} />
              <div className="name">
                <div>Sport hoodie</div>
              </div>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <span onClick={handleClose} className="box-close">&#x2715;</span>
                <img src={hoodie1} alt="" />
              </Box>
            </Modal>
            <div className="item-div">
              <div className="price">
                <div>25$</div>
              </div>
              <img src={barcashirt} alt="" onClick={handleOpen}/>
              <div className="name">
                <div>Barca shirt</div>
              </div>
            </div>
            <div className="item-div">
              <div className="price">
                <div>20$</div>
              </div>
              <img src={barcahoodie} alt="" onClick={handleOpen}/>
              <div className="name">
                <div>Barca hoodie</div>
              </div>
            </div>
            <div className="item-div">
              <div className="price">
                <div>40$</div>
              </div>
              <img src={boots1} alt="" onClick={handleOpen}/>
              <div className="name">
                <div>Boots</div>
              </div>
            </div>
            <div className="item-div">
              <div className="price">
                <div>5$</div>
              </div>
              <img src={socks} alt="" onClick={handleOpen}/>
              <div className="name">
                <div>Socks</div>
              </div>
            </div>
            <div className="item-div">
              <div className="price">
                <div>20$</div>
              </div>
              <img src={jacket1} alt="" onClick={handleOpen}/>
              <div className="name">
                <div>Sport jacket</div>
              </div>
            </div>
            <div className="item-div">
              <div className="price">
                <div>20$</div>
              </div>
              <img src={jacket2} alt="" onClick={handleOpen}/>
              <div className="name">
                <div>Sport jacket</div>
              </div>
            </div>
            <div className="item-div">
              <div className="price">
                <div>25$</div>
              </div>
              <img src={drogba} alt="" onClick={handleOpen}/>
              <div className="name">
                <div>Drogba shirt</div>
              </div>
            </div>
            <div className="item-div">
              <div className="price">
                <div>30$</div>
              </div>
              <img src={messi} alt="" onClick={handleOpen}/>
              <div className="name">
                <div>Messi shirt</div>
              </div>
            </div>
            <div className="item-div">
              <div className="price">
                <div>30$</div>
              </div>
              <img src={adebayor} alt="" onClick={handleOpen}/>
              <div className="name">
                <div>Adebayor shirt</div>
              </div>
            </div>
            <div className="item-div">
              <div className="price">
                <div>5$</div>
              </div>
              <img src={hat1} alt="" onClick={handleOpen}/>
              <div className="name">
                <div>England hat</div>
              </div>
            </div>
            <div className="item-div">
              <div className="price">
                <div>3$</div>
              </div>
              <img src={hat2} alt="" onClick={handleOpen}/>
              <div className="name">
                <div>Liverpool cap</div>
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

export default Store;
