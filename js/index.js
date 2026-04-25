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

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    backdrop.classList.remove('is-open');
  }
});

const menuOpenBtn = document.querySelector('.menu-open-btn');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menuOpenBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

menuCloseBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});
