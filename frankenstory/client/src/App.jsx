import React, { useState, useEffect } from 'react';
import Sidebar from './components/side-bar/side-bar';
import Header from './components/Header/Header';
import Gallery from './components/TestFunctions/Gallery';
import TestFunctions from './components/TestFunctions/TestFunctions';
import DrawingBoard from './components/SketchCanvas/drawingBoard';
// import Gallery from './components/TestFunctions/Gallery';
// import TestFunctions from './components/TestFunctions/TestFunctions';
// import * as backendFunctions from './services/stories';
// import '.side-bar'
import DrawingBoard from './components/canvas-component/drawingBoard';
import Workspace from './components/Workspace/Workspace';
// import Parent from './components/TestFunctions/Parent'


export const StoryContext = React.createContext();
export const GalleryContext = React.createContext();

function App() {

  const [current, setCurrent] = useState({});

  const [featured, setFeatured] = useState({});

  const [state, setState] = useState('draw');
  // const [featured, setFeatured] = useState({});

  // async function getActiveStories() {
  //   const activeStories = await backendFunctions.getStories();
  //   console.log(typeof activeStories);
  //   // const storyArray = Array.from(activeStories);
  //   return activeStories;
  // }
  // const activeStories = getActiveStories();
  // console.log(storyArray);
  // console.log(typeof storyArray);

  useEffect(() => {
    if (state === 'draw') {
      setState('write')
    }
    else if (state === 'write') {
      setState('draw')
    }
  }, [current]);

  return (
    <>
      <StoryContext.Provider value={{ current, setCurrent }}>
        {/* <GalleryContext.Provider value={{ featured, setFeatured }}> */}
        <Header />
        {/* </GalleryContext.Provider> */}
        <Sidebar />

        <GalleryContext.Provider value={{ featured, setFeatured }}>
          <TestFunctions current={current} featured={featured} />
          <DrawingBoard />
        </GalleryContext.Provider>

        <Workspace />
        {/* <DrawingBoard /> */}

        {/* <TestFunctions current={current} /> */}

      </StoryContext.Provider>
    </>
  );
}
export default App;
