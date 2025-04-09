
// Main JavaScript file for the portfolio

document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme
  initTheme();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize animations
  initAnimations();
  
  // Initialize scroll handling
  initScroll();
  
  // Initialize image slider
  initImageSlider();
});

// Theme handling
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const themeIcon = document.getElementById('theme-icon');
  const themeIconMobile = document.getElementById('theme-icon-mobile');
  
  // Check for saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Theme toggle functionality
  function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }
  
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);
}

// Mobile menu handling
function initMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      
      // Change menu icon based on state
      const menuIcon = mobileMenuToggle.querySelector('.menu-icon');
      if (mobileMenu.classList.contains('active')) {
        menuIcon.style.backgroundImage = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E\")";
      } else {
        menuIcon.style.backgroundImage = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='4' x2='20' y1='12' y2='12'/%3E%3Cline x1='4' x2='20' y1='6' y2='6'/%3E%3Cline x1='4' x2='20' y1='18' y2='18'/%3E%3C/svg%3E\")";
      }
    });
    
    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });
  }
}

// Animations
function initAnimations() {
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroCta = document.getElementById('hero-cta');
  
  // Hero section animations
  if (heroTitle) {
    heroTitle.style.opacity = '1';
    heroTitle.classList.add('animate-fade-in');
  }
  
  setTimeout(() => {
    if (heroSubtitle) {
      heroSubtitle.style.opacity = '1';
      heroSubtitle.classList.add('animate-fade-in');
    }
  }, 200);
  
  setTimeout(() => {
    if (heroCta) {
      heroCta.style.opacity = '1';
      heroCta.classList.add('animate-fade-in');
    }
  }, 400);
}

// Scroll handling
function initScroll() {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Smooth scroll for anchor links
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
      e.preventDefault();
      
      const targetId = target.getAttribute('href');
      if (!targetId) return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Adjusted for navbar height
        behavior: 'smooth'
      });
    }
  });
}

// Image slider
function initImageSlider() {
  const backgroundImages = [
    document.getElementById('bg-image-1'),
    document.getElementById('bg-image-2'),
    document.getElementById('bg-image-3'),
    document.getElementById('bg-image-4')
  ];
  
  let currentImageIndex = 0;
  
  // Show initial image
  if (backgroundImages[0]) {
    backgroundImages[0].style.opacity = '0.7';
  }
  
  // Set up image rotation
  setInterval(() => {
    // Hide current image
    if (backgroundImages[currentImageIndex]) {
      backgroundImages[currentImageIndex].style.opacity = '0';
    }
    
    // Move to next image
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    
    // Show next image
    if (backgroundImages[currentImageIndex]) {
      backgroundImages[currentImageIndex].style.opacity = '0.7';
    }
  }, 5000);
}
