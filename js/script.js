// ============================================
// Norte Financeiro — interações do site
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  /* Menu mobile */
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuToggle.setAttribute(
        'aria-expanded',
        navLinks.classList.contains('open') ? 'true' : 'false'
      );
    });
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* Filtro do blog */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const postCards = document.querySelectorAll('[data-category]');
  if (filterButtons.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.dataset.filter;
        postCards.forEach((card) => {
          const show = category === 'todos' || card.dataset.category === category;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* FAQ accordion */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-q');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach((i) => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* Formulário de contato (simulado, sem backend) */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const successMsg = document.getElementById('form-success');
      contactForm.reset();
      if (successMsg) {
        successMsg.classList.add('show');
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  /* Newsletter (simulado) */
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = newsletterForm.querySelector('button');
      const original = btn.textContent;
      btn.textContent = 'Inscrito! ✓';
      newsletterForm.reset();
      setTimeout(() => (btn.textContent = original), 2500);
    });
  }

  /* Ano corrente no rodapé */
  document.querySelectorAll('.current-year').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
