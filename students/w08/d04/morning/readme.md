# 10 Javascript Interview Questions You Should Know!


1) What should the following code output? Explain this behavior.

```
(function(){
  var a = b = 3;
})();

console.log(a);
console.log(b);
```
a is undefined since the variables is hidden within the IIFE scope. 
b is equal to 3 because javascript is weird. var a = b = 3 creates a globally scoped b 
and a var a = b

2) Consider the code below. Will they return the same thing? Why or why not?

```
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
```
javascript implicity adds a semicolon after the second return statement, resulting in the object  containing bar: "hello" being returned. 

3) In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
```
(function() {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);
})();
```
1,4,3,2 because the setTimeout function will be run after the console logs of 1 and 4

4) What will be the output when the following code is executed? Explain.
```
console.log(false == '0') true because == is not a strict comparison and 0 is falsey
console.log(false === '0') false because ==== is a strict comparison and false is not the same as string '0'
```

5) What’s the result of executing this code and why.
```
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```
undefined ,2 
variable declarations get hoisted but not the assignemtn

6) What is the output of the following code?
```javascript
  var a={},
      b={key:'b'},
      c={key:'c'};

  a[b]=123;
  a[c]=456;

  console.log(a[b]);
```
456 
because when b or c are used as keys for an object, because they are both objects, js tries to coerce the object b into a string. it reassigns 456 into that object created in a[b]. 
the bracket notation causes it to look for a string. 
a['[object Object]'] = 123
a['[object Object]'] = 456

7) Write a function to deliver the output  [1,2,3,4,5,1,2,3,4,5]
```
function duplicate([1,2,3,4,5]){
  let newArr = []; 
  //something 
  for loop 
  newArr.push
}
but this would return an array of two arrays. 
```
Samuel solution
function d (arr) {
  return arr.concat(arr); 
}

8) Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

 if (i % 15 === 0) {
      ' fizzbuzz'; 
     } else if (i % 5 === 0) {
       ' buzz';
    } else if (i % 3 === 0) {
      fizz';

9) Explain "hoisting".
hoisting is what fucks everything up and confuses beginning programming students. 
it moves all functions to the top of the lexical scope. 
variables/lets/consts are hoisted next but detached from their assignments


10) What is a ternary operator? Show an example.
a ternary operator is a more concise way to write an if else. it takes a condition and returns the value to the left of a : if true, the value to the right if false. 
(something to evaluate) ? <run if true> : <run if false>
