//preloader
export default function initPreloader() {

  var images = [],
      current = 0;

  $('*').each(function () {
    var $this = $(this),
        img = $this.is('img'),
        path;

    if (img) {
      path = $this.attr('src');
      if (path)
        images.push(path);
    } else {
      var background = $this.css('background-image');
      if (background != 'none') {
        path = background.replace('url("', '').replace('")', '');
        if (path) images.push(path);
      }
    }
  });

  function progress() {
    current += 1;
    $('.preloader__percentage').text(Math.ceil(current * 100 / images.length) + '%');
    if ((Math.ceil(current * 100 / images.length)) >= 100) {
      $('.preloader').fadeOut(4000);
    }
  };

  images.map(function (path) {
    $('<img>', {
      attr: {
        src: path
      }
    }).on('load', progress);
  });

  $(window).on('load', function () {
    $('.preloader').fadeOut();
  });

}
