function same_height(a) {
  var tallest = 0;
  a.each(function () {
    var thisHeight = $(this).height();
    if (thisHeight > tallest) tallest = thisHeight;
  });
  a.height(tallest);
}
var quoteIndex = 1;
function rotate_text() {
  var a = [['a maker of nice things.',2],
           ['a maker of nice things.',1],
           ['a developer.',1],
           ['a designer.',1],
           ['a learner.',1],
           ['a tinkerer.',1],
           ['Batman!',1]];
  setInterval(function () {
      if (a[quoteIndex%7][1]<=1)
        $('.job').fadeOut(100, function () {
          $('.job').text(a[quoteIndex%7][0])
                   .fadeIn(100);
        });
        else
          $('.job').text(a[quoteIndex%7][0])
      quoteIndex++;
  }, 2000);
  
}

$('.social-email').on("mouseenter", function () {
  $('.email').css('opacity','1');
})

$('.social-email').on("mouseleave", function () {
  $('.email').css('opacity','0');
})

$(document).ready(function () {
  $(".cover").height($(window).height());
  rotate_text()

});

$('.thumb-image').load(function() {
  same_height($(".thumbnail-container > .thumbnail"));
});

$(window).resize(function () {
  $(".cover").height($(window).height());
  same_height($(".thumbnail-container > .thumbnail"));
});




//Smooth Scroll

window.smoothScroll = function() {
  if (document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0) {
    return
  }
  var e = function(e) {
    if (e.nodeName === "HTML") return -window.pageYOffset;
    return e.getBoundingClientRect().top + window.pageYOffset
  };
  var t = function(e) {
    return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
  };
  var n = function(e, n, r, i) {
    if (r > i) return n;
    return e + (n - e) * t(r / i)
  };
  var r = function(t, r, i) {
    r = r || 500;
    var s = window.pageYOffset;
    if (typeof t === "number") {
      var o = parseInt(t)
    } else {
      var o = e(t)
    }
    var u = Date.now();
    var a = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
      window.setTimeout(e, 15)
    };
    var f = function() {
      var e = Date.now() - u;
      window.scroll(0, n(s, o, e, r));
      if (e > r) {
        if (typeof i === "function") {
          i(t)
        }
      } else {
        a(f)
      }
    };
    f()
  };
  var i = function(e) {
    e.preventDefault();
    if (location.hash !== this.hash) window.history.pushState(null, null, this.hash);
    r(document.getElementById(this.hash.substring(1)), 500, function(e) {
      location.replace("#" + e.id)
    })
  };
  document.addEventListener("DOMContentLoaded", function() {
    var e = document.querySelectorAll('a[href^="#"]'),
    t;
    for (var n = e.length; t = e[--n];) {
      t.addEventListener("click", i, false)
    }
  });
  return r
}();
