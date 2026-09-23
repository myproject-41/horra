(function () {
  var phoneNumber = "918677813088";
  var message = "Hi Horra, I would like to know more.";
  var href = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  var style = document.createElement("style");
  style.textContent = [
    ".whatsapp-float {",
    "  position: fixed;",
    "  right: 18px;",
    "  bottom: 18px;",
    "  z-index: 1000;",
    "  width: 58px;",
    "  height: 58px;",
    "  display: inline-flex;",
    "  align-items: center;",
    "  justify-content: center;",
    "  color: #ffffff;",
    "  background: #25d366;",
    "  border-radius: 50%;",
    "  box-shadow: 0 16px 34px rgba(14, 112, 55, 0.28);",
    "  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;",
    "}",
    ".whatsapp-float:hover, .whatsapp-float:focus-visible {",
    "  background: #1ebe5d;",
    "  transform: translateY(-2px);",
    "  box-shadow: 0 20px 40px rgba(14, 112, 55, 0.34);",
    "}",
    ".whatsapp-float:focus-visible {",
    "  outline: 3px solid rgba(37, 211, 102, 0.35);",
    "  outline-offset: 4px;",
    "}",
    ".whatsapp-float svg {",
    "  width: 30px;",
    "  height: 30px;",
    "  fill: none;",
    "  stroke: currentColor;",
    "  stroke-width: 1.9;",
    "  stroke-linecap: round;",
    "  stroke-linejoin: round;",
    "}",
    "@media (max-width: 640px) {",
    "  .whatsapp-float {",
    "    right: 14px;",
    "    bottom: 14px;",
    "    width: 54px;",
    "    height: 54px;",
    "  }",
    "}",
  ].join("\n");

  var link = document.createElement("a");
  link.className = "whatsapp-float";
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener";
  link.setAttribute("aria-label", "Chat with Horra on WhatsApp");
  link.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z"/><path d="M9 8.5c.3 2 2.5 4.2 4.5 4.5l1.3-1.2 2 1c-.2 1.3-1.1 2-2.2 2-3.7-.7-6.2-3.2-6.9-6.9 0-1.1.7-2 2-2.2l1 2L9 8.5Z"/></svg>';

  document.head.appendChild(style);
  document.body.appendChild(link);
})();
