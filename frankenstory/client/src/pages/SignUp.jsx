import { useState } from 'react';
import { Link } from "react-router-dom";
import { signup } from '../services/users';

export default function SignUp() {
  const [username, setUser] = useState('')
  // const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(username, password)
    const response = await signup(username, password)
    console.log(response);
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={e => setUser(e.target.value)}
        />
        {/* <label>E-mail:</label>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        /> */}
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Sign Up</button>
      </form>
      <span>
        {'Already have an account?'}
        <Link to="/user/sign-in">Go to Signin</Link>
        {' instead.'}
      </span>
    </div>
  )
}