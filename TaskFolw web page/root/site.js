// Smooth scroll for navigation and Get Started / Hero buttons
document.querySelectorAll('a[href^="#"], #get-started, #hero-cta').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '#pricing');
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
