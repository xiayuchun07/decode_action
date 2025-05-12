//Mon May 12 2025 07:58:03 GMT+0000 (Coordinated Universal Time)
//你好
//你好
function qqdzz() {
  var _0x5bf2a9 = function () {
    {
      var _0x425dab = true;
      return function (_0x4790fd, _0x398e4a) {
        {
          var _0x1b8205 = _0x425dab ? function () {
            {
              if (_0x398e4a) {
                {
                  var _0x1634f9 = _0x398e4a.apply(_0x4790fd, arguments);
                  _0x398e4a = null;
                  return _0x1634f9;
                }
              }
            }
          } : function () {};
          _0x425dab = false;
          return _0x1b8205;
        }
      };
    }
  }();
  var _0x2816b2 = _0x5bf2a9(this, function () {
    {
      var _0x4b69dc = function () {};
      var _0x7342ec;
      try {
        {
          var _0x292cb4 = Function("return (function() {}.constructor(\"return this\")( ));");
          _0x7342ec = _0x292cb4();
        }
      } catch (_0x1c3b37) {
        {
          _0x7342ec = window;
        }
      }
      if (!_0x7342ec.console) {
        {
          _0x7342ec.console = function (_0x4e1d17) {
            {
              var _0x4edef7 = {};
              _0x4edef7.log = _0x4e1d17;
              _0x4edef7.warn = _0x4e1d17;
              _0x4edef7.debug = _0x4e1d17;
              _0x4edef7.info = _0x4e1d17;
              _0x4edef7.error = _0x4e1d17;
              _0x4edef7.exception = _0x4e1d17;
              _0x4edef7.table = _0x4e1d17;
              _0x4edef7.trace = _0x4e1d17;
              return _0x4edef7;
            }
          }(_0x4b69dc);
        }
      } else {
        {
          _0x7342ec.console.log = _0x4b69dc;
          _0x7342ec.console.warn = _0x4b69dc;
          _0x7342ec.console.debug = _0x4b69dc;
          _0x7342ec.console.info = _0x4b69dc;
          _0x7342ec.console.error = _0x4b69dc;
          _0x7342ec.console.exception = _0x4b69dc;
          _0x7342ec.console.table = _0x4b69dc;
          _0x7342ec.console.trace = _0x4b69dc;
        }
      }
    }
  });
  _0x2816b2();
  var _0x3593da = this;
  if (_0x3593da.shiju_address) {
    {
      return;
    }
  }
  var _0x230366 = h5gg.getRangesList();
  var _0x3a961a;
  var _0x54548e;
  for (var _0x1acc37 = 0; _0x1acc37 < h5gg.getProcList().length; _0x1acc37++) {
    {
      if (h5gg.getProcList()[_0x1acc37].name == "balls") {
        {
          _0x3a961a = h5gg.getProcList()[_0x1acc37];
          h5gg.setTargetProc(_0x3a961a.pid);
          _0x54548e = _0x3a961a.name;
          h5gg.getRangesList();
        }
      }
    }
  }
  if (!(_0x54548e == "balls")) {
    {
      showNotification("请进游戏", 3000);
      qqdzz();
    }
  }
  if (!_0x54548e) {
    {
      showNotification("初始化失败，未检测到游戏进程！", 3000);
      return;
    }
  }
  if (_0x54548e) {
    {
      showNotification("初始化成功！快去玩吧！", 3000);
      return;
    }
  }
}
qqdzz();
function tuqiu() {
  var _0x285b1d = prompt("请输入吐球数值");
  h5gg.clearResults();
  h5gg.searchNumber("216", "I32", "0x00000000", "0x200000000");
  h5gg.searchNearby("1123", "I32", "0x4");
  h5gg.searchNumber("1123", "I32", "0x00000000", "0x200000000");
  var _0x256797 = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x89e058 = h5gg.getResults(_0x256797);
  setInterval(function () {
    {
      for (var _0x2a32a2 = 0; _0x2a32a2 < _0x256797; _0x2a32a2++) {
        {
          var _0x26e44d = _0x89e058[_0x2a32a2].address;
          var _0x1d0fda = Number(_0x26e44d) + 160;
          h5gg.setValue(_0x1d0fda, _0x285b1d, "I64");
        }
      }
    }
  }, 0);
}
function pbsy() {
  h5gg.clearResults();
  var _0x525538 = prompt("正常视野1.5请输入视野数值");
  h5gg.clearResults();
  h5gg.searchNumber("800", "F32", "0x00000000", "0x200000000");
  h5gg.searchNearby("-750", "F32", "0x24");
  h5gg.searchNearby("8", "F32", "0x24");
  h5gg.searchNumber("-750", "F32", "0x00000000", "0x200000000");
  var _0xef4505 = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0xed355c = h5gg.getResults(_0xef4505);
  for (var _0x4ac686 = 0; _0x4ac686 < _0xef4505; _0x4ac686++) {
    {
      var _0x55a705 = _0xed355c[_0x4ac686].address;
      var _0x37bca4 = Number(_0x55a705) + 20;
      h5gg.setValue(_0x37bca4, _0x525538, "F32");
    }
  }
}
function sjsy() {
  h5gg.clearResults();
  var _0x203b64 = prompt("手机视野倍数");
  h5gg.searchNumber("-3278106", "I32", "0x00000000", "0x200000000");
  h5gg.searchNearby("-8880791", "I32", "0x4");
  h5gg.searchNumber("-8880791", "I32", "0x00000000", "0x200000000");
  var _0x21a95b = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x246a4f = h5gg.getResults(_0x21a95b);
  for (var _0xe956a3 = 0; _0xe956a3 < _0x21a95b; _0xe956a3++) {
    {
      var _0x3766ee = _0x246a4f[_0xe956a3].address;
      var _0x46e8b1 = Number(_0x3766ee) + 96;
      h5gg.setValue(_0x46e8b1, _0x203b64, "F32");
    }
  }
}
function nianhe1() {
  h5gg.clearResults();
  var _0x1bfb14 = prompt("默认粘合速度1.7建议0.1～1.7之间");
  h5gg.searchNumber("1", "F32", "0x00000000", "0x200000000");
  h5gg.searchNearby("7.9", "F32", "0x4");
  h5gg.searchNearby("0.4", "F32", "0x4");
  h5gg.searchNumber("0.4", "F32", "0x00000000", "0x200000000");
  var _0x449cb7 = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x23920d = h5gg.getResults(_0x449cb7);
  for (var _0x4641a7 = 0; _0x4641a7 < _0x449cb7; _0x4641a7++) {
    {
      var _0x1ed232 = _0x23920d[_0x4641a7].address;
      var _0x265e07 = Number(_0x1ed232) - 208;
      h5gg.setValue(_0x265e07, _0x1bfb14, "F32");
    }
  }
}
function nianhe2() {
  h5gg.clearResults();
  var _0x1219b0 = prompt("正常开0~0.5\n反向粘合0.6以上");
  h5gg.searchNumber("112", "I32", "0x00000000", "0x200000000");
  h5gg.searchNearby("287", "I32", "0x4");
  h5gg.searchNearby("65536", "I32", "0x4");
  h5gg.searchNumber("65536", "I32", "0x00000000", "0x200000000");
  var _0x3c91b6 = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x4de239 = h5gg.getResults(_0x3c91b6);
  for (var _0x69d760 = 0; _0x69d760 < _0x3c91b6; _0x69d760++) {
    {
      var _0x12046b = _0x4de239[_0x69d760].address;
      var _0x36bd97 = Number(_0x12046b) - 24;
      h5gg.setValue(_0x36bd97, _0x1219b0, "F32");
    }
  }
}
function qj() {
  h5gg.clearResults();
  var _0x36af12 = prompt("只能砸铁不能玩游戏正常1");
  h5gg.clearResults();
  h5gg.searchNumber("0.03", "F32", "0x000000000", "0x2000000000");
  h5gg.searchNearby("0.33333334327", "F32", "0x8");
  h5gg.searchNearby("1", "F32", "0x8");
  h5gg.searchNumber("1", "F32", "0x000000000", "0x2000000000");
  var _0x514b55 = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x431d16 = h5gg.getResults(_0x514b55);
  setInterval(function () {
    {
      for (var _0x1429d7 = 0; _0x1429d7 < _0x514b55; _0x1429d7++) {
        {
          var _0x3a74bf = _0x431d16[_0x1429d7].address;
          h5gg.setValue(_0x3a74bf, _0x36af12, "F32");
        }
      }
    }
  }, 0);
}
function sld() {
  h5gg.clearResults();
  h5gg.searchNumber("131375", "I32", "0x00000000", "0x200000000");
  h5gg.searchNearby("5", "I32", "0x4");
  h5gg.searchNumber("5", "I32", "0x00000000", "0x200000000");
  h5gg.searchNearby("131077", "I32", "0x4");
  h5gg.searchNumber("131077", "I32", "0x00000000", "0x200000000");
  var _0x3cb2de = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x534905 = h5gg.getResults(_0x3cb2de);
  for (var _0xe217ba = 0; _0xe217ba < _0x3cb2de; _0xe217ba++) {
    {
      var _0x4638e7 = _0x534905[_0xe217ba].address;
      var _0x449297 = Number(_0x4638e7) - 52;
      h5gg.setValue(_0x449297, -1, "F32");
    }
  }
}
function yglm() {
  h5gg.clearResults();
  h5gg.searchNumber("412090411", "I32", "0x00000000", "0x200000000");
  h5gg.searchNearby("21582", "I32", "0x4");
  h5gg.searchNumber("21582", "I32", "0x00000000", "0x200000000");
  var _0x3b8655 = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x55b51e = h5gg.getResults(_0x3b8655);
  for (var _0xf118e7 = 0; _0xf118e7 < _0x3b8655; _0xf118e7++) {
    {
      var _0x11b3e2 = _0x55b51e[_0xf118e7].address;
      var _0x56233f = Number(_0x11b3e2) + 64;
      h5gg.setValue(_0x56233f, 0.0001, "F32");
    }
  }
}
function ygjx() {
  h5gg.clearResults();
  h5gg.searchNumber("100", "F32", "0x10000000", "0x160000000");
  h5gg.searchNearby("131240", "I32", "0x40");
  var _0x353252 = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x5f2500 = h5gg.getResults(_0x353252);
  for (var _0x18dd35 = 0; _0x18dd35 < _0x353252; _0x18dd35++) {
    {
      var _0x53af13 = _0x5f2500[_0x18dd35].address;
      var _0x3f9607 = /C$/;
      var _0x111093 = _0x3f9607.test(_0x53af13);
      if (_0x111093) {
        {
          h5gg.setValue(_0x53af13, 9999999999, "F32");
        }
      }
    }
  }
}
function jd1() {
  h5gg.clearResults();
  h5gg.searchNumber("216", "I32", "0x00000000", "0x200000000");
  h5gg.searchNearby("1123", "I32", "0x4");
  h5gg.searchNumber("1123", "I32", "0x00000000", "0x200000000");
  var _0x7014c = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x40d286 = h5gg.getResults(_0x7014c);
  setInterval(function () {
    {
      for (var _0x2f290f = 0; _0x2f290f < _0x7014c; _0x2f290f++) {
        {
          var _0x3c26e2 = _0x40d286[_0x2f290f].address;
          var _0xce4d3b = Number(_0x3c26e2) + 160;
          h5gg.setValue(_0xce4d3b, 55, "I64");
        }
      }
    }
  }, 0);
}
function jd2() {
  h5gg.clearResults();
  h5gg.searchNumber("216", "I32", "0x00000000", "0x200000000");
  h5gg.searchNearby("1123", "I32", "0x4");
  h5gg.searchNumber("1123", "I32", "0x00000000", "0x200000000");
  var _0x2b2971 = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x3dbc8d = h5gg.getResults(_0x2b2971);
  setInterval(function () {
    {
      for (var _0x56b31c = 0; _0x56b31c < _0x2b2971; _0x56b31c++) {
        {
          var _0x4ea101 = _0x3dbc8d[_0x56b31c].address;
          var _0x2cc2dd = Number(_0x4ea101) + 160;
          h5gg.setValue(_0x2cc2dd, 45, "I64");
        }
      }
    }
  }, 0);
}
function jd3() {
  h5gg.clearResults();
  h5gg.searchNumber("216", "I32", "0x00000000", "0x200000000");
  h5gg.searchNearby("1123", "I32", "0x4");
  h5gg.searchNumber("1123", "I32", "0x00000000", "0x200000000");
  var _0x53175d = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x40676d = h5gg.getResults(_0x53175d);
  setInterval(function () {
    {
      for (var _0x3bf498 = 0; _0x3bf498 < _0x53175d; _0x3bf498++) {
        {
          var _0x53885e = _0x40676d[_0x3bf498].address;
          var _0x30e219 = Number(_0x53885e) + 160;
          h5gg.setValue(_0x30e219, 35, "I64");
        }
      }
    }
  }, 0);
}
function showNotification(_0x1c4a3c, _0x5c48ec) {
  var _0x286e1e = document.createElement("div");
  _0x286e1e.className = "notification";
  _0x286e1e.textContent = _0x1c4a3c;
  document.body.appendChild(_0x286e1e);
  setTimeout(function () {
    {
      _0x286e1e.style.opacity = 0;
      setTimeout(function () {
        {
          document.body.removeChild(_0x286e1e);
        }
      }, 1000);
    }
  }, _0x5c48ec);
}
const buttons = document.querySelectorAll(".anniu");
const pages = document.querySelectorAll(".gnjm > div");
pages[0].classList.add("active");
buttons[0].classList.add("active");
buttons.forEach((_0x46b53e, _0x59f75b) => {
  _0x46b53e.addEventListener("click", () => {
    {
      pages.forEach(_0x19dd72 => _0x19dd72.classList.remove("active"));
      buttons.forEach(_0x8bea42 => _0x8bea42.classList.remove("active"));
      pages[_0x59f75b].classList.add("active");
      _0x46b53e.classList.add("active");
    }
  });
});
window.print = function () {
  console.warn("打印功能已被禁用。");
  alert("抱歉，此页面不允许打印。");
};
window.addEventListener("keydown", function (_0x433b3a) {
  if ((_0x433b3a.ctrlKey || _0x433b3a.metaKey) && _0x433b3a.key.toLowerCase() === "p") {
    {
      _0x433b3a.preventDefault();
      alert("抱歉，此页面不允许打印。");
    }
  }
});
window.addEventListener("beforeprint", function (_0x4725af) {
  const _0xdd5f72 = document.body.innerHTML;
  document.body.innerHTML = "<h1>此页面内容受保护，禁止打印。</h1>";
  window.addEventListener("afterprint", function _0x4ea983() {
    {
      document.body.innerHTML = _0xdd5f72;
      window.removeEventListener("afterprint", _0x4ea983);
    }
  });
});
let _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const appConfig = {
  uri: "http://www.wigwy.xyz/api/loginJavaScript",
  appid: "28124",
  appsecret: "9bClaBz3tOFNz2n",
  imei: null
};
function md5(_0x87d228) {
  function _0x4eca8b(_0x570755, _0x38d8fc) {
    {
      var _0x48d89c = (_0x570755 & 65535) + (_0x38d8fc & 65535);
      var _0x32b8f1 = (_0x570755 >> 16) + (_0x38d8fc >> 16) + (_0x48d89c >> 16);
      return _0x32b8f1 << 16 | _0x48d89c & 65535;
    }
  }
  function _0x297acc(_0x263e2e, _0x5cac9c) {
    {
      return _0x263e2e << _0x5cac9c | _0x263e2e >>> 32 - _0x5cac9c;
    }
  }
  function _0x2eb585(_0x55e666, _0x4bd90a, _0x4c4865, _0x28a81e, _0xd50975, _0x532e86) {
    {
      return _0x4eca8b(_0x297acc(_0x4eca8b(_0x4eca8b(_0x4bd90a, _0x55e666), _0x4eca8b(_0x28a81e, _0x532e86)), _0xd50975), _0x4c4865);
    }
  }
  function _0x3ad126(_0x8d9fb5, _0x4cc2b9, _0x257529, _0x32f93e, _0x5f1554, _0x5ebac4, _0x1ec8fe) {
    {
      return _0x2eb585(_0x4cc2b9 & _0x257529 | ~_0x4cc2b9 & _0x32f93e, _0x8d9fb5, _0x4cc2b9, _0x5f1554, _0x5ebac4, _0x1ec8fe);
    }
  }
  function _0x424d79(_0x49bf18, _0x1aae18, _0x5d7797, _0x3417ca, _0xb28ad2, _0x7abeff, _0x50e906) {
    {
      return _0x2eb585(_0x1aae18 & _0x3417ca | _0x5d7797 & ~_0x3417ca, _0x49bf18, _0x1aae18, _0xb28ad2, _0x7abeff, _0x50e906);
    }
  }
  function _0x48f3a4(_0x3935ea, _0x503c0e, _0x319a29, _0x6c8c28, _0x3a6a3d, _0x200d70, _0x34cd4d) {
    {
      return _0x2eb585(_0x503c0e ^ _0x319a29 ^ _0x6c8c28, _0x3935ea, _0x503c0e, _0x3a6a3d, _0x200d70, _0x34cd4d);
    }
  }
  function _0x4a8ac7(_0x2e25ee, _0x1e4567, _0x36c948, _0x215374, _0x2d115b, _0x4de9c6, _0x377f1d) {
    {
      return _0x2eb585(_0x36c948 ^ (_0x1e4567 | ~_0x215374), _0x2e25ee, _0x1e4567, _0x2d115b, _0x4de9c6, _0x377f1d);
    }
  }
  function _0x30897b(_0x2dad38, _0x429fd0) {
    {
      _0x2dad38[_0x429fd0 >> 5] |= 128 << _0x429fd0 % 32;
      _0x2dad38[(_0x429fd0 + 64 >>> 9 << 4) + 14] = _0x429fd0;
      var _0x17ed9a;
      var _0x21a05b;
      var _0x3f267f;
      var _0xda885b;
      var _0x5975fc;
      var _0x3762da = 1732584193;
      var _0x4b4ad3 = -271733879;
      var _0x5d4cda = -1732584194;
      var _0x1fe4e4 = 271733878;
      for (_0x17ed9a = 0; _0x17ed9a < _0x2dad38.length; _0x17ed9a += 16) {
        {
          _0x21a05b = _0x3762da;
          _0x3f267f = _0x4b4ad3;
          _0xda885b = _0x5d4cda;
          _0x5975fc = _0x1fe4e4;
          _0x3762da = _0x3ad126(_0x3762da, _0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x2dad38[_0x17ed9a], 7, -680876936);
          _0x1fe4e4 = _0x3ad126(_0x1fe4e4, _0x3762da, _0x4b4ad3, _0x5d4cda, _0x2dad38[_0x17ed9a + 1], 12, -389564586);
          _0x5d4cda = _0x3ad126(_0x5d4cda, _0x1fe4e4, _0x3762da, _0x4b4ad3, _0x2dad38[_0x17ed9a + 2], 17, 606105819);
          _0x4b4ad3 = _0x3ad126(_0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x3762da, _0x2dad38[_0x17ed9a + 3], 22, -1044525330);
          _0x3762da = _0x3ad126(_0x3762da, _0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x2dad38[_0x17ed9a + 4], 7, -176418897);
          _0x1fe4e4 = _0x3ad126(_0x1fe4e4, _0x3762da, _0x4b4ad3, _0x5d4cda, _0x2dad38[_0x17ed9a + 5], 12, 1200080426);
          _0x5d4cda = _0x3ad126(_0x5d4cda, _0x1fe4e4, _0x3762da, _0x4b4ad3, _0x2dad38[_0x17ed9a + 6], 17, -1473231341);
          _0x4b4ad3 = _0x3ad126(_0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x3762da, _0x2dad38[_0x17ed9a + 7], 22, -45705983);
          _0x3762da = _0x3ad126(_0x3762da, _0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x2dad38[_0x17ed9a + 8], 7, 1770035416);
          _0x1fe4e4 = _0x3ad126(_0x1fe4e4, _0x3762da, _0x4b4ad3, _0x5d4cda, _0x2dad38[_0x17ed9a + 9], 12, -1958414417);
          _0x5d4cda = _0x3ad126(_0x5d4cda, _0x1fe4e4, _0x3762da, _0x4b4ad3, _0x2dad38[_0x17ed9a + 10], 17, -42063);
          _0x4b4ad3 = _0x3ad126(_0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x3762da, _0x2dad38[_0x17ed9a + 11], 22, -1990404162);
          _0x3762da = _0x3ad126(_0x3762da, _0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x2dad38[_0x17ed9a + 12], 7, 1804603682);
          _0x1fe4e4 = _0x3ad126(_0x1fe4e4, _0x3762da, _0x4b4ad3, _0x5d4cda, _0x2dad38[_0x17ed9a + 13], 12, -40341101);
          _0x5d4cda = _0x3ad126(_0x5d4cda, _0x1fe4e4, _0x3762da, _0x4b4ad3, _0x2dad38[_0x17ed9a + 14], 17, -1502002290);
          _0x4b4ad3 = _0x3ad126(_0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x3762da, _0x2dad38[_0x17ed9a + 15], 22, 1236535329);
          _0x3762da = _0x424d79(_0x3762da, _0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x2dad38[_0x17ed9a + 1], 5, -165796510);
          _0x1fe4e4 = _0x424d79(_0x1fe4e4, _0x3762da, _0x4b4ad3, _0x5d4cda, _0x2dad38[_0x17ed9a + 6], 9, -1069501632);
          _0x5d4cda = _0x424d79(_0x5d4cda, _0x1fe4e4, _0x3762da, _0x4b4ad3, _0x2dad38[_0x17ed9a + 11], 14, 643717713);
          _0x4b4ad3 = _0x424d79(_0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x3762da, _0x2dad38[_0x17ed9a], 20, -373897302);
          _0x3762da = _0x424d79(_0x3762da, _0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x2dad38[_0x17ed9a + 5], 5, -701558691);
          _0x1fe4e4 = _0x424d79(_0x1fe4e4, _0x3762da, _0x4b4ad3, _0x5d4cda, _0x2dad38[_0x17ed9a + 10], 9, 38016083);
          _0x5d4cda = _0x424d79(_0x5d4cda, _0x1fe4e4, _0x3762da, _0x4b4ad3, _0x2dad38[_0x17ed9a + 15], 14, -660478335);
          _0x4b4ad3 = _0x424d79(_0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x3762da, _0x2dad38[_0x17ed9a + 4], 20, -405537848);
          _0x3762da = _0x424d79(_0x3762da, _0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x2dad38[_0x17ed9a + 9], 5, 568446438);
          _0x1fe4e4 = _0x424d79(_0x1fe4e4, _0x3762da, _0x4b4ad3, _0x5d4cda, _0x2dad38[_0x17ed9a + 14], 9, -1019803690);
          _0x5d4cda = _0x424d79(_0x5d4cda, _0x1fe4e4, _0x3762da, _0x4b4ad3, _0x2dad38[_0x17ed9a + 3], 14, -187363961);
          _0x4b4ad3 = _0x424d79(_0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x3762da, _0x2dad38[_0x17ed9a + 8], 20, 1163531501);
          _0x3762da = _0x424d79(_0x3762da, _0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x2dad38[_0x17ed9a + 13], 5, -1444681467);
          _0x1fe4e4 = _0x424d79(_0x1fe4e4, _0x3762da, _0x4b4ad3, _0x5d4cda, _0x2dad38[_0x17ed9a + 2], 9, -51403784);
          _0x5d4cda = _0x424d79(_0x5d4cda, _0x1fe4e4, _0x3762da, _0x4b4ad3, _0x2dad38[_0x17ed9a + 7], 14, 1735328473);
          _0x4b4ad3 = _0x424d79(_0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x3762da, _0x2dad38[_0x17ed9a + 12], 20, -1926607734);
          _0x3762da = _0x48f3a4(_0x3762da, _0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x2dad38[_0x17ed9a + 5], 4, -378558);
          _0x1fe4e4 = _0x48f3a4(_0x1fe4e4, _0x3762da, _0x4b4ad3, _0x5d4cda, _0x2dad38[_0x17ed9a + 8], 11, -2022574463);
          _0x5d4cda = _0x48f3a4(_0x5d4cda, _0x1fe4e4, _0x3762da, _0x4b4ad3, _0x2dad38[_0x17ed9a + 11], 16, 1839030562);
          _0x4b4ad3 = _0x48f3a4(_0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x3762da, _0x2dad38[_0x17ed9a + 14], 23, -35309556);
          _0x3762da = _0x48f3a4(_0x3762da, _0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x2dad38[_0x17ed9a + 1], 4, -1530992060);
          _0x1fe4e4 = _0x48f3a4(_0x1fe4e4, _0x3762da, _0x4b4ad3, _0x5d4cda, _0x2dad38[_0x17ed9a + 4], 11, 1272893353);
          _0x5d4cda = _0x48f3a4(_0x5d4cda, _0x1fe4e4, _0x3762da, _0x4b4ad3, _0x2dad38[_0x17ed9a + 7], 16, -155497632);
          _0x4b4ad3 = _0x48f3a4(_0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x3762da, _0x2dad38[_0x17ed9a + 10], 23, -1094730640);
          _0x3762da = _0x48f3a4(_0x3762da, _0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x2dad38[_0x17ed9a + 13], 4, 681279174);
          _0x1fe4e4 = _0x48f3a4(_0x1fe4e4, _0x3762da, _0x4b4ad3, _0x5d4cda, _0x2dad38[_0x17ed9a], 11, -358537222);
          _0x5d4cda = _0x48f3a4(_0x5d4cda, _0x1fe4e4, _0x3762da, _0x4b4ad3, _0x2dad38[_0x17ed9a + 3], 16, -722521979);
          _0x4b4ad3 = _0x48f3a4(_0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x3762da, _0x2dad38[_0x17ed9a + 6], 23, 76029189);
          _0x3762da = _0x48f3a4(_0x3762da, _0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x2dad38[_0x17ed9a + 9], 4, -640364487);
          _0x1fe4e4 = _0x48f3a4(_0x1fe4e4, _0x3762da, _0x4b4ad3, _0x5d4cda, _0x2dad38[_0x17ed9a + 12], 11, -421815835);
          _0x5d4cda = _0x48f3a4(_0x5d4cda, _0x1fe4e4, _0x3762da, _0x4b4ad3, _0x2dad38[_0x17ed9a + 15], 16, 530742520);
          _0x4b4ad3 = _0x48f3a4(_0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x3762da, _0x2dad38[_0x17ed9a + 2], 23, -995338651);
          _0x3762da = _0x4a8ac7(_0x3762da, _0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x2dad38[_0x17ed9a], 6, -198630844);
          _0x1fe4e4 = _0x4a8ac7(_0x1fe4e4, _0x3762da, _0x4b4ad3, _0x5d4cda, _0x2dad38[_0x17ed9a + 7], 10, 1126891415);
          _0x5d4cda = _0x4a8ac7(_0x5d4cda, _0x1fe4e4, _0x3762da, _0x4b4ad3, _0x2dad38[_0x17ed9a + 14], 15, -1416354905);
          _0x4b4ad3 = _0x4a8ac7(_0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x3762da, _0x2dad38[_0x17ed9a + 5], 21, -57434055);
          _0x3762da = _0x4a8ac7(_0x3762da, _0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x2dad38[_0x17ed9a + 12], 6, 1700485571);
          _0x1fe4e4 = _0x4a8ac7(_0x1fe4e4, _0x3762da, _0x4b4ad3, _0x5d4cda, _0x2dad38[_0x17ed9a + 3], 10, -1894986606);
          _0x5d4cda = _0x4a8ac7(_0x5d4cda, _0x1fe4e4, _0x3762da, _0x4b4ad3, _0x2dad38[_0x17ed9a + 10], 15, -1051523);
          _0x4b4ad3 = _0x4a8ac7(_0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x3762da, _0x2dad38[_0x17ed9a + 1], 21, -2054922799);
          _0x3762da = _0x4a8ac7(_0x3762da, _0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x2dad38[_0x17ed9a + 8], 6, 1873313359);
          _0x1fe4e4 = _0x4a8ac7(_0x1fe4e4, _0x3762da, _0x4b4ad3, _0x5d4cda, _0x2dad38[_0x17ed9a + 15], 10, -30611744);
          _0x5d4cda = _0x4a8ac7(_0x5d4cda, _0x1fe4e4, _0x3762da, _0x4b4ad3, _0x2dad38[_0x17ed9a + 6], 15, -1560198380);
          _0x4b4ad3 = _0x4a8ac7(_0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x3762da, _0x2dad38[_0x17ed9a + 13], 21, 1309151649);
          _0x3762da = _0x4a8ac7(_0x3762da, _0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x2dad38[_0x17ed9a + 4], 6, -145523070);
          _0x1fe4e4 = _0x4a8ac7(_0x1fe4e4, _0x3762da, _0x4b4ad3, _0x5d4cda, _0x2dad38[_0x17ed9a + 11], 10, -1120210379);
          _0x5d4cda = _0x4a8ac7(_0x5d4cda, _0x1fe4e4, _0x3762da, _0x4b4ad3, _0x2dad38[_0x17ed9a + 2], 15, 718787259);
          _0x4b4ad3 = _0x4a8ac7(_0x4b4ad3, _0x5d4cda, _0x1fe4e4, _0x3762da, _0x2dad38[_0x17ed9a + 9], 21, -343485551);
          _0x3762da = _0x4eca8b(_0x3762da, _0x21a05b);
          _0x4b4ad3 = _0x4eca8b(_0x4b4ad3, _0x3f267f);
          _0x5d4cda = _0x4eca8b(_0x5d4cda, _0xda885b);
          _0x1fe4e4 = _0x4eca8b(_0x1fe4e4, _0x5975fc);
        }
      }
      return [_0x3762da, _0x4b4ad3, _0x5d4cda, _0x1fe4e4];
    }
  }
  function _0x3c0194(_0x3a5a64) {
    {
      var _0x9da8c3;
      var _0x2a8451 = "";
      var _0x4cc968 = _0x3a5a64.length * 32;
      for (_0x9da8c3 = 0; _0x9da8c3 < _0x4cc968; _0x9da8c3 += 8) {
        {
          _0x2a8451 += String.fromCharCode(_0x3a5a64[_0x9da8c3 >> 5] >>> _0x9da8c3 % 32 & 255);
        }
      }
      return _0x2a8451;
    }
  }
  function _0x3521b8(_0x1d7922) {
    {
      var _0x146e5f;
      var _0x434962 = [];
      _0x434962[(_0x1d7922.length >> 2) - 1] = undefined;
      for (_0x146e5f = 0; _0x146e5f < _0x434962.length; _0x146e5f += 1) {
        {
          _0x434962[_0x146e5f] = 0;
        }
      }
      var _0x5557f9 = _0x1d7922.length * 8;
      for (_0x146e5f = 0; _0x146e5f < _0x5557f9; _0x146e5f += 8) {
        {
          _0x434962[_0x146e5f >> 5] |= (_0x1d7922.charCodeAt(_0x146e5f / 8) & 255) << _0x146e5f % 32;
        }
      }
      return _0x434962;
    }
  }
  function _0x118d94(_0x245565) {
    {
      return _0x3c0194(_0x30897b(_0x3521b8(_0x245565), _0x245565.length * 8));
    }
  }
  function _0x4ac8ef(_0x134035, _0x33e6fc) {
    {
      var _0xbdcfad;
      var _0x4d2380 = _0x3521b8(_0x134035);
      var _0x95c889 = [];
      var _0x5de973 = [];
      var _0x18b057;
      _0x95c889[15] = _0x5de973[15] = undefined;
      if (_0x4d2380.length > 16) {
        {
          _0x4d2380 = _0x30897b(_0x4d2380, _0x134035.length * 8);
        }
      }
      for (_0xbdcfad = 0; _0xbdcfad < 16; _0xbdcfad += 1) {
        {
          _0x95c889[_0xbdcfad] = _0x4d2380[_0xbdcfad] ^ 909522486;
          _0x5de973[_0xbdcfad] = _0x4d2380[_0xbdcfad] ^ 1549556828;
        }
      }
      _0x18b057 = _0x30897b(_0x95c889.concat(_0x3521b8(_0x33e6fc)), 512 + _0x33e6fc.length * 8);
      return _0x3c0194(_0x30897b(_0x5de973.concat(_0x18b057), 640));
    }
  }
  function _0x284b13(_0xabd443) {
    {
      var _0x500a76 = "0123456789abcdef";
      var _0x51f720 = "";
      var _0x2741dc;
      var _0x545938;
      for (_0x545938 = 0; _0x545938 < _0xabd443.length; _0x545938 += 1) {
        {
          _0x2741dc = _0xabd443.charCodeAt(_0x545938);
          _0x51f720 += _0x500a76.charAt(_0x2741dc >>> 4 & 15) + _0x500a76.charAt(_0x2741dc & 15);
        }
      }
      return _0x51f720;
    }
  }
  function _0x3d4e58(_0x29282b) {
    {
      return unescape(encodeURIComponent(_0x29282b));
    }
  }
  function _0x125a21(_0x486eb7) {
    {
      return _0x118d94(_0x3d4e58(_0x486eb7));
    }
  }
  function _0x38a5bd(_0x31f00a) {
    {
      return _0x284b13(_0x125a21(_0x31f00a));
    }
  }
  function _0x91af9f(_0x3f2cb3, _0x3bf57e) {
    {
      return _0x4ac8ef(_0x3d4e58(_0x3f2cb3), _0x3d4e58(_0x3bf57e));
    }
  }
  function _0x348f9f(_0x2ae5ec, _0x3234d7) {
    {
      return _0x284b13(_0x91af9f(_0x2ae5ec, _0x3234d7));
    }
  }
  function _0x429c11(_0x40c117, _0x3862c4, _0x4d4fa8) {
    {
      if (!_0x3862c4) {
        {
          if (!_0x4d4fa8) {
            {
              return _0x38a5bd(_0x40c117);
            }
          }
          return _0x125a21(_0x40c117);
        }
      }
      if (!_0x4d4fa8) {
        {
          return _0x348f9f(_0x3862c4, _0x40c117);
        }
      }
      return _0x91af9f(_0x3862c4, _0x40c117);
    }
  }
  return _0x429c11(_0x87d228);
}
function getDataByJsonP(_0x106d0e, _0x2b6259, _0x338c39) {
  return new Promise((_0x2fee21, _0x36f8a0) => {
    {
      var _0xb1513f = document.createElement("script");
      _0xb1513f.src = _0x2b6259;
      _0xb1513f.type = "text/javascript";
      _0xb1513f.id = _0x106d0e;
      _0xb1513f.onload = _0xb1513f.onreadystatechange = function () {
        {
          if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
            {
              _0x2fee21(window[_0x338c39]);
            }
          }
        }
      };
      _0xb1513f.onerror = function (_0x289af6) {
        {
          _0x36f8a0(_0x289af6);
        }
      };
      var _0x55309c = document.querySelector("head");
      var _0x546e38 = document.querySelector("#" + _0x106d0e);
      if (!_0x55309c) {
        {
          throw new Error("错误 - 文档中没有head标签");
        }
      }
      if (_0x546e38) {
        {
          _0x546e38.remove();
        }
      }
      _0x55309c.appendChild(_0xb1513f);
    }
  });
}
function getIp(_0x30823a = "http://www.wigwy.xyz/api/cityjson?ie=utf-8", _0x29bd89 = "USERIP") {
  return getDataByJsonP("get_ip", _0x30823a, _0x29bd89);
}
function machineCode() {
  return new Promise(async (_0x4c9646, _0x5be454) => {
    {
      try {
        {
          var _0x16226c = localStorage.getItem("wig_login_4_0");
          if (!_0x16226c) {
            {
              _IP = await getIp();
              _0x16226c = Date.now() / 1000 + "-" + _IP + (Math.floor(Math.random() * 900) + 100) + "wigkmlogin";
              localStorage.setItem("wig_login_4_0", _0x16226c);
            }
          }
          _0x4c9646("" + _0x16226c);
        }
      } catch (_0x971a0) {
        {
          _0x5be454(_0x971a0);
        }
      }
    }
  });
}
function rc4(_0x50ca7f, _0x121bf7, _0xa3f305) {
  if (_0xa3f305 == false) {
    {
      _0x121bf7 = hexCharCodeToStr(_0x121bf7);
    }
  }
  let _0x2f45d8 = "";
  let _0x4efaba = [];
  let _0x5d220d = [];
  let _0x500105 = _0x50ca7f.length;
  let _0x3a1522 = _0x121bf7.length;
  for (let _0x2816bb = 0; _0x2816bb < 256; _0x2816bb++) {
    {
      _0x4efaba[_0x2816bb] = _0x50ca7f[_0x2816bb % _0x500105].charCodeAt(0);
      _0x5d220d[_0x2816bb] = _0x2816bb;
    }
  }
  var _0x4284ec = 0;
  for (let _0x4d4fcb = _0x4284ec; _0x4284ec < 256; _0x4284ec++) {
    {
      _0x4d4fcb = (_0x4d4fcb + _0x5d220d[_0x4284ec] + _0x4efaba[_0x4284ec]) % 256;
      var _0x32234e = _0x5d220d[_0x4284ec];
      _0x5d220d[_0x4284ec] = _0x5d220d[_0x4d4fcb];
      _0x5d220d[_0x4d4fcb] = _0x32234e;
    }
  }
  var _0x4284ec = 0;
  var _0x2ac971 = _0x4284ec;
  for (var _0x323164 = _0x2ac971; _0x4284ec < _0x3a1522; _0x4284ec++) {
    {
      _0x323164 = (_0x323164 + 1) % 256;
      _0x2ac971 = (_0x2ac971 + _0x5d220d[_0x323164]) % 256;
      var _0x32234e = _0x5d220d[_0x323164];
      _0x5d220d[_0x323164] = _0x5d220d[_0x2ac971];
      _0x5d220d[_0x2ac971] = _0x32234e;
      var _0x3feaa5 = _0x5d220d[(_0x5d220d[_0x323164] + _0x5d220d[_0x2ac971]) % 256];
      _0x2f45d8 += String.fromCharCode(_0x121bf7[_0x4284ec].charCodeAt(0) ^ _0x3feaa5);
    }
  }
  if (_0xa3f305) {
    {
      return strToHexCharCode(_0x2f45d8);
    }
  }
  return _0x2f45d8;
}
function strToHexCharCode(_0x53f16d) {
  if (_0x53f16d === "") {
    return "";
  }
  var _0x55cddb = [];
  for (var _0x1f45b1 = 0; _0x1f45b1 < _0x53f16d.length; _0x1f45b1++) {
    {
      _0x55cddb.push(_0x53f16d.charCodeAt(_0x1f45b1).toString(16));
    }
  }
  return _0x55cddb.join("");
}
function hexCharCodeToStr(_0x17d255) {
  var _0x5b4915 = _0x17d255.trim();
  var _0x1e3c44 = _0x5b4915.substr(0, 2).toLowerCase() === "0x" ? _0x5b4915.substr(2) : _0x5b4915;
  var _0x17f56f = _0x1e3c44.length;
  if (_0x17f56f % 2 !== 0) {
    {
      return "";
    }
  }
  var _0x1225fc;
  var _0xb60000 = [];
  for (var _0x8d757e = 0; _0x8d757e < _0x17f56f; _0x8d757e = _0x8d757e + 2) {
    {
      _0x1225fc = parseInt(_0x1e3c44.substr(_0x8d757e, 2), 16);
      _0xb60000.push(String.fromCharCode(_0x1225fc));
    }
  }
  return _0xb60000.join("");
}
function Base64DeCode(_0x48004d) {
  var _0x1e3b78 = "";
  var _0x5b94d3;
  var _0x45ddbc;
  var _0xb2e85a;
  var _0x1973a7;
  var _0xf69f0c;
  var _0x2912a5;
  var _0x45d962;
  var _0x3456c6 = 0;
  _0x48004d = _0x48004d.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  while (_0x3456c6 < _0x48004d.length) {
    {
      _0x1973a7 = _keyStr.indexOf(_0x48004d.charAt(_0x3456c6++));
      _0xf69f0c = _keyStr.indexOf(_0x48004d.charAt(_0x3456c6++));
      _0x2912a5 = _keyStr.indexOf(_0x48004d.charAt(_0x3456c6++));
      _0x45d962 = _keyStr.indexOf(_0x48004d.charAt(_0x3456c6++));
      _0x5b94d3 = _0x1973a7 << 2 | _0xf69f0c >> 4;
      _0x45ddbc = (_0xf69f0c & 15) << 4 | _0x2912a5 >> 2;
      _0xb2e85a = (_0x2912a5 & 3) << 6 | _0x45d962;
      _0x1e3b78 = _0x1e3b78 + String.fromCharCode(_0x5b94d3);
      if (_0x2912a5 != 64) {
        {
          _0x1e3b78 = _0x1e3b78 + String.fromCharCode(_0x45ddbc);
        }
      }
      if (_0x45d962 != 64) {
        {
          _0x1e3b78 = _0x1e3b78 + String.fromCharCode(_0xb2e85a);
        }
      }
    }
  }
  _0x1e3b78 = _utf8_decode(_0x1e3b78);
  return _0x1e3b78;
}
function _utf8_decode(_0x2cf7a3) {
  var _0x55425c = "";
  var _0x3b7cdc = 0;
  c1 = c2 = 0;
  var _0x1a3f20 = c1;
  while (_0x3b7cdc < _0x2cf7a3.length) {
    {
      _0x1a3f20 = _0x2cf7a3.charCodeAt(_0x3b7cdc);
      if (_0x1a3f20 < 128) {
        {
          _0x55425c += String.fromCharCode(_0x1a3f20);
          _0x3b7cdc++;
        }
      } else {
        if (_0x1a3f20 > 191 && _0x1a3f20 < 224) {
          {
            c2 = _0x2cf7a3.charCodeAt(_0x3b7cdc + 1);
            _0x55425c += String.fromCharCode((_0x1a3f20 & 31) << 6 | c2 & 63);
            _0x3b7cdc += 2;
          }
        } else {
          {
            c2 = _0x2cf7a3.charCodeAt(_0x3b7cdc + 1);
            c3 = _0x2cf7a3.charCodeAt(_0x3b7cdc + 2);
            _0x55425c += String.fromCharCode((_0x1a3f20 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
            _0x3b7cdc += 3;
          }
        }
      }
    }
  }
  return _0x55425c;
}
function login(_0x5c785c, _0x5f3ee0 = "", _0x280d18 = "wanggou") {
  return new Promise(async (_0x169763, _0x34745b) => {
    {
      try {
        {
          var _0x49edd6 = await machineCode();
          var _0x2ed45c = {
            imei: _0x49edd6
          };
          Object.assign(appConfig, _0x2ed45c);
          var _0x2b6af8 = "imei=" + _0x49edd6;
          var _0xd86268 = appConfig.uri + "/" + (Math.floor(new Date().getTime() / 1000) - 3) + "/" + appConfig.appid + "/" + _0x5c785c + "?" + _0x2b6af8;
          var _0x3223b5 = await getDataByJsonP("login", _0xd86268, "login_data");
          var _0x265204 = rc4(appConfig.appsecret, _0x3223b5, false);
          var _0x50454d;
          try {
            {
              _0x50454d = JSON.parse(Base64DeCode(_0x265204));
            }
          } catch (_0x345158) {
            {
              _0x34745b({
                msg: "请检查秘钥是否正确"
              });
            }
          }
          var _0x1b6aeb = Math.floor(new Date().getTime() / 1000) - 3;
          if (!_0x50454d.check || _0x50454d.check != md5(_0x49edd6 + _0x50454d.user_time + _0x50454d.api_time)) {
            {
              _0x50454d.code = "10001";
              _0x50454d.msg = "签名校验失败";
              _0x34745b(_0x50454d);
              return;
            }
          } else {
            if (_0x50454d.api_time - _0x1b6aeb > 30 || _0x50454d.api_time - _0x1b6aeb < -30) {
              {
                _0x50454d.code = "10002";
                _0x50454d.msg = "数据过期(2.0)";
                _0x34745b(_0x50454d);
                return;
              }
            }
          }
          if (_0x50454d.code == 20000) {
            {
              _0x169763(_0x50454d);
              return;
            }
          }
          _0x34745b(_0x50454d);
        }
      } catch (_0x2d9162) {
        {
          var _0x4f49eb = {
            msg: _0x2d9162
          };
          _0x34745b(_0x4f49eb);
        }
      }
    }
  });
}
async function loginLoop() {
  document.body.style.display = "none";
  firstLogin = false;
  while (true) {
    {
      var _0x40b24f = null;
      var _0x325129 = localStorage.getItem("wig_km_v2");
      if (_0x325129 != null) {
        {
          _0x40b24f = _0x325129;
        }
      } else {
        {
          _0x40b24f = prompt("请输入您的卡密:", "");
        }
      }
      if (_0x40b24f != "" && _0x40b24f != null) {
        {
          try {
            {
              var {
                expires,
                new_code2
              } = await login(_0x40b24f);
              document.body.style.display = "block";
              console.log(document.body);
              alert("验证成功,到期时间[" + expires + "]");
              localStorage.setItem("wig_km_v2", _0x40b24f);
              console.log("验证成功,到期时间[" + expires + "]");
              break;
            }
          } catch (_0x18fdd8) {
            {
              localStorage.removeItem("wig_km_v2");
              alert(_0x18fdd8.msg || _0x18fdd8.toString());
            }
          }
        }
      } else {
        {
          document.body.innerHTML = "<h1 style='font-size: 40px;color: #f00;'>请重启APP后输入卡密</h1>";
          document.body.style.display = "block";
          alert("请输入您的卡密");
          break;
        }
      }
    }
  }
}
loginLoop();