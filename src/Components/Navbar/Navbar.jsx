import React from "react";
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
            <a href="/">
              Anasayfa
            </a>
          </li>
          <li>
            <a href="#">
              Hakkımızda
            </a>
          </li>          
          <li>
            <a href="#">
              Ürünler
            </a>
          </li>
          <li>
            <a href="#">
              İletişim
            </a>
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
