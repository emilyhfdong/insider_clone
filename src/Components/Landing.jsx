import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <h1 className="title">game</h1>
        <p className="rules">rules</p>
        <button className="startBtn" onClick={ event => this.props.switchMode("Bedtime") }>play</button>
      </div>
    );
  }
}

export default Landing;
