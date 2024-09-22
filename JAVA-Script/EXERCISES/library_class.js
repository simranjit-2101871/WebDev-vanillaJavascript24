
class library {
    constructor(booklist) {
        this.booklist = booklist;
        this.issuedbook = {};
    }

    getbooklist() {
        this.booklist.forEach(element => {
            console.log(element);
        });
    }

    issuebook(bookname, user) {
        if (this.issuedbook[bookname] === undefined) {
            this.issuedbook[bookname] = user;
        } else {
            console.log("This book has already been issued");
        }
    }

    returnbook(bookname) {
        delete this.issuedbook[bookname];
    }
}
