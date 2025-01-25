document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;

    fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        if (response.status === 200) {
            window.location.href = 'home.html'; // Redirect to home page after successful login
        }
    })
    .catch(error => console.error('Error:', error));
});
