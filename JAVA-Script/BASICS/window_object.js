/*The Window Object:-
The window object represents a window in the browser containing the DOM document. The browser automatically creates a window object. 
The window is not the object of the JavaScript. It is the object of the browser. A window can be the main window, a frameset, or even a new 
window created with JavaScript. The developers use the window object to close and open browser window, displaying alert and prompt dialogs.

Window object has many properties and methods. The following are the few properties and methods of window object.



Properties

Explanation

1.)width   It specifies the initial width of the browser window.

2.)height  It specifies the initial height of the browser window.

3.)innerWidth  It specifies the initial width of the window content area

4.)innerHeight It specifies the initial height of the window content area

5.)outerWidth  It specifies the initial width of the navigator window

6.)outerHeight It specifies the initial height of the navigator window

7.)menubar It specifies whether the window should contain the browser menubar

8.)location    It specifies whether the window should contain the browser location/URL box

9.)scrollbars  It hides or shows browser horizontal/vertical scrollbars

10.)top Specified the number of pixels from the top of the screen to the new window



Window Object Methods:-
The window object methods are the functions that are created inside the Window Object. These methods are used to perform various actions on the browser window, such as how it displays a message or gets input from the user.

Following are the some of the most commonly used window object methods:

Method

Description

1.) alert()

2.) It will display an alert box with a message on the screen

3.) blur()

It will remove focus from the current window

4.) close()

It will close the current window

5.) confirm()

It will display a dialog box with a message on the screen

6.) focus()

It will set the focus to the current window

7.) moveTo()

It will move a window to the specified position

8.) open()

It will open a new browser window

10.) print()

It will print the content of the current window

11.) prompt()

It will display a dialog box that prompts the user for input

12.) resizeBy()

It will resize the window by the specified pixels

13.) resizeTo()

It will resize the window to the specified height and width

14.)scrollBy()

It will scroll the document by the specified number of pixels

15.) scrollTo()

It will scroll the document to the specified coordinates

16.) stop()

It will stop the window from loading
*/


//EXAMPLE
let a = window.innerWidth;
let b = window.innerHeight;
alert("Width: " + a + ", " + "Height: " + b);