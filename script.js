// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

// Trigger reveal on load
window.addEventListener('load', reveal);
// Trigger reveal on scroll
window.addEventListener('scroll', reveal);

// Navbar styling on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(1, 1, 2, 0.95)';
        navbar.style.borderBottom = '1px solid var(--hairline)';
    } else {
        navbar.style.background = 'rgba(1, 1, 2, 0.8)';
        navbar.style.borderBottom = '1px solid transparent';
    }
});

// Add staggered delays to reveal elements based on hierarchy
document.addEventListener('DOMContentLoaded', () => {
    // Hero elements stagger
    const heroElements = document.querySelectorAll('.hero .reveal');
    heroElements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Process timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
    });

    // Process achievement cards
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
    });
});
