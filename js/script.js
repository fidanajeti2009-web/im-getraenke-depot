document.getElementById("year").textContent = new Date().getFullYear();

// Mobiles Menü
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".main-nav a, .js-scroll").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Header-Schatten beim Scrollen
const header = document.getElementById("siteHeader");
const backToTop = document.getElementById("backToTop");

function onScroll() {
  const scrolled = window.scrollY > 12;
  header.classList.toggle("is-scrolled", scrolled);
  backToTop.classList.toggle("is-visible", window.scrollY > 500);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Elemente beim Scrollen einblenden
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealItems.forEach((el) => observer.observe(el));
  // Sicherheitsnetz: falls der Observer etwas verpasst, nichts unsichtbar stehen lassen
  window.addEventListener("load", () => {
    setTimeout(() => revealItems.forEach((el) => el.classList.add("is-visible")), 1500);
  });
} else {
  revealItems.forEach((el) => el.classList.add("is-visible"));
}
