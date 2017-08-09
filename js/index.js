$(function(){
  var setElm = $('.animate'),
  delayHeight = 200;

  setElm.css({position:'relative',display:'block',left:'0',opacity:'0'});
  $('html,body').animate({scrollTop:0},1);

  $(window).on('load scroll resize',function(){
    setElm.each(function(){
      var setThis = $(this),
      elmTop = setThis.offset().top,
      elmHeight = setThis.height(),
      scrTop = $(window).scrollTop(),
      winHeight = $(window).height();
      if (scrTop > elmTop - winHeight + delayHeight && scrTop < elmTop + elmHeight){
        setThis.stop().animate({left:'0',opacity:'1'},500),
        setThis.addClass('spread');
      } else if (scrTop < elmTop - winHeight + delayHeight && scrTop < elmTop + delayHeight){
        setThis.stop().animate({left:'0',opacity:'0'},500),
        setThis.removeClass('spread');
      }
    });
  });
});