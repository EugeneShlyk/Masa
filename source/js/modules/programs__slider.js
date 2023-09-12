const Swiper = window.Swiper;
const slider = document.querySelector('.programs__slider');


export const initProgramsSlider = () =>
  slider &&
  new Swiper('.programs__slider', {
    navigation: {
      nextEl: '.programs__button-right',
      prevEl: '.programs__button-left',
    },
    scrollbar: {
      el: '.programs__scroll',
      draggable: true,
    },
    simulateTouch: false,
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
        spaceBetween: 3,
      },
      1222: {
        slidesPerView: 3,
        spaceBetween: 3,
      },
      1240: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });

export const focusSlider = (iSlider, swiper) => {
  const links = iSlider.querySelectorAll('a');

  const func = function (evt) {
    const slides = iSlider.querySelectorAll('.swiper-slide');
    const iTarget = evt.target.closest('.swiper-slide');
    const index = Array.from(slides).indexOf(iTarget);
    swiper.slideTo(index);
  };

  links.forEach((
    (link) => {
      links.length && link.addEventListener('focus', func);
    }
  ));
};

focusSlider(slider, Swiper);
