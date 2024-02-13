const myLibrary = [];
const btn = document.querySelectorAll('.button');




function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
};

Book.prototype.info = function () {
    return `The ${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
};

function addBookToLibrary (newBook) {
    myLibrary.push(hobbit);
    myLibrary.push(EloquentJavaScript);
    myLibrary.push(newBook);
};

const hobbit = new Book('hobbit', 'J.R.R Tolken', 295, 'not read');

const EloquentJavaScript = new Book('Eloquent JavaScript', 'Marijn Haverbeke', 450, 'not read');

console.log(hobbit.info())
console.log(EloquentJavaScript.info());

// addBookToLibrary();

console.log(myLibrary)


for(let i = 0; i < myLibrary.length; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('book');
    newDiv.textContent = title + ' ' + auth + ' ' + pages;
    bookView.append(newDiv)
}


function addBook () {
    btn.forEach (btn => {
        btn.addEventListener('click', function () {
            const button = addBookToLibrary(hobbit);
            return button;
            console.log('here')
        })
    })
}

// addBook();
addBookToLibrary(hobbit);