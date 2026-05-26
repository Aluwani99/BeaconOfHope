// ============================================================
// BEACON OF HOPE — Home JS (stat counter)
// ============================================================

(function () {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const step = 16;
    const steps = duration / step;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target + (target >= 100 ? '+' : '');
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current) + (target >= 100 ? '+' : '');
      }
    }, step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
})();
