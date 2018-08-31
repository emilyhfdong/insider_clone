import React, { Component } from 'react';

class Landing extends Component {
  state = {
    currentRule: 0,
    unmounting: false,
  }
  nextRule = () => {
    if (this.state.currentRule < 3) {
      this.setState({currentRule: this.state.currentRule + 1})
    }
  }
  previousRule = () => {
    if (this.state.currentRule > 0) {
      this.setState({currentRule: this.state.currentRule - 1})
    }
  }
  startGame = () => {
    this.setState({unmounting: true})
    setTimeout(() => this.props.switchMode("Bedtime"), 500)

  }
  render() {
    const rules = rulesArray[this.state.currentRule]
    return (
      <div className={`${this.state.unmounting && "animated slideOutLeft"} Landing`}>
        <div className="titleDiv">
          <i className="fa fa-bullseye animated infinite pulse"></i>
          <h1 className="title">game</h1>
          <i className="fa fa-bullseye animated infinite pulse"></i>
        </div>
        <div className="rulesDiv">
          <i onClick={this.previousRule} className={`hvr-backward fa fa-chevron-left ${this.state.currentRule === 0 && "none"}`}></i>
            {rules}
          <i onClick={this.nextRule} className={`hvr-forward fa fa-chevron-right ${this.state.currentRule === 3 && "none"}`}></i>
        </div>
        <button className="hvr-grow startBtn" onClick={this.startGame}>start</button>
      </div>
    );
  }
}

export default Landing;

const generalRules = (
  <div className="rules">
    <h3 className="ruleCategory">general rules</h3>
    <p>Everyone has a secret identity. There is a master, an insider, and the rest are commoners. </p>
    <p>The goal of the game for everyone (except the insider ofc) is to find the insider during the 3 phases of the game: bedtime, questions, and interrogation.</p>
  </div>
)

const bedtimeRules = (
  <div className="rules">
    <h3 className="ruleCategory">bedtime phase</h3>
    <p>Everyone will follow instructions read out by the narrator (me)</p>
    <p>While everyone is asleep, the master and insider will take turns opening their eyes to find out the secret word</p>
  </div>
)

const questionRules = (
  <div className="rules">
    <h3 className="ruleCategory">questions phase</h3>
    <p>Everyone (including the insider) will ask the narrator yes/no questions to try to find out the secret word</p>
    <p>If no one finds out the word in 5 min, everyone loses</p>
    <p>The insider is trying to get anyone (including themselves) to say the right answer without revealing themselves</p>
  </div>
)

const interrogationRules = (
  <div className="rules">
    <h3 className="ruleCategory">interrogation phase</h3>
    <p>Now, the master and the commoners have the amount of time it took for them to guess the correct word, to find the insider</p>
    <p>After the time is up, everyone will point at who they think the insider is</p>
    <p>If the majority guesses the correct insider, the commoners and the master win, otherwise the insider wins</p>
  </div>
)

const rulesArray = [generalRules, bedtimeRules, questionRules, interrogationRules]



