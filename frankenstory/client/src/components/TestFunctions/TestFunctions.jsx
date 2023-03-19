import React, { useEffect, useState } from "react";
import * as backendFunctions from '../../services/stories';
import prompts from "../../prompts.json"
import Stories from "./Stories.jsx"
import './testfunctions.css'

export default function TestFunctions() {


  const randomIndex = Math.floor(Math.random() * prompts.length);

  const [user, setUser] = useState("guest");
  const [data, setData] = useState({
    prompt: prompts[randomIndex],
    turn: 1,
    text: ""
  });

  // const storyArray = Array.from(stories);
  // console.log(storyArray);

  const [stories, setStories] = useState([]);

  const [story, setStory] = useState({});
  const [display, setDisplay] = useState();
  const [count, setCount] = useState(0);

  const handleUserChange = async (e) => {
    const username = e.target.value;
    setUser(username);
  }

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
  }

  const handleTextChange = async (e) => {
    setCount(e.target.value.length)
    const textInput = e.target.value;
    let newData = Object.assign(data, textInput);
    setData(newData);
    console.log(newData);
  }


  const handleTextSubmit = async (e) => {
    e.preventDefault();
    // const textInput = e.target.value;
    // setData;
    // console.log(textInput);
  }


  useEffect(() => {
    const handleGetStories = async () => {
      const activeStories = await backendFunctions.getStories();
      console.log(activeStories);
      setStories(activeStories);
    }
    handleGetStories();
  }, [])

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
    <div className='test-container'>
      {/*SET USER / LOG-IN ETC*/}
      <div className="user-input">
        <form onSubmit={handleUserSubmit}>
          <label for="userInput">User Input</label><br></br>
          <input placeholder="Enter Name" id="userInput" onChange={handleUserChange} />
          <button type="Submit">Submit</button>
        </form>
        <p>Hello {user}</p>
      </div>
      <br></br>

      {/*SIDE-BAR / SELECT STORY*/}
      <div className="story-select">
        <button onClick={async () => {
          const currentStory = await backendFunctions.createStory(data)
          console.log(currentStory);
          setStory(currentStory);
        }} >Create New Story</button>
        {/* <button onClick={handleGetStories}>Add to Active Story</button> */}
        <div className="story-list">
          {stories.map((story, index) => (<Stories story={story} key={index} />))}
        </div>
      </div>

      <div className='workspace'>
        <p>{400 - count}/400 characters remaining</p>
        <form onSubmit={handleTextSubmit}>
          <textarea maxLength={400} className='text-display' placeholder="Write the beginning of a story here."
            onChange={handleTextChange} />
          <div className='image-display'></div>
          <button>Submit</button>
        </form>
      </div>

    </div >
  )
}