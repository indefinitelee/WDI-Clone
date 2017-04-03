import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component {

  render() {
    return (
      <div>
        <img src={this.props.url} onClick={this.props.new} />
      </div>

    );
  }
}

export default Ball;
