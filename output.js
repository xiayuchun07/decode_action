//Tue Apr 15 2025 18:37:36 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function _0x1ca4fb(_0x2165f1) {
  _0x2165f1.style.color = "white";
  _0x2165f1.style.fontSize = "2vw";
  _0x2165f1.style.borderRadius = "8px";
  _0x2165f1.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
  _0x2165f1.style.padding = "2vh 4vw";
  _0x2165f1.style.position = "fixed";
  _0x2165f1.style.border = "none";
  _0x2165f1.style.cursor = "pointer";
  _0x2165f1.style.transition = "background-color 0.3s, transform 0.3s";
  _0x2165f1.style.zIndex = 9999;
  _0x2165f1.style.animation = "colorCycle 3s infinite alternate";
}
const _0x3364fc = document.createElement("style");
_0x3364fc.innerHTML = "\n            @keyframes colorCycle {\n                0% { background-color: rgb(255, 0, 0); }\n                14% { background-color: rgb(255, 128, 0); }\n                28% { background-color: rgb(255, 255, 0); }\n                42% { background-color: rgb(0, 255, 0); }\n                57% { background-color: rgb(0, 0, 255); }\n                71% { background-color: rgb(75, 0, 130); }\n                85% { background-color: rgb(238, 130, 238); }\n                100% { background-color: rgb(255, 0, 0); }\n            }\n        ";
document.head.appendChild(_0x3364fc);
function _0x40682a(_0x58d735, _0x529488) {
  _0x58d735.innerText = _0x529488;
}
function _0x34c1b1(_0x32e97c, _0x4d6bf2, _0x24ad28) {
  const _0x22c038 = document.createElement("button");
  _0x22c038.innerText = _0x32e97c;
  _0x1ca4fb(_0x22c038);
  Object.assign(_0x22c038.style, _0x4d6bf2);
  _0x22c038.addEventListener("click", _0x24ad28);
  document.body.appendChild(_0x22c038);
  return _0x22c038;
}
let _0x398e0d = localStorage.getItem("desiredUid") || 1;
let _0x8165d3 = localStorage.getItem("lc") || 100;
const _0x51c18e = {
  top: "90vh",
  left: "1vw"
};
_0x34c1b1("修改UID: " + _0x398e0d, _0x51c18e, function () {
  const _0x5385fe = prompt("请输入新的UID:", _0x398e0d);
  if (_0x5385fe && !isNaN(_0x5385fe)) {
    {
      _0x398e0d = _0x5385fe;
      localStorage.setItem("desiredUid", _0x398e0d);
      _0x40682a(this, "修改UID: " + _0x398e0d);
      location.reload();
    }
  } else {
    {
      alert("请输入有效的UID");
    }
  }
});
const _0x37dd5c = {
  top: "1vh",
  left: "1vw"
};
_0x34c1b1("修改累充数量: " + _0x8165d3, _0x37dd5c, function () {
  const _0x4e2d29 = prompt("请输入新的累充数量:", _0x8165d3);
  _0x4e2d29 && !isNaN(_0x4e2d29) ? (_0x8165d3 = _0x4e2d29, localStorage.setItem("lc", _0x8165d3), _0x40682a(this, "修改累充数量: " + _0x8165d3), location.reload()) : alert("请输入有效的累充数量");
});
const _0x44e007 = window.getUserData;
window.getUserData = function () {
  const _0x594955 = _0x44e007 ? _0x44e007() : {};
  Object.defineProperty(_0x594955, "uid", {
    value: parseInt(_0x398e0d),
    writable: true,
    enumerable: true,
    configurable: true
  });
  const _0x596a2d = {
    value: true,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty(_0x594955, "isLogin", _0x596a2d);
  ["totalFlower", "freshFlower", "wildFlower", "tempFlower", "realFlower", "haveFlower"].forEach(_0x317318 => {
    {
      Object.defineProperty(_0x594955, _0x317318, {
        value: parseInt(_0x8165d3),
        writable: true,
        enumerable: true,
        configurable: true
      });
    }
  });
  return _0x594955;
};