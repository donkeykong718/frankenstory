import * as backendFunctions from '../../services/stories'
// import Frame from './Frame'
import { GalleryContext } from '../../App';
import { useContext } from 'react'


function Gallery({ story }) {

  const { _id, prompt, frame1: { img } = {} } = story;
  const { featured, setFeatured } = useContext(GalleryContext);


  const handleGetStory = async () => {
    const featuredStory = await backendFunctions.getStory(_id)

    setFeatured(featuredStory);
  }

  return (
    <div>
      <li>{prompt}</li>
      <li className="current-turn">If this were an image, it would be: {img}</li>
      <button onClick={handleGetStory}>Select story</button>
    </div>
  )

}

export default Gallery;