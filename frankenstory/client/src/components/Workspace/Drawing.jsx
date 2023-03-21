import React, { useState, useContext, useEffect } from 'react';
import { StoryContext, UserContext } from '../../App';
import * as backendFunctions from '../../services/stories'
import { getUser } from '../../services/users'

// import DrawingBoard from "../SketchCanvas/drawingBoard"




export default function Drawing({ story }) {

  let username = localStorage.getItem('currentUser');
  console.log(`In Drawing, the username is ${username}`);

  const { current, setCurrent } = useContext(StoryContext);
  // const { user, setUser } = useContext(UserContext);


  const [temp, setTemp] = useState(story);
  const [input, setInput] = useState();

  const { turn, title, frames } = story;
  let framesArray = [];

  if (frames !== undefined) { framesArray = Array.from(frames); }

  let display;

  switch (turn) {
    case 1:
      display = title;
      break;
    case 3:
      display = frames[1].text;
      break;
    case 5:
      display = frames[3].text;
      break;
    case 7:
      display = frames[5].text;
      break;
    default:
  }

  const handleTextChange = (e) => {
    const { value } = e.target;
    setInput(value);
    // let storyUpdate = story;
    // storyUpdate.frames = value;
    // console.log(storyUpdate);
    // setTemp(storyUpdate)
  }

  const handleTextSubmit = async (e) => {
    e.preventDefault();

    let storyUpdate = story;
    storyUpdate['turn'] = storyUpdate.turn + 1;
    // frames = storyUpdate;
    console.log(`Input is ${input}`);

    const newItem = { text: input };
    framesArray.push(newItem);
    console.log(`Frames array is ${framesArray}`);
    storyUpdate['frames'] = framesArray;
    console.log(storyUpdate);
    // setTemp(storyUpdate);
    await backendFunctions.updateStory(current._id, storyUpdate);
  }

  return (
    <div className='workspace'>
      <p>Turn # {turn}</p>
      <p> {display}</p>
      <form onSubmit={handleTextSubmit}>
        <textarea maxLength={400} className='text-display' placeholder="Normally you would draw here."
          onChange={handleTextChange} name="img" />
        <button>Submit</button>
      </form>
      {/* <DrawingBoard /> */}
    </div>
  )
}