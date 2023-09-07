const container = document.querySelector('.news__box-inner-button-category');

let currentButton = container.querySelector('.news__button-category--current');

export const changeClassNewsCategoryButton = () => {
  container.addEventListener('click', (evt) => {
    if (evt.target.matches('.news__button-category')) {
      currentButton.classList.remove('news__button-category--current');
      evt.target.classList.add('news__button-category--current');
      currentButton = evt.target;
      // return currentButton;
    }
  });
};
