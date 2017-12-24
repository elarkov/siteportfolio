/*===styles===*/
import 'normalize.css';
import '../../scss/layout/fonts.scss';
import '../../scss/layout/base.scss';
import '../../scss/layout/adjusment.scss';
import './index.scss';



var fliper = document.querySelector('.flipper'),
  authBtn = document.querySelector('.signin'),
  button = document.querySelector('.button-auth');

  button.addEventListener('click', doFlip);

function doFlip() {
  fliper.classList.toggle('flipped');
  authBtn.style.opacity = '0';
}

