/*In synchronous programming, one thing happens at a time. When we call a function that performs a long-running action, it returns a result when 
the action has finished. This stops the program for the time the action takes. In contrast, asynchronous programming allows multiple things to 
happen at the same time. When we start an action, the program continues to run. When the action finishes, the program is informed and gets the 
result.

Let's compare synchronous and asynchronous programming using an example: a program that fetches two resources from the network and then combines 
results.

could be performed using promises and asynchronus functions ,setTimeout,setInterval fetch ,aysnc/await
*/
console.log("This is tutorial 34");

setTimeout(() => {
    for (let index = 0; index < 10; index++) {
        const element = index;
        console.log("This is index number" + index);
        
    }
}, 100);



console.log('done printing');
