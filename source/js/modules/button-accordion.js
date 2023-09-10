const buttons = document.querySelectorAll('.faq__inner-item-button');

export const changeClassButtonAccordion = () => {
  if (changeClassButtonAccordion) {
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        buttons.forEach((item) => {
          item.classList.remove('active');
        });
        if (button.closest('.is-active')) {
          button.classList.remove('active');
        } else {
          button.classList.add('active');
        }
      });
    });
  }
};
