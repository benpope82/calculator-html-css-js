// Javascript

var MAX_DIGITS = '20';

$( document ).ready(function() {

});

var display = document.getElementById('display');
console.log(display);
$('.button').on("click", function(e) {
	var value = e.currentTarget.textContent;
	validate_input(value);
});

var validate_input = function(val){
	
	// when valid
	switch (val) {
		case '+': ac();
		break;
		case '-': ac();
		break;
		case '&#xd7;': multiply();
		break;
		case '&divide': divide();
		break;
		case '+/-': plus_minus();
		break;
		case 'AC': ac();
		break;
		case 'C/CE': cce();
		break;
		case '=': calculate();
		break;
		default: update_display(val);
	}
}

var add = function(){

}

var subtract = function(){

}

var multiply = function(){

}

var divide = function(){

}

var minus_plus = function(){

}

var ac = function() {
	document.getElementById('display').textContent = '0';
}

var cce = function() {
	// take the last input from the screen and clear it
}

var calulate = function(){

}

var update_display = function(val) {
	document.getElementById('display').textContent += val;
}

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