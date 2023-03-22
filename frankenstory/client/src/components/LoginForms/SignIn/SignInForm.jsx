import React from "react";
import "./SignInForm.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signin, signup } from "../../../services/users";
// import FrankAddNew from "../side-bar/side-bar assets/FrankAddNew2.svg";

const SignInForm = ({ isShowLogin }) => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [stage, setStage] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await signin(text, password);
    console.log(response);
  }
  async function handleSignup(e) {
    e.preventDefault();
    const response = await signup(text, password);
    console.log(response);
    
  }
  function closeForm() {
    // get the parent element of the login form
    const loginForm = document.querySelector('.login-form').parentElement;
    // remove the "active" class from the parent element to hide the form
    loginForm.classList.remove('active');
  }
  
  return (
    <div className={`${isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        {!stage ? 
        <form onSubmit={handleSubmit}>
            <div></div>
            {/* <div><img src={FrankAddNew} onClick="" className="addNew" alt="Create New" /></div> */}

          <h1 className="login-text">Sign In</h1>

          <label>Username</label>

          <br></br>

          <input
            type="text"
            value={text}
            name="username"
            onChange={(e) => setText(e.target.value)}
            className="login-box"
          />
          <br></br>

          <label>Password</label>
          <br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="login-box"
          />
          <br></br>

          <input type="submit" value="LOGIN" className="login-btn" />

          <div>
            <label>
              {"Need an account?"}
              <br/>
                <span className="highlight" onClick={() => setStage(true)}>Go to Signup</span>
              {" instead."}
            </label>
          </div>
        </form>
          : <>
                  <form onSubmit={handleSignup}>
          {/* <div className="logo-box"><img src={LogoImg} alt="" /> FrankenStory</div> */}
          <div></div>
          <h1 className="login-text">Sign Up</h1>

          <label>Username</label>

          <br></br>

          <input
            type="text"
            value={text}
            name="username"
            onChange={(e) => setText(e.target.value)}
            className="login-box"
          />
          <br></br>

          <label>Password</label>
          <br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="login-box"
          />
          <br></br>

              <input type="submit" value="LOGIN" className="login-btn" />
              <button type="button" class="btn cancel" onclick="closeForm()">Close</button>


          <div>
            <label>
              {"Need an account?"}
              <br/>
                <span className="highlight" onClick={() => setStage(false)}>Go to Signin</span>
              {" instead."}
            </label>
          </div>
        </form>
          </>}
      </div>
    </div>
  );
};

export default SignInForm;
