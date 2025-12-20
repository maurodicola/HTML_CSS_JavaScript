// ============================================
// COME CREARE UN WEB-BOOK - IL LIBRO
// Script base per navigazione e animazioni
// ============================================

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
  highlightCurrentPage();
  initScrollAnimations();
  initCollapsibleSections();
});

// ============================================
// EVIDENZIA PAGINA CORRENTE
// ============================================
function highlightCurrentPage() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
}

// ============================================
// ANIMAZIONI SCROLL
// ============================================
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  elements.forEach(el => observer.observe(el));
}

// ============================================
// SEZIONI COLLASSABILI
// ============================================
function initCollapsibleSections() {
  const toggles = document.querySelectorAll('.toggle-content');
  
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const target = document.querySelector(toggle.dataset.target);
      if (target) {
        target.classList.toggle('hidden');
        toggle.textContent = target.classList.contains('hidden') 
          ? '▶ Espandi' 
          : '▼ Nascondi';
      }
    });
  });
}

// ============================================
// UTILITY: SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
