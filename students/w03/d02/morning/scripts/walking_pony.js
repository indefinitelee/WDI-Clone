console.log("PONY POWER!!");
// $(function() {
// function walkingPony() {
//       // var inWidth = window.innerWidth;
//       // if ($('#pony').position().left < inWidth) {
//           $('#pony').animate({
//             left: '1000px'
//           }, 5000)
//         }
// // setInterval(walkingPony, 1000)
// });
//       // $('#pony').animate.position().left({
//       //       left: '+=' + 1000
//       //     });
//       //   }
//       // var rabbit = $(".rabbit");
//     // rabbit.animate({
//     //   left: '900px'
//     // }, 'slow');

//   //   $('.box2').animate({
//   //           left: '+=' + (diff < stepSize ? diff : stepSize)
//   //         });
//   // }
// solution

function walkingPony() {
  var $pony = $('#pony');
  var distance = 1200;
  setInterval(function(){
  $pony.css('left', distance + 'px');
  if (distance < -300) {
    distance = 1200;
} else {
  distance -=5;
   }
  }, 100);
};

$(document).ready(function(){
walkingPony()
});
