import React, { useState, useContext, useEffect } from 'react';
import * as backendFunctions from '../../services/stories'
import { StoryContext } from '../../App';

export default function Writing({ story }) {

  const { current, setCurrent } = useContext(StoryContext);

  const [temp, setTemp] = useState(story);
  const [input, setInput] = useState();

  const { turn, prompt, frames } = story;
  let framesArray = [];

  if (frames !== undefined) { framesArray = Array.from(frames); }

  let display;

  switch (turn) {
    case 2:
      display = frames[0];
      break;
    case 4:
      display = frames[2];
      break;
    case 6:
      display = frames[4];
      break;
    case 8:
      display = frames[6];
      break;
    default:
  }


  const handleTextChange = (e) => {
    const { value } = e.target;
    setInput(value)
  }

  // const handleTextSubmit = async (e) => {
  //   e.preventDefault();

  //   console.log(input);

  //   let storyUpdate = temp;
  //   storyUpdate['turn'] = storyUpdate.turn + 1;
  //   let currentFrame = temp.frames[0];
  //   console.log('The current frame is:')
  //   currentFrame.text = input;
  //   storyUpdate.frames[0] = currentFrame;
  //   console.log('Story update is:')
  //   console.log(storyUpdate);
  //   setTemp(storyUpdate);
  //   const newStory = await backendFunctions.updateStory(storyUpdate._id, storyUpdate);
  //   setCurrent(newStory);
  // }

  // const handleTextChange = (e) => {
  //   const { value } = e.target;
  //   let storyUpdate = story;
  //   storyUpdate.frames = {
  //     "img": value
  //   }
  //   console.log(storyUpdate);
  //   setTemp(storyUpdate)
  // }

  // const handleTextSubmit = async (e) => {
  //   e.preventDefault();

  //   let storyUpdate = temp;

  //   storyUpdate['turn'] = storyUpdate.turn + 1;
  //   setTemp(storyUpdate);
  //   const newStory = await backendFunctions.updateStory(temp._id, temp);
  //   setCurrent(newStory);
  // }

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

  // useEffect(() => {
  //   async function updateStory() {
  //     const newStory = await backendFunctions.updateStory(temp._id, temp);
  //     console.log('The new story is now:')
  //     console.log(newStory)
  //     setCurrent(newStory)
  //   }
  //   updateStory();
  // }, [temp])

  return (
    <div className='workspace'>
      <p>Turn # {turn}</p>
      <p>{display}</p>
      <form onSubmit={handleTextSubmit}>
        <textarea maxLength={400} className='text-display' placeholder="Write a story based on the above image."
          onChange={handleTextChange} name="text" />
        <button>Submit</button>
      </form>
    </div>
  )
}