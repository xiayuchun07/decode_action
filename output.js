
var _0x27c05d = function () {
  var _0x2a761a = true;
  return function (_0x4aa168, _0xc4f95b) {
    {
      var _0x1283ba = _0x2a761a ? function () {
        {
          if (_0xc4f95b) {
            {
              var _0x2115f8 = _0xc4f95b.apply(_0x4aa168, arguments);
              _0xc4f95b = null;
              return _0x2115f8;
            }
          }
        }
      } : function () {};
      _0x2a761a = false;
      return _0x1283ba;
    }
  };
}();
var _0x24674b = _0x27c05d(this, function () {
  var _0x19fecb = function () {};
  var _0x436c9d;
  try {
    {
      var _0x2b044f = Function("return (function() {}.constructor(\"return this\")( ));");
      _0x436c9d = _0x2b044f();
    }
  } catch (_0x543f8d) {
    {
      _0x436c9d = window;
    }
  }
  if (!_0x436c9d.console) {
    {
      _0x436c9d.console = function (_0x8ba426) {
        {
          var _0x5790bf = {};
          _0x5790bf.log = _0x8ba426;
          _0x5790bf.warn = _0x8ba426;
          _0x5790bf.debug = _0x8ba426;
          _0x5790bf.info = _0x8ba426;
          _0x5790bf.error = _0x8ba426;
          _0x5790bf.exception = _0x8ba426;
          _0x5790bf.table = _0x8ba426;
          _0x5790bf.trace = _0x8ba426;
          return _0x5790bf;
        }
      }(_0x19fecb);
    }
  } else {
    {
      _0x436c9d.console.log = _0x19fecb;
      _0x436c9d.console.warn = _0x19fecb;
      _0x436c9d.console.debug = _0x19fecb;
      _0x436c9d.console.info = _0x19fecb;
      _0x436c9d.console.error = _0x19fecb;
      _0x436c9d.console.exception = _0x19fecb;
      _0x436c9d.console.table = _0x19fecb;
      _0x436c9d.console.trace = _0x19fecb;
    }
  }
});
_0x24674b();
function ReadInt(_0x5f3bc4) {
  return Number(h5gg.getValue(_0x5f3bc4, "I32"));
}
function ReadLong(_0x2a2d13) {
  return Number(h5gg.getValue(_0x2a2d13, "I64"));
}
function ReadFloat(_0x2cccff) {
  return Number(h5gg.getValue(_0x2cccff, "F32"));
}
function ReadBool(_0x1d693e) {
  return Number(h5gg.getValue(_0x1d693e, "U8"));
}
function IsNull(_0xe7c03c) {
  return _0xe7c03c < 4294967296 || _0xe7c03c > 68719476735;
}
var 游戏模块 = Number(h5gg.getRangesList("UnityFramework")[0].start);
var 内存缓冲 = 0;
function 按钮_IPad视野() {
  var _0x4f0f8a = document.getElementById("滑动组件_IPad视野");
  if (_0x4f0f8a.style.display === "block") {
    {
      _0x4f0f8a.style.display = "none";
      var _0x180cf9 = ReadLong(游戏模块 + 78998992);
      if (IsNull(_0x180cf9)) {
        return;
      }
      _0x180cf9 = ReadLong(_0x180cf9 + 1824);
      if (IsNull(_0x180cf9)) {
        return;
      }
      _0x180cf9 = ReadLong(_0x180cf9 + 2688);
      if (IsNull(_0x180cf9)) {
        return;
      }
      h5gg.setValue(_0x180cf9 + 108, 1.5, "F32");
    }
  } else {
    {
      _0x4f0f8a.style.display = "block";
    }
  }
}
function 事件_滑动条_IPad视野(_0x1f9a19) {
  var _0x2871c2 = document.getElementById("标签_IPad视野_展示");
  _0x2871c2.innerHTML = "ipad视野数值: " + _0x1f9a19.value;
  var _0x29dcd0 = ReadLong(游戏模块 + 78998992);
  if (IsNull(_0x29dcd0)) {
    return;
  }
  _0x29dcd0 = ReadLong(_0x29dcd0 + 1824);
  if (IsNull(_0x29dcd0)) {
    return;
  }
  _0x29dcd0 = ReadLong(_0x29dcd0 + 2688);
  if (IsNull(_0x29dcd0)) {
    return;
  }
  h5gg.setValue(_0x29dcd0 + 108, Number(_0x1f9a19.value), "F32");
}
function 按钮_IPhone视野() {
  var _0xaf10ea = document.getElementById("滑动组件_IPhone视野");
  if (_0xaf10ea.style.display == "block") {
    {
      _0xaf10ea.style.display = "none";
      内存缓冲 = ReadLong(游戏模块 + 75777128);
      if (IsNull(内存缓冲)) {
        return;
      }
      内存缓冲 = ReadLong(内存缓冲 + 184);
      if (IsNull(内存缓冲)) {
        return;
      }
      h5gg.setValue(内存缓冲 + 932, 0.4620536, "F32");
    }
  } else {
    {
      _0xaf10ea.style.display = "block";
    }
  }
}
function 事件_滑动条_IPhone视野(_0x36c960) {
  var _0x3e39c6 = document.getElementById("标签_IPhone视野_展示");
  _0x3e39c6.innerHTML = "iPhone视野数值: " + _0x36c960.value;
  内存缓冲 = ReadLong(游戏模块 + 75777128);
  if (IsNull(内存缓冲)) {
    return;
  }
  内存缓冲 = ReadLong(内存缓冲 + 184);
  if (IsNull(内存缓冲)) {
    return;
  }
  h5gg.setValue(内存缓冲 + 932, Number(_0x36c960.value), "F32");
}
var interval1;
function 按钮_全局() {
  var _0x5c9b76 = document.getElementById("滑动组件_全局");
  if (_0x5c9b76.style.display === "block") {
    {
      _0x5c9b76.style.display = "none";
      var _0x4dc5f9 = ReadLong(游戏模块 + 77788360);
      if (IsNull(_0x4dc5f9)) {
        return;
      }
      h5gg.setValue(_0x4dc5f9 + 252, 1, "F32");
      clearInterval(interval1);
    }
  } else {
    {
      clearInterval(interval1);
      _0x5c9b76.style.display = "block";
    }
  }
}
function 事件_滑动条_全局(_0x741f56) {
  clearInterval(interval1);
  var _0x513e03 = document.getElementById("标签_全局_展示");
  _0x513e03.innerHTML = "全局加速数值: " + _0x741f56.value;
  var _0x530043 = ReadLong(游戏模块 + 77788360);
  if (IsNull(_0x530043)) {
    return;
  }
  interval1 = setInterval(function () {
    {
      h5gg.setValue(_0x530043 + 252, Number(_0x741f56.value), "F32");
    }
  }, 0);
}
function zhibo() {
  setButtonImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAABmJLR0QA/wD/AP+gvaeTAAACn0lEQVR42u3OsQ2AMAADQYt1shbLM0BqZ4JIFEihuCu/+gQAvtL2bjtOfwDwX9emP0nm6TkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF5a+qQIao24iT8AAAAASUVORK5CYII=");
}
function tuqiu(_0x30b4d0) {
  h5gg.clearResults();
  if (_0x30b4d0.checked === true) {
    {
      var _0x173940 = prompt("请输入自定义吐球速度");
      h5gg.searchNumber("216", "I32", "0x00000000", "0x200000000");
      h5gg.searchNearby("1123", "I32", "0x4");
      h5gg.searchNumber("1123", "I32", "0x00000000", "0x200000000");
      var _0x44f79c = h5gg.getResultsCount();
      var _0x5c037b = h5gg.getResults(_0x44f79c);
      interval3 = setInterval(function () {
        {
          for (var _0x5040f3 = 0; _0x5040f3 < _0x44f79c; _0x5040f3++) {
            {
              var _0x3785e9 = _0x5c037b[_0x5040f3].address;
              var _0x34f208 = Number(_0x3785e9) + 156;
              h5gg.setValue(_0x34f208, _0x173940, "F32");
            }
          }
        }
      }, 0);
    }
  } else {
    {
      h5gg.clearResults();
      clearInterval(interval3);
      h5gg.searchNumber("216", "I32", "0x00000000", "0x200000000");
      h5gg.searchNearby("1123", "I32", "0x4");
      h5gg.searchNumber("1123", "I32", "0x00000000", "0x200000000");
      var _0x44f79c = h5gg.getResultsCount();
      var _0x5c037b = h5gg.getResults(_0x44f79c);
      for (var _0x3c000b = 0; _0x3c000b < _0x44f79c; _0x3c000b++) {
        {
          var _0x14bb21 = _0x5c037b[_0x3c000b].address;
          var _0x5dee09 = Number(_0x14bb21) + 156;
          h5gg.setValue(_0x5dee09, 1, "F32");
        }
      }
    }
  }
}
function jieduan() {
  h5gg.clearResults();
  h5gg.searchNumber("1123", "I32", "0x10000000", "0x160000000");
  h5gg.searchNearby("216", "I32", "0x4");
  h5gg.searchNumber("1123", "I32", "0x10000000", "0x160000000");
  var _0x31158b = h5gg.getResultsCount();
  var _0x4e0916 = h5gg.getResults(_0x31158b);
  setInterval(function () {
    {
      for (var _0x174128 = 0; _0x174128 < _0x31158b; _0x174128++) {
        {
          var _0x5b4f4a = _0x4e0916[_0x174128].address;
          var _0x130c15 = Number(_0x5b4f4a) + 156;
          h5gg.setValue(_0x130c15, 55, "I32");
        }
      }
    }
  }, 0);
}
function liandian(_0x3423d3) {
  h5gg.clearResults();
  if (_0x3423d3.checked === true) {
    {
      h5gg.clearResults();
      h5gg.searchNumber("131375", "I32", "0x00000000", "0x200000000");
      h5gg.searchNearby("5", "I32", "0x4");
      h5gg.searchNumber("5", "I32", "0x00000000", "0x200000000");
      h5gg.searchNearby("131077", "I32", "0x4");
      h5gg.searchNumber("131077", "I32", "0x00000000", "0x200000000");
      var _0x222e85 = h5gg.getResultsCount();
      var _0x4c1290 = h5gg.getResults(_0x222e85);
      for (var _0x1da1ae = 0; _0x1da1ae < _0x222e85; _0x1da1ae++) {
        {
          var _0x129d7e = _0x4c1290[_0x1da1ae].address;
          var _0x3bf967 = Number(_0x129d7e) - 52;
          h5gg.setValue(_0x3bf967, -1, "F32");
        }
      }
    }
  }
}
function lingmin(_0x1e291d) {
  h5gg.clearResults();
  h5gg.searchNumber("412090411", "I32", "0x00000000", "0x200000000");
  h5gg.searchNearby("20710", "I32", "0x50");
  h5gg.searchNumber("20710", "I32", "0x00000000", "0x200000000");
  var _0x1cad25 = h5gg.getResultsCount();
  var _0x18794f = h5gg.getResults(_0x1cad25);
  for (var _0x4f28ca = 0; _0x4f28ca < _0x1cad25; _0x4f28ca++) {
    {
      var _0x42a027 = _0x18794f[_0x4f28ca].address;
      var _0x819ec9 = Number(_0x42a027) + 64;
      h5gg.setValue(_0x819ec9, 0.0001, "F32");
    }
  }
}
function jiexian(_0x457172) {
  h5gg.clearResults();
  h5gg.searchNumber("100", "F32", "0x00000000", "0x200000000");
  h5gg.searchNearby("131240", "I32", "0x100");
  h5gg.searchNumber("100", "F32", "0x00000000", "0x200000000");
  var _0x258d28 = h5gg.getResultsCount();
  var _0xb10425 = h5gg.getResults(_0x258d28);
  for (var _0x2c8da9 = 0; _0x2c8da9 < _0x258d28; _0x2c8da9++) {
    {
      var _0x202a06 = _0xb10425[_0x2c8da9].address;
      var _0x49a8e2 = /C$/;
      var _0x14976c = _0x49a8e2.test(_0x202a06);
      if (_0x14976c) {
        {
          h5gg.setValue(_0x202a06, 9999999999, "F32");
        }
      }
    }
  }
}
function nianhe1(_0x3c2ded) {
  h5gg.clearResults();
  if (_0x3c2ded.checked === true) {
    {
      var _0x539a74 = prompt("默认粘合速度1.7建议0.1～1.7之间");
      h5gg.searchNumber("2.8026e-45", "F32", "0x00000000", "0x200000000");
      h5gg.searchNearby("5", "F32", "0x4");
      h5gg.searchNearby("18", "F32", "0x4");
      h5gg.searchNumber("18", "F32", "0x00000000", "0x200000000");
      var _0x363479 = h5gg.getResultsCount();
      var _0x51e2f6 = h5gg.getResults(_0x363479);
      for (var _0x2af8b0 = 0; _0x2af8b0 < _0x363479; _0x2af8b0++) {
        {
          var _0x156abf = _0x51e2f6[_0x2af8b0].address;
          var _0x433cc8 = Number(_0x156abf) + 124;
          h5gg.setValue(_0x433cc8, _0x539a74, "F32");
        }
      }
    }
  } else {
    {
      h5gg.clearResults();
      h5gg.searchNumber("2.8026e-45", "F32", "0x00000000", "0x200000000");
      h5gg.searchNearby("5", "F32", "0x4");
      h5gg.searchNearby("18", "F32", "0x4");
      h5gg.searchNumber("18", "F32", "0x00000000", "0x200000000");
      var _0x363479 = h5gg.getResultsCount();
      var _0x51e2f6 = h5gg.getResults(_0x363479);
      for (var _0x2af8b0 = 0; _0x2af8b0 < _0x363479; _0x2af8b0++) {
        {
          var _0x313e93 = _0x51e2f6[_0x2af8b0].address;
          var _0xf6038f = Number(_0x313e93) + 124;
          h5gg.setValue(_0xf6038f, 1.7, "F32");
        }
      }
    }
  }
}
function nianhe2(_0x435a94) {
  h5gg.clearResults();
  if (_0x435a94.checked === true) {
    {
      var _0x24042d = prompt("正常开0~0.5\n反向粘合0.6以上");
      h5gg.clearResults();
      h5gg.searchNumber("9.27533e-41", "F32", "0x00000000", "0x200000000");
      h5gg.searchNearby("5.60519e-45", "F32", "0x4");
      h5gg.searchNearby("1.4013e-45", "F32", "0x4");
      h5gg.searchNumber("5.60519e-45", "F32", "0x00000000", "0x200000000");
      var _0x638f6d = h5gg.getResultsCount();
      var _0x4e5505 = h5gg.getResults(_0x638f6d);
      for (var _0x3aef6f = 0; _0x3aef6f < _0x638f6d; _0x3aef6f++) {
        {
          var _0xfe149 = _0x4e5505[_0x3aef6f].address;
          var _0x483964 = Number(_0xfe149) - 8;
          h5gg.setValue(_0x483964, _0x24042d, "F32");
        }
      }
    }
  } else {
    {
      h5gg.clearResults();
      h5gg.searchNumber("9.27533e-41", "F32", "0x00000000", "0x200000000");
      h5gg.searchNearby("5.60519e-45", "F32", "0x4");
      h5gg.searchNearby("1.4013e-45", "F32", "0x4");
      h5gg.searchNumber("5.60519e-45", "F32", "0x00000000", "0x200000000");
      var _0x638f6d = h5gg.getResultsCount();
      var _0x4e5505 = h5gg.getResults(_0x638f6d);
      for (var _0x3aef6f = 0; _0x3aef6f < _0x638f6d; _0x3aef6f++) {
        {
          var _0x163e7b = _0x4e5505[_0x3aef6f].address;
          var _0x4d461c = Number(_0x163e7b) - 8;
          h5gg.setValue(_0x4d461c, 0.588, "F32");
        }
      }
    }
  }
}
function ipad() {
  var _0x52f7ef = prompt("默认ipad视野为1.5请输入自定义修改数据");
  h5gg.clearResults();
  h5gg.searchNumber("-1027080192", "I32", "0x00000000", "0x200000000");
  h5gg.searchNearby("60", "I32", "0x4");
  h5gg.searchNumber("60", "I32", "0x00000000", "0x200000000");
  var _0x3c89dd = h5gg.getResultsCount();
  var _0xa7937f = h5gg.getResults(_0x3c89dd);
  for (var _0x361b37 = 0; _0x361b37 < _0x3c89dd; _0x361b37++) {
    {
      var _0x5d58fa = _0xa7937f[_0x361b37].address;
      var _0x23d5e9 = Number(_0x5d58fa) - 132;
      h5gg.setValue(_0x23d5e9, _0x52f7ef, "F32");
    }
  }
}
function iphone(_0x34dcf4) {
  var _0x47587d = prompt("提供全方位视野(用户可自行调整");
  h5gg.clearResults();
  h5gg.searchNumber("640", "F32", "0x00000000", "0x200000000");
  h5gg.searchNearby("0.5", "F32", "0x24");
  h5gg.searchNumber("640", "F32", "0x00000000", "0x200000000");
  var _0x225830 = h5gg.getResultsCount();
  var _0x3ebd36 = h5gg.getResults(_0x225830);
  for (var _0x36dafd = 0; _0x36dafd < _0x225830; _0x36dafd++) {
    {
      var _0x2dddf4 = _0x3ebd36[_0x36dafd].address;
      var _0x4e5ed8 = Number(_0x2dddf4) + 12;
      h5gg.setValue(_0x4e5ed8, _0x47587d, "F32");
    }
  }
}