const clock = () => {

let secHand = document.getElementById("second-hand");
let minHand = document.getElementById("minute-hand");
let hourHand = document.getElementById("hour-hand");

// let seconds = setInterval(secondHand, 1000);
// let minutes = setInterval(minHand, 6000);

secDeg = 0;
minDeg = 0;
hourDeg = 0;

// function secondHand() {
//   secDeg = (secDeg + 6);
//   secHand.style.transform=`rotate(${secDeg}deg)`;
// }

// function minuteHand() {
//   minDeg = (minDeg + 6);
//   minHand.style.transform=`rotate(${minDeg}deg)`;
// }

setInterval( () => {
  secDeg += 6;
  minDeg += .1;
  hourDeg += .1/12;
  secHand.style.transform = `rotate(${secDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}, 1000);


};

document.addEventListener('DOMContentLoaded', () => {
  console.log('Clocks loaded');
  clock();
});