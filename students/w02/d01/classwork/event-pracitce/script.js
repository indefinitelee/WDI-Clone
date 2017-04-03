console.log('Loaded!');

var $button = document.querySelector('button');
//storeda reference to the DOM (note the $)
function handleMyClicks(){
  console.log('I was clicked!');
}
// created a function to be called when the event occurs
$button.addEventListener('click', handleMyClicks);
//set up an event handler to listen for clicks wiich will fire the function when the click event occurs
