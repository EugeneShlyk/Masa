const header = document.querySelector('.header');
const headerInner = header.querySelector('.header__inner');

const navigationToggle = document.querySelector('.navigation__button');
const body = document.querySelector('body');
const menuLinks = document.querySelectorAll('.navigation__list-item-link');

export const toggleMenuHandler = () => {

  menuLinks.forEach((link) => link.addEventListener('click', closeModal));
  navigationToggle.addEventListener('click', () => {
    if (header.classList.contains('header--navigation-closed')) {
      header.classList.remove('header--navigation-closed');
      header.classList.add('header--navigation-opened');
      navigationToggle.classList.remove('navigation__button--closed-menu');
      navigationToggle.classList.add('navigation__button--opened-menu');
      body.classList.add('body-navigation-overlay');
      document.addEventListener('click', onOverlayClick);
    } else {
      closeModal();
      document.removeEventListener('click', onOverlayClick);
    }
  });
};

const closeModal = () => {
  header.classList.add('header--navigation-closed');
  header.classList.remove('header--navigation-opened');
  navigationToggle.classList.add('navigation__button--closed-menu');
  navigationToggle.classList.remove('navigation__button--opened-menu');
  body.classList.remove('body-navigation-overlay');
};

const onOverlayClick = (evt) => {
  if (evt.target === body || evt.target === headerInner) {
    closeModal();
  }
};
