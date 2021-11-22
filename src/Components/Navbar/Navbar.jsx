import React from "react";
import logo from "../../Images/shortLogo.png";
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  function toggle_handler(){
    var links = document.getElementById("links");
    var toggle_button  = document.getElementById("toggle_button");
    links.className === "links" ? links.className = "links_opened" : links.className = "links";
    console.log(toggle_button.className);
    toggle_button.className === "toggle_button" ? toggle_button.className = "toggle_button_opened" : toggle_button.className = "toggle_button";
  }

  return (
    <header className="container">
      <div className="logo">
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
        </ul>
      </nav>
      
    </header>
  );
}

export default Navbar;
