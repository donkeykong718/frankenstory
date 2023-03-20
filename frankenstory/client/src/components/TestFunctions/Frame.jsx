export default function Frame({ frame }) {

  if (frame) {
    console.log(frame);
    const { user = '', img = '', text = '' } = frame;

    return (
      <div className="frame">
        <p>If this was an image it would be: {img}</p>
        <p>{text}</p>
        <p>Created by: {user}</p>
      </div>
    )
  }
  else {
    return;
  }

}