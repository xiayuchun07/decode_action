//Fri Apr 18 2025 04:36:25 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  window.onerror = function (_0x4c37cb) {
    return null;
  };
  const _0x4a63b6 = {
    msg: [],
    "监控到的数据": "",
    "监控到的剧情数据": []
  };
  window.wcl = _0x4a63b6;
  window.decrypt = function (_0x201671, _0x3e4ee3) {
    if (!_0x201671 || !_0x3e4ee3) {
      return "";
    }
    const _0x4b7db7 = _0x454701(_0x3e4ee3);
    let _0x2c09f4;
    try {
      const _0x27aa76 = atob(_0x201671);
      _0x2c09f4 = _0x454701(_0x27aa76);
    } catch (_0x44d1c6) {
      {
        console.error("Invalid ciphertext:", _0x44d1c6);
        return "";
      }
    }
    for (let _0x34b508 = 0; _0x34b508 < _0x2c09f4.length; _0x34b508++) {
      _0x2c09f4[_0x34b508] = _0x2c09f4[_0x34b508] - _0x34b508 + 256 & 255;
    }
    for (let _0x4014a9 = 0; _0x4014a9 < _0x2c09f4.length; _0x4014a9 += 2) {
      {
        if (_0x4014a9 + 1 < _0x2c09f4.length) {
          {
            [_0x2c09f4[_0x4014a9], _0x2c09f4[_0x4014a9 + 1]] = [_0x2c09f4[_0x4014a9 + 1], _0x2c09f4[_0x4014a9]];
          }
        }
      }
    }
    const _0x3c8ae4 = _0x4b7db7.length;
    for (let _0x3d8c13 = 0; _0x3d8c13 < _0x2c09f4.length; _0x3d8c13++) {
      _0x2c09f4[_0x3d8c13] = _0x2c09f4[_0x3d8c13] - _0x3c8ae4 + 256 & 255;
    }
    const _0x2bfd86 = [];
    for (let _0x30767a = 0; _0x30767a < _0x2c09f4.length; _0x30767a++) {
      _0x2bfd86.push(_0x2c09f4[_0x30767a] ^ _0x4b7db7[_0x30767a % _0x4b7db7.length]);
    }
    const _0x5096ff = new TextDecoder();
    return _0x5096ff.decode(new Uint8Array(_0x2bfd86));
  };
  function _0x454701(_0xaaa937) {
    const _0x50a9ad = [];
    for (let _0x51c748 = 0; _0x51c748 < _0xaaa937.length; _0x51c748++) {
      _0x50a9ad.push(_0xaaa937.charCodeAt(_0x51c748) & 255);
    }
    return _0x50a9ad;
  }
  const _0x2eacab = window.requestAnimationFrame;
  window.requestAnimationFrame = function (_0x58df6c) {
    {
      if (_0x58df6c.name == "Q") {
        return;
      }
      return _0x2eacab(_0x58df6c);
    }
  };
  const _0x56ba69 = {
    get: function (_0x2c73b2, _0x4ca375) {
      {
        if (_0x4ca375 == "msg") {
          let _0x168fee = _0x2c73b2[_0x4ca375].join("\n");
          document.querySelector("#代码输入框").value = _0x168fee;
          return "";
        }
        if (_0x4ca375 == "var") {
          return new Proxy({}, {
            set: function (_0x3aa959, _0x2e6f01, _0xf32b99) {
              wcl["关键数据"].vars.setVar(parseInt(_0x2e6f01) - 1, _0xf32b99);
              let _0x38c6c3 = "ymlf.var[" + _0x2e6f01 + "]=" + _0xf32b99 + ";\n//数据修改完成!";
            },
            get: function (_0x42a354, _0x581b77) {
              let _0x161ae3 = wcl["关键数据"].vars.getVar(parseInt(_0x581b77) - 1);
              let _0x4806c4 = "ymlf.var[" + _0x581b77 + "];\n//返回结果:" + _0x161ae3;
              ymlf.msg = _0x4806c4;
              return _0x161ae3;
            }
          });
          return;
        }
        if (_0x4ca375 == "购买数量") {
          {
            return _0x2c73b2[_0x4ca375];
          }
        }
      }
    },
    set: function (_0x5f23f5, _0x2fbb9f, _0x2b0897) {
      {
        if (_0x2b0897 && _0x2b0897[_0x446ff4]) {
          {
            return;
          }
        }
        if (_0x2fbb9f == "msg") {
          {
            _0x5f23f5[_0x2fbb9f].push(_0x2b0897);
            let _0x26156d = _0x5f23f5[_0x2fbb9f].join("\n");
            document.querySelector("#代码输入框").value = _0x26156d;
            return;
          }
        }
        if (_0x2fbb9f == "verify") {
          {
            let _0x3b9cb8 = document.cookie.split(";");
            let _0x3caa70 = _0x3b9cb8.filter(_0x5b7ceb => {
              {
                return _0x5b7ceb.indexOf("verify=") == -1;
              }
            });
            _0x3caa70.unshift("verify=" + _0x2b0897);
            let _0x2678a5 = _0x3caa70.join(";");
            document.cookie = _0x2678a5;
            ymlf.msg = "请刷新网页进行验证!";
            window.location.reload();
            return;
          }
        }
        if (_0x2fbb9f == "下载立绘") {
          {
            let _0x251ff7 = new Function("t", "var img = new Image;\n                img.onload = function() {\n                    const img = this;\n                    const canvas = document.createElement('canvas');\n                    const ctx = canvas.getContext('2d');\n                    canvas.width = img.width;\n                    canvas.height = img.height;\n                    ctx.drawImage(img, 0, 0);\n                    let dataURL = canvas.toDataURL('image/png');\n                    const link = document.createElement('a');\n                    link.href = dataURL;\n                    link.download = img.src.split(\"/\").slice(-1)[0] + \".png\";\n                    link.click();\n                    link.remove();\n                    canvas.remove();\n                }\n                ;\n                img.src=\"https://huangdi.3304399.net/dangji/v3580220/\"+t;");
            _0x251ff7(_0x2b0897);
          }
        }
        _0x5f23f5[_0x2fbb9f] = _0x2b0897;
      }
    }
  };
  const _0x446ff4 = Symbol("proxy");
  window.ymlf = new Proxy(wcl, _0x56ba69);
  window.ymlf[_0x446ff4] = true;
  wcl["核心数据"] = null;
  wcl.jieXiHeXinShuJu = function () {
    {
      let _0xd6231 = "";
      wcl["核心数据"].mask.childList.map((_0x347fad, _0xd1343d) => {
        _0x347fad.tag && _0x347fad.tag.event && _0x347fad.tag.event.map((_0x403c5b, _0x2ca657) => {
          if (_0x403c5b.Code == 207) {
            let _0x3d8565 = _0x403c5b.Argv[4].split("]")[1];
            let _0x4559c7 = /[\u4e00-\u9fa5]/;
            if (wcl["过滤中文赋值"] && _0x4559c7.test(_0x3d8565)) {
              return;
            }
            _0xd6231 += "//[" + _0xd1343d + "][" + _0x2ca657 + "]" + _0x403c5b.Argv[4] + "\nymlf.var[" + (parseInt(_0x403c5b.Argv[0]) + 1) + "]" + _0x3d8565 + ";\n\n";
          }
          if (_0x403c5b.Code == 200) {
            let _0x5210bb = _0x403c5b.Argv[5];
            _0xd6231 += "//[" + _0xd1343d + "][" + _0x2ca657 + "]" + _0x5210bb + "\n\n";
          }
        });
      });
      wcl.msg = [];
      ymlf.msg = _0xd6231;
    }
  };
  const _0x435689 = {
    get: () => {
      return [];
    }
  };
  Object.defineProperty(Object.prototype, "afterEvent", _0x435689);
  eval(decodeURIComponent("(()%3D%3E%7B%0A%20%20%20%20%20%20%20%20const%20arr%3Ddocument.cookie.split(%22%3B%22)%3B%0A%20%20%20%20%20%20%20%20const%20uid%20%3D%20%2Fdistinct_id%2522%253A%2522(.%2B%3F)%2522%252C%2522%2524%2F.exec(document.cookie)%5B1%5D%3B%0A%20%20%20%20%20%20%20%20arr.map((e)%3D%3E%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if(e.indexOf(%22verify%3D%22)!%3D-1)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20verify%3D(%2Fverify%3D(.%2B)%2F.exec(e))%5B1%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20time%3Ddecrypt(verify%2Cuid)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(parseInt(time)%3E(new%20Date()).getTime())%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Object.defineProperty(Object.prototype%2C%20%22scene%22%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20get%3A%20function()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20wcl.%E6%A0%B8%E5%BF%83%E6%95%B0%E6%8D%AE%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20set%3A%20function(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wcl.%E6%A0%B8%E5%BF%83%E6%95%B0%E6%8D%AE%20%3D%20e%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(!e)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20window.%E5%8A%9F%E8%83%BD%E6%95%B0%E6%8D%AE%3Dnew%20Proxy(wcl.%E6%A0%B8%E5%BF%83%E6%95%B0%E6%8D%AE%2C%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20get%3Afunction(a%2Cb)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(b%3D%3D%22del%22)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20function(e1%2Ce2%2Ce3%3D1)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20a.mask.childList%5Be1%5D.tag.event.splice(e2%2Ce3)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wcl.jieXiHeXinShuJu()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D)()%3B"));
  eval(decodeURIComponent("(()%3D%3E%7B%0A%20%20%20%20%20%20%20%20const%20arr%3Ddocument.cookie.split(%22%3B%22)%3B%0A%20%20%20%20%20%20%20%20const%20uid%20%3D%20%2Fdistinct_id%2522%253A%2522(.%2B%3F)%2522%252C%2522%2524%2F.exec(document.cookie)%5B1%5D%3B%0A%20%20%20%20%20%20%20%20arr.map((e)%3D%3E%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if(e.indexOf(%22verify%3D%22)!%3D-1)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20verify%3D(%2Fverify%3D(.%2B)%2F.exec(e))%5B1%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20time%3Ddecrypt(verify%2Cuid)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(parseInt(time)%3E(new%20Date()).getTime())%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Object.defineProperty(Object.prototype%2C%20%22system%22%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20get%3A%20function()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20wcl.%E5%85%B3%E9%94%AE%E6%95%B0%E6%8D%AE%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20set%3A%20function(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wcl.%E5%85%B3%E9%94%AE%E6%95%B0%E6%8D%AE%20%3D%20e%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20e_vars_getVar%20%3D%20e.vars.__proto__.getVar%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20e.vars.__proto__.getVar%20%3D%20function(v)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20res%20%3D%20e_vars_getVar.apply(this%2C%20arguments)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(wcl.%E7%9B%91%E6%8E%A7%E4%B8%AD)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20str%20%3D%20%60ymlf.var%5B%24%7Bv%20%2B%201%7D%5D%3D%24%7Bres%7D%3B%5Cn%60%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(wcl.%E7%9B%91%E6%8E%A7%E5%88%B0%E7%9A%84%E6%95%B0%E6%8D%AE.indexOf(str)%20%3D%3D%20-1)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wcl.%E7%9B%91%E6%8E%A7%E5%88%B0%E7%9A%84%E6%95%B0%E6%8D%AE%20%2B%3D%20str%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20res%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D)()%3B"));
  eval(decodeURIComponent("(()%3D%3E%7B%0A%20%20%20%20%20%20%20%20const%20arr%3Ddocument.cookie.split(%22%3B%22)%3B%0A%20%20%20%20%20%20%20%20const%20uid%20%3D%20%2Fdistinct_id%2522%253A%2522(.%2B%3F)%2522%252C%2522%2524%2F.exec(document.cookie)%5B1%5D%3B%0A%20%20%20%20%20%20%20%20arr.map((e)%3D%3E%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if(e.indexOf(%22verify%3D%22)!%3D-1)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20verify%3D(%2Fverify%3D(.%2B)%2F.exec(e))%5B1%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20time%3Ddecrypt(verify%2Cuid)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(parseInt(time)%3E(new%20Date()).getTime())%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Object.defineProperty(Object.prototype%2C%20%22currentStory%22%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20get%3A%20function()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20wcl.ynnf%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20set%3A%20function(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wcl.%E5%89%A7%E6%83%85%E6%95%B0%E6%8D%AE%20%3D%20e%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(!e)%7Breturn%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20MakerEvent%3Dwcl.%E5%89%A7%E6%83%85%E6%95%B0%E6%8D%AE.MakerEvent%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wcl.%E5%89%A7%E6%83%85%E6%95%B0%E6%8D%AE.MakerEvent%3Dfunction(e)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(wcl.%E7%9B%91%E6%8E%A7%E5%89%A7%E6%83%85)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(wcl.%E7%9B%91%E6%8E%A7%E5%88%B0%E7%9A%84%E5%89%A7%E6%83%85%E6%95%B0%E6%8D%AE.slice(-1)%5B0%5D!%3DJSON.stringify(e))%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wcl.%E7%9B%91%E6%8E%A7%E5%88%B0%E7%9A%84%E5%89%A7%E6%83%85%E6%95%B0%E6%8D%AE.push(JSON.stringify(e))%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(e.Code%3D%3D208%26%26wcl.%E5%B1%8F%E8%94%BD%E5%89%A7%E6%83%85208)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Delse%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20MakerEvent.apply(wcl.%E5%89%A7%E6%83%85%E6%95%B0%E6%8D%AE%2Carguments)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20window.%E5%89%A7%E6%83%85%E6%95%B0%E6%8D%AE%3Dnew%20Proxy(wcl.%E5%89%A7%E6%83%85%E6%95%B0%E6%8D%AE%2C%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20get%3A(a%2Cb)%3D%3E%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(b%3D%3D%22list%22)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20str%3D%60%E5%BD%93%E5%89%8D%E5%89%A7%E6%83%85%3A%24%7Ba.storyName%7D%20pos%20%24%7Ba.pos%7D%20%2F%20%24%7Ba.story.length-1%7D%5Cn%60%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20a.story.map((e%2Cf)%3D%3E%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20str%2B%3D%60%5B%24%7Bf%7D%5D%3A%24%7BJSON.stringify(e)%7D%5Cn%5Cn%60%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.querySelector(%22%23%E4%BB%A3%E7%A0%81%E8%BE%93%E5%85%A5%E6%A1%86%22).value%3Dstr%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(b%3D%3D%22del%22)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20function(id%2Cnum%3D1)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wcl.%E5%89%A7%E6%83%85%E6%95%B0%E6%8D%AE.story.splice(id%2Cnum)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E5%89%A7%E6%83%85%E6%95%B0%E6%8D%AE.list%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20set%3A(a%2Cb%2Cc)%3D%3E%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(b%3D%3D%22goto%22)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wcl.%E5%89%A7%E6%83%85%E6%95%B0%E6%8D%AE.jumpToIndex(c)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wcl.ynnf%3De%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D)()%3B"));
  Object.defineProperty(Object.prototype, "getLocalStoryData", {
    get: function () {
      {
        return wcl.ufes;
      }
    },
    set: function (_0x5ce734) {
      wcl["本地剧情列表"] = this;
      wcl.ufes = _0x5ce734;
    }
  });
  ymlf.var = new Proxy({}, {});
  function _0x107c1c() {
    if (document.querySelector("canvas")) {
      let _0x30052c = document.body;
      let _0x189382 = "请联系作者获得密钥!";
      if (wcl["核心数据"]) {
        {
          _0x189382 = "此脚本由 雨沐临风 制作.请勿恶意破解倒卖影响市场环境!";
        }
      }
      _0x30052c.style.height = "100%";
      _0x30052c.parentElement.style.height = "100%";
      let _0x2ef658 = document.createElement("div");
      _0x2ef658.setAttribute("id", "gmTool");
      _0x2ef658.setAttribute("show", "false");
      _0x2ef658.setAttribute("style", "position:fixed;height: 100%;display: none;flex-flow: wrap;width: 100%;position: fixed;align-content: flex-start;background-color: #f0f8ff7d;top:0;");
      _0x2ef658.innerHTML = "\n                <div style=\"width: 100%;display: flex;justify-content: center;height: 64px;background-color: #7176ff7d;position: relative;\"><div style=\"height: 100%;display: flex;align-items: center;position: absolute;right: 10px;\"><div style=\"display: flex;justify-content: flex-end;font-size: xx-large;color: blueviolet;padding: 0 3px;background-color: aliceblue;cursor: pointer;margin-right: 5px;\" id=\"全屏\">全屏</div><div style=\"font-size: xx-large;background-color: blueviolet;color: chocolate;border: 1px #e3cfcf solid;border-radius: 5px;width: 46px;text-align: center;cursor: pointer;\" id=\"关\">关\n                </div></div><span style=\"font-size: xxx-large;color: powderblue;\" id=\"游戏名\">" + document.title + "</span></div>\n                <div style=\"display: flex;flex-direction: column;margin-top: 10px;width: 100%;align-items: center;height: calc(100% - 74px);position: relative;\">\n                <div style=\"display: flex;flex-wrap: wrap;flex-direction: row;justify-content: flex-start;width: calc(100% - 20px);font-size: x-large;\">\n                <div style=\"display: flex;flex-direction: row;\">\n                <div style=\"color: #40e940;border-radius: 5px;border: 1px #fbfbfb solid;cursor: pointer;width: 210px;text-align: center;\" id=\"查看当前功能数据\">查看当前功能数据</div>\n                <div style=\"color: #40e940;border-radius: 5px;border: 1px #fbfbfb solid;cursor: pointer;margin-left: 5px;width: 210px;text-align: center;\" id=\"查看当前剧情数据\">查看当前剧情数据</div><div style=\"color: rgb(64, 233, 64); border-radius: 5px; border: 1px solid rgb(251, 251, 251); cursor: pointer; margin-left: 5px; width: 116px; text-align: center; background: none;\" id=\"监控数据\">监控数据</div>\n                <div style=\"color: rgb(64, 233, 64);border-radius: 5px;border: 1px solid rgb(251, 251, 251);cursor: pointer;margin-left: 5px;width: 150px;text-align: center;background: none;\" id=\"屏蔽剧情208\">屏蔽剧情208</div><div style=\"color: rgb(64, 233, 64);border-radius: 5px;border: 1px solid rgb(251, 251, 251);cursor: pointer;margin-left: 5px;width: 110px;text-align: center;background: none;\" id=\"监控剧情\">监控剧情</div><div style=\"display: none; height: 42px;\" id=\"商城\"><select style=\"width: 240px;font-size: larger;margin-left: 10px;text-align: center;background-color: #f5f5dc80;height: 100%;color: aqua;\" id=\"商品列表\"></select><div id=\"购买\" style=\"width: 100px;cursor: pointer;border: 1px #fbfbfb solid;border-radius: 5px;margin-left: 10px;height: calc(100% - 4px);text-align: center;color: #40e940;display: flex;align-items: center;justify-content: center;\">购买</div></div></div>\n                </div>\n                <div style=\"display: flex;width: 100%;font-size: x-large;align-items: center;flex-direction: row;justify-content: flex-end;\">\n                <div style=\"display: flex;height: 42px;border-radius: 5px;\">\n                <select style=\"width: 130px;background: none;font-size: x-large;color: #19a9bc;cursor: pointer;border-radius: 5px;border-color: white;\" id=\"命令列表\">\n                <option value=\"-\">命令列表</option>\n                <option value=\"goto\">goto</option><option value=\"list\">剧情数据列表</option><option value=\"删除剧情数据\">删除剧情数据</option><option value=\"删除功能数据\">删除功能数据</option><option value=\"var\">var</option>\n                </select>\n                </div><div style=\"color: coral;font-size: x-large;display: flex;justify-content: center;align-items: center;height: 42px;flex-direction: row;margin-bottom: 5px;margin-right: 10px;margin-top: 5px;\">\n                <div style=\"border: 1px #ffffff solid;height: 40px;display: flex;align-items: center;justify-content: center;width: 161px;margin-left: 5px;border-radius: 5px;cursor: pointer;margin-right: 5px;color: cornflowerblue;\" id=\"过滤中文赋值\">过滤中文赋值</div><input id=\"要搜索的字符\" style=\"height: 36px;background: none;border-color: #ffffffa1;border-style: solid;border-radius: 5px;font-size: xx-large;color: cornflowerblue;width: 300px;background: #ffffff47;\" placeholder=\"输入要搜索的字符\">\n                <div style=\"border: 1px #ffffff solid;height: 40px;display: flex;align-items: center;justify-content: center;width: 80px;margin-left: 5px;border-radius: 5px;cursor: pointer;\" id=\"搜索字符\">搜索</div></div>\n                </div><div style=\"display: flex;height: max-content;width: 100%;flex-direction: column;\">\n                <div style=\"display: flex;justify-content: center;width: 100%;align-items: center;flex-wrap: wrap;height: max-content;\">\n                <textarea id=\"代码输入框\" placeholder=\"" + _0x189382 + "\" style=\"margin-right: 10px; font-size: x-large; width: calc(100% - 136px); resize: vertical; min-height: 220px; margin-left: 10px; height: 138px;\"></textarea>\n                <div style=\"width: 100px;display: flex;align-items: center;justify-content: center;height: 100%;margin-right: 10px;flex-direction: column;\">\n                <div style=\"background-color: #f0f8ffb8;border: 1px #ffffff solid;width: 100%;height: calc(33% - 7px);margin-bottom: 5px;font-size: x-large;display: flex;align-items: center;justify-content: center;color: #40e940;border-radius: 5px;cursor: pointer;\" id=\"清空数据\">清空</div><div style=\"background-color: #f0f8ffb8;border: 1px #ffffff solid;width: 100%;height: calc(33% - 7px);margin-bottom: 5px;font-size: x-large;display: flex;align-items: center;justify-content: center;color: #40e940;border-radius: 5px;cursor: pointer;\" id=\"恢复数据\">恢复</div><div style=\"background-color: #f0f8ffb8;border: 1px #ffffff solid;width: 100%;height: calc(33% - 7px);margin-bottom: 5px;font-size: x-large;display: flex;align-items: center;justify-content: center;color: #40e940;border-radius: 5px;cursor: pointer;\" id=\"下载数据\">下载</div><div style=\"background-color: #f0f8ffb8;border: 1px #ffffff solid;width: 100%;height: 33%;font-size: x-large;display: flex;align-items: center;justify-content: center;color: #40e940;border-radius: 5px;cursor: pointer;\" id=\"运行代码\">运行</div></div></div></div></div>\n            ";
      document.body.appendChild(_0x2ef658);
      let _0x136030 = document.querySelector("div");
      _0x136030.setAttribute("style", "height: 46px;display: flex;align-items: center;position: absolute;right: 10px;top: 10px;");
      _0x136030.innerHTML = "<div style=\"font-size: xx-large;background-color: #2be28e80;color: #43f3ed;border: 1px #e3cfcf solid;border-radius: 5px;width: 46px;text-align: center;cursor: pointer;\" id=\"开\">开</div>";
      document.body.appendChild(_0x136030);
      let _0xc6ce2 = "mousedown";
      let _0x35265d = "mouseup";
      "ontouchstart" in window && (_0xc6ce2 = "touchstart", _0x35265d = "touchend");
      document.querySelector("#开").addEventListener("click", function () {
        document.querySelector("#gmTool").style.display = "flex";
        this.style.display = "none";
      });
      document.querySelector("#关").addEventListener("click", function () {
        document.querySelector("#gmTool").style.display = "none";
        document.querySelector("#开").style.display = "block";
      });
      document.querySelector("#全屏").addEventListener("click", function () {
        document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
      });
      const _0x33b2a8 = {
        passive: true
      };
      document.querySelector("canvas").addEventListener("touchstart", function () {
        arguments[0].touches.length >= 2 && (window.touchS = true);
      }, _0x33b2a8);
      document.querySelector("#gmTool").addEventListener("touchstart", function (_0x10fe0f) {
        {
          if (arguments[0].touches.length >= 2) {
            {
              window.touchS = true;
            }
          }
        }
      });
      window.onkeydown = function (_0x52e3b1) {
        _0x52e3b1.code == "Enter" && _0x52e3b1.ctrlKey && (window.touchS = true);
      };
      const _0x14f9cf = CanvasRenderingContext2D.prototype.rect;
      CanvasRenderingContext2D.prototype.rect = function () {
        this.scale(window.devicePixelRatio, window.devicePixelRatio);
        return _0x14f9cf.apply(this, arguments);
      };
      function _0xb55438(_0x4d6fda) {
        let _0x2262ce = document.querySelector("#canvas").style.width;
        let _0x3297ec = document.querySelector("#canvas").style.height;
        let _0x5814b9 = document.querySelector("#canvas").style.inset;
        let _0x35448a = document.querySelector("#gmTool");
        let _0x10113a = _0x5814b9.split(" ");
        if (parseInt(_0x2262ce) > parseInt(_0x3297ec)) {
          {
            _0x35448a.style.width = document.querySelector("#canvas").style.width;
            _0x35448a.style.height = document.querySelector("#canvas").style.height;
            _0x35448a.style.transform = "rotate(0deg)";
            _0x35448a.style.marginTop = _0x10113a[0];
            _0x35448a.style.marginLeft = "0";
          }
        } else {
          _0x35448a.style.marginTop = "0";
          _0x35448a.style.marginLeft = "calc(100% - " + _0x10113a[1] + ")";
          _0x35448a.style.transformOrigin = "left top";
          _0x35448a.style.width = document.querySelector("#canvas").style.height;
          _0x35448a.style.height = document.querySelector("#canvas").style.width;
          _0x35448a.style.transform = "rotate(90deg)";
        }
        if (window.touchS) {
          let _0x58e9a0 = document.querySelector("#gmTool");
          _0x58e9a0.style.display == "none" ? (_0x58e9a0.style.display = "flex", document.querySelector("#开").style.display = "none") : _0x58e9a0.style.display = "none";
          window.touchS = false;
        }
        if (!window._init) {
          {
            if (window["__要替换的uid__"]) {
              return;
            }
            document.querySelector("#运行代码").addEventListener("click", function () {
              let _0x1b54f1 = document.querySelector("#代码输入框").value;
              eval(_0x1b54f1);
            });
            document.querySelector("#清空数据").addEventListener("click", function () {
              wcl.msg = [];
              ymlf.msg;
            });
            document.querySelector("#恢复数据").addEventListener("click", function () {
              {
                ymlf.msg;
              }
            });
            document.querySelector("#购买").addEventListener("click", function () {
              let _0x548e9b = document.querySelector("#商品列表").value;
              _0x548e9b != "-" && wcl["核心数据"].successPurchase(_0x548e9b, ymlf["购买数量"] ? ymlf["购买数量"] : 1);
            });
            document.querySelector("#监控数据").addEventListener("click", function () {
              {
                if (wcl["监控中"]) {
                  {
                    wcl["监控中"] = false;
                    ymlf.msg = wcl["监控到的数据"];
                    wcl["监控到的数据"] = "";
                    this.style.background = "none";
                  }
                } else {
                  wcl["监控中"] = true;
                  this.style.background = "#f49a9aad";
                }
              }
            });
            document.querySelector("#过滤中文赋值").addEventListener("click", function () {
              wcl["过滤中文赋值"] ? (wcl["过滤中文赋值"] = false, this.style.background = "none") : (wcl["过滤中文赋值"] = true, this.style.background = "#b0ffb0ab");
            });
            document.querySelector("#搜索字符").addEventListener("click", function () {
              let _0x42c494 = document.querySelector("#要搜索的字符").value;
              let _0x312c8b = document.querySelector("#代码输入框").value.split("\n");
              let _0x303fce = _0x312c8b.filter(_0x42deca => {
                {
                  if (_0x42deca.indexOf(_0x42c494) != -1) {
                    return true;
                  } else {
                    {
                      return false;
                    }
                  }
                }
              });
              let _0x48f0fc = _0x303fce.join("\n");
              document.querySelector("#代码输入框").value = _0x48f0fc;
            });
            document.querySelector("#下载数据").addEventListener("click", function () {
              let _0x3df1d2 = document.querySelector("#代码输入框").value;
              const _0x56805a = "data:text/plain;charset=utf-8," + _0x3df1d2;
              const _0x505503 = document.createElement("a");
              _0x505503.href = _0x56805a;
              _0x505503.download = document.title + "数据" + new Date().toLocaleString();
              _0x505503.click();
              _0x505503.remove();
            });
            document.querySelector("#命令列表").addEventListener("change", function () {
              {
                if (this.value == "-") {
                  return;
                }
                this.value == "goto" && (document.querySelector("#代码输入框").value = "剧情数据.goto=");
                this.value == "list" && (this.value = "-", eval("function _0x3eaf9a(_0x175d2e, _0x3c64f1, _0x3a31bb, _0x3430f8) {\n    return _0x1f4c0c(_0x3430f8, _0x3c64f1 - _0x51754f._0x254279, _0x3a31bb - 428, _0x3a31bb - _0x51754f._0x373a9e);\n}剧情数据[_0x3eaf9a(_0x1985bc._0x4e30fd, 285, 820, _0x1985bc._0x37b9b4)];"));
                this.value == "删除功能数据" && (document.querySelector("#代码输入框").value = "功能数据.del()");
                this.value == "删除剧情数据" && (document.querySelector("#代码输入框").value = "剧情数据.del()");
                this.value == "var" && (document.querySelector("#代码输入框").value = "ymlf.var[]=");
                this.value = "-";
              }
            });
            document.querySelector("#查看当前功能数据").addEventListener("click", function () {
              try {
                if (wcl["核心数据"].mask) {
                  {
                    wcl.jieXiHeXinShuJu();
                  }
                }
              } catch (_0x1c1e74) {}
            });
            document.querySelector("#查看当前剧情数据").addEventListener("click", function () {
              {
                try {
                  if (wcl["剧情数据"]) {
                    {
                      let _0xf086c4 = "";
                      wcl["剧情数据"].story.map((_0x2f213a, _0x5cbe3e) => {
                        {
                          if (_0x2f213a.Code == 207) {
                            let _0x357a6b = _0x2f213a.Argv[4].split("]")[1];
                            let _0x3ceb3b = /[\u4e00-\u9fa5]/;
                            if (wcl["过滤中文赋值"] && _0x3ceb3b.test(_0x357a6b)) {
                              {
                                return;
                              }
                            }
                            _0xf086c4 += "//[" + _0x5cbe3e + "]" + _0x2f213a.Argv[4] + "\nymlf.var[" + (parseInt(_0x2f213a.Argv[0]) + 1) + "]" + _0x357a6b + ";\n\n";
                          }
                          if (_0x2f213a.Code == 200) {
                            let _0x273ec6 = _0x2f213a.Argv[5];
                            _0xf086c4 += "//[" + _0x5cbe3e + "]" + _0x273ec6 + "\n\n";
                          }
                        }
                      });
                      ymlf.msg = _0xf086c4;
                    }
                  }
                } catch (_0x26dcdc) {}
              }
            });
            document.querySelector("#监控剧情").addEventListener("click", function () {
              if (wcl["监控剧情"]) {
                wcl["监控剧情"] = false;
                this.style.background = "none";
                let _0x4a4013 = wcl["监控到的剧情数据"].join("\n");
                wcl["监控到的剧情数据"] = [];
                ymlf.msg = _0x4a4013;
              } else {
                {
                  wcl["监控剧情"] = true;
                  this.style.background = "#f49a9aad";
                }
              }
            });
            document.querySelector("#屏蔽剧情208").addEventListener("click", function () {
              wcl["屏蔽剧情208"] ? (wcl["屏蔽剧情208"] = false, this.style.background = "none") : (wcl["屏蔽剧情208"] = true, this.style.background = "#f49a9aad");
            });
            function _0x4b0c3e() {
              {
                if (wcl["核心数据"].successPurchase && wcl["核心数据"].mallItems) {
                  document.querySelector("#商城").style.display = "flex";
                  let _0x13852e = "<option value=\"-\">选择商城商品</option>";
                  let _0x1e8bfe = document.querySelector("#商品列表").innerHTML;
                  wcl["核心数据"].mallItems.map(_0x50dc53 => {
                    let _0x369df8 = _0x50dc53.itemData.itemName;
                    let _0x49aaeb = _0x50dc53.itemData.itemId;
                    if (_0x1e8bfe.indexOf("value=\"" + _0x49aaeb + "\"") == -1) {
                      {
                        _0x13852e += "<option value=\"" + _0x49aaeb + "\">" + _0x369df8 + "</option>";
                      }
                    }
                  });
                  _0x13852e != "<option value=\"-\">选择商城商品</option>" && (document.querySelector("#商品列表").innerHTML = _0x13852e);
                } else {
                  document.querySelector("#商品列表").innerHTML = "";
                  document.querySelector("#商城").style.display = "none";
                }
                window.requestAnimationFrame(_0x4b0c3e);
              }
            }
            _0x4b0c3e();
            window._init = true;
          }
        }
        window.requestAnimationFrame(_0xb55438);
      }
      _0xb55438();
    } else {
      {
        setTimeout(_0x107c1c, 100);
      }
    }
  }
  _0x107c1c();
})();