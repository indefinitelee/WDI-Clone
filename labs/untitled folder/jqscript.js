function setBackground(color) {
  document.body.style.backgroundColor='green';
}

// $(document).ready(function() {
//  setBackground('green');
//   alert("I'm ready")
// })//on it’s own won’t function since there is no event listener

// classic event listener binding
// function clickHander() {
//   $('input').click(function(){
//     $('body').css('background-color', 'red');
//   })
// }

// modern event listener binding
$('input').on('click', function(){
  $('body').css('background-color', 'red');
  });


$(function(){
  // setBackground('green');
  clickHandler();
})
