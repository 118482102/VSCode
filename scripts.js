// Javascript code comes from https://www.youtube.com/watch?v=P8YuWEkTeuE&list=PL9bD98LkBR7P8MYh0RzNSHgeVNTA8g0nB

// create function so that when the sidebar icon is clicked it will show the full sidebar

//declare constants bar, navbar, closeButton 

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closeButton = document.getElementById('closeButton');

//start with if statement if sidebar icon is clicked then function is created to add the active class
// which will then show the sidebar 
// .classlist allows for the styling of CSS elements

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


// Javascript code to add information to the cart 

var addToCartButtons = document.getElementsByClassName('normal')
for (var i = 0; i < addToCartButtons.length; i++) {
     var button = addToCartButtons[i]
     button.addEventListener('click', addToCartClicked)
}


function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.addToCartClicked
    var title = shopItem.getElementsByClassName('normal')[0].innerText
    console.log(h4)
}






