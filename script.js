src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js">
  
    // Animation on scroll
    document.addEventListener('DOMContentLoaded', function() {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      function checkScroll() {
        elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          if (elementTop < window.innerHeight - 100) {
            element.classList.add('animate-in');
          }
        });
      }
      
      window.addEventListener('load', checkScroll);
      window.addEventListener('scroll', checkScroll);
    });
  