/*
Number Conversion:-To convert Boolean values or numeric strings to numbers, we use the Number() i.e. an in-built method. Number() method in case
 of empty strings and null values return 0. If a string is an invalid number like having an alphabet in a string, the result will be NaN.  
 */
let res;
// string to number
res = Number('100');
console.log(res); // 100
// boolean to number
res = Number(false);
console.log(res); // 0
res = Number(' ')
console.log(res); // 0
res = Number('hello');
console.log(res); // NaN
res = Number(undefined);
console.log(res); // NaN


/*Boolean Conversion :-Boolean type conversion happens in logical operations. It also follows the rules, but they are mostly obvious:
NaN, 0, undefined, null, "" are converting to false
everything else, including objects, to true */
res=Boolean(1); // true
res= Boolean(0); // false
res= Boolean("hello"); // true
res= Boolean(""); // false


/*String Conversion:-The method String() is used to convert numbers to strings. It can be used on any type of numbers, literals, variables, or 
expressions. The method toString() does the same. */
let resi
let i=90
resi= String(i) // returns a string from a number variable a
resi=String(378009) // returns a string from a number literal 378009
res=i.toString() 
res=(378009).toString()


//parseInt and parseFloat:-The in-built method parseInt() and parseFloat() return numbers from strings that start with numeric data. Here is an examples:
console.log( parseInt('$100 dollars') ); // NaN
console.log( parseInt('+10.25990 kg') ); // 10
console.log( parseFloat(' +10.25 kg') ); // 10.25
console.log( parseFloat('ABC') );//NaN





// Type coercion

/*Sometimes JavaScript automatically converts one data type to another. This type of conversion is known as implicit conversion.

Conversion To String:- When we add a number into a string, JavaScript converts the number to a string before concatenation. Here is an example: */

//NOTE-->Well here with + operator the console isgoing to think that conscattenation shoud took place so it will bw converted to string
let tes;
tes = '3' + 4; 
console.log(tes) // "34"
tes = '9' + true; 
console.log(tes); // "9true"
tes= '0' + null; 
console.log(tes); // "0null"

//NOTE-->With rest operators the expression will be converted to number


/* 
Conversion To Number:- Numeric string used with operators like +, - , / , * returns number type */
let mes
mes = '4' - '4'; 
console.log(mes); // 0
mes = '4' * 5;
console.log(mes); // 20

/** Boolean Conversion to Number:- If we use Boolean, true is considered as 1 and false is considered as 0. */
let les;
les = '5' - true;
console.log(les); // 4
les = 10 + false;
console.log(les); // 10


/**In JavaScript, Null is considered as 0 when used with numbers. Arithmetic operation of undefined with number, boolean or null returns NaN */
pes = 4 + null; // 4
pes = 4 - undefined;// NaN


let chess;
chess='5'-null
console.log(chess);