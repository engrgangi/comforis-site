// ── NAV SCROLL ──
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) nav?.classList.add('scrolled');
  else nav?.classList.remove('scrolled');
});

// ── FADE-IN OBSERVER ──
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
fadeEls.forEach(el => observer.observe(el));

// ── ACTIVE NAV LINK ──
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});

// ── MOBILE MENU ──
const toggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
toggle?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('open');
});

// ── PILLAR TABS (services page) ──
const pillarBtns = document.querySelectorAll('.pillar-nav-btn');
const pillarDetails = document.querySelectorAll('.pillar-detail');
pillarBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.pillar;
    pillarBtns.forEach(b => b.classList.remove('active'));
    pillarDetails.forEach(d => d.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(target)?.classList.add('active');
  });
});

// ── PORTAL TABS ──
const portalTabs = document.querySelectorAll('.portal-tab');
const portalForms = document.querySelectorAll('.portal-form');
portalTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    portalTabs.forEach(t => t.classList.remove('active'));
    portalForms.forEach(f => f.style.display = 'none');
    tab.classList.add('active');
    document.getElementById(target)?.style && (document.getElementById(target).style.display = 'block');
  });
});

// ── CONTACT FORM ──
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('.form-submit');
  btn.textContent = 'Sending...';
  setTimeout(() => {
    btn.textContent = 'Message Sent ✓';
    btn.style.background = 'var(--teal)';
    contactForm.reset();
    setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; }, 3000);
  }, 1500);
});

// ── MARQUEE DUPLICATE ──
const track = document.querySelector('.marquee-track');
if (track) {
  track.innerHTML += track.innerHTML;
}

// ── COUNTER ANIMATION ──
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current) + (el.dataset.suffix || '');
    }, 16);
  });
}
const statsEl = document.querySelector('.hero-stats');
if (statsEl) {
  const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { animateCounters(); statsObserver.disconnect(); }
  });
  statsObserver.observe(statsEl);
}
