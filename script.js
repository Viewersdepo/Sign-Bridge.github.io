document.addEventListener('DOMContentLoaded', () => {
  // 1. Hamburger toggle
  const ham = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    mobileNav.classList.toggle('open');
  });

  // 2. Day/Night toggle
  const themeBtn = document.getElementById('theme-toggle');
  const body = document.body;
  // initialize
  if (localStorage.getItem('theme') === 'dark') body.classList.add('dark');
  themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  });

  // 3. Fade-in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.section').forEach(sec => observer.observe(sec));

  // 4. Navbar background on scroll
  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
});
