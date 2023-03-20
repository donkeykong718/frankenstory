import React from "react";
// import "./nav-barApp";
import "./Header.css";

// import LogoImg from "../nav-bar assets/Frank_logo.svg";



function Header() {
  return (
    <div className="nav-bar">
      <ul className="header-list">
        <li>Name & Logo</li>
        <li>Gallery</li>
        <li>SignIn</li>
        <li>Log Out</li>
      </ul>
    </div>
  );
}

export default Header;