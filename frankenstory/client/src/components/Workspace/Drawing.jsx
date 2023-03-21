import React, { useState, useContext, useEffect } from 'react';
import { StoryContext, UserContext } from '../../App';
import * as backendFunctions from '../../services/stories'
import { getUser } from '../../services/users'

// import DrawingBoard from "../SketchCanvas/drawingBoard"




export default function Drawing({ story }) {

  let currentUser = JSON.parse(localStorage.getItem('user'));
  if (!currentUser) { currentUser = { _id: 0, username: 'guest' } }
  const { current, setCurrent } = useContext(StoryContext);
  // const { user, setUser } = useContext(UserContext);

  console.log(`In Drawing, the user is`)
  console.log(currentUser);

  const [temp, setTemp] = useState(story);
  const [input, setInput] = useState();

  const { turn, title, frames } = story;
  let framesArray = [];

  if (frames !== undefined) { framesArray = Array.from(frames); }

  let display;

  if (turn === 1) { display = title }
  else if (framesArray[framesArray.length - 1].text !== null) { display = framesArray[framesArray.length - 1].text; }
  else { display = 'ERROR' }

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
    if (storyUpdate.turn > 8) {
      storyUpdate['completed'] = true;
    }
    // frames = storyUpdate;
    console.log(`Input is ${input}`);

    let newItem;
    if (currentUser._id !== 0) { newItem = { text: input, user: currentUser._id } }
    else newItem = { text: input, user: null };
    framesArray.push(newItem);
    console.log(`Frames array is ${framesArray}`);
    storyUpdate['frames'] = framesArray;
    console.log(storyUpdate);
    // setTemp(storyUpdate);
    await backendFunctions.updateStory(current._id, storyUpdate);
    setCurrent({});
    window.location.reload(false);
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