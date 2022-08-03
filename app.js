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
// select displayed elements
const mainContainer = document.querySelector('.main-container');
const formSection = document.querySelector('.form-section');
const contact = document.querySelector('.contact');
// select nav links

const navigatorLinks = document.querySelectorAll('.nav');

// display functionality
navigatorLinks.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.id === 'list') {
      mainContainer.style.display = 'block';
      formSection.classList.remove('form-sectionActive');
      contact.classList.remove('contactActive');
    } else if (element.id === 'add') {
      mainContainer.style.display = 'none';
      formSection.classList.add('form-sectionActive');
      contact.classList.remove('contactActive');
    } else if (element.id === 'contact') {
      mainContainer.style.display = 'none';
      formSection.classList.remove('form-sectionActive');
      contact.classList.add('contactActive');
    }
  });
});

// const navLinks = document.querySelectorAll('.nav');
// const listBooks = document.querySelector('.main-container');
// const addNewForm = document.querySelector('.form-section');
// const contactPage = document.querySelector('.contact');
// const sections = [listBooks, addNewForm, contactPage];

// navLinks.forEach((link, i) => {
//   link.addEventListener('click', () => {
//     if (i === 0) {
//       sections[0].style.display = 'block';
//       sections[1].style.display = 'none';
//       sections[2].style.display = 'none';
//     } else if (i === 1) {
//       sections[0].style.display = 'none';
//       sections[1].style.display = 'block';
//       sections[2].style.display = 'none';
//     } else if (i === 2) {
//       sections[0].style.display = 'none';
//       sections[1].style.display = 'none';
//       sections[2].style.display = 'block';
//     }
//   });
// });