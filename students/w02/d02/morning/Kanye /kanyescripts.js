
console.log('javascript connected!')
var hoverCounter = 0;
var doubleCoutner = 0;


$(function(){
  //build your functions here:
  function flatten2(){
    console.log('box2 is 200px');
    $('#box2').css('height','200px')
  }

  // function decrease1() {
  //   console.log('box1 is 20 percent smaller');
  //  $('#box1').css('height', .8*($('box1').height()))
  //  hoverCounter++
  //   }

function increase1(){
  console.log('box1 is 20 percent larger');
  $('#box1').css('height', 1.2*($('box1').height()))
}


  //apply your event listners here:
  $('#box1').mouseover(flatten2);
  $('#box2').mouseover(decrease1);
  $('#box1').click(increase1);
})
