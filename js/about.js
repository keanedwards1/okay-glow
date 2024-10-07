// /js/about.js

// Simple Intersection Observer for animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    const observers = document.querySelectorAll('.team-card, .value-card');
  
    const options = {
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, options);
  
    observers.forEach(element => {
      observer.observe(element);
    });
  });
  