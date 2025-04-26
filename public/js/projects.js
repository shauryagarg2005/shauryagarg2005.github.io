
document.addEventListener('DOMContentLoaded', function() {
  const projectsData = [
    {
      title: "Cosmic Explorer",
      description: "A space exploration game with procedurally generated planets and alien species.",
      imageUrl: "./lovable-uploads/32c1ed10-4b05-406b-9412-174f08364440.png",
      technologies: ["Unity", "C#", "Procedural Generation"],
      projectId: "cosmic-explorer"
    },
    {
      title: "Forgotten Realms",
      description: "An adventure RPG set in a mythical world with rich lore and dynamic quest systems.",
      imageUrl: "./lovable-uploads/adc2c3b5-12ed-4b1d-85d6-57b487f4bd64.png",
      technologies: ["Unity", "C#", "RPG Systems", "AI"],
      projectId: "forgotten-realms"
    },
    {
      title: "Cyber Nexus",
      description: "A cyberpunk thriller game with hacking mechanics and branching storylines.",
      imageUrl: "./lovable-uploads/ba0f61c7-1a4e-48dd-8a5f-929ec68be611.png",
      technologies: ["Unity", "C#", "Narrative Design"],
      projectId: "cyber-nexus"
    },
    {
      title: "Puzzle Dimensions",
      description: "A mind-bending puzzle game where players manipulate the laws of physics.",
      imageUrl: "./lovable-uploads/ac7a7f66-d674-4376-bbd0-866715b07afb.png",
      technologies: ["Unity", "C#", "Physics"],
      projectId: "puzzle-dimensions"
    },
    {
      title: "Spike Jukes",
      description: "A fast-paced arcade game with simple but addictive gameplay mechanics.",
      imageUrl: "./lovable-uploads/32c1ed10-4b05-406b-9412-174f08364440.png",
      technologies: ["Unity", "C#", "Mobile"],
      projectId: "spike-jukes",
      externalLink: "https://play.google.com/store/apps/details?id=com.NightScream.SpikeJukes",
      externalLinkText: "Play Store"
    },
    {
      title: "Skyway Stunts",
      description: "A physics-based racing game with wild stunts and creative tracks.",
      imageUrl: "./lovable-uploads/adc2c3b5-12ed-4b1d-85d6-57b487f4bd64.png",
      technologies: ["Unity", "C#", "Physics", "Vehicles"],
      projectId: "skyway-stunts",
      externalLink: "https://shaurya-garg.itch.io/skyway-stunts",
      externalLinkText: "itch.io"
    }
  ];

  const projectsContainer = document.getElementById('projects-container');
  
  if (projectsContainer) {
    projectsData.forEach((project, index) => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.dataset.index = index;
      
      // Build technologies HTML
      const techsHTML = project.technologies.map(tech => 
        `<span class="skill-tag">${tech}</span>`
      ).join('');
      
      // Build external link HTML if applicable
      let externalLinkHTML = '';
      if (project.externalLink) {
        externalLinkHTML = `
          <a 
            href="${project.externalLink}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="card-button"
          >
            ${project.externalLinkText}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        `;
      }
      
      projectCard.innerHTML = `
        <div class="project-image">
          <img src="${project.imageUrl}" alt="${project.title}" />
        </div>
        <div class="project-details">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-technologies">
            ${techsHTML}
          </div>
          <div class="project-links">
            ${externalLinkHTML}
            <a href="project-details.html?id=${project.projectId}" class="card-button">
              View Details
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      `;
      
      // Add fade-in animation
      setTimeout(() => {
        projectCard.classList.add('visible');
      }, index * 150);
      
      projectsContainer.appendChild(projectCard);
    });
  }
});
