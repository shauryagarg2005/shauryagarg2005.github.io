
document.addEventListener('DOMContentLoaded', function() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  // Initialize dark mode based on preference
  let isDarkMode = savedTheme === "dark" || (!savedTheme && prefersDark);
  
  // Apply initial theme
  updateTheme();
  
  // Toggle theme when button is clicked
  themeToggleBtn.addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    updateTheme();
  });
  
  // Update theme function
  function updateTheme() {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      moonIcon.style.display = "none";
      sunIcon.style.display = "block";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      moonIcon.style.display = "block";
      sunIcon.style.display = "none";
    }
    
    // Update button aria-label for accessibility
    themeToggleBtn.setAttribute('aria-label', 
      isDarkMode ? "Switch to light mode" : "Switch to dark mode");
  }
  
  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (!localStorage.getItem("theme")) {
      isDarkMode = event.matches;
      updateTheme();
    }
  });
});
