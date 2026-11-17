// The page remains visible without JavaScript. Animate each block only once.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const targets = document.querySelectorAll<HTMLElement>(
  '.hero-inner > div, .diagram, .syllabus > h2, ' +
  '.study-page > h1, .reading-section, .study-route > li, .test, ' +
  '.campus-footer-photo, .footer-panel',
);

if (!motionPreference.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('reveal-in');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });

  targets.forEach((target) => observer.observe(target));

  motionPreference.addEventListener('change', (event) => {
    if (event.matches) {
      observer.disconnect();
      targets.forEach((target) => target.classList.remove('reveal-in'));
    }
  });

  // Do not leave a paused entrance effect on a keyboard-focused link.
  document.addEventListener('focusin', () => {
    targets.forEach((target) => {
      if (target.contains(document.activeElement)) {
        target.classList.remove('reveal-in');
        observer.unobserve(target);
      }
    });
  });
}
