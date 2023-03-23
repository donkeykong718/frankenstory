import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

import Sidebar from './components/side-bar/side-bar';
import Header from './components/Header/Header';
import Workspace from './components/Workspace/Workspace';
import Landing from './pages/Landing';
import Footer from './components/footer/footer'
// import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp'
import Gallery from './pages/Gallery';
import { getUser } from './services/users'

export const StoryContext = React.createContext();
export const UserContext = React.createContext();


// async function getCurrentUser() {
//   let currentUsername = localStorage.getItem('currentUser');
//   console.log(`Current username is ${currentUsername}`);
//   let currentUser = await getUser(currentUsername);
//   console.log(currentUser);
//   return currentUser;
// }

export const GameContext = React.createContext();


function App() {

  const defaultUser = {
    _id: 0, username: 'guest'
  }

  const [current, setCurrent] = useState({});
  const [user, setUser] = useState(defaultUser);
  const [playing, setPlaying] = useState(false);
  // const [featured, setFeatured] = useState({});

  // const [state, setState] = useState('draw');

  return (
    <>
      <Routes>
        <Route path="/" element={
          <GameContext.Provider value={{ playing, setPlaying }}>
            <StoryContext.Provider value={{ current, setCurrent }}>
              <UserContext.Provider value={{ user, setUser }}>
                <div id='headerbox'>
                  <Header />
                </div>
                <Sidebar />
                {/* {Object.keys(current).length === 0 ? */}
                <Landing />
                <div id='footer'>
                  <Footer />
                </div>
                {/* : <Workspace />} */}
              </UserContext.Provider>
            </StoryContext.Provider>
          </GameContext.Provider>

        } />
        {/* <Route path="/user/sign-up" element={<SignUp />} />
        <Route path="/user/sign-in" element={<UserContext.Provider value={{ user, setUser }}>
          <SignIn />
        </UserContext.Provider>} /> */}
        {/* <Route path="/story/gallery/" element={<Gallery />} /> */}
      </Routes>
    </>
  );
}
export default App;
