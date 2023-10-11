function setPhoneMask() {
  const phoneInput = document.querySelector('input[type="tel"]');
  const im = new Inputmask('+7 (999) 999-99-99');
  im.mask(phoneInput);
}

document.addEventListener('DOMContentLoaded', () => {
  setPhoneMask();
});
