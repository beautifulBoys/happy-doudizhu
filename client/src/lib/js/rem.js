// 设置rem标准
// var htmlWidth = document.documentElement.clientWidth
// var divNode = document.getElementsByTagName('html')[0]
// divNode.style.fontSize = Number(htmlWidth) / Number(7.5) + 'px';
//
// (function (doc, win) {
//  var docEl = doc.documentElement,
//      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//      recalc = function () {
//          var clientWidth = docEl.clientWidth
//          if (!clientWidth) return
//          docEl.style.fontSize = 50 * (clientWidth / 650) + 'px'
//      }
//
//  if (!doc.addEventListener) return
//  win.addEventListener(resizeEvt, recalc, false)
//  doc.addEventListener('DOMContentLoaded', recalc, false)
// })(document, window)

function fun (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;

            //这里是假设在640px宽度设计稿的情况下，1rem = 20px；
            //可以根据实际需要修改
            docEl.style.fontSize = 50 * (clientWidth / 640) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
}
fun(document, window);
