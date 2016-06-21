// Javascript
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