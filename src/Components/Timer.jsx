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
    this.props.nextMode(interrogationTime)
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
        <h1 className="timeRemaining">{time.minutes}:{time.seconds}</h1>
        {this.state.isCounting ? (
          <button className="hvr-grow" onClick={this.pauseTimer}><i className="fa fa-pause"></i></button>
        ):(
          <button className="hvr-grow" onClick={this.startTimer}><i className="fa fa-play"></i></button>
        )}
        <button className="hvr-grow" onClick={this.resetTimer}><i className="fa fa-rotate-left"></i></button>
        <button className="hvr-grow" onClick={this.finishGuessing}>got it</button>
      </div>
    );
  }
}

export default Timer;
