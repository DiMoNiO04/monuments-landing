const { body } = document;
const header = document.querySelector('.header');

const clickLink = () => {
  const links = document.querySelectorAll('.header .menu__link');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      body.classList.remove('menu-open');
    });
  });
};

const scroll = () => {
  window.onscroll = () => {
    if (window.pageYOffset > 16) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  };
};

const burger = () => {
  const closeMenu = document.querySelector('.header__close');
  const openMenu = document.querySelector('.header__burger');

  openMenu.addEventListener('click', () => {
    body.classList.add('menu-open');
  });

  closeMenu.addEventListener('click', () => {
    body.classList.remove('menu-open');
  });
};

const scrollLoad = () => {
  if (window.pageYOffset >= 16) {
    header.classList.add('scroll');
  }
};

const actionHeader = () => {
  if (window.innerWidth < 769) {
    burger();
    clickLink();
  }

  scroll();
  scrollLoad();
};

document.addEventListener('DOMContentLoaded', () => {
  actionHeader();
});
window.addEventListener('resize', () => {
  actionHeader();
});
