function sameHeight(a) {
  var tallest = 0;
  a.each(function () {
    var thisHeight = $(this).height();
    if (thisHeight > tallest) tallest = thisHeight;
  });
  a.height(tallest);
}

$(document).ready(function () {

  $(".cover-size").height($(window).height());

  $("a[href*=#]:not([href=#])").click(function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var a = $(this.hash);
      if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"), a.length) return $("html,body").animate({
        scrollTop: a.offset().top
      }, 1e3), !1;
    }
  });
});

$('.thumb-image').load(function() {
  sameHeight($(".thumbnail-container > .thumbnail"));
});

$(window).resize(function () {
  $(".cover-size").height($(window).height());
  sameHeight($(".thumbnail-container > .thumbnail"));
});

// var elementPosition = $('.navbar').offset();
// var elementPosition = $('#lower').offset().top+$('.navbar').position().top;
var elementPosition = 0;
$(window).scroll(function(){
  // console.log('checking',$('.navbar').css('position'));
  // var elementPosition = $('.navbar').position().top+$('.navbar').offset().top;
  if ($('.navbar').css('position') == 'relative')
    elementPosition = $('.navbar').offset().top;
  // var elementPosition = $('#lower').offset().top+$('.navbar').position().top;
  // console.log($(window).scrollTop(),$('.navbar').position().top,$('.navbar').offset().top,elementPosition);
  if($(window).scrollTop() >= elementPosition){
    // $('.navbar').css('position','fixed').css('top','0');
    $('.navbar').addClass('fixed-top');
    // $('.blank').css('height','50px');
  } else {
    $('.navbar').removeClass('fixed-top');
    // $('.navbar').css('position','relative');
    // $('.blank').css('height','0px');
  }
});
