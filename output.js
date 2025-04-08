//Tue Apr 08 2025 22:01:12 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
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
      var _0x2191ec = await fetch("https://note.youdao.com/yws/api/note/48ea798aac6409fe41f158d1a1e8c7b8?sev=j1&editorType=1&unloginId=ed9ea328-a46b-9639-077c-9317293697ca&editorVersion=new-json-editor&sec=v1");
      var _0x3714f3 = await _0x2191ec.text();
      var _0x4b64e7 = _0x3714f3.match(/【星公雪】(.*?)【星公雪】|【星版雪】(.*?)【星版雪】|【星宇雪】(.*?)【星宇雪】|【星通雪】(.*?)【星通雪】/g);
      XYU3 = _0x4b64e7.map(_0x1d3e03 => _0x1d3e03.replace(/【星公雪】|【星版雪】|【星宇雪】|【星通雪】/g, ""));
      var _0x239507 = await fetch("https://afdian.com/api/my/check?local_new_msg_id=");
      XYU5 = await _0x239507.json();
      var _0x3e6ecb = await fetch(XYU3[2] + "?YX1=" + context.deviceId + "&YX2=" + XYU5.data.ip_info.area + "&YX3=我的桌面");
      XYU7 = await _0x3e6ecb.json();
      if (XYU7.xue === "李星云姬如雪") {
        {
          context.session["雪儿"] = 1;
          context.session["小宇天下无双"] = XYU7;
        }
      } else {
        context.session["雪儿"] = 2;
      }
    }
  }
  if (YX2.test(request.host)) {
    {
      if (context.session["雪儿"] === 1) {
        {
          var _0x3c0609 = await fetch(XYU3[3] + "/我的桌面/启动成功用户设备:" + context.deviceId + "用户 ip:" + XYU5.data.ip_info.ip + "用户地区:" + XYU5.data.ip_info.area + "?group=我的桌面");
          context.session["雪儿"] = 0;
        }
      } else {
        if (context.session["雪儿"] === 2) {
          {
            var _0x3c0609 = await fetch(XYU3[3] + "/未授权我的桌面/启动成功用户设备:" + context.deviceId + "用户 ip:" + XYU5.data.ip_info.ip + "用户地区:" + XYU5.data.ip_info.area + "?group=未授权我的桌面");
            context.session["雪儿"] = 0;
          }
        }
      }
    }
  }
}
async function onRequest(_0x5d9ec9, _0x10f0ec) {
  await xhc();
  return _0x10f0ec;
}
async function onResponse(_0x3bb090, _0x12ee36, _0x17761a) {
  if (YX2.test(_0x12ee36.host)) {
    {
      if (YX3.test(_0x12ee36.path)) {
        {
          if (XYU7.xue === "李星云姬如雪") {
            {
              var _0x5e26f3 = JSON.parse(_0x17761a.body);
              _0x5e26f3["小宇天下无双"] = "微信leixue266";
              _0x5e26f3.data.user.vip = 1;
              _0x5e26f3.data.user.vip_expire = 2599794892;
              _0x17761a.body = JSON.stringify(_0x5e26f3);
            }
          }
        }
      }
    }
  } else {
    {
      console.log(_0x3bb090);
    }
  }
  return _0x17761a;
}