import React, { useState } from 'react';
import Sidebar from './components/side-bar/side-bar';
import Gallery from './components/TestFunctions/Gallery';
import TestFunctions from './components/TestFunctions/TestFunctions';
// import * as backendFunctions from './services/stories';
// import '.side-bar'
// import Parent from './components/TestFunctions/Parent'

export const StoryContext = React.createContext();
export const GalleryContext = React.createContext();

function App() {

  const [current, setCurrent] = useState({});
  const [featured, setFeatured] = useState({});

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
      <StoryContext.Provider value={{ current, setCurrent }}>
        <Sidebar />
        <GalleryContext.Provider value={{ featured, setFeatured }}>
          <TestFunctions current={current} featured={featured} />
        </GalleryContext.Provider>
      </StoryContext.Provider>
    </>
  );
}
export default App;
