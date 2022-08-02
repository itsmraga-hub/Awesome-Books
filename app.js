const bookContainer = document.querySelector('.books-container');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const addBtn = document.querySelector('.add-btn');

let myLibrary = [];
const books = [];

function showBooks(b) {
  const div = document.createElement('div');
  div.className = 'book';
  div.innerHTML += `<p>${b.title}</p>
  <p>${b.author}</p>
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

// for (i = 0; i < myLibrary.length; i += 1) {
//   showBooks(i);
// }

function createBook(bookTitle, bookAuthor) {
  const book = {
    title: bookTitle,
    author: bookAuthor,
  };
  return book;
}

// function add(btitle, bauthor) {
//   const b = createBook(btitle, bauthor);
//   myLibrary.push(b);
// }

// Event listener for add button
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const bookT = title.value;
  const bookA = author.value;
  const b = createBook(bookT, bookA);
  books.push(b);
  showBooks(b);
  setTimeout(window.location.reload(), 2000);
  localStorage.setItem('book', JSON.stringify(books));
  title.value = '';
  author.value = '';
});

getBooksFromStorage();

// Store the inputs to Local storage
// const inputs = [title, author];
// inputs.forEach((input) => {
//   input.addEventListener('input', () => {
//     const bTitle = title.value;
//     const bAuthor = author.value;
//     const newBook = {
//       title: bTitle,
//       author: bAuthor,
//     };
//     localStorage.setItem('newBook', JSON.stringify(newBook));
//   });
// });

const removeBtns = document.querySelectorAll('.btnRemove');
removeBtns.forEach((removeBtn, i) => {
  removeBtn.addEventListener('click', () => {
    books.splice(i, 1);
    localStorage.setItem('book', JSON.stringify(books));
    setTimeout(window.location.reload(), 2000);
  });
});
