//making object with object literals

let car={
    name:'ecoSport',
    speed:'100kmh',
    run:function(){
        console.log("car is running");
    }
}
console.log(car);
console.log(car.run);
console.log(car.run());


/*car.run
When you reference car.run without the parentheses, you are referring to the function itself, not calling it. This means car.run will output the 
function definition. For example:

javascript
Copy code
console.log(car.run);
The output will be something like this (the exact format can vary depending on the JavaScript environment):

javascript
Copy code
function () {
    console.log("car is running");
}
This shows that car.run is a function, but it doesn't execute the function.

car.run()
When you use car.run(), you are calling the function. This means the code inside the function will be executed. For example:

javascript
Copy code
car.run();
The output will be:

arduino
Copy code
car is running
This happens because car.run() executes the function, which contains a console.log statement that prints "car is running" to the console. */



//making object with cosnructor
// As we know that the constructor is essentially a function that acts as a blueprint for creating objects. A convention for declaring 
//constructors is always to capitalize its function name. 

function CAR(make,modle,year){
    this.make=make;
    this.modle=modle;
    this.year=year;
}

console.log(CAR);
//let car1=new CAR("Ford");//it can even work with one argument or zero argument ,no error is recieved
let car1=new CAR("ford","9r439ru","2015");

/*"new" keyword:-
To create a new object instance, we use the "new" keyword to create an object based on a constructor. Adding the "new" keyword is a crucial step 
when creating an object from a constructor. The new keyword creates a new empty object. It binds property or function, which is declared with this 
keyword to the new object.  */