
//part 1:
<<<<<<< HEAD
// change all to ES 5 style then to ES 6 style
=======



>>>>>>> e48156ba7c4c5c2086f7d5c9cf7cd5c544a1e1af
//1a
function kanyesGoldenUnicorn() {
  console.log('wanted a plantinum unicorn');
}
<<<<<<< HEAD

//1b
var items = [];  //array literal
=======

// as a function expression (with semicolon)
var kanyesGoldenUnicorn = function() {
  console.log('wanted a plantinum unicorn');
};

//1b
var items = [];
>>>>>>> e48156ba7c4c5c2086f7d5c9cf7cd5c544a1e1af

//1c

var bigAnimalArray = [
  'elephant',
  'tiger',
  'bunny',
  'unicorn',
<<<<<<< HEAD
  'polar bear'//es6 allows a comma here
=======
  'polar bear',
>>>>>>> e48156ba7c4c5c2086f7d5c9cf7cd5c544a1e1af
];



//part 2:

var pickle = 22;
<<<<<<< HEAD
var cat = Math.random

if (9 < cat ) {
  console.log('Found the cat!');
}
  else if (pickle < 4) {
=======
var cat = Math.random()*10;

if (cat > 9) {
  console.log('Found the cat!');
} else if (pickle < 4) {
>>>>>>> e48156ba7c4c5c2086f7d5c9cf7cd5c544a1e1af
  console.log('AAHRHW');
}


//part 3:
function login() {
  function hideContainer(){
    console.log('dummy hidden container');
  }
  $status = document.getElementById('status');
  // we're assuming there was an HTTP call here, that returned a 'response'
  if (response.status === 'connected') {
    $status.innerHTML = "we are connected";

  } else if (response.status === 'not_authorized') {
    $status.innerHTML = "Not connected";
    hideContainer();

<<<<<<< HEAD
  function login() {

  if (response.status === 'connected') {
    document.getElementById('status').innerHTML = "we are connected."
}   else if (response.status === 'not_authorized') {
    document.getElementById('status').innerHTML = "Not connected";
     hideContainer();
}    else  {
    document.getElementById('status').innerHTML = "You are not logged in into facebook, please log in to take a quiz";
};
=======
  } else {
    document.getElementById('status').innerHTML = "You are not logged in into facebook, please log in to take a quiz";

  }
>>>>>>> e48156ba7c4c5c2086f7d5c9cf7cd5c544a1e1af
}


//part 4:
<<<<<<< HEAD
function howMany(selectObject) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++)  {
=======
function howMany(selectObject, otherThing, moreThings) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++) {
>>>>>>> e48156ba7c4c5c2086f7d5c9cf7cd5c544a1e1af
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}
<<<<<<< HEAD


//part 5:
var userInfo = {  // changed let to var/
  fname: req.body.fname,
lname: req.body.lname,
email: email,
passwordDigest: hash
};

//es6 version

const userInfo = {
  fname: req.body.fname,
  lname: req.body.lname,
  email: email,
  passwordDigest: hash
};



//part 6:
var $balance = $('.balance'); //cache jQuery checks
if (($('#check').html().length +1) === $('#userPick').html().length ) {
  $winnermsg.append('Congratulations you won!')
  newValue++;
  $('.balance').text(newValue);
} else  {
    newValue -= 1;
    $('.balance').text(newValue);
 }
//







=======

>>>>>>> e48156ba7c4c5c2086f7d5c9cf7cd5c544a1e1af

// part 5:
// es5
var userInfo = {
  fname: req.body.fname,
  lname: req.body.lname,
  email: email,
  passwordDigest: hash
};

// es6
/* blurg */
const userInfo = {
  fname: req.body.fname,
  lname: req.body.lname,
  email: email,
  passwordDigest: hash,
};


// part 6:
var newValue = 0;
var $balance = $('.balance');

if (($('#check').html().length+1) === $('#userPick').html().length) {
  $winnermsg.append('Congratulation you won');
  newValue++;
  $balance.text(newValue);
} else {
  newValue -= 1;
  $balance.text(newValue);
}
