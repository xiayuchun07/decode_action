
function qqdzz() {
  var _0xfa6420 = function () {
    {
      var _0x318d6a = true;
      return function (_0x13a9f1, _0x43df1e) {
        {
          var _0x4984dc = _0x318d6a ? function () {
            {
              if (_0x43df1e) {
                {
                  var _0x23abae = _0x43df1e.apply(_0x13a9f1, arguments);
                  _0x43df1e = null;
                  return _0x23abae;
                }
              }
            }
          } : function () {};
          _0x318d6a = false;
          return _0x4984dc;
        }
      };
    }
  }();
  var _0x5e42cb = _0xfa6420(this, function () {
    {
      var _0x316f9a = function () {};
      var _0xa4b3ec = function () {
        {
          var _0x476ceb;
          try {
            {
              _0x476ceb = Function("return (function() {}.constructor(\"return this\")( ));")();
            }
          } catch (_0x4de910) {
            {
              _0x476ceb = window;
            }
          }
          return _0x476ceb;
        }
      };
      var _0x216c8c = _0xa4b3ec();
      if (!_0x216c8c.console) {
        {
          _0x216c8c.console = function (_0x2f3cd6) {
            {
              var _0x1acf10 = {};
              _0x1acf10.log = _0x2f3cd6;
              _0x1acf10.warn = _0x2f3cd6;
              _0x1acf10.debug = _0x2f3cd6;
              _0x1acf10.info = _0x2f3cd6;
              _0x1acf10.error = _0x2f3cd6;
              _0x1acf10.exception = _0x2f3cd6;
              _0x1acf10.table = _0x2f3cd6;
              _0x1acf10.trace = _0x2f3cd6;
              return _0x1acf10;
            }
          }(_0x316f9a);
        }
      } else {
        {
          _0x216c8c.console.log = _0x316f9a;
          _0x216c8c.console.warn = _0x316f9a;
          _0x216c8c.console.debug = _0x316f9a;
          _0x216c8c.console.info = _0x316f9a;
          _0x216c8c.console.error = _0x316f9a;
          _0x216c8c.console.exception = _0x316f9a;
          _0x216c8c.console.table = _0x316f9a;
          _0x216c8c.console.trace = _0x316f9a;
        }
      }
    }
  });
  _0x5e42cb();
  var _0x263e1a = this;
  if (_0x263e1a.shiju_address) {
    {
      return;
    }
  }
  var _0x2aaf21 = h5gg.getRangesList();
  var _0x1b093f;
  var _0x33b82c;
  for (var _0x356ca9 = 0; _0x356ca9 < h5gg.getProcList().length; _0x356ca9++) {
    {
      if (h5gg.getProcList()[_0x356ca9].name == "balls") {
        {
          _0x1b093f = h5gg.getProcList()[_0x356ca9];
          h5gg.setTargetProc(_0x1b093f.pid);
          _0x33b82c = _0x1b093f.name;
          h5gg.getRangesList();
        }
      }
    }
  }
  if (!(_0x33b82c == "balls")) {
    {
      showNotification("请进游戏", 3000);
      qqdzz();
    }
  }
  if (!_0x33b82c) {
    {
      showNotification("初始化失败，未检测到游戏进程！", 3000);
      return;
    }
  }
  if (_0x33b82c) {
    {
      showNotification("初始化成功！快去玩吧！", 3000);
      return;
    }
  }
}
qqdzz();
function tuqiu() {
  var _0x2e0376 = prompt("请输入吐球数值");
  h5gg.clearResults();
  h5gg.searchNumber("216", "I32", "0x00000000", "0x200000000");
  h5gg.searchNearby("1123", "I32", "0x4");
  h5gg.searchNumber("1123", "I32", "0x00000000", "0x200000000");
  var _0x5b3073 = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x554879 = h5gg.getResults(_0x5b3073);
  setInterval(function () {
    {
      for (var _0x3bb89a = 0; _0x3bb89a < _0x5b3073; _0x3bb89a++) {
        {
          var _0xd4c42e = _0x554879[_0x3bb89a].address;
          var _0x5a9c80 = Number(_0xd4c42e) + 160;
          h5gg.setValue(_0x5a9c80, _0x2e0376, "I64");
        }
      }
    }
  }, 0);
}
function pbsy() {
  h5gg.clearResults();
  var _0x1a3453 = prompt("正常视野1.5请输入视野数值");
  h5gg.clearResults();
  h5gg.searchNumber("800", "F32", "0x00000000", "0x200000000");
  h5gg.searchNearby("-750", "F32", "0x24");
  h5gg.searchNearby("8", "F32", "0x24");
  h5gg.searchNumber("-750", "F32", "0x00000000", "0x200000000");
  var _0x3af831 = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x1b9171 = h5gg.getResults(_0x3af831);
  for (var _0x24063b = 0; _0x24063b < _0x3af831; _0x24063b++) {
    {
      var _0xfc422e = _0x1b9171[_0x24063b].address;
      var _0x3ce39e = Number(_0xfc422e) + 20;
      h5gg.setValue(_0x3ce39e, _0x1a3453, "F32");
    }
  }
}
function sjsy() {
  h5gg.clearResults();
  var _0x446d30 = prompt("手机视野倍数");
  h5gg.searchNumber("-3278106", "I32", "0x00000000", "0x200000000");
  h5gg.searchNearby("-8880791", "I32", "0x4");
  h5gg.searchNumber("-8880791", "I32", "0x00000000", "0x200000000");
  var _0x4b36cd = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x2eb9e8 = h5gg.getResults(_0x4b36cd);
  for (var _0x379bcb = 0; _0x379bcb < _0x4b36cd; _0x379bcb++) {
    {
      var _0x1915a6 = _0x2eb9e8[_0x379bcb].address;
      var _0x9c2397 = Number(_0x1915a6) + 96;
      h5gg.setValue(_0x9c2397, _0x446d30, "F32");
    }
  }
}
function nianhe1() {
  h5gg.clearResults();
  var _0x27e9b0 = prompt("默认粘合速度1.7建议0.1～1.7之间");
  h5gg.searchNumber("1", "F32", "0x00000000", "0x200000000");
  h5gg.searchNearby("7.9", "F32", "0x4");
  h5gg.searchNearby("0.4", "F32", "0x4");
  h5gg.searchNumber("0.4", "F32", "0x00000000", "0x200000000");
  var _0x1e5dcd = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x50b8a5 = h5gg.getResults(_0x1e5dcd);
  for (var _0x280b01 = 0; _0x280b01 < _0x1e5dcd; _0x280b01++) {
    {
      var _0x4397e8 = _0x50b8a5[_0x280b01].address;
      var _0x318233 = Number(_0x4397e8) - 208;
      h5gg.setValue(_0x318233, _0x27e9b0, "F32");
    }
  }
}
function nianhe2() {
  h5gg.clearResults();
  var _0x526055 = prompt("正常开0~0.5\n反向粘合0.6以上");
  h5gg.searchNumber("112", "I32", "0x00000000", "0x200000000");
  h5gg.searchNearby("287", "I32", "0x4");
  h5gg.searchNearby("65536", "I32", "0x4");
  h5gg.searchNumber("65536", "I32", "0x00000000", "0x200000000");
  var _0x411178 = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x380af0 = h5gg.getResults(_0x411178);
  for (var _0x5729ba = 0; _0x5729ba < _0x411178; _0x5729ba++) {
    {
      var _0x3f0d5f = _0x380af0[_0x5729ba].address;
      var _0x5ba25d = Number(_0x3f0d5f) - 24;
      h5gg.setValue(_0x5ba25d, _0x526055, "F32");
    }
  }
}
function qj() {
  h5gg.clearResults();
  var _0x21ad23 = prompt("只能砸铁不能玩游戏正常1");
  h5gg.clearResults();
  h5gg.searchNumber("0.03", "F32", "0x000000000", "0x2000000000");
  h5gg.searchNearby("0.33333334327", "F32", "0x8");
  h5gg.searchNearby("1", "F32", "0x8");
  h5gg.searchNumber("1", "F32", "0x000000000", "0x2000000000");
  var _0x42f977 = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x37c666 = h5gg.getResults(_0x42f977);
  setInterval(function () {
    {
      for (var _0x8344c8 = 0; _0x8344c8 < _0x42f977; _0x8344c8++) {
        {
          var _0x38db74 = _0x37c666[_0x8344c8].address;
          h5gg.setValue(_0x38db74, _0x21ad23, "F32");
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
  var _0x10a920 = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x13186c = h5gg.getResults(_0x10a920);
  for (var _0x214836 = 0; _0x214836 < _0x10a920; _0x214836++) {
    {
      var _0x78f3e = _0x13186c[_0x214836].address;
      var _0xfbe8fb = Number(_0x78f3e) - 52;
      h5gg.setValue(_0xfbe8fb, -1, "F32");
    }
  }
}
function yglm() {
  h5gg.clearResults();
  h5gg.searchNumber("412090411", "I32", "0x00000000", "0x200000000");
  h5gg.searchNearby("21582", "I32", "0x4");
  h5gg.searchNumber("21582", "I32", "0x00000000", "0x200000000");
  var _0x380d42 = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x3db791 = h5gg.getResults(_0x380d42);
  for (var _0x3a5d9d = 0; _0x3a5d9d < _0x380d42; _0x3a5d9d++) {
    {
      var _0x7dc1f = _0x3db791[_0x3a5d9d].address;
      var _0x538d10 = Number(_0x7dc1f) + 64;
      h5gg.setValue(_0x538d10, 0.0001, "F32");
    }
  }
}
function ygjx() {
  h5gg.clearResults();
  h5gg.searchNumber("100", "F32", "0x10000000", "0x160000000");
  h5gg.searchNearby("131240", "I32", "0x40");
  var _0x58dbeb = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x128e42 = h5gg.getResults(_0x58dbeb);
  for (var _0xe7ab80 = 0; _0xe7ab80 < _0x58dbeb; _0xe7ab80++) {
    {
      var _0x368f46 = _0x128e42[_0xe7ab80].address;
      var _0x9ae749 = /C$/;
      var _0x2848e6 = _0x9ae749.test(_0x368f46);
      if (_0x2848e6) {
        {
          h5gg.setValue(_0x368f46, 9999999999, "F32");
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
  var _0xd42147 = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x23245b = h5gg.getResults(_0xd42147);
  setInterval(function () {
    {
      for (var _0x1079a7 = 0; _0x1079a7 < _0xd42147; _0x1079a7++) {
        {
          var _0x59db28 = _0x23245b[_0x1079a7].address;
          var _0x1f7e65 = Number(_0x59db28) + 160;
          h5gg.setValue(_0x1f7e65, 55, "I64");
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
  var _0x31b7e6 = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x516857 = h5gg.getResults(_0x31b7e6);
  setInterval(function () {
    {
      for (var _0x545ee7 = 0; _0x545ee7 < _0x31b7e6; _0x545ee7++) {
        {
          var _0x1547c4 = _0x516857[_0x545ee7].address;
          var _0x553037 = Number(_0x1547c4) + 160;
          h5gg.setValue(_0x553037, 45, "I64");
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
  var _0xc00cfe = h5gg.getResultsCount();
  showNotification("开启成功", 2000);
  var _0x38aa96 = h5gg.getResults(_0xc00cfe);
  setInterval(function () {
    {
      for (var _0x3fccc2 = 0; _0x3fccc2 < _0xc00cfe; _0x3fccc2++) {
        {
          var _0x3d6dca = _0x38aa96[_0x3fccc2].address;
          var _0x4575ac = Number(_0x3d6dca) + 160;
          h5gg.setValue(_0x4575ac, 35, "I64");
        }
      }
    }
  }, 0);
}
function showNotification(_0x11ab40, _0x415961) {
  var _0x616329 = document.createElement("div");
  _0x616329.className = "notification";
  _0x616329.textContent = _0x11ab40;
  document.body.appendChild(_0x616329);
  setTimeout(function () {
    {
      _0x616329.style.opacity = 0;
      setTimeout(function () {
        {
          document.body.removeChild(_0x616329);
        }
      }, 1000);
    }
  }, _0x415961);
}
const buttons = document.querySelectorAll(".anniu");
const pages = document.querySelectorAll(".gnjm > div");
pages[0].classList.add("active");
buttons[0].classList.add("active");
buttons.forEach((_0x432fba, _0x56b670) => {
  _0x432fba.addEventListener("click", () => {
    {
      pages.forEach(_0x461230 => _0x461230.classList.remove("active"));
      buttons.forEach(_0x5de972 => _0x5de972.classList.remove("active"));
      pages[_0x56b670].classList.add("active");
      _0x432fba.classList.add("active");
    }
  });
});
window.print = function () {
  console.warn("打印功能已被禁用。");
  alert("抱歉，此页面不允许打印。");
};
window.addEventListener("keydown", function (_0x3d1658) {
  if ((_0x3d1658.ctrlKey || _0x3d1658.metaKey) && _0x3d1658.key.toLowerCase() === "p") {
    {
      _0x3d1658.preventDefault();
      alert("抱歉，此页面不允许打印。");
    }
  }
});
window.addEventListener("beforeprint", function (_0x1f5308) {
  const _0x13d5c8 = document.body.innerHTML;
  document.body.innerHTML = "<h1>此页面内容受保护，禁止打印。</h1>";
  window.addEventListener("afterprint", function _0x5157dc() {
    {
      document.body.innerHTML = _0x13d5c8;
      window.removeEventListener("afterprint", _0x5157dc);
    }
  });
});
let _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const appConfig = {
  uri: "http://www.wigwy.xyz/api/loginJavaScript",
  appid: "30430",
  appsecret: "dE9PuPKrOXaLqWb",
  imei: null
};
function md5(_0x626467) {
  function _0x26c5a4(_0x3bb864, _0x23532f) {
    {
      var _0xe9de52 = (_0x3bb864 & 65535) + (_0x23532f & 65535);
      var _0x288599 = (_0x3bb864 >> 16) + (_0x23532f >> 16) + (_0xe9de52 >> 16);
      return _0x288599 << 16 | _0xe9de52 & 65535;
    }
  }
  function _0x5499f0(_0x7efe16, _0x5d05bb) {
    {
      return _0x7efe16 << _0x5d05bb | _0x7efe16 >>> 32 - _0x5d05bb;
    }
  }
  function _0x34ba73(_0x26ac5a, _0x250ae1, _0x1308f0, _0x243be1, _0x59dd03, _0x1100b5) {
    {
      return _0x26c5a4(_0x5499f0(_0x26c5a4(_0x26c5a4(_0x250ae1, _0x26ac5a), _0x26c5a4(_0x243be1, _0x1100b5)), _0x59dd03), _0x1308f0);
    }
  }
  function _0x345b53(_0x53d665, _0xbca30, _0x56b053, _0xc0fd50, _0x2f1525, _0x5a70d0, _0x524665) {
    {
      return _0x34ba73(_0xbca30 & _0x56b053 | ~_0xbca30 & _0xc0fd50, _0x53d665, _0xbca30, _0x2f1525, _0x5a70d0, _0x524665);
    }
  }
  function _0x1e6e21(_0x5ee9ef, _0x976c4c, _0x36fa8a, _0x1a864e, _0x346556, _0x59e73b, _0xcc0fdf) {
    {
      return _0x34ba73(_0x976c4c & _0x1a864e | _0x36fa8a & ~_0x1a864e, _0x5ee9ef, _0x976c4c, _0x346556, _0x59e73b, _0xcc0fdf);
    }
  }
  function _0x1fcba2(_0x37a44d, _0x5a18b3, _0x465509, _0x21d74c, _0x1e9ff6, _0x5ddc79, _0x562bab) {
    {
      return _0x34ba73(_0x5a18b3 ^ _0x465509 ^ _0x21d74c, _0x37a44d, _0x5a18b3, _0x1e9ff6, _0x5ddc79, _0x562bab);
    }
  }
  function _0x28658d(_0x48dc95, _0x506386, _0x296d68, _0x341939, _0x3aa52f, _0x1377e7, _0x26f4f3) {
    {
      return _0x34ba73(_0x296d68 ^ (_0x506386 | ~_0x341939), _0x48dc95, _0x506386, _0x3aa52f, _0x1377e7, _0x26f4f3);
    }
  }
  function _0xafee54(_0xc90430, _0x2b8361) {
    {
      _0xc90430[_0x2b8361 >> 5] |= 128 << _0x2b8361 % 32;
      _0xc90430[(_0x2b8361 + 64 >>> 9 << 4) + 14] = _0x2b8361;
      var _0x5ccd14;
      var _0x4162bd;
      var _0x2c28a3;
      var _0xc079ee;
      var _0x5cb628;
      var _0x514a19 = 1732584193;
      var _0x1659dc = -271733879;
      var _0x518c78 = -1732584194;
      var _0x5a3a51 = 271733878;
      for (_0x5ccd14 = 0; _0x5ccd14 < _0xc90430.length; _0x5ccd14 += 16) {
        {
          _0x4162bd = _0x514a19;
          _0x2c28a3 = _0x1659dc;
          _0xc079ee = _0x518c78;
          _0x5cb628 = _0x5a3a51;
          _0x514a19 = _0x345b53(_0x514a19, _0x1659dc, _0x518c78, _0x5a3a51, _0xc90430[_0x5ccd14], 7, -680876936);
          _0x5a3a51 = _0x345b53(_0x5a3a51, _0x514a19, _0x1659dc, _0x518c78, _0xc90430[_0x5ccd14 + 1], 12, -389564586);
          _0x518c78 = _0x345b53(_0x518c78, _0x5a3a51, _0x514a19, _0x1659dc, _0xc90430[_0x5ccd14 + 2], 17, 606105819);
          _0x1659dc = _0x345b53(_0x1659dc, _0x518c78, _0x5a3a51, _0x514a19, _0xc90430[_0x5ccd14 + 3], 22, -1044525330);
          _0x514a19 = _0x345b53(_0x514a19, _0x1659dc, _0x518c78, _0x5a3a51, _0xc90430[_0x5ccd14 + 4], 7, -176418897);
          _0x5a3a51 = _0x345b53(_0x5a3a51, _0x514a19, _0x1659dc, _0x518c78, _0xc90430[_0x5ccd14 + 5], 12, 1200080426);
          _0x518c78 = _0x345b53(_0x518c78, _0x5a3a51, _0x514a19, _0x1659dc, _0xc90430[_0x5ccd14 + 6], 17, -1473231341);
          _0x1659dc = _0x345b53(_0x1659dc, _0x518c78, _0x5a3a51, _0x514a19, _0xc90430[_0x5ccd14 + 7], 22, -45705983);
          _0x514a19 = _0x345b53(_0x514a19, _0x1659dc, _0x518c78, _0x5a3a51, _0xc90430[_0x5ccd14 + 8], 7, 1770035416);
          _0x5a3a51 = _0x345b53(_0x5a3a51, _0x514a19, _0x1659dc, _0x518c78, _0xc90430[_0x5ccd14 + 9], 12, -1958414417);
          _0x518c78 = _0x345b53(_0x518c78, _0x5a3a51, _0x514a19, _0x1659dc, _0xc90430[_0x5ccd14 + 10], 17, -42063);
          _0x1659dc = _0x345b53(_0x1659dc, _0x518c78, _0x5a3a51, _0x514a19, _0xc90430[_0x5ccd14 + 11], 22, -1990404162);
          _0x514a19 = _0x345b53(_0x514a19, _0x1659dc, _0x518c78, _0x5a3a51, _0xc90430[_0x5ccd14 + 12], 7, 1804603682);
          _0x5a3a51 = _0x345b53(_0x5a3a51, _0x514a19, _0x1659dc, _0x518c78, _0xc90430[_0x5ccd14 + 13], 12, -40341101);
          _0x518c78 = _0x345b53(_0x518c78, _0x5a3a51, _0x514a19, _0x1659dc, _0xc90430[_0x5ccd14 + 14], 17, -1502002290);
          _0x1659dc = _0x345b53(_0x1659dc, _0x518c78, _0x5a3a51, _0x514a19, _0xc90430[_0x5ccd14 + 15], 22, 1236535329);
          _0x514a19 = _0x1e6e21(_0x514a19, _0x1659dc, _0x518c78, _0x5a3a51, _0xc90430[_0x5ccd14 + 1], 5, -165796510);
          _0x5a3a51 = _0x1e6e21(_0x5a3a51, _0x514a19, _0x1659dc, _0x518c78, _0xc90430[_0x5ccd14 + 6], 9, -1069501632);
          _0x518c78 = _0x1e6e21(_0x518c78, _0x5a3a51, _0x514a19, _0x1659dc, _0xc90430[_0x5ccd14 + 11], 14, 643717713);
          _0x1659dc = _0x1e6e21(_0x1659dc, _0x518c78, _0x5a3a51, _0x514a19, _0xc90430[_0x5ccd14], 20, -373897302);
          _0x514a19 = _0x1e6e21(_0x514a19, _0x1659dc, _0x518c78, _0x5a3a51, _0xc90430[_0x5ccd14 + 5], 5, -701558691);
          _0x5a3a51 = _0x1e6e21(_0x5a3a51, _0x514a19, _0x1659dc, _0x518c78, _0xc90430[_0x5ccd14 + 10], 9, 38016083);
          _0x518c78 = _0x1e6e21(_0x518c78, _0x5a3a51, _0x514a19, _0x1659dc, _0xc90430[_0x5ccd14 + 15], 14, -660478335);
          _0x1659dc = _0x1e6e21(_0x1659dc, _0x518c78, _0x5a3a51, _0x514a19, _0xc90430[_0x5ccd14 + 4], 20, -405537848);
          _0x514a19 = _0x1e6e21(_0x514a19, _0x1659dc, _0x518c78, _0x5a3a51, _0xc90430[_0x5ccd14 + 9], 5, 568446438);
          _0x5a3a51 = _0x1e6e21(_0x5a3a51, _0x514a19, _0x1659dc, _0x518c78, _0xc90430[_0x5ccd14 + 14], 9, -1019803690);
          _0x518c78 = _0x1e6e21(_0x518c78, _0x5a3a51, _0x514a19, _0x1659dc, _0xc90430[_0x5ccd14 + 3], 14, -187363961);
          _0x1659dc = _0x1e6e21(_0x1659dc, _0x518c78, _0x5a3a51, _0x514a19, _0xc90430[_0x5ccd14 + 8], 20, 1163531501);
          _0x514a19 = _0x1e6e21(_0x514a19, _0x1659dc, _0x518c78, _0x5a3a51, _0xc90430[_0x5ccd14 + 13], 5, -1444681467);
          _0x5a3a51 = _0x1e6e21(_0x5a3a51, _0x514a19, _0x1659dc, _0x518c78, _0xc90430[_0x5ccd14 + 2], 9, -51403784);
          _0x518c78 = _0x1e6e21(_0x518c78, _0x5a3a51, _0x514a19, _0x1659dc, _0xc90430[_0x5ccd14 + 7], 14, 1735328473);
          _0x1659dc = _0x1e6e21(_0x1659dc, _0x518c78, _0x5a3a51, _0x514a19, _0xc90430[_0x5ccd14 + 12], 20, -1926607734);
          _0x514a19 = _0x1fcba2(_0x514a19, _0x1659dc, _0x518c78, _0x5a3a51, _0xc90430[_0x5ccd14 + 5], 4, -378558);
          _0x5a3a51 = _0x1fcba2(_0x5a3a51, _0x514a19, _0x1659dc, _0x518c78, _0xc90430[_0x5ccd14 + 8], 11, -2022574463);
          _0x518c78 = _0x1fcba2(_0x518c78, _0x5a3a51, _0x514a19, _0x1659dc, _0xc90430[_0x5ccd14 + 11], 16, 1839030562);
          _0x1659dc = _0x1fcba2(_0x1659dc, _0x518c78, _0x5a3a51, _0x514a19, _0xc90430[_0x5ccd14 + 14], 23, -35309556);
          _0x514a19 = _0x1fcba2(_0x514a19, _0x1659dc, _0x518c78, _0x5a3a51, _0xc90430[_0x5ccd14 + 1], 4, -1530992060);
          _0x5a3a51 = _0x1fcba2(_0x5a3a51, _0x514a19, _0x1659dc, _0x518c78, _0xc90430[_0x5ccd14 + 4], 11, 1272893353);
          _0x518c78 = _0x1fcba2(_0x518c78, _0x5a3a51, _0x514a19, _0x1659dc, _0xc90430[_0x5ccd14 + 7], 16, -155497632);
          _0x1659dc = _0x1fcba2(_0x1659dc, _0x518c78, _0x5a3a51, _0x514a19, _0xc90430[_0x5ccd14 + 10], 23, -1094730640);
          _0x514a19 = _0x1fcba2(_0x514a19, _0x1659dc, _0x518c78, _0x5a3a51, _0xc90430[_0x5ccd14 + 13], 4, 681279174);
          _0x5a3a51 = _0x1fcba2(_0x5a3a51, _0x514a19, _0x1659dc, _0x518c78, _0xc90430[_0x5ccd14], 11, -358537222);
          _0x518c78 = _0x1fcba2(_0x518c78, _0x5a3a51, _0x514a19, _0x1659dc, _0xc90430[_0x5ccd14 + 3], 16, -722521979);
          _0x1659dc = _0x1fcba2(_0x1659dc, _0x518c78, _0x5a3a51, _0x514a19, _0xc90430[_0x5ccd14 + 6], 23, 76029189);
          _0x514a19 = _0x1fcba2(_0x514a19, _0x1659dc, _0x518c78, _0x5a3a51, _0xc90430[_0x5ccd14 + 9], 4, -640364487);
          _0x5a3a51 = _0x1fcba2(_0x5a3a51, _0x514a19, _0x1659dc, _0x518c78, _0xc90430[_0x5ccd14 + 12], 11, -421815835);
          _0x518c78 = _0x1fcba2(_0x518c78, _0x5a3a51, _0x514a19, _0x1659dc, _0xc90430[_0x5ccd14 + 15], 16, 530742520);
          _0x1659dc = _0x1fcba2(_0x1659dc, _0x518c78, _0x5a3a51, _0x514a19, _0xc90430[_0x5ccd14 + 2], 23, -995338651);
          _0x514a19 = _0x28658d(_0x514a19, _0x1659dc, _0x518c78, _0x5a3a51, _0xc90430[_0x5ccd14], 6, -198630844);
          _0x5a3a51 = _0x28658d(_0x5a3a51, _0x514a19, _0x1659dc, _0x518c78, _0xc90430[_0x5ccd14 + 7], 10, 1126891415);
          _0x518c78 = _0x28658d(_0x518c78, _0x5a3a51, _0x514a19, _0x1659dc, _0xc90430[_0x5ccd14 + 14], 15, -1416354905);
          _0x1659dc = _0x28658d(_0x1659dc, _0x518c78, _0x5a3a51, _0x514a19, _0xc90430[_0x5ccd14 + 5], 21, -57434055);
          _0x514a19 = _0x28658d(_0x514a19, _0x1659dc, _0x518c78, _0x5a3a51, _0xc90430[_0x5ccd14 + 12], 6, 1700485571);
          _0x5a3a51 = _0x28658d(_0x5a3a51, _0x514a19, _0x1659dc, _0x518c78, _0xc90430[_0x5ccd14 + 3], 10, -1894986606);
          _0x518c78 = _0x28658d(_0x518c78, _0x5a3a51, _0x514a19, _0x1659dc, _0xc90430[_0x5ccd14 + 10], 15, -1051523);
          _0x1659dc = _0x28658d(_0x1659dc, _0x518c78, _0x5a3a51, _0x514a19, _0xc90430[_0x5ccd14 + 1], 21, -2054922799);
          _0x514a19 = _0x28658d(_0x514a19, _0x1659dc, _0x518c78, _0x5a3a51, _0xc90430[_0x5ccd14 + 8], 6, 1873313359);
          _0x5a3a51 = _0x28658d(_0x5a3a51, _0x514a19, _0x1659dc, _0x518c78, _0xc90430[_0x5ccd14 + 15], 10, -30611744);
          _0x518c78 = _0x28658d(_0x518c78, _0x5a3a51, _0x514a19, _0x1659dc, _0xc90430[_0x5ccd14 + 6], 15, -1560198380);
          _0x1659dc = _0x28658d(_0x1659dc, _0x518c78, _0x5a3a51, _0x514a19, _0xc90430[_0x5ccd14 + 13], 21, 1309151649);
          _0x514a19 = _0x28658d(_0x514a19, _0x1659dc, _0x518c78, _0x5a3a51, _0xc90430[_0x5ccd14 + 4], 6, -145523070);
          _0x5a3a51 = _0x28658d(_0x5a3a51, _0x514a19, _0x1659dc, _0x518c78, _0xc90430[_0x5ccd14 + 11], 10, -1120210379);
          _0x518c78 = _0x28658d(_0x518c78, _0x5a3a51, _0x514a19, _0x1659dc, _0xc90430[_0x5ccd14 + 2], 15, 718787259);
          _0x1659dc = _0x28658d(_0x1659dc, _0x518c78, _0x5a3a51, _0x514a19, _0xc90430[_0x5ccd14 + 9], 21, -343485551);
          _0x514a19 = _0x26c5a4(_0x514a19, _0x4162bd);
          _0x1659dc = _0x26c5a4(_0x1659dc, _0x2c28a3);
          _0x518c78 = _0x26c5a4(_0x518c78, _0xc079ee);
          _0x5a3a51 = _0x26c5a4(_0x5a3a51, _0x5cb628);
        }
      }
      return [_0x514a19, _0x1659dc, _0x518c78, _0x5a3a51];
    }
  }
  function _0x36b649(_0x43e286) {
    {
      var _0x298e25;
      var _0x17bacd = "";
      var _0x40c08a = _0x43e286.length * 32;
      for (_0x298e25 = 0; _0x298e25 < _0x40c08a; _0x298e25 += 8) {
        {
          _0x17bacd += String.fromCharCode(_0x43e286[_0x298e25 >> 5] >>> _0x298e25 % 32 & 255);
        }
      }
      return _0x17bacd;
    }
  }
  function _0x1f9682(_0x5577ea) {
    {
      var _0x30ebaf;
      var _0x16d6b3 = [];
      _0x16d6b3[(_0x5577ea.length >> 2) - 1] = undefined;
      for (_0x30ebaf = 0; _0x30ebaf < _0x16d6b3.length; _0x30ebaf += 1) {
        {
          _0x16d6b3[_0x30ebaf] = 0;
        }
      }
      var _0x418f68 = _0x5577ea.length * 8;
      for (_0x30ebaf = 0; _0x30ebaf < _0x418f68; _0x30ebaf += 8) {
        {
          _0x16d6b3[_0x30ebaf >> 5] |= (_0x5577ea.charCodeAt(_0x30ebaf / 8) & 255) << _0x30ebaf % 32;
        }
      }
      return _0x16d6b3;
    }
  }
  function _0x1c58b9(_0x45019f) {
    {
      return _0x36b649(_0xafee54(_0x1f9682(_0x45019f), _0x45019f.length * 8));
    }
  }
  function _0x33a885(_0x44780a, _0x48b903) {
    {
      var _0x524eb6;
      var _0x4e3ae3 = _0x1f9682(_0x44780a);
      var _0x5f5245 = [];
      var _0x16d7e0 = [];
      var _0xdacb71;
      _0x5f5245[15] = _0x16d7e0[15] = undefined;
      if (_0x4e3ae3.length > 16) {
        {
          _0x4e3ae3 = _0xafee54(_0x4e3ae3, _0x44780a.length * 8);
        }
      }
      for (_0x524eb6 = 0; _0x524eb6 < 16; _0x524eb6 += 1) {
        {
          _0x5f5245[_0x524eb6] = _0x4e3ae3[_0x524eb6] ^ 909522486;
          _0x16d7e0[_0x524eb6] = _0x4e3ae3[_0x524eb6] ^ 1549556828;
        }
      }
      _0xdacb71 = _0xafee54(_0x5f5245.concat(_0x1f9682(_0x48b903)), 512 + _0x48b903.length * 8);
      return _0x36b649(_0xafee54(_0x16d7e0.concat(_0xdacb71), 640));
    }
  }
  function _0x2b5e69(_0x3d8f39) {
    {
      var _0x223322 = "0123456789abcdef";
      var _0x156156 = "";
      var _0x14579d;
      var _0x43a953;
      for (_0x43a953 = 0; _0x43a953 < _0x3d8f39.length; _0x43a953 += 1) {
        {
          _0x14579d = _0x3d8f39.charCodeAt(_0x43a953);
          _0x156156 += _0x223322.charAt(_0x14579d >>> 4 & 15) + _0x223322.charAt(_0x14579d & 15);
        }
      }
      return _0x156156;
    }
  }
  function _0x49005a(_0x4f8172) {
    {
      return unescape(encodeURIComponent(_0x4f8172));
    }
  }
  function _0x45eb4c(_0x167bb1) {
    {
      return _0x1c58b9(_0x49005a(_0x167bb1));
    }
  }
  function _0x15e956(_0x1e203e) {
    {
      return _0x2b5e69(_0x45eb4c(_0x1e203e));
    }
  }
  function _0xfbbded(_0x32b1c9, _0x515aea) {
    {
      return _0x33a885(_0x49005a(_0x32b1c9), _0x49005a(_0x515aea));
    }
  }
  function _0x4494fd(_0x37e5a1, _0xcabe91) {
    {
      return _0x2b5e69(_0xfbbded(_0x37e5a1, _0xcabe91));
    }
  }
  function _0x10ae00(_0x324449, _0x14bafa, _0x2ffb52) {
    {
      if (!_0x14bafa) {
        {
          if (!_0x2ffb52) {
            {
              return _0x15e956(_0x324449);
            }
          }
          return _0x45eb4c(_0x324449);
        }
      }
      if (!_0x2ffb52) {
        {
          return _0x4494fd(_0x14bafa, _0x324449);
        }
      }
      return _0xfbbded(_0x14bafa, _0x324449);
    }
  }
  return _0x10ae00(_0x626467);
}
function getDataByJsonP(_0x231b39, _0x3e28c9, _0x3d9389) {
  return new Promise((_0x1344ed, _0x2012c7) => {
    {
      var _0x4768b1 = document.createElement("script");
      _0x4768b1.src = _0x3e28c9;
      _0x4768b1.type = "text/javascript";
      _0x4768b1.id = _0x231b39;
      _0x4768b1.onload = _0x4768b1.onreadystatechange = function () {
        {
          if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
            {
              _0x1344ed(window[_0x3d9389]);
            }
          }
        }
      };
      _0x4768b1.onerror = function (_0x4e27ad) {
        {
          _0x2012c7(_0x4e27ad);
        }
      };
      var _0x1e1581 = document.querySelector("head");
      var _0x1e9a80 = document.querySelector("#" + _0x231b39);
      if (!_0x1e1581) {
        {
          throw new Error("错误 - 文档中没有head标签");
        }
      }
      if (_0x1e9a80) {
        {
          _0x1e9a80.remove();
        }
      }
      _0x1e1581.appendChild(_0x4768b1);
    }
  });
}
function getIp(_0x5f1814 = "http://www.wigwy.xyz/api/cityjson?ie=utf-8", _0x2cec78 = "USERIP") {
  return getDataByJsonP("get_ip", _0x5f1814, _0x2cec78);
}
function machineCode() {
  return new Promise(async (_0x5db942, _0x5f321d) => {
    {
      try {
        {
          var _0x5b83bc = localStorage.getItem("wig_login_4_0");
          if (!_0x5b83bc) {
            {
              _IP = await getIp();
              _0x5b83bc = Date.now() / 1000 + "-" + _IP + (Math.floor(Math.random() * 900) + 100) + "wigkmlogin";
              localStorage.setItem("wig_login_4_0", _0x5b83bc);
            }
          }
          _0x5db942("" + _0x5b83bc);
        }
      } catch (_0x430304) {
        {
          _0x5f321d(_0x430304);
        }
      }
    }
  });
}
function rc4(_0x16ce1c, _0x43648f, _0x420f49) {
  if (_0x420f49 == false) {
    {
      _0x43648f = hexCharCodeToStr(_0x43648f);
    }
  }
  let _0x4779ff = "";
  let _0x396fbb = [];
  let _0x45861f = [];
  let _0x366ecd = _0x16ce1c.length;
  let _0x23c240 = _0x43648f.length;
  for (let _0x2325c1 = 0; _0x2325c1 < 256; _0x2325c1++) {
    {
      _0x396fbb[_0x2325c1] = _0x16ce1c[_0x2325c1 % _0x366ecd].charCodeAt(0);
      _0x45861f[_0x2325c1] = _0x2325c1;
    }
  }
  var _0x472b44 = 0;
  for (let _0x1ef6c7 = _0x472b44; _0x472b44 < 256; _0x472b44++) {
    {
      _0x1ef6c7 = (_0x1ef6c7 + _0x45861f[_0x472b44] + _0x396fbb[_0x472b44]) % 256;
      var _0x539ae1 = _0x45861f[_0x472b44];
      _0x45861f[_0x472b44] = _0x45861f[_0x1ef6c7];
      _0x45861f[_0x1ef6c7] = _0x539ae1;
    }
  }
  var _0x472b44 = 0;
  var _0x11d468 = _0x472b44;
  for (var _0xb8de06 = _0x11d468; _0x472b44 < _0x23c240; _0x472b44++) {
    {
      _0xb8de06 = (_0xb8de06 + 1) % 256;
      _0x11d468 = (_0x11d468 + _0x45861f[_0xb8de06]) % 256;
      var _0x539ae1 = _0x45861f[_0xb8de06];
      _0x45861f[_0xb8de06] = _0x45861f[_0x11d468];
      _0x45861f[_0x11d468] = _0x539ae1;
      var _0x1d7f38 = _0x45861f[(_0x45861f[_0xb8de06] + _0x45861f[_0x11d468]) % 256];
      _0x4779ff += String.fromCharCode(_0x43648f[_0x472b44].charCodeAt(0) ^ _0x1d7f38);
    }
  }
  if (_0x420f49) {
    {
      return strToHexCharCode(_0x4779ff);
    }
  }
  return _0x4779ff;
}
function strToHexCharCode(_0x2ed926) {
  if (_0x2ed926 === "") {
    return "";
  }
  var _0x2d226b = [];
  for (var _0x29d957 = 0; _0x29d957 < _0x2ed926.length; _0x29d957++) {
    {
      _0x2d226b.push(_0x2ed926.charCodeAt(_0x29d957).toString(16));
    }
  }
  return _0x2d226b.join("");
}
function hexCharCodeToStr(_0x5caf9b) {
  var _0x8fd1be = _0x5caf9b.trim();
  var _0x3776c0 = _0x8fd1be.substr(0, 2).toLowerCase() === "0x" ? _0x8fd1be.substr(2) : _0x8fd1be;
  var _0x34a92e = _0x3776c0.length;
  if (_0x34a92e % 2 !== 0) {
    {
      return "";
    }
  }
  var _0x1c25a1;
  var _0x44c136 = [];
  for (var _0x24bbdc = 0; _0x24bbdc < _0x34a92e; _0x24bbdc = _0x24bbdc + 2) {
    {
      _0x1c25a1 = parseInt(_0x3776c0.substr(_0x24bbdc, 2), 16);
      _0x44c136.push(String.fromCharCode(_0x1c25a1));
    }
  }
  return _0x44c136.join("");
}
function Base64DeCode(_0x1f64db) {
  var _0x31f86c = "";
  var _0x548ccf;
  var _0x22db8b;
  var _0x427851;
  var _0x115e18;
  var _0x23e542;
  var _0xc581cd;
  var _0x4720eb;
  var _0xd911c = 0;
  _0x1f64db = _0x1f64db.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  while (_0xd911c < _0x1f64db.length) {
    {
      _0x115e18 = _keyStr.indexOf(_0x1f64db.charAt(_0xd911c++));
      _0x23e542 = _keyStr.indexOf(_0x1f64db.charAt(_0xd911c++));
      _0xc581cd = _keyStr.indexOf(_0x1f64db.charAt(_0xd911c++));
      _0x4720eb = _keyStr.indexOf(_0x1f64db.charAt(_0xd911c++));
      _0x548ccf = _0x115e18 << 2 | _0x23e542 >> 4;
      _0x22db8b = (_0x23e542 & 15) << 4 | _0xc581cd >> 2;
      _0x427851 = (_0xc581cd & 3) << 6 | _0x4720eb;
      _0x31f86c = _0x31f86c + String.fromCharCode(_0x548ccf);
      if (_0xc581cd != 64) {
        {
          _0x31f86c = _0x31f86c + String.fromCharCode(_0x22db8b);
        }
      }
      if (_0x4720eb != 64) {
        {
          _0x31f86c = _0x31f86c + String.fromCharCode(_0x427851);
        }
      }
    }
  }
  _0x31f86c = _utf8_decode(_0x31f86c);
  return _0x31f86c;
}
function _utf8_decode(_0x1aa527) {
  var _0x4956de = "";
  var _0x3d0ab1 = 0;
  c1 = c2 = 0;
  var _0x25d77f = c1;
  while (_0x3d0ab1 < _0x1aa527.length) {
    {
      _0x25d77f = _0x1aa527.charCodeAt(_0x3d0ab1);
      if (_0x25d77f < 128) {
        {
          _0x4956de += String.fromCharCode(_0x25d77f);
          _0x3d0ab1++;
        }
      } else {
        if (_0x25d77f > 191 && _0x25d77f < 224) {
          {
            c2 = _0x1aa527.charCodeAt(_0x3d0ab1 + 1);
            _0x4956de += String.fromCharCode((_0x25d77f & 31) << 6 | c2 & 63);
            _0x3d0ab1 += 2;
          }
        } else {
          {
            c2 = _0x1aa527.charCodeAt(_0x3d0ab1 + 1);
            c3 = _0x1aa527.charCodeAt(_0x3d0ab1 + 2);
            _0x4956de += String.fromCharCode((_0x25d77f & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
            _0x3d0ab1 += 3;
          }
        }
      }
    }
  }
  return _0x4956de;
}
function login(_0x184965, _0x37c226 = "", _0x2e1a31 = "wanggou") {
  return new Promise(async (_0x1d0a77, _0x2268d2) => {
    {
      try {
        {
          var _0x2eef83 = await machineCode();
          var _0x4cea6e = {
            imei: _0x2eef83
          };
          Object.assign(appConfig, _0x4cea6e);
          var _0x38ff2f = "imei=" + _0x2eef83;
          var _0x4c64c5 = appConfig.uri + "/" + (Math.floor(new Date().getTime() / 1000) - 3) + "/" + appConfig.appid + "/" + _0x184965 + "?" + _0x38ff2f;
          var _0x9ada5e = await getDataByJsonP("login", _0x4c64c5, "login_data");
          var _0x585393 = rc4(appConfig.appsecret, _0x9ada5e, false);
          var _0x1c4576;
          try {
            {
              _0x1c4576 = JSON.parse(Base64DeCode(_0x585393));
            }
          } catch (_0x4c4e6b) {
            {
              _0x2268d2({
                msg: "请检查秘钥是否正确"
              });
            }
          }
          var _0x4cef32 = Math.floor(new Date().getTime() / 1000) - 3;
          if (!_0x1c4576.check || _0x1c4576.check != md5(_0x2eef83 + _0x1c4576.user_time + _0x1c4576.api_time)) {
            {
              _0x1c4576.code = "10001";
              _0x1c4576.msg = "签名校验失败";
              _0x2268d2(_0x1c4576);
              return;
            }
          } else {
            if (_0x1c4576.api_time - _0x4cef32 > 30 || _0x1c4576.api_time - _0x4cef32 < -30) {
              {
                _0x1c4576.code = "10002";
                _0x1c4576.msg = "数据过期(2.0)";
                _0x2268d2(_0x1c4576);
                return;
              }
            }
          }
          if (_0x1c4576.code == 20000) {
            {
              _0x1d0a77(_0x1c4576);
              return;
            }
          }
          _0x2268d2(_0x1c4576);
        }
      } catch (_0x4cd287) {
        {
          var _0x3421ad = {
            msg: _0x4cd287
          };
          _0x2268d2(_0x3421ad);
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
      var _0x45abc4 = null;
      var _0xebd5f4 = localStorage.getItem("wig_km_v2");
      if (_0xebd5f4 != null) {
        {
          _0x45abc4 = _0xebd5f4;
        }
      } else {
        {
          _0x45abc4 = prompt("官方QQ群644473287\n请输入您的卡密:", "");
        }
      }
      if (_0x45abc4 != "" && _0x45abc4 != null) {
        {
          try {
            {
              var {
                expires,
                new_code2
              } = await login(_0x45abc4);
              document.body.style.display = "block";
              console.log(document.body);
              alert("验证成功,到期时间[" + expires + "]");
              localStorage.setItem("wig_km_v2", _0x45abc4);
              console.log("验证成功,到期时间[" + expires + "]");
              break;
            }
          } catch (_0x4c7ec3) {
            {
              localStorage.removeItem("wig_km_v2");
              alert(_0x4c7ec3.msg || _0x4c7ec3.toString());
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