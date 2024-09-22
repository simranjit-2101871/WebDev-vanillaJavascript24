console.log("Lets handle the prototype ,inheritencce karen")

//in case if object is created by object literal then it inherits prototype properties by global object
//if it is created by constrcutor then it inherits from its cosntructor that has been created by the user


const proto={
    slogan:function(){
        return `This company does not exist`;
    },
    changeName:function(newName){
        this.name=newName
    }
} 
//this creates harry object 
const harry=Object.create(proto);
harry.name="SIMRANJIT";
harry.role="PROGRAMMER";
harry.changeName("SIMMI");


//this also creates harry object
//POINTER WALLA SYNTAX
const harry1=Object.create(proto,{
    name:{value:"Harry",writable:true},//writable to change the object value like from simranjit to simmi
    role:{value:"programmer"},
})

console.log(harry);
console.log(harry1);

programmer.prototype=object.create(employee.prototype);

//manually set the cosnntructor
programmer.prototype.constructor=programmer;







//ab inheritence ki barri ok

function employee(name,salary,experience){
    this.name=name;
    this.salary=salary;
    this.experience=experience;
}

employee.prototype.slogan=function(){
    return `This is the one the biggest company in the whole world`
}

let rajo= new employee("simran",100000,12);
console.log(rajo.slogan())

//programmer
function programmer(name,salary,experience,language){
    employee.call(this,name,salary,experience);
    this.language=language;
}


let rohan = new programmer()