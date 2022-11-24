// create function so that when the sidebar icon is clicked it will show the full sidebar

//declare constants bar and navbar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closeButton = document.getElementById('closeButton');

//start with if statement if sidebar icon is clicked then function is created to add the active class
// which will then show the sidebar 
if (bar) {
    bar.addEventListener('click', function () {
            nav.classList.add('active');
        })
}

// create identical if statement that will create a function to remove the active class when clicked
if (closeButton) {
    closeButton.addEventListener('click', function () {
            nav.classList.remove('active');
        })
}