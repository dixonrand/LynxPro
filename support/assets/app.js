/*
 * FinishLynx Support Portal — shared behavior.
 * Per spec: vanilla JS, no frameworks.
 *
 * Phase 2: just the chrome wiring (active nav class).
 * Later phases will add: tree navigation, search filtering,
 * breadcrumb state, feedback button → localStorage.
 */

(function () {
  // Highlight the current page in .site-nav
  function markActiveNav() {
    var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    if (here === '') here = 'index.html';
    var links = document.querySelectorAll('.site-nav a');
    links.forEach(function (a) {
      var href = (a.getAttribute('href') || '').toLowerCase();
      if (!href || href.indexOf('#') === 0 || /^https?:/.test(href)) return;
      var target = href.split('?')[0].split('#')[0];
      if (target === here || (here === 'index.html' && target === '')) {
        a.classList.add('active');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', markActiveNav);
})();
