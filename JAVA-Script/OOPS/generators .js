/* A generator is a special kind of function that was introduced in ES6. In JavaScript, once we execute a function, it has to be executed entirely.
But, generator functions enable us to create functions that another code can enter multiple times. Nothing from outside of the generator function 
can make it pause. Generator function pauses itself when it runs into a yield expression. Once the execution reaches the yield expression, the 
generator cannot continue execution on its own. Something from outside has to continue its execution.

Another important difference between generators and normal functions is that generator functions can produce multiple values during its execution. 
Hence, they can generate a sequence of values, not all at once, but on a per request basis. At every request, the generator function gives us a 
value until it reaches the end of its execution. Once that happens, the done flag will be set to true. Here is the syntax of defining the generator 
function


Yield:-
The yield keyword pauses the generator function execution, and the value of the expression following the yield keyword is returned to the generator's 
caller. It acts as a generator-based version of the return keyword. In the following example, to pause the generator's execution, and we use the 
statement yield.:

next() method:-
A generator gives us the next() method, which is used to resume the execution. This method returns an object with two properties. These are value 
and done:
*/
console.log("kuchi puchi genrators");
//generators in javascript 1-18

function * numberGen(){
    let i = 0;
    /**yield 1;
    yield 2;
    yield 3;
    yield 4;
    */
    //another way
    while (true) {
        yield i++;
    }
}
const gen = numberGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());