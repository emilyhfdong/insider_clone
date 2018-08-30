import React, {Component} from 'react';

class Timer extends Component {
  state = {
    isCounting: false,
    remainingSeconds: this.props.remainingTime
  };

  secondsToTime = (remainingSeconds) => {
    let minutes = Math.floor(remainingSeconds / 60);
    let seconds = remainingSeconds % 60;

    let formattedSeconds = seconds > 9 ? seconds : '0' + seconds;
    return {
      minutes: minutes,
      seconds: formattedSeconds
    }
  };

  startTimer = () => {
    this.intervalId = setInterval(this.countDown, 1000);
    this.setState({isCounting: true})
  };

  pauseTimer = () => {
    this.setState({isCounting: false})
    clearInterval(this.intervalId)
  };

  resetTimer = () => {
    this.setState({isCounting: false})
    clearInterval(this.intervalId)
    this.setState({remainingSeconds: this.props.remainingTime})
  }
  finishGuessing = () => {
    clearInterval(this.intervalId)
    const interrogationTime = this.props.remainingTime - this.state.remainingSeconds
    this.props.saveInterrogationTime(interrogationTime)
  }


  countDown = () => {
    if (this.state.remainingSeconds !== 0) {
      this.setState({remainingSeconds: this.state.remainingSeconds - 1});
    } else {
      clearInterval(this.intervalId)
    }
  };

  render() {
    let time = this.secondsToTime(this.state.remainingSeconds)
    return (
      <div className="Timer">
        <h2>{time.minutes}:{time.seconds}</h2>
        {this.state.isCounting ? (
          <button onClick={this.pauseTimer}>Pause</button>
        ):(
          <button onClick={this.startTimer}>Start</button>
        )}
        <button onClick={this.resetTimer}>Reset</button>
        <button onClick={this.finishGuessing} >GOT IT</button>
      </div>
    );
  }
}

export default Timer;
