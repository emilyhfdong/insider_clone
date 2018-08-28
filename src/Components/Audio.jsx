import React, { Component } from 'react';
import beep from '../Resources/beep.mp3'
import defaultSleep from '../Resources/default_sleep.mp3'
import everyoneAwake from '../Resources/everyone_awake.mp3'
import littleGirlAwake from '../Resources/little_girl_awake.mp3'
import masterAwake from '../Resources/master_awake.mp3'
import sleepFools from '../Resources/sleep_fools.mp3'


class Audio extends Component {
  playAudio = () => {
    document.getElementById('player').play()
  }
  componentDidMount() {
    this.playAudio()
  }
  componentDidUpdate() {
    this.playAudio()
  }
  getAudio = (soundName) => {
    let soundSource
    switch(soundName) {
      case "beep":
        soundSource = beep
        break
      case "defaultSleep":
        soundSource = defaultSleep
        break
      case "everyoneAwake":
        soundSource = everyoneAwake
        break
      case "littleGirlAwake":
        soundSource = littleGirlAwake
        break
      case "masterAwake":
        soundSource = masterAwake
        break
      case "sleepFools":
        soundSource = sleepFools
        break
      default:
        break
    }
    return <audio id="player" src={soundSource}/>
  }


  render() {
    return (
      <div>
        {this.getAudio(this.props.sound)}
      </div>

    );
  }
}

export default Audio;