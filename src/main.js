// Reset CSS
import './styles/reset/reset.css'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import custom CSS
import './styles/style.css'

// Your custom JavaScript
console.log('Brew Haven Café loaded!')

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Update active navbar link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add to cart functionality (example)
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-add')) {
        const menuItem = e.target.closest('.menu-card');
        const itemName = menuItem.querySelector('.card-title').textContent;
        const itemPrice = menuItem.querySelector('.price').textContent;
        
        // Simple alert for demonstration
        alert(`Added ${itemName} (${itemPrice}) to cart!`);
        
        // You can implement actual cart functionality here
        console.log('Added to cart:', { name: itemName, price: itemPrice });
    }
});

// Newsletter subscription
document.querySelector('.newsletter-form .btn-primary')?.addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.querySelector('.newsletter-form .form-control').value;
    
    if (email) {
        alert(`Thank you for subscribing with email: ${email}`);
        document.querySelector('.newsletter-form .form-control').value = '';
    } else {
        alert('Please enter your email address');
    }
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.menu-card, .testimonial-card, .about-content').forEach(el => {
    observer.observe(el);
});

// Mobile menu close on link click
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});