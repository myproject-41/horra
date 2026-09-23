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

const joinModal = document.querySelector(".join-modal");
const joinModalClose = document.querySelector(".join-modal-close");
const joinButtons = document.querySelectorAll('[data-join-trigger="true"]');
const joinForm = document.querySelector(".join-form");
const joinSuccess = document.querySelector(".join-success");
const welcomeModal = document.querySelector(".welcome-modal");
const welcomeJoinButton = document.querySelector(".welcome-join-button");
const welcomeCloseButton = document.querySelector(".welcome-modal-close");

const openJoinModal = () => {
  if (!joinModal) return;
  joinModal.classList.add("is-open");
  document.body.classList.add("menu-open");
  const firstField = joinModal.querySelector("input[name='name']");
  if (firstField) firstField.focus();
};

const openWelcomeModal = () => {
  if (!welcomeModal) return;
  welcomeModal.classList.add("is-open");
  document.body.classList.add("menu-open");
};

const closeWelcomeModal = () => {
  if (!welcomeModal) return;
  welcomeModal.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

const closeJoinModal = () => {
  if (!joinModal) return;
  joinModal.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

joinButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    openJoinModal();
  });
});

if (joinModalClose) {
  joinModalClose.addEventListener("click", closeJoinModal);
}

if (welcomeCloseButton) {
  welcomeCloseButton.addEventListener("click", () => {
    closeWelcomeModal();
    localStorage.setItem("horra-welcome-dismissed", "true");
  });
}

if (welcomeJoinButton) {
  welcomeJoinButton.addEventListener("click", () => {
    closeWelcomeModal();
    localStorage.setItem("horra-welcome-dismissed", "true");
    openJoinModal();
  });
}

if (joinModal) {
  joinModal.addEventListener("click", (event) => {
    if (event.target === joinModal) closeJoinModal();
  });
}

if (welcomeModal) {
  welcomeModal.addEventListener("click", (event) => {
    if (event.target === welcomeModal) {
      closeWelcomeModal();
      localStorage.setItem("horra-welcome-dismissed", "true");
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (joinModal && joinModal.classList.contains("is-open")) {
      closeJoinModal();
    }
    if (welcomeModal && welcomeModal.classList.contains("is-open")) {
      closeWelcomeModal();
      localStorage.setItem("horra-welcome-dismissed", "true");
    }
  }
});

if (!localStorage.getItem("horra-welcome-dismissed")) {
  setTimeout(() => openWelcomeModal(), 700);
}

if (joinForm) {
  joinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(joinForm);
    const name = (formData.get("name") || "").toString().trim();
    const phone = (formData.get("phone") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    if (!name || !phone || !message) {
      alert("Please fill out your name, phone number, and message.");
      return;
    }

    if (joinSuccess) {
      joinSuccess.textContent = `Thank you, ${name}! We will keep you informed as a Horra customer.`;
      joinSuccess.classList.add("is-visible");
    }

    joinForm.reset();
  });
}

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
