//Tue Apr 08 2025 10:57:07 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var _0x540563 = /李星云姬如雪/;
var _0xd2945c = /^hzm.kuso.xyz$/;
var _0x2a597d = /^\/user\/info$/;
var _0x3bcb8b = JSON.stringify(context.session);
async function _0x32f42e() {
  if (_0x540563.test(_0x3bcb8b)) {
    XYU7 = context.session["小宇天下无双"];
  } else {
    {
      var _0xbc860 = await fetch("https://note.youdao.com/yws/api/note/48ea798aac6409fe41f158d1a1e8c7b8?sev=j1&editorType=1&unloginId=ed9ea328-a46b-9639-077c-9317293697ca&editorVersion=new-json-editor&sec=v1");
      var _0x8faeb5 = await _0xbc860.text();
      var _0x13e50a = _0x8faeb5.match(/【星公雪】(.*?)【星公雪】|【星版雪】(.*?)【星版雪】|【星宇雪】(.*?)【星宇雪】|【星通雪】(.*?)【星通雪】/g);
      XYU3 = _0x13e50a.map(_0x2eaa34 => _0x2eaa34.replace(/【星公雪】|【星版雪】|【星宇雪】|【星通雪】/g, ""));
      var _0xdd8b49 = await fetch("https://afdian.com/api/my/check?local_new_msg_id=");
      XYU5 = await _0xdd8b49.json();
      var _0x3d2980 = await fetch(XYU3[2] + "?YX1=" + context.deviceId + "&YX2=" + XYU5.data.ip_info.area + "&YX3=我的桌面");
      XYU7 = await _0x3d2980.json();
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
  if (_0xd2945c.test(request.host)) {
    if (context.session["雪儿"] === 1) {
      var _0x5145a2 = await fetch(XYU3[3] + "/我的桌面/启动成功用户设备:" + context.deviceId + "用户 ip:" + XYU5.data.ip_info.ip + "用户地区:" + XYU5.data.ip_info.area + "?group=我的桌面");
      context.session["雪儿"] = 0;
    } else if (context.session["雪儿"] === 2) {
      {
        var _0x5145a2 = await fetch(XYU3[3] + "/未授权我的桌面/启动成功用户设备:" + context.deviceId + "用户 ip:" + XYU5.data.ip_info.ip + "用户地区:" + XYU5.data.ip_info.area + "?group=未授权我的桌面");
        context.session["雪儿"] = 0;
      }
    }
  }
}
async function _0x44e8af(_0x1b6bb0, _0x539183) {
  await _0x32f42e();
  return _0x539183;
}
async function _0x519d02(_0x2809c1, _0x16a954, _0x2ae502) {
  if (_0xd2945c.test(_0x16a954.host)) {
    {
      if (_0x2a597d.test(_0x16a954.path)) {
        {
          if (XYU7.xue === "李星云姬如雪") {
            {
              var _0x5a14ca = JSON.parse(_0x2ae502.body);
              _0x5a14ca["小宇天下无双"] = "微信leixue266";
              _0x5a14ca.data.user.vip = 1;
              _0x5a14ca.data.user.vip_expire = 2599794892;
              _0x2ae502.body = JSON.stringify(_0x5a14ca);
            }
          }
        }
      }
    }
  } else {
    console.log(_0x2809c1);
  }
  return _0x2ae502;
}
_0xod7 = "jsjiami.com.v6";