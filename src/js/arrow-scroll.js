export default function initArrowScroll(){
  var arrowScroll = (function(){
    var arrow = document.querySelector('.header__arrow_link');

    arrow.addEventListener('click', function(e){
      e.preventDefault();
      
      var id = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1000);
    });

  }());
}