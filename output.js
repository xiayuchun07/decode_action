//Fri Apr 11 2025 00:14:21 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  const _0x5657b8 = "http://119.29.231.138/cgyz1/yz.php";
  const _0x4842a2 = "7QFvEv7t83nQTh9BquPDee9YSzqwMh72";
  function _0x3f3f41(_0x267a3b) {
    {
      const _0x33c4f5 = JSON.stringify(_0x267a3b);
      const _0x2d96ea = CryptoJS.HmacSHA256(_0x33c4f5, _0x4842a2).toString(CryptoJS.enc.Hex);
      return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(_0x33c4f5)) + "." + _0x2d96ea;
    }
  }
  function _0x54bbf5(_0x4f3cbf) {
    {
      const [_0x409fff, _0x1973a5] = _0x4f3cbf.split(".");
      const _0x192af3 = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(_0x409fff));
      const _0x2182d5 = CryptoJS.HmacSHA256(_0x192af3, _0x4842a2).toString(CryptoJS.enc.Hex);
      if (_0x1973a5 !== _0x2182d5) {
        {
          throw new Error("签名验证失败");
        }
      }
      return JSON.parse(_0x192af3);
    }
  }
  function _0x200f80(_0xe7723e, _0x3c251b, _0x1932d9) {
    {
      const _0x42e999 = new Date();
      _0x42e999.setTime(_0x42e999.getTime() + _0x1932d9 * 24 * 60 * 60 * 1000);
      document.cookie = _0xe7723e + "=" + encodeURIComponent(_0x3c251b) + "; expires=" + _0x42e999.toUTCString() + "; path=/";
    }
  }
  function _0x1997fd(_0x36dbc9) {
    {
      const _0xf0c0bd = document.cookie.split("; ").reduce((_0x6a6b02, _0x3f553f) => {
        {
          const [_0x7d8828, _0x36c834] = _0x3f553f.split("=");
          _0x6a6b02[decodeURIComponent(_0x7d8828)] = decodeURIComponent(_0x36c834);
          return _0x6a6b02;
        }
      }, {});
      return _0xf0c0bd[_0x36dbc9];
    }
  }
  function _0x2221c1(_0x176c65) {
    {
      document.cookie = _0x176c65 + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }
  }
  function _0x476375() {
    {
      const _0x1e508f = document.createElement("div");
      _0x1e508f.id = "cgyz-interface";
      _0x1e508f.style.cssText = "\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: rgba(0, 0, 0, 0.8);\n            color: white;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            z-index: 99999;\n            pointer-events: auto;\n        ";
      const _0xf2dccc = document.createElement("div");
      _0xf2dccc.id = "interface-content";
      _0xf2dccc.style.cssText = "\n            background: #2c3e50;\n            padding: 20px;\n            border-radius: 10px;\n            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);\n            text-align: center;\n            width: 300px;\n            font-family: Arial, sans-serif;\n        ";
      _0xf2dccc.innerHTML = "\n            <h2 style=\"margin-bottom: 20px;\">橙光高级功能</h2>\n            <button id=\"register-btn\" style=\"margin: 5px; padding: 10px; background-color: #3498db; color: white; border: none; cursor: pointer; border-radius: 5px;\">注册账号</button><br>\n            <button id=\"login-btn\" style=\"margin: 5px; padding: 10px; background-color: #2ecc71; color: white; border: none; cursor: pointer; border-radius: 5px;\">登录账号</button><br>\n            <button id=\"logout-btn\" style=\"margin: 5px; padding: 10px; background-color: #e74c3c; color: white; border: none; cursor: pointer; border-radius: 5px;\">清除登录 Token</button><br>\n            <button id=\"recover-btn\" style=\"margin: 5px; padding: 10px; background-color: #f1c40f; color: white; border: none; cursor: pointer; border-radius: 5px;\">找回账号密码</button>\n        ";
      _0x1e508f.appendChild(_0xf2dccc);
      document.body.appendChild(_0x1e508f);
      const _0x3ade51 = document.createElement("button");
      _0x3ade51.textContent = "关闭";
      _0x3ade51.style.cssText = "\n            position: absolute;\n            top: 10px;\n            right: 10px;\n            background: red;\n            color: white;\n            border: none;\n            padding: 5px 10px;\n            cursor: pointer;\n            border-radius: 5px;\n        ";
      _0x3ade51.onclick = () => {
        _0x1e508f.style.display = "none";
      };
      _0x1e508f.appendChild(_0x3ade51);
      document.getElementById("register-btn").addEventListener("click", _0x34181e);
      document.getElementById("login-btn").addEventListener("click", _0x2fde12);
      document.getElementById("logout-btn").addEventListener("click", _0x3f94df);
      document.getElementById("recover-btn").addEventListener("click", _0x257d00);
      const _0x846921 = _0x1997fd("token");
      if (_0x846921) {
        {
          _0x4380f0();
        }
      }
    }
  }
  function _0x34181e() {
    {
      const _0x582bf0 = prompt("请输入用户名：");
      const _0x3ab82f = prompt("请输入密码：");
      const _0x48d6fc = prompt("请输入激活码：");
      if (!_0x582bf0 || !_0x3ab82f || !_0x48d6fc) {
        {
          alert("用户名、密码和激活码不能为空！");
          return;
        }
      }
      GM_xmlhttpRequest({
        method: "POST",
        url: _0x5657b8,
        data: _0x3f3f41({
          action: "register",
          username: _0x582bf0,
          password: _0x3ab82f,
          code: _0x48d6fc
        }),
        headers: {
          "Content-Type": "application/json"
        },
        onload: function (_0x2a31c3) {
          {
            try {
              {
                const _0x2f2a80 = _0x54bbf5(_0x2a31c3.responseText);
                alert(_0x2f2a80.message);
              }
            } catch (_0x1dbd6f) {
              {
                console.error("解析响应数据时出错:", _0x1dbd6f);
                alert("注册过程中发生错误，请重试！");
              }
            }
          }
        },
        onerror: function () {
          console.error("请求注册接口时出错:");
          alert("注册过程中发生错误，请重试！");
        }
      });
    }
  }
  function _0x2fde12() {
    {
      const _0x566af1 = prompt("请输入用户名：");
      const _0xd815a = prompt("请输入密码：");
      if (!_0x566af1 || !_0xd815a) {
        {
          alert("用户名和密码不能为空！");
          return;
        }
      }
      GM_xmlhttpRequest({
        method: "POST",
        url: _0x5657b8,
        data: _0x3f3f41({
          action: "login",
          username: _0x566af1,
          password: _0xd815a
        }),
        headers: {
          "Content-Type": "application/json"
        },
        onload: function (_0x1d41fe) {
          {
            try {
              {
                const _0x9fb57e = _0x54bbf5(_0x1d41fe.responseText);
                if (_0x9fb57e.success) {
                  {
                    const _0x1ea9d9 = _0x9fb57e.token;
                    _0x200f80("token", _0x1ea9d9, 0.25);
                    alert("登录成功！正在加载自定义脚本...");
                    _0x4380f0();
                  }
                } else {
                  alert(_0x9fb57e.message || "登录失败，请重试！");
                }
              }
            } catch (_0x28fcfe) {
              {
                console.error("解析响应数据时出错:", _0x28fcfe);
                alert("登录过程中发生错误，请重试！");
              }
            }
          }
        },
        onerror: function () {
          console.error("请求登录接口时出错:");
          alert("登录过程中发生错误，请重试！");
        }
      });
    }
  }
  function _0x3f94df() {
    {
      const _0xed7c03 = _0x1997fd("token");
      if (!_0xed7c03) {
        {
          alert("当前未登录！");
          return;
        }
      }
      GM_xmlhttpRequest({
        method: "POST",
        url: _0x5657b8,
        data: _0x3f3f41({
          action: "logout",
          token: _0xed7c03
        }),
        headers: {
          "Content-Type": "application/json"
        },
        onload: function (_0x5eb8e1) {
          {
            try {
              {
                const _0x1fb273 = _0x54bbf5(_0x5eb8e1.responseText);
                if (_0x1fb273.success) {
                  {
                    _0x2221c1("token");
                    alert("已清除登录 Token！");
                  }
                } else {
                  alert(_0x1fb273.message || "清除 Token 失败，请重试！");
                }
              }
            } catch (_0x4da9a6) {
              {
                console.error("解析响应数据时出错:", _0x4da9a6);
                alert("清除 Token 过程中发生错误，请重试！");
              }
            }
          }
        },
        onerror: function () {
          {
            console.error("请求清除 Token 接口时出错:");
            alert("清除 Token 过程中发生错误，请重试！");
          }
        }
      });
    }
  }
  function _0x257d00() {
    {
      const _0x985509 = prompt("请输入激活码：");
      if (!_0x985509) {
        {
          alert("激活码不能为空！");
          return;
        }
      }
      GM_xmlhttpRequest({
        method: "POST",
        url: _0x5657b8,
        data: _0x3f3f41({
          action: "recover_account",
          code: _0x985509
        }),
        headers: {
          "Content-Type": "application/json"
        },
        onload: function (_0x286165) {
          {
            try {
              {
                const _0x5ebeff = _0x54bbf5(_0x286165.responseText);
                if (_0x5ebeff.success) {
                  {
                    alert("找回成功！用户名：" + _0x5ebeff.username + "\n密码：" + _0x5ebeff.password);
                  }
                } else {
                  alert(_0x5ebeff.message || "找回失败，请重试！");
                }
              }
            } catch (_0x3d2057) {
              console.error("解析响应数据时出错:", _0x3d2057);
              alert("找回过程中发生错误，请重试！");
            }
          }
        },
        onerror: function () {
          console.error("请求找回接口时出错:");
          alert("找回过程中发生错误，请重试！");
        }
      });
    }
  }
  function _0x4380f0() {
    const _0x1f44d2 = _0x1997fd("token");
    if (!_0x1f44d2) {
      {
        alert("请先登录以加载自定义脚本！");
        return;
      }
    }
    GM_xmlhttpRequest({
      method: "POST",
      url: _0x5657b8,
      data: _0x3f3f41({
        action: "get_custom_script",
        token: _0x1f44d2
      }),
      headers: {
        "Content-Type": "application/json"
      },
      onload: function (_0x44a4c8) {
        {
          try {
            {
              const _0x130a8a = _0x54bbf5(_0x44a4c8.responseText);
              if (_0x130a8a.success && _0x130a8a.script) {
                {
                  eval(_0x130a8a.script);
                }
              } else {
                {
                  alert("加载自定义脚本失败，请清除token");
                }
              }
            }
          } catch (_0x553cb9) {
            console.error("加载用户脚本时出错:", _0x553cb9);
            alert("加载自定义脚本时发生错误，请联系管理员！");
          }
        }
      },
      onerror: function () {
        console.error("请求用户脚本时出错:");
        alert("加载自定义脚本时发生错误，请联系管理员！");
      }
    });
  }
  _0x476375();
})();