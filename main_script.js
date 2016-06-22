// Javascript

// global vars
var MAX_DIGITS = 19;		// number
var multiOps = [];			// collection of numbers and operators
var currentScreen = '';		// string
var currentNumber = 0;		// number value
var firstValue = 0;			// number value
var secondValue = 0;		// number value

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
		case '.': // . handling will happen here.
		break;
		// Operators
		case '+':
		case '-':
		case '×':
		case '÷':
			if ( validOperator(val) ) display(val,true)
			break;
		// numbers
		default: if ( validNumber(val) ) display(val);
		break;
	}
}

var validOperator = function(operator){
	console.log('valid operator');
	// operator can only be added when there is are two spaces left
	// one of the operator the other for a number
	if ( currentScreen.length == (MAX_DIGITS-2) ) return false
	multiOps.push(Number(currentNumber), operator);
	currentNumber = '';
	return true;
}

var validNumber = function(val){
	console.log('valid number', currentScreen.length);
	// remove the inital 0
	if ( document.getElementById('display').textContent == '0' ) document.getElementById('display').textContent = '';
	// check if the max length is not exceeded
	if ( currentScreen.length >= MAX_DIGITS ) return false;
	return true;

}
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
var display = function(value, operator){
	document.getElementById('display').textContent += value;
	if (!operator) currentNumber += value;
	currentScreen = document.getElementById('display').textContent;
	//console.log(currentScreen);
	//console.log(currentNumber);
	console.log(multiOps);
}
var displayResult = function(){
	document.getElementById('display').textContent = firstValue;
}

var add = function(){
	console.log( firstValue, secondValue);

	firstValue += secondValue;
	displayResult();
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
	currentScreen = '';
	currentNumber = '';
}

var cce = function() {
	// take the last input from the screen and clear it

}

var calculate = function() {
	// todo catch += or -= *= errors
	// push the latest value into the array
	var op;
	multiOps.push(1*currentNumber);
	console.log(multiOps);
	currentNumber = '';
	while (multiOps.length > 0) {
		firstValue = multiOps.shift();
		op = multiOps.shift();
		secondValue = multiOps.shift();
		switch(op){
			case '+': 
				add();
				break;
/*			case '-':
			case '×':
			case '÷':*/
		}
	}
	multiOps.length = 0;
}