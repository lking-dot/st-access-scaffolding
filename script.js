const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

document.querySelector('[data-contact-form]')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formElement = event.currentTarget;
  const form = new FormData(formElement);
  const status = formElement.querySelector('.form-status');
  const submit = formElement.querySelector('button[type="submit"]');
  const payload = Object.fromEntries(form.entries());
  submit.disabled = true;
  status.classList.remove('is-error');
  status.textContent = 'Sending your enquiry…';
  try {
    const response = await fetch(formElement.dataset.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (!response.ok) throw new Error('Enquiry could not be sent');
    formElement.reset();
    status.textContent = 'Thanks — ST Access has your enquiry and will be in touch.';
  } catch (error) {
    status.classList.add('is-error');
    status.textContent = 'We could not send that just now. Please call 07963 351252 or email st@accessscaffolding.uk.';
  } finally {
    submit.disabled = false;
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();
