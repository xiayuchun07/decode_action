//Mon Apr 14 2025 13:02:02 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function calculator(_0x47f461, _0x4bc5e0, _0x383f14) {
  if (_0x47f461 === "add") {
    {
      return _0x4bc5e0 + _0x383f14;
    }
  } else {
    if (_0x47f461 === "subtract") {
      return _0x4bc5e0 - _0x383f14;
    } else {
      if (_0x47f461 === "multiply") {
        return _0x4bc5e0 * _0x383f14;
      } else {
        if (_0x47f461 === "divide") {
          if (_0x383f14 === 0) {
            {
              throw new Error("不能除以零");
            }
          }
          return _0x4bc5e0 / _0x383f14;
        } else {
          throw new Error("不支持的操作: " + _0x47f461);
        }
      }
    }
  }
}
console.log(calculator("add", 5, 3));
console.log(calculator("subtract", 5, 3));
console.log(calculator("multiply", 5, 3));
console.log(calculator("divide", 6, 3));