import React, { useEffect, useState, useContext } from "react";
import * as backendFunctions from '../../services/stories';
// import prompts from "../../prompts.json"
// import Stories from "../side-bar/ListStories.jsx"
import './testfunctions.css'
// import Gallery from "./Gallery.jsx"
// import Frame from './Frame'
import { StoryContext } from '../../App';


export default function TestFunctions({ current }) {

  const { setCurrent } = useContext(StoryContext);

  // const [selection, setSelection] = useState(false)

  // useEffect(() => { setSelection(true) }, [featured])

  const [user, setUser] = useState("guest");
  const [stories, setStories] = useState([]);

  const [story, setStory] = useState(current);
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

  const handleTextChange = (e) => {
    setCount(e.target.value.length)
    const { value } = e.target;

    let updatedStory = current;
    let currentFrame;
    let currentField;

    console.log(`The current turn is: ${current.turn}`)
    console.log(`The updatedStory turn is: ${updatedStory.turn}`)

    switch (updatedStory.turn) {
      case 1:
        currentFrame = 0;
        currentField = 'img';
        break;
      case 2:
        currentFrame = 0;
        currentField = 'text';
        break;
      case 3:
        currentFrame = 1;
        currentField = 'img';
        break;
      case 4:
        currentFrame = 1;
        currentField = 'text';
        break
      case 5:
        currentFrame = 2;
        currentField = 'img';
        break;
      case 6:
        currentFrame = 2;
        currentField = 'text';
        break;
      case 7:
        currentFrame = 3;
        currentField = 'img';
        break;
      case 8:
        currentFrame = 3;
        currentField = 'text';
        break;
      default:
    }

    console.log(`The current frame is: ${currentFrame + 1} `)
    console.log(updatedStory.frames[currentFrame]);

    if (currentField === 'text') {

      const { img } = updatedStory.frames[currentFrame];

      updatedStory.frames[currentFrame] = {
        'text': value,
        // 'user': user,
        'img': img
      }
    }

    else if (currentField === 'img') {

      updatedStory.frames[currentFrame] = {
        // 'user': user,
        'img': value
      }
    }

    console.log('The updatedStory variable is')
    console.log(updatedStory);

    // updatedStory.frame[0][name] = value;

    setStory(updatedStory)
    setCurrent(updatedStory)
    // let newData = Object.assign(data, textInput);
    // setData(newData);
    // console.log(newData);
    console.log(story);
  }


  const handleTextSubmit = async (e) => {
    e.preventDefault();
    let updateStory = story;
    updateStory['turn'] = updateStory.turn + 1;
    // updateStory['frame1'] = {
    //  'text': e.target.value,
    // 'img': e.target.value,
    // 'user': user
    //   }

    // updateStory.frame1[user] = user;
    // updateStory.turn = updateStory.turn + 1;
    setStory(updateStory);
    console.log(story._id, story);
    const newStory = await backendFunctions.updateStory(story._id, story);
    console.log(newStory);
    // console.log('Now the story is:')
    // console.log(story);
    // console.log(story._id);

  }

  useEffect(() => {
    console.log("The current story is:")
    console.log(current)
    const { prompt, turn } = current;
    console.log(prompt, turn)



    switch (turn) {
      case 1:
        setDisplay(prompt);
        break;
      case 2:
        setDisplay(current.frames[0].img);
        break;
      case 3:
        setDisplay(current.frames[0].text);
        break;
      case 4:
        setDisplay(current.frames[1].img);
        break;
      case 5:
        setDisplay(current.frames[1].text);
        break;
      case 6:
        setDisplay(current.frames[2].img);
        break;
      case 7:
        setDisplay(current.frames[2].text);
        break;
      case 8:
        setDisplay(current.frames[3].img);
        break;
      default:
    }
  }, [current])


  useEffect(() => {
    const handleGetStories = async () => {
      const activeStories = await backendFunctions.getStories();
      console.log(activeStories);
      setStories(activeStories);
    }
    handleGetStories();
  }, [])

  const setWorkspace = (current) => {
    const { turn } = current;
    console.log(`Turn remainder is ${turn % 2}`);
    if (turn === 1) {
      return (
        <div>
          <form onSubmit={handleTextSubmit}>
            <textarea maxLength={400} className='text-display' placeholder="Draw a picture based on the above prompt." name="img" onChange={handleTextChange} />
            <button>Submit</button>
          </form>
        </div>
      )
    }
    else if (turn % 2 === 0) {
      return (
        <div>
          <p>{400 - count}/400 characters remaining</p>
          <form onSubmit={handleTextSubmit}>
            <textarea maxLength={400} className='text-display' placeholder="Write the next part of a story based on the above picture."
              onChange={handleTextChange} name="text" />
            <button>Submit</button>
          </form>
        </div>
      )
    }
    else if (turn % 2 === 1) {
      return (
        <div>
          <p>Draw a picture based on the above prompt</p>
          <form onSubmit={handleTextSubmit}>
            <textarea maxLength={400} className='text-display' placeholder="Illustrate the next part of the story."
              onChange={handleTextChange} name="img" />
            <button>Submit</button>
          </form>
        </div>
      )
    }
    else {

      return <p>Select a project from the sidebar</p>
    }
  }


  //FRAMES
  // const pictureBook = (displayStory) => {
  //   const { prompt, frame1, frame2, frame3, frame4 } = displayStory;
  //   const frames = [frame1, frame2, frame3, frame4];

  //   const storyList = document.querySelector('.story-list');
  //   storyList.classList.toggle = 'hidden';

  //   return (
  //     <div className="picture-book">
  //       <h2>{prompt}</h2>
  //       <div>
  //         {frames.map((frame, index) => (<Frame frame={frame} key={index}
  //         />))}
  //       </div>
  //     </div>
  //   )
  // }

  // const displayGallery = async () => {

  //   const allStories = await backendFunctions.getStories();
  //   const finishedStories = allStories.filter(story => story.completed === true);
  //   console.log(finishedStories);

  //   const workspace = document.querySelector(".workspace");
  //   const gallery = document.querySelector(".gallery");
  //   workspace.classList.toggle('hidden');
  //   gallery.classList.toggle('hidden');

  //   setStories(finishedStories);
  //   // console.log(finishedStories);

  // }

  return (
    <div className='test-container'>

      {/* <button onClick={displayGallery}>View Gallery</button> */}
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
      {/* <div className="story-select">
        <button onClick={async () => {
          const currentStory = await backendFunctions.createStory(data)
          console.log(currentStory);
          setStory(currentStory);
        }} >Create New Story</button>
        {/* <button onClick={handleGetStories}>Add to Active Story</button> */}
      {/* <div className="story-list">
          {stories.map((story, index) => (<Stories story={story} key={index} />))}
        </div>
      </div> */}

      {/* <div className='gallery hidden'>
        <h1>Gallery</h1>
        <ul className="story-list">
          {stories.map((story, index) => (<Gallery story={story} key={index}
          />))}
        </ul>
        {selection &&
          <div>{pictureBook(featured)}</div>}
      </div> */}

      <p>The current story is: {current._id}</p>
      <p>It is turn number {current.turn}</p>
      <div className='workspace'>
        <p>{display}</p>
        <div>{setWorkspace(current)}</div>
      </div>
    </div >
  )
}