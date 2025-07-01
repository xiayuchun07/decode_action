
(function () {
  'use strict';

  const _0x19eb0b = document.createElement("button");
  _0x19eb0b.textContent = "商城";
  _0x19eb0b.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
  _0x19eb0b.style.background = "#ffcfe9";
  _0x19eb0b.style.color = "white";
  _0x19eb0b.style.border = "none";
  _0x19eb0b.style.zIndex = "9999";
  _0x19eb0b.style.borderRadius = "20px";
  _0x19eb0b.style.padding = "5px 10px";
  _0x19eb0b.style.position = "fixed";
  _0x19eb0b.style.top = "20px";
  _0x19eb0b.style.left = "20px";
  _0x19eb0b.style.select = "none";
  _0x19eb0b.style.cursor = "pointer";
  document.body.appendChild(_0x19eb0b);
  const _0x33910d = document.createElement("div");
  _0x33910d.style.position = "fixed";
  _0x33910d.style.top = "50px";
  _0x33910d.style.left = "20px";
  _0x33910d.style.backgroundColor = "#ddd";
  _0x33910d.style.border = "1px solid #ffcfe9";
  _0x33910d.style.display = "none";
  _0x33910d.style.zIndex = "9998";
  document.body.appendChild(_0x33910d);
  const _0x4e584c = (_0xeac538, _0x2e3414) => {
    {
      const _0x4674ba = document.createElement("div");
      _0x4674ba.textContent = _0xeac538;
      _0x4674ba.style.padding = "10px";
      _0x4674ba.style.cursor = "pointer";
      _0x4674ba.style.border = "1px solid #ffcfe9";
      _0x4674ba.style.margin = "2px";
      _0x4674ba.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
      _0x4674ba.style.background = "#ffcfe9";
      _0x4674ba.style.color = "white";
      _0x4674ba.style.borderRadius = "20px";
      _0x4674ba.style.select = "none";
      _0x4674ba.onclick = _0x2e3414;
      _0x33910d.appendChild(_0x4674ba);
      return _0x4674ba;
    }
  };
  _0x19eb0b.onclick = () => {
    _0x33910d.style.display = _0x33910d.style.display === "none" ? "block" : "none";
  };
  const _0x51e3a3 = () => {
    if (!document.fullscreenElement) {
      {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else {
          if (document.documentElement.mozRequestFullScreen) document.documentElement.mozRequestFullScreen();else {
            if (document.documentElement.webkitRequestFullscreen) document.documentElement.webkitRequestFullscreen();else document.documentElement.msRequestFullscreen && document.documentElement.msRequestFullscreen();
          }
        }
      }
    } else {
      if (document.exitFullscreen) document.exitFullscreen();else {
        if (document.mozCancelFullScreen) document.mozCancelFullScreen();else {
          if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else document.msExitFullscreen && document.msExitFullscreen();
        }
      }
    }
  };
  _0x4e584c("商城开关", function () {
    _0x44c9c8 = !_0x44c9c8;
    this.innerText = _0x44c9c8 ? "商城开启" : "商城关闭";
    if (_0x44c9c8) console.log("拦截器已开启");else {
      console.log("拦截器已关闭");
    }
  });
  _0x4e584c("退出菜单", () => {
    _0x33910d.style.display = "none";
  });
  _0x4e584c("屏蔽按钮", () => {
    _0x19eb0b.style.display = "none";
  });
  function _0x2f9d37() {
    {
      const _0x2a9e8a = new Date(),
        _0x2e0f3c = _0x2a9e8a.getFullYear().toString(),
        _0x46d1a5 = _0xb1b8dd(_0x2a9e8a.getMonth() + 1),
        _0x5d40f5 = _0xb1b8dd(_0x2a9e8a.getDate()),
        _0x4c9a5c = _0xb1b8dd(_0x2a9e8a.getHours()),
        _0x41b3f5 = _0xb1b8dd(_0x2a9e8a.getMinutes()),
        _0x4a3d72 = _0xb1b8dd(_0x2a9e8a.getSeconds()),
        _0x1e7a9f = _0xb1b8dd(_0x2a9e8a.getMilliseconds(), 4);
      return "" + _0x2e0f3c + _0x46d1a5 + _0x5d40f5 + _0x4c9a5c + _0x41b3f5 + _0x4a3d72 + _0x1e7a9f;
    }
  }
  function _0xb1b8dd(_0x3bebdc, _0x48b2e1 = 2) {
    let _0x4bf1b8 = _0x3bebdc.toString();
    while (_0x4bf1b8.length < _0x48b2e1) {
      _0x4bf1b8 = "0" + _0x4bf1b8;
    }
    return _0x4bf1b8;
  }
  let _0x44c9c8 = false;
  const _0x39c4a3 = [];
  _0x39c4a3.push({
    "match": _0x33dfe4 => _0x33dfe4.includes("/createBuyOrder"),
    "modify": (_0x379c90, _0x1cfe1c) => {
      const _0x131fd1 = new URLSearchParams(_0x1cfe1c.split("?")[1]),
        _0x168de0 = _0x131fd1.get("goods_id"),
        _0x400647 = _0x131fd1.get("buy_num"),
        _0x389186 = _0x2f9d37(),
        _0x42d30a = {
          "goods_id": _0x168de0,
          "order_id": "${orderId}",
          "buy_num": _0x400647
        },
        _0x4f73f0 = {
          "status": 1,
          "msg": "successful",
          "data": _0x42d30a
        };
      return JSON.stringify(_0x4f73f0);
    }
  });
  const _0x572c24 = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (_0x48cedf, _0x26d186, _0x554d62 = true, _0x5e6b3e = null, _0x35d484 = null) {
    {
      this._url = _0x26d186;
      if (!_0x44c9c8) return _0x572c24.call(this, _0x48cedf, _0x26d186, _0x554d62, _0x5e6b3e, _0x35d484);
      _0x572c24.apply(this, arguments);
      this.addEventListener("readystatechange", () => {
        if (this.readyState === 4 && this.status === 200) {
          let _0x57fb40 = this.responseText;
          _0x39c4a3.forEach(_0x492fa1 => {
            {
              if (_0x492fa1.match(this._url)) try {
                _0x57fb40 = _0x492fa1.modify(_0x57fb40, this._url);
                console.log("拦截成功: " + this._url);
              } catch (_0x16214f) {
                console.error("拦截失败: " + this._url, _0x16214f);
              }
            }
          });
          const _0x148fe4 = {
            "value": _0x57fb40,
            "writable": true
          };
          Object.defineProperty(this, "responseText", _0x148fe4);
          typeof this.onload === "function" && this.onload();
        }
      });
      let _0x18b0fa = _0x26d186;
      if (_0x26d186.includes("/get_goods_list")) {
        {
          const _0x3bc6e1 = new URL(_0x26d186),
            _0x66aef6 = new URLSearchParams(_0x3bc6e1.search),
            _0x19429e = getUserData(),
            _0x295d35 = _0x19429e && _0x19429e.vip_level;
          if (!_0x295d35) {
            {
              const _0x601cd6 = _0x66aef6.get("token");
              (!_0x601cd6 || _0x601cd6 === "") && _0x66aef6.set("token", "c25a7a3cdf7a49e41d96950437a9b17d");
            }
          }
          _0x66aef6.set("gindex", "1675940");
          _0x3bc6e1.search = _0x66aef6.toString();
          _0x18b0fa = _0x3bc6e1.toString();
          console.log("请求URL修改成功: " + _0x18b0fa);
        }
      }
      return _0x572c24.call(this, _0x48cedf, _0x18b0fa, _0x554d62, _0x5e6b3e, _0x35d484);
    }
  };
  const _0x5005bd = _0x5b0168 => {
      return _0x5b0168.includes("createBuyOrder");
    },
    _0x4efbaf = (_0x492420, _0x5f5482, _0x12a453) => {
      return {
        "status": 1,
        "msg": "successful",
        "data": {
          "goods_id": _0x5f5482,
          "order_id": "${djhsj}",
          "buy_num": parseInt(_0x12a453, 10)
        }
      };
    },
    _0xc7dc1d = () => {
      {
        const _0x2861f1 = document.createElement;
        document.createElement = function (_0x521241, ..._0x25a949) {
          const _0x4e489e = _0x2861f1.call(this, _0x521241, ..._0x25a949);
          _0x521241.toLowerCase() === "script" && Object.defineProperty(_0x4e489e, "src", {
            "set"(_0x1a3dd4) {
              if (_0x5005bd(_0x1a3dd4)) {
                console.log("拦截到 JSONP 请求:", _0x1a3dd4);
                const _0x586453 = new URL(_0x1a3dd4).searchParams,
                  _0x509cf8 = _0x586453.get("goods_id"),
                  _0xcdf2f7 = _0x586453.get("buy_num"),
                  _0x340ff4 = _0x586453.get("jsonCallBack"),
                  _0x4ce2d6 = _0x2f9d37();
                if (_0x509cf8 && _0xcdf2f7 && _0x340ff4) {
                  const _0x112188 = window[_0x340ff4];
                  window[_0x340ff4] = function (_0x9e9b58) {
                    const _0xf0c867 = _0x4efbaf(_0x9e9b58, _0x509cf8, _0xcdf2f7);
                    typeof _0x112188 === "function" && _0x112188(_0xf0c867);
                  };
                } else console.error("缺少必要的参数: goods_id, buy_num, jsonCallBack");
              }
              return _0x4e489e.setAttribute("src", _0x1a3dd4);
            },
            "get"() {
              return _0x4e489e.getAttribute("src");
            }
          });
          return _0x4e489e;
        };
      }
    };
  _0xc7dc1d();
})();
(function () {
  'use strict';

  const _0x2aa975 = window.document.createElement("button");
  _0x2aa975.textContent = "累充";
  _0x2aa975.style.position = "fixed";
  _0x2aa975.style.background = "#ffffff";
  _0x2aa975.style.top = "03px";
  _0x2aa975.style.right = "10px";
  _0x2aa975.style.borderRadius = "0px";
  _0x2aa975.style.zIndex = "9999";
  _0x2aa975.addEventListener("click", _0x15e447);
  window.document.body.appendChild(_0x2aa975);
  const _0x31f52a = window.document.createElement("div");
  _0x31f52a.style.display = "none";
  _0x31f52a.style.position = "fixed";
  _0x31f52a.style.top = "3.60px";
  _0x31f52a.style.left = "80px";
  _0x31f52a.style.transform = "translate(-0%, -0%)";
  _0x31f52a.style.width = "200px";
  _0x31f52a.style.backgroundColor = "ffffff";
  _0x31f52a.style.padding = "10px";
  _0x31f52a.style.borderRadius = "0px";
  _0x31f52a.style.zIndex = "9999";
  const _0x2040bb = {
      "label": "累充",
      "action": _0x20359c
    },
    _0x465d68 = {
      "label": "全屏",
      "action": _0x44861d
    },
    _0x5e2b59 = [_0x2040bb, _0x465d68];
  _0x5e2b59.forEach(_0x508d05 => {
    const _0x10328c = window.document.createElement("button");
    _0x10328c.textContent = _0x508d05.label;
    _0x10328c.addEventListener("click", _0x508d05.action);
    _0x31f52a.appendChild(_0x10328c);
  });
  const _0x13d3da = window.document.createElement("button");
  _0x13d3da.textContent = "退出";
  _0x13d3da.addEventListener("click", _0x57ab9c);
  _0x31f52a.appendChild(_0x13d3da);
  window.document.body.appendChild(_0x31f52a);
  function _0x15e447() {
    _0x31f52a.style.display = "block";
  }
  function _0x57ab9c() {
    _0x31f52a.style.display = "none";
  }
  function _0x20359c() {
    {
      const _0x50a27f = prompt("请填写需要的鲜花数量大小");
      if (_0x50a27f) {
        var _0x4e4352 = getUserData();
        ["totalFlower", "freshFlower", "wildFlower", "tempFlower", "realFlower", "haveFlower"].forEach(function (_0x142170) {
          _0x4e4352[_0x142170] = _0x50a27f;
        });
        累充 = 鲜花数量("填写鲜花数值");
      }
    }
  }
  function _0x44861d() {
    if (!window.document.fullscreenElement && !window.document.mozFullScreenElement && !window.document.webkitFullscreenElement && !window.document.msFullscreenElement) {
      {
        if (window.document.documentElement.requestFullscreen) window.document.documentElement.requestFullscreen();else {
          if (window.document.documentElement.msRequestFullscreen) window.document.documentElement.msRequestFullscreen();else {
            if (window.document.documentElement.mozRequestFullScreen) window.document.documentElement.mozRequestFullScreen();else window.document.documentElement.webkitRequestFullscreen && window.document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
          }
        }
      }
    } else {
      if (window.document.exitFullscreen) window.document.exitFullscreen();else {
        if (window.document.msExitFullscreen) window.document.msExitFullscreen();else {
          if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen();else window.document.webkitExitFullscreen && window.document.webkitExitFullscreen();
        }
      }
    }
  }
})();