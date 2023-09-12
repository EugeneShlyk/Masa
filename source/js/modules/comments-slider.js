const Swiper = window.Swiper;
const slider = document.querySelector('.comments__slider');


export const initCommentsSlider = () =>
  slider &&
  new Swiper('.comments__slider', {
    navigation: {
      nextEl: '.comments__button-right',
      prevEl: '.comments__button-left',
    },
    scrollbar: {
      el: '.comments__scroll',
      draggable: true,
    },
    simulateTouch: false,
    breakpoints: {
      1280: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 6,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
    },
  });
