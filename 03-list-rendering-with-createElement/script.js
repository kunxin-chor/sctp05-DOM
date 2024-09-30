// create a mock database of books
let catalog = [
    {
        "id": 1,
        "title":"The Lord of the Rings",
        "author":"JRR Tolkien"
    },
    {
        "id": 2,
        "title":"Narina",
        "author":"CS Lewis"
    },
    {
        "id": 3,
        "title":"Mistborn",
        "author":"Brandon Sanderson"
    }
]

// the DOMContentLoaded event happens on the window of the browser
// when all the HTML elements are loaded 
window.addEventListener("DOMContentLoaded", function(){
  
    // due to the DOMContentLoaded event, this function will only execute when the page is ready
    let bookList = document.querySelector('#titles');
    for (let book of catalog) {
      
        // we will create a DOM element
        // creates an empty <li>
        let liElement = document.createElement('li');

        // populate the element
        liElement.innerHTML = `<h2>${book.title}</h2><h3>${book.author}</h3>`;

        bookList.appendChild(liElement);

    }

})