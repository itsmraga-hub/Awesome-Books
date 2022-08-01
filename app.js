const bookContainer = document.querySelector('.books-container');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const addBtn = document.querySelector('.add-btn');
let i = 0;

// const books = [];
let myLibrary = [];

function showBooks(i) {
  const div = document.createElement('div');
  div.className = 'book';
  div.innerHTML = `<p>${myLibrary[i].title}</p>
  <p>${myLibrary[i].author}</p>
  <button class="btn" data-id=${i} data-remove>Remove</button>`;
  bookContainer.appendChild(div);
}

const getBooksFromStorage = () => {
  const localData = localStorage.getItem('book');
  if (localData) {
    myLibrary = JSON.parse(localData);
  }
};

getBooksFromStorage();

for (i = 0; i < myLibrary.length; i += 1) {
  showBooks(i);
}

function createBook(bookTitle, bookAuthor) {
  const book = {
    title: bookTitle,
    author: bookAuthor,
  };
  return book;
}

function add(btitle, bauthor) {
  const b = createBook(btitle, bauthor);
  myLibrary.push(b);
}

// Event listener for add button
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const bookT = title.value;
  const bookA = author.value;
  add(bookT, bookA);
  localStorage.setItem('book', JSON.stringify(myLibrary));
  showBooks(myLibrary.length - 1);
  title.value = '';
  author.value = '';
});

// Store the inputs to Local storage
const inputs = [title, author];
inputs.forEach((input) => {
  input.addEventListener('input', () => {
    const bTitle = title.value;
    const bAuthor = author.value;
    const newBook = {
      title: bTitle,
      author: bAuthor,
    };
    localStorage.setItem('newBook', JSON.stringify(newBook));
  });
});

const removeBtns = document.querySelectorAll('[data-remove]');
removeBtns.forEach((removeBtn, i) => {
  removeBtn.addEventListener('click', () => {
    // const id = removeBtn.getAttribute('data-id');
    // console.log(id);
    myLibrary.splice(i, 1);
    removeBtn.parentElement.remove();
    localStorage.setItem('book', JSON.stringify(myLibrary));
  });
});
