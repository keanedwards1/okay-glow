window.addEventListener('load', updateParallaxHeight);
window.addEventListener('resize', updateParallaxHeight);

function updateParallaxHeight() {
  const heroSection = document.querySelector('.hero-section');
  const parallaxContainer = document.querySelector('.parallax-image-container');

  if (heroSection && parallaxContainer) {
    parallaxContainer.style.height = heroSection.offsetHeight + 100 + 'px';
  }
}
