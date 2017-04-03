'use strict';
console.log('js linked');
$(document).ready(() => {

  const $body = $('body');
  const $searchField = $('input');
  const $submit = $('button');

  function searchBook() {
      $.ajax( {
  url: 'https://www.googleapis.com/books/v1/volumes',
  method: 'GET',
  dataType: 'json',
  data: {
    q: $searchField.val() //q for query in google's documentation
   }
  })
  .done( data => {
    const $booklist = $('<ul>');
    for (let i = 0; i < data.items.length; i++) {
      let $li = $('<li>');
      let $book = $('<details>');
      let $title = $('<summary>');
      let $description = $('<p>');
      $title.text(data.items[i].volumeInfo.title);
      $description.text(data.items[i].volumeInfo.description);
      $book.append($title, $description);
      $li.append($book);
      $booklist.append($book);
    }
    $('body').append($booklist);
  })
 }
   $submit.on('click', searchBook); //or submit.click instead of .on('click')
});

//create click handler for submit button that fires searchBook
//

// $(document).ready(() => {
//   $.ajax({
//     url: 'http://example.com',
//     method: 'GET',
//     dataType: 'json',
//     data: {
//       artistID: '45Ef7',
//       medium: 'music'
//     }
//   })
//   .done( (a, b, c) => {
//     // a -> successful data object
//     // b -> 'success'
//     // c -> XHR object
//   })
//   .fail( (a, b, c) => {
//     // a -> error data object
//     // b -> 'error' or 'failure'
//     // c -> XHR object
//   })
//   .always( (a, b, c) => {
//     // a -> successful/error data object
//     // b -> 'success' / 'failure'
//     // c -> XHR object
//   })
// });
