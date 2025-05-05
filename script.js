window.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const mainSection = document.getElementById("main_section");
  
    // Höhe des schwarzen Abschnitts
    const mainHeight = mainSection.offsetHeight;
  
    window.addEventListener("scroll", () => {
      // Wie weit wir gescrollt haben
      const scrollY = window.scrollY || window.pageYOffset;
  
      if (scrollY >= mainHeight) {
        // ab Unterschreitung des schwarzen Bereichs: schwarz auf weiß
        header.classList.add("dark");
      } else {
        // sonst wieder weiß auf schwarz
        header.classList.remove("dark");
      }
    });
  });
  