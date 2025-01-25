document.addEventListener('DOMContentLoaded', function () {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('username').textContent = user.username;
    }
});

function logout() {
    localStorage.removeItem('user');
    window.location.href = 'login.html'; // Redirect to login page on logout
}
