import React, { Component } from 'react';
import './ListContainer.css';

class ListContainer extends Component {
  render() {
// this.props.interests is this.state.interests from AppThree line 23
    const interests = this.props.interests.map((int, i) => {
      return (
        <li key={i}>
          {int}
        </li>
      );
    });

    return (
      <div className="interests-container">
        <h1>Interests</h1>
        <ul>
         {interests}
        </ul>
      </div>
    );
  }
}

export default ListContainer;
