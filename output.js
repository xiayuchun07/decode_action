//Mon Apr 14 2025 12:57:43 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function calculator(_0x5be15c, _0x5ece49, _0x4c8889) {
  if (_0x5be15c === "add") {
    return _0x5ece49 + _0x4c8889;
  } else {
    if (_0x5be15c === "subtract") {
      return _0x5ece49 - _0x4c8889;
    } else {
      if (_0x5be15c === "multiply") {
        return _0x5ece49 * _0x4c8889;
      } else {
        if (_0x5be15c === "divide") {
          if (_0x4c8889 === 0) {
            {
              throw new Error("不能除以零");
            }
          }
          return _0x5ece49 / _0x4c8889;
        } else {
          {
            throw new Error("不支持的操作: " + _0x5be15c);
          }
        }
      }
    }
  }
}
console.log(calculator("add", 5, 3));
console.log(calculator("subtract", 5, 3));
console.log(calculator("multiply", 5, 3));
console.log(calculator("divide", 6, 3));