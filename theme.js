document.addEventListener('DOMContentLoaded', () => {
  const lightThemeBtn = document.getElementById('light-theme-btn');
  const darkThemeBtn = document.getElementById('dark-theme-btn');

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      darkThemeBtn.classList.add('active');
      lightThemeBtn.classList.remove('active');
    } else {
      lightThemeBtn.classList.add('active');
      darkThemeBtn.classList.remove('active');
    }
  };

  lightThemeBtn.addEventListener('click', () => setTheme('light'));
  darkThemeBtn.addEventListener('click', () => setTheme('dark'));

  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
});
