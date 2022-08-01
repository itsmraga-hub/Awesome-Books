const bookContainer = document.querySelector('.books-container');
const form = document.querySelector('.form');
const addBtn = document.querySelector('.add-btn');
const removeBtns = document.querySelectorAll('.btn');

const books = [
  {
    title: 'Lorem Ipsum',
    author: 'Lorem Ipsum'
  },
  {
    title: 'Lorem Ipsum',
    author: 'Lorem Ipsum'
  }
]

function displayBook(i) {
  const div = document.createElement('div');
  div.className = 'book';
  div.innerHTML = `<p>${books[i].title}</p>
  <p>${books[i].author}</p>
  <button class="btn">Remove</button>`
  bookContainer.appendChild(div);
};

function createBook(bookTitle, bookAuthor) {
  let book = {
    title: bookTitle,
    author: bookAuthor
  }
  books.push(book); 
};

// Event listener for add button
addBtn.addEventListener('click', () => {
  let bookT = form[0].value;
  let bookA = form[1].value;
  createBook(bookT, bookA);
  for (let i = 0; i < books.length; i += 1) {
    displayBook(i);
  }
});

// Local storage