// import React from "react";
// import "/SignInForm.css";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { signup } from "../../../services/users";

// import LogoImg from "../../Header/Header";

// const SignUpForm = ({ isShowLogin }) => {
//   const [text, setText] = useState("");
//   const [password, setPassword] = useState("");

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const response = await signup(text, password);
//     console.log(response);
//   }

//   return (
//     <div className={`${isShowLogin ? "active" : ""} show`}>
//       <div className="login-form">
//         <form onSubmit={handleSubmit}>
//           <div className="logo-box">
//             <img src={LogoImg} alt="" /> FrankenStory
//           </div>
//           <div></div>
//           <h1 className="login-text">Sign Up</h1>

//           <label>Username</label>

//           <br></br>

//           <input
//             type="text"
//             value={text}
//             name="username"
//             onChange={(e) => setText(e.target.value)}
//             className="login-box"
//           />
//           <br></br>

//           <label>Password</label>
//           <br></br>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             name="password"
//             className="login-box"
//           />
//           <br></br>

//           <input type="submit" value="LOGIN" className="login-btn" />

//           <div>
//             <label>
//               {"Need an account?"}
//               <br />
//               <Link to="/user/sign-up">Go to Signup</Link>
//               {" instead."}
//             </label>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;
