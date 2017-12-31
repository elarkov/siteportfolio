export default function initBlogMenu(){

  //фиксация меню при скролле
  var fixedMenu = (function () {

    var menu = $('.menu');
    var content = $('.blog-content');

    $(window).scroll(function () {
      var nsc = $(document).scrollTop();
      var bp1 = content.offset().top;
      var bp2 = bp1 + content.outerHeight() - $(window).height();

      if (nsc > bp1) {
        menu.css('position', 'fixed');
        menu.css('top', '20px');
      } else {
        menu.css('position', 'static');
      }
    });

  }());

  //добавление/удаление активного класса при scroll у меню
  var scrollMenuPage = (function () {

    $(window).scroll(function () {

      var article = $('.blog-list__item');

      article.each(function (i, el) {

        var top = $(el).offset().top - 100;
        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');

        if (scroll > top && scroll < bottom) {

          $('.menu__item').removeClass('active');
          $('a[href="#' + id + '"]').parent().addClass('active');
        }
      })
    });

  }());


  //плавный переход при клике на меню к определенной статье
  var clickMenuPage = (function () {

    $(".menu__link").on("click", function (event) {
      // исключаем стандартную реакцию браузера
      event.preventDefault();

      // получем идентификатор блока из атрибута href
      var id = $(this).attr('href'),

        // находим высоту, на которой расположен блок
        top = $(id).offset().top;

      // анимируем переход к блоку, время: 800 мс
      $('body,html').animate({ scrollTop: top }, 800);
    });

  }());

  //sidebar mobile

  var sidebarMobile = (function () {

    var sidebar = document.querySelector('.sidebar'),
      sidebarCircle = document.querySelector('.sidebar__circle');

    sidebarCircle.addEventListener('click', function () {
      sidebar.classList.toggle('sidebar__show');
    })

  }());

  //circle opacity on/off on scroll
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var circle = document.querySelector('.sidebar__circle');
    if (scrollTop > 200) {
      circle.style.cssText = 'opacity: 1';
    } else {
      circle.style.cssText = 'opacity: 0';
    }
  });

}