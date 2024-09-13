window.addEventListener('load', updateParallaxHeight);
window.addEventListener('resize', updateParallaxHeight);

function updateParallaxHeight() {
  const heroSection = document.querySelector('.quiz-container');
  const parallaxContainer = document.querySelector('.parallax-image-container');

  if (heroSection && parallaxContainer) {
    parallaxContainer.style.height = heroSection.offsetHeight + 90 + 'px';
  }
}
