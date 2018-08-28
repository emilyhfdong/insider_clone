import React, { Component } from 'react';
import Audio from './Audio.jsx';


class Bedtime extends Component {
  state = {
    currentSound: "sleepFools",
    currentMessage: "It's time for bed, kiddos"
  }

  changeAudio = (sound) => {
    this.setState({ currentSound: sound })
  }

  changePhase = (sound, message, time) => {
    const helper = () => (
      this.setState({
        currentSound: sound,
        currentMessage: message
      })
    )
    setTimeout(helper, time)
  }

  componentDidMount() {
    let time = 0
    this.changePhase("masterAwake", "WORD", time += 5000)
    this.changePhase("defaultSleep", "WORD", time += 5000)
    this.changePhase("littleGirlAwake", "WORD", time += 2500)
    this.changePhase("defaultSleep", "", time += 5000)
    this.changePhase("everyoneAwake", "GOOD MORNING SUN", time += 2500)
  }

  render() {
    return (
      <div className="Bedtime">
        <Audio sound={this.state.currentSound}/>
        <h1>{this.state.currentMessage}</h1>
      </div>
    );
  }
}

export default Bedtime;
