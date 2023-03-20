import React, { useEffect, useState } from "react";
import * as backendFunctions from '../../services/stories';
// import prompts from "../../prompts.json"
// import Stories from "../side-bar/ListStories.jsx"
import './testfunctions.css'
import Gallery from "./Gallery.jsx"
import Frame from './Frame'

export default function TestFunctions({ current, featured }) {

  // const randomIndex = Math.floor(Math.random() * prompts.length);
  // console.log("Current story is:")
  // console.log(current);
  const [selection, setSelection] = useState(false)


  useEffect(() => { setSelection(true) }, [featured])

  const [user, setUser] = useState("guest");
  // const [data, setData] = useState({
  //   prompt: prompts[randomIndex],
  //   turn: 1,
  //   text: ""
  // });

  // const storyArray = Array.from(stories);
  // console.log(storyArray);

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
    updatedStory['frame1'] = {
      'text': value,
      'user': user
    }

    console.log('The updatedStory variable is')
    console.log(updatedStory);

    // updatedStory.frame[0][name] = value;

    setStory(updatedStory)
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
    // await backendFunctions.updateStory(story._id, story);
    console.log('Now the story is:')
    console.log(story);
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
        setDisplay(current.frame1.img);
        break;
      case 3:
        setDisplay(current.frame1.text);
        break;
      case 4:
        setDisplay(current.frame2.img);
        break;
      case 5:
        setDisplay(current.frame2.text);
        break;
      case 6:
        setDisplay(current.frame3.img);
        break;
      case 7:
        setDisplay(current.frame3.text);
        break;
      case 8:
        setDisplay(current.frame4.img);
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

      return <p>Some kind of error, I guess</p>
    }
  }



  //FRAMES
  const pictureBook = (displayStory) => {
    const { prompt, frame1, frame2, frame3, frame4 } = displayStory;
    const frames = [frame1, frame2, frame3, frame4];

    const storyList = document.querySelector('.story-list');
    storyList.classList.toggle = 'hidden';

    return (
      <div className="picture-book">
        <h2>{prompt}</h2>
        <div>
          {frames.map((frame, index) => (<Frame frame={frame} key={index}
          />))}
        </div>
      </div>
    )
  }

  const displayGallery = async () => {

    const allStories = await backendFunctions.getStories();
    const finishedStories = allStories.filter(story => story.completed === true);
    console.log(finishedStories);

    const workspace = document.querySelector(".workspace");
    const gallery = document.querySelector(".gallery");
    workspace.classList.toggle('hidden');
    gallery.classList.toggle('hidden');

    setStories(finishedStories);
    // console.log(finishedStories);

  }

  // const displayPrompt = async (current) => {
  //   const { prompt, turn } = current;
  //   console.log(prompt, turn)

  //   switch (turn) {
  //     case 1:
  //       setDisplay(prompt);
  //       break;
  //     case 2:
  //       setDisplay(current.frame1.img);
  //       break;
  //     case 3:
  //       setDisplay(current.frame1.text);
  //       break;
  //     case 4:
  //       setDisplay(current.frame2.img);
  //       break;
  //     case 5:
  //       setDisplay(current.frame2.text);
  //       break;
  //     case 6:
  //       setDisplay(current.frame3.img);
  //       break;
  //     case 7:
  //       setDisplay(current.frame3.text);
  //       break;
  //     case 8:
  //       setDisplay(current.frame4.img);
  //       break;
  //     default:
  //   }

  // return (
  //   <div>{display}</div>
  // )

  // <div>{display}</div>
  //       {current.turn % 2 === 0 ? <span> {current.prompt} </span> : <div className='text-input'>
  //         <p>{400 - count}/400 characters remaining</p>
  //         <form onSubmit={handleTextSubmit}>
  //           <textarea maxLength={400} className='text-display' placeholder="Write the beginning of a story here."
  //             onChange={handleTextChange} />
  //           <div className='image-display'></div>
  //           <button>Submit</button>
  //         </form>
  //       </div>} }
  // }


  // useEffect(() => {
  //   const { prompt, turn } = story;
  //   console.log(prompt, turn)

  //   switch (turn) {
  //     case 1:
  //       setDisplay(prompt);
  //       break;
  //     case 2:
  //       setDisplay(story.frame1.img);
  //       break;
  //     case 3:
  //       setDisplay(story.frame1.text);
  //       break;
  //     case 4:
  //       setDisplay(story.frame2.img);
  //       break;
  //     case 5:
  //       setDisplay(story.frame2.text);
  //       break;
  //     case 6:
  //       setDisplay(story.frame3.img);
  //       break;
  //     case 7:
  //       setDisplay(story.frame3.text);
  //       break;
  //     case 8:
  //       setDisplay(story.frame4.img);
  //       break;
  //     default:
  //     // code block
  //   }

  // }, [story])

  return (
    <div className='test-container'>

      <button onClick={displayGallery}>View Gallery</button>
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

      <div className='gallery hidden'>
        <h1>Gallery</h1>
        <ul className="story-list">
          {stories.map((story, index) => (<Gallery story={story} key={index}
          />))}
        </ul>
        {selection &&
          <div>{pictureBook(featured)}</div>}
      </div>


      <div className='workspace'>
        <p>The current story is: {current._id}</p>
        <p>{display}</p>
        <p>It is turn number {current.turn}</p>
        <div>{setWorkspace(current)}</div>
        {/* {story.turn % 2 === 0 ? <span> even </span> : <span> Odd </span>} */}
        {/* {storyt.prompt} </span> : <div className='text-input'>
          <p>{400 - count}/400 characters remaining</p>
          <form onSubmit={handleTextSubmit}>
            <textarea maxLength={400} className='text-display' placeholder="Write the beginning of a story here."
              onChange={handleTextChange} />
            <div className='image-display'></div>
            <button>Submit</button>
          </form> */}
      </div>
    </div >
  )
}