/*
We can access the document content and modified it is called the Document Object Model, or DOM. The Objects are organized in a hierarchy.

The window object is at the top of the hierarchy. The second one is the document object. The HTML document that gets loaded into a window becomes 
a document object. The third one is the forms. Everything enclosed in the <form>...</form> tags sets the form object. And the last one is the Form 
control elements


<div id="main_class ">
<div class="myclass1"></div>
<div class="myclass2"></div>
</div>
Explanation:
In the above example, the

 <div class="myclass1"></div> is a “child” of <div id="main_class"></div> and a sibling to <div class="myclass2"></div>. It is like a family tree. 
 <div id="main_class"></div> is a parent, with its children on the next level, each on their own “branch”
*/

console.log('Welcome to tut 12.js');
let a = document;
a = document.all;
// a = document.body;
// a = document.forms[0];
// Array.from(a).forEach(function(element){
//     console.log(element);
// })
a = document.links[0];
// use document.images and document.scripts and print the list of images and scripts on an html page
console.log(a);

