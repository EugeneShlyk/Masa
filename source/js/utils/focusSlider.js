export const focusSlider = (iSlider, swiper) => {
  const links = iSlider.querySelectorAll('a');

  const func = (evt) => {
    const slides = iSlider.querySelectorAll('.swiper-slide');
    const iTarget = evt.target.closest('.swiper-slide');
    const index = Array.from(slides).indexOf(iTarget);
    swiper.slideTo(index);
  };

  links.forEach((
    (link) => links.length > 0 && link.addEventListener('focus', func)
  ));
};
