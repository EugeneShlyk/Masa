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
    breakpoints: {
      1280: {
        slidesPerView: 'auto',
        spaceBetween: 32,
      },
      1260: {
        slidesPerView: 'auto',
        spaceBetween: 22,
      },
      1250: {
        slidesPerView: 'auto',
        spaceBetween: 17,
      },
      1240: {
        slidesPerView: 'auto',
        spaceBetween: 12,
      },
      1230: {
        slidesPerView: 'auto',
        spaceBetween: 8,
      },
      1220: {
        slidesPerView: 'auto',
        spaceBetween: 5,
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 2,
      },
    },
    simulateTouch: false,
  });
