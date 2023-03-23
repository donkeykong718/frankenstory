import "./gallery.css";
import { useState, useEffect, useRef } from "react";
import Storybook from "./Storybook";

export default function Thumbnail({ story, index }) {
  const [select, setSelect] = useState({});

  const handleSelection = () => {
    setSelect(story);
  };

  const storybookRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (
        !storybookRef.current?.contains(event.target) &&
        !storybookRef.current?.contains(event.target)
      ) {
        setSelect({});
      }
    });
  }, [select]);

  const row = Math.floor(index / 5) + 1;
  let column = index % 5;
  if (column === 0) {
    column = 5;
  }

  const { title, frames } = story;

  return (
    <>
      {" "}
      <div
        style={{ gridRow: `${row}`, gridColumn: `${column}` }}
        className="thumbnail"
      >
        <h3>{title}</h3>
        {frames[3].text.length > 400 ? (
          <img src={frames[3].text} alt="thumbnail" />
        ) : (
          <p>{frames[3].text}</p>
        )}
        <button onClick={handleSelection}>Select story</button>
      </div>
      {select === story ? <Storybook story={story} isAlive={false} /> : <></>}
    </>
  );
}
