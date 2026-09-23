(function () {
  var phoneNumber = "918677813088";
  var message = "Hi Horra, I would like to know more.";
  var href = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  if (document.querySelector(".whatsapp-float")) return;

  var style = document.createElement("style");
  style.textContent = `
    .whatsapp-float {
      position: fixed;
      right: 20px;
      bottom: 20px;
      z-index: 1000;
      min-width: 148px;
      height: 62px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 11px;
      padding: 0 22px 0 14px;
      color: #0bbf4f;
      background:
        linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(239, 255, 244, 0.94)),
        radial-gradient(circle at 22% 16%, rgba(37, 211, 102, 0.22), transparent 34%);
      border: 1px solid rgba(255, 255, 255, 0.82);
      border-radius: 999px;
      box-shadow:
        0 22px 54px rgba(7, 111, 48, 0.28),
        0 8px 22px rgba(35, 25, 18, 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 0.95);
      isolation: isolate;
      text-decoration: none;
      font: 800 0.82rem/1 Inter, Arial, sans-serif;
      letter-spacing: 0;
      transition: transform 180ms ease, box-shadow 180ms ease, filter 180ms ease;
    }

    .whatsapp-float::before {
      content: "";
      position: absolute;
      inset: -8px;
      z-index: -1;
      border-radius: inherit;
      background: radial-gradient(circle, rgba(37, 211, 102, 0.2), rgba(37, 211, 102, 0) 70%);
      animation: whatsapp-float-pulse 2.8s ease-in-out infinite;
      pointer-events: none;
    }

    .whatsapp-float::after {
      content: "";
      position: absolute;
      top: 9px;
      left: 18px;
      width: 48px;
      height: 14px;
      border-radius: 999px;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0));
      transform: rotate(-18deg);
      pointer-events: none;
    }

    .whatsapp-float__icon {
      position: relative;
      width: 42px;
      height: 42px;
      display: grid;
      place-items: center;
      flex: 0 0 auto;
      color: #06c755;
      background: #ffffff;
      border-radius: 50%;
      box-shadow:
        inset 0 0 0 1px rgba(6, 199, 85, 0.12),
        0 8px 18px rgba(6, 199, 85, 0.16);
    }

    .whatsapp-float__icon::after {
      content: "";
      position: absolute;
      right: 2px;
      bottom: 3px;
      width: 10px;
      height: 10px;
      background: #24d366;
      border: 2px solid #ffffff;
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(6, 199, 85, 0.28);
    }

    .whatsapp-float svg {
      width: 31px;
      height: 31px;
      fill: currentColor;
      filter: drop-shadow(0 2px 3px rgba(8, 156, 72, 0.16));
    }

    .whatsapp-float__text {
      position: relative;
      display: grid;
      gap: 3px;
      color: #0d7d39;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.86);
    }

    .whatsapp-float__eyebrow {
      color: #54a86f;
      font: 700 0.58rem/1 Inter, Arial, sans-serif;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .whatsapp-float__label {
      color: #0b8f3d;
      font: 850 0.9rem/1 Inter, Arial, sans-serif;
    }

    .whatsapp-float:hover,
    .whatsapp-float:focus-visible {
      transform: translateY(-4px) scale(1.02);
      filter: saturate(1.08);
      box-shadow:
        0 30px 68px rgba(7, 111, 48, 0.38),
        0 0 0 8px rgba(37, 211, 102, 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 1);
    }

    .whatsapp-float:focus-visible {
      outline: 3px solid rgba(37, 211, 102, 0.36);
      outline-offset: 5px;
    }

    @keyframes whatsapp-float-pulse {
      0%, 100% { transform: scale(1); opacity: 0.92; }
      50% { transform: scale(1.08); opacity: 0.5; }
    }

    @media (prefers-reduced-motion: reduce) {
      .whatsapp-float,
      .whatsapp-float::before {
        animation: none;
        transition: none;
      }
    }

    @media (max-width: 640px) {
      .whatsapp-float {
        right: 14px;
        bottom: max(14px, env(safe-area-inset-bottom));
        min-width: 58px;
        width: 58px;
        height: 58px;
        padding: 0;
        border-radius: 50%;
      }

      .whatsapp-float::after {
        left: 12px;
        width: 30px;
      }

      .whatsapp-float__icon {
        width: 44px;
        height: 44px;
        box-shadow: none;
      }

      .whatsapp-float__text {
        display: none;
      }
    }
  `;

  var iconSvg = [
    '<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">',
    '<path d="M32.3 6.8c-13.7 0-24.8 10.9-24.8 24.4 0 4.9 1.5 9.6 4.2 13.6L8.3 57.2l12.9-3.3c3.4 1.8 7.2 2.8 11.1 2.8 13.7 0 24.8-10.9 24.8-24.4S46 6.8 32.3 6.8Zm0 43.9c-3.4 0-6.6-.9-9.5-2.6l-1.1-.7-6.1 1.6 1.6-5.9-.8-1.1c-2-3.2-3.1-6.8-3.1-10.7 0-10.2 8.5-18.5 19-18.5s19 8.3 19 18.5-8.5 19.4-19 19.4Zm12.1-14.2c-.7-.4-4.1-2-4.7-2.2-.6-.2-1.1-.4-1.5.4-.5.7-1.8 2.2-2.2 2.7-.4.5-.8.5-1.5.2-.7-.4-2.9-1-5.5-3.4-2-1.8-3.4-4-3.8-4.7-.4-.7 0-1.1.3-1.4.3-.3.7-.8 1-1.2.3-.4.4-.7.7-1.2.2-.5.1-.9-.1-1.2-.2-.4-1.5-3.6-2.1-4.9-.5-1.3-1.1-1.1-1.5-1.1h-1.3c-.5 0-1.2.2-1.8.9-.6.7-2.4 2.3-2.4 5.7s2.5 6.6 2.8 7.1c.4.5 4.9 7.6 12.1 10.4 1.7.7 3 1.1 4 1.4 1.7.5 3.2.4 4.4.3 1.4-.2 4.1-1.7 4.7-3.3.6-1.6.6-3 .4-3.3-.2-.3-.6-.5-1.3-.9Z"/>',
    '</svg>'
  ].join("");

  var link = document.createElement("a");
  link.className = "whatsapp-float";
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener";
  link.setAttribute("aria-label", "Chat with Horra on WhatsApp");
  link.innerHTML =
    '<span class="whatsapp-float__icon">' + iconSvg + '</span>' +
    '<span class="whatsapp-float__text">' +
    // '<span class="whatsapp-float__eyebrow">Online</span>' +
    '<span class="whatsapp-float__label">WhatsApp</span>' +
    '</span>';

  document.head.appendChild(style);
  document.body.appendChild(link);
})();
