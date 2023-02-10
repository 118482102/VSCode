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
//https://www.youtube.com/watch?v=tEAl7L62GEw tutorial used and altered to suit my requirements

// Use the querySelectorAll method declare the element that will return the information to the cart
let carts = document.querySelectorAll('button.normal');


//Indicate the products that will be sent to the cart and their characteristics
let products = [
    {
        name: "Ball Stop Net1",
        tag: "ballstop1",
        price: 1000, 
        inCart: 0
    }

];

//for loop to run through the amount of products involved in the add to cart process per file (only happens 
// to be one in our instance)
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}


//Function along with if statement designed to add numbers to the cart symbol on our page in  
//accordance with the number of cartNumbers inside of localStorage 
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('#navbar span').textContent = productNumbers;
    }
}

//Function to know how many numbers are being added to the cart
function cartNumbers(product) {
   
    let productNumbers = localStorage.getItem('cartNumbers');

    //productNumbers returns as a string but we want it as a number so we use parsing 
    productNumbers = parseInt(productNumbers);
   

    //if statement to declare if the productNumbers is clicked again then +1 will be added to the cart
    //which is ('#navbar span'), else it will remain as is 
    if(productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('#navbar span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('#navbar span').textContent = 1;
    }

    setItems(product);
}


//Function that will allow us to input the product details into the localStorage
//It will be this product information that will the occupy the cart later on (i.e name and price)
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    //Must convert the cartItems into a javascript object/value with JSON.parse
    cartItems =JSON.parse(cartItems);
   
    //Embedded if statement that says if cartItems is not null (i.e. some item is already inside of the cart)
    //then it cartItems product tag will be added +1, else it will remain the same 
    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }


    //We must now convery the javascript value of cartItems back into a JSON value that will be stored in 
    //localStorage
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}


//Function to calculate the total cost of the products either individually or combined when added togther in the cart
function totalCost(product) {
    // console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartCost is ", cartCost);
    console.log(typeof cartCost);

    //if statement declaring that if a there is an item price or multiple item prices in the cart (cartCost is not
    //null) then the totalCost will be calculated in the localStorage
    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
        //else it will remain as is 
    } else {
        localStorage.setItem("totalCost", product.price);
    }

}

//Function which will work to display the cartItems on the cart.html page 
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let prodetails = document.querySelector("single-product-image");

    //if statement to show if cart items and prodetails (&& logical conjunctiom) operate as true) 
    if (cartItems && prodetails ) {
        prodetails.innerHTML = ''; 
        //Object.values().map seeks to call the array (cartItems) and .map a new array corresponding 
        //to the elements called in the statement below (i.e. the item image and the item name)
        Object.values(cartItems).map(item => {  
            prodetails.innerHTML  `
            <div class="single-product-image">
            <img src="images/${item.tag}.jpg">
            <h4>${item.name}</h4>
            </div>
            `

        })
    }


    }




    // Product 2 add to cart code start 


let carts2 = document.querySelectorAll('button.normal2');



let products2 = [
    { 
        name: "Ball Stop Net2",
        tag: "ballstopnet2",
        price: 1500, 
        inCart: 0
    }
];

for (let i=0; i < carts2.length; i++) {
    carts2[i].addEventListener('click', () => {
        cartNumbers(products2[i]);
        totalCost(products2[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers2 = localStorage.getItem('cartNumbers');

    if(productNumbers2) {
        document.querySelector('#navbar span').textContent = productNumbers2;
    }
}


function cartNumbers(product2) {
   
    let productNumbers2 = localStorage.getItem('cartNumbers');

    productNumbers2 = parseInt(productNumbers2);
   

    if(productNumbers2) {
    localStorage.setItem('cartNumbers', productNumbers2 + 1);
    document.querySelector('#navbar span').textContent = productNumbers2 + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('#navbar span').textContent = 1;
    }

    setItems(product2);
}

function setItems(product2) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems =JSON.parse(cartItems);
   
    if(cartItems != null) {

        if(cartItems[product2.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product2.tag]: product2
            }
        }
        cartItems[product2.tag].inCart += 1;
    } else {
        product2.inCart = 1;
        cartItems = {
            [product2.tag]: product2
        }
    }


    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}


function totalCost(product2) {
    // console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartCost is ", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product2.price);
    } else {
        localStorage.setItem("totalCost", product2.price);
    }

}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products-container");

    // console.log(cartItems);
    // if (cartItems && productContainer ) {
    //     productContainer.innerHTML = '';
    //     Object.values(cartItems).map(item => {
    //         productContainer.innerHTML += 
    //         <div class="product">
    //         <ion-icon name="close-circle-outline"></ion-icon>
    //         <img src="images/$(item.tag).jpg"></img>
    //         <h4>$(item.name)</h4>
    //         </div>
            
            
                
    //     });
    }





