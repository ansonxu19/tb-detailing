// TB Detailing — main.js

const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Gallery filters
const filterBtns = document.querySelectorAll('.filters button');
const items = document.querySelectorAll('.g-item');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    items.forEach(it => it.classList.toggle('hidden', f !== 'all' && it.dataset.cat !== f));
  });
});

// Lightbox
const lb = document.querySelector('.lightbox');
if (lb) {
  const lbImg = lb.querySelector('img');
  items.forEach(it => it.addEventListener('click', () => {
    lbImg.src = it.querySelector('img').src;
    lbImg.alt = it.querySelector('img').alt;
    lb.classList.add('open');
  }));
  lb.addEventListener('click', e => { if (e.target !== lbImg) lb.classList.remove('open'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
}

// Reviews marquee: duplicate cards once so the loop is seamless
const marquee = document.querySelector('.marquee');
if (marquee && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  marquee.innerHTML += marquee.innerHTML;
}

// Videos: play only while on screen (saves battery, keeps loop tidy)
const vids = document.querySelectorAll('.video-frame video');
if (vids.length) {
  const vio = new IntersectionObserver(entries => {
    entries.forEach(e => { e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause(); });
  }, { threshold: 0.3 });
  vids.forEach(v => vio.observe(v));
}

// Quote form (mailto handoff until a form backend is connected)
const form = document.querySelector('#quote-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(form);
    const body = encodeURIComponent(
      `New quote request from the website\n\n` +
      `Name: ${d.get('name')}\nPhone: ${d.get('phone')}\nVehicle: ${d.get('vehicle')}\n` +
      `Service: ${d.get('service')}\nPreferred timing: ${d.get('timing')}\n\nDetails:\n${d.get('details')}`
    );
    window.location.href = `mailto:tyler@tbdetailing.com.au?subject=${encodeURIComponent('Quote request — ' + d.get('name'))}&body=${body}`;
    form.querySelector('.form-note').textContent = 'Your email app should have opened with the details pre-filled — just hit send. Or call Tyler on 0420 605 919.';
  });
}
