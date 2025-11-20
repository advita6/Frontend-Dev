class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        this.isIssued = true;
    }

    returnBook() {
        this.isIssued = false;
    }
}

const books = [
    new Book("A", "X", "101"),
    new Book("B", "Y", "102"),
    new Book("C", "Z", "103", true)
];

const available = books.filter(b => !b.isIssued);
console.log(available);

function issueByISBN(isbn) {
    const book = books.find(b => b.isbn === isbn);
    if (book) book.issueBook();
}

