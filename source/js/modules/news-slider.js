const Swiper = window.Swiper;
const slider = document.querySelector('.hero__slider');

export const initNewsSlider = () =>
  slider &&
  new Swiper('.hero__slider', {
    // navigation: {
    //   nextEl: '.programs__button-right',
    //   prevEl: '.programs__button-left',
    // },
    // pagination: {
    //   el: '.hero__box-button',
    //   clickable: true,
    // },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 32,
    simulateTouch: false,
  });
