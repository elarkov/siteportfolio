export default function initFliper(){

  var fliper = document.querySelector('.flipper'),
      authBtn = document.querySelector('.signin'),
      button = document.querySelector('.button-auth');

      button.addEventListener('click', doFlip);

  function doFlip() {
      fliper.classList.toggle('flipped');
      authBtn.style.opacity = '0';
  }

}