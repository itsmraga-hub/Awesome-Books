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

function createBook(bookTitle, bookAuthor) {
  const book = {
    title: bookTitle,
    author: bookAuthor,
  };
  return book;
}

function add() {
  const bookT = title.value;
  const bookA = author.value;
  const b = createBook(bookT, bookA);
  books.push(b);
  showBooks(b);
  setTimeout(window.location.reload(), 2000);
  localStorage.setItem('book', JSON.stringify(books));
  title.value = '';
  author.value = '';
}

// Event listener for add button
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  add();
});

getBooksFromStorage();

function remove(books, i) {
  books.splice(i, 1);
  localStorage.setItem('book', JSON.stringify(books));
  setTimeout(window.location.reload(), 2000);
}

const removeBtns = document.querySelectorAll('.btnRemove');
removeBtns.forEach((removeBtn, i) => {
  removeBtn.addEventListener('click', () => {
    remove(books, i);
  });
});
