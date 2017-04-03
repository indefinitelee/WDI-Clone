'use strict';
// START HERE!
console.log('Mission to Mars is a go!')
$(function() {
// Scroll to the bottom of the page at the start so we can go back up!!
 $('body').scrollTop(20001);
 console.log('Scrolled to bottom');
// Define the Go! button event listener
$('#launch').click(missionControl);
  function missionControl() {
    var temp = prompt('What is the current temperature?');
    var fuel = prompt('What percentage is fuel?');
    var password = prompt('What is the lauch password?');
  if (temp <= 200 && fuel > 60 && password === 'fizzbuzz') {
    alert('countdown is go');
    countdown();
  } else { prompt('Launch Aborted!');
    }
  }
function countdown() {

}
// Define the countdown function


// Attach the click event to the Go! button


<<<<<<< HEAD
<<<<<<< HEAD

});
=======
=======
>>>>>>> 68f0ffae58f88d2a835fd04f140f6822b22e6e4d
const countdown = () => {
	alert('Rocket is ready to launch!');
	let timer = 10;
	let counterDisplay = $('#count');
	counterDisplay.text(timer);
	let clearTimer = setInterval(() => {
		timer--;
		if (timer === 0) {
			clearInterval(clearTimer);
			scrollTo($('body'), 0, 5000)
		}
		counterDisplay.text(timer);
	}, 100);
}

const goButtonHandler = () => {
	let temp, fuel, pwd;
	temp = parseInt(prompt('Temperature in F'));
	fuel = parseInt(prompt('Fuel percentage'));
	pwd = prompt('Enter password');
	if (temp <= 200 && fuel > 60 && pwd === 'fizzbuzz') {
		countdown();
	}
}


$(() => {
	window.scrollBy(0, 20000);
	$('#launch').click(goButtonHandler);
<<<<<<< HEAD
});
>>>>>>> 68f0ffae58f88d2a835fd04f140f6822b22e6e4d
=======
});
>>>>>>> 68f0ffae58f88d2a835fd04f140f6822b22e6e4d
