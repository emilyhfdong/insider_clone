import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <h1>Clone of the Insider of the world</h1>
        <p>rules</p>
        <button onClick={ event => this.props.switchMode("Bedtime") }>Start</button>
      </div>
    );
  }
}

export default Landing;
