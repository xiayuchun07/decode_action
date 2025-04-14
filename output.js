//Mon Apr 14 2025 20:32:36 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var visitors = {
  File(node, scope) {
    ast_excute(node.program, scope);
  },
  Program(program, scope) {
    for (i = function () {
      return 0;
    }(); eval(String.fromCharCode(105, 32, 60, 32, 112, 114, 111, 103, 114, 97, 109, 91, 39, 92, 120, 54, 50, 92, 120, 54, 102, 92, 120, 54, 52, 92, 120, 55, 57, 39, 93, 91, 39, 92, 120, 54, 99, 92, 120, 54, 53, 92, 120, 54, 101, 92, 120, 54, 55, 92, 120, 55, 52, 92, 120, 54, 56, 39, 93)); i++) {
      ast_excute(program.body[i], scope);
    }
  },
  ExpressionStatement(node, scope) {
    return ast_excute(node.expression, scope);
  },
  CallExpression(node, scope) {
    var func = ast_excute(node.callee, scope);
    var args = node.arguments.map(function (arg) {
      return ast_excute(arg, scope);
    });
    var value;
    if (node.callee.type === _0x5dfd5c(_0x454a[1])) {
      value = ast_excute(node.callee.object, scope);
    }
    return func.apply(value, args);
  },
  MemberExpression(node, scope) {
    var obj = ast_excute(node.object, scope);
    var name = node.property.name;
    return obj[name];
  },
  Identifier(node, scope) {
    return scope[node.name];
  },
  StringLiteral(node) {
    return node.value;
  },
  NumericLiteral(node) {
    return node.value;
  }
};
function ast_excute(node, scope) {
  var _0x07f87e = "1|2|0".split(_0x5dfd5c(_0x454a[2])),
    _0xfca34a = 0;
  while (true) {
    switch (+_0x07f87e[_0xfca34a++]) {
      case 0:
        return evalute(node, scope);
        continue;
      case 1:
        var evalute = visitors[node.type];
        continue;
      case 2:
        if (!evalute) {
          throw new Error(_0x5dfd5c(_0x454a[3]), node.type);
        }
        continue;
    }
    break;
  }
}
function _0x4aaea() {
  var _0x87g5f = function (s, h) {
    return eval(String.fromCharCode(115, 32, 43, 32, 104));
  }(3, 7);
  const _0x3c223f = {
    "menu": JSON.parse(_0x5dfd5c(_0x454a[4])),
    "toggle": JSON.parse(_0x5dfd5c(_0x454a[5])),
    "bg": {
      "qq": "3058039382",
      "url": "https://q1.qlogo.cn/g?b=qq&nk=3058039382&s=640",
      "grad": "linear-gradient(135deg, rgba(255,121,198,1), rgba(189,147,249,1))",
      "color": "#ffffff",
      "o": 1,
      "presets": [JSON.parse(_0x5dfd5c(_0x454a[6]))],
      "colors": [JSON.parse(_0x5dfd5c(_0x454a[7])), JSON.parse(_0x5dfd5c(_0x454a[8])), JSON.parse(_0x5dfd5c(_0x454a[9])), JSON.parse(_0x5dfd5c(_0x454a[10])), JSON.parse("}\n\"dcafff#\" :\"v\"  \n,\"黄油奶 \uDC9B\uD83D\" :\"n\"  \n{".split("").reverse().join("")), JSON.parse(_0x5dfd5c(_0x454a[11]))]
    }
  };
  _0x87g5f = function () {
    return 8;
  }();
  console.log(_0x3c223f);
}
_0x4aaea();
ast_excute({
  "type": "CallExpression",
  "callee": {
    "type": "MemberExpression",
    "object": {
      "type": "Identifier",
      "name": "console"
    },
    "property": {
      "type": "Identifier",
      "name": "log"
    }
  },
  "arguments": [{
    "type": "StringLiteral",
    "value": "宇"
  }]
}, {
  console: console
});
ast_excute({
  "type": "CallExpression",
  "callee": {
    "type": "MemberExpression",
    "object": {
      "type": "Identifier",
      "name": "console"
    },
    "property": {
      "type": "Identifier",
      "name": "log"
    }
  },
  "arguments": [{
    "type": "StringLiteral",
    "value": "Hello World"
  }]
}, {
  console: console
});