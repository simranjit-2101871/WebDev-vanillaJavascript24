/*Single Element Selector:- 
It is used to select single HTML elements within a document. Following are some single element selectors:

Accessing Elements by ID:-
To access the single element in the DOM is by its unique ID. We can get or modify an element by ID with the getElementById() method of the 
document object. It will return null if no elements with the specified ID exists.

An ID should be unique within a page. However, if more than one element with the specified ID exists, the getElementById() method returns the 
first element in the source code.
*/
document.getElementById(elementID);
//In order to be accessed by ID, the HTML element must have an id attribute. We have a h1 element with an ID of demo.

<h1 id="demo">Heading 1</h1>
var x = document.getElementById("demo");
x.style.color = "red";
x.className;
x.childNodes;
x.parentNode;
x.innerText = 'JavaScript Tutorial';
x.innerHTML = '<b>Harry is a good boy</b>';
/*Explanation of above Example:-

className: The className property sets or returns the class name of an element
childNodes: The childNodes property returns a collection of a node's child nodes.
parentNode: The parentNode property returns the parent node of the specified node.
innerText: The innerText property sets or returns the text content of the specified node.
innerHTML: The innerHTML property sets or returns the HTML content of an element.
querySelector;-
It will return the first element that matches the specified CSS selector in the document. The querySelector() method only returns the first 
element that matches the specified selectors.
*/
document.querySelector('#myclass');
document.querySelector('.myclass');
document.querySelector('li');
//The above statement will return the first element that matches the CSS selector #myclass, .myclass and li. We can use all kinds of CSS selectors 
//within the querySelector method.





/*Multiple Element Selector:-
It is used to select multiple HTML elements within a document. There are three ways in which we can select elements in a DOM using multiple 
element selectors.
*/
querySelectorAll()
getElementsByTagName()
getElementsByClassName()


//querySelectorAll:-
/*It will return a list of the document's elements that match the specified group of selectors. The querySelectorAll() method returns all elements in the document as a static NodeList object. The NodeList object represents a collection of nodes. The nodes can be accessed by index numbers. The index starts at 0.
*/
document.querySelectorAll('.heading')
//It will return a list of all elements that matches the specified CSS selector. 

 document.querySelectorAll("p.animation ");
//It will return all <p> elements in the document with class="animation"