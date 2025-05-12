// FILE: assets/js/scripts.js

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
  }
  
  // Load theme from localStorage
  document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('darkMode');
    if (theme === 'enabled') {
      document.body.classList.add('dark-mode');
      const toggle = document.getElementById('darkToggle');
      if (toggle) toggle.checked = true;
    }
  });
  
  // Sidebar Toggle
  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
  
    // If on mobile, make it slide in
    if (window.innerWidth < 768) {
      sidebar.classList.toggle('open');
    }
  }
  
  // Toast Alert
  function showToast(event) {
    if (event) event.preventDefault();
    const toastEl = document.getElementById('saveToast');
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  }
  