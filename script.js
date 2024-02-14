const myLibrary = [];
let newBook = [];


const btn = document.querySelectorAll('.newBookBtn');

const closeBtn = document.querySelectorAll('.closeForm');

const inputTitle = document.querySelector('.titleInput');
const inputAuthor = document.querySelector('.authorInput');
const inputPages = document.querySelector('.pagesInput');
const readInput = document.querySelector('.readInput');
const inputBtn = document.querySelectorAll('.submitInput')


function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, has ${this.pages} pages.`
}

function showForm () {
    btn.forEach (btn => {
        btn.addEventListener('click', function() {
            const form = document.querySelector('.formContainer');
            form.removeAttribute('id');
        })
    })
}

function closeForm () {
    closeBtn.forEach (closeBtn => {
        closeBtn.addEventListener('click', function() {
            const form = document.querySelector('.formContainer');
            form.setAttribute('id', 'hidden');
        })
    })
}

function getValue (selector) {
    const element = document.querySelector(selector).value;
    return element;
}

function getInput () {
    inputBtn.forEach (inputBtn => {
        inputBtn.addEventListener('click', function(e) {
            let title = getValue('.titleInput')
            let authors = getValue('.authorInput')
            let pages = getValue('.pagesInput')

            let newBook = new Book(title, authors, pages)

            myLibrary.push(newBook);

            displayBooks();
        })
    })
}

function addBookToLibrary () {
    const book = new Book(title, authors, pages)
    myLibrary.push(book)
};

function displayBooks() {
    const displayContainer = document.querySelector('.bookView');
    displayContainer.innerHTML = '';

    myLibrary.forEach((Book, index) => {
        const form = document.querySelector('.formContainer');
        const bookElement = document.createElement('div');
        bookElement.classList.add('book')
        bookElement.innerHTML = `
        <p class = "bookInfo">Title: ${Book.title}</p>
        <p class = "bookInfo">Author: ${Book.author}</p>
        <p class = "bookInfo">Pages: ${Book.pages}</p>
        <button  class = "readBtn" onclick="toggleReadStatus(${index})">${Book.read}</button>
        <button class = "removeBtn" onclick="removeBook(${index})">Remove</button>
        `;
        form.setAttribute('id', 'hidden');
        displayContainer.appendChild(bookElement);
    })
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleReadStatus(index) {
    const book = myLibrary[index];
    book.read = (book.read === 'read') ? 'Not Read' : 'Read';
    displayBooks();
}

showForm();
closeForm();
getInput();
displayBooks();
