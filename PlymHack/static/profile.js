document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('username').value = user.username;
        document.getElementById('email').value = user.email;  // Assuming 'email' is stored in localStorage
    }
});

function updateProfile() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    fetch('http://127.0.0.1:5000/update_user', {  // Update this URL to your actual API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, email: email })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        if (data.message === 'Profile updated successfully') {
            localStorage.setItem('user', JSON.stringify({username: username, email: email}));
            window.location.reload();
        }
    })
    .catch(error => console.error('Error:', error));
}

function logout() {
    localStorage.removeItem('user');
    window.location.href = 'login.html';
}
