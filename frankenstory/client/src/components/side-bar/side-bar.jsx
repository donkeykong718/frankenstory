import React, { useState, useEffect, useRef, useContext } from "react";

//DK added 3.19
import * as backendFunctions from "../../services/stories";
import ListStories from "./ListStories";
import prompts from "../../prompts.json";
import { StoryContext } from "../../App";

import "./side-bar.css";
import CloseSidebarImg from "../side-bar/side-bar assets/CloseSidebarImg.svg";
import FrankAddNew from "../side-bar/side-bar assets/FrankAddNew2.svg";


<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;

function Sidebar() {
  const { current, setCurrent } = useContext(StoryContext);

  let currentUser = JSON.parse(localStorage.getItem('user'));
  if (!currentUser) { currentUser = { _id: '0', username: 'guest' } }
  // console.log('The curent user in the SideBar is:')
  // console.log(currentUser._id);


  const randomIndex = Math.floor(Math.random() * prompts.length);

  const [data, setData] = useState({
    title: prompts[randomIndex],
    turn: 1,
  });

  //DK added 3.19
  const [stories, setStories] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (
        !sidebarRef.current?.contains(event.target) &&
        !sidebarRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    });
  }, [isOpen]);

  //adding a GET ALL stories to display in SideBar

  useEffect(() => {
    const handleGetStories = async () => {
      const allStories = await backendFunctions.getStories();
      const activeStories = allStories.filter(
        (story) => story.completed === false
      );

      // if (currentUser.username !== 'guest') {

      //   activeStories.filter((story) => {
      //     let res = story.frames.map(x => x.user)
      //     console.log(res);
      //     if (res.includes(currentUser._id) === false) {
      //       return story
      //     };
      //   }
      //   )
      // }
      // console.log(activeStories);
      activeStories.sort((a, b) => b.turn - a.turn);

      setStories(activeStories);
    };
    handleGetStories();
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const createStory = async () => {
    const currentStory = await backendFunctions.createStory(data);
    // console.log("The current story is:");
    // console.log(currentStory);
    setCurrent(currentStory);
  };

  return (
    <>
      <button  onClick={toggleSidebar}>Open Sidebar</button>
      <div className={`sidebar ${isOpen ? "open" : ""}`} ref={sidebarRef}>

        <ul>
          <li><img src={FrankAddNew} onClick={createStory} className="addNew" alt="Create New" /></li>
          <button onClick={createStory}>Create New</button>



          <ul className="story-list">
            {stories.map((story, index) => (
              <ListStories story={story} key={index} />
            ))}
          </ul>



          <li>
            <div className="close-sidebar">

              <img
                src={CloseSidebarImg}
                className="closeSidebarImg"
                onClick={toggleSidebar}
                alt="Close Sidebar"
              />Close Sidebar
              <div class="overlay">
                <div class="text">Close Sidebar</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
