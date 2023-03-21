import React, { useContext } from "react";
// import "./nav-barApp";
import "./Header.css";
// import { Link } from 'react-router-dom'
import LogoImg from "./Header assets/Frank_logo.svg";
// import { getUser } from '../../services/users'
import { UserContext } from "../../App";


function Header() {

  const { user, setUser } = useContext(UserContext);
  let userDetails = JSON.parse(localStorage.getItem('user'));
  console.log('The user in Header is:')
  console.log(userDetails);

  if (!userDetails) { userDetails = user }

  const handleLogOut = () => {
    localStorage.clear();
    setUser({ username: 'guest' });
  }

  // setUser(currentUser);
  return (
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