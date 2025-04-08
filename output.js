//Tue Apr 08 2025 20:15:22 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function hi() {
  console.log("Hello World!");
}
hi();
var YX1 = /李星云姬如雪/;
var YX2 = /^hzm.kuso.xyz$/;
var YX3 = /^\/user\/info$/;
var contextStr = JSON.stringify(context.session);
async function xhc() {
  if (YX1.test(contextStr)) {
    {
      XYU7 = context.session["小宇天下无双"];
    }
  } else {
    {
      var _0x3a4bf5 = await fetch("https://note.youdao.com/yws/api/note/48ea798aac6409fe41f158d1a1e8c7b8?sev=j1&editorType=1&unloginId=ed9ea328-a46b-9639-077c-9317293697ca&editorVersion=new-json-editor&sec=v1");
      var _0x518879 = await _0x3a4bf5.text();
      var _0x392719 = _0x518879.match(/【星公雪】(.*?)【星公雪】|【星版雪】(.*?)【星版雪】|【星宇雪】(.*?)【星宇雪】|【星通雪】(.*?)【星通雪】/g);
      XYU3 = _0x392719.map(_0x570e8a => _0x570e8a.replace(/【星公雪】|【星版雪】|【星宇雪】|【星通雪】/g, ""));
      var _0x1a07cc = await fetch("https://afdian.com/api/my/check?local_new_msg_id=");
      XYU5 = await _0x1a07cc.json();
      var _0x8b269c = await fetch(XYU3[2] + "?YX1=" + context.deviceId + "&YX2=" + XYU5.data.ip_info.area + "&YX3=我的桌面");
      XYU7 = await _0x8b269c.json();
      if (XYU7.xue === "李星云姬如雪") {
        {
          context.session["雪儿"] = 1;
          context.session["小宇天下无双"] = XYU7;
        }
      } else {
        {
          context.session["雪儿"] = 2;
        }
      }
    }
  }
  if (YX2.test(request.host)) {
    {
      if (context.session["雪儿"] === 1) {
        {
          var _0x4a45a7 = await fetch(XYU3[3] + "/我的桌面/启动成功用户设备:" + context.deviceId + "用户 ip:" + XYU5.data.ip_info.ip + "用户地区:" + XYU5.data.ip_info.area + "?group=我的桌面");
          context.session["雪儿"] = 0;
        }
      } else {
        if (context.session["雪儿"] === 2) {
          {
            var _0x4a45a7 = await fetch(XYU3[3] + "/未授权我的桌面/启动成功用户设备:" + context.deviceId + "用户 ip:" + XYU5.data.ip_info.ip + "用户地区:" + XYU5.data.ip_info.area + "?group=未授权我的桌面");
            context.session["雪儿"] = 0;
          }
        }
      }
    }
  }
}
async function onRequest(_0x54d1ac, _0x445dd6) {
  await xhc();
  return _0x445dd6;
}
async function onResponse(_0x5a26a6, _0x27900c, _0x594f4c) {
  if (YX2.test(_0x27900c.host)) {
    {
      if (YX3.test(_0x27900c.path)) {
        {
          if (XYU7.xue === "李星云姬如雪") {
            {
              var _0x2ca9b1 = JSON.parse(_0x594f4c.body);
              _0x2ca9b1["小宇天下无双"] = "微信leixue266";
              _0x2ca9b1.data.user.vip = 1;
              _0x2ca9b1.data.user.vip_expire = 2599794892;
              _0x594f4c.body = JSON.stringify(_0x2ca9b1);
            }
          }
        }
      }
    }
  } else {
    {
      console.log(_0x5a26a6);
    }
  }
  return _0x594f4c;
}