// Javascript

// global vars
var MAX_DIGITS = '19';	
var currentScreen = '';
var currentNumber = '';

// functions
$('.button').on("click", function(e) {
	var key = e.currentTarget.textContent;
	handleInput(key);
});

var handleInput = function(val){
	switch (val) {
		//special cases
		case 'AC': ac();
		break;
		case 'C/CE': cce();
		break;
		case '=': calculate();
		break;
		case '+/-':
		break;
		case '.':
		break;
		// Operators
		case '+':
		case '-':
		case '&#xd7;':
		case '&divide;':
		if (validOperator) display(val)
		break;
		// numbers
		default: if (validNumber(val)) display(val);
	}
}

var validOperator = function(){
	// operator can only be added when there is one more space left for a number
	if ( currentScreen.length === MAX_DIGITS-1 ) return false
	//currentNumber = '';
	return true;
}

var validNumber = function(val){
	// remove the inital 0
	if ( document.getElementById('display').textContent == '0' ) document.getElementById('display').textContent = '';
	// check if the max length is not exceeded
	if ( currentScreen.length === MAX_DIGITS ) return false;
	return true;
}

var zero = function(value){
	if ( currentScreen === '0' ) return true
	return false;
}

var removeZero = function(value){
	if ( typeof value === 'object' ) value.textContent = ''
	else value = '';
}

var validInput = function(val, operator){
	console.log('valid_input');	
	// 0 followed by a number, remove the 0
//	if ( (ifZero(val) && (!operator) ) removeZero();
	// 

	// 
	//if ( (currentScreen === '0') && (val !== '.') ) return false;
	return true;
}

var display = function(value){
	document.getElementById('display').textContent += value;
	currentNumber += value;
	currentScreen = document.getElementById('display').textContent;
	console.log(currentScreen);
	console.log(currentNumber);
}

var add = function(add){

}	

var subtract = function(){

}

var multiply = function(){

}

var divide = function(){

}

var plus_minus = function(){

}

var ac = function() {
	document.getElementById('display').textContent = '0';
	currentScreen = '0';
	currentNumber = '0';
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