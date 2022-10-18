const myLibrary = [
  { name: 'The will to change', author: 'Bell Hooks', pages: 208, read: true },
  { name: 'TCC', author: 'Amigão', pages: 28, read: true },
  { name: 'Fonte', author: 'DATA Claudio  Ulisses', pages: -208, read: true },
];

const table = document.querySelector('#books-table');

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function renderTable() {
  myLibrary.forEach((book, index) => {
    addNewRow(book, index);
  });
}

function addNewRow(book, index) {
  const tr = formatTr(book, index);
  tr.setAttribute('id', index);
  table.appendChild(tr);
}

function formatTr(book, index) {
  const tableRow = document.createElement('tr');
  for (item in book) {
    const td = formatTd(book[item]);
    tableRow.appendChild(td);
  }
  const tdDeletBtn = createDeleteButton(index);

  tableRow.append(tdDeletBtn);

  return tableRow;
}
function formatTd(text) {
  const tableData = document.createElement('td');
  const content = document.createTextNode(text);
  tableData.appendChild(content);

  return tableData;
}

function createDeleteButton(index) {
  const tableData = document.createElement('td');
  const btn = document.createElement('button');
  const btnMsg = document.createTextNode('Delete');
  btn.appendChild(btnMsg);
  btn.setAttribute('class', 'btn-delete');
  btn.setAttribute('data-book-id', index);
  btn.onclick = removeBookById;
  tableData.appendChild(btn);

  return tableData;
}

function removeBookById(e) {
  const bookId = e.target.dataset.bookId;

  myLibrary.splice(bookId, 1);
  removeRows();
  renderTable();
}

function removeRows() {
  while (table.children[1]) {
    table.removeChild(table.lastChild);
  }
}

function checkFields(event) {
  event.preventDefault();
  const bookName = document.querySelector('.book-name-input').value;
  const authorName = document.querySelector('.author-name-input').value;
  const pages = document.querySelector('.book-pages-input').value;
  const read = document.querySelector('.book-read-input').checked;
  if (bookName === '' || authorName === '' || pages === '') {
    return alert('Preenche ai na moralzinha');
  }
  addBookToLibrary(bookName, authorName, pages, read);
}

function clearFields() {
  document.querySelector('.book-name-input').value = '';
  document.querySelector('.author-name-input').value = '';
  document.querySelector('.book-pages-input').value = '';
  document.querySelector('.book-read-input').checked = false;
}

function addBookToLibrary(bookName, authorName, pages, read) {
  const newBook = new Book(bookName, authorName, pages, read);
  console.log('Adcionando novo titulo', newBook);
  myLibrary.push(newBook);
  addNewRow(newBook, myLibrary.length - 1);
  clearFields();
}

renderTable();

const modalBackground = document.querySelector('.modal-background');

function showModal() {
  modalBackground.style.display = 'grid';
}

function closeModal() {
  modalBackground.style.display = 'none';
}

modalBackground.onclick = function (event) {
  if (event.target == modalBackground) {
    closeModal();
  }
};
