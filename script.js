// GSAP and ScrollReveal Animations
window.addEventListener('DOMContentLoaded', () => {
  // GSAP animations for header
  gsap.from('.header h1', { opacity: 0, y: -50, duration: 1, ease: 'power2.out' });
  gsap.from('.header p', { opacity: 0, y: 50, duration: 1.2, ease: 'power2.out', delay: 0.3 });
  gsap.from('.header .btn', { opacity: 0, scale: 0.8, duration: 1, ease: 'power2.out', delay: 0.5 });

  // ScrollReveal for other sections
  ScrollReveal().reveal('.section h2', { duration: 1000, origin: 'bottom', distance: '50px' });
  ScrollReveal().reveal('.tabs, .effects-container, .prevention-strategies, .member-grid', {
      duration: 1500,
      origin: 'bottom',
      distance: '70px',
      easing: 'ease-in-out',
      interval: 200
  });

  // Smooth Scroll and Navbar Active Link
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar ul li a');

  window.addEventListener('scroll', () => {
      let current = '';

      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          if (scrollY >= sectionTop - 60) {
              current = section.getAttribute('id');
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(current)) {
              link.classList.add('active');
          }
      });
  });

  // Scroll to section on click
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetSection = document.querySelector(this.getAttribute('href'));
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
  });
});

// Tabs functionality for Appointment/Service section
function openTab(event, tabName) {
  let i, tabcontent, tabbuttons;

  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tabbuttons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabbuttons.length; i++) {
      tabbuttons[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add("active");
}

// Set default tab
document.getElementsByClassName("tab-button")[0].click();
