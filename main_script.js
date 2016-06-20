// Javascript
$( document ).ready(function() {

});

// next step assign an element to a var, so it works easier in the code 
var display = $('.display').html();
	console.log(display);

$('.button').on("click", function(e) {
	console.log(e.currentTarget.textContent);
});