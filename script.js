function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    // Reset error messages
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    // Email validation
    if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = 'Email has invalid format';
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password minimal length is 6';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Bisa ditambahkan submit form beneran di sini
    }
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}
