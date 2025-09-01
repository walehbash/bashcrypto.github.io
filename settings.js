import './theme.js';
import { sidebar } from './sidebar.js';

document.addEventListener('DOMContentLoaded', () => {
  const sidebarContainer = document.getElementById('sidebar');
  if (sidebarContainer) {
    sidebarContainer.innerHTML = sidebar;
  }

  // Add event listeners for interactive elements
  const changePasswordButton = document.getElementById('change-password');
  if (changePasswordButton) {
    changePasswordButton.addEventListener('click', () => {
      alert('Redirecting to password change page...');
      // In a real app, you would redirect to a secure password change form
    });
  }

  const profileForm = document.getElementById('profile-form');
  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Profile updated successfully!');
    });
  }
});
