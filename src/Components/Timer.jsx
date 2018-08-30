import React, {Component} from 'react';

class Timer extends Component {


  state = {
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
  };

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
        <button onClick={this.startTimer}>Start</button>
        <button>Pause</button>
        <button>Stop</button>
      </div>
    );
  }
}

export default Timer;
