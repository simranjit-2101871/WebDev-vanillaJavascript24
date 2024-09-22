//so ab hun baat karenge let .var and cosnt ke barre mai
//they deifne the scoep of variable and there declaration or intialization rules


//So ajj ko vardat ke barre mai hum janege from varaible VAR
var m=2
{
    console.log(m)
}
console.log(m)

    //redelaration is possible and intialization as well
    var f=3
    console.log(f)
    f=4
    console.log(a)

    var f=3
    {
        var f=4
        console.log(f)  
    }
    console.log(f)
    //so here instead the redeclaration is in different scope but since it var has global scopr so iti will cahnge the existing value permamently





//Ab vardat ko solve karne ke liye kuch assumptions ho jaye with the help tog LET

let e=3
 e=4//this re-assigining in the same scope
{
    let e=4//this is no re declaration but a new varaibel is formed in the ohter block scope
    console.log(e)
}
console.log(e)


    //IS REASSIGNING IN DIFFERENT SCOPE POSSIBLE OR NOT LETS SEE
    let b=3//as this let have global as well if not assigned in a block
    {
        b=5
        console.log(b)
    }
    console.log(b)



//Ab har crimininal kuch obvious galtiyan karega we define them using CONST
const a=3;//also has a block scope but can work globally if declare outside any function
//no redeclare and no reassign no in the same as well as different scope






//NOW LETS SEE THE PRECENDNECE ORDER OF VARIABLE EXECUTING
var c=10//
let d=20
console.log(c)
{
    let c=24
    console.log(c)
}
console.log(c)





//SO LAST NOTE OF THE PROGRAMM VARAIBLE DECLARED WITHIN SAME SCOPE WITH SAME IDENTIFIER ,BUT DIFFERENT VRAIABLE TYPE IS AN ERROR