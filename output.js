//Mon May 12 2025 08:24:41 GMT+0000 (Coordinated Universal Time)
//你好
//你好
function qqdzz() {
  var _0x126ac8 = function () {
    {
      var _0x3b691c = true;
      return function (_0x290efa, _0x2775d9) {
        {
          var _0x932371 = _0x3b691c ? function () {
            {
              if (_0x2775d9) {
                {
                  var _0x53e77e = _0x2775d9.apply(_0x290efa, arguments);
                  _0x2775d9 = null;
                  return _0x53e77e;
                }
              }
            }
          } : function () {};
          _0x3b691c = false;
          return _0x932371;
        }
      };
    }
  }();
  var _0x58f475 = _0x126ac8(this, function () {
    {
      var _0x330eef = function () {};
      var _0x14a7ac;
      try {
        {
          var _0x33f2fc = Function("return (function() {}.constructor(\"return this\")( ));");
          _0x14a7ac = _0x33f2fc();
        }
      } catch (_0x5e7465) {
        {
          _0x14a7ac = window;
        }
      }
      if (!_0x14a7ac.console) {
        {
          _0x14a7ac.console = function (_0x28b38f) {
            {
              var _0x396ae0 = {};
              _0x396ae0.log = _0x28b38f;
              _0x396ae0.warn = _0x28b38f;
              _0x396ae0.debug = _0x28b38f;
              _0x396ae0.info = _0x28b38f;
              _0x396ae0.error = _0x28b38f;
              _0x396ae0.exception = _0x28b38f;
              _0x396ae0.table = _0x28b38f;
              _0x396ae0.trace = _0x28b38f;
              return _0x396ae0;
            }
          }(_0x330eef);
        }
      } else {
        {
          _0x14a7ac.console.log = _0x330eef;
          _0x14a7ac.console.warn = _0x330eef;
          _0x14a7ac.console.debug = _0x330eef;
          _0x14a7ac.console.info = _0x330eef;
          _0x14a7ac.console.error = _0x330eef;
          _0x14a7ac.console.exception = _0x330eef;
          _0x14a7ac.console.table = _0x330eef;
          _0x14a7ac.console.trace = _0x330eef;
        }
      }
    }
  });
  _0x58f475();
  var _0x32cf39 = this;
  if (_0x32cf39.shiju_address) {
    {
      return;
    }
  }
  var _0x55058b = h5gg.getRangesList();
  var _0x1defcf;
  var _0x394c40;
  for (var _0x15e94a = 0; _0x15e94a < h5gg.getProcList().length; _0x15e94a++) {
    {
      if (h5gg.getProcList()[_0x15e94a].name == "balls") {
        {
          _0x1defcf = h5gg.getProcList()[_0x15e94a];
          h5gg.setTargetProc(_0x1defcf.pid);
          _0x394c40 = _0x1defcf.name;
          h5gg.getRangesList();
        }
      }
    }
  }
  if (!(_0x394c40 == "balls")) {
    {
      alert("请进游戏");
      qqdzz();
    }
  }
  if (!_0x394c40) {
    {
      alert("初始化失败，未检测到游戏进程！", 2000);
      return;
    }
  }
  if (_0x394c40) {
    {
      alert("初始化成功！快去玩吧！", 2000);
      return;
    }
  }
}
qqdzz();