(function (a, b) {
  // 页面自适应脚本
  var c = a.documentElement,
  d = "orientationchange" in window ? "orientationchange" : "resize",
  e = window.recalc = function () {
    var a = c.clientWidth;
    // var isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    if (a) {
      var fontsize = 16;
      // if(isMobile) {
      if(a < 1200) {
        fontsize = Math.floor(18.75 * (a / 375)); // 20等分
      } else {
        // fontsize = 16
        // fontsize = Math.floor(100 * (a / 1920));
        // if (fontsize < 50) {
        //   fontsize = 50;
        // }
        // if (fontsize >= 100) {
        //   fontsize = 100;
        // }
      }
      c.style.fontSize = fontsize + "px"
    }
  };
  a.addEventListener && (b.addEventListener(d, e, !1), a.addEventListener("DOMContentLoaded", e, !1));
})(document, window);