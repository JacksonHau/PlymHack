document.getElementById('signUpForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    localStorage.setItem('user', JSON.stringify({ username, email }));
    window.location.href = 'home.html'; // Redirect to home page after sign up
});
