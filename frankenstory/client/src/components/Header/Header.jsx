import React from "react";
// import "./nav-barApp";
import "./Header.css";
import LogoImg from "./Header assets/Frank_logo.svg";

function Header() {
  return (
    <div className="header">
        <div className="logo-box"><img src={LogoImg} alt="" /> FrankenStory</div>
      <ul className="header-list">
        <li>
        </li>
        <li>Gallery</li>
        <li>SignIn</li>
        <li>Log Out</li>
      </ul>
    </div>
  );
}

export default Header;