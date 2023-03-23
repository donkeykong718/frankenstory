import { getUser } from '../../services/users'
import "./gallery.css"

export default function Frame({ frame }) {

  const { text, user } = frame;
  console.log(text);
  console.log(typeof text);
  let type;

  text.length > 400 ? type = 'image' : type = 'text';
  console.log(type);

  let contributor;

  const Contributor = async () => {

    if (user !== null) {
      contributor = await getUser(user)
    }
    else { contributor = 'guest' }
    return contributor;
  }

  contributor = Contributor();

  if (contributor !== 'guest') { contributor = contributor.username }


  return (
    <div className="frame">
      {type === 'image' ? <img src={text} alt="" /> : <p style={{ fontFamily: 'Schoolbell' }}>{text}</p>
      }
      {contributor && <p>Created by: {contributor}</p>}
    </div>

  )
}