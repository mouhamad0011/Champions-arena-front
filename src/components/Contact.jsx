import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import "./contact.css";
import logo from "../images/champions-arena-logo.png";
import languagee from "../images/global-svgrepo-com (2).svg";
import insta from "../images/icons8-insta-48.png";
import facebook from "../images/icons8-facebook-48.png";
import tiktok from "../images/icons8-tic-tac-50 (1).png";
import twitter from "../images/icons8-twitterx-50.png";
import { useForm, ValidationError } from "@formspree/react";
import { getUserRole } from "../UserInfo/GetUserInfo";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { toast } from "react-hot-toast";

function ContactPage() {
  const role = getUserRole();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [state, handleSubmit, resetForm] = useForm("xbjnlvnq");
  const navigate = useNavigate();
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
    navigate("/login");
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
      <main className="contact-container">
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="text-cont">
            <div className="lets-talk">Let's talk</div>
            <div className="ask">Ask us your questions or leave a message</div>
          </div>
          <div className="name-input">
            <div className="label">Name</div>
            <input type="text" placeholder="Your name" name="name" />
          </div>
          <div className="name-input">
            <div className="label">Email</div>
            <input type="text" placeholder="Your email" name="email" />
          </div>
          <div className="name-input">
            <div className="label">Message</div>
            <input type="text" placeholder="Your message" name="message" />
          </div>
          <div className="2-buttons">
          <button type="submit" disabled={state.submitting} 
          // onClick={()=>{
          //   toast.success("Message sent successfully");
          //   // setTimeout(() => {
          //     resetForm();
          //   // }, 3000);
          // }}
          >
            Submit
          </button>
          <button type="reset" style={{marginLeft:"20px"}}>
            Clear
          </button>
          </div>
          
        </form>
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

export default ContactPage;
