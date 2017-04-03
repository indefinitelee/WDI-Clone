import React, { Component } from 'react';
import ListContainer from './ListContainer/ListContainer';
import HelloMessage from './HelloMessage/HelloMessage';
import './AppThree.css';

class AppThree extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Bobby',
      interests: [
        'blah',
        'blah',
        'blah'
        ]
    };
  }

  render() {
    return (
      <div className="app-container">
        <HelloMessage name={this.state.name}/>
        <ListContainer interests={this.state.interests}/>
      </div>
      );
    }
  }
  export default AppThree;
