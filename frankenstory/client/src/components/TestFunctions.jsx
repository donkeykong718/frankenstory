import React, { useEffect, useState } from "react";
import * as backendFunctions from '../services/stories';
import prompts from "../prompts.json"

export default function TestFunctions() {

  const randomIndex = Math.floor(Math.random() * prompts.length);

  const [user, setUser] = useState("guest");
  const [data, setData] = useState({
    prompt: prompts[randomIndex],
    turn: 1,
  });

  const handleUserChange = async (e) => {
    const username = e.target.value;
    setUser(username);
  }

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
  }

  return (
    <div>
      <form onSubmit={handleUserSubmit}>
        <label for="userInput">User Input</label><br></br>
        <input placeholder="Enter Name" id="userInput" onChange={handleUserChange} />
        <button type="Submit">Submit</button>
      </form>
      <br></br>
      <button onClick={() => {
        backendFunctions.createStory(data)
        console.log(data);
      }} >Create New Story</button>
      <button>Add to Active Story</button>
    </div >
  )
}