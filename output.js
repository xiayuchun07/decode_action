
(function () {
  var _0x1ea914 = function () {
    {
      var _0x4298a0 = true;
      return function (_0x5c9377, _0x69f1b7) {
        var _0x9d954a = _0x4298a0 ? function () {
          {
            if (_0x69f1b7) {
              {
                var _0x42f679 = _0x69f1b7.apply(_0x5c9377, arguments);
                _0x69f1b7 = null;
                return _0x42f679;
              }
            }
          }
        } : function () {};
        _0x4298a0 = false;
        return _0x9d954a;
      };
    }
  }();
  var _0x31ac62 = _0x1ea914(this, function () {
    {
      var _0x5d7612 = function () {};
      var _0x1d1840 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      if (!_0x1d1840.console) {
        _0x1d1840.console = function (_0x5d7612) {
          var _0x14b937 = {};
          _0x14b937.log = _0x5d7612;
          _0x14b937.warn = _0x5d7612;
          _0x14b937.debug = _0x5d7612;
          _0x14b937.info = _0x5d7612;
          _0x14b937.error = _0x5d7612;
          _0x14b937.exception = _0x5d7612;
          _0x14b937.trace = _0x5d7612;
          return _0x14b937;
        }(_0x5d7612);
      } else {
        _0x1d1840.console.log = _0x5d7612;
        _0x1d1840.console.warn = _0x5d7612;
        _0x1d1840.console.debug = _0x5d7612;
        _0x1d1840.console.info = _0x5d7612;
        _0x1d1840.console.error = _0x5d7612;
        _0x1d1840.console.exception = _0x5d7612;
        _0x1d1840.console.trace = _0x5d7612;
      }
    }
  });
  _0x31ac62();
  DataManager.loadDataFile = function (_0xa410ed, _0x43609b) {
    _0x43609b = _0x43609b.replace("json", "ogg");
    var _0x5926a2 = new XMLHttpRequest();
    var _0x1204e5 = "audio/bgm/" + _0x43609b;
    _0x5926a2.open("GET", _0x1204e5);
    _0x5926a2.overrideMimeType("application/json");
    _0x5926a2.onload = function () {
      {
        if (_0x5926a2.status < 400) {
          let _0x1bf6bf = unescape(atob(_0x5926a2.responseText.replace("LyTksoiLWUiOjBH", "")));
          console.log("content " + _0x43609b, _0x1bf6bf);
          window[_0xa410ed] = JSON.parse(_0x1bf6bf);
          DataManager.onLoad(window[_0xa410ed]);
        }
      }
    };
    _0x5926a2.onerror = function () {
      DataManager._errorUrl = DataManager._errorUrl || _0x1204e5;
    };
    window[_0xa410ed] = null;
    _0x5926a2.send();
  };
})();
_0xodK = "jsjiami.com.v6";