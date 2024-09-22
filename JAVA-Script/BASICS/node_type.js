/*Node Type:-
The nodeType property is an integer that identifies what the node is. It differentiate between different kind of nodes from each other, such as 
elements, text and comments. The syntax is:
*/
var type = node.nodeType;



/*  Constant                   Value       Description

Node.ELEMENT_NODE               1          An Element node like <h1> or <p>.

Node.ATTRIBUTE_NODE             2          An Attribute of an Element.

Node.TEXT_NODE                  3          The actual Text inside an Element

Node.COMMENT_NODE               8          A Comment node

Node.DOCUMENT_NODE              9          A Document node.

Node.DOCUMENT_TYPE_NODE         10         A DocumentType(<!DOCTYPE html>) node

Node.DOCUMENT_FRAGMENT_NODE     11         A DocumentFragment node.
*/