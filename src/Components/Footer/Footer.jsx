import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram,faFacebook,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import './Footer.css';
import logo from "../../Images/footerLogo.png";

function Footer() {
  return (
    <div className="footer ">
      <div className="footerLeft">

        <div className="footerLeftBottom">
        <div className="contactIcon">
          <a
            href="https://www.instagram.com/sistemmakinakalip/" target="_blank" 
            className="footer_button"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" id="faIcon" />
          </a>
          </div>
          <div className="contactIcon">
          <a href="mailto:info@sistemkalip.com"  target="_blank"  className="footer_button">
            <FontAwesomeIcon icon={faMailBulk} id="faIcon" />
          </a>
          </div>
          <div className="contactIcon">
          <a href="https://www.facebook.com/sistemmakinakalip/"  target="_blank" className="footer_button">
            <FontAwesomeIcon icon={faFacebook} id="faIcon" />
          </a>
          </div>
          <div className="contactIcon">
          <a href="https://www.linkedin.com/in/sistemmakinakalip/" target="_blank" className="footer_button">
            <FontAwesomeIcon icon={faLinkedin} id="faIcon" />
          </a>
          </div>
        </div>
      </div>
      
      <div className="footerCenter">
          <div className="footer_logo">
            <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="footerRight">
        <p href="/" target="_blank" className="btn btn-dark">
          {" "}
          {/* This site made by <span>Mahir</span> */}
          ©2021, All Rights Reserved. <span>Sistem Makina Kalıp</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
