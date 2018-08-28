import React, { Component } from 'react';
import Audio from './Audio.jsx';
import wordBank from '../Resources/word_bank.json'


class Bedtime extends Component {
  state = {
    currentSound: "sleepFools",
    currentMessage: "It's time for bed, kiddos"
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
  getRandomWord = () => {
    const index = Math.floor(Math.random() * (481))
    return wordBank[index]
  }

  componentDidMount() {
    let time = 0
    const randomWord = this.getRandomWord()
    this.changePhase("masterAwake", randomWord, time += 5000)
    this.changePhase("defaultSleep", randomWord, time += 5000)
    this.changePhase("littleGirlAwake", randomWord, time += 2500)
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
