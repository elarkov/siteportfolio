/*===styles===*/
import 'normalize.css';
import '../../scss/layout/fonts.scss';
import '../../scss/layout/base.scss';
import '../../scss/layout/adjusment.scss';
import '../../scss/layout/header.scss';
import '../../scss/layout/footer.scss';
import './works.scss';

//hamburger menu
var hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.header-menu');

function toggleMenu() {
  hamburger.classList.toggle('open');
  menu.classList.toggle('header-menu__show');
  document.body.classList.toggle('scroll');
}
hamburger.addEventListener('click', toggleMenu);

//blur effects

var blur = (function () {
  var wrapper = document.querySelector('.form-content'),
  form = document.querySelector('.form-content__blur');

  return {
    set: function() {
      var imgWidth = document.querySelector('.form-content').offsetWidth,
          posLeft = -wrapper.offsetLeft,
          posTop = -wrapper.offsetTop,
          blurCss = form.style;

      blurCss.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
      blurCss.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
    }
  }
}());

blur.set();

window.onresize = function() {
  blur.set();
};