/**Methods and Properties of Maps:-
size: It returns the number of elements or the key-value pairs in the map.



set(): This method adds the key and value to the Map Object. Here is the syntax:

mymap1.set(x, y);
"x" is the key of the element to be added to the Map and "y" is the value of the element to be added to the Map. It returns a Map object



has(): This method returns a boolean value depending on whether the specified key is present or not. Here is the syntax:

mymap1.has(x);
Here "x" is the key of the element to checked. It will return true if the element with the specified key is present or else returns false. 



get(): This method returns the value of the corresponding key. Here is the syntax:

map1.get(x);
Here "x" is the key, whose value is to be returned. It will return the value associated with the key if it is present in Map, otherwise returns 
undefined



delete(): This method deletes both the key as well as a value from the map. Here is the syntax:

map1.delete(k);
Here "k" is the key which is to be deleted from the map. It will return true if the value is found and deleted from the map; otherwise, it returns 
false



clear(): This method will remove all the elements from the Map object. Here is the syntax:

map1.clear();
It requires no parameters and return undefined. */






console.log("This is maps");

// Maps in JavaScript: We can use any type of key or value
const myMap = new Map();

const key1 = 'myStr', key2 = {}, key3 = function () { };

// Setting map values
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blank obj');
myMap.set(key3, 'This is an empty function');
console.log(myMap);

// Getting the values from a Map 
let value1 = myMap.get(key3);
console.log(value1);

// Get the size of the map
console.log(myMap.size);

// You can loop using for..of to get keys and values
for (let [key, value] of myMap) {
    console.log(key, value);
}

// Get only keys
for (let key of myMap.keys()) {
    console.log('key is ', key);
}
// Get only values
for (let value of myMap.values()) {
    console.log('value is ', value);
}

// You can loop through a map using for each loop
myMap.forEach((value, key)=>{
    console.log('Key is ', key);
    console.log('Value is ', value);
})

// Converting map to an array
let myArray = Array.from(myMap);
console.log('Map to array is ', myArray);

// Converting map keys to an array
let myKeysArray = Array.from(myMap.keys());
console.log('Map to keys array is ', myKeysArray);

// Converting map values to an array
let myValuesArray = Array.from(myMap.values());
console.log('Map to values array is ', myValuesArray);







/** 
The statement "JavaScript did not have a data structure for dictionaries" needs some clarification. Prior to ES6, JavaScript did have a way to handle key-value pairs using plain objects. However, plain objects had some limitations when used as dictionaries. Here’s a more detailed explanation:

Plain Objects as Dictionaries: Before ES6, JavaScript developers used plain objects ({}) to store key-value pairs. While this worked for many purposes, 

it had some drawbacks:
1.) Keys were limited to strings (or symbols in ES6).
2.) Objects inherited properties from their prototypes, which could lead to unexpected behaviors if the prototype properties conflicted with the keys 
    used.
3.) There was no built-in mechanism to iterate over key-value pairs in insertion order.

Limitations and Workarounds: Developers had to use workarounds to overcome these limitations, such as using Object.create(null) to create objects 
without a prototype.

Introduction of Maps in ES6: ES6 introduced the Map object, which provided a more robust and flexible way to handle dictionaries:
1.) Keys can be of any data type, not just strings or symbols.
2.) Maps maintain the order of key-value pairs based on their insertion order.
3.) Maps have built-in methods to handle key-value pairs more efficiently, such as get(), set(), has(), delete(), and clear().

Advantages of Maps: Using Map objects over plain objects offers several benefits:
1.) No prototype interference: Maps do not have default keys coming from the prototype chain.
2.) Better performance for frequent additions and deletions of key-value pairs.
3.) Enhanced iteration capabilities, as Maps maintain the order of entries and provide methods like keys(), values(), entries(), and forEach() for convenient iteration.*/






/** Parameter:

iterable - It is any iterable object whose values are stored as key, value pair. Providing parameters is optional. If the parameter is not 
specified, then a new map is created Empty.

Returns: A new Map object

 what does this mean


This explanation is describing the behavior of the Map constructor in JavaScript, which can take an iterable object as an optional parameter. Here’s a detailed breakdown of what it means:

Explanation
Parameter: iterable

The iterable parameter refers to any object that can be iterated over (e.g., arrays, sets, etc.). When used with the Map constructor, the iterable should contain elements that are themselves key-value pairs (typically represented as two-element arrays).
Behavior with Iterable

When you pass an iterable to the Map constructor, it will use the elements of this iterable to initialize the Map. Each element of the iterable should be a key-value pair that the Map will store.
Optional Parameter

Providing the iterable parameter is optional. If you don't provide it, the Map constructor will create an empty Map.
Returns: A new Map object

The Map constructor returns a new Map object, which will contain the key-value pairs from the iterable (if provided) or will be empty (if no parameter is provided).
Examples
Creating a Map with an Iterable:

javascript
Copy code
// Creating a Map from an array of key-value pairs
const iterable = [['name', 'John'], ['age', 30], ['city', 'New York']];
const map = new Map(iterable);

console.log(map.get('name')); // Output: John
console.log(map.get('age')); // Output: 30
console.log(map.get('city')); // Output: New York
In this example, the iterable is an array of arrays, where each inner array represents a key-value pair.

Creating an Empty Map:

javascript
Copy code
// Creating an empty Map
const emptyMap = new Map();

console.log(emptyMap.size); // Output: 0
In this example, no parameter is provided, so the Map constructor creates an empty Map.
*/