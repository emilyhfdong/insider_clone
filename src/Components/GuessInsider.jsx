import React, { Component } from 'react';
import Timer from "./Timer";


class GuessInsider extends Component {
  nextMode = () => {
    this.props.switchMode("Landing")
  }
  render() {
    return (
      <div className="GuessInsider animated slideInRight">
        <Timer nextMode={ this.nextMode } remainingTime={this.props.interrogationTime}/>
      </div>
    );
  }
}

export default GuessInsider;
