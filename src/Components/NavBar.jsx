import React, { Component } from 'react';

class NavBar extends Component {
  order = [
    {
      mode: "Landing",
      name: "Home"
    },
    {
      mode: "Bedtime",
      name: "Bedtime"
    },
    {
      mode: "GuessWord",
      name: "Questions"
    },
    {
      mode: "GuessInsider",
      name: "Interrogation"
    }
  ]

  render() {
    let isFound = false

    const allButtons = this.order.map(button => {
      if (button.mode === this.props.mode) {
        isFound = true
      }
      return <button onClick={event => this.props.switchMode(button.mode)} disabled={isFound}>{button.name}</button>
    })

    return (
      <div className="navbar">
        {allButtons}
      </div>
    );
  }
}

export default NavBar;
