
document.addEventListener('DOMContentLoaded', function() {
  function setupServicesSection() {
    const servicesSection = document.querySelector('.services-section');
    if (!servicesSection) return;
    
    // Services data
    const services = [
      {
        title: "Game Development",
        description: "Custom game development services for various platforms including mobile, PC, and web.",
        icon: `<svg class="h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3"/><path d="M6 19H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3"/><path d="M21 9h-3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3"/><path d="M16 15v4h2a2 2 0 0 0 2-2v-2h-4z"/><path d="M3 15h5v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2z"/><path d="M12.35 5.5h-.7a.87.87 0 0 1-.65-.28l-.35-.42a.82.82 0 0 0-.61-.25h-1.08a.82.82 0 0 0-.61.25l-.35.42a.87.87 0 0 1-.65.28h-.7C6.03 5.5 5.5 6.03 5.5 6.66V9.5h13V6.66c0-.63-.54-1.16-1.15-1.16z"/><rect width="20" height="8" x="2" y="7" rx="1"/></svg>`
      },
      {
        title: "3D Modeling & Animation",
        description: "Creation of 3D assets, characters, environments, and animations for your game projects.",
        icon: `<svg class="h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`
      },
      {
        title: "Game Programming",
        description: "Efficient and optimized code implementation for gameplay mechanics, AI systems, and more.",
        icon: `<svg class="h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
      },
      {
        title: "Game Design",
        description: "Comprehensive game design including mechanics, levels, UI/UX, and player experience.",
        icon: `<svg class="h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`
      },
      {
        title: "Analytics Integration",
        description: "Implementation of analytics systems to track player behavior and improve game performance.",
        icon: `<svg class="h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>`
      },
      {
        title: "Multiplayer Systems",
        description: "Development of robust multiplayer infrastructure and networking solutions for online games.",
        icon: `<svg class="h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
      }
    ];
    
    // Get the grid container
    const servicesGrid = servicesSection.querySelector('.services-grid');
    
    if (servicesGrid) {
      // Clear existing content if any
      servicesGrid.innerHTML = '';
      
      // Add service cards
      services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        
        serviceCard.innerHTML = `
          <div class="service-icon">${service.icon}</div>
          <h3 class="service-title">${service.title}</h3>
          <p class="service-description">${service.description}</p>
        `;
        
        servicesGrid.appendChild(serviceCard);
      });
    }
  }
  
  setupServicesSection();
});
