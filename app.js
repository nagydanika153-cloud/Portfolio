// NAVBAR: scroll árnyék

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// NAVBAR: mobil toggle

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Menü bezárása linkre kattintáskor

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// Menü bezárása ha a menün kívülre kattintanak

document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
        navLinks.classList.remove('open');
    }
});

