import * as backendFunctions from "../services/stories";
// import Frame from './Frame'
// import { GalleryContext } from '../App';
import { useState, useEffect } from "react";
import Thumbnail from "../components/Gallery/Thumbnail";
// import Header from '../components/Header/Header'
// import Sidebar from '../components/side-bar/side-bar'

import "../components/Gallery/gallery.css";
import LabBackdrop from "./laboratory1920a.jpg";

//   const workspace = document.querySelector(".workspace");
//   const gallery = document.querySelector(".gallery");
//   workspace.classList.toggle('hidden');
//   gallery.classList.toggle('hidden');

//   setStories(finishedStories);
//   // console.log(finishedStories);

// }

{
  /* <button onClick={displayGallery}>View Gallery</button> */
}

function Gallery() {
  const [finstories, setFinStories] = useState([]);

  useEffect(() => {
    const displayGallery = async () => {
      const allStories = await backendFunctions.getStories();
      const finishedStories = allStories.filter(
        (story) => story.completed === true
      );
      console.log(finishedStories);
      setFinStories(finishedStories);
    };
    displayGallery();
  }, []);

  //   const workspace = document.querySelector(".workspace");
  //   const gallery = document.querySelector(".gallery");
  //   workspace.classList.toggle('hidden');
  //   gallery.classList.toggle('hidden');

  //   setStories(finishedStories);
  //   // console.log(finishedStories);

  // const { _id, title, frames } = story;
  // const { featured, setFeatured } = useContext(GalleryContext);

  // const handleGetStory = async () => {
  //   const featuredStory = await backendFunctions.getStory(_id)

  //   setFeatured(featuredStory);
  // }

  return (
    <div
      style={{ backgroundImage: `url(${LabBackdrop})` }}
      className="gallery-page"
    >
      <h1
        style={{
fontFamily: 'Creepster',
          color: "#A6CFD5",
          textAlign: "center",
          margin: "60px",
          fontSize: "80px",
          textShadow: "#963484 1px 1px 0px, rgb(170, 170, 170) 2px 2px 0px",
        }}
      >
        Gallery
      </h1>
      <ul className="gallery-list">
        {finstories.map((story, index) => (<Thumbnail story={story} key={index} index={index}
        />))}
      </ul> 
    </div>
  );
}

export default Gallery;
