function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Light/Dark Mode Toggle
function toggleMode() {
  document.body.classList.toggle("light");
  localStorage.setItem("mode", document.body.classList.contains("light") ? "light" : "dark");
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("mode") === "light") {
    document.body.classList.add("light");
  }

  document.getElementById("mode-toggle").addEventListener("click", toggleMode);
  document.getElementById("mode-toggle-mobile").addEventListener("click", toggleMode);
});

// Section Fade-in on scroll
const faders = document.querySelectorAll("section");
const appearOptions = { threshold: 0.1 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((section) => {
  section.classList.add("fade-in");
  appearOnScroll.observe(section);
});
