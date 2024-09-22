console.log("Regular expression");
let reg=/malhi/;
reg = /malhi/g;//this is a regular expression literal in js//g means global
//reg=/mahi/i;//imeans case insesitive

console.log(reg);
console.log(reg.source);


let s="This is such a great day with malhi and singh malhi ,MALHI"

//fucntion to match expresion 
let result=reg.exec(s);
console.log(result);

//result=reg.exec(s);
//console.log(result);

//result=reg.exec(s);
//console.log(result);

if(result){
console.log(result.input);//will genearte error if not in if block
console.log(result.index);
}

//2.) Returns true or false
let result2=reg.test(s);
console.log(result2);



//3.) match() if will return an array of results  or null;
//let result3=reg.match(a)-->this is wrong
let result3=s.match(reg); 
console.log(result3);



//4.) returns index of first match or -1
// let result4 = reg.search(s) ---> This is wrong!!
let result4 = s.search(reg) // ---> This is right
// console.log(result4);



//5.) replace() - Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)

let result5 = s.replace(reg, 'SHUBHAM');
console.log(result5); 