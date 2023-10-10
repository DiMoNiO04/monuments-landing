import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

let materialsSlider = null;

const initMaterialSlider = () => {
  if (window.matchMedia('(max-width: 768px)').matches && !materialsSlider) {
    materialsSlider = new Swiper('.materials__slider', {
      modules: [Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 1.65,
      initialSlide: 1,
      spaceBetween: 40,
      centeredSlides: true,
      speed: 1500,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
  } else if (!window.matchMedia('(max-width: 768px)').matches && materialsSlider) {
    materialsSlider.destroy();
    materialsSlider = null;
  }
};
initMaterialSlider();
window.addEventListener('resize', initMaterialSlider);
