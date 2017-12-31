export default function initHamburger() {

  var hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.header-menu');

  function toggleMenu() {
      hamburger.classList.toggle('open');
      menu.classList.toggle('header-menu__show');
      document.body.classList.toggle('scroll');
  }
      hamburger.addEventListener('click', toggleMenu);

}