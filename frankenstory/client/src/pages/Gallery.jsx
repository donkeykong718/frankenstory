import * as backendFunctions from '../services/stories'
// import Frame from './Frame'
// import { GalleryContext } from '../App';
import { useState, useEffect } from 'react'
import Thumbnail from '../components/Gallery/Thumbnail'
// import Header from '../components/Header/Header'
// import Sidebar from '../components/side-bar/side-bar'

import "../components/Gallery/gallery.css"


//   const workspace = document.querySelector(".workspace");
//   const gallery = document.querySelector(".gallery");
//   workspace.classList.toggle('hidden');
//   gallery.classList.toggle('hidden');

//   setStories(finishedStories);
//   // console.log(finishedStories);

// }

{/* <button onClick={displayGallery}>View Gallery</button> */ }


function Gallery() {

  const [finstories, setFinStories] = useState([]);

  useEffect(() => {
    const displayGallery = async () => {

      const allStories = await backendFunctions.getStories();
      const finishedStories = allStories.filter(story => story.completed === true);
      console.log(finishedStories);
      setFinStories(finishedStories);
    }
    displayGallery();
  }, [])


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
    <div>
      <div className='gallery-page'>
        <h1>Gallery</h1>
        <ul className="gallery-list">
          {finstories.map((story, index) => (<Thumbnail story={story} key={index}
          />))}
        </ul>
        {/* {selection &&
          <div>{pictureBook(featured)}</div>} */}
      </div>

    </div>
  )

}

export default Gallery;