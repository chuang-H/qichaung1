(function (doc, win) {
  var docEl = win.document.documentElement;
  console.log(1)
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  /**
    * ================================================
    *   设置根元素font-size
    * 当设备宽度为375(iPhone6)时，根元素font-size=50px; 
    × ================================================
    */
  var refreshRem = function () {
    var clientWidth = win.innerWidth
                      || doc.documentElement.clientWidth
                      || doc.body.clientWidth;

    console.log(clientWidth)
    if (!clientWidth) return;
    var fz;
    var width = clientWidth;
    // if(width>414){
    //    width=414;
    // }
    fz = 100 * width / 375;
    docEl.style.fontSize = fz + 'px';
  };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, refreshRem, false);
  doc.addEventListener('DOMContentLoaded', refreshRem, false);
  refreshRem();

})(document, window);
