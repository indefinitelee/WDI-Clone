import React, { Component } from 'react';
import Ball from './Components/Ball/Ball';

class App extends Component {

  constructor () {
    super();

    this.state = {
      // this is the default state and keeps track of which is selected
      selectedIndex: 0,
      ballUrl: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Red_ball.png",
      "http://pngimg.com/upload/small/basketball_PNG1096.png",
      "http://www.businesscopilot.co.uk/wp-content/uploads/2014/02/golf-ball.jpg",
      "http://www.pngall.com/wp-content/uploads/2016/03/Tennis-Ball-Transparent.png",
      ]
      }
    }

  componentWillMount() {
    this.getRandom();
//    this.startInterval();
  }

//   this is better practice, per Rafa
//   startInterval() {
//    const ref = setInterval(() => {
//     this.getRandom();
//   }, 1000);
//    this.setState({
//    intervalRef: ref
//    });
//   }
// componentWillUnmount() {
//   clearInterval(this.state.intervalRef);
// }

getRandom() {
  this.oneSecond = setInterval( ()=> {
  this.setState ({
    selectedIndex: Math.floor(Math.random() * this.state.ballUrl.length)
    });
  }, 1000)
}

  render() {
    return(
      <Ball url={this.state.ballUrl[this.state.selectedIndex]} new={this.getRandom.bind(this)}/>

    );
  }
}


export default App;
