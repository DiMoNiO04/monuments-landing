document.addEventListener('DOMContentLoaded', () => {
  const { body } = document;
  const closeMenu = document.querySelector('.header__close');
  const openMenu = document.querySelector('.header__burger');

  openMenu.addEventListener('click', () => {
    body.classList.add('menu-open');
  });

  closeMenu.addEventListener('click', () => {
    body.classList.remove('menu-open');
  });

  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 30) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  };
});
