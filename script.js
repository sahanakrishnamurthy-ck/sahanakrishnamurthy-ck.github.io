// Sidebar toggle for mobile
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.getElementById('sidebarToggle');

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
    let currentId = '';

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
            currentId = section.id;
        }
    });

    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

// Close sidebar when clicking a link on mobile
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
            sidebar.classList.remove('open');
        }
    });
});
