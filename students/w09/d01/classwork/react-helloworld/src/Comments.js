import React, { Component } from 'react';

class Comments extends Component {
  render() {
    return (
      <div>
        <p>{this.props.commentText}</p>
        <h5>{this.props.author}</h5>
      </div>
      );
  }
}

export default Comments;
