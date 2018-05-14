var num1 = +prompt('Insert value 1');
var num2 = Number(prompt('Insert value 2')); 
var result;

if (num1 > num2) {
	var action = prompt('Choose action(+, - , *, **, /)');
if (action == '+' || action == 'plus') {
	result = num1 + num2;
}else if (action == '-') {
	result = num1 - num2;
}else if (action == '*') {
	result = num1 * num2;
}else if (action == '**') {
	result = num1 ** num2;
}else if (action == '/') {
	result = num1 / num2;
}else {alert('Choose correct action');}
alert(result);
}else {alert('Sorry Num1 < Num2');}

var yet = confirm('You want to continue?');
if (yet == true) {
	num1 = +prompt('Insert value 1');
	num2 = Number(prompt('Insert value 2'));
if (num1 > num2) {
	var action = prompt('Choose action(+, - , *, **, /)');
if (action == '+' || action == 'plus')  {
	result = num1 + num2;
}else if (action == '-') {
	result = num1 - num2;
}else if (action == '*') {
	result = num1 * num2;
}else if (action == '**') {
	result = num1 ** num2;
}else if (action == '/') {
	result = num1 / num2;
}else {alert('Choose correct action');}
alert(result);
}else {alert('Sorry Num1 < Num2');}
}else {alert('Goodbye!')}

var yet = confirm('You want to continue?');
if (yet == true) {
	num1 = +prompt('Insert value 1');
	num2 = Number(prompt('Insert value 2'));
if (num1 > num2) {
	var action = prompt('Choose action(+, - , *, **, /)');
if (action == '+' || action == 'plus')  {
	result = num1 + num2;
}else if (action == '-') {
	result = num1 - num2;
}else if (action == '*') {
	result = num1 * num2;
}else if (action == '**') {
	result = num1 ** num2;
}else if (action == '/') {
	result = num1 / num2;
}else {alert('Choose correct action');}
alert(result);	
}else {alert('Sorry Num1 < Num2');}
}else {alert('Goodbye!')}