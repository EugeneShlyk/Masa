const Swiper = window.Swiper;
const slider = document.querySelector('.hero__slider');

export const initNewsSlider = () =>
  slider &&
  new Swiper('.news__slider', {
    navigation: {
      nextEl: '.news__button-right',
      prevEl: '.news__button-left',
    },
    pagination: {
      el: '.news__slider-pagination',
      clickable: true,
      renderBullet:
        function (index, className) {
          return '<span class="' +
            className +
            '">' +
            (
              index + 1
            ) +
            '</span>';
        },
    },
    slidesPerView: 'auto',
    spaceBetween: 32,
    simulateTouch: false,
  });
