import {changeClassButtonAccordion} from './modules/button-accordion.js';
import {initCommentsSlider} from './modules/comments-slider.js';
import {initHeroSlider} from './modules/hero-slider.js';
import {initNewsSlider} from './modules/news-slider.js';
import {initProgramsSlider} from './modules/programs__slider.js';
import {removeFocusOnSubmenu} from './modules/removeFocusSubmenuLink.js';
import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {Burger} from './vendor/burger.js';
import {initAccordions} from './vendor/init-accordion.js';
import {CustomSelect} from './vendor/custom-select/custom-select.js';
import {changeClassNewsCategoryButton} from './modules/news-button-categoty.js';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  initHeroSlider();
  const burger = new Burger();
  burger.init();
  initAccordions();
  removeFocusOnSubmenu();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    initProgramsSlider();
    const select = new CustomSelect();
    select.init();
    initNewsSlider();
    changeClassNewsCategoryButton();
    changeClassButtonAccordion();
    initCommentsSlider();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
