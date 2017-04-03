console.log('starter.js connected');

// Part 1 - Arenagrams
<<<<<<< HEAD

const areAnagrams = (wordOne, wordTwo) => {
let one = wordOne.split('').sort().join('');
let two = wordTwo.split('').sort().join('');
if (one === two) {
  console.log('true');
} else {
    console.log('false');
  }
};

//OR

if (wordOne.length !== wordTwo.length) { }

// const areAnagrams = (wordOne, wordTwo) => {
//  if (wordOne.length !== wordTwo.length) {
//   return false;
//   console.log("words are not anagrams, raga man.");
//   } else {
//     for (i=0; i < wordOne.length; i++)
//       if (wordOne.charAt[i] === wordTwo.charAt[i]) {
//       return true;
//       console.log("As Anagram Rewords")
//     }
// };
// }





// to check if words are anagrams compare the characters in each, if they are all the same, it is an anagram, though maybe not a dictionary word

// so something like for wordOne.length
// does CharAt index equal any character in wordTwo
// if no, cannot be an anagram.
// if yes, check subsequent letters
// if all letters in wordOne are in wordTwo then they are anagrams.
// in real life check against m-w.com
=======
// const areAnagrams = (wordOne, wordTwo) => {

// };

// const areAnagrams = (wordOne, wordTwo) => {
//   let one = wordOne.split('').sort().join('');
//   let two = wordTwo.split('').sort().join('');
//   if (one === two) {
//     console.log('true');
//   } else {
//     console.log('false');
//   }
// };
const areAnagrams = (wordOne, wordTwo) => {
 let letters = ""
 if (wordOne.length == wordTwo.length) {
   for(let i = 0; i<wordOne.length; i++){

     if (wordTwo.includes(wordOne[i])) {
       letters+=wordOne[i]
     }
     else {
       return console.log('not anagrams')
     }

   }
   if (letters.length==wordTwo.length){
       return console.log('they are anagrams!')
     }
 }
 else {
   return console.log('not anagrams')
 }
};


areAnagrams('team', 'meat');
>>>>>>> 22f06cf285a284a59945b57b9cdba17ed3a7a74c
