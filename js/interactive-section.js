document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
      threshold: 0.001  // Trigger when 60% of the section is in view
    };
  
    const animateElements = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);  // Stop observing once animated
        }
      });
    };
  
    const observer = new IntersectionObserver(animateElements, observerOptions);
  
    const targets = document.querySelectorAll('.interactive-section h2, .cards-container');
    targets.forEach(target => {
      observer.observe(target);
    });
  });
  