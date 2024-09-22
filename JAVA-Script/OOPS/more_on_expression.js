console.log("More on regular expression by simranjit singh malhi")

let regex=/simran/;

//AB META CHRACTERS KI BARI
regex=/^simran/;
regex=/on$/;//str is ending with on is it will match
regex=/s.imran/;//matches any one character
regex=/s*imran/;//matches any 0 or more characters
regex=/sa?imrant?/;//? after character means that character is optional
regex = /s\*imran/;//if we want* as a expression and not a meta character symbol
let str="s*imran is malhi and malhi is simran ,the maze or confusion";


let result=regex.exec(str);
console.log(result);


if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


