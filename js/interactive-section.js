document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
      threshold: 0.1
    };

    const animateElements = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    };

    const observer = new IntersectionObserver(animateElements, observerOptions);

    const targets = document.querySelectorAll('.interactive-section h2, .cards-container');
    targets.forEach(target => {
      observer.observe(target);
    });
  });