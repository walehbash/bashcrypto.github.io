import './theme.js';
import { sidebar } from './sidebar.js';

document.addEventListener('DOMContentLoaded', () => {
  const sidebarContainer = document.getElementById('sidebar');
  if (sidebarContainer) {
    sidebarContainer.innerHTML = sidebar;
  }

  const kycForm = document.getElementById('kyc-form');
  if (kycForm) {
    kycForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // In a real application, you would handle form submission here,
      // including file upload and data validation.
      alert('KYC information submitted successfully!');
      kycForm.reset();
    });
  }
});
