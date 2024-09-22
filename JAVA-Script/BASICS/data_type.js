//datatype of course tells us about what type of data is going to be stored in the varable ,well unlike c++ we dont have to explicity define it,only wirte the value thats all

// There are two types of types such that two types of data types

    //PRIMITVE
    
    /* BUT first some notes
    undefined means a variable has been declared but has not yet been assigned a value. It is the default value of uninitialized variables.
    var x,var,x=undefined

    null is explicitly assigned by the programmer to indicate that a variable has no value or that an object does not have any value or does not exist.
    var x=null
    */


    // String
let name = "harry";
console.log("My string is " + name);
console.log("Data type is " + (typeof name));

// Numbers
let marks = 34.4;
console.log("Data type is " + (typeof marks));

// Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

// Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

// Undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));




    //REFRENCE DATATYPE
// Arrays
let myarr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + (typeof myarr));

// Object Literals
let stMarks = {
    harry: 89,
    Shubham: 36,
    Rohan: 34
}
console.log( typeof stMarks);

function findName() {
    
}
console.log( typeof findName);

let date = new Date();
console.log( typeof date);