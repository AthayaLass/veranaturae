// Language detection and switching functionality

// Get current language from URL or browser
function getCurrentLanguage() {
    // Check URL path
    const path = window.location.pathname;
    if (path.includes('/it/')) return 'it';
    if (path.includes('/fr/')) return 'fr';
    if (path.includes('/en/')) return 'en';
    
    // Check localStorage
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && ['en', 'it', 'fr'].includes(savedLang)) {
        return savedLang;
    }
    
    // Detect from browser
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0].toLowerCase();
    
    if (langCode === 'it') return 'it';
    if (langCode === 'en') return 'en';
    return 'fr'; // Default to French
}

// Switch language
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

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const currentLang = getCurrentLanguage();
    document.documentElement.lang = currentLang;
});

