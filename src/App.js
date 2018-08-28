import React, { Component } from 'react';
import Landing from './Components/Landing.jsx'
import Bedtime from './Components/Bedtime.jsx'
import NavBar from './Components/NavBar.jsx'
import GuessWord from './Components/GuessWord.jsx'
import GuessInsider from './Components/GuessInsider.jsx'

class App extends Component {

  state = {
    mode: "Landing"
  }

  renderState(mode) {
    switch(mode) {
      case "Landing":
        return <Landing switchMode={ this.switchMode }/>;
      case "Bedtime":
        return <Bedtime/>;
      case "GuessWord":
        return <GuessWord/>;
      case "GuessInsider":
        return <GuessInsider/>;
      default:
        return <p>I suck</p>;
    }
  }

  switchMode = (mode) => {
    this.setState({ mode: mode })
  }

  render() {
    return (
      <div className="App">
      <NavBar
        switchMode={ this.switchMode }
        mode={ this.state.mode }
      />
      { this.renderState(this.state.mode) }
      </div>
    );
  }
}

export default App;
