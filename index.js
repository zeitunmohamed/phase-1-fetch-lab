function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')  // make sure this is an absolute URL
        .then(response => response.json())
        .then(data => renderBooks(data)); // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
