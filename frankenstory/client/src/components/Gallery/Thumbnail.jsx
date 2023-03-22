import './gallery.css'
import { useState } from 'react'
import Storybook from './Storybook'

export default function Thumbnail({ story }) {

  const [select, setSelect] = useState({});

  const handleSelection = () => {
    setSelect(story);
  }

  const { title, frames } = story;

  return (
    <>    <div className="thumbnail">
      <h3>{title}</h3>
      {frames[6].text.length > 400 ?
        <img src={frames[6].text} alt="thumbnail" />
        : <p>{frames[6].text}</p>}
      <button onClick={handleSelection}>Select story</button>
    </div>
      {select === story ? <Storybook story={story} /> : <></>}
    </>

  )

}