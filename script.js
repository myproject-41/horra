const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const announcementBar = document.querySelector(".announcement-bar");
const announcementClose = document.querySelector(".announcement-close");
const siteHeader = document.querySelector(".site-header");

const setMenuState = (open) => {
  if (!menuButton || !mobileMenu) return;
  mobileMenu.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.body.classList.toggle("menu-open", open);
};

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    setMenuState(menuButton.getAttribute("aria-expanded") !== "true");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuState(false);
  });
}

if (announcementBar && announcementClose) {
  if (sessionStorage.getItem("horra-announcement-dismissed") === "true") {
    announcementBar.classList.add("is-dismissed");
  }

  announcementClose.addEventListener("click", () => {
    announcementBar.classList.add("is-dismissed");
    sessionStorage.setItem("horra-announcement-dismissed", "true");
  });
}

if (siteHeader) {
  const updateHeader = () => siteHeader.classList.toggle("scrolled", window.scrollY > 12);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

const revealTargets = document.querySelectorAll(
  ".reveal, .reveal-stagger, .section-heading, .product-intro, .moment-card, .personal-copy, .quote-card, .whatsapp-card, .final-cta"
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px" });

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
