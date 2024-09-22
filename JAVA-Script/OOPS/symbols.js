/**What is the symbol?
A symbol is a primitive which cannot be recreated. It was introduced in ECMAScript 2015. It is a very peculiar data type. Once we create a symbol, 
its value is kept private and for internal use. All that remains after the creation of the symbol is the symbol reference. We can create a symbol 
by calling the Symbol() global factory function:

const mySymbol = Symbol() 

When there are inheritance hierarchies in JavaScript, we have two kinds of properties. First one is created via classes, and the second is a 
purely prototypal approach:

Public properties: They are seen by clients of the code.
Private properties: They are used internally within the pieces that make up the inheritance hierarchy such as classes, objects.*/


//READ ABOUT SYMBOLS BECAUSE THEY SEAMS USLESS
console.log("ab padho symbols of javscript")

// Symbols
const sym1 =  Symbol('My identifier');
const sym2 =  Symbol('My identifier');
// console.log('Symbol is ', sym1);
// console.log('Type of Symbol is ', typeof sym1);
console.log(sym1 === sym2);

const a = "this is";
const b = "this is";

console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);

const k1 = Symbol('identifier for k1');
const k2 = Symbol('for k2');

myObj = {};
myObj[k1] = "Harry";
myObj[k2] = "Rohan";
myObj["name"] = "Good boy"
myObj[4] = "Good int"


console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2); // !! ALERT !!: cannot do this to get Rohan because it is same as myObj["k2"]


// Symbols are ignored in for in loop
for(key in myObj){
    console.log(key, myObj[key])
}

console.log(JSON.stringify(myObj));





