import React, { Component } from 'react';
import Audio from './Audio.jsx';
import wordBank from '../Resources/word_bank.json'


class Bedtime extends Component {
  state = {
    timeouts: [],
    currentSound: "",
    currentMessage: ""
  }

  changePhase = (sound, message, time) => {
    const helper = () => (
      this.setState({
        currentSound: sound,
        currentMessage: message
      })
    )
    this.state.timeouts.push(setTimeout(helper, time))
  }
  getRandomWord = () => {
    const index = Math.floor(Math.random() * (481))
    return wordBank[index]
  }
  restartPhase = () => {
    this.state.timeouts.forEach(timeout => clearTimeout(timeout))
    this.startPhase()
  }
  startPhase = () => {
    let time = 0
    const randomWord = this.getRandomWord()
    this.changePhase("sleepFools", "It's time for bed, kiddos", time)
    this.changePhase("masterAwake", randomWord, time += 5000)
    this.changePhase("defaultSleep", randomWord, time += 5000)
    this.changePhase("littleGirlAwake", randomWord, time += 2500)
    this.changePhase("defaultSleep", "", time += 5000)
    this.changePhase("everyoneAwake", "GOOD MORNING SUN", time += 2500)
  }

  componentDidMount() {
    this.startPhase()
  }

  render() {
    return (
      <div className="Bedtime">
        {this.state.currentSound && <Audio sound={this.state.currentSound}/>}
        <h1>{this.state.currentMessage}</h1>
        <button onClick={this.restartPhase}>RESTART</button>
        {this.state.currentSound === "everyoneAwake" && <button onClick={() => this.props.switchMode("GuessWord")}>NEXT</button>}
      </div>
    );
  }
}

export default Bedtime;
