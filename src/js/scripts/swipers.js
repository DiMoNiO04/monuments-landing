import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

let materialsSlider = null;

// const initGallerySlider = (swiper) => {
//   // params
//   const GAP = 30; // gap between the slides, multiplied by 2 (15 * 2 = 30)
//   const SCALE_SLIDE = 1; // scale for regular slides
//   const SCALE_ACTIVE_SLIDE = 1.1; // scale for active slide
//   const VISIBLE_SLIDES_AMOUNT = 3; // slides per view
//   const CONTAINER_WIDTH = 1760; // swiper container width

//   // main variables
//   const { slides } = swiper; // array with slides
//   const slideWidth = CONTAINER_WIDTH / VISIBLE_SLIDES_AMOUNT
//     - (GAP / 2.12) * VISIBLE_SLIDES_AMOUNT;
//   // one slide width
//   const gapPercent = (GAP / slideWidth) * 100; // gap between the slides (in %)
//   const activeSlideGap = (SCALE_SLIDE / 4) * (SCALE_ACTIVE_SLIDE / 4) * 100 +
// gapPercent / 6; // gap for next & prev slide
//   const slideGap = (SCALE_SLIDE / 2) * (SCALE_SLIDE / 4) * 100 + gapPercent / 1.8;
// gap for regular slides

//   if (slides.length) {
//     const arrPrev = []; // array with slides that before active slide
//     const arrNext = []; // array with slides that after active slide

//     for (let i = 0; i < slides.length; i++) {
//       const slide = slides[i];

//       // set scale to regular slides
//       if (slide.classList.contains('swiper-slide-next')) {
//         console.log('1');
//         slide.style.transform = `scale(${SCALE_SLIDE}, 1) translateX(7rem)`;
//       } else if (slide.classList.contains('swiper-slide-prev')) {
//         slide.style.transform = `scale(${SCALE_SLIDE}, 1) translateX(-7rem)`;
//       } else {
//         slide.style.transform = `scale(${SCALE_SLIDE}, 1)`;
//       }

//       // check if slides are previous / next
//       // if (i < swiper.activeIndex) {
//       //   arrPrev.push(slide)
//       //   slide.style.transform = `scale(${SCALE_SLIDE}, 1) translateX(12%)`
//       // } else if (i > swiper.activeIndex) {
//       //   arrNext.push(slide)
//       //   slide.style.transform = `scale(${SCALE_SLIDE}, 1) translateX(-12%)`
//       // }

//       // scale active slide
//       slides[
//         swiper.activeIndex
//       ].style.transform = `scale(${SCALE_ACTIVE_SLIDE}, 1.37)`;
//     }

//     // arrPrev.reverse()
//     // if (arrPrev.length) {
//     //   for (let i = 2; i < arrPrev.length; i += 2) {
//     //     const el = arrPrev[i]
//     //     el.style.transform = `scale(${SCALE_SLIDE}, 1) translateX(-${
//     //       (SCALE_SLIDE / 2) * 10
//     //     }%)`
//     //   }
//     //   // arrPrev[0].style.transform = `scale(${SCALE_SLIDE}, 1)
// translateX(-${activeSlideGap}%)`
//     //   // arrPrev[1].style.transform = `scale(${SCALE_SLIDE}, 1)
// translateX(-${slideGap}%)`
//     // }
//     // if (arrNext.length) {
//     //   for (let i = 2; i < arrNext.length; i += 2) {
//     //     const el = arrNext[i]
//     //     el.style.transform = `scale(${SCALE_SLIDE}, 1) translateX(${
//     //       (SCALE_SLIDE / 2) * 10
//     //     }%`
//     //   }
//     //   // arrNext[0].style.transform = `scale(${SCALE_SLIDE}, 1)
// translateX(${activeSlideGap}%)`
//     //   // arrNext[1].style.transform = `scale(${SCALE_SLIDE}, 1) translateX(${slideGap}%)`
//     // }
//   }
// };

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
        loop: false,
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
});

window.addEventListener('resize', initMaterialSlider);
