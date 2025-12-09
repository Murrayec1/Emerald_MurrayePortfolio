// Simple tab navigation - only target navigation links
const tabs = document.querySelectorAll('nav ul li a');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.getAttribute('href').replace('#', '');
        document.getElementById(target).classList.add('active');
    });
});

// Make sure external links work properly (don't interfere with them)
document.addEventListener('DOMContentLoaded', function() {
    const externalLinks = document.querySelectorAll('a.external-link, a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Allow default behavior for external links
            console.log('External link clicked:', this.href);
            // Force open in new window if blocked
            e.stopPropagation();
        });
    });
});

// Set default active tab
window.onload = () => {
    document.getElementById('home-tab').classList.add('active');
    document.getElementById('home').classList.add('active');
};
