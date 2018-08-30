import React, { Component } from 'react';
import Timer from "./Timer";


class GuessInsider extends Component {
  render() {
    return (
      <div className="GuessInsider">
        <h1>it's me</h1>
        <Timer saveInterrogationTime={ this.props.saveInterrogationTime } remainingTime={this.props.interrogationTime}/>
      </div>
    );
  }
}

export default GuessInsider;
