/*Traversing downwards:-
There are two methods to traverse downwards, the first one is querySelector and the second one is children. 

querySelector or querySelectorAll:-
To traverse downwards from a specific element, we can use querySelector( ) or querySelectorAll( ). The querySelector() returns the first element 
within the document that matches the specified selector whereas the querySelectorAll() returns the NodeList representing a list of the document's 
elements that match the specified group of selectors.
*/
<div class="add">
<h2 class="add__title">title</h2>
</div>
const component = document.querySelector('.add')
console.log(component)


//children:-
/*The property that lets you select direct descendants is called children . It selects elements that are immediately nested in another element. 
The children returns a HTML Collection that updates when children elements are changed.
*/
const items= document.querySelector('.myclass')
const l_Items = items.children
console.log(l_Items)
//To return the first and last child of a node, use the firstChild and lastChild property. The node can be of any node type, including text node, 
//comment node, and element node. Similarly, firstElementChild and lastElementChild return the first and last child Element node, and the childNodes
//returns a live NodeList of all child nodes of any node type of a specified node



//Selecting a specific child:-
//While traversing the DOM, we can select the nth-item in the list from both NodeLists and HTML Collections. For this, we use the index of the 
//element. Similarly, we do in the case of the array to select a specific element.

const mylist = document.querySelectorAll('li')
const firstItem = mylist[0]
const secondItem = mylist[1]
console.log(firstItem)
console.log(secondItem)





//Traversing upwards:-
//There is one method to traverse upwards: parentElement

//parentElement:-
//The property that let us select the parent element is known as parentElement. The parentElement returns null if the parent node is not an element node. Following is the example
const mylist1 = document.querySelectorAll('li')
const firstItem1 = mylist[0]
const secondItem1 = mylist[1]
console.log(firstItem.parentElement)
console.log(secondItem.parentElement)







//Traversing sideways:-
//There are two methods to traverse sideways. One of them is nextElementSibling, and the other one is previousElementSibling.

//nextElementSibling:-
/*To select the next element, we use the nextElementSibling. The difference between this property and nextSibling is that nextSibling returns 
the next sibling node as an element node, a text node or a comment node, while nextElementSibling returns the next sibling node as an element 
node and ignores the text and comment nodes.
*/
const item1 = document.querySelector('li')
const item2 = item1.nextElementSibling
console.log(item2)

//previousElementSibling:-
/*To select the previous element, we use previousElementSibling. The difference between this property and previousSibling, is that previousSibling
 returns the previous sibling node as an element node, a text node or a comment node, while previousElementSibling returns the previous sibling 
 node as an element node and ignores the text and comment nodes.
*/
const item5 = document.querySelectorAll('li')[1]
const item6 = item5.previousElementSibling
console.log(item6)