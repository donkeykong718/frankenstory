import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { signin, getUser } from '../services/users'
import { UserContext } from "../App";

export default function Signin() {
  const { user, setUser } = useContext(UserContext);

  const [text, setText] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false);
  let currentUser = user;

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true);
    const response = await signin(text, password);
    console.log(response);
    setLoading(false);
  }

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