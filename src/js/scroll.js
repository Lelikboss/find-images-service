import { refs } from './refs.js';
export function scrollIntoView() {
  refs.galleryContainer.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}
export function showToTopBtn() {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 140) {
    refs.toTopBtnEl.classList.add('top--hidden');
  } else {
    refs.toTopBtnEl.classList.remove('top--hidden');
  }
}
export function scrollTop() {
  refs.galleryContainer.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}
