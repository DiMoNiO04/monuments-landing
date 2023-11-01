let materialsSlider = null;
let productionSlider = null;

const initMaterialSlider = () => {
  if (window.matchMedia('(max-width: 769px)').matches && !materialsSlider) {
    materialsSlider = new Swiper('.materials__slider', {
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
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      scale: 0.795,
      slideShadows: false,
      centeredSlides: true,
    },
    speed: 1000,
    observer: true,
    loop: false,
    observeParents: true,
    slideToClickedSlide: true,

    navigation: {
      prevEl: '.gallery .swiper__arrows-prev',
      nextEl: '.gallery .swiper__arrows-next',
    },

    breakpoints: {
      769: {
        loop: true,
      },
    },
  });
};

const initProjectsSwiper = () => {
  new Swiper('.projects__slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      scale: 0.735,
      slideShadows: false,
      centeredSlides: true,
    },
    speed: 1000,
    observer: true,
    loop: false,
    observeParents: true,
    slideToClickedSlide: true,

    navigation: {
      prevEl: '.projects .swiper__arrows-prev',
      nextEl: '.projects .swiper__arrows-next',
    },

    breakpoints: {
      769: {
        loop: true,
      },
    },
  });
};

const initReviewsSwiper = () => {
  new Swiper('.reviews__slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      scale: 0.975,
      slideShadows: false,
      centeredSlides: true,
    },
    speed: 1000,
    observer: true,
    loop: false,
    observeParents: true,
    slideToClickedSlide: true,
    spaceBetween: 110,

    navigation: {
      prevEl: '.reviews .swiper__arrows-prev',
      nextEl: '.reviews .swiper__arrows-next',
    },

    breakpoints: {
      769: {
        loop: true,
      },
    },
  });
};

const initCatalogSwiper = () => {
  new Swiper('.catalog__slider', {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 30,
    observer: true,
    loop: false,
    observeParents: true,
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
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 30,
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
