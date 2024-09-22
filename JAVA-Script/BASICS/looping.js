//ab kuch hoten hai kutte ki dum theu never leave theri habits ,everytime they will repeat the same actions in a loop hence we will study abiut\
// differnt tyoes of loop condiions



/*There will be times when we want to repeat an action or run some code multiple times. Suppose we want to display the message 100 times. We could
do this by simply creating a function display_Message() and calling it 100 times using copy and paste. No doubt, this will work but, we should 
not do something like this. Duplicating code is never a good idea. The versatility of the computer lies in its ability to perform the set of 
instructions repeatedly. The generic solution for repeating code with control is provided in the form of loops. There are four different kinds 
of loops in JavaScript that we can be used to repeat some chunk of code:

for 
for…in 
forEach
while 
do…while  */


//for loop
for(var i=1; i<=5; i++) {
    console.log(i);
    }


//FOR IN LOOP
//It is a special type of loop, used when we want to iterates over the properties of an object
var person = {name: "Harry", language: "JavaScript", age: 20};
// Loop through all the properties in the object  
for(var i in person) {  
console.log( i + " = " + person[i]); 
}



//WHILE LOOP
let i = 1, n1 = 100;
while (i <= n1) {
    console.log(i);
    i += 1;
}

//do while loop
let i = 1;
let n =100;
do {
    console.log(i);
    i++;
} while(i <= n);



//BREAKING A LOOP
for (let i = 0; i < 100; i++) {
    console.log(i);
       if (i == 90) {
           break;
       }
   }


//SKIPPING A ITERATION
let i = 10;
for (let x = 1; x <=i; x++) {
    if (x == 5) {
        continue;
    }}



//for in loop
/** The for..in loop is an iteration method for iterating over "enumerable" properties of an object. This loop applies to all objects that have 
 * these properties. Here enumerable means an array or object or strings. If we are using a for…in loop over an object, it will give us the value 
 * to each key in the object. Here is the syntax of the for..in loop: 
 * for (variable in enumerable) {
        // do stuff
}
*/


const obj = {
    first: 134,
    second: 255,
    third: 367,
    fourth: 433
}
for (const key in obj) {
    console.log( obj[key] )
} // Result: 134, 255, 367, 433

//for of loops
/**To iterate over objects like arrays and strings, we can use the for...of statement. This statement is a newer feature of ECMAScript 6. The 
 * for..of loop does not work with objects because they are not "iterable". This iteration method is a more reliable way of looping through an 
 * Array in sequence. In this example of a for...of loop, we will print each item in the array to the console.

let students = [ "Mark", "Harry", "Joe" ];
// Print out each type of shark
for (let std of students) {
   console.log(std);
} //Result: Mark, Harry, Joe */


/**Which loop should we use? and When?
Each type of loop is useful in a different scenario:

If indexes are needed while accessing an array of indexes related logical stuff are there, the for loop is a good choice.
If there is a need to access keys/properties regardless of the sequence, use a for-in loop.
If there is a need to iterate through items of an iterable, then the for-ofloop is the right choice.


Comparison:-
In the following table, we are comparing for..in loop and for..of loop.

 	
                for..in                     for..of       
Applies to  Enumerable Properties    Iterable Collections

Objects           Yes                         No

Arrays     Yes, but not advised               Yes

Strings    Yes, but not advised               Yes


*/




