/**
 * Aurora Flow Theme - Interactive Portfolio
 * Shaina Mariel D. Dioso
 */

// ====================================
// Preloader
// ====================================

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    // Minimum display time for preloader (1 second)
    setTimeout(() => {
        preloader.classList.add('fade-out');
        document.body.classList.add('loaded');
        
        // Remove preloader from DOM after fade out
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1000);
});

// ====================================
// Smooth Scroll & Navigation
// ====================================

const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Update scroll progress bar
const scrollProgress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ====================================
// Aurora Canvas Animation
// ====================================

const canvas = document.getElementById('auroraCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class AuroraWave {
    constructor(y, amplitude, frequency, speed, color) {
        this.y = y;
        this.amplitude = amplitude;
        this.frequency = frequency;
        this.speed = speed;
        this.color = color;
        this.offset = 0;
    }

    update() {
        this.offset += this.speed;
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);

        for (let x = 0; x < canvas.width; x++) {
            const y = this.y + Math.sin(x * this.frequency + this.offset) * this.amplitude;
            ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, this.color + '40');
        gradient.addColorStop(0.5, this.color + '20');
        gradient.addColorStop(1, this.color + '10');
        ctx.fillStyle = gradient;
        ctx.fill();
    }
}

const waves = [
    new AuroraWave(canvas.height * 0.3, 50, 0.01, 0.02, '#6BA6FF'),
    new AuroraWave(canvas.height * 0.5, 40, 0.015, 0.015, '#FF8BA7'),
    new AuroraWave(canvas.height * 0.7, 60, 0.008, 0.025, '#F9E4B7')
];

function animateAurora() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    waves.forEach(wave => {
        wave.update();
        wave.draw();
    });
    
    requestAnimationFrame(animateAurora);
}

animateAurora();

// ====================================
// Intersection Observer for Animations
// ====================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Observe experience cards
document.querySelectorAll('.experience-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Observe achievement cards
document.querySelectorAll('.achievement-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Observe skill bubbles
document.querySelectorAll('.skill-bubble').forEach((bubble, index) => {
    bubble.style.transitionDelay = `${index * 0.1}s`;
    bubble.style.animationDelay = `${index * 0.2}s`;
    observer.observe(bubble);
});

// ====================================
// Achievement Filter System
// ====================================

const filterBtns = document.querySelectorAll('.filter-btn');
const achievementCards = document.querySelectorAll('.achievement-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        achievementCards.forEach((card, index) => {
            const category = card.getAttribute('data-category');
            
            // Reset animation
            card.style.transitionDelay = '0s';
            
            if (filterValue === 'all' || category === filterValue) {
                setTimeout(() => {
                    card.classList.remove('hidden');
                    card.classList.add('visible');
                    card.style.transitionDelay = `${index * 0.05}s`;
                }, 10);
            } else {
                card.classList.remove('visible');
                card.classList.add('hidden');
            }
        });
    });
});

// ====================================
// Contact Form Handling
// ====================================

const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validate form
    if (name && email && message) {
        // Hide form and show feedback
        contactForm.style.opacity = '0';
        contactForm.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            contactForm.style.display = 'none';
            formFeedback.classList.add('show');
        }, 300);
        
        // Reset form after 3 seconds
        setTimeout(() => {
            formFeedback.classList.remove('show');
            setTimeout(() => {
                contactForm.style.display = 'block';
                setTimeout(() => {
                    contactForm.style.opacity = '1';
                    contactForm.style.transform = 'scale(1)';
                    contactForm.reset();
                }, 50);
            }, 300);
        }, 3000);
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, message });
    }
});

// ====================================
// Scroll to Top Button
// ====================================

const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ====================================
// Dynamic Text Animation (Hero Section)
// ====================================

function initTextAnimation() {
    const nameHighlight = document.querySelector('.name-highlight');
    if (nameHighlight) {
        const text = nameHighlight.textContent;
        nameHighlight.textContent = '';
        nameHighlight.style.opacity = '1';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                nameHighlight.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 100);
    }
}

// Initialize text animation after page load
window.addEventListener('load', () => {
    setTimeout(initTextAnimation, 500);
});

// ====================================
// Parallax Effect for Hero Image
// ====================================

const heroImage = document.querySelector('.hero-image');

window.addEventListener('scroll', () => {
    if (heroImage && window.scrollY < window.innerHeight) {
        const scrolled = window.scrollY;
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ====================================
// Timeline Animation Enhancement
// ====================================

const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = '0.2s';
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

// ====================================
// Floating Particles Effect
// ====================================

class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.reset();
    }

    reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = this.canvas.height + 10;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 1 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = ['#6BA6FF', '#FF8BA7', '#F9E4B7'][Math.floor(Math.random() * 3)];
    }

    update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        
        if (this.y < -10) {
            this.reset();
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color + Math.floor(this.opacity * 255).toString(16).padStart(2, '0');
        this.ctx.fill();
    }
}

