import Sound from 'react-sound'
import itsalive from './itsalive.mp3';
const itsAlive = new Audio(itsalive);

export default function AliveSound() {

  return (
    <Sound url={itsAlive}
      playsStatus={Sound.status}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
    />
  )

}