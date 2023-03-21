import React, { useContext } from "react";
// import "./nav-barApp";
import "./Header.css";
import { Link } from 'react-router-dom'
import LogoImg from "./Header assets/Frank_logo.svg";
import { getUser } from '../../services/users'
import { UserContext } from "../../App";


function Header() {

  // const { user, setUser } = useContext(UserContext);
  let username = localStorage.getItem('currentUser');

  // setUser(currentUser);
  return (
    <div className="header">
      <div className="logo-box"><img src={LogoImg} alt="" /> FrankenStory</div>
      <ul className="header-list">
        <li>
          Logged in as: {username}
        </li>
        <li>
          Gallery
        </li>
        <a href="/user/sign-in">SignIn</a>
        <li>Log Out</li>
      </ul>
    </div>
  );
}

export default Header;