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
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 2,
        },
      },
    },
    simulateTouch: false,
  });
// 1260: {
//   slidesPerView: 'auto',
//   spaceBetween: 22,
// },
// 1250: {
//   slidesPerView: 'auto',
//   spaceBetween: 17,
// },
// 1240: {
//   slidesPerView: 'auto',
//   spaceBetween: 12,
// },
