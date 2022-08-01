const bookContainer = document.querySelector('.books-container');
const booksArr = document.querySelectorAll('.books');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const addBtn = document.querySelector('.add-btn');
const removeBtns = document.querySelectorAll('.btn');
let i = 0

let books = [];
let myLibrary = [];

function showBooks(i) {
  const div = document.createElement('div');
  div.className = 'book';
  div.id = `book${i}`;
  div.innerHTML = `<p>${myLibrary[i].title}</p>
  <p>${myLibrary[i].author}</p>
  <button class="btn">Remove</button>`
  bookContainer.appendChild(div);
}

const getBooksFromStorage = () => {
  let localData = localStorage.getItem('book');
  if (localData) {
    myLibrary = JSON.parse(localData);
  }
}

getBooksFromStorage();

for (i = 0; i < myLibrary.length; i += 1) {
  showBooks(i);
}

function createBook(bookTitle, bookAuthor) {
  let book = {
    title: bookTitle,
    author: bookAuthor
  }
  return book;
};

function add(btitle, bauthor) {
  let b = createBook(btitle, bauthor);
  myLibrary.push(b);
}

// Event listener for add button
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let bookT = title.value;
  let bookA = author.value;
  add(bookT, bookA);
  localStorage.setItem('book', JSON.stringify(myLibrary));
  showBooks(myLibrary.length - 1);
  title.value = '';
  author.value = '';
});

// Store the inputs to Local storage
let inputs = [title, author];
inputs.forEach((input) => {
  input.addEventListener('input', () => {
    let bTitle = title.value;
    let bAuthor = author.value;
    let newBook = {
      title: bTitle,
      author: bAuthor
    }
    localStorage.setItem('newBook', JSON.stringify(newBook));
  })
})

// removeFunction
function removeItem(index){
  removeBtns.forEach(element=>{
    element.addEventListener('click',()=>{
   
    })
  });
}