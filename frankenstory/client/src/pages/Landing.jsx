import '../components/Gallery/gallery.css'
import Gallery from './Gallery'

import LogoImg from "../components/Header/Header assets/Frank_logo.svg";

export default function Landing() {

  return (
    <div>
      <Gallery />

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