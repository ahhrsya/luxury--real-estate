/* ============================================
   AURUM ESTATES — Main JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeroStagger();
  initScrollObserver();
  initSmoothScroll();
});

/* ── Navigation ── */
function initNavigation() {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('navHamburger');
  const overlay = document.getElementById('navMobileOverlay');
  
  if (!nav || !hamburger || !overlay) return;

  const mobileLinks = overlay.querySelectorAll('.nav__link, .btn');

  // Scroll — add background
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 80) {
          nav.classList.add('nav--scrolled');
        } else {
          nav.classList.remove('nav--scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : '';
  });

  // Close overlay on link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* ── Hero Headline Stagger ── */
function initHeroStagger() {
  const headline = document.getElementById('heroHeadline');
  if (!headline) return;

  // Check for reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    headline.querySelectorAll('.word').forEach(w => {
      w.style.opacity = '1';
      w.style.transform = 'none';
    });
    return;
  }

  // Wrap each text node's words in spans
  const processNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const words = node.textContent.split(/(\s+)/);
      const fragment = document.createDocumentFragment();
      words.forEach(word => {
        if (word.trim() === '') {
          fragment.appendChild(document.createTextNode(word));
        } else {
          const span = document.createElement('span');
          span.className = 'word';
          span.textContent = word;
          fragment.appendChild(span);
        }
      });
      node.parentNode.replaceChild(fragment, node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // For <em>, <br> etc — process children
      if (node.tagName === 'BR') return;
      if (node.tagName === 'EM' || node.tagName === 'I') {
        Array.from(node.childNodes).forEach(processNode);
      }
    }
  };

  Array.from(headline.childNodes).forEach(processNode);

  // Stagger reveal each word
  const words = headline.querySelectorAll('.word');
  words.forEach((word, i) => {
    setTimeout(() => {
      word.classList.add('revealed');
    }, 300 + i * 80);
  });
}

/* ── Scroll Observer ── */
function initScrollObserver() {
  const sections = document.querySelectorAll('.animate-on-scroll');
  
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    sections.forEach(el => el.classList.add('in-view'));
    return;
  }

  const options = {
    threshold: 0.1, // Reduced to 10% for earlier triggering
    rootMargin: '0px', // Removed negative margin to ensure intersection is caught correctly
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(el => {
    observer.observe(el);
    
    // Safety check: if the section is already partially in view on load
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('in-view');
      observer.unobserve(el);
    }
  });

  // Global safety: if something is still hidden after 2 seconds, show it
  setTimeout(() => {
    sections.forEach(el => {
      if (!el.classList.contains('in-view')) {
        el.classList.add('in-view');
      }
    });
  }, 3000);
}

/* ── Smooth Scroll ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // Nav height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}
