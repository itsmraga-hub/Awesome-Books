const bookContainer = document.querySelector('.books-container');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const addBtn = document.querySelector('.add-btn');

let myLibrary = [];
const books = [];

function showBooks(b) {
  const div = document.createElement('div');
  div.className = 'book';
  div.innerHTML += `<p>"${b.title}" by ${b.author}</p>
  <button class="btnRemove">Remove</button>`;
  bookContainer.appendChild(div);
}

// Refactor using classes
class Book {
  constructor(bookTitle, bookAuthor) {
    this.title = bookTitle;
    this.author = bookAuthor;
  }

  SetBook() {
    books.push(this);
    showBooks(this);
    setTimeout(window.location.reload(), 2000);
    localStorage.setItem('book', JSON.stringify(books));
    title.value = '';
    author.value = '';
  }

  // eslint-disable-next-line class-methods-use-this
  removeBook(books, index) {
    books.splice(index, 1);
    localStorage.setItem('book', JSON.stringify(books));
    setTimeout(window.location.reload(), 2000);
  }
}

// Function to get and load books from storage
const getBooksFromStorage = () => {
  const localData = localStorage.getItem('book');
  myLibrary = JSON.parse(localData);
  if (myLibrary) {
    myLibrary.forEach((book) => {
      showBooks(book);
      books.push(book);
    });
  }
};

// Event listener for add button
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const bk = new Book(title.value, author.value);
  bk.SetBook();
});

getBooksFromStorage();

const removeBtns = document.querySelectorAll('.btnRemove');
removeBtns.forEach((removeBtn, i) => {
  removeBtn.addEventListener('click', () => {
    const bk = new Book();
    bk.removeBook(books, i);
  });
});

// Get date and print it to browser window
const date = document.querySelector('.date');
const time = new Date();
date.innerHTML = time;

// Get list items and containers to display at separate times
