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
    "  width: 62px;",
    "  height: 62px;",
    "  display: inline-flex;",
    "  align-items: center;",
    "  justify-content: center;",
    "  color: #ffffff;",
    "  background: linear-gradient(145deg, #39e27a 0%, #20c760 54%, #0ca94d 100%);",
    "  border-radius: 50%;",
    "  box-shadow: 0 18px 42px rgba(14, 112, 55, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.5);",
    "  isolation: isolate;",
    "  overflow: hidden;",
    "  transition: transform 180ms ease, box-shadow 180ms ease, filter 180ms ease;",
    "}",
    ".whatsapp-float::before {",
    "  content: '';",
    "  position: absolute;",
    "  inset: -7px;",
    "  border-radius: inherit;",
    "  border: 1px solid rgba(37, 211, 102, 0.32);",
    "  background: radial-gradient(circle, rgba(37, 211, 102, 0.18), rgba(37, 211, 102, 0) 68%);",
    "  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.72), inset 0 0 0 1px rgba(37, 211, 102, 0.26);",
    "  pointer-events: none;",
    "  animation: whatsapp-premium-pulse 2.8s ease-in-out infinite;",
    "}",
    ".whatsapp-float::after {",
    "  content: '';",
    "  position: absolute;",
    "  top: 9px;",
    "  left: 13px;",
    "  width: 26px;",
    "  height: 12px;",
    "  border-radius: 999px;",
    "  background: rgba(255, 255, 255, 0.34);",
    "  transform: rotate(-28deg);",
    "  filter: blur(0.2px);",
    "  pointer-events: none;",
    "}",
    ".whatsapp-float:hover, .whatsapp-float:focus-visible {",
    "  transform: translateY(-3px) scale(1.03);",
    "  filter: saturate(1.08);",
    "  box-shadow: 0 24px 52px rgba(14, 112, 55, 0.42), 0 0 0 8px rgba(37, 211, 102, 0.11), inset 0 1px 0 rgba(255, 255, 255, 0.58);",
    "}",
    ".whatsapp-float:focus-visible {",
    "  outline: 3px solid rgba(37, 211, 102, 0.35);",
    "  outline-offset: 4px;",
    "}",
    ".whatsapp-float svg {",
    "  position: relative;",
    "  z-index: 1;",
    "  width: 34px;",
    "  height: 34px;",
    "  fill: currentColor;",
    "  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.16));",
    "}",
    "@keyframes whatsapp-premium-pulse {",
    "  0%, 100% { transform: scale(1); opacity: 0.9; }",
    "  50% { transform: scale(1.08); opacity: 0.55; }",
    "}",
    "@media (prefers-reduced-motion: reduce) {",
    "  .whatsapp-float::before { animation: none; }",
    "}",
    "@media (max-width: 640px) {",
    "  .whatsapp-float {",
    "    right: 14px;",
    "    bottom: 14px;",
    "    width: 56px;",
    "    height: 56px;",
    "  }",
    "}",
  ].join("\n");

  var link = document.createElement("a");
  link.className = "whatsapp-float";
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener";
  link.setAttribute("aria-label", "Chat with Horra on WhatsApp");
  link.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M16.03 3.2A12.7 12.7 0 0 0 5.1 22.36L3.55 28.8l6.6-1.5A12.7 12.7 0 1 0 16.03 3.2Zm0 2.43a10.27 10.27 0 1 1 0 20.54c-1.82 0-3.58-.48-5.12-1.38l-.48-.28-3.15.72.74-3.07-.32-.5a10.27 10.27 0 0 1 8.33-16.03Zm-4.06 5.26c-.24 0-.62.09-.95.45-.33.36-1.25 1.22-1.25 2.98s1.28 3.46 1.46 3.7c.18.24 2.47 3.95 6.12 5.38 3.03 1.19 3.65.95 4.31.89.66-.06 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.79-1.07-.95-1.79-2.13-2-2.49-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.61-.81-.62h-.68Z"/></svg>';

  document.head.appendChild(style);
  document.body.appendChild(link);
})();
