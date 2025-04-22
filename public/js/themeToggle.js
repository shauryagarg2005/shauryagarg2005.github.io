
document.addEventListener('DOMContentLoaded', function() {
  function setupThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    if (!themeToggleBtn) return;
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Set initial theme
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Add toggle functionality
    themeToggleBtn.addEventListener('click', function() {
      const isDarkMode = document.documentElement.classList.contains('dark');
      
      if (isDarkMode) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
      }
    });
  }
  
  setupThemeToggle();
});
