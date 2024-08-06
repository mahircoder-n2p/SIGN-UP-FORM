// JavaScript for form validation and submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const username = form.username.value.trim();
        const password = form.password.value.trim();

        if (username === '' || password === '') {
            messageDiv.textContent = 'Please fill in all fields.';
        } else if (username === 'admin' && password === 'password') {
            messageDiv.textContent = 'Login successful!';
            messageDiv.style.color = 'green';
            // Redirect or perform further actions here
        } else {
            messageDiv.textContent = 'Invalid username or password.';
        }
    });
});
