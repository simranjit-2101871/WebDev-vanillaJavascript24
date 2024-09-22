/**It is an object that allows us to traverse over a list or collection. Iterators' purpose is to define the sequences and implement the 
 *iterator protocol that returns an object by using a next() method that contains the value and done. 

done: It is a boolean value indicating whether any more elements in the sequence could be iterated upon.
value: It is the current element of the sequence.
So, we can define iterators as an “object that knows how to access items from a collection one at a time, while keeping track of its 
current position within that sequence.”

Suppose we have an array, and it contains five numbers, i.e., [1,2,3,4,5]. As we know, the Iterator object has a next() method that returns 
the next item in the sequence. So, when we write next(), well get the element of the array. The next() method returns an object with two 
properties: value and done. If there are elements present in the sequence that could be iterated, then the value contains the next element 
and done is set to false:

{ value: 'next value', done: false }

If we call the next() method after the last value has been returned, then the next() returns the result object as follows:

{done: true: value: undefined}

Here the value of the done property, which is true, indicates that there is no more value to return, and the value of the property is set 
to undefined. */

console.log('The file is for iterators');


function fruitsIterator(values) {
    let nextIndex = 0;
    //returning ana object
    return {
        next: function () {
            if (nextIndex < values.length) {
                //ek aur object return hoga

                return {
                    value: values[nextIndex++],
                    done: false
                }

            }
            else {
                return { done: true }
            }
        }
    }
}
const arr = ['apples', 'pranges', 'pineapple', 'grapes'];
console.log(arr);



//using the cosntructor
const fruits=fruitsIterator(arr);
/**console.log(fruiuts.next())
console.log(fruiuts.next())
console.log(fruiuts.next())
console.log(fruiuts.next())
console.log(fruiuts.next())
*/

/**console.log(fruiuts.next())
console.log(fruiuts.next().value)
console.log(fruiuts.next().value)
console.log(fruiuts.next().value)
console.log(fruiuts.next().value)
*/
