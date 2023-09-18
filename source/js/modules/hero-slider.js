const Swiper = window.Swiper;
const slider = document.querySelector('.hero__slider');

export const initHeroSlider = () =>
  slider &&
  new Swiper('.hero__slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.hero__box-button',
      clickable: true,
    },
    // autoplay: {
    //   delay: 3000,
    // },
    simulateTouch: false,
  });
