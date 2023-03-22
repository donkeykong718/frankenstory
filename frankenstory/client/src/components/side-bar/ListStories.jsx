import * as backendFunctions from '../../services/stories';
// import { getUser } from '../../services/users'
import { useEffect, useState, useContext } from 'react'
import { StoryContext } from '../../App';

import CompletionCircle_1 from './side-bar assets/CompletionCircle_1.svg'
import CompletionCircle_2 from './side-bar assets/CompletionCircle_2.svg'
import CompletionCircle_3 from './side-bar assets/CompletionCircle_3.svg'
import CompletionCircle_4 from './side-bar assets/CompletionCircle_4.svg'
import CompletionCircle_5 from './side-bar assets/CompletionCircle_5.svg'
import CompletionCircle_6 from './side-bar assets/CompletionCircle_6.svg'
import CompletionCircle_7 from './side-bar assets/CompletionCircle_7.svg'

function ListStories({ story }) {

  console.log(story);

  let currentUser = JSON.parse(localStorage.getItem('user'));
  if (!currentUser) { currentUser = { _id: 0, username: 'guest' } }

  const { current, setCurrent } = useContext(StoryContext);

  const [circle, setCircle] = useState();
  const [valid, setValid] = useState(true);

  const { _id, turn, frames } = story;

  useEffect(() => {
    if (currentUser.username !== 'guest') {
      // console.log(frames);
      let res = frames.map(x => x.user)
      // console.log('Checking validity:')
      // console.log(res);
      // console.log(currentUser._id)
      if (res.includes(currentUser._id)) {
        setValid(false);
      }
    }
    else setValid(true);
  }, []);

  const handleGetStory = async () => {
    const currentStory = await backendFunctions.getStory(_id)
    setCurrent(currentStory);
    console.log("Current story is")
    console.log(current);
    // onSelection(currentStory);
  }

  // useEffect(() => {
  //   async function getLastUser() {
  //     const lastUser = frames[frames.length - 1];
  //     console.log('The last user was:')
  //     const lastUserName = await getUser(lastUser.user)
  //     return lastUserName;
  //   }
  //   let lastUserName = getLastUser();
  //   console.log('The last username was:')
  //   console.log(lastUserName);
  // }, [story])



  useEffect(() => {
    const { turn } = story;

    switch (turn) {
      case 1:
        setCircle(CompletionCircle_1);
        break;
      case 2:
        setCircle(CompletionCircle_1);
        break;
      case 3:
        setCircle(CompletionCircle_2);
        break;
      case 4:
        setCircle(CompletionCircle_3);
        break;
      case 5:
        setCircle(CompletionCircle_4);
        break;
      case 6:
        setCircle(CompletionCircle_5);
        break;
      case 7:
        setCircle(CompletionCircle_6);
        break;
      case 8:
        setCircle(CompletionCircle_7);
        break;
      default:
      // code block
    }
  }, [story])

  return (
    <div className="story-list">
      <p>Story ID: {_id}</p>
      <li className="current-turn"><img src={circle} className="completionCircle" alt="" />
      </li>
      {valid ?
        <p>Next up:
          {turn % 2 === 0 ? <span> writing </span> : <span> drawing </span>}
          {/* <span>frame </span>
        {Math.floor(turn / 2)} */}
        </p> : <p>Not Available. You already contributed.</p>}
      {/* <p>Most recent contribution by: {lastUser}</p> */}
      {valid ? <button onClick={handleGetStory}>Select story</button> : <button type="button" disabled>Select story</button>}
    </div>
  )
}

export default ListStories;