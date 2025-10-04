// Simple tab navigation
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
// Set default active tab
window.onload = () => {
    document.getElementById('home-tab').classList.add('active');
    document.getElementById('home').classList.add('active');
};
