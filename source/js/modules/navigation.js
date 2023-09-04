const header = document.querySelector('.header');
const headerInner = header.querySelector('.header__inner');

// const navigation = document.querySelector('.navigation');
const navigationToggle = document.querySelector('.navigation__button');
const body = document.querySelector('body');
const menuLinks = document.querySelectorAll('.navigation__list-item-link');

// const sublistButtons = document.querySelectorAll('.navigation-list__item-link-submenu');

export const toggleMenuHandler = () => {
  menuLinks.forEach((link) => link.addEventListener('click', closeModal));

  navigationToggle.addEventListener('click', () => {
    if (header.classList.contains('header--navigation-closed')) {
      header.classList.remove('header--navigation-closed');
      header.classList.add('header--navigation-opened');
      navigationToggle.classList.remove('navigation__button--closed-menu');
      navigationToggle.classList.add('navigation__button--opened-menu');
      // sublistButton.addEventListener('click', onSubmenuClick);
      body.classList.add('body-navigation-overlay');
      document.addEventListener('click', onOverlayClick);
    } else {
      closeModal();
      // sublistButton.removeEventListener('click', onSubmenuClick);
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

// const onSubmenuClick = () => {
//   sublistButtons.forEach((item) =>
//     item.addEventListener('click', () =>
//       item.closest('.menu-item').querySelector('.sub-menu').classList.toggle('active')
//     ));
// };

// const onSubmenuClick = () => {
//   if (subList.classList.contains('navigation-list__sublist--opened')) {
//     subList.classList.remove('navigation-list__sublist--opened');
//     sublistButton.classList.remove('navigation-list__item-link-submenu-opened');
//   } else {
//     subList.classList.add('navigation-list__sublist--opened');
//     sublistButton.classList.add('navigation-list__item-link-submenu-opened');
//   }
// };

const onOverlayClick = (evt) => {
  if (evt.target === body || evt.target === headerInner) {
    closeModal();
  }
};
