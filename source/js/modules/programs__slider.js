const Swiper = window.Swiper;
const slider = document.querySelector('.programs__slider');


export const initProgramsSlider = () =>
  slider &&
  new Swiper('.programs__slider', {
    // navigation: {
    //   nextEl: '.tours__header-part-button--to-right',
    //   prevEl: '.tours__header-part-button--to-left',
    // },
    // simulateTouch: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });
