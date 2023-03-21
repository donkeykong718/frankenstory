import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

import Sidebar from './components/side-bar/side-bar';
import Header from './components/Header/Header';
import Gallery from './components/TestFunctions/Gallery';
import TestFunctions from './components/TestFunctions/TestFunctions';
import DrawingBoard from './components/SketchCanvas/drawingBoard';
// import Gallery from './components/TestFunctions/Gallery';
// import TestFunctions from './components/TestFunctions/TestFunctions';
// import * as backendFunctions from './services/stories';
// import '.side-bar'
import drawingBoard from './components/canvas-component/drawingBoard';
import Workspace from './components/Workspace/Workspace';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { getUser } from './services/users'
import { get } from 'mongoose';

export const StoryContext = React.createContext();
export const UserContext = React.createContext();

// async function getCurrentUser() {
//   let currentUsername = localStorage.getItem('currentUser');
//   console.log(`Current username is ${currentUsername}`);
//   let currentUser = await getUser(currentUsername);
//   console.log(currentUser);
//   return currentUser;
// }

// export const GalleryContext = React.createContext();

function App() {

  const [current, setCurrent] = useState({});
  const [user, setUser] = useState({});
  // const [featured, setFeatured] = useState({});

  // const [state, setState] = useState('draw');

  return (
    <>


      <Routes>
        <Route path="/" element={
          <StoryContext.Provider value={{ current, setCurrent }}>
            <Header />
            <Sidebar />
            <Workspace />
          </StoryContext.Provider>
        } />
        <Route path="/user/sign-up" element={<SignUp />} />
        <Route path="/user/sign-in" element={<UserContext.Provider value={{ user, setUser }}>
          <SignIn />
        </UserContext.Provider>} />

      </Routes>
    </>
  );
}
export default App;
