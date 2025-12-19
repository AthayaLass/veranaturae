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
            },
            'ayurveda-main': {
                title: 'Ayurveda Services',
                description: 'Discover the ancient wisdom of Ayurvedic healing. Our holistic approach to wellness through Ayurveda offers personalized consultations, therapeutic massages, and nutrition guidance tailored to your unique constitution.',
                pricing: [
                    {
                        title: 'Ayurvedic Consultation',
                        icon: 'fas fa-user-md',
                        description: 'Personalized wellness consultation to determine your dosha and create a customized wellness plan',
                        price: 'Contact for Pricing'
                    },
                    {
                        title: 'Ayurvedic Massages',
                        icon: 'fas fa-spa',
                        description: 'Therapeutic massages using traditional Ayurvedic techniques and oils',
                        price: 'Contact for Pricing'
                    },
                    {
                        title: 'Ayurvedic Nutrition',
                        icon: 'fas fa-utensils',
                        description: 'Personalized dietary recommendations based on your dosha and lifestyle',
                        price: 'Contact for Pricing'
                    }
                ],
                features: [
                    'Personalized dosha assessment',
                    'Traditional Ayurvedic practices',
                    'Holistic wellness approach',
                    'Natural healing methods',
                    'Ongoing support and guidance'
                ],
                buttonText: 'Book a Consultation',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Ayurveda Services Inquiry'
            },
            'mindfulness-main': {
                title: 'Mindfulness Services',
                description: 'Cultivate presence, reduce stress, and enhance well-being through personalized mindfulness practices. Our services are designed for individuals, corporate settings, and unique underwater experiences.',
                pricing: [
                    {
                        title: '1:1 Mindfulness Session',
                        icon: 'fas fa-user',
                        description: 'Personalized one-on-one mindfulness coaching session',
                        price: 'Contact for Pricing'
                    },
                    {
                        title: 'Corporate Mindfulness',
                        icon: 'fas fa-briefcase',
                        description: 'Mindfulness workshops and programs tailored for your organization',
                        price: 'Contact for Pricing'
                    },
                    {
                        title: 'Underwater Mindfulness',
                        icon: 'fas fa-water',
                        description: 'Unique underwater mindfulness experience in collaboration with athelas-diving.com',
                        price: 'Contact for Pricing'
                    }
                ],
                features: [
                    'Personalized approach',
                    'Stress reduction techniques',
                    'Enhanced focus and clarity',
                    'Emotional regulation',
                    'Available in multiple languages'
                ],
                buttonText: 'Book a Session',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Mindfulness Services Inquiry'
            },
            'yoga-main': {
                title: 'Yoga Services',
                description: 'Unite mind, body, and spirit through gentle movement and breathwork. Experience personalized private sessions or join group classes designed for all levels.',
                pricing: [
                    {
                        title: 'Private Yoga Session',
                        icon: 'fas fa-user',
                        description: 'One-on-one personalized yoga session tailored to your needs',
                        price: 'Contact for Pricing'
                    },
                    {
                        title: 'Group Yoga Session',
                        icon: 'fas fa-users',
                        description: 'Group yoga classes for all levels in a supportive environment',
                        price: 'Contact for Pricing'
                    }
                ],
                features: [
                    'Gentle movement practices',
                    'Breathing techniques (pranayama)',
                    'Mind-body connection',
                    'All levels welcome',
                    'Personalized guidance'
                ],
                buttonText: 'Book a Session',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Yoga Services Inquiry'
            },
            'ayurveda-consultation': {
                title: 'Ayurvedic Consultation',
                description: 'Discover your unique constitution (dosha) and receive personalized recommendations for diet, lifestyle, herbs, and daily routines to restore balance and enhance your well-being. This comprehensive consultation includes dosha analysis, health assessment, and a customized wellness plan.',
                pricing: [
                    {
                        title: 'Initial Consultation',
                        icon: 'fas fa-user-md',
                        description: 'Comprehensive 90-minute consultation including dosha analysis and personalized wellness plan',
                        price: 'Contact for Pricing'
                    },
                    {
                        title: 'Follow-up Consultation',
                        icon: 'fas fa-redo',
                        description: '60-minute follow-up session to track progress and adjust recommendations',
                        price: 'Contact for Pricing'
                    }
                ],
                features: [
                    'Detailed dosha analysis (Vata, Pitta, Kapha)',
                    'Identification of current imbalances',
                    'Pulse and tongue diagnosis',
                    'Comprehensive health history review',
                    'Personalized recommendations for diet, lifestyle, and herbs'
                ],
                buttonText: 'Book a Consultation',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Ayurvedic Consultation'
            },
            'ayurveda-massages': {
                title: 'Ayurvedic Massages',
                description: 'Experience therapeutic massages using traditional Ayurvedic techniques and oils. These treatments help balance the doshas, improve circulation, release toxins, and promote deep relaxation and healing.',
                pricing: [
                    {
                        title: 'Abhyanga (Full Body Oil Massage)',
                        icon: 'fas fa-spa',
                        description: 'Traditional full-body massage with warm medicated oils',
                        price: 'Contact for Pricing'
                    },
                    {
                        title: 'Shirodhara (Head Treatment)',
                        icon: 'fas fa-head-side-virus',
                        description: 'Therapeutic oil stream treatment for the forehead and scalp',
                        price: 'Contact for Pricing'
                    },
                    {
                        title: 'Massage Package',
                        icon: 'fas fa-gift',
                        description: 'Series of treatments for optimal results',
                        price: 'Contact for Pricing'
                    }
                ],
                features: [
                    'Dosha-specific oil selection',
                    'Traditional Ayurvedic techniques',
                    'Deep relaxation and stress relief',
                    'Improved circulation and detoxification',
                    'Enhanced energy flow'
                ],
                buttonText: 'Book a Treatment',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Ayurvedic Massages'
            },
            'ayurveda-nutrition': {
                title: 'Ayurvedic Nutrition',
                description: 'Receive customized dietary recommendations tailored to your dosha type and individual needs. Learn which foods support your constitution, optimal meal timing, food combinations, and how to eat in harmony with nature\'s rhythms.',
                pricing: [
                    {
                        title: 'Nutrition Consultation',
                        icon: 'fas fa-utensils',
                        description: '60-minute personalized nutrition session with meal planning guidance',
                        price: 'Contact for Pricing'
                    },
                    {
                        title: '3-Session Nutrition Package',
                        icon: 'fas fa-calendar-check',
                        description: 'Three sessions including initial consultation and follow-ups',
                        price: 'Contact for Pricing'
                    }
                ],
                features: [
                    'Dosha-specific food recommendations',
                    'Meal timing and routine guidance',
                    'Food combination principles',
                    'Seasonal eating recommendations',
                    'Personalized meal plan examples'
                ],
                buttonText: 'Book a Consultation',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Ayurvedic Nutrition'
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
            'ayurveda': 'linear-gradient(135deg, #ffd1ff 0%, #fad0c4 100%)',
            'ayurveda-main': 'linear-gradient(135deg, #ffd1ff 0%, #fad0c4 100%)',
            'mindfulness-main': 'linear-gradient(135deg, #a8c0ff 0%, #b8a9c9 100%)',
            'yoga-main': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            'ayurveda-consultation': 'linear-gradient(135deg, #ffd1ff 0%, #fad0c4 100%)',
            'ayurveda-massages': 'linear-gradient(135deg, #ffd1ff 0%, #fad0c4 100%)',
            'ayurveda-nutrition': 'linear-gradient(135deg, #ffd1ff 0%, #fad0c4 100%)'
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

// Flyers sidebar toggle function
function toggleFlyersSidebar() {
    const flyersSidebar = document.getElementById('flyersSidebar');
    if (flyersSidebar) {
        flyersSidebar.classList.toggle('active');
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
    const sections = document.querySelectorAll('.mindfulness-section, .about-section, .contact');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});