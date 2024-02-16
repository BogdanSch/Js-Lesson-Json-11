const loadBooksButton = document.querySelector("#loadBooksButton");
const booksContainer = document.querySelector(".books__list");

loadBooksButton.addEventListener("click", loadBooks);

function loadBooks() {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "./data/books.json", true);
  xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState != 4) return;
    if (xhttp.status != 200) {
      alert(xhttp.status + ": " + xhr.statusText);
    } else {
      let books = JSON.parse(xhttp.responseText);
      createBooks(books);
    }
  };
}

function createBooks(books) {
  let str = "";
  for (let i = 0; i < books.length; i++) {
    str += `<div class="books__list-item card">`;
    str += `<div class="image"><img src="${books[i].imageCover}" /></div><div class="card-body">`;
    str += `<h2>${books[i].name}</h2>`;
    str += `<p>${books[i].author}</p>`;
    str += `<span>${books[i].price}</span>`;
    str += `</div></div>`;
  }
  booksContainer.innerHTML = str;
}
