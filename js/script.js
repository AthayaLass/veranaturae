// Language switching function
function switchLanguage(lang) {
    if (!['en', 'it', 'fr'].includes(lang)) return;
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Get current page
    const currentPath = window.location.pathname;
    const currentFile = currentPath.split('/').pop() || 'home.html';
    
    // Redirect to language-specific page
    window.location.href = `/${lang}/${currentFile}`;
}

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
            },
            'mindfulness-1to1': {
                title: '1:1 Mindfulness Sessions',
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
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=1:1 Mindfulness Inquiry',
                flyerDownload: 'images/Flyer_MindfulnessPaths.png'
            },
            'mindfulness-corporate': {
                title: 'Corporate Mindfulness',
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
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Corporate Mindfulness',
                flyerDownload: 'images/Flyer_MindfulnessAtWork.png'
            },
            'mindfulness-underwater': {
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
            'private-yoga': {
                title: 'Private Yoga',
                description: 'Experience personalized one-on-one yoga sessions tailored to your unique needs, goals, and experience level. Receive individual attention and guidance to deepen your practice at your own pace. Slow down, soften, and breathe. Yoga and breathwork are powerful allies on the path to mindfulness.',
                pricing: [
                    {
                        title: 'Private Session',
                        icon: 'fas fa-user',
                        description: '1-hour private yoga and breathwork session',
                        price: 'CHF 40'
                    }
                ],
                features: [
                    'Personalized approach',
                    'Gentle movement',
                    'Breathing techniques',
                    'Stress relief',
                    'Mind-body connection',
                    'All levels welcome'
                ],
                buttonText: 'Book Your Session',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Private Yoga Session'
            },
            'group-yoga': {
                title: 'Group Yoga',
                description: 'Join a supportive community in group yoga sessions. Practice together, share energy, and grow in a welcoming environment that fosters connection and collective mindfulness. Experience gentle, conscious movement with guided breathing techniques to help you release stress, calm the mind, and return to your inner center.',
                pricing: [
                    {
                        title: 'Group Session',
                        icon: 'fas fa-users',
                        description: '1-hour group session for up to 10 people',
                        price: 'CHF 25 per person'
                    }
                ],
                features: [
                    'Supportive community',
                    'Gentle movement',
                    'Breathing techniques',
                    'Stress relief',
                    'Mind-body connection',
                    'All levels welcome'
                ],
                buttonText: 'Book Your Session',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Group Yoga Session'
            }
        },
        'it': {
            'coaching': {
                title: 'Coaching Mindfulness 1:1',
                description: 'Entra in una vita più equilibrata con una guida personale. Che tu sia nuovo alla mindfulness o stia approfondendo una pratica esistente, le mie sessioni di coaching individuali sono progettate intorno ai tuoi obiettivi unici e al ritmo della tua vita. Insieme, coltiveremo presenza, resilienza e consapevolezza di sé - un respiro consapevole alla volta.',
                pricing: [
                    {
                        title: 'Sessione Individuale',
                        icon: 'fas fa-user',
                        description: 'Sessione di mindfulness personalizzata di 1 ora',
                        price: 'CHF 70'
                    },
                    {
                        title: 'Pacchetto 4 Sessioni',
                        icon: 'fas fa-calendar-check',
                        description: '4 sessioni di 1 ora ciascuna',
                        price: 'CHF 280'
                    },
                    {
                        title: 'Pacchetto 8 Sessioni',
                        icon: 'fas fa-star',
                        description: '8 sessioni di 1 ora ciascuna',
                        price: 'CHF 480'
                    }
                ],
                features: [
                    'Approccio personalizzato',
                    'Sessione di scoperta di 30 min inclusa',
                    'Supporto di follow-up',
                    'Pianificazione flessibile',
                    'Monitoraggio dei progressi'
                ],
                buttonText: 'Prenota la Tua Sessione',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Richiesta Coaching 1:1',
                flyerDownload: 'images/Flyer_MindfulnessPaths.png'
            },
            'retreat': {
                title: 'Ritiri di Mindfulness',
                description: 'Scappa dal rumore e riconnettiti con te stesso. Unisciti a uno dei miei ritiri di mindfulness per piccoli gruppi nei dintorni tranquilli di Berna. Questi ritiri di fine settimana o di più giorni offrono spazio per riposo profondo, meditazione guidata, movimento consapevole e tempo nella natura, così torni rinfrescato e ispirato.',
                pricing: [
                    {
                        title: 'Ritiro di Gruppo (2 persone)',
                        icon: 'fas fa-users',
                        description: 'Esperienza di ritiro condivisa per 2 persone',
                        price: 'CHF 250 a persona'
                    },
                    {
                        title: 'Ritiro Privato (1 persona)',
                        icon: 'fas fa-user-friends',
                        description: 'Esperienza di ritiro individuale',
                        price: 'CHF 300 a persona'
                    }
                ],
                features: [
                    'Pasti vegetariani inclusi',
                    'Alloggio confortevole',
                    'Sessioni di meditazione guidata',
                    'Classi di movimento consapevole',
                    'Passeggiate e attività nella natura'
                ],
                buttonText: 'Prenota il Tuo Ritiro',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Prenotazione Ritiro',
                flyerDownload: 'images/Flyer_Retreat.png'
            },
            'work': {
                title: 'Mindfulness al Lavoro',
                description: 'Migliora il benessere, la concentrazione e la collaborazione del tuo team. I miei workshop di mindfulness su misura e le sessioni aziendali portano chiarezza e calma sul posto di lavoro. Aiuta il tuo team a ridurre lo stress, gestire il cambiamento e migliorare l\'intelligenza emotiva, proprio nel cuore della tua organizzazione.',
                pricing: [
                    {
                        title: 'Workshop (2 ore)',
                        icon: 'fas fa-chalkboard-teacher',
                        description: 'Workshop di 2 ore per fino a 15 persone',
                        price: 'CHF 400'
                    },
                    {
                        title: 'Programma (8 sessioni)',
                        icon: 'fas fa-calendar-alt',
                        description: '8 sessioni di 1 ora ciascuna per fino a 10 persone',
                        price: 'CHF 2,500'
                    }
                ],
                features: [
                    'Su misura per la tua organizzazione',
                    'Tecniche di riduzione dello stress',
                    'Esercizi di team building',
                    'Sviluppo della leadership',
                    'Supporto continuo'
                ],
                buttonText: 'Contatta per Dettagli',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Mindfulness sul Lavoro',
                flyerDownload: 'images/Flyer_MindfulnessAtWork.png'
            },
            'yoga': {
                title: 'Yoga e Respirazione',
                description: 'Rallenta, ammorbidisci e respira. Lo yoga e la respirazione sono potenti alleati sul percorso verso la mindfulness. In queste sessioni, combiniamo movimento dolce e consapevole con tecniche di respirazione guidate per aiutarti a rilasciare lo stress, calmare la mente e tornare al tuo centro interiore.',
                pricing: [
                    {
                        title: 'Sessione Privata',
                        icon: 'fas fa-user',
                        description: 'Sessione privata di yoga e respirazione di 1 ora',
                        price: 'CHF 40'
                    },
                    {
                        title: 'Sessione di Gruppo',
                        icon: 'fas fa-users',
                        description: 'Sessione di gruppo di 1 ora per fino a 10 persone',
                        price: 'CHF 25 a persona'
                    }
                ],
                features: [
                    'Movimento dolce',
                    'Tecniche di respirazione',
                    'Riduzione dello stress',
                    'Connessione mente-corpo',
                    'Tutti i livelli sono benvenuti'
                ],
                buttonText: 'Prenota la Tua Sessione',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Sessione Yoga'
            },
            'underwater': {
                title: 'Mindfulness Subacquea',
                description: 'Sperimenta la mindfulness in un ambiente subacqueo unico. Connettiti con il mondo sottomarino sereno mentre pratichi tecniche di mindfulness. Questo approccio innovativo combina gli effetti calmanti dell\'acqua con le pratiche tradizionali di mindfulness, creando un\'esperienza davvero immersiva e trasformativa.',
                pricing: [
                    {
                        title: 'Sessione Subacquea',
                        icon: 'fas fa-water',
                        description: 'Esperienza di mindfulness subacquea guidata',
                        price: 'Contatta per il Prezzo'
                    }
                ],
                features: [
                    'Collaborazione con Athelas Diving',
                    'Ambiente subacqueo unico',
                    'Guida subacquea professionale',
                    'Istruzione di mindfulness',
                    'Attrezzatura di sicurezza fornita'
                ],
                buttonText: 'Contatta per Dettagli',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Mindfulness Subacquea'
            },
            'ayurveda': {
                title: 'Benessere Ayurvedico',
                description: 'Scopri l\'antica saggezza della guarigione ayurvedica. In arrivo! Esplora l\'approccio olistico al benessere attraverso l\'Ayurveda, il sistema tradizionale indiano di medicina. Scopri la tua costituzione unica e come bilanciare mente, corpo e spirito attraverso pratiche naturali e aggiustamenti dello stile di vita.',
                pricing: [
                    {
                        title: 'Consultazione Ayurvedica',
                        icon: 'fas fa-leaf',
                        description: 'Consultazione di benessere personalizzata',
                        price: 'In Arrivo'
                    }
                ],
                features: [
                    'Valutazione della costituzione',
                    'Raccomandazioni sullo stile di vita',
                    'Pratiche di guarigione naturali',
                    'Approccio olistico al benessere',
                    'Supporto continuo'
                ],
                buttonText: 'Resta Aggiornato',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Interesse Ayurveda'
            },
            'ayurveda-main': {
                title: 'Servizi Ayurvedici',
                description: 'Scopri l\'antica saggezza della guarigione ayurvedica. Il nostro approccio olistico al benessere attraverso l\'Ayurveda offre consultazioni personalizzate, massaggi terapeutici e guida nutrizionale su misura per la tua costituzione unica.',
                pricing: [
                    {
                        title: 'Consultazione Ayurvedica',
                        icon: 'fas fa-user-md',
                        description: 'Consultazione di benessere personalizzata per determinare il tuo dosha e creare un piano di benessere personalizzato',
                        price: 'Contatta per il Prezzo'
                    },
                    {
                        title: 'Massaggi Ayurvedici',
                        icon: 'fas fa-spa',
                        description: 'Massaggi terapeutici utilizzando tecniche e oli ayurvedici tradizionali',
                        price: 'Contatta per il Prezzo'
                    },
                    {
                        title: 'Nutrizione Ayurvedica',
                        icon: 'fas fa-utensils',
                        description: 'Raccomandazioni dietetiche personalizzate basate sul tuo dosha e stile di vita',
                        price: 'Contatta per il Prezzo'
                    }
                ],
                features: [
                    'Valutazione dosha personalizzata',
                    'Pratiche ayurvediche tradizionali',
                    'Approccio olistico al benessere',
                    'Metodi di guarigione naturali',
                    'Supporto e guida continui'
                ],
                buttonText: 'Prenota una Consultazione',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Richiesta Servizi Ayurvedici'
            },
            'mindfulness-main': {
                title: 'Servizi di Mindfulness',
                description: 'Coltiva la presenza, riduci lo stress e migliora il benessere attraverso pratiche di mindfulness personalizzate. I nostri servizi sono progettati per individui, ambienti aziendali ed esperienze subacquee uniche.',
                pricing: [
                    {
                        title: 'Sessione Mindfulness 1:1',
                        icon: 'fas fa-user',
                        description: 'Sessione di coaching mindfulness personalizzata uno-a-uno',
                        price: 'Contatta per il Prezzo'
                    },
                    {
                        title: 'Mindfulness Aziendale',
                        icon: 'fas fa-briefcase',
                        description: 'Workshop e programmi di mindfulness su misura per la tua organizzazione',
                        price: 'Contatta per il Prezzo'
                    },
                    {
                        title: 'Mindfulness Subacquea',
                        icon: 'fas fa-water',
                        description: 'Esperienza di mindfulness subacquea unica in collaborazione con athelas-diving.com',
                        price: 'Contatta per il Prezzo'
                    }
                ],
                features: [
                    'Approccio personalizzato',
                    'Tecniche di riduzione dello stress',
                    'Focus e chiarezza migliorati',
                    'Regolazione emotiva',
                    'Disponibile in più lingue'
                ],
                buttonText: 'Prenota una Sessione',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Richiesta Servizi Mindfulness'
            },
            'yoga-main': {
                title: 'Servizi Yoga',
                description: 'Unisci mente, corpo e spirito attraverso movimento dolce e respirazione. Sperimenta sessioni private personalizzate o unisciti a classi di gruppo progettate per tutti i livelli.',
                pricing: [
                    {
                        title: 'Sessione Yoga Privata',
                        icon: 'fas fa-user',
                        description: 'Sessione yoga personalizzata uno-a-uno su misura per le tue esigenze',
                        price: 'Contatta per il Prezzo'
                    },
                    {
                        title: 'Sessione Yoga di Gruppo',
                        icon: 'fas fa-users',
                        description: 'Classi yoga di gruppo per tutti i livelli in un ambiente di supporto',
                        price: 'Contatta per il Prezzo'
                    }
                ],
                features: [
                    'Pratiche di movimento dolce',
                    'Tecniche di respirazione (pranayama)',
                    'Connessione mente-corpo',
                    'Tutti i livelli sono benvenuti',
                    'Guida personalizzata'
                ],
                buttonText: 'Prenota una Sessione',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Richiesta Servizi Yoga'
            },
            'ayurveda-consultation': {
                title: 'Consultazione Ayurvedica',
                description: 'Scopri la tua costituzione unica (dosha) e ricevi raccomandazioni personalizzate per dieta, stile di vita, erbe e routine quotidiane per ripristinare l\'equilibrio e migliorare il tuo benessere. Questa consultazione completa include analisi del dosha, valutazione della salute e un piano di benessere personalizzato.',
                pricing: [
                    {
                        title: 'Consultazione Iniziale',
                        icon: 'fas fa-user-md',
                        description: 'Consultazione completa di 90 minuti inclusa analisi del dosha e piano di benessere personalizzato',
                        price: 'Contatta per il Prezzo'
                    },
                    {
                        title: 'Consultazione di Follow-up',
                        icon: 'fas fa-redo',
                        description: 'Sessione di follow-up di 60 minuti per monitorare i progressi e adattare le raccomandazioni',
                        price: 'Contatta per il Prezzo'
                    }
                ],
                features: [
                    'Analisi dettagliata del dosha (Vata, Pitta, Kapha)',
                    'Identificazione degli squilibri attuali',
                    'Diagnosi del polso e della lingua',
                    'Revisione completa della storia della salute',
                    'Raccomandazioni personalizzate per dieta, stile di vita ed erbe'
                ],
                buttonText: 'Prenota una Consultazione',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Consultazione Ayurvedica'
            },
            'ayurveda-massages': {
                title: 'Massaggi Ayurvedici',
                description: 'Sperimenta massaggi terapeutici utilizzando tecniche e oli ayurvedici tradizionali. Questi trattamenti aiutano a bilanciare i dosha, migliorare la circolazione, rilasciare tossine e promuovere rilassamento profondo e guarigione.',
                pricing: [
                    {
                        title: 'Abhyanga (Massaggio con Olio per tutto il Corpo)',
                        icon: 'fas fa-spa',
                        description: 'Massaggio tradizionale per tutto il corpo con oli medicati caldi',
                        price: 'Contatta per il Prezzo'
                    },
                    {
                        title: 'Shirodhara (Trattamento della Testa)',
                        icon: 'fas fa-head-side-virus',
                        description: 'Trattamento terapeutico con flusso di olio per la fronte e il cuoio capelluto',
                        price: 'Contatta per il Prezzo'
                    },
                    {
                        title: 'Pacchetto Massaggi',
                        icon: 'fas fa-gift',
                        description: 'Serie di trattamenti per risultati ottimali',
                        price: 'Contatta per il Prezzo'
                    }
                ],
                features: [
                    'Selezione di oli specifica per dosha',
                    'Tecniche ayurvediche tradizionali',
                    'Rilassamento profondo e riduzione dello stress',
                    'Circolazione e disintossicazione migliorate',
                    'Flusso energetico migliorato'
                ],
                buttonText: 'Prenota un Trattamento',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Massaggi Ayurvedici'
            },
            'ayurveda-nutrition': {
                title: 'Nutrizione Ayurvedica',
                description: 'Ricevi raccomandazioni dietetiche personalizzate su misura per il tuo tipo di dosha e le tue esigenze individuali. Scopri quali alimenti supportano la tua costituzione, il momento ottimale dei pasti, le combinazioni alimentari e come mangiare in armonia con i ritmi della natura.',
                pricing: [
                    {
                        title: 'Consultazione Nutrizionale',
                        icon: 'fas fa-utensils',
                        description: 'Sessione nutrizionale personalizzata di 60 minuti con guida alla pianificazione dei pasti',
                        price: 'Contatta per il Prezzo'
                    },
                    {
                        title: 'Pacchetto Nutrizionale 3 Sessioni',
                        icon: 'fas fa-calendar-check',
                        description: 'Tre sessioni inclusa consultazione iniziale e follow-up',
                        price: 'Contatta per il Prezzo'
                    }
                ],
                features: [
                    'Raccomandazioni alimentari specifiche per dosha',
                    'Guida al momento dei pasti e alle routine',
                    'Principi di combinazione alimentare',
                    'Raccomandazioni alimentari stagionali',
                    'Esempi di piano alimentare personalizzato'
                ],
                buttonText: 'Prenota una Consultazione',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Nutrizione Ayurvedica'
            },
            'mindfulness-1to1': {
                title: 'Sessioni Mindfulness 1:1',
                description: 'Entra in una vita più equilibrata con una guida personale. Che tu sia nuovo alla mindfulness o stia approfondendo una pratica esistente, le mie sessioni di coaching individuali sono progettate intorno ai tuoi obiettivi unici e al ritmo della tua vita. Insieme, coltiveremo presenza, resilienza e consapevolezza di sé - un respiro consapevole alla volta.',
                pricing: [
                    {
                        title: 'Sessione Individuale',
                        icon: 'fas fa-user',
                        description: 'Sessione di mindfulness personalizzata di 1 ora',
                        price: 'CHF 70'
                    },
                    {
                        title: 'Pacchetto 4 Sessioni',
                        icon: 'fas fa-calendar-check',
                        description: '4 sessioni di 1 ora ciascuna',
                        price: 'CHF 280'
                    },
                    {
                        title: 'Pacchetto 8 Sessioni',
                        icon: 'fas fa-star',
                        description: '8 sessioni di 1 ora ciascuna',
                        price: 'CHF 480'
                    }
                ],
                features: [
                    'Approccio personalizzato',
                    'Sessione di scoperta di 30 min inclusa',
                    'Supporto di follow-up',
                    'Pianificazione flessibile',
                    'Monitoraggio dei progressi'
                ],
                buttonText: 'Prenota la Tua Sessione',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Richiesta Mindfulness 1:1',
                flyerDownload: 'images/Flyer_MindfulnessPaths.png'
            },
            'mindfulness-corporate': {
                title: 'Mindfulness Aziendale',
                description: 'Migliora il benessere, la concentrazione e la collaborazione del tuo team. I miei workshop di mindfulness su misura e le sessioni aziendali portano chiarezza e calma sul posto di lavoro. Aiuta il tuo team a ridurre lo stress, gestire il cambiamento e migliorare l\'intelligenza emotiva, proprio nel cuore della tua organizzazione.',
                pricing: [
                    {
                        title: 'Workshop (2 ore)',
                        icon: 'fas fa-chalkboard-teacher',
                        description: 'Workshop di 2 ore per fino a 15 persone',
                        price: 'CHF 400'
                    },
                    {
                        title: 'Programma (8 sessioni)',
                        icon: 'fas fa-calendar-alt',
                        description: '8 sessioni di 1 ora ciascuna per fino a 10 persone',
                        price: 'CHF 2,500'
                    }
                ],
                features: [
                    'Su misura per la tua organizzazione',
                    'Tecniche di riduzione dello stress',
                    'Esercizi di team building',
                    'Sviluppo della leadership',
                    'Supporto continuo'
                ],
                buttonText: 'Contatta per Dettagli',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Mindfulness Aziendale',
                flyerDownload: 'images/Flyer_MindfulnessAtWork.png'
            },
            'mindfulness-underwater': {
                title: 'Mindfulness Subacquea',
                description: 'Sperimenta la mindfulness in un ambiente subacqueo unico. Connettiti con il mondo sottomarino sereno mentre pratichi tecniche di mindfulness. Questo approccio innovativo combina gli effetti calmanti dell\'acqua con le pratiche tradizionali di mindfulness, creando un\'esperienza davvero immersiva e trasformativa.',
                pricing: [
                    {
                        title: 'Sessione Subacquea',
                        icon: 'fas fa-water',
                        description: 'Esperienza di mindfulness subacquea guidata',
                        price: 'Contatta per il Prezzo'
                    }
                ],
                features: [
                    'Collaborazione con Athelas Diving',
                    'Ambiente subacqueo unico',
                    'Guida subacquea professionale',
                    'Istruzione di mindfulness',
                    'Attrezzatura di sicurezza fornita'
                ],
                buttonText: 'Contatta per Dettagli',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Mindfulness Subacquea'
            },
            'private-yoga': {
                title: 'Yoga Privato',
                description: 'Sperimenta sessioni yoga personalizzate uno-a-uno su misura per le tue esigenze, obiettivi e livello di esperienza unici. Ricevi attenzione e guida individuali per approfondire la tua pratica al tuo ritmo. Rallenta, ammorbidisci e respira. Lo yoga e la respirazione sono potenti alleati sul percorso verso la mindfulness.',
                pricing: [
                    {
                        title: 'Sessione Privata',
                        icon: 'fas fa-user',
                        description: 'Sessione privata di yoga e respirazione di 1 ora',
                        price: 'CHF 40'
                    }
                ],
                features: [
                    'Approccio personalizzato',
                    'Movimento dolce',
                    'Tecniche di respirazione',
                    'Riduzione dello stress',
                    'Connessione mente-corpo',
                    'Tutti i livelli sono benvenuti'
                ],
                buttonText: 'Prenota la Tua Sessione',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Sessione Yoga Privata'
            },
            'group-yoga': {
                title: 'Yoga di Gruppo',
                description: 'Unisciti a una comunità di supporto nelle sessioni yoga di gruppo. Pratica insieme, condividi energia e cresci in un ambiente accogliente che favorisce la connessione e la mindfulness collettiva. Sperimenta movimento dolce e consapevole con tecniche di respirazione guidate per aiutarti a rilasciare lo stress, calmare la mente e tornare al tuo centro interiore.',
                pricing: [
                    {
                        title: 'Sessione di Gruppo',
                        icon: 'fas fa-users',
                        description: 'Sessione di gruppo di 1 ora per fino a 10 persone',
                        price: 'CHF 25 a persona'
                    }
                ],
                features: [
                    'Comunità di supporto',
                    'Movimento dolce',
                    'Tecniche di respirazione',
                    'Riduzione dello stress',
                    'Connessione mente-corpo',
                    'Tutti i livelli sono benvenuti'
                ],
                buttonText: 'Prenota la Tua Sessione',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Sessione Yoga di Gruppo'
            }
        },
        'fr': {
            'coaching': {
                title: 'Coaching Mindfulness 1:1',
                description: 'Entrez dans une vie plus équilibrée avec un accompagnement personnel. Que vous soyez nouveau dans la pleine conscience ou que vous approfondissiez une pratique existante, mes séances de coaching individuelles sont conçues autour de vos objectifs uniques et du rythme de votre vie. Ensemble, nous cultiverons la présence, la résilience et la conscience de soi - une respiration consciente à la fois.',
                pricing: [
                    {
                        title: 'Séance Individuelle',
                        icon: 'fas fa-user',
                        description: 'Séance de pleine conscience personnalisée d\'1 heure',
                        price: 'CHF 70'
                    },
                    {
                        title: 'Forfait 4 Séances',
                        icon: 'fas fa-calendar-check',
                        description: '4 séances d\'1 heure chacune',
                        price: 'CHF 280'
                    },
                    {
                        title: 'Forfait 8 Séances',
                        icon: 'fas fa-star',
                        description: '8 séances d\'1 heure chacune',
                        price: 'CHF 480'
                    }
                ],
                features: [
                    'Approche personnalisée',
                    'Séance de découverte de 30 min incluse',
                    'Suivi et soutien',
                    'Planification flexible',
                    'Suivi des progrès'
                ],
                buttonText: 'Réservez Votre Séance',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Demande de Coaching 1:1',
                flyerDownload: 'images/Flyer_MindfulnessPaths.png'
            },
            'retreat': {
                title: 'Retraites de Pleine Conscience',
                description: 'Échappez au bruit et reconnectez-vous avec vous-même. Rejoignez l\'une de mes retraites de pleine conscience en petit groupe dans les environs tranquilles de Berne. Ces retraites de week-end ou de plusieurs jours offrent un espace pour un repos profond, la méditation guidée, le mouvement conscient et du temps dans la nature, afin que vous reveniez rafraîchi et inspiré.',
                pricing: [
                    {
                        title: 'Retraite de Groupe (2 personnes)',
                        icon: 'fas fa-users',
                        description: 'Expérience de retraite partagée pour 2 personnes',
                        price: 'CHF 250 par personne'
                    },
                    {
                        title: 'Retraite Privée (1 personne)',
                        icon: 'fas fa-user-friends',
                        description: 'Expérience de retraite individuelle',
                        price: 'CHF 300 par personne'
                    }
                ],
                features: [
                    'Repas végétariens inclus',
                    'Hébergement confortable',
                    'Séances de méditation guidée',
                    'Cours de mouvement conscient',
                    'Promenades et activités dans la nature'
                ],
                buttonText: 'Réservez Votre Retraite',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Réservation de Retraite',
                flyerDownload: 'images/Flyer_Retreat.png'
            },
            'work': {
                title: 'Pleine Conscience au Travail',
                description: 'Améliorez le bien-être, la concentration et la collaboration de votre équipe. Mes ateliers de pleine conscience sur mesure et mes séances d\'entreprise apportent clarté et calme sur le lieu de travail. Aidez votre équipe à réduire le stress, gérer le changement et améliorer l\'intelligence émotionnelle, au cœur même de votre organisation.',
                pricing: [
                    {
                        title: 'Atelier (2 heures)',
                        icon: 'fas fa-chalkboard-teacher',
                        description: 'Atelier de 2 heures pour jusqu\'à 15 personnes',
                        price: 'CHF 400'
                    },
                    {
                        title: 'Programme (8 séances)',
                        icon: 'fas fa-calendar-alt',
                        description: '8 séances d\'1 heure chacune pour jusqu\'à 10 personnes',
                        price: 'CHF 2,500'
                    }
                ],
                features: [
                    'Adapté à votre organisation',
                    'Techniques de réduction du stress',
                    'Exercices de renforcement d\'équipe',
                    'Développement du leadership',
                    'Soutien continu'
                ],
                buttonText: 'Contactez pour Détails',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Pleine Conscience au Travail',
                flyerDownload: 'images/Flyer_MindfulnessAtWork.png'
            },
            'yoga': {
                title: 'Yoga et Respiration',
                description: 'Ralentissez, adoucissez et respirez. Le yoga et la respiration sont de puissants alliés sur le chemin de la pleine conscience. Dans ces séances, nous combinons mouvement doux et conscient avec des techniques de respiration guidées pour vous aider à libérer le stress, calmer l\'esprit et retourner à votre centre intérieur.',
                pricing: [
                    {
                        title: 'Séance Privée',
                        icon: 'fas fa-user',
                        description: 'Séance privée de yoga et respiration d\'1 heure',
                        price: 'CHF 40'
                    },
                    {
                        title: 'Séance de Groupe',
                        icon: 'fas fa-users',
                        description: 'Séance de groupe d\'1 heure pour jusqu\'à 10 personnes',
                        price: 'CHF 25 par personne'
                    }
                ],
                features: [
                    'Mouvement doux',
                    'Techniques de respiration',
                    'Réduction du stress',
                    'Connexion corps-esprit',
                    'Tous les niveaux sont les bienvenus'
                ],
                buttonText: 'Réservez Votre Séance',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Séance de Yoga'
            },
            'underwater': {
                title: 'Pleine Conscience Sous-Marine',
                description: 'Vivez la pleine conscience dans un environnement sous-marin unique. Connectez-vous avec le monde sous-marin serein tout en pratiquant des techniques de pleine conscience. Cette approche innovante combine les effets apaisants de l\'eau avec les pratiques traditionnelles de pleine conscience, créant une expérience vraiment immersive et transformative.',
                pricing: [
                    {
                        title: 'Séance Sous-Marine',
                        icon: 'fas fa-water',
                        description: 'Expérience de pleine conscience sous-marine guidée',
                        price: 'Contactez pour le Prix'
                    }
                ],
                features: [
                    'Collaboration avec Athelas Diving',
                    'Environnement sous-marin unique',
                    'Guidance de plongée professionnelle',
                    'Instruction de pleine conscience',
                    'Équipement de sécurité fourni'
                ],
                buttonText: 'Contactez pour Détails',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Pleine Conscience Sous-Marine'
            },
            'ayurveda': {
                title: 'Bien-être Ayurvedique',
                description: 'Découvrez la sagesse ancienne de la guérison ayurvédique. Bientôt disponible ! Explorez l\'approche holistique du bien-être à travers l\'Ayurveda, le système traditionnel indien de médecine. Découvrez votre constitution unique et comment équilibrer l\'esprit, le corps et l\'âme grâce à des pratiques naturelles et des ajustements du mode de vie.',
                pricing: [
                    {
                        title: 'Consultation Ayurvedique',
                        icon: 'fas fa-leaf',
                        description: 'Consultation de bien-être personnalisée',
                        price: 'Bientôt Disponible'
                    }
                ],
                features: [
                    'Évaluation de la constitution',
                    'Recommandations de mode de vie',
                    'Pratiques de guérison naturelles',
                    'Approche holistique du bien-être',
                    'Soutien continu'
                ],
                buttonText: 'Restez Informé',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Intérêt pour l\'Ayurveda'
            },
            'ayurveda-main': {
                title: 'Services Ayurvediques',
                description: 'Découvrez la sagesse ancienne de la guérison ayurvédique. Notre approche holistique du bien-être à travers l\'Ayurveda offre des consultations personnalisées, des massages thérapeutiques et des conseils nutritionnels adaptés à votre constitution unique.',
                pricing: [
                    {
                        title: 'Consultation Ayurvedique',
                        icon: 'fas fa-user-md',
                        description: 'Consultation de bien-être personnalisée pour déterminer votre dosha et créer un plan de bien-être personnalisé',
                        price: 'Contactez pour le Prix'
                    },
                    {
                        title: 'Massages Ayurvediques',
                        icon: 'fas fa-spa',
                        description: 'Massages thérapeutiques utilisant des techniques et huiles ayurvédiques traditionnelles',
                        price: 'Contactez pour le Prix'
                    },
                    {
                        title: 'Nutrition Ayurvedique',
                        icon: 'fas fa-utensils',
                        description: 'Recommandations diététiques personnalisées basées sur votre dosha et votre mode de vie',
                        price: 'Contactez pour le Prix'
                    }
                ],
                features: [
                    'Évaluation dosha personnalisée',
                    'Pratiques ayurvédiques traditionnelles',
                    'Approche holistique du bien-être',
                    'Méthodes de guérison naturelles',
                    'Soutien et guidance continus'
                ],
                buttonText: 'Réservez une Consultation',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Demande de Services Ayurvediques'
            },
            'mindfulness-main': {
                title: 'Services de Pleine Conscience',
                description: 'Cultivez la présence, réduisez le stress et améliorez le bien-être grâce à des pratiques de pleine conscience personnalisées. Nos services sont conçus pour les individus, les environnements d\'entreprise et les expériences sous-marines uniques.',
                pricing: [
                    {
                        title: 'Séance de Pleine Conscience 1:1',
                        icon: 'fas fa-user',
                        description: 'Séance de coaching de pleine conscience personnalisée en tête-à-tête',
                        price: 'Contactez pour le Prix'
                    },
                    {
                        title: 'Pleine Conscience d\'Entreprise',
                        icon: 'fas fa-briefcase',
                        description: 'Ateliers et programmes de pleine conscience adaptés à votre organisation',
                        price: 'Contactez pour le Prix'
                    },
                    {
                        title: 'Pleine Conscience Sous-Marine',
                        icon: 'fas fa-water',
                        description: 'Expérience unique de pleine conscience sous-marine en collaboration avec athelas-diving.com',
                        price: 'Contactez pour le Prix'
                    }
                ],
                features: [
                    'Approche personnalisée',
                    'Techniques de réduction du stress',
                    'Focus et clarté améliorés',
                    'Régulation émotionnelle',
                    'Disponible en plusieurs langues'
                ],
                buttonText: 'Réservez une Séance',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Demande de Services de Pleine Conscience'
            },
            'yoga-main': {
                title: 'Services Yoga',
                description: 'Unissez l\'esprit, le corps et l\'âme grâce au mouvement doux et à la respiration. Vivez des séances privées personnalisées ou rejoignez des cours de groupe conçus pour tous les niveaux.',
                pricing: [
                    {
                        title: 'Séance Yoga Privée',
                        icon: 'fas fa-user',
                        description: 'Séance yoga personnalisée en tête-à-tête adaptée à vos besoins',
                        price: 'Contactez pour le Prix'
                    },
                    {
                        title: 'Séance Yoga de Groupe',
                        icon: 'fas fa-users',
                        description: 'Cours de yoga de groupe pour tous les niveaux dans un environnement de soutien',
                        price: 'Contactez pour le Prix'
                    }
                ],
                features: [
                    'Pratiques de mouvement doux',
                    'Techniques de respiration (pranayama)',
                    'Connexion corps-esprit',
                    'Tous les niveaux sont les bienvenus',
                    'Guidance personnalisée'
                ],
                buttonText: 'Réservez une Séance',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Demande de Services Yoga'
            },
            'ayurveda-consultation': {
                title: 'Consultation Ayurvedique',
                description: 'Découvrez votre constitution unique (dosha) et recevez des recommandations personnalisées pour l\'alimentation, le mode de vie, les herbes et les routines quotidiennes pour rétablir l\'équilibre et améliorer votre bien-être. Cette consultation complète comprend l\'analyse du dosha, l\'évaluation de la santé et un plan de bien-être personnalisé.',
                pricing: [
                    {
                        title: 'Consultation Initiale',
                        icon: 'fas fa-user-md',
                        description: 'Consultation complète de 90 minutes incluant l\'analyse du dosha et un plan de bien-être personnalisé',
                        price: 'Contactez pour le Prix'
                    },
                    {
                        title: 'Consultation de Suivi',
                        icon: 'fas fa-redo',
                        description: 'Séance de suivi de 60 minutes pour suivre les progrès et ajuster les recommandations',
                        price: 'Contactez pour le Prix'
                    }
                ],
                features: [
                    'Analyse détaillée du dosha (Vata, Pitta, Kapha)',
                    'Identification des déséquilibres actuels',
                    'Diagnostic du pouls et de la langue',
                    'Examen complet des antécédents de santé',
                    'Recommandations personnalisées pour l\'alimentation, le mode de vie et les herbes'
                ],
                buttonText: 'Réservez une Consultation',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Consultation Ayurvedique'
            },
            'ayurveda-massages': {
                title: 'Massages Ayurvediques',
                description: 'Vivez des massages thérapeutiques utilisant des techniques et huiles ayurvédiques traditionnelles. Ces traitements aident à équilibrer les doshas, améliorer la circulation, libérer les toxines et promouvoir une relaxation profonde et la guérison.',
                pricing: [
                    {
                        title: 'Abhyanga (Massage à l\'Huile du Corps Entier)',
                        icon: 'fas fa-spa',
                        description: 'Massage traditionnel du corps entier avec des huiles médicinales chaudes',
                        price: 'Contactez pour le Prix'
                    },
                    {
                        title: 'Shirodhara (Traitement de la Tête)',
                        icon: 'fas fa-head-side-virus',
                        description: 'Traitement thérapeutique avec flux d\'huile pour le front et le cuir chevelu',
                        price: 'Contactez pour le Prix'
                    },
                    {
                        title: 'Forfait Massages',
                        icon: 'fas fa-gift',
                        description: 'Série de traitements pour des résultats optimaux',
                        price: 'Contactez pour le Prix'
                    }
                ],
                features: [
                    'Sélection d\'huiles spécifique au dosha',
                    'Techniques ayurvédiques traditionnelles',
                    'Relaxation profonde et réduction du stress',
                    'Circulation et détoxification améliorées',
                    'Flux d\'énergie amélioré'
                ],
                buttonText: 'Réservez un Traitement',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Massages Ayurvediques'
            },
            'ayurveda-nutrition': {
                title: 'Nutrition Ayurvedique',
                description: 'Recevez des recommandations diététiques personnalisées adaptées à votre type de dosha et à vos besoins individuels. Apprenez quels aliments soutiennent votre constitution, le moment optimal des repas, les combinaisons alimentaires et comment manger en harmonie avec les rythmes de la nature.',
                pricing: [
                    {
                        title: 'Consultation Nutritionnelle',
                        icon: 'fas fa-utensils',
                        description: 'Séance nutritionnelle personnalisée de 60 minutes avec conseils pour la planification des repas',
                        price: 'Contactez pour le Prix'
                    },
                    {
                        title: 'Forfait Nutrition 3 Séances',
                        icon: 'fas fa-calendar-check',
                        description: 'Trois séances incluant la consultation initiale et les suivis',
                        price: 'Contactez pour le Prix'
                    }
                ],
                features: [
                    'Recommandations alimentaires spécifiques au dosha',
                    'Conseils sur le moment des repas et les routines',
                    'Principes de combinaison alimentaire',
                    'Recommandations alimentaires saisonnières',
                    'Exemples de plan de repas personnalisé'
                ],
                buttonText: 'Réservez une Consultation',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Nutrition Ayurvedique'
            },
            'mindfulness-1to1': {
                title: 'Séances de Pleine Conscience 1:1',
                description: 'Entrez dans une vie plus équilibrée avec un accompagnement personnel. Que vous soyez nouveau dans la pleine conscience ou que vous approfondissiez une pratique existante, mes séances de coaching individuelles sont conçues autour de vos objectifs uniques et du rythme de votre vie. Ensemble, nous cultiverons la présence, la résilience et la conscience de soi - une respiration consciente à la fois.',
                pricing: [
                    {
                        title: 'Séance Individuelle',
                        icon: 'fas fa-user',
                        description: 'Séance de pleine conscience personnalisée d\'1 heure',
                        price: 'CHF 70'
                    },
                    {
                        title: 'Forfait 4 Séances',
                        icon: 'fas fa-calendar-check',
                        description: '4 séances d\'1 heure chacune',
                        price: 'CHF 280'
                    },
                    {
                        title: 'Forfait 8 Séances',
                        icon: 'fas fa-star',
                        description: '8 séances d\'1 heure chacune',
                        price: 'CHF 480'
                    }
                ],
                features: [
                    'Approche personnalisée',
                    'Séance de découverte de 30 min incluse',
                    'Suivi et soutien',
                    'Planification flexible',
                    'Suivi des progrès'
                ],
                buttonText: 'Réservez Votre Séance',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Demande de Pleine Conscience 1:1',
                flyerDownload: 'images/Flyer_MindfulnessPaths.png'
            },
            'mindfulness-corporate': {
                title: 'Pleine Conscience d\'Entreprise',
                description: 'Améliorez le bien-être, la concentration et la collaboration de votre équipe. Mes ateliers de pleine conscience sur mesure et mes séances d\'entreprise apportent clarté et calme sur le lieu de travail. Aidez votre équipe à réduire le stress, gérer le changement et améliorer l\'intelligence émotionnelle, au cœur même de votre organisation.',
                pricing: [
                    {
                        title: 'Atelier (2 heures)',
                        icon: 'fas fa-chalkboard-teacher',
                        description: 'Atelier de 2 heures pour jusqu\'à 15 personnes',
                        price: 'CHF 400'
                    },
                    {
                        title: 'Programme (8 séances)',
                        icon: 'fas fa-calendar-alt',
                        description: '8 séances d\'1 heure chacune pour jusqu\'à 10 personnes',
                        price: 'CHF 2,500'
                    }
                ],
                features: [
                    'Adapté à votre organisation',
                    'Techniques de réduction du stress',
                    'Exercices de renforcement d\'équipe',
                    'Développement du leadership',
                    'Soutien continu'
                ],
                buttonText: 'Contactez pour Détails',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Pleine Conscience d\'Entreprise',
                flyerDownload: 'images/Flyer_MindfulnessAtWork.png'
            },
            'mindfulness-underwater': {
                title: 'Pleine Conscience Sous-Marine',
                description: 'Vivez la pleine conscience dans un environnement sous-marin unique. Connectez-vous avec le monde sous-marin serein tout en pratiquant des techniques de pleine conscience. Cette approche innovante combine les effets apaisants de l\'eau avec les pratiques traditionnelles de pleine conscience, créant une expérience vraiment immersive et transformative.',
                pricing: [
                    {
                        title: 'Séance Sous-Marine',
                        icon: 'fas fa-water',
                        description: 'Expérience de pleine conscience sous-marine guidée',
                        price: 'Contactez pour le Prix'
                    }
                ],
                features: [
                    'Collaboration avec Athelas Diving',
                    'Environnement sous-marin unique',
                    'Guidance de plongée professionnelle',
                    'Instruction de pleine conscience',
                    'Équipement de sécurité fourni'
                ],
                buttonText: 'Contactez pour Détails',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Pleine Conscience Sous-Marine'
            },
            'private-yoga': {
                title: 'Yoga Privé',
                description: 'Vivez des séances yoga personnalisées en tête-à-tête adaptées à vos besoins, objectifs et niveau d\'expérience uniques. Recevez une attention et des conseils individuels pour approfondir votre pratique à votre rythme. Ralentissez, adoucissez et respirez. Le yoga et la respiration sont de puissants alliés sur le chemin de la pleine conscience.',
                pricing: [
                    {
                        title: 'Séance Privée',
                        icon: 'fas fa-user',
                        description: 'Séance privée de yoga et respiration d\'1 heure',
                        price: 'CHF 40'
                    }
                ],
                features: [
                    'Approche personnalisée',
                    'Mouvement doux',
                    'Techniques de respiration',
                    'Réduction du stress',
                    'Connexion corps-esprit',
                    'Tous les niveaux sont les bienvenus'
                ],
                buttonText: 'Réservez Votre Séance',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Séance de Yoga Privée'
            },
            'group-yoga': {
                title: 'Yoga de Groupe',
                description: 'Rejoignez une communauté de soutien dans les séances yoga de groupe. Pratiquez ensemble, partagez l\'énergie et grandissez dans un environnement accueillant qui favorise la connexion et la pleine conscience collective. Vivez un mouvement doux et conscient avec des techniques de respiration guidées pour vous aider à libérer le stress, calmer l\'esprit et retourner à votre centre intérieur.',
                pricing: [
                    {
                        title: 'Séance de Groupe',
                        icon: 'fas fa-users',
                        description: 'Séance de groupe d\'1 heure pour jusqu\'à 10 personnes',
                        price: 'CHF 25 par personne'
                    }
                ],
                features: [
                    'Communauté de soutien',
                    'Mouvement doux',
                    'Techniques de respiration',
                    'Réduction du stress',
                    'Connexion corps-esprit',
                    'Tous les niveaux sont les bienvenus'
                ],
                buttonText: 'Réservez Votre Séance',
                buttonAction: 'mailto:veronica@oceantoearth.life?subject=Séance de Yoga de Groupe'
            }
        }
    };
    
    // Language labels for modal UI
    const languageLabels = {
        'en': {
            included: 'What\'s Included:',
            downloadFlyer: 'Download Flyer'
        },
        'it': {
            included: 'Cosa Include:',
            downloadFlyer: 'Scarica Volantino'
        },
        'fr': {
            included: 'Ce qui est inclus :',
            downloadFlyer: 'Télécharger le Dépliant'
        }
    };
    
    // Function to generate modal content
    function generateModalContent(serviceType) {
        // Get current language from URL or default to 'en'
        const path = window.location.pathname;
        let currentLang = 'en'; // Default
        if (path.includes('/it/')) currentLang = 'it';
        else if (path.includes('/fr/')) currentLang = 'fr';
        else if (path.includes('/en/')) currentLang = 'en';
        
        // Fallback to 'en' if language data doesn't exist
        const data = (serviceData[currentLang] && serviceData[currentLang][serviceType]) 
            ? serviceData[currentLang][serviceType] 
            : (serviceData['en'] && serviceData['en'][serviceType] ? serviceData['en'][serviceType] : null);
        if (!data) return '';
        
        // Get language-specific labels
        const labels = languageLabels[currentLang] || languageLabels['en'];
        
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
            'ayurveda-nutrition': 'linear-gradient(135deg, #ffd1ff 0%, #fad0c4 100%)',
            'mindfulness-1to1': 'linear-gradient(135deg, #a8c0ff 0%, #b8a9c9 100%)',
            'mindfulness-corporate': 'linear-gradient(135deg, #e8f4f8 0%, #d1e7dd 100%)',
            'mindfulness-underwater': 'linear-gradient(135deg, #a8c0ff 0%, #b8a9c9 100%)',
            'private-yoga': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            'group-yoga': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
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
                    <i class="fas fa-download"></i> ${labels.downloadFlyer}
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
                        <h5>${labels.included}</h5>
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
            if (serviceType) {
                openModal(serviceType);
            }
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

// Flyers sidebar close function
function closeFlyersSidebar() {
    const flyersSidebar = document.getElementById('flyersSidebar');
    const flyersToggleBtn = document.querySelector('.flyers-toggle-btn');
    
    if (flyersSidebar && flyersSidebar.classList.contains('active')) {
        flyersSidebar.classList.remove('active');
        if (flyersToggleBtn) {
            flyersToggleBtn.style.display = 'flex';
        }
    }
}

// Flyers sidebar toggle function
function toggleFlyersSidebar() {
    // Check if we're on a smaller screen (mobile/tablet)
    const isSmallScreen = window.innerWidth <= 1200;
    
    if (isSmallScreen) {
        // Open modal on smaller screens
        toggleFlyersModal();
    } else {
        // Open sidebar on larger screens
        const flyersSidebar = document.getElementById('flyersSidebar');
        const flyersToggleBtn = document.querySelector('.flyers-toggle-btn');
        
        if (flyersSidebar) {
            const isActive = flyersSidebar.classList.contains('active');
            if (isActive) {
                // Closing sidebar - show button
                closeFlyersSidebar();
            } else {
                // Opening sidebar - hide button
                flyersSidebar.classList.add('active');
                if (flyersToggleBtn) {
                    flyersToggleBtn.style.display = 'none';
                }
            }
        }
    }
}

// Flyers modal toggle function
function toggleFlyersModal() {
    const flyersModal = document.getElementById('flyersModal');
    if (flyersModal) {
        const isActive = flyersModal.classList.contains('active');
        if (isActive) {
            closeFlyersModal();
        } else {
            openFlyersModal();
        }
    }
}

// Open flyers modal
function openFlyersModal() {
    const flyersModal = document.getElementById('flyersModal');
    if (flyersModal) {
        flyersModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close flyers modal
function closeFlyersModal() {
    const flyersModal = document.getElementById('flyersModal');
    if (flyersModal) {
        flyersModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close flyers sidebar when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        const flyersSidebar = document.getElementById('flyersSidebar');
        const flyersModal = document.getElementById('flyersModal');
        const flyersToggleBtn = document.querySelector('.flyers-toggle-btn');
        
        // Check if sidebar is active (on larger screens)
        if (flyersSidebar && flyersSidebar.classList.contains('active')) {
            // Check if click is outside the sidebar and not on the toggle button
            const clickedInsideSidebar = flyersSidebar.contains(event.target);
            const clickedOnToggleBtn = flyersToggleBtn && flyersToggleBtn.contains(event.target);
            
            // If clicked outside both sidebar and toggle button, close the sidebar
            if (!clickedInsideSidebar && !clickedOnToggleBtn) {
                closeFlyersSidebar();
            }
        }
        
        // Check if modal is active (on smaller screens)
        if (flyersModal && flyersModal.classList.contains('active')) {
            // Check if click is on the overlay (not on the modal content)
            const clickedOnOverlay = event.target === flyersModal;
            const clickedOnCloseBtn = event.target.closest('.flyers-modal-close');
            
            // If clicked on overlay or close button, close the modal
            if (clickedOnOverlay || clickedOnCloseBtn) {
                closeFlyersModal();
            }
        }
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const flyersModal = document.getElementById('flyersModal');
            if (flyersModal && flyersModal.classList.contains('active')) {
                closeFlyersModal();
            }
        }
    });
});

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