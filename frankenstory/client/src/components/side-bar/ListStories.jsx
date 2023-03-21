import * as backendFunctions from '../../services/stories';
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

  const { current, setCurrent } = useContext(StoryContext);

  const [circle, setCircle] = useState();

  const { _id, turn } = story;

  const handleGetStory = async () => {
    const currentStory = await backendFunctions.getStory(_id)
    setCurrent(currentStory);
    console.log("Current story is")
    console.log(current);
    // onSelection(currentStory);
  }

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
      <li className="current-turn"><img src={circle} className="completionCircle" alt="" />
      </li>
      <p>Next up:
        {turn % 2 === 0 ? <span> drawing </span> : <span> writing </span>}
        <span>frame </span>
        {Math.floor(turn / 2)}
      </p>
      <button onClick={handleGetStory}>Select story</button>
    </div>
  )
}

export default ListStories;