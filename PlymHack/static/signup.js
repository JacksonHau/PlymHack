document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, email: email, password: password })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong with the signup process.');
        }
    })
    .then(data => {
        alert(data.message);
        if (data.message === 'User created successfully') {
            localStorage.setItem('user', JSON.stringify({username: username})); // Save user info in localStorage
            window.location.href = 'home.html'; // Redirect to home page after successful signup
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert(error.message);
    });
});
