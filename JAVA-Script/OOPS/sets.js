console.log('This is sets');

// Set stores unique values
const mySet = new Set();  // Initialize an empty set
console.log('The set looks like :',mySet);

// Adding values to this set
mySet.add('this');
mySet.add('My name');
mySet.add('this');
mySet.add('that');
mySet.add(34);
mySet.add(true);
mySet.add(false);
mySet.add('that2');
console.log('The set looks like this now:',mySet);


// Use a constructor to initialize the set
let mySet2 = new Set([1, 45, 'this', false, {a:4, b:8}, 'this']);
console.log('New set:',mySet2);



console.log(mySet.size); // Get the size of the set

console.log(mySet.has(346)); // Check whether set has 346 or not

console.log('Before removal', mySet.has('that2'));
mySet.delete('that2'); // Remove an element from the set
console.log('After removal', mySet.has('that2'));
/**what i am unable to understand is that at the first console, the set should be empty but it still shows the values that has been added after it  
 * 
 * 
 * 
 * When you log an object in the console, the console shows a reference to that object. If the object is modified after it is logged, the console 
 * reflects the current state of the object rather than the state at the time the log statement was executed. This behavior is specific to the 
 * console and not related to JavaScript's synchronous or asynchronous behavior.
*/