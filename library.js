let myLibrary = [];

function Book(title, author, publisher, year) {
  this.title = title
  this.author = author
  this.publisher = publisher
  this.year = year
}

Book.prototype.addBookToLibrary = function() {
  myLibrary.push(this);
}

const the1619 = new Book('The 1619 Project: A New Origin Story', 'Nikole Hannah-Jones', 'One World', '2021');
const animalFarm = new Book('Animal Farm: 1984', 'George Orwell', 'Mariner Books', '2003');
const mahjong = new Book('Mahjong: A Chinese Game and the Making of Modern American Culture', 'Annelise Heinz', 'Oxford University Press', '2021');
the1619.addBookToLibrary();
animalFarm.addBookToLibrary();
mahjong.addBookToLibrary();

//create a card for each book object by DOM methods - its content includes book info, read-yet toggle status, and a delete button
const cards = document.querySelector('.display');
Book.prototype.display = function() {
    const card = document.createElement('div');
    card.classList.add('libBook');
    cards.appendChild(card);
    for (let prop in this) {
        const info=document.createElement('p');
        info.classList.add('itemInfo');
        card.appendChild(info);
        let ownProp = this.hasOwnProperty(prop);
        if (ownProp) {
            const label = `${prop}`.charAt(0).toUpperCase() + `${prop}`.slice(1);
            info.textContent = `${label}: ${this[prop]}`; 
        }
    }
    const read = document.createElement('label');
    read.setAttribute('for', 'read');
    read.textContent = 'Read: ';
    card.appendChild(read);
    const status = document.createElement('input');
    status.setAttribute('type', 'checkbox');
    status.setAttribute('id', 'read');
    status.setAttribute('name', 'read_or_not');
    card.appendChild(status);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete';
    card.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => {
      cards.removeChild(card);
      const indexD = myLibrary.findIndex(this);
      myLibrary.splice(indexD, 1);
    })
}

function showLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    myLibrary[i].display();
  }
}

showLibrary();

//use form info to create a book object and display it on the page
function storeNGetFormInfo(event){
  const authorNew = document.querySelector('#author').value;
  const titleNew = document.querySelector('#title').value;
  const yearNew = document.querySelector('#year').value;
  const publisherNew = document.querySelector('#publisher').value;
  const newItem = new Book (authorNew, titleNew, yearNew, publisherNew);
  newItem.display();
  event.preventDefault();
}

const addBook = document.querySelector('form');
addBook.addEventListener('submit', storeNGetFormInfo);

function readChecked () {
  const readStatus = document.getElementById('readOrNot');
  const checkedBox = document.querySelector('.display div:last-child #read');
  if (readStatus.checked == true) {
    checkedBox.checked = true;
  };
}
addBook.addEventListener('submit', readChecked);

const animalFarmStatus = document.querySelector('.display div:nth-child(2) #read');
animalFarmStatus.checked = true;