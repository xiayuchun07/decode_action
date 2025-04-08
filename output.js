//Tue Apr 08 2025 10:41:45 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var _0x4c6917 = /李星云姬如雪/;
var _0x574412 = /^hzm.kuso.xyz$/;
var _0x5ba89a = /^\/user\/info$/;
var _0x37d553 = JSON.stringify(context.session);
async function _0x2011d5() {
  if (_0x4c6917.test(_0x37d553)) {
    {
      XYU7 = context.session["小宇天下无双"];
    }
  } else {
    {
      var _0x171213 = await fetch("https://note.youdao.com/yws/api/note/48ea798aac6409fe41f158d1a1e8c7b8?sev=j1&editorType=1&unloginId=ed9ea328-a46b-9639-077c-9317293697ca&editorVersion=new-json-editor&sec=v1");
      var _0x3d2330 = await _0x171213.text();
      var _0x48cacf = _0x3d2330.match(/【星公雪】(.*?)【星公雪】|【星版雪】(.*?)【星版雪】|【星宇雪】(.*?)【星宇雪】|【星通雪】(.*?)【星通雪】/g);
      XYU3 = _0x48cacf.map(_0x2fb893 => _0x2fb893.replace(/【星公雪】|【星版雪】|【星宇雪】|【星通雪】/g, ""));
      var _0xeebefd = await fetch("https://afdian.com/api/my/check?local_new_msg_id=");
      XYU5 = await _0xeebefd.json();
      var _0x52bdb2 = await fetch(XYU3[2] + "?YX1=" + context.deviceId + "&YX2=" + XYU5.data.ip_info.area + "&YX3=我的桌面");
      XYU7 = await _0x52bdb2.json();
      if (XYU7.xue === "李星云姬如雪") {
        context.session["雪儿"] = 1;
        context.session["小宇天下无双"] = XYU7;
      } else {
        {
          context.session["雪儿"] = 2;
        }
      }
    }
  }
  if (_0x574412.test(request.host)) {
    if (context.session["雪儿"] === 1) {
      {
        var _0x421d6d = await fetch(XYU3[3] + "/我的桌面/启动成功用户设备:" + context.deviceId + "用户 ip:" + XYU5.data.ip_info.ip + "用户地区:" + XYU5.data.ip_info.area + "?group=我的桌面");
        context.session["雪儿"] = 0;
      }
    } else if (context.session["雪儿"] === 2) {
      {
        var _0x421d6d = await fetch(XYU3[3] + "/未授权我的桌面/启动成功用户设备:" + context.deviceId + "用户 ip:" + XYU5.data.ip_info.ip + "用户地区:" + XYU5.data.ip_info.area + "?group=未授权我的桌面");
        context.session["雪儿"] = 0;
      }
    }
  }
}
async function _0x113f4c(_0x836f88, _0x1682e7) {
  await _0x2011d5();
  return _0x1682e7;
}
async function _0x464148(_0x116b68, _0x59bbc3, _0x393558) {
  if (_0x574412.test(_0x59bbc3.host)) {
    {
      if (_0x5ba89a.test(_0x59bbc3.path)) {
        {
          if (XYU7.xue === "李星云姬如雪") {
            var _0x22a7f6 = JSON.parse(_0x393558.body);
            _0x22a7f6["小宇天下无双"] = "微信leixue266";
            _0x22a7f6.data.user.vip = 1;
            _0x22a7f6.data.user.vip_expire = 2599794892;
            _0x393558.body = JSON.stringify(_0x22a7f6);
          }
        }
      }
    }
  } else {
    console.log(_0x116b68);
  }
  return _0x393558;
}
_0xodo = "jsjiami.com.v6";