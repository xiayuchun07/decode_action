
(function () {
  function _0x5b7618(_0x22ce57) {
    _0x5b7618 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0xe9af68) {
      return typeof _0xe9af68;
    } : function (_0x17ac08) {
      return _0x17ac08 && "function" == typeof Symbol && _0x17ac08.constructor === Symbol && _0x17ac08 !== Symbol.prototype ? "symbol" : typeof _0x17ac08;
    };
    return _0x5b7618(_0x22ce57);
  }
  function _0x4a1a88(_0x5e69e5, _0x2539cc) {
    var _0xfdc665 = Object.keys(_0x5e69e5);
    if (Object.getOwnPropertySymbols) {
      var _0x579802 = Object.getOwnPropertySymbols(_0x5e69e5);
      _0x2539cc && (_0x579802 = _0x579802.filter(function (_0x3686ba) {
        return Object.getOwnPropertyDescriptor(_0x5e69e5, _0x3686ba).enumerable;
      }));
      _0xfdc665.push.apply(_0xfdc665, _0x579802);
    }
    return _0xfdc665;
  }
  function _0x1189f5(_0x163851) {
    for (var _0x2bb5b7 = 1; _0x2bb5b7 < arguments.length; _0x2bb5b7++) {
      var _0xb2b9a5 = null != arguments[_0x2bb5b7] ? arguments[_0x2bb5b7] : {};
      _0x2bb5b7 % 2 ? _0x4a1a88(Object(_0xb2b9a5), true).forEach(function (_0x1579aa) {
        _0x5c08c9(_0x163851, _0x1579aa, _0xb2b9a5[_0x1579aa]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_0x163851, Object.getOwnPropertyDescriptors(_0xb2b9a5)) : _0x4a1a88(Object(_0xb2b9a5)).forEach(function (_0x16b80a) {
        Object.defineProperty(_0x163851, _0x16b80a, Object.getOwnPropertyDescriptor(_0xb2b9a5, _0x16b80a));
      });
    }
    return _0x163851;
  }
  function _0x5c08c9(_0x529ed5, _0x39a439, _0x2e2f75) {
    _0x39a439 = _0x53b9f1(_0x39a439);
    _0x39a439 in _0x529ed5 ? Object.defineProperty(_0x529ed5, _0x39a439, {
      value: _0x2e2f75,
      enumerable: true,
      configurable: true,
      writable: true
    }) : _0x529ed5[_0x39a439] = _0x2e2f75;
    return _0x529ed5;
  }
  function _0x53b9f1(_0xe3f3cd) {
    var _0xedb60b = _0x2caf0d(_0xe3f3cd, "string");
    return "symbol" === _0x5b7618(_0xedb60b) ? _0xedb60b : String(_0xedb60b);
  }
  function _0x2caf0d(_0x454294, _0x111efe) {
    if ("object" !== _0x5b7618(_0x454294) || null === _0x454294) {
      return _0x454294;
    }
    var _0x4bc703 = _0x454294[Symbol.toPrimitive];
    if (undefined !== _0x4bc703) {
      var _0x1c412f = _0x4bc703.call(_0x454294, _0x111efe || "default");
      if ("object" !== _0x5b7618(_0x1c412f)) {
        return _0x1c412f;
      }
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === _0x111efe ? String : Number)(_0x454294);
  }
  var _0x2d80ac = window.__NEPTUNE_IS_MY_WAIFU__.roomInitRes.data.uid;
  var _0x362fe4 = function _0x2da374() {
    var _0xbb5ff2 = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 3;
    var _0xcd5408 = document.querySelector(".ant-modal-confirm-btns button:nth-child(2)");
    _0xcd5408 ? _0xcd5408.click() : _0xbb5ff2 > 0 && setTimeout(function () {
      _0x2da374(_0xbb5ff2 - 1);
    }, 1000);
  };
  var _0x1b1547 = function (_0x524673) {
    if (console.log(_0x524673), "string" === typeof _0x524673 && (_0x524673 = JSON.parse(_0x524673)), _0x524673 = _0x524673.data, "INTERACT_WORD" == _0x524673.cmd) {
      var _0x2646d2 = _0x524673.data.uname;
      var _0x45225a = {
        msgType: "join",
        snsNick: _0x2646d2,
        content: _0x2646d2 + "进入直播间",
        commentId: +new Date(),
        isFollow: false
      };
      return postMessage(_0x1189f5({
        type: "comment"
      }, _0x45225a), "*");
    }
    if ("DANMU_MSG" !== _0x524673.cmd) {
      return false;
    }
    var _0x162f40 = _0x524673.info[0][15];
    if (!_0x162f40) {
      return false;
    }
    var _0x9bf615 = _0x162f40.user;
    var _0x1acb80 = _0x9bf615.base.name;
    var _0x25ecaa = _0x9bf615.uid;
    var _0x13ecf6 = _0x524673.info[1];
    var _0xb106da = +new Date();
    var _0x3ac6d4 = "comment";
    var _0x454956 = false;
    if (_0x2d80ac == _0x25ecaa) {
      console.log(_0x1acb80 + ":" + _0x13ecf6 + "----->主播自己的评论, 跳过");
      return false;
    }
    var _0x11fc2e = {
      msgType: _0x3ac6d4,
      snsNick: _0x1acb80,
      content: _0x13ecf6,
      commentId: _0xb106da,
      isFollow: _0x454956
    };
    postMessage(_0x1189f5({
      type: "comment"
    }, _0x11fc2e), "*");
  };
  var _0x2aaf7c = {
    text: function (_0x45d480) {
      var _0x4bef7e = document.querySelector("#control-panel-ctnr-box");
      if (!_0x4bef7e) {
        console.log(_0x45d480 + "------发送失败!");
        return false;
      }
      var _0xb623cf = _0x4bef7e.querySelector("textarea");
      _0xb623cf.value = _0x45d480;
      var _0x5e15bb = new Event("input", {
        bubbles: true
      });
      _0xb623cf.dispatchEvent(_0x5e15bb);
      setTimeout(function () {
        var _0x3b0291 = _0x4bef7e.querySelector("button");
        _0x3b0291 && _0x3b0291.click();
      }, 1500);
    },
    xiache: function (_0xa5f007) {
      for (var _0x1a4677 = _0xa5f007.id, _0x58cc75 = document.querySelector("div[data-test-id=\"virtuoso-item-list\"]"), _0x3f5b54 = 0; _0x3f5b54 < _0x58cc75.childNodes.length; _0x3f5b54++) {
        var _0x268709 = _0x58cc75.childNodes[_0x3f5b54];
        var _0x449597 = _0x268709.querySelector("input").value;
        if (_0x449597 == _0x1a4677) {
          var _0x5cc4a4 = _0x268709.querySelectorAll("button")[1];
          _0x5cc4a4 && _0x5cc4a4.click();
          break;
        }
      }
    },
    jiangjie: function (_0x270601) {
      var _0x5e8abf;
      var _0x4f5d4e;
      var _0x39f341 = this;
      var _0x58ba42 = _0x270601.id;
      var _0x55a4e1 = _0x270601.maxTry;
      var _0x15ff82 = undefined === _0x55a4e1 ? 5 : _0x55a4e1;
      var _0x46b9d5 = document.querySelector("div[data-test-id=\"virtuoso-item-list\"]");
      var _0x594edd = _0x46b9d5.childNodes.length;
      var _0x35e93a = _0x46b9d5.childNodes[0];
      var _0x5ac1a4 = _0x46b9d5.childNodes[_0x594edd - 1];
      if (_0x5e8abf = _0x4f5d4e = 0, _0x35e93a && (_0x5e8abf = _0x35e93a.querySelector("input").value), _0x5ac1a4 && (_0x4f5d4e = _0x5ac1a4.querySelector("input").value), _0x15ff82 >= 0) {
        if (--_0x15ff82, _0x58ba42 < _0x5e8abf) {
          console.log("往上翻", _0x15ff82);
          _0x46b9d5.parentNode.parentNode.scrollBy(0, -118 * (_0x5e8abf - _0x58ba42));
          return requestAnimationFrame(function () {
            _0x39f341.jiangjie({
              id: _0x58ba42,
              maxTry: _0x15ff82
            });
          });
        }
        if (_0x58ba42 > _0x4f5d4e) {
          console.log("往下翻", _0x15ff82);
          _0x46b9d5.parentNode.parentNode.scrollBy(0, 118 * (_0x58ba42 - _0x4f5d4e));
          return requestAnimationFrame(function () {
            _0x39f341.jiangjie({
              id: _0x58ba42,
              maxTry: _0x15ff82
            });
          });
        }
      } else {
        console.log("已经尝试过5次寻找商品");
      }
      for (var _0x44cfb3 = 0; _0x44cfb3 < _0x46b9d5.childNodes.length; _0x44cfb3++) {
        var _0x525674 = _0x46b9d5.childNodes[_0x44cfb3];
        var _0xa400d1 = _0x525674.querySelector("input");
        if (_0xa400d1 && (_0xa400d1 = _0xa400d1.value, _0xa400d1 == _0x58ba42)) {
          var _0x4f10cc = _0x525674.querySelectorAll("button")[3];
          _0x4f10cc && _0x4f10cc.click();
          break;
        }
      }
      _0x362fe4(5);
    }
  };
  window.onmessage = function (_0xe6fee5) {
    if ("__MY_CMD__" == _0xe6fee5.data.type) {
      var _0x287cfe = _0xe6fee5.data;
      var _0x40e052 = _0x287cfe.cmd;
      var _0x57c4ff = _0x287cfe.data;
      _0x2aaf7c[_0x40e052] && _0x2aaf7c[_0x40e052](_0x57c4ff);
    } else {
      "__MY_KUAISHOU__" == _0xe6fee5.data.type && _0x1b1547(_0xe6fee5.data);
    }
  };
})();