
document.addEventListener('DOMContentLoaded', function() {
  const skills = [
    { name: "Unity (C#)", level: 90 },
    { name: "Game Mechanics Design", level: 85 },
    { name: "UI/UX Development", level: 80 },
    { name: "Physics-Based Gameplay", level: 85 },
    { name: "Mobile Game Development", level: 80 },
    { name: "Custom Input Systems", level: 75 },
  ];

  function setupSkillsProgress() {
    const skillsContainer = document.getElementById('skills-progress');
    if (!skillsContainer) return;

    skills.forEach(skill => {
      const skillItem = document.createElement('div');
      skillItem.className = 'skill-item';
      
      skillItem.innerHTML = `
        <div class="skill-header">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-percentage">${skill.level}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-progress" style="width: 0%"></div>
        </div>
      `;
      
      skillsContainer.appendChild(skillItem);
    });

    // Animate skill bars when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBars = entry.target.querySelectorAll('.skill-progress');
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              bar.style.width = `${skills[index].level}%`;
            }, index * 150);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(skillsContainer);
  }

  setupSkillsProgress();
});
