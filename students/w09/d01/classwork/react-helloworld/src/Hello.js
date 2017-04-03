import React, { Component } from 'react';

class Hello extends Component {
  render() {
    console.log(this.props);
    return (
      <h1>Hello World, {this.props.name} you are {this.props.age} years old!</h1>
    );
  }
}

export default Hello;
