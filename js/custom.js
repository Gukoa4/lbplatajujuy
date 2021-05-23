$(document).ready(function () {
  $('.fb-icon').mouseenter(function() {
    $('body').removeClass("twitter");
    $('body').removeClass("instagram");
    $('body').removeClass("youtube");
    $('body').addClass("facebook");
  }).mouseleave(function() {
    $('body').removeClass("twitter");
    $('body').removeClass("instagram");
    $('body').removeClass("facebook");
    $('body').removeClass("youtube");
  });

  $('.tw-icon').mouseenter(function() {
    $('body').removeClass("facebook");
    $('body').removeClass("instagram");
    $('body').removeClass("youtube");
    $('body').addClass("twitter");
  }).mouseleave(function() {
    $('body').removeClass("twitter");
    $('body').removeClass("instagram");
    $('body').removeClass("facebook");
    $('body').removeClass("youtube");
  });

  $('.in-icon').mouseenter(function() {
    $('body').removeClass("facebook");
    $('body').addClass("instagram");
    $('body').removeClass("twitter");
    $('body').removeClass("youtube");
  }).mouseleave(function() {
    $('body').removeClass("twitter");
    $('body').removeClass("instagram");
    $('body').removeClass("facebook");
    $('body').removeClass("youtube");
  });

  $('.yt-icon').mouseenter(function() {
    $('body').removeClass("facebook");
    $('body').removeClass("instagram");
    $('body').addClass("youtube");
    $('body').removeClass("twitter");
  }).mouseleave(function() {
    $('body').removeClass("twitter");
    $('body').removeClass("instagram");
    $('body').removeClass("facebook");
    $('body').removeClass("youtube");
  });

  $('.right-menu.visible-xs li').each(function(){
    var clickBtn = false;

    $(this).find('a').click(function(e){
        if(clickBtn == false){
           
            e.preventDefault();
        }
        clickBtn = true;
    });
  });
});
