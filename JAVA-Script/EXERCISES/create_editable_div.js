console.log("This would be done completely using the javascript and no the html");

let divElem=document.createElement('div');
let text=document.createTextNode('This is my element,click to edit');
divElem.appendChild(text) ;
divElem.setAttribute('id','elem');
divElem.setAttribute('style','border:2px solid black ; width:154px ; margin:34px: padding:23px;');

let container=document.querySelector('.container');
let first=document.getElementById('myfirst');


//INSERTINF THE ELEMENT BEFORE ELEMENT WITH ID FIRST
//divElem.appendChild()
container.insertBefore(divElem,first);

console.log(divElem , container , first);

//add event listner to the divElem
divElem.addEventListener('click', function() {
    let noTextArea = document.getElementsByClassName('textarea').length;
    if (noTextArea == 0) {
        let html = divElem.innerHTML;  // Ensure 'html' contains the current content of 'divElem'
        divElem.innerHTML = `<textarea class="form-control textarea" id="textarea" rows="3">${html}</textarea>`;
    }
    // Listen for the blur event, like saving the text written
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        divElem.innerHTML = textarea.value;
    })

})
