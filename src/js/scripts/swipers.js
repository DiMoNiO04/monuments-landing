import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

let materialsSlider = null;
let productionSlider = null;

const initMaterialSlider = () => {
  if (window.matchMedia('(max-width: 769px)').matches && !materialsSlider) {
    materialsSlider = new Swiper('.materials__slider', {
      modules: [Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 1.65,
      initialSlide: 1,
      spaceBetween: 50,
      centeredSlides: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  } else if (!window.matchMedia('(max-width: 769px)').matches && materialsSlider) {
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
      769: {
        slidesPerView: 2.24,
        centeredSlides: true,
        initialSlide: 4,
        loop: true,
      },
    },

    on: {
      afterInit: (swiper) => {
        if (!window.matchMedia('(max-width: 769px)').matches) {
          swiper.update();
        }
      },
      slideChange: (swiper) => {
        if (!window.matchMedia('(max-width: 769px)').matches) {
          swiper.update();
        }
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
      769: {
        slidesPerView: 2.24,
        centeredSlides: true,
        initialSlide: 4,
        loop: true,
      },
    },

    on: {
      afterInit: (swiper) => {
        if (!window.matchMedia('(max-width: 769px)').matches) {
          swiper.update();
        }
      },
      slideChange: (swiper) => {
        if (!window.matchMedia('(max-width: 769px)').matches) {
          swiper.update();
        }
      },
    },
  });
};

const initReviewsSwiper = () => {
  new Swiper('.reviews__slider', {
    modules: [Navigation],
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 40,
    observer: true,
    loop: false,
    observeParents: true,
    initialSlide: 0,
    slideToClickedSlide: true,

    navigation: {
      prevEl: '.reviews .swiper__arrows-prev',
      nextEl: '.reviews .swiper__arrows-next',
    },

    breakpoints: {
      769: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 100,
        loop: true,
      },
    },
  });
};

const initCatalogSwiper = () => {
  new Swiper('.catalog__slider', {
    modules: [Navigation],
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 30,
    observer: true,
    loop: false,
    observeParents: true,
    initialSlide: 0,
    slideToClickedSlide: true,

    navigation: {
      prevEl: '.catalog .swiper__arrows-prev',
      nextEl: '.catalog .swiper__arrows-next',
    },

    breakpoints: {
      769: {
        slidesPerView: 4,
      },
    },
  });
};

const initMainSwiper = () => {
  new Swiper('.main__slider', {
    modules: [Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    observer: true,
    loop: true,
    observeParents: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.main__pagination',
      clickable: true,
    },
  });
};

const initProductionSwiper = () => {
  if (window.matchMedia('(max-width: 769px)').matches && !productionSlider) {
    productionSlider = new Swiper('.production__slider', {
      modules: [Navigation],
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 40,
      observer: true,
      loop: false,
      observeParents: true,
      initialSlide: 0,
      slideToClickedSlide: true,

      navigation: {
        prevEl: '.production .swiper__arrows-prev',
        nextEl: '.production .swiper__arrows-next',
      },

      breakpoints: {
        769: {
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 90,
          loop: true,
        },
      },
    });
  } else if (!window.matchMedia('(max-width: 769px)').matches && productionSlider) {
    productionSlider.destroy();
    productionSlider = null;
  }
};

const initsSliders = () => {
  initMaterialSlider();
  initGallerySwiper();
  initProjectsSwiper();
  initReviewsSwiper();
  initCatalogSwiper();
  initMainSwiper();
  initProductionSwiper();
};

document.addEventListener('DOMContentLoaded', initsSliders);
window.addEventListener('resize', initsSliders);