const particles = [];
const particleCount = 30;

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(canvas));
}

function animateParticles() {
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    waves.forEach(wave => {
        wave.update();
        wave.draw();
    });
    
    animateParticles();
    
    requestAnimationFrame(animate);
}

// Start combined animation
animate();

// ====================================
// Lazy Load Images (when actual images are added)
// ====================================

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// ====================================
// Gradient Animation for Name
// ====================================

let gradientOffset = 0;

function animateGradient() {
    gradientOffset += 0.5;
    const nameHighlight = document.querySelector('.name-highlight');
    
    if (nameHighlight) {
        nameHighlight.style.backgroundSize = '200% 200%';
        nameHighlight.style.backgroundPosition = `${gradientOffset}% 50%`;
    }
    
    requestAnimationFrame(animateGradient);
}

animateGradient();

// ====================================
// Button Hover Effects Enhancement
// ====================================

const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: translate(-50%, -50%);
            animation: ripple 0.6s ease-out;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
    
    .btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// ====================================
// Tilt Effect for Cards
// ====================================

function addTiltEffect(selector) {
    const cards = document.querySelectorAll(selector);
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// Apply tilt effect to various cards
addTiltEffect('.experience-card');
addTiltEffect('.achievement-card');
addTiltEffect('.skill-bubble');
addTiltEffect('.about-card');

// ====================================
// Skills Animation
// ====================================

const skillBubbles = document.querySelectorAll('.skill-bubble');

skillBubbles.forEach((bubble, index) => {
    // Random floating animation delay
    bubble.style.animationDelay = `${Math.random() * 2}s`;
    
    // Add hover interaction
    bubble.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });
    
    bubble.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
    });
});

// ====================================
// Typed Effect for Career Objective
// ====================================

function typeWriter(element, text, speed = 50) {
    let i = 0;
    const originalText = element.textContent;
    element.textContent = '';
    element.style.opacity = '1';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ====================================
// Performance Optimization
// ====================================

// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for frequent events
function throttle(func, limit = 100) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply optimization to scroll handlers
const optimizedScroll = throttle(() => {
    // Scroll-based animations here
}, 50);

window.addEventListener('scroll', optimizedScroll);

// ====================================
// Console Art (Easter Egg)
// ====================================

console.log('%c✨ Aurora Flow Portfolio ✨', 'color: #6BA6FF; font-size: 24px; font-weight: bold;');
console.log('%cDesigned for Shaina Mariel D. Dioso', 'color: #FF8BA7; font-size: 14px;');
console.log('%c"The highest reward for a person\'s toil is not what they get for it, but what they become by it." - John Ruskin', 'color: #F9E4B7; font-size: 12px; font-style: italic;');

// ====================================
// Accessibility Enhancements
// ====================================

// Add keyboard navigation for filter buttons
filterBtns.forEach((btn, index) => {
    btn.setAttribute('tabindex', '0');
    btn.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btn.click();
        }
    });
});

// Add ARIA labels dynamically
document.querySelectorAll('.social-icon').forEach(icon => {
    if (!icon.getAttribute('aria-label')) {
        const platform = icon.querySelector('i').className.split(' ')[1].replace('fa-', '');
        icon.setAttribute('aria-label', `Visit ${platform} profile`);
    }
});

// ====================================
// Loading Animation
// ====================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger any initial animations
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
        }
    }, 100);
});

// ====================================
// Print Styles Trigger
// ====================================

window.addEventListener('beforeprint', () => {
    // Expand all collapsed sections for printing
    document.querySelectorAll('.timeline-item, .experience-card, .achievement-card').forEach(el => {
        el.classList.add('visible');
    });
});

// ====================================
// Dark Mode Toggle (Future Enhancement)
// ====================================

// Uncomment this section if you want to add dark mode toggle
/*
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.style.cssText = `
    position: fixed;
    top: 50%;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient-aurora);
    border: none;
    color: white;
    cursor: pointer;
    z-index: 1000;
    transform: translateY(-50%);
`;
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    icon.className = document.body.classList.contains('dark-mode') 
        ? 'fas fa-sun' 
        : 'fas fa-moon';
});
*/

// ====================================
// End of Script
// ====================================

console.log('%c🎨 All interactive features loaded successfully!', 'color: #6BA6FF; font-weight: bold;');

