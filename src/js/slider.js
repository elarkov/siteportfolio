export default function initSlider() {

  //объявляем массив данных для информации слева
  var data = [
    {
      title: "Cайт школы онлайн-образования",
      image: "images/work-1.png",
      link: "http://loftshool.ru",
      tags: ["js ", "webpack ", "sass ", "pug "]
    },
    {
      title: "Landing Page Burger",
      image: "images/work-2.png",
      link: "#",
      tags: ["css ", "html ", "sass ", "jquery "]
    },
    {
      title: "Cайт визитка Coworking",
      image: "images/work-3.png",
      link: "#",
      tags: ["html", " css"]
    }
  ];

  var slider1 = document.querySelector(".slider-1");
  slider(slider1, data);

  function slider(elem, data) {

    var currentSlide = 0;
    var dataLength = data.length;

    var slider = elem;

    var mainSlider = sliderCurrentPreview();
    var downSlider = sliderChangeNav('down', 'left', 'arrow--down');
    var upSlider = sliderChangeNav('up', 'right', 'arrow--up');

    downSlider.addEventListener('click', function (e) {
      e.preventDefault();
      currentSlide = getSlide(currentSlide - 1);
      fillSlider();
    });

    upSlider.addEventListener('click', function (e) {
      e.preventDefault();
      currentSlide = getSlide(currentSlide + 1);
      fillSlider();
    });

    fillSlider();

    function fillSlider() {

      var down = getSlide(currentSlide - 1);
      var up = getSlide(currentSlide + 1);

      document.querySelector('.heading__sub').innerText = data[currentSlide].title;
      document.querySelector('.main-preview__desc').innerText = data[currentSlide].tags;
      document.querySelector('.button-preview').setAttribute('href', data[currentSlide].link);
      document.querySelector('.main-preview__btn').classList.add('btn-animate');

      mainSlider.querySelector('.slider__image_preview').style.backgroundImage = 'url(' + data[currentSlide].image + ')';
      upSlider.querySelector('.slider__image_preview').style.backgroundImage = 'url(' + data[up].image + ')';
      downSlider.querySelector('.slider__image_preview').style.backgroundImage = 'url(' + data[down].image + ')';

    }

    function getSlide(value) {

      if (value >= dataLength) {
        return 0;
      }
      else if (value < 0) {
        return dataLength - 1;
      }
      else {
        return value;
      }

    }



    function sliderChangeNav(className, classOverlay) {

      var navContainer = document.querySelector('.slider__preview_' + className);
      var navImage = document.querySelector('.slider__image_preview');
      var overlay = document.querySelector('.overlay__preview');
      var overlay = document.querySelector('.overlay__preview_' + classOverlay);

      return navContainer;

    }

    function sliderCurrentPreview() {

      var currentPreview = document.querySelector('.slider__small_preview');
      var imagePreview = document.querySelector('.slider__image_preview');

      return currentPreview;
      
    }
  }

}