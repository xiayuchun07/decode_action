//Tue Apr 08 2025 07:10:17 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  "use strict";
  function _0x198fb0() {
    (function () {})();
    const _0x5eaf4d = function () {},
      _0xca22c0 = window.Function.toString;
    if (/https:\/\/www\.66rpg\.com\/h5\/\d+/.test(window.location.href) || /https:\/\/m\.66rpg\.com\/h5\/\d+/.test(window.location.href)) {
      const _0x289271 = new Proxy(window.Function.prototype.constructor, {
          "apply": function (_0xaae010, _0x55c468, _0x39e28a) {
            {
              const _0x33ac0c = _0x39e28a.join(",");
              if (_0x33ac0c.includes("debugger")) return _0x5eaf4d;
              return Reflect.apply(_0xaae010, _0x55c468, _0x39e28a);
            }
          },
          "get": function (_0x2b503f, _0x38e67d, _0x2b6c68) {
            {
              if (_0x38e67d === "toString") {
                return function () {
                  if (this === _0x144691) {
                    return "function Function() { [native code] }";
                  }
                  return _0xca22c0.call(this);
                };
              }
              return Reflect.get(_0x2b503f, _0x38e67d, _0x2b6c68);
            }
          }
        }),
        _0x144691 = _0x289271;
      Object.defineProperty(Function.prototype, "constructor", {
        "value": _0x144691,
        "writable": true,
        "configurable": true,
        "enumerable": false
      });
    }
  }
  function _0x1b25ac(_0x93af62) {
    const _0x582d86 = _0x93af62.Function.prototype.toString;
    _0x93af62.Function.prototype.toString = new Proxy(_0x582d86, {
      "apply": function (_0x36f7db, _0x29399c, _0x2ba1cd) {
        {
          if (_0x29399c === _0x93af62.console2.table) return "function table() { [native code] }";
          return Reflect.apply(_0x36f7db, _0x29399c, _0x2ba1cd);
        }
      },
      "get": function (_0x271fbb, _0x8d2ecc, _0x2c9557) {
        if (_0x8d2ecc === "toString") return function () {
          return "function toString() { [native code] }";
        };
        return Reflect.get(_0x271fbb, _0x8d2ecc, _0x2c9557);
      }
    });
  }
  function _0x542df3(_0x54dbf3) {
    {
      const _0x5caa07 = _0x54dbf3.Array.prototype.join;
      _0x54dbf3.Array.prototype.join = function () {
        {
          if (this.length === 2 && this[0].includes("rand=") && this[1] === "source=devTools") {
            {
              const _0x51d0b = window.document.getElementById("gameMainBox")?.["contentWindow"] || window;
              _0x51d0b.console2.table = function () {};
              _0x1b25ac(_0x54dbf3);
              _0x51d0b.console2.log = function () {};
              _0x51d0b.Array.prototype.join = _0x5caa07;
            }
          }
          return _0x5caa07.apply(this, arguments);
        }
      };
    }
  }
  function _0x81d7b8() {
    {
      const _0x1e09a1 = window.setInterval;
      if (/https:\/\/m\.66rpg\.com\/h5\/\d+/.test(window.location.href)) {
        {
          if (!window.isMS) {
            {
              window.setInterval = new Proxy(_0x1e09a1, {
                "apply": function (_0x312770, _0x572be3, _0x6db5e) {
                  {
                    const [_0x3368c1, _0x1e6f06, ..._0x228051] = _0x6db5e;
                    if (_0x1e6f06 === 20) {
                      const _0x4049b5 = _0x3368c1.toString();
                      if (_0x4049b5.includes("window") && _0x4049b5.includes("function(){}") && _0x4049b5.includes("Date")) {
                        window.setInterval = _0x1e09a1;
                        window._user_report = function () {};
                        window.console.log = function () {};
                        window.console.table = function () {};
                        return null;
                      }
                    }
                    return Reflect.apply(_0x312770, _0x572be3, _0x6db5e);
                  }
                },
                "get": function (_0x9741e3, _0x29368f, _0x2b1af6) {
                  {
                    if (_0x29368f === "toString") return function () {
                      if (this === _0x5b14a4) {
                        return "function setInterval() { [native code] }";
                      }
                      return originalFunctionToString.call(this);
                    };
                    return Reflect.get(_0x9741e3, _0x29368f, _0x2b1af6);
                  }
                }
              });
              const _0x5b14a4 = window.setInterval;
              _0x542df3(window);
            }
          }
        }
      }
    }
  }
  _0x198fb0();
  _0x81d7b8();
})();