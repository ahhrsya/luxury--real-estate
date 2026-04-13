/* ============================================
   AURUM ESTATES — Animation Controller
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initGoldLines();
  initParallax();
});

/* ── Gold Line Animations ── */
function initGoldLines() {
  const lines = document.querySelectorAll('.gold-line-animated');
  if (!lines.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    lines.forEach(el => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  lines.forEach(el => observer.observe(el));
}

/* ── Subtle Parallax on Hero Background ── */
function initParallax() {
  const heroBg = document.querySelector('.hero__bg img');
  if (!heroBg) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const heroHeight = document.querySelector('.hero').offsetHeight;

        if (scrollY < heroHeight) {
          const offset = scrollY * 0.3;
          heroBg.style.transform = `translateY(${offset}px) scale(1.05)`;
        }

        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial state
  heroBg.style.transform = 'translateY(0) scale(1.05)';
  heroBg.style.transition = 'none';
}
