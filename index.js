const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();

    this.info = function() {
        const readStatus = this.read ? "already read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    };
}

function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
}

function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Published:</strong> ${book.pages}</p>
        <p><small>ID: ${book.id}</small></p>
        `;
        bookList.appendChild(card);
    });
}


addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 1960);
addBookToLibrary("1984", "George Orwell", 1949);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 1925);



// Display them
displayBooks();