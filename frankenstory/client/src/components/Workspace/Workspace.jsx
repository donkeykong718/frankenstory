import React, { useState, useContext, useEffect } from 'react';
import { StoryContext } from '../../App';
import * as backendFunctions from '../../services/stories'
import LabBackdrop from '../../pages/laboratory1920a.jpg'

// import DrawingBoard from '../canvas-component/drawingBoard';
import Writing from './Writing'
import Drawing from './Drawing'

import './workspace.css'

export default function Workspace() {

  const { current, setCurrent } = useContext(StoryContext);

  // const [story, setStory] = useState(current);
  // const [turn, setTurn] = useState(story.turn);

  // const { title, frames } = story;

  // console.log(current);

  // useEffect(() => {
  //   setStory(current);
  //   setTurn(current.turn);
  // }, [current]);

  // console.log(frames.length);

  // const handleTextChange = (e) => {
  //   const { value } = e.target;
  //   let storyUpdate = story;
  //   storyUpdate.frames[0] = {
  //     "img": value
  //   }
  //   setStory(storyUpdate)
  // }

  // // const handleTextSubmit = async (e) => {
  // //   e.preventDefault();

  // //   let storyUpdate = story;
  // //   storyUpdate['turn'] = storyUpdate.turn + 1;
  // //   setStory(storyUpdate);
  // //   const newStory = await backendFunctions.updateStory(story._id, story);
  // //   setCurrent(newStory);
  // // }


  return (
    <div style={{ backgroundImage: `url(${LabBackdrop})` }} id='desktop-container'>
      {/* <h2>This is the workspace</h2>
      <h3>The current story is: {current._id}</h3> */}
      {current.turn % 2 === 0 ? <Writing story={current} /> : <Drawing story={current} />}
    </div>
  )

}