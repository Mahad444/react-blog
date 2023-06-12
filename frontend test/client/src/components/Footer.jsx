import React from "react";
import "../styles/footer.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-links">
            <h3>Links</h3>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/doctors"}>Doctors</NavLink>
              </li>
              <li>
                <NavLink to={"/appointments"}>Appointments</NavLink>
              </li>
              <li>
                <NavLink to={"/notifications"}>Notifications</NavLink>
              </li>
              <li>
                <HashLink to={"/#contact"}>Contact Us</HashLink>
              </li>
              <li>
                <NavLink to={"/profile"}>Profile</NavLink>
              </li>
            </ul>
          </div>
          <div className="social">
            <h3>Social links</h3>
            <ul>
              <li className="whatsapp">
                <a
                  // whatsapp link here
                  href="https://api.whatsapp.com/send?phone=+254743297643&text=Hello%20Mahad%20Said%20I%20am%20interested%20in%20your%20services"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="instagram">
                <a
                  href="https://www.instagram.com/the_program.merhad"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          Made by Mahad Said© {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
};

export default Footer;