// Product 3 add to cart code start 

let carts3 = document.querySelectorAll('button.normal3');



let products3 = [
    { 
        name: "Ball Stop Net3",
        tag: "ballstopnet3",
        price: 2500, 
        inCart: 0
    }
];

for (let i=0; i < carts3.length; i++) {
    carts3[i].addEventListener('click', () => {
        cartNumbers(products3[i]);
        totalCost(products3[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers3 = localStorage.getItem('cartNumbers');

    if(productNumbers3) {
        document.querySelector('#navbar span').textContent = productNumbers3;
    }
}


function cartNumbers(product3) {
   
    let productNumbers3 = localStorage.getItem('cartNumbers');

    productNumbers3 = parseInt(productNumbers3);
   

    if(productNumbers3) {
    localStorage.setItem('cartNumbers', productNumbers3 + 1);
    document.querySelector('#navbar span').textContent = productNumbers3 + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('#navbar span').textContent = 1;
    }

    setItems(product3);
}

function setItems(product3) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems =JSON.parse(cartItems);
   
    if(cartItems != null) {

        if(cartItems[product3.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product3.tag]: product3
            }
        }
        cartItems[product3.tag].inCart += 1;
    } else {
        product3.inCart = 1;
        cartItems = {
            [product3.tag]: product3
        }
    }


    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}


function totalCost(product3) {
    // console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartCost is ", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product3.price);
    } else {
        localStorage.setItem("totalCost", product3.price);
    }

}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products-container");

    // console.log(cartItems);
    // if (cartItems && productContainer ) {
    //     productContainer.innerHTML = '';
    //     Object.values(cartItems).map(item => {
    //         productContainer.innerHTML += 
    //         <div class="product">
    //         <ion-icon name="close-circle-outline"></ion-icon>
    //         <img src="images/$(item.tag).jpg"></img>
    //         <h4>$(item.name)</h4>
    //         </div>
            
            
                
    //     });
    }


onLoadCartNumbers();





// START OF CALENDAR CODE FOR NET REPAIRS AVAILABILITY
// Majority of code comes from https://www.youtube.com/watch?v=m9OSBJaQTlM but was written 
//     by scratch and commented on throughout 

//Create a navigation variable so that the calendar date will start in January

// navigation = 0 means January, navigation = 1 means February etc...  

// clicked will represent the days of the months

// events will allow us to return the parsed item from local storage and if there is nothing to return
//it will show an empty array

let navigation = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) :[];

// Now to declare some constant values that will never change throughout the running of the calendar i.e the weekdays

const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday',  'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//Creating a function for the appointment modal 
function openModal(date) {
    clicked = date;

    //declare a constant (eventForDay) along with an array (events) to try and find when an appointment/event (e)
    // exists on a particular date (.date)
    const eventForDay = events.find(e => e.date === clicked);

    //Need an if statement now to decide whether a new event modal will pop up or if a delete modal will
    //be needed in a case where an event/appointment is already scheduled on that date

    if (eventForDay) {
        document.getElementById('eventText').innerText = eventForDay.title;
        deleteEventModal.style.display = 'block';
    }else {
        newEventModal.style.display = 'block';
    }

    backDrop.style.display = 'block';


}


