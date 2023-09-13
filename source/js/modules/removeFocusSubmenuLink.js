const navigationList = document.querySelector('.navigation-list');
const btnSubMenu = navigationList.querySelectorAll('.navigation-list__item-link-submenu');

export const removeFocusOnSubmenu = () => {
  btnSubMenu.forEach((item) =>
    item.addEventListener('click', () =>
      item.closest('.navigation-list__item').querySelector('.navigation-list__sublist')
          .classList.toggle('sublist-active')
    ));
};
