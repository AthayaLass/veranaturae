// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Only prevent default for anchor links (hash links)
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Header scroll behavior
let lastScroll = 0;
const header = document.querySelector('header');

if (header) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
}

// Name Modal Functions
function openNameModal() {
    const modal = document.getElementById('nameModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeNameModal() {
    const modal = document.getElementById('nameModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Service Modal System
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    const modal = document.getElementById('serviceModal');
    
    if (!modal || serviceCards.length === 0) return;
    
    const modalBody = modal.querySelector('.modal-body');
    const modalClose = document.getElementById('modalClose');
    
    const serviceData = {
        'en': {
            'coaching': {
                title: '1:1 Mindfulness Coaching',
                description: 'Step into a more balanced life with personal guidance. Whether you\'re new to mindfulness or deepening an existing practice, my individual coaching sessions are designed around your unique goals and life rhythm. Together, we\'ll cultivate presence, resilience, and self-awareness - one mindful breath at a time.',
                pricing: [
                    {
                        title: 'Individual Session',
                        icon: 'fas fa-user',
                        description: '1-hour personalized mindfulness session',
                        price: 'CHF 70'
                    },
                    {
                        title: '4-Session Package',
                        icon: 'fas fa-calendar-check',
                        description: '4 sessions of 1 hour each',
                        price: 'CHF 280'
                    },
                    {
                        title: '8-Session Package',
                        icon: 'fas fa-star',
                        description: '8 sessions of 1 hour each',
                        price: 'CHF 480'
                    }
                ],
                features: [
                    'Personalized approach',
                    '30 min discovery session included',
                    'Follow-up support',
                    'Flexible scheduling',
                    'Progress tracking'
                ],
                buttonText: 'Book Your Session',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=1:1 Coaching Inquiry',
                flyerDownload: 'images/Flyer_MindfulnessPaths.png'
            },
            'retreat': {
                title: 'Mindfulness Retreats',
                description: 'Escape the noise and reconnect with yourself. Join one of my small-group mindfulness retreats in the tranquil surroundings of Bern. These weekend or multi-day retreats offer space for deep rest, guided meditation, mindful movement, and time in nature, so you return refreshed and inspired.',
                pricing: [
                    {
                        title: 'Group Retreat (2 people)',
                        icon: 'fas fa-users',
                        description: 'Shared retreat experience for 2 people',
                        price: 'CHF 250 per person'
                    },
                    {
                        title: 'Private Retreat (1 person)',
                        icon: 'fas fa-user-friends',
                        description: 'Individual retreat experience',
                        price: 'CHF 300 per person'
                    }
                ],
                features: [
                    'Vegetarian meals included',
                    'Comfortable accommodation',
                    'Guided meditation sessions',
                    'Mindful movement classes',
                    'Nature walks and activities'
                ],
                buttonText: 'Book Your Retreat',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Retreat Booking',
                flyerDownload: 'images/Flyer_Retreat.png'
            },
            'work': {
                title: 'Mindfulness at Work',
                description: 'Boost your team\'s well-being, focus, and collaboration. My tailored mindfulness workshops and corporate sessions bring clarity and calm into the workplace. Help your team reduce stress, manage change, and enhance emotional intelligence, right at the heart of your organization.',
                pricing: [
                    {
                        title: 'Workshop (2 hours)',
                        icon: 'fas fa-chalkboard-teacher',
                        description: '2-hour workshop for up to 15 people',
                        price: 'CHF 400'
                    },
                    {
                        title: 'Program (8 sessions)',
                        icon: 'fas fa-calendar-alt',
                        description: '8 sessions of 1 hour each for up to 10 people',
                        price: 'CHF 2,500'
                    }
                ],
                features: [
                    'Tailored to your organization',
                    'Stress reduction techniques',
                    'Team building exercises',
                    'Leadership development',
                    'Ongoing support'
                ],
                buttonText: 'Contact for Details',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Workplace Mindfulness',
                flyerDownload: 'images/Flyer_MindfulnessAtWork.png'
            },
            'yoga': {
                title: 'Yoga and Breathwork',
                description: 'Slow down, soften, and breathe. Yoga and breathwork are powerful allies on the path to mindfulness. In these sessions, we combine gentle, conscious movement with guided breathing techniques to help you release stress, calm the mind, and return to your inner center.',
                pricing: [
                    {
                        title: 'Private Session',
                        icon: 'fas fa-user',
                        description: '1-hour private yoga and breathwork session',
                        price: 'CHF 40'
                    },
                    {
                        title: 'Group Session',
                        icon: 'fas fa-users',
                        description: '1-hour group session for up to 10 people',
                        price: 'CHF 25 per person'
                    }
                ],
                features: [
                    'Gentle movement',
                    'Breathing techniques',
                    'Stress relief',
                    'Mind-body connection',
                    'All levels welcome'
                ],
                buttonText: 'Book Your Session',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Yoga Session'
            },
            'underwater': {
                title: 'Underwater Mindfulness',
                description: 'Experience mindfulness in a unique underwater environment. Connect with the serene underwater world while practicing mindfulness techniques. This innovative approach combines the calming effects of water with traditional mindfulness practices, creating a truly immersive and transformative experience.',
                pricing: [
                    {
                        title: 'Underwater Session',
                        icon: 'fas fa-water',
                        description: 'Guided underwater mindfulness experience',
                        price: 'Contact for Pricing'
                    }
                ],
                features: [
                    'Collaboration with Athelas Diving',
                    'Unique underwater environment',
                    'Professional diving guidance',
                    'Mindfulness instruction',
                    'Safety equipment provided'
                ],
                buttonText: 'Contact for Details',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Underwater Mindfulness'
            },
            'ayurveda': {
                title: 'Ayurveda Wellness',
                description: 'Discover the ancient wisdom of Ayurvedic healing. Coming soon! Explore the holistic approach to wellness through Ayurveda, the traditional Indian system of medicine. Learn about your unique constitution and how to balance mind, body, and spirit through natural practices and lifestyle adjustments.',
                pricing: [
                    {
                        title: 'Ayurveda Consultation',
                        icon: 'fas fa-leaf',
                        description: 'Personalized wellness consultation',
                        price: 'Coming Soon'
                    }
                ],
                features: [
                    'Constitution assessment',
                    'Lifestyle recommendations',
                    'Natural healing practices',
                    'Holistic wellness approach',
                    'Ongoing support'
                ],
                buttonText: 'Stay Updated',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Ayurveda Interest'
            }
        }
    };
    
    // Function to generate modal content
    function generateModalContent(serviceType) {
        const currentLang = 'en'; // Default to English for now
        const data = serviceData[currentLang][serviceType];
        if (!data) return '';
        
        // Define service-specific background colors (matching original flip card colors)
        const serviceColors = {
            'coaching': 'linear-gradient(135deg, #a8c0ff 0%, #b8a9c9 100%)',
            'retreat': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            'work': 'linear-gradient(135deg, #e8f4f8 0%, #d1e7dd 100%)',
            'yoga': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            'underwater': 'linear-gradient(135deg, #a8c0ff 0%, #b8a9c9 100%)',
            'ayurveda': 'linear-gradient(135deg, #ffd1ff 0%, #fad0c4 100%)'
        };
        
        const pricingHTML = data.pricing.map(item => `
            <div class="pricing-item">
                <h5><i class="${item.icon}"></i> ${item.title}</h5>
                <p>${item.description}</p>
                <span class="price">${item.price}</span>
            </div>
        `).join('');
        
        const featuresHTML = data.features.map(feature => `
            <li><i class="fas fa-check"></i> ${feature}</li>
        `).join('');
        
        // Generate flyer download section if available
        const flyerSection = data.flyerDownload ? `
            <div class="modal-flyer">
                <a href="${data.flyerDownload}" download class="btn-secondary">
                    <i class="fas fa-download"></i> Download Flyer
                </a>
            </div>
        ` : '';
        
        return `
            <div class="modal-content-wrapper" style="background: ${serviceColors[serviceType] || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};">
                <h2 class="modal-title">${data.title}</h2>
                <p class="modal-description">${data.description}</p>
                
                <div class="modal-content-grid">
                    <div class="modal-pricing">
                        ${pricingHTML}
                    </div>
                    
                    <div class="modal-features">
                        <h5>What's Included:</h5>
                        <ul>
                            ${featuresHTML}
                        </ul>
                        ${flyerSection}
                    </div>
                </div>
                
                <div class="modal-cta">
                    <button class="btn-primary" onclick="window.location.href='${data.buttonAction}'">${data.buttonText}</button>
                </div>
            </div>
        `;
    }
    
    // Open modal function
    function openModal(serviceType) {
        modalBody.innerHTML = generateModalContent(serviceType);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Close modal function
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Event listeners for service cards
    serviceCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't open modal if clicking on links
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
    
            const serviceType = this.dataset.service;
            openModal(serviceType);
        });
    });
    
    // Close modal events
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    const modalOverlay = modal.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }
    
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

