/**
 * PORTFOLIO JAVASCRIPT — AIMEN KAMAL EDDINE BENZAOUI
 * Features: Theme persistence, Language switching (IT/EN/AR)
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initLanguageSwitcher();
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

/* --------------------------------------------------------------------------
   2. Language Switcher (i18n)
   -------------------------------------------------------------------------- */
function initLanguageSwitcher() {
  const langSwitch = document.getElementById('lang-switcher');
  if (!langSwitch) return;

  const savedLang = localStorage.getItem('lang') || 'it';
  langSwitch.value = savedLang;

  langSwitch.addEventListener('change', (e) => {
    const lang = e.target.value;
    localStorage.setItem('lang', lang);
    applyLanguage(lang);
  });
}

/* ... existing functions ... */
function initMobileNav() {}
function initScrollAnimations() {}
function initScrollSpy() {}
function initBackToTop() {}
function initIcsTelemetrySimulator() {}
function initContactForm() {}
