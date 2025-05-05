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
  