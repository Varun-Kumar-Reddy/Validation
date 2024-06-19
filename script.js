// script.js

// Function to validate the form
function validateForm(event) {
    event.preventDefault();

    // Get form fields
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phoneNumber');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const captchaError = document.getElementById('captchaError');

    // Validation flags
    let isValid = true;

    // Validate Full Name
    if (fullName.value.length < 5) {
        fullName.classList.add('is-invalid');
        isValid = false;
    } else {
        fullName.classList.remove('is-invalid');
    }

    // Validate Email
    if (!email.value.includes('@')) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Validate Phone Number
    if (phoneNumber.value === '123456789' || phoneNumber.value.length !== 10 || isNaN(phoneNumber.value)) {
        phoneNumber.classList.add('is-invalid');
        isValid = false;
    } else {
        phoneNumber.classList.remove('is-invalid');
    }

    // Validate Password
    if (password.value.length < 8 || password.value.toLowerCase() === 'password' || password.value.toLowerCase() === fullName.value.toLowerCase()) {
        password.classList.add('is-invalid');
        isValid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    // Validate Confirm Password
    if (confirmPassword.value !== password.value) {
        confirmPassword.classList.add('is-invalid');
        isValid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
    }

    // Validate reCAPTCHA
    const recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
        captchaError.style.display = 'block';
        isValid = false;
    } else {
        captchaError.style.display = 'none';
    }

    // If all fields are valid, submit the form (for now we just alert)
    if (isValid) {
        alert('Form submitted successfully!');
        // Here, you can add code to actually submit the form data, e.g., using AJAX
    }
}

// Add event listener to the form submit event
document.getElementById('registrationForm').addEventListener('submit', validateForm);
