var p = document.createElement.body('p');
p.innerHTML = "box";
document.querySelector('p').style.backgroundColor = red;
document.querySelector('p').addEventListener('mouseover', function(event) {
   event.target.style.color = "orange";
});
