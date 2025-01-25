document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('username').textContent = user.username;
    }

    // Toggle menu visibility
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');

    menuButton.addEventListener('click', () => {
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Event Buttons - if you have events listed in this page
    const eventButtons = document.querySelectorAll('.events-carousel .card button');
    eventButtons.forEach((button) => {
        button.addEventListener('click', () => {
            alert('You have successfully joined the event!');
        });
    });
});

function logout() {
    localStorage.removeItem('user');
    window.location.href = 'login.html'; // Redirect to login page on logout
}
