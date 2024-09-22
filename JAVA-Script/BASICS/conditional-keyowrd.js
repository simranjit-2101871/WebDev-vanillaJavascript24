//AB HAR KAM KARNE KI KOI CONDITION TOH HOTI HI HAI SO LETS DISCUSS ABOUT THAHT CONDTIONS 
/*When the condition is true, specific action is performed, and if the condition is false, another action will perform. In JavaScript, we have 
the if, if-else, else if and switch statement.
We express a condition for if statements using relational operators. The relational operators allow us to compare two values to see whether they
are equal, unequal, greater than, or less.

1.)a == b  a is equal to b  

2.) a != b  a is not equal to b

3.) a < b   a is less than b 

4.) a> b    a is greater than b 

5.) a <= b  a is less than or equal to b  

6.) a >= b  a is greater than or equal to b

7.) a===b   a has the same value and same type as b
*/

//IF condition
if( 5 > 0){
    console.log("5 is greater than 0");
    }
    if( 5 < 0){
    console.log("5 is less than 0");
    }


//ELSE condiiton
let salary = 500;
if( salary > 1000)
{
console.log("My Salary is greater than 1000");
}else{
console.log("My Salary is less than or equal to 1000");
}

//ELSE if
var salary1 = 500;
if( salary1 > 1000)
{
console.log("My Salary is greater than 1000");
}
else if(salary1 < 1000){
console.log("My Salary is less than 1000");
} else{
console.log("My Salary equal to 1000");
}



//SHORTCUT FOR else condition

/*JavaScript provides a ternary operator that can be used as a shorthand of the if-else statement. Following is the syntax of the ternary 
operator.

Condition? expression1: expression2
If the condition evaluates to be true, the operator returns the value of the expression1. And if the condition evaluates to be false, it returns \
the value of the expression2.
*/
5>0? "Greater" : "Smaller";





//SWITCH CASES
switch (age) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("You are unknown age");
        break;
}  