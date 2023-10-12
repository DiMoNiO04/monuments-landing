const PLACEMARKS = [
  {
    lalitude: 55.615924,
    longitude: 37.448842,
    attr: 'main-ofic',
    img: './img/icons/ellipse-mark.svg',
  },
  // {
  //   lalitude: 55.603482126638916,
  //   longitude: 37.451518840271184,
  //   attr: 'main-ofic',
  //   img: './img/icons/mark.svg',
  // },
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

function animationMap(placemark, map) {
  const options = {
    flying: true,
    duration: 1000,
  };

  map.panTo([placemark[0], placemark[1]], options);
}

function changeActiveClass(attrEl, attr, el) {
  if (attrEl === attr) {
    el.classList.add('active');
  } else {
    el.classList.remove('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  function init() {
    const panels = document.querySelectorAll('.map-panel');

    const mainMap = new ymaps.Map('map', {
      center: [55.615924, 37.448842],
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
          iconImageHref: window.innerWidth > 768 ? placemark.img : './img/icons/mark.svg',
          iconImageize: window.innerWidth > 768 ? [20, 20] : [14, 14],
          iconImageOffset: window.innerWidth > 768 ? [-10, -10] : [-7, -7],
        }
      );

      mainMap.geoObjects.add(newPlacemark);

      newPlacemark.events.add('click', () => {
        mainMap.geoObjects.each((geoObject) =>
          geoObject.options.set({
            iconImageHref: './img/icons/mark.svg',
            iconImageize: [20, 20],
            iconImageOffset: [-7, -10],
          })
        );

        panels.forEach((panel) => {
          const attr = panel.getAttribute('data-map-content');
          changeActiveClass(newPlacemark.properties.get('myDataAttr'), attr, panel);
        });

        animationMap([placemark.lalitude, placemark.longitude], mainMap);

        if (window.innerWidth > 768) {
          newPlacemark.options.set('iconImageHref', './img/icons/ellipse-mark.svg');
          newPlacemark.options.set('iconImageize', [50, 50]);
        }

        if (window.innerWidth < 768) {
          document.body.classList.add('map-open');

          const closeBtn = document.querySelector('.map-panel.active .map-panel__btn-close');
          closeBtn.addEventListener('click', () => {
            document.body.classList.remove('map-open');
            panels.forEach((panel) => panel.classList.remove('active'));
          });
        }
      });

      removeContent(mainMap);
    });
  }

  ymaps.ready(init);

  const panelMain = document.querySelectorAll('.map-panel');

  if (window.innerWidth > 768) {
    panelMain[0].classList.add('active');
  }
});
