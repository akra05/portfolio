
window.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const navLinks = document.getElementsByClassName("nav-link");
    const mainSection = document.getElementById("home");
  
    // Höhe des schwarzen Abschnitts
    const mainHeight = mainSection.offsetHeight;
  
    window.addEventListener("scroll", () => {
      // Wie weit wir gescrollt haben
      const scrollY = window.scrollY || window.pageYOffset;
  
      if (scrollY >= mainHeight) {
        // ab Unterschreitung des schwarzen Bereichs: schwarz auf weiß
        header.classList.add("dark");
        for (let link of navLinks) {
          link.classList.add("dark");
        }
      } else {
        // sonst wieder weiß auf schwarz
        header.classList.remove("dark");
        for (let link of navLinks) {
          link.classList.remove("dark");
        }
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 800, offset: 200, mirror: false });
  
    const boxes = document.querySelectorAll('.about_me_div');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
          // Element ist im Viewport → Ausblend-Klasse entfernen
          el.classList.remove('out');
        } else {
          // Element ist komplett aus dem Viewport → Ausblend-Klasse hinzufügen
          // Wir prüfen: ist es nach oben oder nach unten raus?
          // entry.boundingClientRect.y gibt Position relativ Viewport.
          if (entry.boundingClientRect.top < 0 || entry.boundingClientRect.bottom > window.innerHeight) {
            el.classList.add('out');
          }
        }
      });
    }, {
      threshold: 0,       // schon bei kleinster Berührung feuern
      rootMargin: '0px'
    });
  
    boxes.forEach(b => observer.observe(b));
  });
  