import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <button onClick={ event => this.props.switchMode("Landing") }>Home</button>
        <button onClick={ event => this.props.switchMode("Bedtime") }>Bedtime</button>
        <button onClick={ event => this.props.switchMode("GuessWord") }>Questions</button>
        <button onClick={ event => this.props.switchMode("GuessInsider") }>Interrogation</button>
      </div>
    );
  }
}

export default NavBar;
