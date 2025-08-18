// Scroll reveal
const sections = document.querySelectorAll("section");

const revealSection = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      sec.classList.add("show");

      // skill bar animasyonu
      if (sec.id === "skills") {
        document.querySelectorAll(".fill").forEach(fill => {
          fill.style.width = fill.style.getPropertyValue("--level");
        });
      }
    }
  });
};

window.addEventListener("scroll", revealSection);
revealSection();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
