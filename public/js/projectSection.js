
document.addEventListener('DOMContentLoaded', function() {
  function setupProjectSection() {
    const projectSection = document.querySelector('.project-section');
    if (!projectSection) return;

    // Add smooth scrolling for view all projects button
    const viewAllProjectsBtn = projectSection.querySelector('.card-button');
    if (viewAllProjectsBtn) {
      viewAllProjectsBtn.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('/')) {
          // Only prevent default if it's an internal link that should navigate normally
          return;
        }
        
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        const navbarHeight = 80; // Adjust based on your navbar height
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    }
  }
  
  setupProjectSection();
});
