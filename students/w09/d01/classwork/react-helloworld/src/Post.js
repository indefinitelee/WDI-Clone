import React, { Component } from 'react';
import Comments from './Comments';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      title: 'This is a title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt a maiores, blanditiis animi minus porro illum quas nostrum velit non, architecto deserunt amet expedita perspiciatis veritatis error consequatur culpa.',
      comments:[
        {
          text:'Lorem',
          author:'Anon1'
        },
        {
          text:'Lorem',
          author:'Anon2'
        },
        {
          text:'OP is an idiot',
          author:'Anon3'
        }
      ]
    }
  }
 render() {
  const comments = this.state.comments.map((comments, i) => {
    return (
      <Comments
        key={i}
        author={comments.author}
        commentText={comments.text}
      />
    );
  });

   return (
    <div>
      <h2>{this.state.title}</h2>
      <h3>By: {this.props.postAuthor}</h3>
      <p>{this.state.content}</p>
      <h4>Comment Section</h4>
      {comments}
    </div>
   );
 }
}

export default Post;
