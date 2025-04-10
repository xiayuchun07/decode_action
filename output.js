//Thu Apr 10 2025 22:17:57 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function _0x48ebcc(_0x11de29) {
  _0x11de29.style.color = "white";
  _0x11de29.style.fontSize = "2vw";
  _0x11de29.style.borderRadius = "8px";
  _0x11de29.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
  _0x11de29.style.padding = "2vh 4vw";
  _0x11de29.style.position = "fixed";
  _0x11de29.style.border = "none";
  _0x11de29.style.cursor = "pointer";
  _0x11de29.style.transition = "background-color 0.3s, transform 0.3s";
  _0x11de29.style.zIndex = 9999;
  _0x11de29.style.animation = "colorCycle 3s infinite alternate";
}
const _0x32bd11 = document.createElement("style");
_0x32bd11.innerHTML = "\n    @keyframes colorCycle {\n        0% { background-color: rgb(255, 0, 0); }\n        14% { background-color: rgb(255, 128, 0); }\n        28% { background-color: rgb(255, 255, 0); }\n        42% { background-color: rgb(0, 255, 0); }\n        57% { background-color: rgb(0, 0, 255); }\n        71% { background-color: rgb(75, 0, 130); }\n        85% { background-color: rgb(238, 130, 238); }\n        100% { background-color: rgb(255, 0, 0); }\n    }\n";
document.head.appendChild(_0x32bd11);
function _0x1b5fde(_0x4b164c, _0x250779) {
  return localStorage.getItem(_0x4b164c) || _0x250779;
}
function _0x2b8f12(_0x6291a0, _0x38f99d) {
  _0x6291a0.innerText = _0x38f99d;
}
function _0x1e1cf1(_0x16a1d0, _0x39ff5b, _0x57b6f5) {
  const _0x5159e3 = document.createElement("button");
  _0x5159e3.innerText = _0x16a1d0;
  _0x48ebcc(_0x5159e3);
  Object.assign(_0x5159e3.style, _0x39ff5b);
  _0x5159e3.addEventListener("click", _0x57b6f5);
  document.body.appendChild(_0x5159e3);
  return _0x5159e3;
}
let _0x14bc40 = _0x1b5fde("lc", 100);
const _0x13291d = {
  top: "1vh",
  left: "1vw"
};
_0x1e1cf1("修改累充数量: " + _0x14bc40, _0x13291d, function () {
  const _0x127b41 = prompt("请输入新的累充数量:", _0x14bc40);
  if (_0x127b41 && !isNaN(_0x127b41)) {
    _0x14bc40 = _0x127b41;
    localStorage.setItem("lc", _0x14bc40);
    _0x2b8f12(this, "修改累充数量: " + _0x14bc40);
    location.reload();
  } else {
    {
      alert("请输入有效的累充数量");
    }
  }
});
const _0x9c64ef = window.getUserData;
Object.defineProperty(window, "getUserData", {
  configurable: false,
  writable: false,
  value: function () {
    const _0x39bcdb = _0x9c64ef && typeof _0x9c64ef === "function" ? _0x9c64ef() : {};
    return Object.freeze({
      ..._0x39bcdb,
      totalFlower: parseInt(_0x14bc40),
      freshFlower: parseInt(_0x14bc40),
      wildFlower: parseInt(_0x14bc40),
      tempFlower: parseInt(_0x14bc40),
      realFlower: parseInt(_0x14bc40),
      haveFlower: parseInt(_0x14bc40)
    });
  }
});