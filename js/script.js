var a=1;//number
var b='script';//string
var c=true;//boolean
var d=null;//null
//var e=indefine;//indefine
var o={};//object

/*alert(typeof(a));
alert(b);
alert(c);

alert(typeof(a) == 'number');*/

//operations

var v1, v2, v3;
v1 = 1;
v2 = 5;
v3 = v1+v2;
v1 = +v1;
v2++;

console.log(v3);
console.log(v1);
console.log(v2);

//plus operator

var s1, s2, s3;
s1 = 'Hello';
s2 = 'Javascript';
s3 = s1 + ' ' +s2;
console.log(s3);

//types transform
var p1, p2, p3;
p1 = "2";
p2 = 2;
p3 = +p1 + p2;//+p1 - преобразовываем строку в число
console.log(p3);

//logical ==, ===, !=, !==, !, &&, ||, >, <, >=, =<
if(1 == 2){
	alert('hello');
}else {
	alert('goobye');
};

var result = confirm('Are you sure?');
console.log(result);

var result2 = prompt('Insert value 1');
console.log(result2);

var result3 = prompt('Insert value 2');
console.log(result3);

var sum = +result2 + result3;
console.log(sum);