// Close name modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('nameModal');
    const floatingServices = document.querySelector('.floating-services');
    
    if (modal && modal.classList.contains('active') && 
        !modal.contains(event.target) && 
        floatingServices && !floatingServices.contains(event.target)) {
        closeNameModal();
    }
});

// Close name modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeNameModal();
    }
});

// Mobile menu functions
function toggleMobileMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.getElementById('mobileNav');
    
    if (burgerMenu && mobileNav) {
        burgerMenu.classList.toggle('active');
        mobileNav.classList.toggle('active');
    }
}

function closeMobileMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.getElementById('mobileNav');
    
    if (burgerMenu && mobileNav) {
        burgerMenu.classList.remove('active');
        mobileNav.classList.remove('active');
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.getElementById('mobileNav');
    
    if (burgerMenu && mobileNav && 
        !burgerMenu.contains(event.target) && 
        !mobileNav.contains(event.target)) {
        burgerMenu.classList.remove('active');
        mobileNav.classList.remove('active');
    }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll effect to floating services
    const floatingServices = document.querySelector('.floating-services');
    if (floatingServices) {
        let isScrolling = false;
        
        window.addEventListener('scroll', () => {
            if (!isScrolling) {
                floatingServices.style.transform = 'translateY(-2px)';
                isScrolling = true;
            }
            
            clearTimeout(window.scrollTimeout);
            window.scrollTimeout = setTimeout(() => {
                floatingServices.style.transform = '';
                isScrolling = false;
            }, 150);
        });
    }
    
    // Add hover effect to service items in modal
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});

