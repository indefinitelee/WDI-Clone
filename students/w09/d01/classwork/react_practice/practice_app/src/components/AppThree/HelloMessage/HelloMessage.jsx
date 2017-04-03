import React, { Component } from 'react';
import './HelloMessage.css';

class HelloMessage extends Component {
  render() {
    return (
      <div>
        <p>Hello my name is <span>{this.props.name}</span></p>
      </div>
    );
  }
}

export default HelloMessage;
