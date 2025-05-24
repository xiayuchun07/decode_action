
(function () {
  const _0x14e1ec = function () {
    let _0x3722ce = true;
    return function (_0xcfaaec, _0x3a277f) {
      const _0x5061b8 = _0x3722ce ? function () {
        if (_0x3a277f) {
          const _0x4e652b = _0x3a277f.apply(_0xcfaaec, arguments);
          _0x3a277f = null;
          return _0x4e652b;
        }
      } : function () {};
      _0x3722ce = false;
      return _0x5061b8;
    };
  }();
  "use strict";
  const _0x2a6a20 = {
    API_BASE: "https://api.jsjst.top/api/single",
    APP_ID: "986",
    HEARTBEAT_INTERVAL: 3600,
    TOKEN_KEY: "cg_token"
  };
  const _0x3ebddc = {
    SLOT_COUNT: 6,
    DEFAULT_UID: "1",
    DEFAULT_FLOWER: "100",
    STORAGE_PREFIX: "cg_save_",
    GAME_ID_UNKNOWN: "unknown"
  };
  let _0xd83ac1 = localStorage.getItem("desiredUid") || _0x3ebddc.DEFAULT_UID;
  let _0x2eff9f = localStorage.getItem("lc") || _0x3ebddc.DEFAULT_FLOWER;
  let _0x5de4f1 = "none";
  let _0x475e8d = false;
  let _0x358d67 = _0x58719f();
  let _0x4d3092 = localStorage.getItem(_0x2a6a20.TOKEN_KEY);
  let _0x4f67e3 = null;
  const _0x2ecfea = (_0x26bb6c, _0xcefd51 = 2000, _0x3ccac8 = false) => {
    const _0x1ca74e = document.createElement("div");
    _0x1ca74e.textContent = _0x26bb6c;
    _0x1ca74e.style.cssText = "\n        position: fixed;\n        bottom: 30px;\n        left: 50%;\n        transform: translateX(-50%);\n        background-color: " + (_0x3ccac8 ? "rgba(255, 71, 87, 0.9)" : "rgba(255, 158, 184, 0.9)") + ";\n        color: white;\n        padding: 12px 24px;\n        border-radius: 25px;\n        z-index: 100000;\n        font-size: 14px;\n        opacity: 0;\n        transition: opacity 0.3s, transform 0.3s;\n        border: 2px solid white;\n        box-shadow: 0 4px 15px rgba(0,0,0,0.2);\n        font-weight: bold;\n      ";
    document.body.appendChild(_0x1ca74e);
    setTimeout(() => {
      _0x1ca74e.style.opacity = "1";
      _0x1ca74e.style.transform = "translateX(-50%) translateY(-10px)";
    }, 10);
    setTimeout(() => {
      _0x1ca74e.style.opacity = "0";
      _0x1ca74e.style.transform = "translateX(-50%) translateY(10px)";
      setTimeout(() => {
        if (document.body.contains(_0x1ca74e)) {
          document.body.removeChild(_0x1ca74e);
        }
      }, 300);
    }, _0xcefd51);
  };
  function _0x80270d() {
    const _0x467fb3 = document.createElement("div");
    _0x467fb3.id = "cgAuthDialog";
    _0x467fb3.style.cssText = "\n      position: fixed;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 80%;\n      max-width: 400px;\n      background: rgba(255, 255, 255, 0.95);\n      border-radius: 12px;\n      padding: 20px;\n      z-index: 999999;\n      box-shadow: 0 5px 20px rgba(0,0,0,0.2);\n      font-family: 'Microsoft YaHei', sans-serif;\n      text-align: center;\n      border: 2px solid #ff9eb8;\n    ";
    _0x467fb3.innerHTML = "\n      <h2 style=\"color: #ff6b9d; margin-top: 0;\">橙光插件激活</h2>\n      <p style=\"color: #666; margin-bottom: 20px;\">请输入您的卡密以激活插件功能</p>\n      <input type=\"text\" id=\"cgAuthKey\" placeholder=\"请输入卡密\" style=\"\n        width: 100%;\n        padding: 12px;\n        margin-bottom: 15px;\n        border: 1px solid #ff9eb8;\n        border-radius: 8px;\n        font-size: 16px;\n        box-sizing: border-box;\n      \">\n      <button id=\"cgAuthSubmit\" style=\"\n        background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n        color: white;\n        border: none;\n        border-radius: 8px;\n        padding: 12px 20px;\n        font-size: 16px;\n        cursor: pointer;\n        width: 100%;\n        transition: all 0.3s;\n      \">激活</button>\n      <div id=\"cgAuthMessage\" style=\"margin-top: 15px; color: #ff4757; font-size: 14px;\"></div>\n    ";
    document.body.appendChild(_0x467fb3);
    document.getElementById("cgAuthSubmit").onclick = async function () {
      const _0x527d8b = document.getElementById("cgAuthKey").value.trim();
      const _0x1f9c0c = document.getElementById("cgAuthMessage");
      if (!_0x527d8b) {
        _0x1f9c0c.textContent = "请输入有效的卡密";
        return;
      }
      this.disabled = true;
      _0x1f9c0c.textContent = "正在验证...";
      _0x1f9c0c.style.color = "#666";
      try {
        const _0xf17a04 = await _0x1dd7bd(_0x527d8b);
        if (_0xf17a04.code === 1) {
          localStorage.setItem(_0x2a6a20.TOKEN_KEY, _0xf17a04.data.token);
          _0x4d3092 = _0xf17a04.data.token;
          _0x2a8010();
          _0x467fb3.remove();
          _0x6b1fa5();
          _0x2ecfea("激活成功！");
        } else {
          _0x1f9c0c.textContent = _0xf17a04.msg || "激活失败";
          _0x1f9c0c.style.color = "#ff4757";
        }
      } catch (_0x3bf5a1) {
        console.error("激活失败:", _0x3bf5a1);
        _0x1f9c0c.textContent = "网络错误，请重试";
        _0x1f9c0c.style.color = "#ff4757";
      } finally {
        this.disabled = false;
      }
    };
  }
  async function _0x1dd7bd(_0x584983) {
    const _0x32ef1d = _0x2a6a20.API_BASE + "/login?appId=" + _0x2a6a20.APP_ID + "&card=" + encodeURIComponent(_0x584983);
    const _0x36463b = await fetch(_0x32ef1d);
    if (!_0x36463b.ok) {
      throw new Error("HTTP错误! 状态: " + _0x36463b.status);
    }
    return await _0x36463b.json();
  }
  async function _0x101801() {
    if (!_0x4d3092) {
      return;
    }
    try {
      const _0x47905b = _0x2a6a20.API_BASE + "/logout?appId=" + _0x2a6a20.APP_ID + "&token=" + encodeURIComponent(_0x4d3092);
      const _0x115011 = await fetch(_0x47905b);
      if (!_0x115011.ok) {
        throw new Error("HTTP错误! 状态: " + _0x115011.status);
      }
      return await _0x115011.json();
    } catch (_0x20919b) {
      console.error("登出失败:", _0x20919b);
      const _0x304b68 = {
        code: 0,
        msg: "登出失败"
      };
      return _0x304b68;
    } finally {
      localStorage.removeItem(_0x2a6a20.TOKEN_KEY);
      _0x4d3092 = null;
      _0xaa6e2e();
      const _0x2d5d3f = document.getElementById("cgControlPanel");
      const _0x309ca5 = window.triggerBtn;
      if (_0x2d5d3f) {
        _0x2d5d3f.remove();
      }
      if (_0x309ca5) {
        _0x309ca5.remove();
      }
      _0x80270d();
    }
  }
  async function _0x1d0312() {
    if (!_0x4d3092) {
      return;
    }
    try {
      const _0x312f5d = _0x2a6a20.API_BASE + "/heart?appId=" + _0x2a6a20.APP_ID + "&token=" + encodeURIComponent(_0x4d3092);
      const _0x15d061 = await fetch(_0x312f5d);
      if (!_0x15d061.ok) {
        throw new Error("HTTP错误! 状态: " + _0x15d061.status);
      }
      const _0xd7e6e2 = await _0x15d061.json();
      if (_0xd7e6e2.code !== 1) {
        _0x101801();
      }
    } catch (_0x3c0b81) {
      console.error("心跳失败:", _0x3c0b81);
      _0x101801();
    }
  }
  function _0x2a8010() {
    _0xaa6e2e();
    _0x1d0312();
    _0x4f67e3 = setInterval(_0x1d0312, _0x2a6a20.HEARTBEAT_INTERVAL);
  }
  function _0xaa6e2e() {
    if (_0x4f67e3) {
      clearInterval(_0x4f67e3);
      _0x4f67e3 = null;
    }
  }
  function _0x4b2452() {
    if (_0x4d3092) {
      _0x2a8010();
      _0x6b1fa5();
    } else {
      _0x80270d();
    }
  }
  const _0x175162 = {
    storageKey: "b"
  };
  const _0x5b679f = {
    storageKey: "a"
  };
  const _0x1708df = {
    storageKey: "c"
  };
  const _0x46c6dd = {
    "data/game.bin": _0x175162,
    system: _0x5b679f,
    memKey: _0x1708df
  };
  Object.entries(_0x46c6dd).forEach(([_0x130f5a, {
    storageKey
  }]) => {
    const _0x31429b = {
      get: function () {
        return window[storageKey];
      },
      set: function (_0x30c9b6) {
        window[storageKey] = _0x30c9b6;
        if (!_0x30c9b6) {
          return;
        }
      }
    };
    Object.defineProperty(Object.prototype, _0x130f5a, _0x31429b);
  });
  const _0x3d4629 = _0x16dc08 => {
    return _0x16dc08 ^ c;
  };
  function _0x58719f() {
    const _0x52e559 = _0x14e1ec(this, function () {
      const _0x4bcf18 = function () {};
      const _0x223727 = function () {
        let _0x5d5efa;
        try {
          _0x5d5efa = Function("return (function() {}.constructor(\"return this\")( ));")();
        } catch (_0x10dbdb) {
          _0x5d5efa = window;
        }
        return _0x5d5efa;
      };
      const _0x465c48 = _0x223727();
      if (!_0x465c48.console) {
        _0x465c48.console = function (_0x2fefd2) {
          const _0x27169a = {
            log: _0x2fefd2,
            warn: _0x2fefd2,
            debug: _0x2fefd2,
            info: _0x2fefd2,
            error: _0x2fefd2,
            exception: _0x2fefd2,
            table: _0x2fefd2,
            trace: _0x2fefd2
          };
          return _0x27169a;
        }(_0x4bcf18);
      } else {
        _0x465c48.console.log = _0x4bcf18;
        _0x465c48.console.warn = _0x4bcf18;
        _0x465c48.console.debug = _0x4bcf18;
        _0x465c48.console.info = _0x4bcf18;
        _0x465c48.console.error = _0x4bcf18;
        _0x465c48.console.exception = _0x4bcf18;
        _0x465c48.console.table = _0x4bcf18;
        _0x465c48.console.trace = _0x4bcf18;
      }
    });
    _0x52e559();
    const _0x13ad29 = window.location.pathname;
    const _0x20958c = _0x13ad29.match(/\/h5\/(\d+)/);
    return _0x20958c ? _0x20958c[1] : _0x3ebddc.GAME_ID_UNKNOWN;
  }
  function _0x11f5be() {
    const _0xf2da80 = new Date();
    const _0x5505a1 = _0xf2da80.getFullYear().toString();
    const _0x7aa6ca = _0x4c0856(_0xf2da80.getMonth() + 1);
    const _0x1960e2 = _0x4c0856(_0xf2da80.getDate());
    const _0x42fd63 = _0x4c0856(_0xf2da80.getHours());
    const _0x1b6669 = _0x4c0856(_0xf2da80.getMinutes());
    const _0xcc29d6 = _0x4c0856(_0xf2da80.getSeconds());
    const _0x4bdac1 = _0x4c0856(_0xf2da80.getMilliseconds(), 4);
    return "" + _0x5505a1 + _0x7aa6ca + _0x1960e2 + _0x42fd63 + _0x1b6669 + _0xcc29d6 + _0x4bdac1;
  }
  function _0x4c0856(_0x3fd4bf, _0x43fceb = 2) {
    let _0x356a5a = _0x3fd4bf.toString();
    while (_0x356a5a.length < _0x43fceb) {
      _0x356a5a = "0" + _0x356a5a;
    }
    return _0x356a5a;
  }
  const _0x6b1fa5 = () => {
    const _0x10970e = document.createElement("div");
    _0x10970e.id = "cgControlPanel";
    _0x10970e.style.cssText = "\n      position: fixed;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 90%;\n      max-width: 700px;\n      max-height: 90vh;\n      overflow-y: auto;\n      background: rgba(255, 255, 255, 0.9);\n      border-radius: 16px;\n      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n      z-index: 99999;\n      display: none;\n      flex-direction: column;\n      padding: 15px;\n      font-family: 'Microsoft YaHei', sans-serif;\n      backdrop-filter: blur(10px);\n      border: 2px solid #ff9eb8;\n    ";
    _0x10970e.innerHTML = "\n      <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; border-bottom: 2px dashed #a8d8ff; padding-bottom: 10px;\">\n        <div>\n          <h1 style=\"font-size: 24px; color: #ff6b9d; margin: 0; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);\">橙光多功能助手</h1>\n          <div style=\"display: flex; gap: 15px; margin-top: 5px;\">\n            <div style=\"font-size: 14px; color: #666;\">\n              <span style=\"font-weight: bold; color: #ff6b9d;\">UID:</span> " + _0xd83ac1 + "\n            </div>\n            <div style=\"font-size: 14px; color: #666;\">\n              <span style=\"font-weight: bold; color: #6bc5ff;\">游戏ID:</span> " + _0x358d67 + "\n            </div>\n          </div>\n        </div>\n        <div>\n          <button id=\"cgLogoutBtn\" style=\"\n            background: linear-gradient(135deg, #ff9e9e 0%, #ff6b6b 100%);\n            color: white;\n            border: none;\n            border-radius: 8px;\n            padding: 6px 12px;\n            font-size: 12px;\n            cursor: pointer;\n            margin-right: 10px;\n            transition: all 0.3s;\n          \">退出登录</button>\n          <button id=\"cgClosePanel\" style=\"background: none; border: none; font-size: 24px; cursor: pointer; color: #ff6b9d;\">×</button>\n        </div>\n      </div>\n      \n      <div style=\"" + "\n      display: flex;\n      justify-content: space-around;\n      margin-bottom: 15px;\n      border-bottom: 2px dashed #a8d8ff;\n      padding-bottom: 10px;\n    " + "\">\n        <button id=\"cgTabBasic\" class=\"cg-tab\" style=\"" + "\n      padding: 8px 20px;\n      border: none;\n      background: none;\n      font-size: 16px;\n      cursor: pointer;\n      border-radius: 8px;\n      transition: all 0.3s;\n      color: #ff6b9d;\n      font-weight: bold;\n    " + " " + "\n      background: rgba(255, 158, 184, 0.2);\n      font-weight: bold;\n      color: #ff3d7f;\n    " + "\">基础功能</button>\n        <button id=\"cgTabSave\" class=\"cg-tab\" style=\"" + "\n      padding: 8px 20px;\n      border: none;\n      background: none;\n      font-size: 16px;\n      cursor: pointer;\n      border-radius: 8px;\n      transition: all 0.3s;\n      color: #ff6b9d;\n      font-weight: bold;\n    " + "\">存档管理</button>\n        <button id=\"cgTabValues\" class=\"cg-tab\" style=\"" + "\n      padding: 8px 20px;\n      border: none;\n      background: none;\n      font-size: 16px;\n      cursor: pointer;\n      border-radius: 8px;\n      transition: all 0.3s;\n      color: #ff6b9d;\n      font-weight: bold;\n    " + "\">数值修改</button>\n      </div>\n      \n      <div id=\"cgBasicSection\" style=\"" + "\n      margin-bottom: 20px;\n      padding: 15px;\n      background: rgba(255, 255, 255, 0.7);\n      border-radius: 12px;\n      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n      display: none;\n      border: 2px solid #a8d8ff;\n      backdrop-filter: blur(5px);\n    ".replace("display: none;", "") + "\">\n        <div style=\"display: flex; flex-wrap: wrap; gap: 10px; justify-content: space-between;\">\n          <div style=\"flex: 1; min-width: 200px;\">\n            <div style=\"" + "\n      font-size: 20px;\n      font-weight: bold;\n      color: #ff6b9d;\n      margin-bottom: 15px;\n      padding-bottom: 8px;\n      border-bottom: 2px dashed #a8d8ff;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.1);\n    " + "\">账号设置</div>\n            <button id=\"cgModifyUid\" style=\"" + "\n      background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n      color: white;\n      border: none;\n      border-radius: 12px;\n      padding: 12px 20px;\n      margin: 8px 0;\n      font-size: 16px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      border: 2px solid rgba(255, 255, 255, 0.5);\n      font-weight: bold;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n    " + " width: 100%;\">修改UID: " + _0xd83ac1 + "</button>\n            <button id=\"cgModifyFlower\" style=\"" + "\n      background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n      color: white;\n      border: none;\n      border-radius: 12px;\n      padding: 12px 20px;\n      margin: 8px 0;\n      font-size: 16px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      border: 2px solid rgba(255, 255, 255, 0.5);\n      font-weight: bold;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n    " + " width: 100%;\">修改鲜花累充: " + _0x2eff9f + "</button>\n          </div>\n          \n          <div style=\"flex: 1; min-width: 200px;\">\n            <div style=\"" + "\n      font-size: 20px;\n      font-weight: bold;\n      color: #ff6b9d;\n      margin-bottom: 15px;\n      padding-bottom: 8px;\n      border-bottom: 2px dashed #a8d8ff;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.1);\n    " + "\">商城功能</div>\n            <button id=\"cgShopToggle\" style=\"" + "\n      background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n      color: white;\n      border: none;\n      border-radius: 12px;\n      padding: 12px 20px;\n      margin: 8px 0;\n      font-size: 16px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      border: 2px solid rgba(255, 255, 255, 0.5);\n      font-weight: bold;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n    " + " width: 100%; background: linear-gradient(135deg, #a8d8ff 0%, #6bc5ff 100%);\">商城开关: " + (_0x475e8d ? "开启" : "关闭") + "</button>\n            <button id=\"cgFullscreen\" style=\"" + "\n      background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n      color: white;\n      border: none;\n      border-radius: 12px;\n      padding: 12px 20px;\n      margin: 8px 0;\n      font-size: 16px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      border: 2px solid rgba(255, 255, 255, 0.5);\n      font-weight: bold;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n    " + " width: 100%; background: linear-gradient(135deg, #b5ff9e 0%, #6bff6b 100%);\">全屏切换</button>\n            <button id=\"cgDownloadBin\" style=\"" + "\n      background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n      color: white;\n      border: none;\n      border-radius: 12px;\n      padding: 12px 20px;\n      margin: 8px 0;\n      font-size: 16px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      border: 2px solid rgba(255, 255, 255, 0.5);\n      font-weight: bold;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n    " + " width: 100%; background: linear-gradient(135deg, #ffd59e 0%, #ffb56b 100%);\">下载bin文件</button>\n          </div>\n        </div>\n      </div>\n      \n      <div id=\"cgSaveSection\" style=\"" + "\n      margin-bottom: 20px;\n      padding: 15px;\n      background: rgba(255, 255, 255, 0.7);\n      border-radius: 12px;\n      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n      display: none;\n      border: 2px solid #a8d8ff;\n      backdrop-filter: blur(5px);\n    " + "\">\n        <div style=\"" + "\n      font-size: 20px;\n      font-weight: bold;\n      color: #ff6b9d;\n      margin-bottom: 15px;\n      padding-bottom: 8px;\n      border-bottom: 2px dashed #a8d8ff;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.1);\n    " + "\">存档管理</div>\n        <div style=\"display: flex; justify-content: space-between; margin-bottom: 15px;\">\n          <button id=\"cgSaveMode\" style=\"" + "\n      background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n      color: white;\n      border: none;\n      border-radius: 12px;\n      padding: 12px 20px;\n      margin: 8px 0;\n      font-size: 16px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      border: 2px solid rgba(255, 255, 255, 0.5);\n      font-weight: bold;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n    " + " width: 48%; background: linear-gradient(135deg, #a8d8ff 0%, #6bc5ff 100%);\">存档模式</button>\n          <button id=\"cgLoadMode\" style=\"" + "\n      background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n      color: white;\n      border: none;\n      border-radius: 12px;\n      padding: 12px 20px;\n      margin: 8px 0;\n      font-size: 16px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      border: 2px solid rgba(255, 255, 255, 0.5);\n      font-weight: bold;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n    " + " width: 48%; background: linear-gradient(135deg, #b5ff9e 0%, #6bff6b 100%);\">读档模式</button>\n        </div>\n        \n        <div id=\"cgSlotContainer\" style=\"width: 100%;\">\n          " + Array(_0x3ebddc.SLOT_COUNT).fill().map((_0x109991, _0x3e1e79) => "\n            <div id=\"cgSlot" + (_0x3e1e79 + 1) + "\" class=\"cg-slot\" style=\"" + "\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: center;\n      width: 100%;\n      min-height: 80px;\n      background: rgba(255, 255, 255, 0.8);\n      border-radius: 12px;\n      margin: 5px 0;\n      padding: 12px;\n      cursor: pointer;\n      transition: all 0.2s;\n      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n      position: relative;\n      overflow: hidden;\n      box-sizing: border-box;\n      border: 2px solid #a8d8ff;\n    " + "\">\n              <div style=\"display: flex; justify-content: space-between; width: 100%;\">\n                <div style=\"font-weight: bold; font-size: 16px; color: #ff6b9d;\">存档 " + (_0x3e1e79 + 1) + "</div>\n                <div class=\"cg-slot-time\" style=\"font-size: 12px; color: #666;\">空</div>\n              </div>\n              <div class=\"cg-slot-info\" style=\"margin-top: 8px; width: 100%;\">\n                <div class=\"cg-game-name\" style=\"font-size: 14px; color: #333; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">未使用</div>\n                <div class=\"cg-story-name\" style=\"font-size: 12px; color: #666; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\"></div>\n              </div>\n              <div class=\"cg-slot-preview-container\" style=\"" + "\n      position: relative;\n      width: 100%;\n      margin-top: 8px;\n    " + "\">\n                <div class=\"cg-slot-preview-placeholder\" style=\"" + "\n      width: 100%;\n      height: 100px;\n      background: rgba(255,255,255,0.3);\n      border-radius: 8px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: #666;\n      font-size: 12px;\n      border: 1px dashed #a8d8ff;\n    " + "\">无预览图</div>\n                <img class=\"cg-slot-preview-image\" style=\"" + "\n      max-width: 100%;\n      max-height: 150px;\n      border-radius: 8px;\n      margin-top: 8px;\n      border: 1px solid #a8d8ff;\n      object-fit: contain;\n    " + "; display: none;\">\n              </div>\n              <div class=\"cg-slot-preview-bar\" style=\"position: absolute; bottom: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, #a8d8ff 0%, #ff9eb8 100%);\"></div>\n            </div>\n          ").join("") + "\n        </div>\n        \n        <div style=\"margin-top: 15px; display: flex; gap: 10px; flex-wrap: wrap;\">\n          <button id=\"cgDownloadSave\" style=\"" + "\n      background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n      color: white;\n      border: none;\n      border-radius: 12px;\n      padding: 12px 20px;\n      margin: 8px 0;\n      font-size: 16px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      border: 2px solid rgba(255, 255, 255, 0.5);\n      font-weight: bold;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n    " + " flex: 1; min-width: 120px;\">下载存档</button>\n          <button id=\"cgLoadSave\" style=\"" + "\n      background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n      color: white;\n      border: none;\n      border-radius: 12px;\n      padding: 12px 20px;\n      margin: 8px 0;\n      font-size: 16px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      border: 2px solid rgba(255, 255, 255, 0.5);\n      font-weight: bold;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n    " + " flex: 1; min-width: 120px;\">读取存档文件</button>\n          <button id=\"cgClearCurrent\" style=\"" + "\n      background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n      color: white;\n      border: none;\n      border-radius: 12px;\n      padding: 12px 20px;\n      margin: 8px 0;\n      font-size: 16px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      border: 2px solid rgba(255, 255, 255, 0.5);\n      font-weight: bold;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n    " + " flex: 1; min-width: 120px; background: linear-gradient(135deg, #ffd59e 0%, #ffb56b 100%);\">清除当前存档</button>\n          <button id=\"cgClearData\" style=\"" + "\n      background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n      color: white;\n      border: none;\n      border-radius: 12px;\n      padding: 12px 20px;\n      margin: 8px 0;\n      font-size: 16px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      border: 2px solid rgba(255, 255, 255, 0.5);\n      font-weight: bold;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n    " + " flex: 1; min-width: 120px; background: linear-gradient(135deg, #ff9e9e 0%, #ff6b6b 100%);\">清除所有数据</button>\n        </div>\n      </div>\n      \n      <div id=\"cgValuesSection\" style=\"" + "\n      margin-bottom: 20px;\n      padding: 15px;\n      background: rgba(255, 255, 255, 0.7);\n      border-radius: 12px;\n      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n      display: none;\n      border: 2px solid #a8d8ff;\n      backdrop-filter: blur(5px);\n    " + "\">\n        <div style=\"" + "\n      font-size: 20px;\n      font-weight: bold;\n      color: #ff6b9d;\n      margin-bottom: 15px;\n      padding-bottom: 8px;\n      border-bottom: 2px dashed #a8d8ff;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.1);\n    " + "\">数值修改</div>\n        <div style=\"margin-bottom: 15px; color: #666; font-size: 14px;\">\n          修改游戏中的数值，请谨慎操作\n        </div>\n        <div style=\"display: flex; gap: 10px; flex-wrap: wrap;\">\n          <button id=\"cgEditNormalValues\" style=\"" + "\n      background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n      color: white;\n      border: none;\n      border-radius: 12px;\n      padding: 12px 20px;\n      margin: 8px 0;\n      font-size: 16px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      border: 2px solid rgba(255, 255, 255, 0.5);\n      font-weight: bold;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n    " + " flex: 1; min-width: 200px; background: linear-gradient(135deg, #a8d8ff 0%, #6bc5ff 100%);\">修改普通数值</button>\n          <button id=\"cgEditSecondLoopValues\" style=\"" + "\n      background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n      color: white;\n      border: none;\n      border-radius: 12px;\n      padding: 12px 20px;\n      margin: 8px 0;\n      font-size: 16px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      border: 2px solid rgba(255, 255, 255, 0.5);\n      font-weight: bold;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n    " + " flex: 1; min-width: 200px; background: linear-gradient(135deg, #b5ff9e 0%, #6bff6b 100%);\">修改二周目数值</button>\n        </div>\n      </div>\n      \n      <div id=\"cgModeIndicator\" style=\"position: fixed; top: 10px; right: 10px; padding: 8px 15px; background: rgba(255,158,184,0.9); color: white; border-radius: 20px; font-size: 14px; display: none; z-index: 100000; border: 2px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.2);\">\n        当前模式: <span id=\"cgCurrentModeText\">无</span>\n      </div>\n      \n      <div id=\"cgScreenshotHelper\" style=\"position: fixed; bottom: 20px; right: 20px; z-index: 99998; display: none;\">\n        <button id=\"cgCaptureBtn\" style=\"" + "\n      background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n      color: white;\n      border: none;\n      border-radius: 12px;\n      padding: 12px 20px;\n      margin: 8px 0;\n      font-size: 16px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      border: 2px solid rgba(255, 255, 255, 0.5);\n      font-weight: bold;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n    " + "\">截取当前画面</button>\n        <button id=\"cgCancelCaptureBtn\" style=\"" + "\n      background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n      color: white;\n      border: none;\n      border-radius: 12px;\n      padding: 12px 20px;\n      margin: 8px 0;\n      font-size: 16px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      border: 2px solid rgba(255, 255, 255, 0.5);\n      font-weight: bold;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n    " + " background: #ff4757;\">取消</button>\n      </div>\n    ";
    document.body.appendChild(_0x10970e);
    document.getElementById("cgLogoutBtn").onclick = async function () {
      if (confirm("确定要退出登录吗？退出后将无法使用插件功能")) {
        this.disabled = true;
        this.textContent = "正在退出...";
        await _0x101801();
      }
    };
    const _0x54ecc9 = (_0x187470 = false) => {
      const _0x1e0ebb = document.createElement("div");
      _0x1e0ebb.id = _0x187470 ? "cgSecondLoopEditor" : "cgNormalEditor";
      _0x1e0ebb.style.cssText = "\n      position: fixed;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 90%;\n      max-width: 800px;\n      max-height: 80vh;\n      background: rgba(255, 255, 255, 0.9);\n      border-radius: 12px;\n      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n      z-index: 100000;\n      display: none;\n      flex-direction: column;\n      padding: 20px;\n      font-family: 'Microsoft YaHei', sans-serif;\n      border: 2px solid #ff9eb8;\n    ";
      _0x1e0ebb.innerHTML = "\n        <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 2px dashed #a8d8ff; padding-bottom: 10px;\">\n          <h2 style=\"font-size: 20px; color: #ff6b9d; margin: 0; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);\">" + (_0x187470 ? "二周目数值" : "普通数值") + "修改</h2>\n          <button class=\"cg-close-editor\" style=\"background: none; border: none; font-size: 24px; cursor: pointer; color: #ff6b9d;\">×</button>\n        </div>\n        \n        <div style=\"" + "\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 10px;\n      background: rgba(255, 255, 255, 0.7);\n      border-radius: 8px;\n      margin-bottom: 10px;\n      border: 1px solid #a8d8ff;\n    " + "\">\n          <div style=\"display: flex; align-items: center;\">\n            <input type=\"checkbox\" id=\"" + (_0x187470 ? "cgSelectAllSecondLoop" : "cgSelectAllNormal") + "\" style=\"" + "\n      margin-right: 10px;\n      width: 16px;\n      height: 16px;\n      cursor: pointer;\n      accent-color: #ff6b9d;\n    " + "\">\n            <label for=\"" + (_0x187470 ? "cgSelectAllSecondLoop" : "cgSelectAllNormal") + "\" style=\"color: #666;\">全选</label>\n          </div>\n          <div style=\"display: flex; align-items: center; gap: 10px;\">\n            <input type=\"number\" id=\"" + (_0x187470 ? "cgBatchValueSecondLoop" : "cgBatchValueNormal") + "\" placeholder=\"批量设置值\" style=\"" + "\n      width: 80px;\n      padding: 8px 12px;\n      border: 1px solid #ff9eb8;\n      border-radius: 6px;\n      text-align: right;\n      background: rgba(255, 255, 255, 0.8);\n    " + "\">\n            <button id=\"" + (_0x187470 ? "cgBatchApplySecondLoop" : "cgBatchApplyNormal") + "\" style=\"" + "\n      background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n      color: white;\n      border: none;\n      border-radius: 12px;\n      padding: 12px 20px;\n      margin: 8px 0;\n      font-size: 16px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      border: 2px solid rgba(255, 255, 255, 0.5);\n      font-weight: bold;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n    " + " padding: 8px 12px; background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\">批量应用</button>\n          </div>\n        </div>\n        \n        <div style=\"margin-bottom: 15px; display: flex; gap: 10px;\">\n          <input type=\"text\" id=\"" + (_0x187470 ? "cgSecondLoopSearch" : "cgNormalSearch") + "\" placeholder=\"搜索数值...\" style=\"flex: 1; padding: 10px; border: 1px solid #ff9eb8; border-radius: 6px; background: rgba(255,255,255,0.8);\">\n          <button id=\"" + (_0x187470 ? "cgSecondLoopRefresh" : "cgNormalRefresh") + "\" style=\"" + "\n      background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n      color: white;\n      border: none;\n      border-radius: 12px;\n      padding: 12px 20px;\n      margin: 8px 0;\n      font-size: 16px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      border: 2px solid rgba(255, 255, 255, 0.5);\n      font-weight: bold;\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n    " + " padding: 10px 15px;\">刷新</button>\n        </div>\n        \n        <div style=\"overflow-y: auto; flex: 1; margin-bottom: 15px; border: 1px solid #a8d8ff; border-radius: 8px; padding: 10px; background: rgba(255,255,255,0.7);\">\n          <div id=\"" + (_0x187470 ? "cgSecondLoopValues" : "cgNormalValues") + "\" style=\"display: flex; flex-direction: column;\"></div>\n        </div>\n      ";
      document.body.appendChild(_0x1e0ebb);
      _0x1e0ebb.querySelectorAll(".cg-close-editor").forEach(_0x9c248e => {
        _0x9c248e.onclick = () => {
          _0x1e0ebb.style.display = "none";
        };
      });
      const _0x3675f4 = _0x1e0ebb.querySelector("#" + (_0x187470 ? "cgSelectAllSecondLoop" : "cgSelectAllNormal"));
      _0x3675f4.onchange = function () {
        const _0x39e804 = _0x1e0ebb.querySelectorAll(".cg-value-checkbox");
        _0x39e804.forEach(_0x3116f7 => {
          _0x3116f7.checked = this.checked;
        });
      };
      const _0x4316e0 = _0x1e0ebb.querySelector("#" + (_0x187470 ? "cgBatchApplySecondLoop" : "cgBatchApplyNormal"));
      _0x4316e0.onclick = function () {
        const _0x412c34 = _0x1e0ebb.querySelector("#" + (_0x187470 ? "cgBatchValueSecondLoop" : "cgBatchValueNormal"));
        const _0x483cd3 = parseInt(_0x412c34.value);
        if (isNaN(_0x483cd3)) {
          _0x2ecfea("请输入有效的数值", 2000, true);
          return;
        }
        const _0x3c5d73 = _0x1e0ebb.querySelectorAll(".cg-value-checkbox:checked");
        if (_0x3c5d73.length === 0) {
          _0x2ecfea("请至少选择一个数值", 2000, true);
          return;
        }
        let _0x1cdcb9 = 0;
        _0x3c5d73.forEach(_0x1f0959 => {
          const _0x561348 = _0x1f0959.closest(".cg-value-item");
          const _0x257784 = _0x561348.querySelector(".cg-value-input");
          const _0x396606 = parseInt(_0x257784.dataset.index);
          const _0x5168c9 = _0x257784.dataset.description;
          if (!isNaN(_0x396606)) {
            _0x257784.value = _0x483cd3;
            _0x515fc5(_0x396606, _0x483cd3, _0x187470);
            _0x1cdcb9++;
          }
        });
        _0x2ecfea("已批量修改 " + _0x1cdcb9 + " 个数值为 " + _0x483cd3);
      };
      const _0x177413 = _0x1e0ebb.querySelector("#" + (_0x187470 ? "cgSecondLoopRefresh" : "cgNormalRefresh"));
      _0x177413.onclick = () => {
        _0x2d4e68(_0x187470);
      };
      const _0x386f97 = _0x1e0ebb.querySelector("#" + (_0x187470 ? "cgSecondLoopSearch" : "cgNormalSearch"));
      _0x386f97.oninput = () => {
        const _0x79af9 = _0x386f97.value.toLowerCase();
        const _0x584c03 = _0x1e0ebb.querySelectorAll(".cg-value-item");
        _0x584c03.forEach(_0x587d12 => {
          const _0x2e4127 = _0x587d12.textContent.toLowerCase();
          _0x587d12.style.display = _0x2e4127.includes(_0x79af9) ? "flex" : "none";
        });
      };
      return _0x1e0ebb;
    };
    const _0x2d4e68 = async (_0x5daed1 = false) => {
      const _0x279d97 = document.getElementById(_0x5daed1 ? "cgSecondLoopEditor" : "cgNormalEditor");
      const _0x392ac5 = _0x279d97.querySelector("#" + (_0x5daed1 ? "cgSecondLoopValues" : "cgNormalValues"));
      _0x392ac5.innerHTML = "<div style='text-align: center; padding: 20px; color: #666;'>正在加载数值...</div>";
      try {
        const _0x3b7b4e = await _0x55d98d(_0x5daed1);
        _0x392ac5.innerHTML = "";
        if (_0x3b7b4e.length === 0) {
          _0x392ac5.innerHTML = "<div style='text-align: center; padding: 20px; color: #666;'>未找到数值</div>";
          return;
        }
        _0x3b7b4e.forEach(([_0x1860c7, _0x5bbccf]) => {
          const _0x8c31ff = 0;
          const _0x570856 = document.createElement("div");
          _0x570856.className = "cg-value-item";
          _0x570856.style.cssText = "\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 10px 15px;\n      margin: 5px 0;\n      background: rgba(255, 255, 255, 0.7);\n      border-radius: 8px;\n      transition: all 0.2s;\n      border: 1px solid #a8d8ff;\n    ";
          _0x570856.innerHTML = "\n            <div style=\"display: flex; align-items: center; flex: 1;\">\n              <input type=\"checkbox\" class=\"cg-value-checkbox\" style=\"\n      margin-right: 10px;\n      width: 16px;\n      height: 16px;\n      cursor: pointer;\n      accent-color: #ff6b9d;\n    \">\n              <div style=\"font-size: 14px;\">\n                <span style=\"color: #666;\">" + _0x5bbccf + "</span>\n              </div>\n            </div>\n            <div style=\"display: flex; align-items: center;\">\n              <input type=\"number\" class=\"cg-value-input\" value=\"" + _0x8c31ff + "\" data-index=\"" + _0x1860c7 + "\" data-description=\"" + _0x5bbccf + "\" style=\"" + "\n      width: 80px;\n      padding: 8px 12px;\n      border: 1px solid #ff9eb8;\n      border-radius: 6px;\n      text-align: right;\n      background: rgba(255, 255, 255, 0.8);\n    " + "\">\n              <button class=\"cg-apply-value\" data-index=\"" + _0x1860c7 + "\" data-description=\"" + _0x5bbccf + "\" style=\"" + "\n      padding: 8px 12px;\n      margin-left: 10px;\n      background: linear-gradient(135deg, #a8d8ff 0%, #6bc5ff 100%);\n      color: white;\n      border: none;\n      border-radius: 6px;\n      cursor: pointer;\n      font-size: 14px;\n      transition: all 0.2s;\n      border: 1px solid rgba(255, 255, 255, 0.5);\n      font-weight: bold;\n    " + "\">应用</button>\n            </div>\n          ";
          _0x392ac5.appendChild(_0x570856);
          const _0x57c921 = _0x570856.querySelector(".cg-apply-value");
          _0x57c921.onclick = () => {
            const _0x5e7611 = _0x570856.querySelector(".cg-value-input");
            const _0x1e7d76 = parseInt(_0x5e7611.value);
            const _0x1409be = _0x5e7611.dataset.description;
            if (!isNaN(_0x1e7d76)) {
              _0x515fc5(_0x1860c7, _0x1e7d76, _0x5daed1);
              _0x2ecfea("已修改 \"" + _0x1409be + "\" 为 " + _0x1e7d76);
            } else {
              _0x2ecfea("请输入有效的数值", 2000, true);
            }
          };
        });
      } catch (_0x550444) {
        console.error("加载数值失败:", _0x550444);
        _0x392ac5.innerHTML = "<div style=\"text-align: center; color: #ff4757; padding: 20px;\">加载数值失败: " + _0x550444.message + "</div>";
      }
    };
    const _0x55d98d = async (_0x1296e9 = false) => {
      try {
        let _0x2af43e = b.url();
        if (!_0x2af43e) {
          throw new Error("无法获取game.bin URL");
        }
        const _0x2c7af6 = await fetch(_0x2af43e);
        if (!_0x2c7af6.ok) {
          throw new Error("HTTP错误! 状态: " + _0x2c7af6.status);
        }
        const _0x1e537b = await _0x2c7af6.arrayBuffer();
        const _0x700d65 = new TextDecoder("utf-8").decode(_0x1e537b);
        const _0x59f315 = /(?:二周目数值：|数值：|数值|二周目数值)?\[(\d+)([：:])([^\]]+)]/g;
        const _0x1c08a3 = [..._0x700d65.matchAll(_0x59f315)];
        const _0x375732 = new Map();
        _0x1c08a3.forEach(_0x3d1917 => {
          const [_0x140dd0, _0x235bf6, _0x2b0e9e, _0x1cbf44] = _0x3d1917;
          const _0x3f6692 = _0x140dd0.includes("二周目");
          if (_0x3f6692 === _0x1296e9) {
            const _0x3795e1 = parseInt(_0x235bf6) - 1;
            const _0xde9f6e = _0x1cbf44.replace(/[\n\r]/g, "").trim();
            if (!_0x375732.has(_0x3795e1)) {
              _0x375732.set(_0x3795e1, _0xde9f6e);
            }
          }
        });
        return [..._0x375732.entries()].sort((_0x800daa, _0x2a10a2) => _0x800daa[0] - _0x2a10a2[0]);
      } catch (_0x2587e8) {
        console.error("提取数值失败:", _0x2587e8);
        throw _0x2587e8;
      }
    };
    const _0x515fc5 = (_0x589c96, _0x3731fb, _0x3d7e18 = false) => {
      try {
        const _0x43eca = _0x3d4629(_0x3731fb);
        if (_0x3d7e18) {
          if (!a.system.varsEx) {
            a.system.varsEx = {};
          }
          if (!a.system.varsEx.data) {
            a.system.varsEx.data = [];
          }
          a.system.varsEx.data[_0x589c96] = _0x43eca;
        } else {
          if (!a.system.vars) {
            a.system.vars = {};
          }
          if (!a.system.vars.data) {
            a.system.vars.data = [];
          }
          a.system.vars.data[_0x589c96] = _0x43eca;
        }
      } catch (_0xb4b9b4) {
        console.error("应用数值修改失败:", _0xb4b9b4);
        _0x2ecfea("应用数值修改失败: " + _0xb4b9b4.message, 3000, true);
      }
    };
    window.triggerBtn = document.createElement("div");
    triggerBtn.textContent = "橙";
    triggerBtn.style.cssText = "\n      position: fixed;\n      top: 10px;\n      left: 20px;\n      color: white;\n      background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n      padding: 14px 18px;\n      border-radius: 30%;\n      cursor: pointer;\n      z-index: 99999;\n      border: 2px solid rgba(255,255,255,0.3);\n      font-size: 18px;\n      font-weight: bold;\n      transition: all 0.3s;\n      box-shadow: 0 4px 10px rgba(0,0,0,0.2);\n      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n    ";
    triggerBtn.onmouseenter = () => {
      triggerBtn.style.transform = "scale(1.1) rotate(10deg)";
      triggerBtn.style.boxShadow = "0 6px 15px rgba(0,0,0,0.3)";
    };
    triggerBtn.onmouseleave = () => {
      triggerBtn.style.transform = "scale(1) rotate(0deg)";
      triggerBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    };
    triggerBtn.onclick = () => {
      _0x10970e.style.display = _0x10970e.style.display === "flex" ? "none" : "flex";
      _0x190e23();
    };
    document.body.appendChild(triggerBtn);
    document.addEventListener("fullscreenchange", _0x19c194);
    document.addEventListener("webkitfullscreenchange", _0x19c194);
    document.addEventListener("mozfullscreenchange", _0x19c194);
    document.addEventListener("MSFullscreenChange", _0x19c194);
    function _0x19c194() {
      const _0x5e446b = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
      if (triggerBtn) {
        triggerBtn.style.display = _0x5e446b ? "none" : "block";
      }
    }
    document.getElementById("cgTabBasic").onclick = function () {
      document.getElementById("cgBasicSection").style.display = "block";
      document.getElementById("cgSaveSection").style.display = "none";
      document.getElementById("cgValuesSection").style.display = "none";
      document.querySelectorAll(".cg-tab").forEach(_0x4b5fbe => {
        _0x4b5fbe.style.cssText = "\n      padding: 8px 20px;\n      border: none;\n      background: none;\n      font-size: 16px;\n      cursor: pointer;\n      border-radius: 8px;\n      transition: all 0.3s;\n      color: #ff6b9d;\n      font-weight: bold;\n    ";
      });
      this.style.cssText = "\n      padding: 8px 20px;\n      border: none;\n      background: none;\n      font-size: 16px;\n      cursor: pointer;\n      border-radius: 8px;\n      transition: all 0.3s;\n      color: #ff6b9d;\n      font-weight: bold;\n     \n      background: rgba(255, 158, 184, 0.2);\n      font-weight: bold;\n      color: #ff3d7f;\n    ";
    };
    document.getElementById("cgTabSave").onclick = function () {
      document.getElementById("cgBasicSection").style.display = "none";
      document.getElementById("cgSaveSection").style.display = "block";
      document.getElementById("cgValuesSection").style.display = "none";
      document.querySelectorAll(".cg-tab").forEach(_0x576e37 => {
        _0x576e37.style.cssText = "\n      padding: 8px 20px;\n      border: none;\n      background: none;\n      font-size: 16px;\n      cursor: pointer;\n      border-radius: 8px;\n      transition: all 0.3s;\n      color: #ff6b9d;\n      font-weight: bold;\n    ";
      });
      this.style.cssText = "\n      padding: 8px 20px;\n      border: none;\n      background: none;\n      font-size: 16px;\n      cursor: pointer;\n      border-radius: 8px;\n      transition: all 0.3s;\n      color: #ff6b9d;\n      font-weight: bold;\n     \n      background: rgba(255, 158, 184, 0.2);\n      font-weight: bold;\n      color: #ff3d7f;\n    ";
    };
    document.getElementById("cgTabValues").onclick = function () {
      document.getElementById("cgBasicSection").style.display = "none";
      document.getElementById("cgSaveSection").style.display = "none";
      document.getElementById("cgValuesSection").style.display = "block";
      document.querySelectorAll(".cg-tab").forEach(_0x3a3780 => {
        _0x3a3780.style.cssText = "\n      padding: 8px 20px;\n      border: none;\n      background: none;\n      font-size: 16px;\n      cursor: pointer;\n      border-radius: 8px;\n      transition: all 0.3s;\n      color: #ff6b9d;\n      font-weight: bold;\n    ";
      });
      this.style.cssText = "\n      padding: 8px 20px;\n      border: none;\n      background: none;\n      font-size: 16px;\n      cursor: pointer;\n      border-radius: 8px;\n      transition: all 0.3s;\n      color: #ff6b9d;\n      font-weight: bold;\n     \n      background: rgba(255, 158, 184, 0.2);\n      font-weight: bold;\n      color: #ff3d7f;\n    ";
    };
    document.getElementById("cgClosePanel").onclick = () => {
      _0x10970e.style.display = "none";
      _0x5de4f1 = "none";
      _0x3ac9d3();
    };
    document.getElementById("cgModifyUid").onclick = function () {
      const _0x2c1b41 = prompt("请输入新的UID:", _0xd83ac1);
      if (_0x2c1b41 && !isNaN(_0x2c1b41)) {
        _0xd83ac1 = _0x2c1b41;
        localStorage.setItem("desiredUid", _0xd83ac1);
        this.textContent = "修改UID: " + _0xd83ac1;
        document.querySelector("#cgControlPanel h1").nextElementSibling.querySelector("div:first-child").innerHTML = "\n          <span style=\"font-weight: bold; color: #ff6b9d;\">UID:</span> " + _0xd83ac1 + "\n        ";
      } else {
        _0x2ecfea("请输入有效的UID");
      }
    };
    document.getElementById("cgModifyFlower").onclick = function () {
      const _0x18239d = prompt("请输入新的鲜花累充数量:", _0x2eff9f);
      if (_0x18239d && !isNaN(_0x18239d)) {
        _0x2eff9f = _0x18239d;
        localStorage.setItem("lc", _0x2eff9f);
        this.textContent = "修改鲜花累充: " + _0x2eff9f;
      } else {
        _0x2ecfea("请输入有效的数量");
      }
    };
    document.getElementById("cgShopToggle").onclick = function () {
      _0x475e8d = !_0x475e8d;
      this.textContent = "商城开关: " + (_0x475e8d ? "开启" : "关闭");
      if (_0x475e8d) {
        _0x2ecfea("商城拦截器已开启");
      } else {
        _0x2ecfea("商城拦截器已关闭");
      }
    };
    document.getElementById("cgFullscreen").onclick = function () {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else {
          if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
          } else {
            if (document.documentElement.webkitRequestFullscreen) {
              document.documentElement.webkitRequestfullscreen();
            } else {
              if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
              }
            }
          }
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else {
          if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else {
            if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            } else {
              if (document.msExitFullscreen) {
                document.msExitFullscreen();
              }
            }
          }
        }
      }
    };
    document.getElementById("cgDownloadBin").onclick = async function () {
      try {
        let _0x3a2854 = b.url();
        if (!_0x3a2854) {
          _0x2ecfea("无法获取game.bin URL", 2000, true);
          return;
        }
        const _0x2c3096 = await fetch(_0x3a2854);
        if (!_0x2c3096.ok) {
          _0x2ecfea("下载失败! 状态: " + _0x2c3096.status, 2000, true);
          return;
        }
        const _0x1705ce = await _0x2c3096.blob();
        const _0x37c820 = URL.createObjectURL(_0x1705ce);
        const _0x1de120 = document.createElement("a");
        _0x1de120.href = _0x37c820;
        const _0x1113c1 = document.title.replace(" - 橙光游戏", "").trim() || "game";
        const _0x3bcc42 = _0x1113c1.replace(/[\\/:*?"<>|]/g, "");
        _0x1de120.download = _0x3bcc42 + ".bin";
        document.body.appendChild(_0x1de120);
        _0x1de120.click();
        document.body.removeChild(_0x1de120);
        URL.revokeObjectURL(_0x37c820);
        _0x2ecfea("bin文件下载完成");
      } catch (_0x41861e) {
        console.error("下载bin文件失败:", _0x41861e);
        _0x2ecfea("下载失败: " + _0x41861e.message, 3000, true);
      }
    };
    document.getElementById("cgSaveMode").onclick = function () {
      _0x5de4f1 = _0x5de4f1 === "save" ? "none" : "save";
      _0x3ac9d3();
      _0x190e23();
    };
    document.getElementById("cgLoadMode").onclick = function () {
      _0x5de4f1 = _0x5de4f1 === "load" ? "none" : "load";
      _0x3ac9d3();
      _0x190e23();
    };
    document.getElementById("cgEditNormalValues").onclick = () => {
      const _0x612d2d = document.getElementById("cgNormalEditor") || _0x54ecc9(false);
      _0x612d2d.style.display = "flex";
      _0x2d4e68(false);
    };
    document.getElementById("cgEditSecondLoopValues").onclick = () => {
      const _0x45ce64 = document.getElementById("cgSecondLoopEditor") || _0x54ecc9(true);
      _0x45ce64.style.display = "flex";
      _0x2d4e68(true);
    };
    const _0x3ac9d3 = () => {
      const _0x110088 = document.getElementById("cgModeIndicator");
      const _0x170ac1 = document.getElementById("cgCurrentModeText");
      if (_0x5de4f1 === "none") {
        _0x110088.style.display = "none";
        _0x170ac1.textContent = "无";
      } else {
        _0x110088.style.display = "block";
        _0x170ac1.textContent = _0x5de4f1 === "save" ? "存档模式" : "读档模式";
        _0x110088.style.background = _0x5de4f1 === "save" ? "rgba(168, 216, 255, 0.9)" : "rgba(181, 255, 158, 0.9)";
      }
    };
    const _0x376351 = _0xc854a9 => {
      try {
        const _0x2c34e2 = JSON.parse(_0xc854a9);
        if (_0x2c34e2.Header) {
          const _0x3c415c = {
            gameName: _0x2c34e2.Header.Name || "未知游戏",
            storyName: _0x2c34e2.Header.StoryName || "未知剧情",
            saveTime: _0x2c34e2.Header.SaveTime ? new Date(_0x2c34e2.Header.SaveTime).toLocaleString() : "未知时间",
            valid: true
          };
          return _0x3c415c;
        }
        for (const _0x5416c3 in _0x2c34e2) {
          if (_0x5416c3.startsWith("save")) {
            const _0x3d343d = _0x2c34e2[_0x5416c3];
            if (_0x3d343d.includes("\"Name\"") && _0x3d343d.includes("\"StoryName\"")) {
              const _0x2dcbd0 = _0x3d343d.match(/"Name"\s*[\\:]\s*"([^"]+)"/);
              const _0x171e9e = _0x3d343d.match(/"StoryName"\s*[\\:]\s*"([^"]+)"/);
              const _0x1aea19 = _0x3d343d.match(/"SaveTime"\s*[\\:]\s*([0-9]+)/);
              const _0x29d462 = {
                gameName: _0x2dcbd0 ? _0x2dcbd0[1] : "未知游戏",
                storyName: _0x171e9e ? _0x171e9e[1] : "未知剧情",
                saveTime: _0x1aea19 ? new Date(parseInt(_0x1aea19[1])).toLocaleString() : "未知时间",
                valid: true
              };
              return _0x29d462;
            }
          }
        }
        const _0x19a851 = {
          valid: false
        };
        return _0x19a851;
      } catch (_0x535adc) {
        const _0x448494 = {
          valid: false
        };
        return _0x448494;
      }
    };
    const _0x57a2f9 = _0x345a18 => {
      try {
        if (typeof _0x345a18 === "object") {
          for (const _0x2c0676 in _0x345a18) {
            if (_0x2c0676.startsWith("save")) {
              try {
                const _0xf4de1a = JSON.parse(_0x345a18[_0x2c0676]);
                if (_0xf4de1a.PlayerBuyItem) {
                  _0xf4de1a.PlayerBuyItem.items = [];
                  _0x345a18[_0x2c0676] = JSON.stringify(_0xf4de1a);
                }
              } catch (_0x1befdf) {}
            }
          }
        }
        return _0x345a18;
      } catch (_0x6f16d3) {
        return _0x345a18;
      }
    };
    const _0x5236d5 = () => {
      try {
        for (const _0x13ff17 of Object.keys(localStorage)) {
          if (_0x13ff17.startsWith("save") && _0x13ff17.indexOf(_0xd83ac1) !== -1) {
            const _0x2962f8 = localStorage.getItem(_0x13ff17);
            if (_0x2962f8) {
              const _0x1104db = JSON.parse(_0x2962f8);
              if (_0x1104db.Header && _0x1104db.Header.StoryName) {
                return _0x1104db.Header.StoryName;
              }
            }
          }
        }
      } catch (_0x2b2c15) {
        console.error("获取剧情名称失败:", _0x2b2c15);
      }
      return "当前剧情";
    };
    const _0x3d9487 = (_0x5722de, _0x387dee) => {
      const _0x293b89 = document.getElementById("cgScreenshotHelper");
      _0x293b89.style.display = "block";
      const _0x2f5870 = document.getElementById("cgCaptureBtn");
      const _0x76e96e = document.getElementById("cgCancelCaptureBtn");
      const _0x32f4f3 = () => {
        _0x293b89.style.display = "none";
        _0x2f5870.onclick = null;
        _0x76e96e.onclick = null;
      };
      _0x2f5870.onclick = () => {
        _0x10970e.style.display = "none";
        triggerBtn.style.display = "none";
        setTimeout(() => {
          html2canvas(document.body, {
            scale: 0.5,
            logging: false,
            useCORS: true,
            allowTaint: true,
            width: document.body.scrollWidth,
            height: document.body.scrollHeight,
            windowWidth: document.body.scrollWidth,
            windowHeight: document.body.scrollHeight
          }).then(_0x578f28 => {
            _0x10970e.style.display = "flex";
            triggerBtn.style.display = "block";
            const _0xc8dd1a = _0x578f28.toDataURL("image/jpeg", 0.7);
            _0x387dee(_0xc8dd1a);
            _0x32f4f3();
          }).catch(_0x13d226 => {
            console.error("截图失败:", _0x13d226);
            _0x2ecfea("截图失败，请重试", 2000, true);
            _0x32f4f3();
          });
        }, 500);
      };
      _0x76e96e.onclick = () => {
        _0x32f4f3();
        _0x2ecfea("已取消截图");
      };
    };
    const _0x190e23 = () => {
      for (let _0x50bb80 = 1; _0x50bb80 <= _0x3ebddc.SLOT_COUNT; _0x50bb80++) {
        const _0x44dfa1 = document.getElementById("cgSlot" + _0x50bb80);
        const _0xf19f10 = _0x44dfa1.querySelector(".cg-slot-time");
        const _0x1b9da7 = _0x44dfa1.querySelector(".cg-game-name");
        const _0x1eacf0 = _0x44dfa1.querySelector(".cg-story-name");
        const _0x495de8 = _0x44dfa1.querySelector(".cg-slot-preview-container");
        const _0x23d733 = _0x44dfa1.querySelector(".cg-slot-preview-placeholder");
        const _0x29a04b = _0x44dfa1.querySelector(".cg-slot-preview-image");
        const _0x504179 = _0x44dfa1.querySelector(".cg-slot-preview-bar");
        const _0x536c76 = "" + _0x3ebddc.STORAGE_PREFIX + _0xd83ac1 + "_" + _0x358d67 + "_" + _0x50bb80;
        const _0x55f013 = localStorage.getItem(_0x536c76);
        _0x44dfa1.onmouseenter = () => {
          _0x44dfa1.style.cssText += "\n      transform: translateY(-3px);\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n      border-color: #ff9eb8;\n    ";
        };
        _0x44dfa1.onmouseleave = () => {
          _0x44dfa1.style.cssText = "\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: center;\n      width: 100%;\n      min-height: 80px;\n      background: rgba(255, 255, 255, 0.8);\n      border-radius: 12px;\n      margin: 5px 0;\n      padding: 12px;\n      cursor: pointer;\n      transition: all 0.2s;\n      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n      position: relative;\n      overflow: hidden;\n      box-sizing: border-box;\n      border: 2px solid #a8d8ff;\n    ";
        };
        if (_0x55f013) {
          try {
            const _0x298354 = JSON.parse(_0x55f013);
            const _0x1338ac = _0x376351(JSON.stringify(_0x298354.data));
            if (_0x1338ac.valid) {
              _0x1b9da7.textContent = _0x298354.info.gameName || _0x1338ac.gameName || "未知游戏";
              _0x1eacf0.textContent = _0x298354.info.storyName || _0x1338ac.storyName || "未知剧情";
              _0xf19f10.textContent = _0x298354.info.saveTime ? new Date(_0x298354.info.saveTime).toLocaleString() : _0x1338ac.saveTime;
              _0xf19f10.style.color = "#666";
              _0x1b9da7.style.color = "#333";
              _0x504179.style.background = "linear-gradient(90deg, #a8d8ff 0%, #ff9eb8 100%)";
              if (_0x298354.info.previewImage) {
                _0x23d733.style.display = "none";
                _0x29a04b.style.display = "block";
                _0x29a04b.src = _0x298354.info.previewImage;
              } else {
                _0x23d733.style.display = "flex";
                _0x29a04b.style.display = "none";
              }
              _0x44dfa1.onclick = () => {
                if (_0x5de4f1 === "save") {
                  if (confirm("是否要截取当前画面作为存档预览图？")) {
                    _0x3d9487(_0x50bb80, _0x466e2a => {
                      _0x3a0a50(_0x50bb80, _0x466e2a);
                    });
                  } else {
                    _0x3a0a50(_0x50bb80);
                  }
                } else {
                  if (_0x5de4f1 === "load") {
                    _0xe5775(_0x50bb80);
                  }
                }
              };
            } else {
              _0x1b9da7.textContent = "数据损坏";
              _0x1eacf0.textContent = "";
              _0xf19f10.textContent = "无效存档";
              _0xf19f10.style.color = "#ff4757";
              _0x1b9da7.style.color = "#ff4757";
              _0x504179.style.background = "#ff4757";
              _0x23d733.style.display = "flex";
              _0x29a04b.style.display = "none";
            }
          } catch (_0x170805) {
            _0x1b9da7.textContent = "数据损坏";
            _0x1eacf0.textContent = "";
            _0xf19f10.textContent = "解析错误";
            _0xf19f10.style.color = "#ff4757";
            _0x1b9da7.style.color = "#ff4757";
            _0x504179.style.background = "#ff4757";
            _0x23d733.style.display = "flex";
            _0x29a04b.style.display = "none";
          }
        } else {
          _0x1b9da7.textContent = "未使用";
          _0x1eacf0.textContent = "";
          _0xf19f10.textContent = "空";
          _0xf19f10.style.color = "#666";
          _0x1b9da7.style.color = "#999";
          _0x504179.style.background = "#ddd";
          _0x23d733.style.display = "flex";
          _0x29a04b.style.display = "none";
          _0x44dfa1.onclick = () => {
            if (_0x5de4f1 === "save") {
              if (confirm("是否要截取当前画面作为存档预览图？")) {
                _0x3d9487(_0x50bb80, _0x397ade => {
                  _0x3a0a50(_0x50bb80, _0x397ade);
                });
              } else {
                _0x3a0a50(_0x50bb80);
              }
            } else {
              if (_0x5de4f1 === "load") {
                _0x2ecfea("该存档位为空");
              }
            }
          };
        }
        if (_0x5de4f1 === "save") {
          _0x44dfa1.style.background = "rgba(168, 216, 255, 0.2)";
        } else {
          if (_0x5de4f1 === "load") {
            _0x44dfa1.style.background = "rgba(181, 255, 158, 0.2)";
          } else {
            _0x44dfa1.style.background = "rgba(255, 255, 255, 0.8)";
          }
        }
      }
    };
    const _0x3a0a50 = (_0x516974, _0x27e9a3 = null) => {
      const _0x5c9b93 = {};
      for (const _0x5e66d5 of Object.keys(localStorage)) {
        if (_0x5e66d5.startsWith("save") && _0x5e66d5 != "saveData" && _0x5e66d5.indexOf(_0xd83ac1) != -1) {
          _0x5c9b93[_0x5e66d5] = localStorage.getItem(_0x5e66d5);
        }
      }
      if (Object.keys(_0x5c9b93).length === 0) {
        _0x2ecfea("未检测到当前游戏的存档数据");
        return;
      }
      const _0x195a98 = _0x57a2f9(_0x5c9b93);
      const _0x2d2417 = new Date();
      const _0x54c4c7 = {
        saveTime: _0x2d2417.getTime(),
        gameName: document.title.replace(" - 橙光游戏", "") || "未知游戏",
        storyName: _0x5236d5(),
        gameId: _0x358d67
      };
      if (_0x27e9a3) {
        _0x54c4c7.previewImage = _0x27e9a3;
      }
      const _0xf701b0 = "" + _0x3ebddc.STORAGE_PREFIX + _0xd83ac1 + "_" + _0x358d67 + "_" + _0x516974;
      const _0x34b8c8 = {
        data: _0x195a98,
        info: _0x54c4c7
      };
      localStorage.setItem(_0xf701b0, JSON.stringify(_0x34b8c8));
      for (const _0x24e9d0 of Object.keys(localStorage)) {
        if (_0x24e9d0.startsWith("save") && _0x24e9d0 != "saveData" && _0x24e9d0.indexOf(_0xd83ac1) != -1) {
          localStorage.removeItem(_0x24e9d0);
        }
      }
      _0x2ecfea("已保存到存档 " + _0x516974);
      _0x190e23();
    };
    const _0xe5775 = _0x520f6f => {
      const _0xddcdb7 = "" + _0x3ebddc.STORAGE_PREFIX + _0xd83ac1 + "_" + _0x358d67 + "_" + _0x520f6f;
      const _0x414e88 = localStorage.getItem(_0xddcdb7);
      if (!_0x414e88) {
        _0x2ecfea("该存档位为空");
        return;
      }
      try {
        const _0x2256fe = JSON.parse(_0x414e88);
        for (const _0x1ad9cb of Object.keys(localStorage)) {
          if (_0x1ad9cb.startsWith("save") && _0x1ad9cb != "saveData" && _0x1ad9cb.indexOf(_0xd83ac1) != -1) {
            localStorage.removeItem(_0x1ad9cb);
          }
        }
        Object.entries(_0x2256fe.data).forEach(([_0xa32181, _0x106091]) => {
          if (_0xa32181.startsWith("save") && _0xa32181 != "saveData") {
            localStorage.setItem(_0xa32181, _0x106091);
          }
        });
        _0x2ecfea("已从存档 " + _0x520f6f + " 还原数据");
        location.reload();
      } catch (_0x12a8e2) {
        _0x2ecfea("存档数据损坏");
      }
    };
    document.getElementById("cgDownloadSave").onclick = function () {
      const _0x5ae2a5 = {};
      for (let _0x21d17d = 1; _0x21d17d <= _0x3ebddc.SLOT_COUNT; _0x21d17d++) {
        const _0x430564 = "" + _0x3ebddc.STORAGE_PREFIX + _0xd83ac1 + "_" + _0x358d67 + "_" + _0x21d17d;
        const _0x5b7440 = localStorage.getItem(_0x430564);
        if (_0x5b7440) {
          try {
            const _0x3fd09e = JSON.parse(_0x5b7440);
            const _0x49527a = {
              info: _0x3fd09e.info,
              data: _0x3fd09e.data
            };
            _0x5ae2a5[_0x21d17d] = _0x49527a;
          } catch (_0x203be5) {
            console.error("解析存档位数据失败:", _0x203be5);
          }
        }
      }
      if (Object.keys(_0x5ae2a5).length === 0) {
        _0x2ecfea("未检测到当前游戏的存档数据");
        return;
      }
      const _0x56e656 = {
        saveTime: new Date().getTime(),
        gameName: document.title.replace(" - 橙光游戏", "") || "未知游戏",
        storyName: _0x5236d5(),
        gameId: _0x358d67,
        slotCount: _0x3ebddc.SLOT_COUNT,
        uid: _0xd83ac1
      };
      const _0x3148f3 = {
        slotInfos: _0x5ae2a5,
        meta: _0x56e656
      };
      const _0x4e5958 = new Date();
      const _0x49b20e = "橙光存档_" + _0x3148f3.meta.gameName + "_" + _0x4e5958.getFullYear() + (_0x4e5958.getMonth() + 1) + _0x4e5958.getDate() + ".sav";
      const _0x3b8056 = {
        type: "application/octet-stream"
      };
      const _0xdbc2af = new Blob([JSON.stringify(_0x3148f3)], _0x3b8056);
      const _0x2987ce = URL.createObjectURL(_0xdbc2af);
      const _0x4fa6d1 = document.createElement("a");
      _0x4fa6d1.href = _0x2987ce;
      _0x4fa6d1.download = _0x49b20e;
      _0x4fa6d1.click();
      URL.revokeObjectURL(_0x2987ce);
    };
    document.getElementById("cgLoadSave").onclick = function () {
      const _0x34128b = document.createElement("input");
      _0x34128b.type = "file";
      _0x34128b.accept = ".sav";
      _0x34128b.onchange = _0x4c2fe9 => {
        const _0x3f64bb = _0x4c2fe9.target.files[0];
        if (!_0x3f64bb) {
          return;
        }
        const _0x40d2b5 = new FileReader();
        _0x40d2b5.onload = _0x500d88 => {
          try {
            const _0xa22cd1 = JSON.parse(_0x500d88.target.result);
            if (_0xa22cd1.meta && _0xa22cd1.meta.gameId && _0xa22cd1.meta.gameId !== _0x358d67) {
              if (!confirm("警告：此存档来自游戏ID " + _0xa22cd1.meta.gameId + "，当前游戏ID为 " + _0x358d67 + "。是否继续导入？")) {
                return;
              }
            }
            if (_0xa22cd1.slotInfos) {
              Object.entries(_0xa22cd1.slotInfos).forEach(([_0x5275b6, _0x48c8ef]) => {
                const _0x530a41 = "" + _0x3ebddc.STORAGE_PREFIX + _0xd83ac1 + "_" + _0x358d67 + "_" + _0x5275b6;
                localStorage.setItem(_0x530a41, JSON.stringify(_0x48c8ef));
              });
            }
            _0x2ecfea("已从文件还原存档数据");
            _0x190e23();
          } catch (_0x42ccb9) {
            _0x2ecfea("存档文件格式错误");
          }
        };
        _0x40d2b5.readAsText(_0x3f64bb);
      };
      _0x34128b.click();
    };
    document.getElementById("cgClearCurrent").onclick = function () {
      if (confirm("确定要清除当前游戏的所有存档数据吗？")) {
        for (const _0x334c84 of Object.keys(localStorage)) {
          if (_0x334c84.startsWith("save") && _0x334c84.indexOf(_0xd83ac1) != -1) {
            localStorage.removeItem(_0x334c84);
          }
        }
        for (let _0x194042 = 1; _0x194042 <= _0x3ebddc.SLOT_COUNT; _0x194042++) {
          const _0x263372 = "" + _0x3ebddc.STORAGE_PREFIX + _0xd83ac1 + "_" + _0x358d67 + "_" + _0x194042;
          if (localStorage.getItem(_0x263372)) {
            localStorage.removeItem(_0x263372);
          }
        }
        _0x2ecfea("已清除存档数据");
        _0x190e23();
        location.reload();
      }
    };
    document.getElementById("cgClearData").onclick = function () {
      if (confirm("确定要清除所有存档数据吗？（包括所有游戏的存档）")) {
        for (const _0x1ec974 of Object.keys(localStorage)) {
          if (_0x1ec974.startsWith("cg_save_") || _0x1ec974.startsWith("save")) {
            localStorage.removeItem(_0x1ec974);
          }
        }
        _0x2ecfea("已清除存档数据");
        _0x190e23();
        location.reload();
      }
    };
    function _0x4fbac1() {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else {
          if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
          } else {
            if (document.documentElement.webkitRequestFullscreen) {
              document.documentElement.webkitRequestFullscreen();
            } else {
              if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
              }
            }
          }
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else {
          if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else {
            if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            } else {
              if (document.msExitFullscreen) {
                document.msExitFullscreen();
              }
            }
          }
        }
      }
    }
  };
  const _0x30613f = [];
  const _0x4b36d0 = {
    match: _0x206c82 => _0x206c82.includes("/createBuyOrder"),
    modify: (_0x2275d9, _0x583c5b) => {
      const _0xe657f6 = new URLSearchParams(_0x583c5b.split("?")[1]);
      const _0x54f5c3 = _0xe657f6.get("goods_id");
      const _0x47a4ae = _0xe657f6.get("buy_num");
      const _0x520bd7 = _0x11f5be();
      const _0x39b81b = {
        goods_id: _0x54f5c3,
        order_id: "${orderId}",
        buy_num: _0x47a4ae
      };
      const _0x90f198 = {
        status: 1,
        msg: "successful",
        data: _0x39b81b
      };
      return JSON.stringify(_0x90f198);
    }
  };
  _0x30613f.push(_0x4b36d0);
  const _0x4dcfe2 = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (_0xce2da4, _0x56861a, _0x5ef725 = true, _0x36399d = null, _0x3c1551 = null) {
    this._url = _0x56861a;
    if (!_0x475e8d) {
      return _0x4dcfe2.call(this, _0xce2da4, _0x56861a, _0x5ef725, _0x36399d, _0x3c1551);
    }
    _0x4dcfe2.apply(this, arguments);
    this.addEventListener("readystatechange", () => {
      if (this.readyState === 4 && this.status === 200) {
        let _0x449043 = this.responseText;
        _0x30613f.forEach(_0x3ab9ac => {
          if (_0x3ab9ac.match(this._url)) {
            try {
              _0x449043 = _0x3ab9ac.modify(_0x449043, this._url);
            } catch (_0xbe3721) {
              console.error("拦截器错误:", _0xbe3721);
            }
          }
        });
        const _0x1557bf = {
          value: _0x449043,
          writable: true
        };
        Object.defineProperty(this, "responseText", _0x1557bf);
        if (typeof this.onload === "function") {
          this.onload();
        }
      }
    });
    let _0x3470cc = _0x56861a;
    if (_0x56861a.includes("/get_goods_list")) {
      const _0x2b7a1d = new URL(_0x56861a);
      const _0x3cca35 = new URLSearchParams(_0x2b7a1d.search);
      const _0x36cfb9 = getUserData();
      const _0x3823d9 = _0x36cfb9 && _0x36cfb9.vip_level;
      if (!_0x3823d9) {
        const _0x273f72 = _0x3cca35.get("token");
        if (!_0x273f72 || _0x273f72 === "") {
          _0x3cca35.set("token", "aca3ca742d549bab14d6fc72dd5e843d");
        }
      }
      _0x3cca35.set("gindex", "1657178");
      _0x2b7a1d.search = _0x3cca35.toString();
      _0x3470cc = _0x2b7a1d.toString();
    }
    return _0x4dcfe2.call(this, _0xce2da4, _0x3470cc, _0x5ef725, _0x36399d, _0x3c1551);
  };
  const _0x2a239b = _0x210ba2 => {
    return _0x210ba2.includes("createBuyOrder");
  };
  const _0x378cbb = (_0x320ade, _0x4fa698, _0x3d86da) => {
    const _0x264a7b = {
      goods_id: _0x4fa698,
      order_id: "${djhsj}",
      buy_num: parseInt(_0x3d86da, 10)
    };
    const _0x4fc7e1 = {
      status: 1,
      msg: "successful",
      data: _0x264a7b
    };
    return _0x4fc7e1;
  };
  const _0x4240b1 = () => {
    const _0x21bdbf = document.createElement;
    document.createElement = function (_0x2c4285, ..._0x10cc60) {
      const _0x7e72be = _0x21bdbf.call(this, _0x2c4285, ..._0x10cc60);
      if (_0x2c4285.toLowerCase() === "script") {
        Object.defineProperty(_0x7e72be, "src", {
          set(_0x506cb1) {
            if (_0x2a239b(_0x506cb1)) {
              const _0x4e3344 = new URL(_0x506cb1).searchParams;
              const _0x7e879b = _0x4e3344.get("goods_id");
              const _0x12880d = _0x4e3344.get("buy_num");
              const _0x4a5325 = _0x4e3344.get("jsonCallBack");
              const _0x145d86 = _0x11f5be();
              if (_0x7e879b && _0x12880d && _0x4a5325) {
                const _0x1c833c = window[_0x4a5325];
                window[_0x4a5325] = function (_0x450967) {
                  const _0x2d78f2 = _0x378cbb(_0x450967, _0x7e879b, _0x12880d);
                  if (typeof _0x1c833c === "function") {
                    _0x1c833c(_0x2d78f2);
                  }
                };
              } else {
                console.error("缺少必要的参数: goods_id, buy_num, jsonCallBack");
              }
            }
            return _0x7e72be.setAttribute("src", _0x506cb1);
          },
          get() {
            return _0x7e72be.getAttribute("src");
          }
        });
      }
      return _0x7e72be;
    };
  };
  _0x4240b1();
  const _0x330efe = window.getUserData;
  window.getUserData = function () {
    const _0xd6cedb = _0x330efe ? _0x330efe() : {};
    const _0x465ec0 = {
      value: parseInt(_0xd83ac1),
      writable: true,
      enumerable: true,
      configurable: true
    };
    Object.defineProperty(_0xd6cedb, "uid", _0x465ec0);
    const _0xcf4834 = {
      value: true,
      writable: true,
      enumerable: true,
      configurable: true
    };
    Object.defineProperty(_0xd6cedb, "isLogin", _0xcf4834);
    ["totalFlower", "freshFlower", "wildFlower", "tempFlower", "realFlower", "haveFlower"].forEach(_0xb0335 => {
      const _0xb2d353 = {
        value: parseInt(_0x2eff9f),
        writable: true,
        enumerable: true,
        configurable: true
      };
      Object.defineProperty(_0xd6cedb, _0xb0335, _0xb2d353);
    });
    return _0xd6cedb;
  };
  _0x4b2452();
})();