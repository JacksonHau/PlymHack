// JavaScript for handling menu and form submissions

// Toggle menu visibility
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

// Personality Quiz Form Submission
const personalityQuizForm = document.querySelector('.personality-quiz form');
if (personalityQuizForm) {
  personalityQuizForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Your personality type has been determined! Check the recommended events for you.');
  });
}

// Event Buttons
const eventButtons = document.querySelectorAll('.events-carousel .card button');
eventButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('You have successfully joined the event!');
  });
});
