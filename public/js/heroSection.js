
document.addEventListener('DOMContentLoaded', function() {
  // Background Images Array
  const backgroundImages = [
    "/portfolio/lovable-uploads/32c1ed10-4b05-406b-9412-174f08364440.png",
    "/portfolio/lovable-uploads/adc2c3b5-12ed-4b1d-85d6-57b487f4bd64.png",
    "/portfolio/lovable-uploads/ba0f61c7-1a4e-48dd-8a5f-929ec68be611.png",
    "/portfolio/lovable-uploads/ac7a7f66-d674-4376-bbd0-866715b07afb.png"
  ];
  
  function setupHeroSection() {
    // Create references to DOM elements
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    const titleElement = document.querySelector('.hero-title');
    const subtitleElement = document.querySelector('.hero-subtitle');
    const ctaElement = document.querySelector('.hero-cta');
    const backgroundContainer = document.querySelector('.hero-background');
    
    // Create and append background images
    backgroundImages.forEach((image, index) => {
      const bgImageDiv = document.createElement('div');
      bgImageDiv.classList.add('bg-image');
      bgImageDiv.style.backgroundImage = `url(${image})`;
      if (index === 0) {
        bgImageDiv.classList.add('active'); // Show first image initially
      }
      backgroundContainer.appendChild(bgImageDiv);
    });
    
    // Setup image rotation
    let currentImageIndex = 0;
    const bgImagesElements = document.querySelectorAll('.bg-image');
    
    setInterval(() => {
      // Hide current image
      bgImagesElements[currentImageIndex].classList.remove('active');
      
      // Calculate next image index
      currentImageIndex = (currentImageIndex + 1) % bgImagesElements.length;
      
      // Show next image
      bgImagesElements[currentImageIndex].classList.add('active');
    }, 5000);
    
    // Animate hero elements
    if (titleElement) {
      titleElement.style.opacity = '1';
      titleElement.classList.add('animate-fade-in');
    }
    
    setTimeout(() => {
      if (subtitleElement) {
        subtitleElement.style.opacity = '1';
        subtitleElement.classList.add('animate-fade-in');
      }
    }, 200);
    
    setTimeout(() => {
      if (ctaElement) {
        ctaElement.style.opacity = '1';
        ctaElement.classList.add('animate-fade-in');
      }
    }, 400);
    
    // Setup smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        const navbarHeight = 80; // Adjust based on your navbar height
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    });
  }
  
  setupHeroSection();
});
