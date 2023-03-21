import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { signin } from '../services/users'
import { UserContext } from "../App";
import { getUser } from "../services/users";

export default function Signin() {
  const { user, setUser } = useContext(UserContext);

  const [text, setText] = useState('')
  const [password, setPassword] = useState('')
  let currentUser = user;

  async function handleSubmit(e) {
    e.preventDefault()
    const response = await signin(text, password)
    console.log(response);
    currentUser = await getUser(text);
    setUser(currentUser)
    console.log(user)
  }

  useEffect(() => { setUser(currentUser); console.log(user) });


  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Signin</button>
      </form>
      <span>
        {'Need an account?'}
        <Link to="/user/sign-up">Go to Signup</Link>
        {' instead.'}
      </span>
    </div>
  )
}