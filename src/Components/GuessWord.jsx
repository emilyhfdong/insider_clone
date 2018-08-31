import React, {Component} from 'react';
import Timer from "./Timer";

class GuessWord extends Component {
  state = {
    unmounting: false,
  }
  nextMode = (time) => {
    this.setState({unmounting: true})
    setTimeout(() => this.props.saveInterrogationTime(time), 500)
  }
  render() {
    return (
      <div className={`${this.state.unmounting && "animated slideOutLeft"} GuessWord animated slideInRight`}>
        <Timer nextMode={ this.nextMode } remainingTime={5*60}/>
      </div>
    );
  }
}

export default GuessWord;
