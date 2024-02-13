const myLibrary = [];

const btn = document.querySelectorAll('.newBookBtn');

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
};

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, has ${this.pages} pages, and ${this.read}`
};

function addBookToLibrary (newBook) {
    // myLibrary.push(newBook)
    myLibrary.push(hobbit);
    myLibrary.push(EloquentJavaScript);
};

const hobbit = new Book('Hobbit', 'J.R.R. Tolken', 295, 'read');
const EloquentJavaScript = new Book('Eloquent JavaScript', 'Marijn Haverbeke', 450, 'not read');


addBookToLibrary();
console.log(myLibrary)

function showForm () {
    btn.forEach (btn => {
        btn.addEventListener('click', function() {
            const form = document.querySelector('.formContainer');
            form.removeAttribute('id');
        })
    })
};

function getValue (selector) {
    const element = document.querySelector(selector).value;
    return element;
}

function getInput () {
    inputBtn.forEach (inputBtn => {
        inputBtn.addEventListener('click', function(e) {
            let title = getValue('.titleInput')
            let authors = getValue('.authorInput')

            console.log(title)
            console.log(authors)

            console.log(typeof(title))
        })
    })
}


showForm();
getInput();