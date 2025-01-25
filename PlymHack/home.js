document.addEventListener('DOMContentLoaded', function () {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('username').textContent = user.username;
    }
});

function logout() {
    localStorage.removeItem('user');
    window.location.href = 'signup.html'; // Redirect to sign-up page on logout
}
