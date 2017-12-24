/*===styles===*/
import 'normalize.css';
import '../../scss/layout/fonts.scss';
import '../../scss/layout/base.scss';
import '../../scss/layout/adjusment.scss';
import '../../scss/layout/header.scss';
import '../../scss/layout/footer.scss';
import './about.scss';


var hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.header-menu');

function toggleMenu() {
  hamburger.classList.toggle('open');
  menu.classList.toggle('header-menu__show');
  document.body.classList.toggle('scroll');
}
hamburger.addEventListener('click', toggleMenu);
