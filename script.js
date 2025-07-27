// Toggle menu on mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Simple Admin Login
function login(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('login-message');

  if (username === "admin" && password === "1234") {
    message.textContent = "Login Successful!";
    message.style.color = "green";
  } else {
    message.textContent = "Invalid credentials. Try again!";
    message.style.color = "red";
  }
}