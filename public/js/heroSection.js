
// Background images array
const backgroundImages = [
  "/portfolio/lovable-uploads/32c1ed10-4b05-406b-9412-174f08364440.png",
  "/portfolio/lovable-uploads/adc2c3b5-12ed-4b1d-85d6-57b487f4bd64.png",
  "/portfolio/lovable-uploads/ba0f61c7-1a4e-48dd-8a5f-929ec68be611.png",
  "/portfolio/lovable-uploads/ac7a7f66-d674-4376-bbd0-866715b07afb.png"
];

document.addEventListener('DOMContentLoaded', function() {
  // Get hero elements
  const titleElement = document.querySelector('.hero-title');
  const subtitleElement = document.querySelector('.hero-subtitle');
  const ctaElement = document.querySelector('.hero-cta');
  
  // Set up animations for hero elements
  if (titleElement) {
    titleElement.style.opacity = "1";
    titleElement.classList.add("animate-fade-in");
  }
  
  setTimeout(() => {
    if (subtitleElement) {
      subtitleElement.style.opacity = "1";
      subtitleElement.classList.add("animate-fade-in");
    }
  }, 200);
  
  setTimeout(() => {
    if (ctaElement) {
      ctaElement.style.opacity = "1";
      ctaElement.classList.add("animate-fade-in");
    }
  }, 400);

  // Image slider functionality
  let currentImageIndex = 0;
  const bgElements = document.querySelectorAll('.background-image');
  
  // Show first image initially
  if (bgElements.length > 0) {
    bgElements[0].classList.add('visible');
  }
  
  // Change image every 5 seconds
  const imageInterval = setInterval(() => {
    // Hide current image
    bgElements[currentImageIndex].classList.remove('visible');
    
    // Move to next image
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    
    // Show next image
    bgElements[currentImageIndex].classList.add('visible');
  }, 5000);
  
  // Cleanup function (not directly used in vanilla JS but good practice)
  window.addEventListener('beforeunload', function() {
    clearInterval(imageInterval);
  });
});
