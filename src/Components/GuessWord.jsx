import React, {Component} from 'react';
import Timer from "./Timer";

class GuessWord extends Component {

  render() {
    return (
      <div className="GuessWord">
        <h1>question me, kiddos</h1>
        <Timer saveInterrogationTime={ this.props.saveInterrogationTime } remainingTime={5*60}/>
      </div>
    );
  }
}

export default GuessWord;
