// Toggle menu visibility
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

// Event Buttons
const eventButtons = document.querySelectorAll('.events-carousel .card button');
eventButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('You have successfully joined the event!');
  });
});
