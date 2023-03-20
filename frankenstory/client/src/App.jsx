import React, { useState } from 'react';
import Sidebar from './components/side-bar/side-bar';
import Header from './components/Header/Header';
import Gallery from './components/TestFunctions/Gallery';
import TestFunctions from './components/TestFunctions/TestFunctions';
import DrawingBoard from './components/SketchCanvas/drawingBoard';
export const StoryContext = React.createContext();
export const GalleryContext = React.createContext();

function App() {

  const [current, setCurrent] = useState({});
  const [featured, setFeatured] = useState({});
  return (
    <>
      <StoryContext.Provider value={{ current, setCurrent }}>
        <Header />
        <Sidebar />
        <GalleryContext.Provider value={{ featured, setFeatured }}>
          <TestFunctions current={current} featured={featured} />
          <DrawingBoard />
        </GalleryContext.Provider>
      </StoryContext.Provider>
    </>
  );
}
export default App;
