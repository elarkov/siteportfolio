export default function initBlur(){

  var blur = (function () {
    var wrapper = document.querySelector('.form-content'),
      form = document.querySelector('.form-content__blur');

    return {
      set: function () {
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

  window.onresize = function () {
    blur.set();
  };

}