'use strict'
$(document).ready( () => {
  $.ajax({
    url: 'http://api.randomuser.me/?results=5',
    type: 'GET', //is get by default
    dataType: 'json',
    success: (data) => { //callback function will run on success

      // $('body').append('<h1>');
      // $('h1').text(data.results[0].name.first + " " + data.results[0].name.last);
// OR - better since only one DOM operation
      // const $name = $('<h1>');
      // const firstName = data.results[0].name.first;
      // const lastName = data.results[0].name.last;
      // $name.text(`${firstName} ${lastName}`);
      // (`${firstName} ${lastName}`);
      // $('body').append($name);

//create a list with all 5 full names

const $nameList = $('<ul>');
for(let i = 0; i < data.results.length; i++) {
  let firstName = data.results[i].name.first;
  let lastName = data.results[i].name.last;
  let $li = $('<li>');
  $li.text(`${firstName} ${lastName}`);
  $nameList.append($li);
}
$('body').append($nameList);

   }
 })
});
