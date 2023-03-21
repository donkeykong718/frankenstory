import React, { useState, useContext, useEffect } from 'react';
import * as backendFunctions from '../../services/stories'
import { StoryContext } from '../../App';
import { ObjectId } from 'mongoose';

export default function Writing({ story }) {

  const { current, setCurrent } = useContext(StoryContext);
  let currentUser = JSON.parse(localStorage.getItem('user'));
  if (!currentUser) { currentUser = { _id: 0, username: "guest" } }
  // console.log(`In Writing, the user is`)
  // console.log(currentUser);



  const [temp, setTemp] = useState(story);
  const [input, setInput] = useState();

  const { turn, frames } = story;
  let framesArray = [];

  if (frames !== undefined) { framesArray = Array.from(frames); }

  // console.log(framesArray);

  let display;

  if (framesArray[framesArray.length - 1].text !== null) { display = framesArray[framesArray.length - 1].text; }
  else { display = 'ERROR' }

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

    if (storyUpdate.turn > 8) {
      storyUpdate['completed'] = true;
    }

    console.log(`Input is ${input}`);
    let newItem;
    console.log(currentUser._id);
    if (currentUser._id !== 0) { newItem = { text: input, user: currentUser._id } }
    else newItem = { text: input, user: null };

    framesArray.push(newItem);
    // console.log(`Frames array is ${framesArray}`);
    storyUpdate['frames'] = framesArray;
    // console.log(storyUpdate);

    await backendFunctions.updateStory(current._id, storyUpdate);
    setCurrent({});
    if (storyUpdate.turn <= 8) { window.location.reload(false); }
  }

  // let newStory;

  // useEffect(() => {
  //   setCurrent(newStory);
  //   console.log(`Use effect has been called.`)
  // }, [newStory])

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