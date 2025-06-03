document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMessage = document.getElementById('successMessage');

  // Clear old messages
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMessage.textContent = '';

  let isValid = true;

  // Name Validation
  if (name.value.trim() === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
  }

  // Email Validation with Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else if (!emailRegex.test(email.value)) {
    emailError.textContent = 'Enter a valid email';
    isValid = false;
  }

  // Message Validation
  if (message.value.trim() === '') {
    messageError.textContent = 'Message is required';
    isValid = false;
  }

  // Show success message if valid
  if (isValid) {
    successMessage.textContent = 'Form submitted successfully!';
    // Optionally reset the form
    document.getElementById('contactForm').reset();
  }
});
