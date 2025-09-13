// Scroll fade-in effect
const faders = document.querySelectorAll('.fade-in');

function handleFadeIn() {
  let triggerBottom = window.innerHeight * 0.85;

  faders.forEach(fader => {
    let faderTop = fader.getBoundingClientRect().top;

    if (faderTop < triggerBottom) {
      fader.classList.add('visible');
    } else {
      fader.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', handleFadeIn);
window.addEventListener('load', handleFadeIn);


// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  // Change icon between hamburger and close
  mobileMenu.querySelector('i').classList.toggle('fa-bars');
  mobileMenu.querySelector('i').classList.toggle('fa-times');
});


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetID = this.getAttribute('href');
    const targetElement = document.querySelector(targetID);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu after click on link (optional)
      if (navLinks.classList.contains('nav-active')) {
        navLinks.classList.remove('nav-active');
        mobileMenu.querySelector('i').classList.add('fa-bars');
        mobileMenu.querySelector('i').classList.remove('fa-times');
      }
    }
  });
});


// Contact form submission demo
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! (Contact form demo only)');
    this.reset();
  });
}
