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
