// Javascript

var Calc = function(){
// global vars
	var MAX_DIGITS = '20';	
	var validated;
	var current_screen = document.getElementById('display').textContent;
	var input = '';

// functions
	this.add = function(add){
		
	}	

	this.valid_input = function(val){
		if ( current_screen.length < MAX_DIGITS ) return true;
		// when valid
	}
	this.display = function(value){
		document.getElementById('display').textContent += value;
	}

	this.handle_input = function(val){
		console.log(val);
		switch (val) {
			case '+': if (this.valid_input(val)) this.add();
			break;
			case '-': subtract();
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
			default: calc.display(val);
		}
	}
}

var calc = new Calc();

$('.button').on("click", function(e) {
	var pressed = e.currentTarget.textContent;
	calc.handle_input(pressed);
});





var subtract = function(){

}

var multiply = function(){

}

var divide = function(){

}

var plus_minus = function(){

}

var ac = function() {
	calc.display('0');
}

var cce = function() {
	// take the last input from the screen and clear it
}

var calculate = function(){

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