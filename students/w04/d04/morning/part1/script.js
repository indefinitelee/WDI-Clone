console.log('Linked');
<<<<<<< HEAD
<<<<<<< HEAD
$(function() {

$('#name-click').click(setName);
  function setName() {
  let name = prompt('Hey what does this button say?');
  $('#name-click').text(name); //could have used this.text
 }


$('#count-click').click(setCount);
  function setCount() {
    let count = (prompt('Enter the number of seconds to wait before I alert "DONE!"') * 1000) //could have ParseInt it to convert to integer
    setTimeout(function() { alert('DONE!') }, count);
  }

$('#scroll-click').click(setScroll);
 function setScroll() {
  let scroll = parseInt(prompt('How many pixels should I scroll down?'));
  console.log(scroll);
  $('body').scrollTop(scroll);
 }
//parseint not strictly necessary but omitting could mess up calculations later
});

=======
=======
>>>>>>> 68f0ffae58f88d2a835fd04f140f6822b22e6e4d

$(function() {
	// $('#name-click').click(function() {
	// 	let name = '';
	// 	while (name === '') {
	// 		name = prompt('GIVE US A NAME');
	// 	}
	// 	$(this).text(name);		
	// });

	$('#name-click').click(() => {
		let name = '';
		while (name === '') {
			name = prompt('GIVE US A NAME');
		}
		$(this).text(name);
	});

	$('#count-click').click(function() {
		let timer = parseInt(prompt('GIVE US SECONDS')) * 1000;
		setTimeout(function() {
			alert("DONE");
		}, timer)
	});

	$('#scroll-click').click(() => {
		let distance = parseInt(prompt('HOW MANY PX'));
		window.scrollBy(0,distance);
	});
<<<<<<< HEAD
});
>>>>>>> 68f0ffae58f88d2a835fd04f140f6822b22e6e4d
=======
});
>>>>>>> 68f0ffae58f88d2a835fd04f140f6822b22e6e4d
