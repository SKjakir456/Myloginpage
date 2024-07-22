document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you would typically send the data to the server for validation
    // For demonstration, we'll just show an alert
    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
});
