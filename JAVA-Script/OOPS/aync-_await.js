console.log("async await walla lecture ,here we wiil aslo learn abit promises")

async function simranjit(){
    const response=await fetch('https://api.github.com/users');
    console.log('before response');
    const users=await response.json();
    console.log("user are resolved");
    return users;
    
}
console.log("Before calling");
let a=simranjit();
//console.log("After callling");
console.log(a);
console.log("After callling");
a.then(data=>console.log(data));
console.log("The end");
