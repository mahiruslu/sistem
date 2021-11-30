import React from "react";
import {Link} from 'react-router-dom'
import logo from "../../Images/shortLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag,faFlagCheckered,faFlagUsa } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';

function Navbar() {
  function toggle_handler(){
    var links = document.getElementById("links");
    var toggle_button  = document.getElementById("toggle_button");
    links.className === "links" ? links.className = "links_opened" : links.className = "links";
    console.log(toggle_button.className);
    toggle_button.className === "toggle_button" ? toggle_button.className = "toggle_button_opened" : toggle_button.className = "toggle_button";
  }

  return (
    <header className="nav_container">
      <div className="nav_logo">
        <img src={logo} alt="logo" />
     </div>
       <div href="#"  className="toggle_button" id="toggle_button" onClick={toggle_handler}>
          <span className="toggle_line" ></span>
          <span className="toggle_line" ></span>
          <span className="toggle_line" ></span>
       </div>
     <nav className="links" id="links">
        <ul>
          <li>
          <Link to="/" className="nav-link">
              Anasayfa
          </Link>
          </li>
          <li>
          <Link to="about" className="nav-link">
              Hakkımızda
          </Link>
          </li>          
          <li>
          <Link to="products" className="nav-link">
              Ürünler
          </Link>
          </li>
          <li>
          <Link to="contact" className="nav-link">
              İletişim
          </Link>
          </li>          
          <li>
            <div className="nav_dropdown">
                    <FontAwesomeIcon icon={faFlag} />
              <div className="nav_dropdown_content">
                  <span>
                    <a href="#">
                    <FontAwesomeIcon icon={faFlagCheckered} /> Türkçe</a>
                  </span>
                  <span>
                    <a href="#"><FontAwesomeIcon icon={faFlagUsa} /> English</a>
                  </span>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Navbar;
