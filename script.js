// Tab navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Get all content sections
    const contentSections = document.querySelectorAll('.content-section');
    
    // Add click event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the target section id from href
            const targetId = this.getAttribute('href').substring(1);
            
            // Hide all content sections
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the target content section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            // Smooth scroll to top of main content
            document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(e) {
        if (e.state && e.state.section) {
            showSection(e.state.section);
        }
    });
    
    // Function to show a specific section
    function showSection(sectionId) {
        // Remove active class from all links and sections
        navLinks.forEach(link => link.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));
        
        // Add active class to the correct link and section
        const targetLink = document.querySelector(`a[href="#${sectionId}"]`);
        const targetSection = document.getElementById(sectionId);
        
        if (targetLink && targetSection) {
            targetLink.classList.add('active');
            targetSection.classList.add('active');
        }
    }
    
    // Set initial state
    const initialSection = window.location.hash ? window.location.hash.substring(1) : 'about';
    history.replaceState({ section: initialSection }, '', `#${initialSection}`);
});
