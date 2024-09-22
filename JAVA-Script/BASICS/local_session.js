/*Web applications can store data locally within the user's browser with web storage. Before HTML5, application data stored in cookies, included 
in every server request. But with the Advent of Html5, we have got various options to store information on the client browser. Previously we were 
having only cookies, which were very restrictive, and the size of the cookies was very small. But now the web storage is more secure, and large 
amounts of data can be stored locally, without affecting website performance.


HTML Web Storage Objects:-
HTML web storage provides us with two objects for storing data:

window.localStorage – It stores the data with no expiration date
window.sessionStorage -It stores the data for one session. That means the data is lost when the browser tab is closed.

LocalStorage:-
The way to store data on the client's computer is by local storage. The local storage allows us to save the key/value pairs in a web browser, and 
it stores data with no expiration date. We can access local storage via JavaScript and HTML5. However, the user can clear the browser data to 
erase all localStorage data.

Session storage:-
The session storage is used to store data only for a session, meaning that it is stored until the browser (or tab) is closed. Remember that, in session storage, the data is never transferred to the server and can only be read on the client-side. The storage limit is between 5-10MB. By opening multiple windows or tabs with the same URL creates sessionStorage for each tab or window.


Both storage objects provide the same methods and properties like setItem, getItem, removeItem, and clear. The examples in this tutorial are for localStorage, but the same syntax works for sessionStorage.

Creating Entries:- We can create the key/value pair entries with localStorage.setItem, providing a key and a value. 

Reading Entries:- We can read entries with localStorage.getItem. 

Updating Entries:- We can update an entry just as we create a new one with setItem, but with a key that already exists

Deleting Entries:- We can delete an entry with the removeItem method. 

Clearing Everything:- We can clear everything that's stored in localStorage.

Storing JSON Objects:- Only strings can be stored with localStorage or sessionStorage, but we can use JSON.stringify to store more complex objects 
and JSON.parse to read them*/

// Create item:
let myObj = { name: 'Harry', language: 'JavaScript' };
localStorage.setItem(key, JSON.stringify(myObj));
// Read item:
let item = JSON.parse(localStorage.getItem(key));



//example CODE
console.log('This is tut 20');
let impArray = ['adrak', 'pyaz', 'bhindi'];

// // Add a key-value pair inside local Storage
// localStorage.setItem('Name', 'SAM');
// localStorage.setItem('Name2', 'Rohan');
// localStorage.setItem('Sabzi', JSON.stringify(impArray));

// Clears the entire local storage
// localStorage.clear();

// Clear a particular key-value pair
// localStorage.removeItem('Name2');