//creating a function to get the current date and time along with the constant which will retrieve the current date and time
function load() {
    const dt = new Date();

    //if statement to show that if users move forward or backwards on the calendar from the set date above 
    //then the navigation set date will be added to newDate.getMonth method to access new dates
    
    if (navigation !== 0) {
        dt.setMonth(new Date().getMonth() + navigation);
    }

    // create the constants that represent the different times of the calendar

    const day = dt.getDay();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    //Constant here that will return the first day of whatever month it happens to be 
    const firstDayOfMonth = new Date(year, month, 1);

    // required now to create procedure that will add + 1 to the month since it would always load in a month behind 
    // due to the nature of arrays

    const daysInMonth = new Date(year, month + 1, 0).getDate();


    //creating a date string method to return the constant in either long or numeric form
    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });
    //Time to create padding for the days of the calendar that are not actually part of that specific month 
    // but will still be shown on the calendar
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    //Creating a method that shows the month the calendar is active on 
    document.getElementById('monthDisplay').innerText = `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`


    // Wipes out all the paddingDays and dayInMonth so that the for loop can re-render everything when necessary
    calendar.innerHTML = '';
    
    //For loop will render (.add('day')) both the padding days and the days in the month when the calendar loads in 
    for(let i = 1; i<= paddingDays + daysInMonth; i++) {
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');

        const dayString = `${month + 1}/ ${i - paddingDays}/${year}`;



        //if statement to make sure that the for loop will not add more daysInMonth than there are paddingDays
        // i.e it will make sure the daysInMonth and paddingDays add up correctly
        if (i > paddingDays){
          daySquare.innerText = i - paddingDays;

          const eventForDay = events.find(e => e.date === dayString);

          //if statement to highlight the current day the calendar is on
          if (i - paddingDays === day && navigation === 0) {
            daySquare.id = 'currentDay';
          }
        
          // If there is an appointment on a day then the calendar will show the appointment as being present
          if(eventForDay) {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');
            eventDiv.innerText = eventForDay.title;
            daySquare.appendChild(eventDiv);
          }

          //add event listener now for when a user clicks on a calendar day 
          daySquare.addEventListener('click', () => openModal(dayString));
        }else  {
            daySquare.classList.add('padding')

        }

        calendar.appendChild(daySquare);

    }
}

//function created to close the modal when the cancel button is clicked 
//its method is called below on line 153
//everytime we wish to close the modal after clicking a button and enacting a fuction we must ensure
// that the style.display is set to none 
function closeModal() {
    eventTitleInput.classList.remove('error');
    newEventModal.style.display = 'none';
    deleteEventModal.style.display = 'none';
    backDrop.style.display = 'none';
    eventTitleInput.value = '';
    clicked = null;
    load();
}

// Create function that allows us to delete events already inset into the calendar
function deleteEvent() {
    events = events.filter(e => e.date !== clicked);
    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
}


//Function for the back and next buttons to allow users to go between months on the calendar 
// This function will manipulate the navigation variable from the top of our code
function initButtons() {
    document.getElementById('nextButton').addEventListener('click', () => {
        navigation++;
        load();
    });

    // need to include a minus minus (--) increment after the plus plus (++) above 
    document.getElementById('backButton').addEventListener('click', () => {
        navigation--;
        load();
    });

    //add a function to save the appointment/event input 
    function saveEvent() {
        //if statement will act to remove(error) if there is an input value in the appointment box 
        //else it will show an error message 
        if (eventTitleInput.value) {
            eventTitleInput.classList.remove('error');

            //must push the event values (date and title message) of the appointment box into local storage 
            events.push({
                date: clicked,
                title: eventTitleInput.value,
            });

            //json stringify converts the events item to a JSON string which is stored in local storage
            localStorage.setItem('events', JSON.stringify(events));
            closeModal();
        }else {
            eventTitleInput.classList.add('error')

        }

    }

    //Button event listener method to save and cancel the appointment modal 
    document.getElementById('saveButton').addEventListener('click', saveEvent);

    //Another button Event listner method to close the modal when the cancel button is clicked
    document.getElementById('cancelButton').addEventListener('click', closeModal);

    document.getElementById('deleteButton').addEventListener('click', deleteEvent);
    document.getElementById('closeButton').addEventListener('click', closeModal);


}

initButtons();
load();


