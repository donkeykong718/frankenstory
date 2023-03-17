import React, { useEffect, useState } from "react";
import * as backendFunctions from '../services/stories';
import prompts from "../prompts.json"
import Stories from "./Stories.jsx"

export default function TestFunctions() {


  const randomIndex = Math.floor(Math.random() * prompts.length);

  const [user, setUser] = useState("guest");
  const [data, setData] = useState({
    prompt: prompts[randomIndex],
    turn: 1,
  });
  const [story, setStory] = useState({});
  const [stories, setStories] = useState([]);
  const [display, setDisplay] = useState();

  const handleUserChange = async (e) => {
    const username = e.target.value;
    setUser(username);
  }

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
  }

  const handleGetStories = async () => {
    const activeStories = await backendFunctions.getStories();
    console.log(stories);
    setStories(activeStories);
  }

  useEffect(() => {
    const { prompt, turn } = story;
    console.log(prompt, turn)

    switch (turn) {
      case 1:
        setDisplay(prompt);
        break;
      case 2:
        setDisplay(story.frame1.img);
        break;
      case 3:
        setDisplay(story.frame1.text);
        break;
      case 4:
        setDisplay(story.frame2.img);
        break;
      case 5:
        setDisplay(story.frame2.text);
        break;
      case 6:
        setDisplay(story.frame3.img);
        break;
      case 7:
        setDisplay(story.frame3.text);
        break;
      case 8:
        setDisplay(story.frame4.img);
        break;
      default:
      // code block
    }

  }, [story])


  return (
    <div>
      <form onSubmit={handleUserSubmit}>
        <label for="userInput">User Input</label><br></br>
        <input placeholder="Enter Name" id="userInput" onChange={handleUserChange} />
        <button type="Submit">Submit</button>
      </form>
      <br></br>

      <button onClick={async () => {
        const currentStory = await backendFunctions.createStory(data)
        console.log(currentStory);
        setStory(currentStory);
      }} >Create New Story</button>
      <button onClick={handleGetStories}>Add to Active Story</button>
      <div className="story-list">
        {stories.map((story, index) => (<Stories story={story} key={index} />))}
      </div>

      <div>
        The current story is: {display}
      </div>

    </div >
  )
}