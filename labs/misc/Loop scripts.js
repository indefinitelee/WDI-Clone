// for loops
// count up from 155 to 200
//for (var i = 155; /* initialize i variable */ i <= 200; /* condition */ i++ /* increment or decrement */) {
//console.log("iteration # " + i);
//}

// count down from 100 to 0
//for (var i = 100; /* initialize i variable */ i >= 1; /* condition */ i-- /* increment or decrement */) {
//console.log("iteration # " + i);
//}

//count from 999 to 888

//for (var i = 999; i >= 888; i--) {
//  console.log("iteration # " +i);
//}

// create a loop to create 9 LIs
for (var i = 1; i <=100; i++) {

  // create a new LI element
  var $li = document.createElement('li');
  // get a hold the UL with the class numbers
  var $ul = document.querySelector('ul.numbers');
  // add the index number  as the content of the LI
    // append the LI to the UL

  $ul.appendChild($li);
      if (i%2 === 0) {
      $li.style.fontSize='.5em';
    } else {
      $li.style.fontSize='2em';
    }
     if (i % 15 === 0) {
       $li.innerHTML += ' fizzbuzz'; //+= grabs pre-existing content and contats
     } else if (i % 5 === 0) {
       $li.innerHTML += ' buzz';
    } else if (i % 3 === 0) {
      $li.innerHTML += 'fizz';
    }
}
// add 11 divs with a height/width of 10px and a green background

for (var i = 0; i < 11; i++) {
  var $div = document.createElement('div');
  $div.style.backgroundColor='green';
  $div.style.height='10px';
  $div.style.width='10px';
  $div.style.margin='3px';
  document.body.appendChild($div);
}


//change all images on a site to a new image
//var images = document.querySelectorAll('img');
//var newImageUrl = 'https://s-media-cache-ak0.pinimg.com/236x/2e/32/40/2e3240d77437388a1cd238e120fd1a26.jpg';
//for (var i = 1; i < images.length; i++) {
//images[i].setAttribute('src', newImageUrl);
//}

