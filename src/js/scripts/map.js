const PLACEMARKS = [
  {
    lalitude: 55.615924,
    longitude: 37.448842,
    attr: 'main-ofic',
    img: './img/icons/ellipse-mark.svg',
  },
];

function removeContent(map) {
  map.behaviors.disable('dblClickZoom');
  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');
}

document.addEventListener('DOMContentLoaded', () => {
  function init() {
    const mainMap = new ymaps.Map('map', {
      center: [55.595924, 37.458842],
      zoom: 12,
    });

    PLACEMARKS.forEach((placemark) => {
      const newPlacemark = new ymaps.Placemark(
        [placemark.lalitude, placemark.longitude],
        {
          myDataAttr: placemark.attr,
        },
        {
          hideIconOnBalloonOpen: false,
          iconLayout: 'default#image',
          iconImageHref: window.innerWidth > 769 ? placemark.img : './img/icons/ellipse-mark.svg',
          iconImageSize: window.innerWidth > 769 ? [50, 50] : [40, 40],
          iconImageOffset: window.innerWidth > 769 ? [-25, -25] : [-20, -20],
        }
      );

      if (window.innerWidth < 769) {
        const panel = document.querySelector('.map-panel');

        newPlacemark.events.add('click', () => {
          document.body.classList.add('map-open');
          panel.classList.add('active');
        });

        const closeBtn = document.querySelector('.map-panel__btn-close');
        closeBtn.addEventListener('click', () => {
          document.body.classList.remove('map-open');
          panel.classList.remove('active');
        });
      }

      mainMap.geoObjects.add(newPlacemark);
      removeContent(mainMap);
    });
  }

  ymaps.ready(init);
});
