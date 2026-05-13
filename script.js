/* ============================================================
   script.js — Portfolio Handialrizky
   ============================================================ */

// ── Cached DOM References ─────────────────────────────────────
const navbar     = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks   = document.querySelector('.nav-links');
const menuIcon   = menuToggle.querySelector('i');

// ── Mobile Menu Toggle ────────────────────────────────────────
menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuIcon.classList.toggle('fa-bars',  !isOpen);
    menuIcon.classList.toggle('fa-times',  isOpen);
});

// Close mobile menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuIcon.classList.replace('fa-times', 'fa-bars');
    });
});

// ── Navbar Scroll Styling ─────────────────────────────────────
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 50;
    navbar.style.background   = scrolled ? 'rgba(1, 1, 2, 0.95)' : 'rgba(1, 1, 2, 0.8)';
    navbar.style.borderBottom = scrolled ? '1px solid var(--hairline)' : '1px solid transparent';
}, { passive: true });

// ── Active Nav Link Highlight ─────────────────────────────────
const sections = document.querySelectorAll('section[id], footer[id]');
const allNavLinks = navLinks.querySelectorAll('a');

function updateActiveNav() {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    allNavLinks.forEach(link => {
        link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${currentSection}`
        );
    });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// ── Scroll Reveal Animation ───────────────────────────────────
function revealOnScroll() {
    const threshold = 80; // px from bottom of viewport
    document.querySelectorAll('.reveal:not(.active)').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - threshold) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll, { passive: true });

// ── Initialisation (runs once DOM + resources are ready) ──────
window.addEventListener('load', () => {
    // Apply staggered transition delays
    document.querySelectorAll('.hero .reveal').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.08}s`;
    });

    document.querySelectorAll('.timeline-item').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.1}s`;
    });

    document.querySelectorAll('.achievement-card').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.1}s`;
    });

    // Trigger initial reveal pass after delays are set
    revealOnScroll();
    updateActiveNav();
});
