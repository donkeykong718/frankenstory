import React from "react";
import "./SignInForm.css";
import { useEffect, useState, useContext } from "react";
import { signin, signup, getUser } from "../../../services/users";
import { UserContext } from "../../../App";
// import FrankAddNew from "../side-bar/side-bar assets/FrankAddNew2.svg";

const SignInForm = ({ isShowLogin }) => {
  const { user, setUser } = useContext(UserContext);
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [stage, setStage] = useState(false);
  const [loading, setLoading] = useState(false);

  let currentUser = user;

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const response = await signin(text, password);
    console.log(response);
    setLoading(false);
  }
  async function handleSignup(e) {
    e.preventDefault();
    setLoading(true);
    const response = await signup(text, password);
    console.log(response);
    setLoading(false);

  }
  // function closeForm() {
  //   // get the parent element of the login form
  //   const loginForm = document.querySelector('.login-form').parentElement;
  //   // remove the "active" class from the parent element to hide the form
  //   loginForm.classList.remove('active');
  // }

  useEffect(() => {
    const workAround = async () => {
      const currentUser = await getUser(text)
      setUser(currentUser);
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user))
    };
    workAround();
  }, [loading])

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
                <br />
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


              <div>
                <label>
                  {"Need an account?"}
                  <br />
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
