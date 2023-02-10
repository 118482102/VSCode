// START OF CALENDAR CODE FOR NET REPAIRS AVAILABILITY

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