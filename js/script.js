// Fussnoten-Jahr. Absichern: fehlt das Element auf einer Unterseite,
// darf nicht das ganze Skript sterben (sonst bleiben reveal-Blöcke unsichtbar).
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobiles Menü
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
}

document.querySelectorAll(".main-nav a, .js-scroll").forEach((link) => {
  link.addEventListener("click", () => {
    if (!mainNav || !navToggle) return;
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Header-Schatten beim Scrollen
const header = document.getElementById("siteHeader");
const backToTop = document.getElementById("backToTop");

function onScroll() {
  const scrolled = window.scrollY > 12;
  if (header) header.classList.toggle("is-scrolled", scrolled);
  if (backToTop) backToTop.classList.toggle("is-visible", window.scrollY > 500);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

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
  // Sicherheitsnetz: nichts darf unsichtbar haengen bleiben - auch nicht,
  // wenn der Observer einen Block verpasst (z. B. reine Bild-Container,
  // die vor dem Laden des Bildes noch keine Hoehe haben).
  const showAll = () => revealItems.forEach((el) => el.classList.add("is-visible"));
  setTimeout(showAll, 2500);
  window.addEventListener("load", () => setTimeout(showAll, 300));
} else {
  revealItems.forEach((el) => el.classList.add("is-visible"));
}

// Google Maps erst nach ausdrücklichem Klick nachladen.
// Vorher geht keine einzige Anfrage an Google raus - das ist der Grund,
// warum die Karte nicht direkt als <iframe> im HTML steht.
const mapConsent = document.getElementById("mapConsent");
const mapLoadBtn = document.getElementById("mapLoadBtn");

if (mapConsent && mapLoadBtn) {
  mapLoadBtn.addEventListener("click", () => {
    const frame = document.createElement("iframe");
    frame.title = "Karte: I.M Getränke Depot, Berliner Allee 47, 64295 Darmstadt";
    frame.src =
      "https://www.google.com/maps?q=Berliner+Allee+47,+64295+Darmstadt&output=embed";
    frame.width = "100%";
    frame.height = "400";
    frame.loading = "lazy";
    frame.referrerPolicy = "no-referrer-when-downgrade";
    frame.allowFullscreen = true;
    mapConsent.replaceWith(frame);
    frame.focus();
  });
}

// Hero gestaffelt einblenden, sobald die Seite steht.
const heroInner = document.querySelector(".hero-inner");
if (heroInner) requestAnimationFrame(() => heroInner.classList.add("entered"));
