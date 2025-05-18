
var _0x48fe45 = function () {
  var _0x5f4f5c = true;
  return function (_0x2ff4f9, _0x41d1b6) {
    {
      var _0x4ef3ff = _0x5f4f5c ? function () {
        {
          if (_0x41d1b6) {
            {
              var _0x4222d7 = _0x41d1b6.apply(_0x2ff4f9, arguments);
              _0x41d1b6 = null;
              return _0x4222d7;
            }
          }
        }
      } : function () {};
      _0x5f4f5c = false;
      return _0x4ef3ff;
    }
  };
}();
var _0x5e2b73 = _0x48fe45(this, function () {
  var _0x2a224e = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  var _0x171f88 = function () {
    {
      var _0x334bac = new _0x2a224e.RegExp("^([^ ]+( +[^ ]+)+)+[^ ]}");
      return !_0x334bac.test(_0x5e2b73);
    }
  };
  return _0x171f88();
});
_0x5e2b73();
document.writeln("<!DOCTYPE html><html lang=\"zh-CN\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\"><title>王者炸水晶</title><style>*{margin:0;padding:0;color:#000;font-size:10px;font-family:Arial,sans-serif;-webkit-tap-highlight-color:transparent;outline:0}body{background:transparent;position:fixed;left:0;top:0;width:100%;height:100%;color:#000}*:not(input,checkbox,textarea){-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.popup_container{position:absolute;z-index:1000;left:50%;top:0}#H5AlertView{width:220px;height:150px;position:absolute;left:-110px;top:30px;text-align:center;zoom:1.0}#title-text{padding-top:0;font-size:23px;font-weight:600;color:#fff}#info-text{padding:5px;font-size:15px;color:#fff}#content-view{z-index:0;background:linear-gradient(45deg,#a8b4ff,#ffc5ad);position:relative;top:0;border-radius:16px;padding:5px;box-shadow:0 0 10px rgba(0,0,0,0.1),0 0 20px rgba(0,0,0,0.2),inset 0 0 20px rgba(0,0,0,0.2),inset 0 0 30px rgba(0,0,0,0.2)}.button-container{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:0}.button{width:100%;height:35px;color:#fff;background-color:transparent;display:inline-block;cursor:pointer;text-align:center;text-decoration:none;outline:0;border:2px solid #ccf;border-radius:10px;padding:0 8px;margin:5px 0;font-size:17px;background-image:none}.button:active{border:2px dashed transparent;transform:translateY(2px)}</style></head><body><div class=\"popup_container\"><div id=\"H5AlertView\"><div id=\"content-view\"><div id=\"title-text\">铁板公益</div><div id=\"info-text\">BY TIEBAN<br>最新资讯请看官网tbnbb.top</div><div class=\"button-container\"><button class=\"button\" onclick=\"Draw1()\">加入QQ群</button><button class=\"button\" onclick=\"Draw2()\">作者信息</button><button class=\"button\" onclick=\"Draw3()\">使用说明</button><button class=\"button\" onclick=\"Draw4()\">敌方爆炸</button><button class=\"button\" onclick=\"Draw5()\">我方爆炸</button></div></div></div></div></body>");
function hideMenu() {
  document.querySelector("#H5AlertView").style.display = "none";
  setWindowTouch(false);
}
window.alert = function (_0x3d62c9) {
  var _0x2d324e = document.createElement("IFRAME");
  _0x2d324e.style.display = "none";
  _0x2d324e.setAttribute("src", "data:text/plain");
  document.documentElement.appendChild(_0x2d324e);
  window.frames[0].window.alert(_0x3d62c9);
  _0x2d324e.parentNode.removeChild(_0x2d324e);
};
document.body.addEventListener("touchstart", function () {});
setWindowDrag(90, 10, 250, 120);
var iosScale = window.devicePixelRatio;
var canvasDom = document.createElement("canvas");
function Draw1() {
  window.location.href = "mqqapi://card/show_pslcard?src_type=internal&version=1&uin=964225177&card_type=group&source=external";
}
function Draw2() {
  alert("作者铁板   官网tbnbb.top");
}
function Draw3() {
  alert("进入游戏后选择爆炸方式，点击一次后请耐心等待，请勿多次重复点击，以免造成闪退等情况");
}
function Draw4() {
  var _0x4965c7;
  h5gg.clearResults();
  h5gg.searchNumber("21110623327027200", "I64", "0x100000000", "0x200000000");
  2 <= h5gg.getResultsCount() && (_0x4965c7 = h5gg.getResults(2)[1].address, h5gg.setValue(_0x4965c7, "21110627548266486", "I64"), alert("修改成功"));
}
function Draw5() {
  var _0x5b6a34;
  h5gg.clearResults();
  h5gg.searchNumber("21110623327027200", "I64", "0x100000000", "0x200000000");
  1 <= h5gg.getResultsCount() && (_0x5b6a34 = h5gg.getResults(1)[0].address, h5gg.setValue(_0x5b6a34, "21110627548266486", "I64"), alert("修改成功"));
}
document.body.appendChild(canvasDom);
canvasDom.style.height = "100%";
canvasDom.style.width = "100%";
document.writeln("</html>");