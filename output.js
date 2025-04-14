//Mon Apr 14 2025 03:03:05 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function COqNCd(_0x47c59c, _0x343ca9) {
  return;
  COqNCd = function (_0x73eb07, _0x2ec145) {
    _0x73eb07 = _0x73eb07 - 0;
    var _0x462531 = _0x5e50e6[_0x73eb07];
    return _0x462531;
  };
  return COqNCd(_0x47c59c, _0x343ca9);
}
COqNCd();
(() => {
  "use strict";

  var _0x491dc5 = 14;
  const _0x48b281 = {
    menu: {
      w: 160,
      x: 20,
      y: 20,
      m: 10
    },
    toggle: {
      s: 40,
      x: 20,
      y: 20,
      t: 5
    },
    bg: {
      qq: "3058039382",
      url: "https://q1.qlogo.cn/g?b=qq&nk=3058039382&s=640",
      grad: "linear-gradient(135deg, rgba(255,121,198,1), rgba(189,147,249,1))",
      color: "#ffffff",
      o: 1,
      presets: [{
        n: "🎐 夏日物语",
        g: "linear-gradient(145deg, #a3d6ff, #b8e1ff 40%, #ccebff)",
        c: "#5b7c99"
      }, {
        n: "🌸 樱花之恋",
        g: "linear-gradient(145deg, #ffb7d5, #ff99c8 60%, #ff80b5)",
        c: "#fff0f5"
      }, {
        n: "💖 粉紫梦境",
        g: "linear-gradient(135deg, #ff9de2 20%, #c86dd7 80%)",
        c: "#fff0f9"
      }, {
        n: "🌟 星空之恋",
        g: "linear-gradient(45deg, #42378f 0%, #f53844 100%)",
        c: "#e0d3ff"
      }, {
        n: "🍬 糖果物语",
        g: "linear-gradient(145deg, #ffd3e0 0%, #ffb6c1 50%, #ff99ac 100%)",
        c: "#ff3366"
      }, {
        n: "🧸 棉花软糖",
        g: "linear-gradient(145deg, #ffd1dc, #fff0f5 40%, #ffe9ee)",
        c: "#ff77a9"
      }, {
        n: "🍧 草莓圣代",
        g: "linear-gradient(145deg, #ffb3d9, #ff99cc 40%, #ff80bf)",
        c: "#fff0f5"
      }],
      colors: [{
        n: "🎀 粉红甜心",
        v: "#ff69b4"
      }, {
        n: "💜 梦幻紫",
        v: "#d8a8ff"
      }, {
        n: "💙 天空蓝",
        v: "#87cefa"
      }, {
        n: "💚 薄荷绿",
        v: "#98fb98"
      }, {
        n: "💛 奶油黄",
        v: "#fffacd"
      }, {
        n: "❤️ 玫瑰红",
        v: "#ff1493"
      }]
    }
  };
  _0x491dc5 = "hlhmjn";
  const _0x29f9c3 = {
    main: [{
      t: "🖥️ 开启全屏",
      a: "fullscreen"
    }, {
      t: "⚙️ 系统设置",
      s: "settings"
    }],
    settings: [{
      t: "🎨 主题预设",
      s: "presets"
    }, {
      t: "👤 修改头像",
      a: "changeAvatar"
    }, {
      t: "🖼️ 背景图片",
      a: "setBg"
    }, {
      t: "🔡 字体颜色",
      s: "colors"
    }, {
      t: "🧹 清除缓存",
      a: "clearCache"
    }, {
      t: "🔙 返回上级",
      a: "back"
    }],
    presets: [..._0x48b281.bg.presets.map((_0x1da350, _0x2df9dc) => ({
      t: _0x1da350.n,
      a: "applyPreset",
      id: _0x2df9dc,
      st: "--preview-bg: " + _0x1da350.g
    })), {
      t: "🌈 自定义渐变",
      a: "changeGrad"
    }, {
      t: "🔙 返回上级",
      a: "back"
    }],
    colors: [..._0x48b281.bg.colors.map(_0x55c51b => ({
      t: _0x55c51b.n,
      a: "applyColor",
      v: _0x55c51b.v,
      st: "--color-preview: " + _0x55c51b.v
    })), {
      t: "🎨 自定义颜色",
      a: "customColor"
    }, {
      t: "🔙 返回上级",
      a: "back"
    }]
  };
  let _0x1da586 = "main";
  let _0x4cd77d = [];
  let _0x555714 = null;
  let _0x40b7e0 = {
    v: true,
    t: false
  };
  GM_addStyle("#doudou-menu,.doudou-toggle{--w:160px;--s:40px;--r:15px;--ir:8px;--sh:0 4px 20px rgba(0,0,0,0.15);--tr:all .3s cubic-bezier(.25,.46,.45,.94);--bd:1px solid rgba(255,255,255,.3);--hb:rgba(255,255,255,.2);--ts:1px 1px 2px rgba(0,0,0,.2);--z:2147483647;}#doudou-menu{position:fixed;width:var(--w);border-radius:var(--r);box-shadow:var(--sh);transition:var(--tr);z-index:var(--z);border:var(--bd);background:var(--bg);color:var(--fc);opacity:" + _0x48b281.bg.o + ";}.menu-header{display:flex;justify-content:space-between;align-items:center;padding:6px 10px;cursor:move;touch-action:none;user-select:none;background:transparent;}.menu-title{text-align:center;text-shadow:var(--ts);font-size:1.5em;flex-grow:1;}[class*=\"button\"],.menu-item{padding:12px;border-radius:var(--ir);background:rgba(255,255,255,.1);cursor:pointer;transition:all .2s ease;position:relative;margin:4px 0;color:var(--fc) !important;}.header-button{padding:4px 8px;font-size:1.3em;z-index:1;}.header-button:hover,.menu-item:hover{background:var(--hb);}.menu-body{padding:6px 10px;max-height:60vh;overflow-y:auto;}.menu-item.has-submenu::after{content:\"›\";position:absolute;right:12px;font-size:1.2em;color:rgba(255,255,255,.8);}.menu-item.back-button{background:rgba(255,255,255,.05)!important;margin-top:12px!important;}.menu-item[class*=\"-item\"]{padding-left:35px;}.menu-item[class*=\"-item\"]::before{content:\"\";position:absolute;left:12px;top:50%;transform:translateY(-50%);border-radius:var(--ir);box-shadow:0 2px 4px rgba(0,0,0,.2);}.preset-item::before{width:18px;height:18px;background:var(--preview-bg);}.color-item{padding-left:40px;}.color-item::before{width:20px;height:20px;border-radius:50%;background:var(--color-preview);border:2px solid rgba(255,255,255,.3);}.doudou-toggle{position:fixed;width:var(--s);height:var(--s);background:transparent;border-radius:50%;cursor:pointer;box-shadow:var(--sh);z-index:calc(var(--z) - 1);overflow:hidden;border:2px solid #fff;transition:transform .2s ease;touch-action:none;}.doudou-toggle img{width:100%;height:100%;object-fit:cover;}");
  var _0x17ede6 = 4;
  const _0x45fa9c = document.createElement("div");
  _0x17ede6 = 5;
  _0x45fa9c.id = "doudou-menu";
  _0x45fa9c.innerHTML = "\n        <div class=\"menu-header\">\n            <div class=\"header-button\" data-action=\"hide\">隐藏</div>\n            <div class=\"menu-title\">✨ 主题菜单 ✨</div>\n            <div class=\"header-button\" data-action=\"close\">退出</div>\n        </div>\n        <div class=\"menu-body\"></div>\n    ";
  document.body.appendChild(_0x45fa9c);
  const _0xf99339 = _0x45fa9c.querySelector(".menu-body");
  const _0x38a098 = _0x45fa9c.querySelector(".menu-header");
  const _0x43a855 = {
    isGrad: _0x2e5c25 => _0x2e5c25.startsWith("linear-gradient(") || _0x2e5c25.startsWith("radial-gradient("),
    isColor: _0x9ca3c0 => {
      const _0x34a917 = document.createElement("div");
      _0x34a917.style.color = _0x9ca3c0;
      return _0x34a917.style.color !== "";
    },
    savePos: (_0xf43e92, _0x8453e4) => {
      GM_setValue(_0x8453e4 + "X", parseInt(_0xf43e92.style.left));
      GM_setValue(_0x8453e4 + "Y", parseInt(_0xf43e92.style.top));
    },
    loadPos: (_0x38ceba, _0x331522, _0x130421) => {
      const _0x109321 = GM_getValue(_0x331522 + "X", _0x130421.x);
      const _0x12c398 = GM_getValue(_0x331522 + "Y", _0x130421.y);
      const _0x33a048 = window.innerWidth - (_0x331522 === "menu" ? _0x48b281.menu.w : _0x48b281.toggle.s) - (_0x331522 === "menu" ? _0x48b281.menu.m : 0);
      const _0x56f41c = window.innerHeight - _0x38ceba.offsetHeight - (_0x331522 === "menu" ? _0x48b281.menu.m : 0);
      _0x38ceba.style.left = Math.max(_0x331522 === "menu" ? _0x48b281.menu.m : 0, Math.min(_0x109321, _0x33a048)) + "px";
      _0x38ceba.style.top = Math.max(_0x331522 === "menu" ? _0x48b281.menu.m : 0, Math.min(_0x12c398, _0x56f41c)) + "px";
    }
  };
  function _0x108eac() {
    const _0x46743c = GM_getValue("menuBgUrl", _0x48b281.bg.url);
    const _0x6c7143 = GM_getValue("menuGrad", _0x48b281.bg.grad);
    const _0x2c8a16 = GM_getValue("menuFontColor", _0x48b281.bg.color);
    const _0x11c75e = [];
    if (_0x6c7143) {
      _0x11c75e.push(_0x6c7143);
    }
    if (_0x46743c && !_0x43a855.isGrad(_0x46743c)) {
      _0x11c75e.push("url(\"" + _0x46743c + "\") center/cover no-repeat");
    }
    _0x45fa9c.style.setProperty("--bg", _0x11c75e.join(", ") || "transparent");
    _0x45fa9c.style.setProperty("--fc", _0x2c8a16);
    const _0x4f4182 = _0x45fa9c.querySelectorAll(".menu-item");
    _0x4f4182.forEach(_0x1bf043 => {
      _0x1bf043.style.color = _0x2c8a16;
    });
    if (_0x46743c && !_0x43a855.isGrad(_0x46743c)) {
      var _0x2952a7 = 7;
      const _0x44761f = new Image();
      _0x2952a7 = 6;
      _0x44761f.onerror = () => {
        alert("背景图片加载失败，已移除无效URL！");
        GM_setValue("menuBgUrl", "");
        _0x108eac();
      };
      _0x44761f.src = _0x46743c;
    }
  }
  const _0x398acf = () => (_0x43a855.loadPos(_0x45fa9c, "menu", _0x48b281.menu), _0x45fa9c.style.display = GM_getValue("menuVisible", true) ? "block" : "none", !GM_getValue("menuVisible", true) && _0x56bbeb(), _0x108eac());
  _0x398acf();
  function _0x1fe18d(_0x3b87a3, _0x4fdafe = true) {
    let _0x5e33c8 = false;
    let _0xf39f58;
    let _0x16f9c2;
    let _0x2922e7;
    let _0xbd80a1;
    const _0x45e406 = _0x4186e2 => {
      if (!_0x5e33c8) {
        return;
      }
      const _0x3c273f = (_0x5d6d5e, _0x209247, _0x8c3780) => Math.max(_0x8c3780, Math.min(_0x5d6d5e, _0x209247));
      const _0x4dd5f2 = window.innerWidth - (_0x4fdafe ? _0x48b281.menu.w : _0x48b281.toggle.s) - (_0x4fdafe ? _0x48b281.menu.m : 0);
      var _0x1ff053 = 13;
      const _0x35df89 = window.innerHeight - _0x3b87a3.offsetHeight - (_0x4fdafe ? _0x48b281.menu.m : 0);
      _0x1ff053 = 0;
      _0x3b87a3.style.left = _0x3c273f(_0x4186e2.clientX - _0xf39f58, _0x4dd5f2, _0x4fdafe ? _0x48b281.menu.m : 0) + "xp".split("").reverse().join("");
      _0x3b87a3.style.top = _0x3c273f(_0x4186e2.clientY - _0x16f9c2, _0x35df89, _0x4fdafe ? _0x48b281.menu.m : 0) + "px";
    };
    const _0x1670f2 = () => {
      _0x5e33c8 = false;
      _0x4fdafe && (_0x38a098.style.cursor = "move");
      var _0x18f649 = 9;
      const _0x3ae530 = !_0x4fdafe && (Math.abs(parseInt(_0x3b87a3.style.left) - _0x2922e7) > _0x48b281.toggle.t || Math.abs(parseInt(_0x3b87a3.style.top) - _0xbd80a1) > _0x48b281.toggle.t);
      _0x18f649 = 3;
      _0x4fdafe || _0x3ae530 ? _0x43a855.savePos(_0x3b87a3, _0x4fdafe ? "menu" : "toggle") : (_0x45fa9c.style.display = "block", GM_setValue("menuVisible", true), _0x555714?.["evomer".split("").reverse().join("")](), _0x555714 = null);
      _0x3b87a3.style.transition = "";
      document.removeEventListener("pointermove", _0x45e406);
      document.removeEventListener("pointerup", _0x1670f2);
    };
    _0x3b87a3.addEventListener("pointerdown", _0x238c0e => {
      if (_0x238c0e.target.closest(".header-button")) {
        return;
      }
      _0x5e33c8 = true;
      _0xf39f58 = _0x238c0e.clientX - _0x3b87a3.offsetLeft;
      _0x16f9c2 = _0x238c0e.clientY - _0x3b87a3.offsetTop;
      [_0x2922e7, _0xbd80a1] = [_0x3b87a3.offsetLeft, _0x3b87a3.offsetTop];
      _0x3b87a3.style.transition = "none";
      _0x4fdafe && (_0x38a098.style.cursor = "grabbing");
      document.addEventListener("pointermove", _0x45e406);
      document.addEventListener("pointerup", _0x1670f2);
    });
  }
  _0x1fe18d(_0x45fa9c);
  function _0x56bbeb() {
    if (_0x555714) {
      return;
    }
    _0x555714 = document.createElement("div");
    _0x555714.className = "doudou-toggle";
    const _0x1751fe = new Image();
    const _0x4533e9 = GM_getValue("qqNumber", _0x48b281.bg.qq);
    _0x1751fe.src = "https://q1.qlogo.cn/g?b=qq&nk=" + _0x4533e9 + "&s=640";
    _0x1751fe.onerror = () => _0x1751fe.remove();
    _0x555714.appendChild(_0x1751fe);
    _0x43a855.loadPos(_0x555714, "toggle", _0x48b281.toggle);
    _0x1fe18d(_0x555714, false);
    document.body.appendChild(_0x555714);
  }
  function _0x42e607(_0x4543f1 = "main", _0x5b1ab3 = false) {
    if (!_0x5b1ab3 && _0x4543f1 !== _0x1da586) {
      _0x4cd77d.push(_0x1da586);
    }
    _0x1da586 = _0x4543f1;
    _0xf99339.innerHTML = _0x29f9c3[_0x4543f1].map(_0x5014a0 => "\n            <div class=\"menu-item \n                " + (_0x5014a0.s ? "has-submenu" : "") + " \n                " + (_0x5014a0.a === "back" ? "back-button" : "") + "\n                " + (_0x4543f1 === "presets" ? "preset-item" : "") + "\n                " + (_0x4543f1 === "colors" ? "color-item" : "") + "\"\n                data-action=\"" + (_0x5014a0.a || "") + "\"\n                data-submenu=\"" + (_0x5014a0.s || "") + "\"\n                data-id=\"" + (_0x5014a0.id !== undefined ? _0x5014a0.id : "") + "\"\n                data-value=\"" + (_0x5014a0.v || "") + "\"\n                style=\"" + (_0x5014a0.st || "") + "\">\n                " + _0x5014a0.t + "\n            </div>\n        ").join("");
  }
  function _0x263878() {
    if (_0x4cd77d.length === 0) {
      return;
    }
    _0x42e607(_0x4cd77d.pop(), true);
  }
  function _0x5bac9f(_0x235601, _0x424bfe, _0x52db9d, _0x21c7e4) {
    var _0x2f8d67 = 0;
    const _0x4eef88 = GM_getValue("menu" + _0x235601, _0x48b281.bg["" + (_0x235601 === "Grad" ? "grad" : _0x235601.toLowerCase())]);
    _0x2f8d67 = 4;
    const _0x463aae = prompt(_0x424bfe, _0x4eef88);
    if (_0x463aae !== null) {
      if (_0x463aae && _0x52db9d(_0x463aae)) {
        GM_setValue("menu" + _0x235601, _0x463aae);
        _0x108eac();
      } else {
        if (_0x463aae) {
          alert(_0x21c7e4);
        }
      }
    }
  }
  function _0x12ef3c(_0x3869c2) {
    const _0x5d0168 = _0x48b281.bg.presets[parseInt(_0x3869c2)];
    GM_setValue("menuGrad", _0x5d0168.g);
    GM_setValue("menuFontColor", _0x5d0168.c);
    GM_setValue("menuBgUrl", "");
    _0x108eac();
    alert("已应用「" + _0x5d0168.n + "」主题！");
  }
  function _0x2a0fa4() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      _0x40b7e0 = {
        v: _0x45fa9c.style.display === "block",
        t: !!_0x555714
      };
      document.documentElement.requestFullscreen().catch(console.error);
    }
  }
  function _0x5a1062() {
    if (!confirm("确定要清除所有缓存吗？这将重置：\n1. 菜单位置\n2. 悬浮按钮位置\n3. 背景设置\n4. 渐变效果\n5. 字体颜色")) {
      return;
    }
    Object.entries({
      menuX: _0x48b281.menu.x,
      menuY: _0x48b281.menu.y,
      toggleX: _0x48b281.toggle.x,
      toggleY: _0x48b281.toggle.y,
      qqNumber: _0x48b281.bg.qq,
      menuBgUrl: _0x48b281.bg.url,
      menuGrad: _0x48b281.bg.grad,
      menuFontColor: _0x48b281.bg.color
    }).forEach(([_0x422d74, _0x524188]) => GM_setValue(_0x422d74, _0x524188));
    _0x108eac();
    location.reload();
  }
  function _0x3f7174() {
    var _0x2212e1 = 14;
    const _0x36fa40 = prompt("请输入您的QQ号：", GM_getValue("qqNumber", _0x48b281.bg.qq));
    _0x2212e1 = "djpmih";
    GM_setValue("qqNumber", _0x36fa40);
    if (_0x555714) {
      const _0x4565bd = _0x555714.querySelector("img");
      if (_0x4565bd) {
        _0x4565bd.src = "https://q1.qlogo.cn/g?b=qq&nk=" + _0x36fa40 + "&s=640";
        _0x4565bd.onerror = () => {
          alert("头像加载失败，请检查QQ号！");
          _0x4565bd.src = "https://q1.qlogo.cn/g?b=qq&nk=" + _0x48b281.toggle.qq + "&s=640";
        };
      }
    }
    alert("头像已更新！");
  }
  var _0x4272b6 = 2;
  const _0x47ca35 = {
    fullscreen: _0x2a0fa4,
    back: _0x263878,
    clearCache: _0x5a1062,
    changeAvatar: _0x3f7174,
    setBg: () => {
      var _0x4f5a3c = 7;
      const _0x1703ef = GM_getValue("menuBgUrl", _0x48b281.bg.url);
      _0x4f5a3c = "cplcen";
      var _0x1a7461;
      const _0x1cc815 = prompt("请输入背景图片URL（留空恢复默认渐变）：", _0x1703ef);
      _0x1a7461 = "enmldg";
      if (_0x1cc815 === null) {
        return;
      }
      GM_setValue("menuBgUrl", _0x1cc815);
      if (_0x1cc815) {
        GM_setValue("menuGrad", "");
      }
      if (_0x1cc815 === "") {
        GM_setValue("menuGrad", _0x48b281.bg.grad);
      }
      _0x108eac();
      if (_0x1cc815) {
        const _0x2d7789 = new Image();
        _0x2d7789.onerror = () => {
          alert("背景图片加载失败，已移除无效URL！");
          GM_setValue("menuBgUrl", "");
          _0x108eac();
        };
        _0x2d7789.src = _0x1cc815;
      }
    },
    changeGrad: () => _0x5bac9f("Grad", "请输入新的渐变背景（示例：linear-gradient(45deg, #ff0000, #0000ff)）", _0x43a855.isGrad, "无效的渐变格式！请使用有效的CSS渐变语法。"),
    customColor: () => _0x5bac9f("FontColor", "请输入新的字体颜色（支持十六进制/颜色名称）：", _0x43a855.isColor, "无效的颜色值！"),
    applyPreset: _0x5bd939 => _0x12ef3c(_0x5bd939),
    applyColor: (_0x158ab8, _0x4b4300) => {
      if (!_0x158ab8) {
        console.error("颜色值无效:", _0x158ab8);
        return;
      }
      GM_setValue("menuFontColor", _0x158ab8);
      _0x108eac();
      alert("已应用字体颜色：" + _0x4b4300);
    }
  };
  _0x4272b6 = 12;
  _0x38a098.addEventListener("click", _0x2a772d => {
    var _0x4d26d8 = 13;
    const _0x557d5b = _0x2a772d.target.closest(".header-button");
    _0x4d26d8 = "gcfghl";
    if (!_0x557d5b) {
      return;
    }
    var _0x5a3d75 = 6;
    const _0x4b1fd0 = _0x557d5b.dataset.action;
    _0x5a3d75 = 9;
    if (_0x4b1fd0 === "close") {
      _0x45fa9c.style.display = "none";
      GM_setValue("menuVisible", false);
      _0x56bbeb();
    } else {
      if (_0x4b1fd0 === "hide") {
        _0x45fa9c.style.display = "none";
        if (_0x555714) {
          _0x555714.remove();
          _0x555714 = null;
        }
      }
    }
    _0x2a772d.stopPropagation();
  });
  _0x45fa9c.addEventListener("click", _0x3700c4 => {
    const _0x27bb40 = _0x3700c4.target.closest(".menu-item");
    if (!_0x27bb40) {
      return;
    }
    const {
      action: _0x564e75,
      submenu: _0x2a5d59,
      id: _0x50b2d3,
      value: _0x74ab41
    } = _0x27bb40.dataset;
    if (_0x2a5d59) {
      return _0x42e607(_0x2a5d59);
    }
    if (_0x564e75 === "applyPreset") {
      _0x47ca35.applyPreset(_0x50b2d3);
    } else {
      if (_0x564e75 === "applyColor") {
        _0x47ca35.applyColor(_0x74ab41, _0x27bb40.textContent.trim());
      } else {
        if (_0x564e75 in _0x47ca35) {
          _0x47ca35[_0x564e75]();
        }
      }
    }
  });
  document.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement) {
      _0x45fa9c.style.display = "none";
      if (_0x555714) {
        _0x555714.remove();
        _0x555714 = null;
      }
    } else {
      _0x45fa9c.style.display = _0x40b7e0.v ? "block" : "none";
      if (_0x40b7e0.t) {
        _0x56bbeb();
      }
    }
  });
  _0x42e607();
})();