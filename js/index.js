// Modal form
const openBtn = document.querySelector('.hero-button');
const closeBtn = document.querySelector('.modal-close');
const backdrop = document.querySelector('.backdrop');

openBtn.addEventListener('click', () => {
  backdrop.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  backdrop.classList.remove('is-open');
});

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) {
    backdrop.classList.remove('is-open');
  }
});
