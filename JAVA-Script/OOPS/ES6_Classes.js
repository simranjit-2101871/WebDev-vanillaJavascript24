console.log("this is Tutorial31.js");

class Employee {
    constructor(givenName, givenExperience, givenDivision) {//this fucntion will enable to assign vlaues to object of calss employee ,no other method or wayis available
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan(){
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear(){
        return 2020 - this.experience;
    }

    static add(a, b){
        return a + b;
    }
}

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language, github){
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }

    favoriteLanguage(){
        if (this.language == 'python'){
            return 'Python';
        }
        else{
            return 'JavaScript';
        }
    }

    static multiply(a, b){
        return a * b;
    }
}

// harry = new Employee("Harry", 56, "Division");
// console.log(harry.joiningYear());
// console.log(Employee.add(34, 5))
let rohan = new Programmer("Rohan", 3, "Lays", "Go", "Rohan420")
console.log(rohan)
console.log(rohan.favoriteLanguage())
console.log(Programmer.multiply(5, 7));


/*Extending a Class:-
The most useful feature of constructor functions and classes is that they can be extended into new object blueprints based on the parent. Before 
es6, the new constructor functions can be created from the parent using the call() method. However, with the help of ES6 classes, the super keyword
is used in place of the call to access the parent functions. We will use the extends keyword to refer to the parent class.




In JavaScript, the Employee class itself is not a constructor. Instead, the Employee class contains a special method called constructor, which is 
used to initialize objects created from the class.

When you create a new instance of the Employee class using the new keyword, the constructor method is automatically invoked to set up the initial 
state of the object.

Here's a recap to clarify the distinction:

Employee Class
Class Definition: The Employee class is a blueprint for creating Employee objects.
Contains Methods: The class can contain methods (functions) to define behaviors for the objects.
constructor Method
Special Method: The constructor is a special method within the class that gets called when an instance of the class is created.
Initializes Objects: It sets the initial values for the properties of the new object.
*/


