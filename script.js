const button = document.getElementById('addbook');
const overlay = document.getElementById('overlay');
const closeButton = document.querySelector('.close');
const form = document.getElementById('myForm');
const gridContainer = document.getElementById('gridContainer');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');

button.addEventListener('click', function () {
    overlay.style.display = 'block';
});

closeButton.addEventListener('click', function () {
    overlay.style.display = 'none';
});


form.addEventListener('submit', function (event) {
    event.preventDefault();
    book();
    createGrid();
});


let myLibrary = [];

function book() {
    const newBook = {
        title: titleInput.value,
        author: authorInput.value,
        pages: pagesInput.value,
    };

    myLibrary.push(newBook);
    console.log(myLibrary);
}

function createGrid() {
    const gridItem0 = document.createElement('div');
    gridItem0.className = "item-container";

    const gridItem = document.createElement('h');
    gridItem.className = 'grid-item';
    gridItem.textContent = '"' + myLibrary[myLibrary.length - 1].title + '"';

    const griditem2 = document.createElement('h');
    griditem2.className = 'gird-item';
    griditem2.textContent = myLibrary[myLibrary.length - 1].author;

    const gridItem3 = document.createElement("h");
    gridItem3.className = 'grid-item';
    gridItem3.textContent = myLibrary[myLibrary.length - 1].pages + ' Pages';


    gridContainer.appendChild(gridItem0)
    gridItem0.appendChild(gridItem);
    gridItem0.appendChild(griditem2);
    gridItem0.appendChild(gridItem3);

    overlay.style.display = 'none';

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';

    const gridItemButton = document.createElement('button');
    gridItemButton.className = 'read-btn';
    updateButtonText(gridItemButton); // Set initial button text based on checkbox state
    gridItemButton.addEventListener('click', function () {
        const checkbox = document.getElementById('read');
        checkbox.checked = !checkbox.checked;
        updateButtonText(gridItemButton); // Update button text based on new checkbox state
    });

    gridItem0.appendChild(gridItemButton);


    const removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
        gridItem0.remove();
    });

    gridItem0.appendChild(removeButton);
};

function updateButtonText(button) {
    const checkbox = document.getElementById('read');
    if (checkbox.checked) {
        button.textContent = 'Read';
        button.style.backgroundColor = 'lightgreen';
    } else {
        button.textContent = 'Unread';
        button.style.backgroundColor = '#FFCCCB';
    }
}