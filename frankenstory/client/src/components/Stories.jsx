import * as backendFunctions from '../services/stories';

export default function Stories({ story }) {

  const { _id, turn } = story;

  const handleGetStory = async () => {
    const currentStory = await backendFunctions.getStory(_id)
    console.log(currentStory)
  }

  return (
    <div className="story-list">
      <p className="current-turn">Turn: {turn}</p>
      <button onClick={handleGetStory}>Select story</button>
    </div>
  )

}