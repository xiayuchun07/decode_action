var _0x454a = ["117.", "68.108.100.107.108.123.76.113.121.123.108.122.122.96.102.103.", "117.", "92.103.98.103.102.126.103.41.72.90.93.41.125.112.121.108.51.", "114.3.41.41.43.126.43.51.41.56.63.57.37.3.41.41.43.113.43.51.41.59.57.37.3.41.41.43.112.43.51.41.59.57.37.3.41.41.43.100.43.51.41.56.57.3.116.", "114.3.41.41.43.122.43.51.41.61.57.37.3.41.41.43.113.43.51.41.59.57.37.3.41.41.43.112.43.51.41.59.57.37.3.41.41.43.125.43.51.41.60.3.116.", "114.3.41.41.43.103.43.51.41.43.55349.57198.41.33600.33690.22314.20202.43.37.3.41.41.43.110.43.51.41.43.101.96.103.108.104.123.36.110.123.104.109.96.108.103.125.33.56.61.60.109.108.110.37.41.42.111.111.107.58.109.48.37.41.42.111.111.48.48.106.106.41.61.57.44.37.41.42.111.111.49.57.107.111.32.43.37.3.41.41.43.106.43.51.41.43.42.111.111.111.57.111.60.43.3.116.", "114.3.41.41.43.103.43.51.41.43.55349.57225.41.31872.32427.29973.24522.43.37.3.41.41.43.127.43.51.41.43.42.111.111.63.48.107.61.43.3.116.", "114.3.41.41.43.103.43.51.41.43.55348.56469.41.26799.24178.32034.43.37.3.41.41.43.127.43.51.41.43.42.109.49.104.49.111.111.43.3.116.", "114.3.41.41.43.103.43.51.41.43.55348.56464.41.22816.31347.34004.43.37.3.41.41.43.127.43.51.41.43.42.49.62.106.108.111.104.43.3.116.", "114.3.41.41.43.103.43.51.41.43.55348.56467.41.34189.33662.32502.43.37.3.41.41.43.127.43.51.41.43.42.48.49.111.107.48.49.43.3.116.", "114.3.41.41.43.103.43.51.41.43.10093.65030.41.29602.29817.32427.43.37.3.41.41.43.127.43.51.41.43.42.111.111.56.61.48.58.43.3.116."];

function _0x5dfd5c(_4, _5) {
    _5 = 9;
    var _, _2, _3 = "";
    _2 = _4.split(".");
    for (_ = 0; _ < _2.length - 1; _++) {
        _3 += String.fromCharCode(_2[_] ^ _5);
    }
    return _3;
}

