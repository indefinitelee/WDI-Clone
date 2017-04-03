// Create an empty object literal
var lee = {}
// Use dot notation to add the following information to your object:
undefined
lee.firstName = ("Lee");
lee.lastName = ("Wilson");
lee.age = (35);
// Add another key value pair to your object, where the key is hobbies and the value is an array of strings.
lee.hobbies = ["soccer", "gin", "peanut butter"];
["soccer", "gin", "peanut butter"]
lee
Object {firstName: "Lee", lastName: "Wilson", age: 35, hobbies: Array[3]}age: 35firstName: "Lee"hobbies: Array[3]lastName: "Wilson"__proto__: Object__defineGetter__: __defineGetter__()__defineSetter__: __defineSetter__()__lookupGetter__: __lookupGetter__()__lookupSetter__: __lookupSetter__()constructor: Object()hasOwnProperty: hasOwnProperty()isPrototypeOf: isPrototypeOf()propertyIsEnumerable: propertyIsEnumerable()toLocaleString: toLocaleString()toString: toString()valueOf: valueOf()get __proto__: __proto__()set __proto__: __proto__()

// Write a function that will print your first and last name to the console. This function should accept your object as an argument.

function printFullName(Obj) {
 console.log(lee.firstName + lee.lastName);
}
printFullName(lee);

function printFullName(Obj) {
 console.log(lee.firstName + " " + lee.lastName);
}
// Now use dot notation to make that function into a method that belongs to your About Me object with the key printName. Try using the this keyword to access information inside of the object!

lee.sayAge = function() {
  console.log(this.age);
}
lee.sayAge();

// Add another method to your object that prints a single string (including your first name, last name, and all of your hobbies) to the console. Iterate through the hobbies array with a for loop and add a comma after each hobby in the string.
lee.printAll = function printItAll(person) {
  var hobs = null;
  for (i = 0; i < this.hobbies.length; i++)  {
    var data = this.hobbies[i];
    var hobs = hobs + ", " + ", " + ", " + data;
  }
  return "Hi, I'm " + this.printFullName() + " and my hobbies include " + hobs
  }

//  Answers

//1
var trevor ={}

//2
trevor.firstName = 'Trevor';
trevor.lastName = 'Preston';
trevor.age = 13;

//3
trevor.hobbies = ['programming', 'writing code', 'developing web applications'];


//4
function printNames(person){
  console.log(person.firstName + ' ' + person.lastName);
}

printNames(trevor)

//5
trevor.printName = function() {
 console.log(this.firstName, this.lastName);
}

//6
krystyna.printData = function printItAll(person) {
 var hobs = null;
 for (var i = 0; i < this.hobbies.length; i++) {
   var data = this.hobbies[i];
   hobs += ", " + data;
 }
 return "Hi, I'm " + this.fullName() + " and my hobbies include " + hobs
}


//Matt
matt.printData = function (){
for(var i = 0; i < this.hobbies.length; i++){
  this.hobbies.join(',');
}
 return 'Hi, I\'m ' + matt.firstName + ' and my hobbies include ' + this.hobbies;
