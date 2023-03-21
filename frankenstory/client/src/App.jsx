
import Screenshot from './components/SketchCanvas/Screenshot';
import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

import Sidebar from './components/side-bar/side-bar';
import Header from './components/Header/Header';
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

  const defaultUser = {
    username: 'Guest'
  }

  const [current, setCurrent] = useState({});
  const [user, setUser] = useState(defaultUser);
  // const [featured, setFeatured] = useState({});

  // const [state, setState] = useState('draw');

  return (
    <>
      <StoryContext.Provider value={{ current, setCurrent }}>
        <Header />
        <Sidebar />
        <GalleryContext.Provider value={{ featured, setFeatured }}>
          <TestFunctions current={current} featured={featured} />
          <Screenshot />
          <DrawingBoard />
        </GalleryContext.Provider>
      </StoryContext.Provider>


      <Routes>
        <Route path="/" element={
          <StoryContext.Provider value={{ current, setCurrent }}>
            <UserContext.Provider value={{user, setUser}}>
              <Header />
              </UserContext.Provider>
            <Sidebar />
            {Object.keys(current).length === 0 ? <div>Select a new project</div> : <Workspace />}
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
