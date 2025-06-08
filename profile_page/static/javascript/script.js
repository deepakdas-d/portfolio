// Page transition effects
document.addEventListener('DOMContentLoaded', function() {
  // Add loaded class to trigger fade in
  document.body.classList.add('loaded');
  
  // Remove preloader if it exists
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('fade-out');
      setTimeout(() => {
        preloader.remove();
      }, 500);
    }, 500);
  }
});

// Handle page unload transitions
window.addEventListener('beforeunload', function() {
  document.body.classList.add('unloading');
});

// Handle navigation links for smooth transitions
document.addEventListener('click', function(e) {
  const link = e.target.closest('a');
  
  // Check if it's an internal link
  if (link && link.hostname === window.location.hostname && !link.hasAttribute('download')) {
    e.preventDefault();
    
    // Add unloading class
    document.body.classList.add('unloading');
    
    // Navigate after transition
    setTimeout(() => {
      window.location.href = link.href;
    }, 400);
  }
});

// Smooth scroll for anchor links
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

// Optional: Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    if (img.complete) {
      img.style.opacity = '1';
    } else {
      img.style.opacity = '0';
      img.addEventListener('load', function() {
        this.style.transition = 'opacity 0.5s ease';
        this.style.opacity = '1';
      });
    }
  });
});