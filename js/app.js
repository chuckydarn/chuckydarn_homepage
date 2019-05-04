
$(window).on('load', function() {
  setTimeout(function(){
    $('h1').addClass('show');
  }, 50);
  setTimeout(function(){
    $('#emoji-girl').addClass('isVisible');
  }, 1500);
  setTimeout(function(){
    $('.about-content').addClass('appear');
  }, 50);
  setTimeout(function(){
    $('nav').addClass('drop');
  }, 1500);
})
