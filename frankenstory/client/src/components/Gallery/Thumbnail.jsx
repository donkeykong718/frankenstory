import './gallery.css'
import { useState } from 'react'
import Storybook from './Storybook'

export default function Thumbnail({ story, index }) {

  const [select, setSelect] = useState({});

  const handleSelection = () => {
    setSelect(story);
  }

  const row = Math.floor(index / 5) + 1;
  let column = index % 5;
  if (column === 0) { column = 5 };

  const { title, frames } = story;

  return (
    <>    <div style={{ gridRow: `${row}`, gridColumn: `${column}` }} className="thumbnail">
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