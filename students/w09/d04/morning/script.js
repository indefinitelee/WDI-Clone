
// 1.0
<<<<<<< HEAD
//  var goldenSnitch = {
//    escape: "See ya!",
//    capture: "150 points to Gryffindor!",
//    logEscape: function() {
//      console.log(this.escape);
//    }
//  }

//  var harryPotter = {
//    escape: "Only with the help of friends",
//       position: "Seeker",
//    broomStick: "Nimbus 2000",
//    logEscape: function() {
//     console.log(this.escape);
//  }
// }
=======
var goldenSnitch = {
  escape: "See ya!",
  capture: "150 points to Gryffindor!",
  logEscape: function() {
    console.log(this.escape);
  }
}

var harryPotter = {
  position: "Seeker",
  broomStick: "Nimbus 2000",
  escape: "Only with the help of friends"
}
>>>>>>> 7134a7afb3557a946d032cc00d7cb45c818f571b

//  console.log(goldenSnitch.capture);
//  goldenSnitch.logEscape();

//  console.log(harryPotter.escape)
//  harryPotter.logEscape();
//  var sayHarryEscape = goldenSnitch.logEscape.bind(harryPotter)
//  sayHarryEscape();

// answer: the bind on line 22 binds the var harrypotter to the function goldensnitch.logEscape?


// 1.2
// var draco = {
//   name: "Draco Malfoy",
//   house: "Slytherin",
//   hasHenchmen: true,
//   logYelling: function() {
//     if (this.hasHenchmen === true) {
//       console.log("Potter! Is it true you fainted? I mean, you actually fainted? ");
//     } else if (this.hasHenchmen === false) {
//       console.log("Shove off Malfoy!")
//     } else {
//     	console.log('this broke')
//     }
//   }
// }

// var ron = {
//   name: "Ron Weasley",
//   house: "Gryffindor",
//   hasHenchmen: false
// }

// draco.logYelling();
<<<<<<< HEAD
// var ronYelling = draco.logYelling.bind(ron);
// ron.ronYelling();

// // answer


// // 1.7
=======
// ron.logYelling();

// answer

// 1.7
>>>>>>> 7134a7afb3557a946d032cc00d7cb45c818f571b
// var dumbledore = {
//   name: "Albus Dumbledore",
//   prefix: "Professor",
//   quote: "In dreams we enter a world that's entirely our own."
// }

// var snape = {
//   name: "Serveus Snape",
//   prefix: "Professor",
//   quote: "Mr Potter.Our.New.Celebrity",
//   sayQuote: function() {
//     console.log(this.quote);
//   }.bind(dumbledore)
// }

// snape.sayQuote();

<<<<<<< HEAD
// answer dumbledore is bound to the this.quote so the this becomes a reference to dumbledore
//
//
// // 1.9
//
// // answer do .bind(hagrid) to the sayQuote function in button.js line 22
=======
// // answer
//
//
// 1.9
var hagrid = {
  name: "Rubeus Hagrid",
  quote: "Your a wizard, Harry!",
  sayQuote: function() {
    console.log(this.quote)
  }
}

var longbottom = {
  name: "Neville Longbottom",
  quote: "Well, there's some debate among herbologists about its effectiveness in fresh water as opposed to salt water... ",
  sayQuote: function() {
    console.log(this.quote)
  }
}


var button = document.getElementById('sorcerersButton');

button.addEventListener(
  "click",
  hagrid.sayQuote.bind(hagrid)
)

// answer
>>>>>>> 7134a7afb3557a946d032cc00d7cb45c818f571b


// // 2.0
// var hagrid = {
//   name: "Rubeus Hagrid"
// }

// var longbottom = {
//   name: "Neville Longbottom"
// }

// var say = function(quote){
//   console.log(quote + ", said " + this.name);
// }

// say.call(hagrid, "You're a wizard, Harry!")

// say.call(longbottom,
//   "Well, there's some debate among herbologists about its effectiveness in fresh water as opposed to salt water... "
// )
//
// // answer call is a function method, this.name in the say function refers to the name in the quote parameter?


// // 3.0
var hagrid = {
  name: "Rubeus Hagrid"
}

var snape = {
  name: "Serveus Snape"
}

var say = function(quote){
  console.log(quote + "," + this.name);
}

var update = function(job, teaches, quote){
  this.job = job,
  this.teaches = teaches,
  this.quote = quote
}

var logMore = function(person, method, args){
  method.apply(person, args)
}

logMore(hagrid, say, ["Yo I'm "])
logMore(snape, say, ["I am ...................................................................."])

logMore(hagrid, update, ["Keeper of Keys and Grounds", "Care of Magical Creatures", "What's comin' will come and we'll meet it when it does."])

logMore(snape, update , ["Professor at Hogwarts", "Defence Against the Dark Arts", "Turn to page 394."])

console.log(hagrid)
console.log(snape)
//
// // answer