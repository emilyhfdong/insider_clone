import React, { Component } from 'react';

class NavBar extends Component {

  render() {
    return (
      <div className="navbar">
        <p className="navBtn" onClick={event => this.props.switchMode("Landing")}>Home</p>
        <p className="navBtn">Bedtime</p>
        <p className="navBtn">Questions</p>
        <p className="navBtn">Interrogation</p>
      </div>
    );
  }
}

export default NavBar;
