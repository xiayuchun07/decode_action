//Mon Apr 14 2025 19:51:57 GMT+0000 (Coordinated Universal Time)
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
    if (eval(String.fromCharCode(110, 111, 100, 101, 91, 39, 92, 120, 54, 51, 92, 120, 54, 49, 92, 120, 54, 99, 92, 120, 54, 99, 92, 120, 54, 53, 92, 120, 54, 53, 39, 93, 91, 39, 92, 120, 55, 52, 92, 120, 55, 57, 92, 120, 55, 48, 92, 120, 54, 53, 39, 93, 32, 61, 61, 61, 32, 39, 77, 101, 109, 98, 101, 114, 69, 120, 112, 114, 101, 115, 115, 105, 111, 110, 39))) {
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
  var _0x55c = "0|1|2".split(_0x763c(_0x862c8c[1])),
    _0x95e26b = 0;
  while (true) {
    switch (+_0x55c[_0x95e26b++]) {
      case 0:
        var evalute = visitors[node.type];
        continue;
      case 1:
        if (!evalute) {
          throw new Error(_0x763c(_0x862c8c[2]), node.type);
        }
        continue;
      case 2:
        return evalute(node, scope);
        continue;
    }
    break;
  }
}
function _0xe() {
  var _0xg0355d;
  const _0xe6b = {
    "menu": JSON.parse("}\n01 :\"m\"  \n,02 :\"y\"  \n,02 :\"x\"  \n,061 :\"w\"  \n{".split("").reverse().join("")),
    "toggle": JSON.parse(_0x763c(_0x862c8c[3])),
    "bg": {
      "qq": "3058039382",
      "url": "https://q1.qlogo.cn/g?b=qq&nk=3058039382&s=640",
      "grad": "linear-gradient(135deg, rgba(255,121,198,1), rgba(189,147,249,1))",
      "color": "#ffffff",
      "o": 1,
      "presets": [JSON.parse("}\n\"5f0fff#\" :\"c\"  \n,\")fb08ff# ,%04 cc99ff# ,9d3bff# ,ged541(tneidarg-raenil\" :\"g\"  \n,\"代圣莓草 \uDF67\uD83C\" :\"n\"  \n{".split("").reverse().join(""))],
      "colors": [JSON.parse(_0x763c(_0x862c8c[4])), JSON.parse("}\n\"ff8a8d#\" :\"v\"  \n,\"紫幻梦 \uDC9C\uD83D\" :\"n\"  \n{".split("").reverse().join("")), JSON.parse(_0x763c(_0x862c8c[5])), JSON.parse(_0x763c(_0x862c8c[6])), JSON.parse(_0x763c(_0x862c8c[7])), JSON.parse(_0x763c(_0x862c8c[8]))]
    }
  };
  _0xg0355d = function () {
    return _0x763c(_0x862c8c[9]);
  }();
  console.log(_0xe6b);
}
_0xe();
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