// Add smooth reveal animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.mindfulness-section, .about-section, .contact, .intro-section, .flyers-section, .calendar-section, .services, .science-facts');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Animate cards individually
    const cards = document.querySelectorAll('.intro-card, .flyer-card, .fact-card, .service-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// ========== FLYER PREVIEW MODAL ==========
function openFlyerModal(imageSrc, title) {
    const modal = document.createElement('div');
    modal.className = 'flyer-modal-overlay';
    modal.innerHTML = `
        <div class="flyer-modal-content">
            <button class="flyer-modal-close" onclick="closeFlyerModal(this)">
                <i class="fas fa-times"></i>
            </button>
            <h3>${title}</h3>
            <img src="${imageSrc}" alt="${title}" class="flyer-modal-image">
            <div class="flyer-modal-actions">
                <a href="${imageSrc}" download class="flyer-download-btn">
                    <i class="fas fa-download"></i> Download
                </a>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Animate in
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeFlyerModal(button) {
    const modal = button.closest('.flyer-modal-overlay');
    modal.classList.remove('active');
    setTimeout(() => {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
    }, 300);
}

// Add click handlers to flyer cards
document.addEventListener('DOMContentLoaded', function() {
    const flyerCards = document.querySelectorAll('.flyer-card');
    flyerCards.forEach(card => {
        const image = card.querySelector('.flyer-image');
        const title = card.querySelector('h3').textContent;
        if (image) {
            image.addEventListener('click', function() {
                openFlyerModal(this.src, title);
            });
            image.style.cursor = 'pointer';
        }
    });
});

// ========== TYPING EFFECT FOR HERO SUBTITLE ==========
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.addEventListener('DOMContentLoaded', function() {
    const subtitle = document.querySelector('.hero .subtitle');
    if (subtitle && !subtitle.dataset.typed) {
        const originalText = subtitle.textContent;
        subtitle.dataset.typed = 'true';
        typeWriter(subtitle, originalText, 50);
    }
});

// ========== PARALLAX EFFECT FOR HERO ==========
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
});

// ========== SCROLL PROGRESS INDICATOR ==========
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

document.addEventListener('DOMContentLoaded', createScrollProgress);

// ========== BACK TO TOP BUTTON ==========
function createBackToTopButton() {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

document.addEventListener('DOMContentLoaded', createBackToTopButton);

// ========== ENHANCED CARD INTERACTIONS ==========
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.intro-card, .flyer-card, .fact-card, .service-card');
    
    cards.forEach(card => {
        // 3D tilt effect on mouse move
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
});

// ========== ANIMATED COUNTERS ==========
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Observe counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
            entry.target.dataset.counted = 'true';
            const target = parseInt(entry.target.dataset.target) || 100;
            animateCounter(entry.target, target);
        }
    });
}, { threshold: 0.5 });

// ========== SMOOTH PAGE TRANSITIONS ==========
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="index.html"], a[href^="about.html"], a[href^="mindfulness.html"], a[href^="ayurveda.html"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hostname === window.location.hostname || !this.hostname) {
                e.preventDefault();
                const href = this.getAttribute('href');
                
                // Add fade out
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.3s ease';
                
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
    
    // Fade in on page load
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========== ENHANCED MODAL ANIMATIONS ==========
document.addEventListener('DOMContentLoaded', function() {
    const modals = document.querySelectorAll('.modal-overlay, .service-modal');
    
    modals.forEach(modal => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    if (modal.classList.contains('active')) {
                        const content = modal.querySelector('.modal-content');
                        if (content) {
                            content.style.animation = 'modalSlideIn 0.4s ease-out';
                        }
                    }
                }
            });
        });
        
        observer.observe(modal, { attributes: true });
    });
});

// ========== LOADING ANIMATION ==========
window.addEventListener('load', function() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = '<div class="loader-spinner"><i class="fas fa-leaf"></i></div>';
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => {
            document.body.removeChild(loader);
        }, 500);
    }, 500);
});

// ========== INTERACTIVE SERVICE CARDS ==========
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.service-overlay');
            if (overlay) {
                overlay.style.opacity = '1';
                overlay.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.service-overlay');
            if (overlay) {
                overlay.style.opacity = '0.8';
                overlay.style.transform = 'scale(1)';
            }
        });
    });
});

// ========== STICKY NAVIGATION HIGHLIGHT ==========
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    function highlightNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNav);
    highlightNav();
});

// ========== IMAGE LAZY LOADING WITH FADE IN ==========
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                if (img.complete) {
                    img.style.opacity = '1';
                } else {
                    img.addEventListener('load', function() {
                        this.style.opacity = '1';
                    });
                }
                
                imageObserver.unobserve(img);
            }
        });
    }, { rootMargin: '50px' });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// ========== SMOOTH SCROLL TO CALENDAR ==========
document.addEventListener('DOMContentLoaded', function() {
    const calendarLinks = document.querySelectorAll('a[href*="#calendar"]');
    
    calendarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').includes('#calendar')) {
                e.preventDefault();
                const target = document.getElementById('calendar');
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// ========== ENHANCED FLOATING BUTTON ==========
document.addEventListener('DOMContentLoaded', function() {
    const floatingBtn = document.querySelector('.floating-services');
    if (floatingBtn) {
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function animate() {
            const rect = floatingBtn.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const diffX = mouseX - centerX;
            const diffY = mouseY - centerY;
            
            currentX += (diffX * 0.05 - currentX) * 0.1;
            currentY += (diffY * 0.05 - currentY) * 0.1;
            
            floatingBtn.style.transform = `translate(${currentX}px, ${currentY}px)`;
            requestAnimationFrame(animate);
        }
        
        animate();
    }
});
