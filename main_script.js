// Javascript

// global vars
var MAX_DIGITS = 19;		// number
var numAndOps = [];			// collection of numbers and operators
var outcome;

// input functions
$('.button').on("click", function(e) {
	var key = e.currentTarget.textContent;
	handleInput(key);
});

// keyin function

// handling functions
var handleInput = function(val){
	switch (val) {
		//special cases
		case 'AC': 
			ac();
			break;
		case 'C/CE': 
			cce();
			break;
		case '=': 
			calculate();
			break;
		case '+/-': 
			plus_minus();
			break;
		case '.': 
			if ( noDot(val) ) display(val);
			break;
		// Operators
		case '+':
		case '-':
		case '×':
		case '÷':
			if ( validOperator(val) ) display(val)
			break;
		// numbers
		default: if ( validNumber(val) ) display(val);
		break;
	}
}

// validation functions //

var validOperator = function(operator){
	//console.log('valid operator', operator);
	// operator can only be added when there is are two spaces left
	// one of the operator the other for a number
	//if ( currentScreen.length == (MAX_DIGITS-2) ) return false
	
	// when valid handle the operator
	numAndOps.push(operator);					// add the operator into a new array element
	numAndOps[numAndOps.length] = '';
	return true;
}

var validNumber = function(val){
	console.log('valid number');
	// validation checks
	// if the inital number is present, remove it
	if ( document.getElementById('display').textContent == '0' ) document.getElementById('display').textContent = '';

	// when valid handle the number
	numAndOps[numAndOps.length-1] += val;		// add the value to the last element of the array 

	// check if the max length is not exceeded
	//if ( currentScreen.length >= MAX_DIGITS ) return false;
	return true;
}

var noDot = function() {
	console.log( /[.]/.test(numAndOps[numAndOps.length-1]) );
	// return false when a dot is present
	if ( /[.]/.test(numAndOps[numAndOps.length-1]) ) return false;
	else {
		numAndOps[numAndOps.length-1] += '.';
		return true;
	} 
}

// display functions

var display = function(value){
	document.getElementById('display').textContent += value;
	console.log(numAndOps);
}
var displayResult = function(custom){
	if (custom) console.log('custom', custom);
	else document.getElementById('display').textContent = outcome;
	// reset values
	clear();
	console.log(numAndOps);
}

// operator functions
var add = function(addMe){
	outcome += Number(addMe);
	console.log(outcome);
}	

var subtract = function(subtractMe){
	outcome -= Number(subtractMe);
	console.log(outcome);
}

var multiply = function(multiplyBy){
	outcome *= Number(multiplyBy);
	console.log(outcome);
}

var divide = function(divideBy){
	outcome /= Number(divideBy);
	console.log(divideBy);
	console.log(outcome);
}

var plus_minus = function(){
	// Operator check
	console.log('plus_minus');
	var replace = numAndOps[numAndOps.length-1];
	var replaceWith;
	replace = Number(replace);
	console.log(replace);
	//if ( (replace == NaN) ) console.log('NaN'); return;

	// Valid number
	if ( replace > 0 ) replaceWith = 0 - replace;
	else replaceWith = Math.abs(replace);

	// replace current value
	numAndOps[numAndOps.length-1] = replaceWith;
	console.log(numAndOps);

	// 
}

var ac = function() {
	document.getElementById('display').textContent = '0';
	clear(true);			// clear_all
}

var cce = function() {
	// take the last input from the screen and clear it

}

var clear = function(all){
	// initialize / reset values
	numAndOps.length = 0;
	if ( all ) numAndOps[0] = '';					// AC is pressed or initial start-up
	else numAndOps[0] = outcome.toString();			// used when = is pressed
	outcome = 0;
}

var calculate = function() {
	console.log(numAndOps);
	
	// When at least two numbers are available, proceed, else return
	if (numAndOps.length <= 2 ) return;
	var op;
	// replace outcome with the first value
	outcome = Number(numAndOps.shift());
	var nextValue;
	while (numAndOps.length > 0) {
		op = numAndOps.shift();
		nextValue = Number(numAndOps.shift());
		switch(op){
			case '+': 
				add(nextValue);
				break;
			case '-': 
				subtract(nextValue);
				break;
			case '×':
				multiply(nextValue);
				break;
			case '÷':
				divide(nextValue);
				break;
		}
	}
	displayResult();
}

// initialize values to start with a clean app
clear(true);


// might need this later
/* currently not in use, might use it for checking if a 0 has been entered after an operator and then a . is required
var zero = function(value){
	if ( currentScreen === '0' ) return true
	return false;
}

var removeZero = function(value){
	if ( typeof value === 'object' ) value.textContent = ''
	else value = '';
}
*/