(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = window.ORBITREACH_CONTACT_EMAIL || 'hello@yourdomain.com';
      const status = form.querySelector('[data-form-status]');
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const subject = encodeURIComponent(`Website enquiry from ${data.get('name')}`);
      const body = encodeURIComponent(
        `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company') || 'Not provided'}\nService: ${data.get('service') || 'Not specified'}\n\nMessage:\n${data.get('message')}`
      );
      status.textContent = 'Your email app should open with your enquiry ready to send. Please press Send in your email app.';
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
  }
})();
