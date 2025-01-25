// JavaScript for handling form submissions and button clicks

// Personality Quiz Form Submission
const personalityQuizForm = document.querySelector('.personality-quiz form');
if (personalityQuizForm) {
  personalityQuizForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Your personality type has been determined! Check the recommended events for you.');
  });
}

// Group and Event Buttons
const groupButtons = document.querySelectorAll('.groups .card button');
groupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('You have successfully joined the group!');
  });
});

const eventButtons = document.querySelectorAll('.events .card button');
eventButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('You have successfully joined the event!');
  });
});