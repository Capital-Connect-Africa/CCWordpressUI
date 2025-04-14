document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenuButton.addEventListener('click', function() { mobileMenu.classList.toggle('open'); });
    document.querySelectorAll('#mobileMenu li').forEach(item => { item.addEventListener('click', function() { mobileMenu.classList.remove('open'); }); });
    
    const scrollSections = document.querySelectorAll('.scroll-section');
    const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); } }); }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    scrollSections.forEach(section => { observer.observe(section); });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', function(e) { e.preventDefault(); document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' }); }); });
});




