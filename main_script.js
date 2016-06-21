// Javascript

var sub_display = '';


$( document ).ready(function() {

});

// next step assign an element to a var, so it works easier in the code 
// var display = $('.display').html();
	var display = document.getElementById('display');
	console.log(display);
$('.button').on("click", function(e) {
	var value = e.currentTarget.textContent;
	switch (value) {
		case 'AC': document.getElementById('display').textContent = '0';
		break;
		case '1' : alert();
		break;
		default : document.getElementById('display').textContent += e.currentTarget.textContent;
	}
	console.log(e.currentTarget.textContent);
	
});



/*
workings of the app

click event
key down event
	what is the input

functions needed
	* multiply
	* subtract
	* add
	* subtract
	* +/-
	* =, once calculate

	* validate_input
	* update display, Main and calculations
	* 

vars needed
	* to display the keyed in values
	* maximum allowed numbers
	* 


Points to consider
* remove the zero once a number is entered
	- except when a . is entered

* max numbers to display
first decimal .e+amount of numbers 
e.g. 1.e+16 or 1.23456753e+21
error is not needed, just an increase of the exponential
same goes for the minus e.g. 3.4567712e-12

--< Optional >--
	* = multiple times, repeat the previous steps

--< Known issues >--
- footer issue and #main background issue.

*/