import './gallery.css'
import Frame from './Frame'

export default function Storybook({ story }) {

  const { title, frames } = story;

  return (
    <div className="storybook">
      <div>Initial Prompt: {title}</div>
      {frames.map((frame, index) => (<Frame frame={frame} key={index}
      />))}
    </div>
  )
}