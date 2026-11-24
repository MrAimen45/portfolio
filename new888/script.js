/**
 * PORTFOLIO JAVASCRIPT — AIMEN KAMAL EDDINE BENZAOUI
 * Features: Theme persistence (language switching lives in i18n.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initScrollAnimations();
  initScrollSpy();
  initBackToTop();
  initIcsTelemetrySimulator();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. Theme Toggle
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const htmlEl = document.documentElement;

  const storedTheme = localStorage.getItem('theme') || 'dark';
  htmlEl.setAttribute('data-theme', storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', nextTheme);
      localStorage.setItem('theme', nextTheme);
    });
  }
}

/* 2. Language switching is handled entirely by js/i18n.js */

/* ... existing functions ... */
function initMobileNav() {}
function initScrollAnimations() {}
function initScrollSpy() {}
function initBackToTop() {}
function initIcsTelemetrySimulator() {}
function initContactForm() {}
