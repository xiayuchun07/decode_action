
function qqdzz() {
  var _0x1e814a = function () {
    {
      var _0x47ab8c = true;
      return function (_0x4bfc42, _0x5718c7) {
        {
          var _0x34c4b1 = _0x47ab8c ? function () {
            {
              if (_0x5718c7) {
                {
                  var _0x5e2718 = _0x5718c7.apply(_0x4bfc42, arguments);
                  _0x5718c7 = null;
                  return _0x5e2718;
                }
              }
            }
          } : function () {};
          _0x47ab8c = false;
          return _0x34c4b1;
        }
      };
    }
  }();
  var _0x6ab3c4 = _0x1e814a(this, function () {
    {
      var _0x3d2433 = function () {};
      var _0x2572c9;
      try {
        {
          var _0x556ddd = Function("return (function() {}.constructor(\"return this\")( ));");
          _0x2572c9 = _0x556ddd();
        }
      } catch (_0x553664) {
        {
          _0x2572c9 = window;
        }
      }
      if (!_0x2572c9.console) {
        {
          _0x2572c9.console = function (_0x12a5fd) {
            {
              var _0x36bf0e = {};
              _0x36bf0e.log = _0x12a5fd;
              _0x36bf0e.warn = _0x12a5fd;
              _0x36bf0e.debug = _0x12a5fd;
              _0x36bf0e.info = _0x12a5fd;
              _0x36bf0e.error = _0x12a5fd;
              _0x36bf0e.exception = _0x12a5fd;
              _0x36bf0e.table = _0x12a5fd;
              _0x36bf0e.trace = _0x12a5fd;
              return _0x36bf0e;
            }
          }(_0x3d2433);
        }
      } else {
        {
          _0x2572c9.console.log = _0x3d2433;
          _0x2572c9.console.warn = _0x3d2433;
          _0x2572c9.console.debug = _0x3d2433;
          _0x2572c9.console.info = _0x3d2433;
          _0x2572c9.console.error = _0x3d2433;
          _0x2572c9.console.exception = _0x3d2433;
          _0x2572c9.console.table = _0x3d2433;
          _0x2572c9.console.trace = _0x3d2433;
        }
      }
    }
  });
  _0x6ab3c4();
  var _0x5e92e = this;
  if (_0x5e92e.shiju_address) {
    {
      return;
    }
  }
  var _0x7ce867 = h5gg.getRangesList();
  var _0x4c5e74;
  var _0x16efa4;
  for (var _0x5cd5b9 = 0; _0x5cd5b9 < h5gg.getProcList().length; _0x5cd5b9++) {
    {
      if (h5gg.getProcList()[_0x5cd5b9].name == "balls") {
        {
          _0x4c5e74 = h5gg.getProcList()[_0x5cd5b9];
          h5gg.setTargetProc(_0x4c5e74.pid);
          _0x16efa4 = _0x4c5e74.name;
          h5gg.getRangesList();
        }
      }
    }
  }
  if (!(_0x16efa4 == "balls")) {
    {
      alert("请进游戏");
      qqdzz();
    }
  }
  if (!_0x16efa4) {
    {
      alert("初始化失败，未检测到游戏进程！");
      return;
    }
  }
  if (_0x16efa4) {
    {
      alert("初始化成功！快去玩吧！");
      return;
    }
  }
}
qqdzz();