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
import croissant from "../images/croissant-removebg-preview.png";
import coffe from "../images/coffee-removebg-preview.png";
import sitos from "../images/sitos-removebg-preview.png";
import lays from "../images/chips-removebg-preview.png";
import dairyMilk from "../images/dairy-removebg-preview.png";
import reeses from "../images/reeses-removebg-preview.png";
import kitkat from "../images/kitkat-removebg-preview.png";
import pepsi from "../images/pepsi.jpg";
import prime from "../images/prime-removebg-preview.png";
import iceCream from "../images/icecream-removebg-preview.png";
import pringles from "../images/pringles-removebg-preview.png";
import conesChips from "../images/cones-removebg-preview.png";
import oreo from "../images/oreo-removebg-preview.png";
import kinder from "../images/kinder-removebg-preview.png";
import mnms from "../images/mnms-removebg-preview.png";
import marshmellow from "../images/marsh-removebg-preview.png";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

 
function Cafeteria() {
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
        <div className="cafeteria-hero">
          <div className="our-products">Our products</div>
          <div className="text">
            Score Big on Flavor: Your Go-To Market for Delicious Bites and
            Thrilling Matches – Where Every Goal is Celebrated with Culinary
            Delights!
          </div>
          <img src={croissant} alt="croissant" className="croissant" />
          <img src={coffe} alt="coffee" className="coffee" />
          <img src={sitos} alt="chips" className="sitos" />
          <img src={lays} alt="lays" className="lays" />
        </div>
        <div className="cafeteria-store">
        <div className="menu">
          <div className="cafeteria"><div>Cafeteria</div></div>
          <div className="store"><Link to="/store" className="link">Store</Link></div>
        </div>
        <div className="display">
          <div className="item-div">
            <div className="price"><div>3$</div></div>
            <img src={dairyMilk} alt="" />
            <div className="name"><div>Dairy Milk</div></div>
          </div>
          <div className="item-div">
            <div className="price"><div>2$</div></div>
            <img src={reeses} alt="" />
            <div className="name"><div>Reese's</div></div>
          </div>
          <div className="item-div">
            <div className="price"><div>3$</div></div>
            <img src={kitkat} alt="" />
            <div className="name"><div>KitKat</div></div>
          </div>
          <div className="item-div">
            <div className="price"><div>1$</div></div>
            <img src={pepsi} alt="" />
            <div className="name"><div>Pepsi</div></div>
          </div>
          <div className="item-div">
            <div className="price"><div>10$</div></div>
            <img src={prime} alt="" />
            <div className="name"><div>Prime</div></div>
          </div>
          <div className="item-div">
            <div className="price"><div>1$</div></div>
            <img src={iceCream} alt="" />
            <div className="name"><div>Ice cream</div></div>
          </div>
          <div className="item-div">
            <div className="price"><div>3$</div></div>
            <img src={pringles} alt="" />
            <div className="name"><div>Pringles</div></div>
          </div>
          <div className="item-div">
            <div className="price"><div>3$</div></div>
            <img src={conesChips} alt="" />
            <div className="name"><div>Cones Chips</div></div>
          </div>
          <div className="item-div">
            <div className="price"><div>4$</div></div>
            <img src={oreo} alt="" />
            <div className="name"><div>Oreo</div></div>
          </div>
          <div className="item-div">
            <div className="price"><div>4$</div></div>
            <img src={kinder} alt="" />
            <div className="name"><div>Kinder</div></div>
          </div>
          <div className="item-div">
            <div className="price"><div>2$</div></div>
            <img src={mnms} alt="" />
            <div className="name"><div>m&m's</div></div>
          </div>
          <div className="item-div">
            <div className="price"><div>3$</div></div>
            <img src={marshmellow} alt="" />
            <div className="name"><div>Marshmallow</div></div>
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

export default Cafeteria;
