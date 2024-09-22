let str="python";
let links=document.links;
console.log(links);
let href;
Array.from(links).forEach(function(element){
    href=element.href;
    if(href.includes(str)){
        console.log(href);
    }
})

//why not use == operator instead of includes ,this is why
/*Potential Issue
The href attribute of a link usually contains a URL, and it's unlikely to exactly match the string "python". Therefore, this condition 
(href == str) will almost always be false unless there's an anchor link like <a href="python">.
*/

/*The provided code is not using a traditional loop like a for or while loop where you explicitly specify a termination condition. Instead, it's 
using the forEach method on an array, which inherently iterates over each element of the array and stops automatically once it reaches the end of 
the array. */