(function(doc, win) {
  win.between;
  var docEl = doc.documentElement,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalc = function() {
    var clientWidth = docEl.clientWidth;
    // console.log(clientWidth)
    if (!clientWidth) return;
    // if(!isMobile()) {
    //   // pc样式
    //   if(clientWidth <= 1440) {
    //     docEl.style.fontSize = '18px';
    //     // docEl.style.fontSize = '22px';
    //   } else {
    //     docEl.style.fontSize = '20px';
    //   }
    // } else {
    //   docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
    // }
    docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
    between= 20 * (clientWidth / 375);
  };

  isMobile = function() {
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    return flag;
  }
if (!doc.addEventListener) return;
win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
