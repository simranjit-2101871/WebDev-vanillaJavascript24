//NORMAL FUCNTION SYNTAX
function mul(a, b) {
    return a * b
    }//calling function
    mul(3,3) //returns 9



/**One of the most famous features in modern JavaScript is the arrow function.ES6 arrow functions provide us an alternative way to write a more 
 * concise and shorter syntax compared to the traditional function expression. Here is an syntax of arrow functions:

let myfunc = (arg1, arg2, ...argN) => expression */


// ARROW FUNCTIONS

// Creating a regular function
// const harry = function (){
//     console.log("This is the best person ever")
// }

// Converting it to an arrow function
// const harry = ()=>{
//     console.log("This is the best person ever")
// }
// harry();

// function returning something
// const greet = function(){
//     return "Good Morning";
// }

// One liners do not require braces/return
// one line will automatically return
// const greet = () =>  "Good Morning";

// const greet = () =>  ({name: "harry"});

// Single parameters do not need parenthesis 
// but you will have to put parenthesis if there are multiple paramteres
const greet = name =>  "Good Morning " + name + ending;



console.log(greet('Harry'))


/**Limitations of Arrow Functions:-
An arrow function expression is an alternative to a traditional function expression, but there are some limitations: 

Arrow functions do not have its own bindings to this or super, and should not be used as methods.
It is not suitable for the call, apply and bind methods, which generally rely on establishing a scope.
Arrow functions cannot be used as constructors.
 */