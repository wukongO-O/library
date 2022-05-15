let myLibrary = [];

class Book {
  constructor({title, author, publisher, year}) {
    this.title = title
    this.author = author
    this.publisher = publisher
    this.year = year
  }
  addBookToLibrary() {
    myLibrary.push(this);
  }
  display() {
    const card = document.createElement('div');
    card.classList.add('libBook');
    cards.appendChild(card);
    const div0 = document.createElement('div');
    div0.classList.add('content');
    card.appendChild(div0);
    for (let prop in this) { 
        let ownProp = this.hasOwnProperty(prop);
        if (ownProp) {
          const info = document.createElement('p');
          info.classList.add('itemInfo');
          div0.appendChild(info);  
          const label = `${prop}`.charAt(0).toUpperCase() + `${prop}`.slice(1);
          info.textContent = `${label}: ${this[prop]}`; 
        }
    }
    const read = document.createElement('label');
    const div1 = document.createElement('div');
    card.appendChild(div1);
    div1.classList.add('rstatus');
    read.setAttribute('for', 'read');
    read.textContent = 'Read: ';
    div1.appendChild(read);
    const status = document.createElement('input');
    status.setAttribute('type', 'checkbox');
    status.setAttribute('id', 'read');
    status.setAttribute('name', 'read_or_not');
    div1.appendChild(status);

    const deleteBtn = document.createElement('button');
    const div2 = document.createElement('div');
    div2.classList.add('dltbtn');
    card.appendChild(div2);
    deleteBtn.textContent = 'delete';
    div2.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => {
      cards.removeChild(card);
      const indexD = myLibrary.findIndex(this);
      myLibrary.splice(indexD, 1);
    })
  }
}

let the1619 = new Book({title:'The 1619 Project: A New Origin Story'}, {author: 'Nikole Hannah-Jones'}, {publisher: 'One World'}, {year: '2021'});
let animalFarm = new Book({title:'Animal Farm: 1984'}, {author: 'George Orwell'}, {publisher: 'Mariner Books'}, {year: '2003'});
let mahjong = new Book({title: 'Mahjong: A Chinese Game and the Making of Modern American Culture'}, {author: 'Annelise Heinz'}, {publisher: 'Oxford University Press'}, {year: '2021'});
the1619.addBookToLibrary();
animalFarm.addBookToLibrary();
mahjong.addBookToLibrary();

//use DOM methods to create a card displaying a book object - its content includes book info, read-yet toggle status, and a delete button
const cards = document.querySelector('.display');
 

function showLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    myLibrary[i].display();
  }
}

showLibrary();

//use submitted form info to create another book object and display it on the page
function GetFormInfo(event){
  const authorNew = document.querySelector('#author').value;
  const titleNew = document.querySelector('#title').value;
  const yearNew = document.querySelector('#year').value;
  const publisherNew = document.querySelector('#publisher').value;
  const newItem = new Book (authorNew, titleNew, yearNew, publisherNew);
  newItem.display();
  event.preventDefault();
}

const addBook = document.querySelector('form');
addBook.addEventListener('submit', GetFormInfo);

//update the newly added book's read status
function readChecked () {
  const readStatus = document.getElementById('readOrNot');
  const checkedBox = document.querySelector('.display div:last-child #read');
  if (readStatus.checked == true) {
    checkedBox.checked = true;
  };
}
addBook.addEventListener('submit', readChecked);

const animalFarmStatus = document.querySelector('.display div.libBook:nth-child(2) #read');
animalFarmStatus.checked = true;