import React, { useState, useContext, useEffect } from 'react';
import { StoryContext } from '../../App';
import * as backendFunctions from '../../services/stories'
import DrawingBoard from "../canvas-component/drawingBoard"


export default function Drawing({ story }) {

  const { current, setCurrent } = useContext(StoryContext);

  const [temp, setTemp] = useState(story);
  const [input, setInput] = useState();

  const { turn, prompt, frames } = story;
  let framesArray = [];

  if (frames !== undefined) { framesArray = Array.from(frames); }

  let display;

  switch (turn) {
    case 1:
      display = prompt;
      break;
    case 3:
      display = frames[1];
      break;
    case 5:
      display = frames[3];
      break;
    case 7:
      display = frames[5];
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
    framesArray.push(input);
    console.log(`Frames array is ${framesArray}`);
    storyUpdate['frames'] = framesArray;
    console.log(storyUpdate);
    setTemp(storyUpdate);
    const newStory = await backendFunctions.updateStory(current._id, temp);
    setCurrent(newStory);
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
      <DrawingBoard />
    </div>
  )
}