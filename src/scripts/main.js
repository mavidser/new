function sameHeight(a) {
  var tallest = 0;
  a.each(function () {
    var thisHeight = $(this).height();
    if (thisHeight > tallest) tallest = thisHeight;
  });
  a.height(tallest);
}

$(document).ready(function () {

  $("#top").height($(window).height());

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
