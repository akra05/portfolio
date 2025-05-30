// AOS Initialisierung und Scroll-Effekte
document.addEventListener('DOMContentLoaded', function() {
  // Initialisiere AOS
  AOS.init({
    duration: 800,
    offset: 200,
    mirror: false
  });

  // Header und Navigationseffekte
  const header = document.getElementById("header");
  const navLinks = document.querySelectorAll(".nav-link");
  const mainSection = document.getElementById("home");

  if (mainSection) {
    const mainHeight = mainSection.offsetHeight;

    // Funktion zum Aktualisieren der Header-Farben
    const updateHeaderColors = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      
      if (scrollY >= mainHeight) {
        // Wechsel zu dunklem Modus
        header.classList.replace("text-white", "text-black");
        navLinks.forEach(link => {
          link.classList.replace("text-white", "text-black");
        });
      } else {
        // Wechsel zu hellem Modus
        header.classList.replace("text-black", "text-white");
        navLinks.forEach(link => {
          link.classList.replace("text-black", "text-white");
        });
      }
    };

    // Initiale Ausführung und Event-Listener
    updateHeaderColors();
    window.addEventListener("scroll", updateHeaderColors);

    // Nav-Link Einblend-Animation
    navLinks.forEach((link, index) => {
      setTimeout(() => {
        link.classList.add("opacity-100");
      }, 300 * (index + 1));
    });
  }

  // Intersection Observer für About-Me Sektion
  const aboutSections = document.querySelectorAll('.about-section');
  
  if (aboutSections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        } else {
          // Nur ausblenden, wenn komplett außerhalb des Viewports
          const rect = entry.boundingClientRect;
          if (rect.bottom < 0 || rect.top > window.innerHeight) {
            entry.target.classList.remove('opacity-100', 'translate-y-0');
            entry.target.classList.add('opacity-0', 'translate-y-10');
          }
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    aboutSections.forEach(section => {
      // Initial verstecken
      section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-500');
      observer.observe(section);
    });
  }
});