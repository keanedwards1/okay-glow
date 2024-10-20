/* document.addEventListener("DOMContentLoaded", () => {
    const marqueeContent = document.querySelector('.image-marquee-content');
    const images = marqueeContent.querySelectorAll('.logo-image');
  
    // Clone all images to make a duplicate set for seamless scrolling
    images.forEach((img) => {
      const clone = img.cloneNode(true);
      marqueeContent.appendChild(clone);
    });
  
    // Calculate total width of the original images including their margins
    let totalWidth = 0;
    images.forEach((img) => {
      const imageStyle = getComputedStyle(img);
      const marginRight = parseFloat(imageStyle.marginRight);
      totalWidth += img.getBoundingClientRect().width + marginRight;
    });
  
    // Set the width of the marquee content container to total width of all images
    marqueeContent.style.width = `${totalWidth * 2}px`;
  
    // Set the animation duration based on total width to maintain consistent speed
    const animationDuration = totalWidth / 250; // Adjust this divisor for speed (smaller = faster)
    marqueeContent.style.animationDuration = `${animationDuration}s`;
  });
   */