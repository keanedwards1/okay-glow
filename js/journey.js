// Intersection Observer for smooth scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const steps = entry.target.querySelectorAll('.journey-step');
          steps.forEach(step => step.classList.add('visible'));
        }
      });
    }, observerOptions);
  
    const journeySection = document.querySelector('.journey-grid');
    if (journeySection) {
      observer.observe(journeySection);
    }
  });
  
  // Optional: Add smooth scroll behavior for the CTA button
  document.querySelector('.cta-button')?.addEventListener('click', (e) => {
    if (e.currentTarget.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });