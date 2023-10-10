import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

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

const initGallerySwiper = () => {
  new Swiper('.gallery__slider', {
    modules: [Navigation],
    speed: 1000,
    slidesPerView: 1,
    observer: true,
    loop: false,
    observeParents: true,
    initialSlide: 0,
    slideToClickedSlide: true,

    navigation: {
      prevEl: '.gallery .swiper__arrows-prev',
      nextEl: '.gallery .swiper__arrows-next',
    },

    breakpoints: {
      768: {
        slidesPerView: 2.24,
        centeredSlides: true,
        initialSlide: 4,
        loop: true,
      },
    },

    on: {
      afterInit: (swiper) => {
        if (!window.matchMedia('(max-width: 768px)').matches) {
          swiper.update();
        }
      },
      slideChange: (swiper) => {
        if (!window.matchMedia('(max-width: 768px)').matches) {
          swiper.update();
        }
        // if(swiper.activeIndex === 0) {
        // document.querySelector('.gallery__wrapper').style.marginLeft = '0'
        // } else {
        // document.querySelector('.gallery__wrapper').style.marginLeft = '-16rem'
        // }
      },
    },
  });
};

const initProjectsSwiper = () => {
  new Swiper('.projects__slider', {
    modules: [Navigation],
    speed: 1000,
    slidesPerView: 1,
    observer: true,
    loop: false,
    observeParents: true,
    initialSlide: 0,
    slideToClickedSlide: true,

    navigation: {
      prevEl: '.projects .swiper__arrows-prev',
      nextEl: '.projects .swiper__arrows-next',
    },

    breakpoints: {
      768: {
        slidesPerView: 2.24,
        centeredSlides: true,
        initialSlide: 4,
        loop: true,
      },
    },

    on: {
      afterInit: (swiper) => {
        if (!window.matchMedia('(max-width: 768px)').matches) {
          swiper.update();
        }
      },
      slideChange: (swiper) => {
        if (!window.matchMedia('(max-width: 768px)').matches) {
          swiper.update();
        }
        // if(swiper.activeIndex === 0) {
        // document.querySelector('.gallery__wrapper').style.marginLeft = '0'
        // } else {
        // document.querySelector('.gallery__wrapper').style.marginLeft = '-16rem'
        // }
      },
    },
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initMaterialSlider();
  initGallerySwiper();
  initProjectsSwiper();
});

window.addEventListener('resize', () => {
  initMaterialSlider();
  initGallerySwiper();
  initProjectsSwiper();
});
