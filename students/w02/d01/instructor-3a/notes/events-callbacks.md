# Events and Callbacks
_Adapted from [GA DC's Events and Callbacks  lesson](https://github.com/ga-wdi-lessons/js-events-callbacks/blob/master/readme.md)_
## Learning Objectives

* Explain the concept of a 'callback' and how we can pass functions as arguments to other functions.
* Explain why callbacks are important to asynchronous program flow.
* Pass a named function as a callback to **another** function.
* Identify when to **reference** a function and when to **invoke** a function.
* Describe what an anonymous function is and when you would use one.
* Pass an anonymous function as a callback to another function.
* Describe the difference between asynchronous and synchronous program execution.

## Framing (5 minutes)

In order to do things on the client side and give our web applications behavior, we need programmatic access to the HTML and CSS using Javascript. Javascript gives us not only the ability to manipulate the **DOM** as we've seen, but also to make it respond to user actions. This is where events come in: we can *listen* for certain kinds of user-driven events, such as clicking a button, entering data into a form, keypresses, and many, many more.

### User Interaction

As we write client-side Javascript (javascript that is executed by *our browsers*, as opposed to being executed by a server we are accessing), it is very important to keep the user's actions in mind when designing our app's UI.

For example, [let's say we have a single button](http://codepen.io/amaseda/pen/VKaLJk) on our landing page, we need to write some code that will execute whenever a user clicks on that button.

### What is Asynchronicity?

Javascript typically will run top-to-bottom. We as developers, however, have no idea when the code related to the button click will actually be executed. It's totally dependent on the user. Therefore, we need to write code that will execute asynchronously -- or in other words, outside of the typical top-to-bottom document flow -- and not hold up the rest of our application.

Javascript as a language was built with this problem in mind and has spawned many more solutions that have been introduced through libraries, packages and frameworks. Together, these tools provide some abstractions to interact with events. As such, we as developers can write code to listen for and respond to these events.

Today, we will get practice writing the underlying code responsible for adding behavior to a webpage with jQuery.


### We Do: Set Up

For this lesson we'll be working with only two files: `index.html` and `script.js`

You should see this in `index.html`...

```html
<!-- index.html -->

<!DOCTYPE html>
<html>
  <head>
    <title>Events and Callbacks Practice</title>
  </head>
  <body>
    <button>Click me!</button>
  </body>
  <script src="script.js"></script>
</html>
```

Now let's put a simple block of code in `script.js` to make sure it's properly linked to `index.html`...

```js
// script.js

console.log( "The page's contents have finished loading!" );
```

## You Do: What Is An Event? (5 minutes / 0:10)

But first, a question for you: **What is an event?** Spend two minutes doing the following tasks. You are encouraged to discuss your findings with a partner during the exercise.

1. Come up with your own definition without looking at any other sources. Don't worry about getting it right -- what do you **think** an event is?
2. Now, find (i.e., Google) some documentation on Javascript events. Does that information match your definition? How would you change it?
3. Write down three examples of an event.  

> If you need some help, you can find information on events and examples [W3Schools](http://www.w3schools.com/js/js_events.asp) and [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/Events).

## Setting Up An Event Listener (15 minutes / 0:25)

Now that we know a bit about events in Javascript, let's wire up our code to be able to respond to those events. In order to run code in response to an event, we need to define an **Event Listener**. Below you'll find a simple event listener. Its purpose? Print a message to the console whenever a button is clicked...

```js
// script.js

var button = document.querySelector('button');

function handleClickEvent(){
  console.log("I was clicked!");
}

// This is the event listener
button.addEventListener('click', handleClickEvent);
```

Let's go through the above code examples line-by-line...

### Selecting The Element

We want our "click handler" -- what we're calling this event listener -- to trigger every time the button is clicked. In order for this to happen, we need to select the button from the DOM and represent that button in Javascript.

```js
var button = document.querySelector('button');
```

### Defining The Behavior

When our button is clicked, we want some code to run that prints a message to the console. We are going to **encapsulate** that code in a function. We'll do something with it later.

```js
function handleClickEvent(){
  console.log("I was clicked!");
}
```

### Creating The Event Listener

Now for the big step: linking our behavior with a button click. Let's look at that event listener again and go over each component...

```js
button.addEventListener('click', handleClickEvent);
```

#### `button`

The first component is the HTML element we are applying the listener to. In this case, that is the `<button>`, which is stored in our `button` variable.

#### `'click'`

The first argument is where we indicate what type of event we are listening to. In this case, that is a "click". We could replace this with other events like `"submit"` or `"mouseover"`.

> An extensive list of Javascript events can be found [here](https://developer.mozilla.org/en-US/docs/Web/Events).

#### `handleClickEvent`

The second argument is where we indicate what we want to happen once the event occurs. This is what is known as a **callback**.  

This might not be your first time hearing it and definitely won't be your last. A callback is a piece of executable code that is passed as an argument to other code, which is expected to invoke (or "call back") that executable code at some convenient time.

In other words, **a callback contains code that will be run at a later time.**

The invocation may be immediate or it might happen later. In the example above, `handleClickEvent` is our callback. The invocation happens when the button is clicked.  

> We can also pass in anonymous functions (i.e., define a nameless function directly inside of the event listener) instead of previously-defined functions.

### You Do: Practice (10 minutes)

Visit this [repository](https://git.generalassemb.ly/wdi-nyc-60/event-listener-practice) and follow the instructions.

### Callbacks: Calling vs. Referencing (5 minutes)

When we call a function, we place parentheses after the function name. In the case of callbacks like `handleClickEvent`, however, there are no parens.

Try adding parentheses at the end of this line...

```js
button.addEventListener('click', handleClickEvent());
```

<details>

  <summary><strong>Refresh the page. What happened? What was different? Why?</strong></summary>

  > "I was clicked!" pops up immediately upon reload. When we include `()` we invoke the function expression immediately, not after the user interacts with the page. Without the `()`, we're using the function expression as a reference.

</details>


## Break (10 minutes)

### You Do:
- Break students into groups of two to do some pair programming
[Color Scheme Switcher](https://git.generalassemb.ly/wdi-nyc-60/color-scheme-switcher) (20 - 30 minutes)
- Go over code with students


## Timing Functions (15 minutes)

Let's look at timing functions -- that is, Javascript's way of making something happen every `x` seconds.

Replace the contents of your `script.js` with...

```js
function sayHello(){
  console.log("Hi there!")
}
setInterval(sayHello, 1000);
```

### Turn and Talk

Refresh the page. Spend two minutes observing and answering the following questions...

* What does `setInterval` do?
* What does the number in `setInterval` indicate?
* Replace `setInterval` with `setTimeout`. What's the difference?

We'll make it more interesting by having the timer start on a click event, and stop on another click event.

Put a "start" and a "stop" button in your HTML...

```html
<button id="start">Start</button>
<button id="stop">Stop</button>
```

Then, replace the contents of your `script.js` with this...

```js
// Represent the start and stop buttons in Javascript
var start = document.querySelector("#start");
var stop = document.querySelector("#stop");

// Create a callback function that prints something to the console
var singAnnoyingSong = function(){
  console.log("I know a song that gets on everybody's nerves...");
}

// Create a variable that will store our timer
var songTimer;

// Create an event listener for the start button that will print something to the console every tenth of a second
start.addEventListener('click', function(){
  songTimer = setInterval(singAnnoyingSong, 100);
});

stop.addEventListener('click', function(){
  clearInterval(songTimer);
});
```

> We define `songTimer` outside of the final two event listeners because we need to be able to access it within both event listeners. This will make more sense when we discuss scope during tomorrow's class.

### Turn And Talk

Refresh the page. Observe and spend three minutes answering the following questions...

**What happens when you click the "start" button a bunch of times in a row?**
* Why?
* How is this different from events?
* When you do this, why doesn't the "stop" button seem to work?

**What does `clearInterval` do?**

## Demo: Asynchronicity with Timers

Run the next bit of code and you can see asynchronous program execution.

```js
function anAsyncFunction(){
  console.log("hello")
  setTimeout(function(){
    console.log("this is happening in the middle")
  }, 5000)
  console.log("goodbye")
}

anAsyncFunction();
```

Wait, what? The goodbye came before the "this is happening in the middle"!

With everything else we've seen, Javascript executes one line of code, then when that line is done, executes the next line of code. This is called being **synchronous**.

However, some operations in Javascript are **asynchronous**, meaning Javascript goes on to the next line of code without waiting for the previous line to complete.

#### Why doesn't Javascript wait for these operations to complete before going to the next line of code?

Because otherwise the webpage would just "hang" until the operation completes. The browser can't do anything while Javascript is actively running. We've seen this when we've encountered infinite `while` loops. Asynchronicity is a way of preventing the computer from freezing.

This risk is greatest when Javascript is making requests to other webpages. There's no way of knowing how long the request will take to complete. It could be near-instant, but if the target server is having a bad day, it could take who-knows-how-long. You don't want the operability of your computer to be at the mercy of some random computer somewhere else.

In this small app we made, anything we want to be sure happens **after** those 5 seconds of computing should go inside the callback of the `setTimeout`. This way, we can be certain that it will run only when the 5 seconds are up.

## You Do: [TimerJS](https://git.generalassemb.ly/wdi-nyc-60/timer-js) (40 minutes)

-------

# Additional Topics

### Event Defaults (10 minutes) (Bonus)

In `index.html`, replace your button with a link to Google...

```html
<body>
  <a href="http://google.com">Click me!</a>
</body>
```

Now, add an event listener to that link that brings up a `prompt` box, asking the user if they want to go to Google...

```js
var link = $("a");
var handleClickEvent = function(evt){
  var input = prompt("You sure you want to go to Google?");
}
link.on("click", handleClickEvent);
```

The problem is we don't know how to stop them from going to Google! They go anyway, whether they hit "OK" or "Cancel".

Some elements have a default action they perform. In the case of `<a>`, that action is going to another webpage. You can prevent that default action with an Event method called `preventDefault`.

```js
var link = $("a")
var handleClickEvent = function(e){
  e.preventDefault();
  prompt("You sure you want to go to Google?")
}
link.on("click", handleClickEvent);
```

> Event is a Javascript "class" from which all Javascript events are generated. That will make more sense later on in the course. If you're curious, however, try `console.log(e)` inside of the event listener and see what happens.

Now, no matter what the user clicks, they won't go to Google.

In order to make it so they that **do** go to Google on clicking OK, but **don't** on clicking 'Cancel', we can use the fact that when you click 'Cancel' on a `prompt`, it returns `null`...

```js
var link = $("a")
var handleClickEvent = function(e){
  if(prompt("You sure you want to go to Google?") === null){
    e.preventDefault();
  }
}
button.on("click", handleClickEvent);
```

### The Event Object (5 minutes) (Bonus)

Now, you're going to make a small change by adding an argument to the anonymous function and printing it to the console...

```js
var button = $("button");
var handleClickEvent = function(evt){
  console.log("I was clicked!")
  console.log(evt)
}
button.on("click", handleClickEvent);
```

The `evt` stands for `event`.

> The reason we're not actually using `event` is that it's a "reserved word" in Javascript, like "if" and "return".

#### You Do: Explore The Event Object (5 minutes) (Bonus)

With your partner, spend three minutes clicking the button and exploring what properties the event (or `evt`) object contains. Look for...

* A way to figure out what element was clicked on.
* A way to tell the position of the mouse when it clicked.
* One other piece of useful or interesting information.

## Key Events (15 minutes) (Bonus)

Let's explore some other events. Add a text input field into `index.html`...

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Events and Callbacks Practice</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
  </head>
  <body>
    <button>Click me!</button>
    <input placeholder="Type here!" />
    <script src="script.js"></script>
  </body>
</html>
```

#### You Do

With a partner, add an event listener for the `keyup` event to the input. Explore the `event` object again. **Can you find a way to tell which key was pressed?**

#### We Do

<details>

  <summary>Your code in `script.js` should look something like this...</summary>

  ```js
  var button = $("button");
  var input = $("input");
  var handleClickEvent = function(evt){
    console.log("I was clicked!")
    console.log(evt)
  }
  var handleKeyboardEvent = function(evt){
    console.log("You used the keyboard!")
    console.log(evt)
  }
  button.on("click", handleClickEvent);
  input.on("keyup", handleKeyboardEvent);
  ```

  > A cross-browser way of telling which key is pressed is using the `keyCode` property. For `d`, `evt.keyCode` is `68`. For Shift, it's `16`.

</details>

#### You Do

Find the keyCodes for...
* Enter
* Tab
* Delete

#### You Do

There are several other events that come up with the `input` tag. See if you can figure out the difference between...

* `keyup`
* `keydown`
* `keypress`
* `change`
* `focus`
* `blur`

> If you want to test out more Javascript events, an extensive list can be found [here](https://developer.mozilla.org/en-US/docs/Web/Events).

-------

## Sample Quiz Questions

1. What is the difference between synchronous and asynchronous program execution?
2. Define a function that takes a function as an argument and invokes the argument when the function is called.
3. What arguments does `setInterval` take?
4. What is the difference between `setInterval` and `setTimeout`?
