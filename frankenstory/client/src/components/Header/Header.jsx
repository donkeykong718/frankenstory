import React, { useContext, useState, useRef, useEffect } from "react";
// import "./nav-barApp";
import "./Header.css";
import { Link } from "react-router-dom";
import LogoImg from "./Header assets/Frank_logo.svg";
import { getUser } from "../../services/users";
import SignInForm from "../LoginForms/SignIn/SignInForm";
// import { Link } from 'react-router-dom'
import LogoImg from "./Header assets/Frank_logo.svg";
// import { getUser } from '../../services/users'
import { UserContext } from "../../App";


function Header({ handleLoginClick }) {
  const [modal, setModal] = useState(false);

  const modalRef = useRef(null);

  const handleClick = () => {
    { <a href="/user/sign-in">SignIn</a>; }

    console.log("hello");
    setModal(!modal);
  };

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setModal(false);
      }
    });
  }, []);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  let username = localStorage.getItem("currentUser");
  const { user, setUser } = useContext(UserContext);
  let userDetails = JSON.parse(localStorage.getItem('user'));
  console.log('The user in Header is:')
  console.log(userDetails);

  if (!userDetails) { userDetails = user }

  const handleLogOut = () => {
    localStorage.clear();
    setUser({ username: 'guest' });
  }

  return (
    <>
      {modal && (
        <div ref={modalRef}>
          <SignInForm />
        </div>
      )}

      <div className="header">
        <div className="logo-box">
          <img src={LogoImg} alt="" /> FrankenStory
        </div>

        <ul className="header-list">
          <li>Logged in as: {username}</li>


          <li>Gallery</li>

          <div className="navbar">
            <div>
              <span onClick={handleClick} className="loginicon">
                Sign In
              </span>
            </div>
          </div>
          <li>Log Out</li>
        </ul>
      </div>
    </>
    <div className="header">
      <div className="logo-box"><img src={LogoImg} alt="" /> FrankenStory</div>
      <ul className="header-list">
        <li>
          Logged in as: {userDetails.username}
        </li>
        <li>
          Gallery
        </li>
        <a href="/user/sign-in">SignIn</a>
        <button onClick={handleLogOut}>Log Out</button>
      </ul>
    </div>
  );
}

export default Header;
