// Visuals: starfield & subtle parallax; UI: nav, reveal, join form
window.Site = (() => {
  const $ = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

  // Elevate header on scroll
  const header = $('[data-elevate]');
  const onScroll = () => {
    header.classList.toggle('elevated', window.scrollY > 8);
  };
  document.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // Mobile nav
  const toggle = $('.nav-toggle');
  const menu = $('#menu');
  toggle?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  // Close menu on link click (mobile)
  $$('#menu a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

  // Active section highlighting
  const navLinks = $$('#menu a');
  const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = '#' + entry.target.id;
      const link = navLinks.find(a => a.getAttribute('href') === id);
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.toggle('active', l === link));
      }
    });
  }, {rootMargin: '-45% 0px -45% 0px', threshold: 0});
  sections.forEach(s => obs.observe(s));

  // Reveal on scroll
  const revealables = $$('[data-reveal]');
  const rObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        const delay = Number(e.target.getAttribute('data-delay') || 0);
        e.target.style.transitionDelay = delay + 'ms';
        rObs.unobserve(e.target);
      }
    });
  }, {rootMargin: '0px 0px -10% 0px'});
  revealables.forEach(el => rObs.observe(el));

  // Join form (demo only; replace with your backend)
  const note = document.getElementById('join-note');
  

  // Starfield background
  const canvas = document.getElementById('space-bg');
  const ctx = canvas.getContext('2d');
  let W, H, stars;
  function resize(){
    W = canvas.width = window.innerWidth * devicePixelRatio;
    H = canvas.height = window.innerHeight * devicePixelRatio;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    stars = Array.from({length: Math.min(260, Math.floor(W*H/40000))}, () => ({
      x: Math.random()*W,
      y: Math.random()*H,
      z: Math.random()*1 + 0.2,
      s: Math.random()*1.8 + 0.2
    }));
  }
  window.addEventListener('resize', resize);
  resize();

  let t = 0;
  function tick(){
    t += 0.002;
    ctx.clearRect(0,0,W,H);
    // subtle gradient
    const g = ctx.createRadialGradient(W*0.2, H*0.1, 0, W*0.2, H*0.1, Math.max(W,H)*0.9);
    g.addColorStop(0, 'rgba(155,165,255,0.05)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0,0,W,H);

    // stars
    for(const st of stars){
      const parallax = Math.sin(t + st.x*0.0003)*0.6*st.z;
      ctx.globalAlpha = 0.6 + st.z*0.4;
      ctx.fillStyle = '#cfd4ff';
      ctx.fillRect(st.x + parallax, st.y + parallax*0.5, st.s, st.s);
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }
  tick();

  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  return {};
})();