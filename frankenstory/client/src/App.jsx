import React from 'react';
import Sidebar from './components/side-bar/side-bar';
import TestFunctions from './components/TestFunctions/TestFunctions';
import * as backendFunctions from './services/stories';
// import '.side-bar'

function App() {

  // async function getActiveStories() {
  //   const activeStories = await backendFunctions.getStories();
  //   console.log(typeof activeStories);
  //   // const storyArray = Array.from(activeStories);
  //   return activeStories;
  // }

  // const activeStories = getActiveStories();

  // console.log(storyArray);
  // console.log(typeof storyArray);

  return (
    <>
      <Sidebar />
      <TestFunctions />
    </>
  );
}

export default App;
