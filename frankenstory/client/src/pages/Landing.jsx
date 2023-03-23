import '../components/Gallery/gallery.css'
import Gallery from './Gallery'

import LogoImg from "../components/Header/Header assets/Frank_logo.svg";

export default function Landing() {

  const handleStart = () => {
    console.log('hi');
    const mainContainer = document.getElementById('main-container');
    // const welcomeBox = document.getElementById('welcome-box');
    // const curtain = document.getElementById('curtain');
    mainContainer.classList.add('slideup');
    // welcomeBox.classList.add('slideup');
    // curtain.classList.add('slideup');
  }

  return (
    <div id="main-container">
      <div id='welcome-box'>Welcome to Frankenstory, a collaborative storytelling game.
        <ol>
          <li>1.  Create a new story or select an in-progress one from the sidebar.</li>
          <li>2.  You'll be shown the latest illustration or text segment in an ongoing story (or given a random prompt to draw from if you start a new one.) </li>
          <li>3.  Draw or write whatever you think  comes next, there are no rules!</li>
          <li>4.  Actually, there is one rule. You can only contribute to each story once, so after you submit, select a new story or check out the gallery to see completed ones.</li>
          <li>5.  If you have an account, you will be notified when any story to which you contribute is finished.</li>
          <li>6.. Have fun! (Or don't, it's really up to you.)</li>
        </ol>
        <button onClick={handleStart}>Ready to play?</button>
      </div>
      <Gallery />
      {/* <Gallery /> */}
      {/* <div className='welcome-box'>
        This is some writing.
      </div> */}
      <div id="curtain">
        <div id="curtain-L">
          <img id="splash-logo-L" src={LogoImg} alt="" />
        </div>
        <div id="curtain-R">
          <img id="splash-logo-R" src={LogoImg} alt="" />
        </div>
      </div>
    </div>
  )
}