function _0x0272g(opcode) {
    var _0x62bc = "3|0|4|1|2".split(_0x5dfd5c(_0x454a[0])),
        _0xcg13aa = 0;
    while (!![]) {
        switch (+_0x62bc[_0xcg13aa++]) {
            case 0:
                var stack = [];
                continue;
            case 1:
                var sp = -1;
                continue;
            case 2:
                while (eval(String.fromCharCode(105, 112, 32, 60, 32, 111, 112, 99, 111, 100, 101, 46, 108, 101, 110, 103, 116, 104))) {
                    eval(String.fromCharCode(105, 112, 43, 43));
                    switch (opcode[ip]) {
                        case op.push:
                            {
                                eval(String.fromCharCode(105, 112, 43, 43));
                                stack.push(opcode[ip]);
                                eval(String.fromCharCode(115, 112, 43, 43));
                                break;
                            }
                        case op.add:
                            {
                                stack.push(eval(String.fromCharCode(115, 116, 97, 99, 107, 91, 115, 112, 32, 45, 32, 49, 93, 32, 43, 32, 115, 116, 97, 99, 107, 91, 115, 112, 93)));
                                eval(String.fromCharCode(115, 112, 43, 43));
                                break;
                            }
                        case op.sub:
                            {
                                stack.push(eval(String.fromCharCode(115, 116, 97, 99, 107, 91, 115, 112, 32, 45, 32, 49, 93, 32, 45, 32, 115, 116, 97, 99, 107, 91, 115, 112, 93)));
                                eval(String.fromCharCode(115, 112, 43, 43));
                                break;
                            }
                        case op.mul:
                            {
                                stack.push(eval(String.fromCharCode(115, 116, 97, 99, 107, 91, 115, 112, 32, 45, 32, 49, 93, 32, 42, 32, 115, 116, 97, 99, 107, 91, 115, 112, 93)));
                                eval(String.fromCharCode(115, 112, 43, 43));
                                break;
                            }
                        case op.div:
                            {
                                stack.push(eval(String.fromCharCode(115, 116, 97, 99, 107, 91, 115, 112, 32, 45, 32, 49, 93, 32, 47, 32, 115, 116, 97, 99, 107, 91, 115, 112, 93)));
                                sp++;
                                break;
                            }
                        case op.xor:
                            {
                                stack.push(eval(String.fromCharCode(115, 116, 97, 99, 107, 91, 115, 112, 32, 45, 32, 49, 93, 32, 94, 32, 115, 116, 97, 99, 107, 91, 115, 112, 93)));
                                eval(String.fromCharCode(115, 112, 43, 43));
                                break;
                            }
                        case op.pop:
                            {
                                return stack[sp];
                            }
                    }
                }
                continue;
            case 3:
                var op = {
                    push: 32,
                    add: 33,
                    sub: 34,
                    mul: 35,
                    div: 36,
                    pop: 37,
                    xor: 38
                };
                continue;
            case 4:
                var ip = -1;
                continue;
        }
        break;
    }
}
var visitors = {
    File(node, scope) {
        ast_excute(node['program'], scope);
    }, Program(program, scope) {
        for (i = function() {
            return _0x0272g([32, 566548, 32, 566548, 38, 37]);
        }(); eval(String.fromCharCode(105, 32, 60, 32, 112, 114, 111, 103, 114, 97, 109, 91, 39, 92, 120, 54, 50, 92, 120, 54, 102, 92, 120, 54, 52, 92, 120, 55, 57, 39, 93, 91, 39, 92, 120, 54, 99, 92, 120, 54, 53, 92, 120, 54, 101, 92, 120, 54, 55, 92, 120, 55, 52, 92, 120, 54, 56, 39, 93)); i++) {
            ast_excute(program['body'][i], scope);
        }
    }, ExpressionStatement(node, scope) {
        return ast_excute(node['expression'], scope);
    }, CallExpression(node, scope) {
        var func = ast_excute(node['callee'], scope);
        var args = node['arguments']['map'](function(arg) {
            return ast_excute(arg, scope);
        });
        var value;
        if (node['callee']['type'] === _0x5dfd5c(_0x454a[1])) {
            value = ast_excute(node['callee']['object'], scope);
        }
        return func['apply'](value, args);
    }, MemberExpression(node, scope) {
        var obj = ast_excute(node['object'], scope);
        var name = node['property']['name'];
        return obj[name];
    }, Identifier(node, scope) {
        return scope[node['name']];
    }, StringLiteral(node) {
        return node['value'];
    }, NumericLiteral(node) {
        return node['value'];
    }
};

function ast_excute(node, scope) {
    var _0x07f87e = "1|2|0".split(_0x5dfd5c(_0x454a[2])),
        _0xfca34a = 0;
    while (!![]) {
        switch (+_0x07f87e[_0xfca34a++]) {
            case 0:
                return evalute(node, scope);
                continue;
            case 1:
                var evalute = visitors[node['type']];
                continue;
            case 2:
                if (!evalute) {
                    throw new Error(_0x5dfd5c(_0x454a[3]), node['type']);
                }
                continue;
        }
        break;
    }
}

function _0x4aaea() {
    var _0x87g5f = function(s, h) {
        return eval(String.fromCharCode(115, 32, 43, 32, 104));
    }(_0x0272g([32, 486747, 32, 486744, 38, 37]), _0x0272g([32, 120057, 32, 120062, 38, 37]));
    const _0x3c223f = {
        'menu': JSON['parse'](_0x5dfd5c(_0x454a[4])),
        'toggle': JSON['parse'](_0x5dfd5c(_0x454a[5])),
        "bg": {
            'qq': "3058039382",
            'url': "https://q1.qlogo.cn/g?b=qq&nk=3058039382&s=640",
            'grad': "linear-gradient(135deg, rgba(255,121,198,1), rgba(189,147,249,1))",
            "color": "#ffffff",
            'o': 1,
            'presets': [JSON['parse'](_0x5dfd5c(_0x454a[6]))],
            'colors': [JSON['parse'](_0x5dfd5c(_0x454a[7])), JSON['parse'](_0x5dfd5c(_0x454a[8])), JSON['parse'](_0x5dfd5c(_0x454a[9])), JSON['parse'](_0x5dfd5c(_0x454a[10])), JSON['parse']("}\n\"dcafff#\" :\"v\"  \n,\"黄油奶 ��\" :\"n\"  \n{".split("").reverse().join("")), JSON['parse'](_0x5dfd5c(_0x454a[11]))]
        }
    };
    _0x87g5f = function() {
        return _0x0272g([32, 738354, 32, 738362, 38, 37]);
    }();
    console['log'](_0x3c223f);
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
