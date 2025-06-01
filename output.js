
function a0_0x2421(_0x3a695c, _0x33c339) {
  const _0x33ef49 = a0_0x439d();
  a0_0x2421 = function (_0x2ee090, _0x404124) {
    _0x2ee090 = _0x2ee090 - 277;
    let _0x113396 = _0x33ef49[_0x2ee090];
    return _0x113396;
  };
  return a0_0x2421(_0x3a695c, _0x33c339);
}
const a0_0x10f6a3 = a0_0x2421;
function a0_0x439d() {
  const _0x2c97ad = ["base64", "config", "3490840MCocDx", "176376oAnfwN", "assign", "toISOString", "1BqWInR", "***", "168mPwLtF", "JSON", "_sendMessage", "sort", "475612FymiEL", "AccessKeyId", "join", "2017-05-25", "AccessKeySecret", "933885bZWiCc", "push", "_signParameters", "update", "2742444YhxvgR", "random", "1896027cMKESP", "exports", "utf-8", "SignatureNonce", "HMAC-SHA1", "389658oatnGN", "log", "length", "createHmac", "keys", "digest", "sha1", "1.0", "http://dysmsapi.aliyuncs.com/"];
  a0_0x439d = function () {
    return _0x2c97ad;
  };
  return a0_0x439d();
}
(function (_0x79c401, _0x2052d6) {
  const _0x345171 = a0_0x2421;
  const _0x33b8d9 = _0x79c401();
  while (true) {
    try {
      const _0x118957 = parseInt(_0x345171(300)) / 1 * (parseInt(_0x345171(285)) / 2) + -parseInt(_0x345171(280)) / 3 + parseInt(_0x345171(306)) / 4 + parseInt(_0x345171(311)) / 5 + parseInt(_0x345171(297)) / 6 * (parseInt(_0x345171(302)) / 7) + -parseInt(_0x345171(296)) / 8 + parseInt(_0x345171(278)) / 9;
      if (_0x118957 === _0x2052d6) {
        break;
      } else {
        _0x33b8d9.push(_0x33b8d9.shift());
      }
    } catch (_0x4f291d) {
      _0x33b8d9.push(_0x33b8d9.shift());
    }
  }
})(a0_0x439d, 442365);
let request = require("request");
let crypto = require("crypto");
let AliyunSmsUtil = {
  isInit: false,
  config: {
    AccessKeyId: "***",
    AccessKeySecret: a0_0x10f6a3(301),
    Format: a0_0x10f6a3(303),
    SignatureMethod: a0_0x10f6a3(284),
    SignatureVersion: a0_0x10f6a3(292),
    SignatureNonce: "" + Math[a0_0x10f6a3(279)](),
    Timestamp: new Date().toISOString(),
    Action: "SendSms",
    Version: a0_0x10f6a3(309),
    RegionId: "cn-hangzhou"
  },
  _sendMessage: function (_0x52a362, _0x3d150a) {
    const _0x2c3da7 = a0_0x10f6a3;
    let _0x35a5a3 = Object[_0x2c3da7(298)](_0x52a362, this[_0x2c3da7(295)]);
    delete _0x35a5a3[_0x2c3da7(310)];
    _0x35a5a3.Signature = this[_0x2c3da7(313)](_0x35a5a3, this.config.AccessKeySecret);
    request.post({
      url: _0x2c3da7(293),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      form: _0x35a5a3
    }, function (_0x39a770, _0xd978f2, _0x30c727) {
      _0x3d150a && _0x3d150a(_0x39a770, _0xd978f2, _0x30c727);
    });
  },
  _signParameters: function (_0x355afa, _0x57e89d) {
    const _0x1b4988 = a0_0x10f6a3;
    let _0x3c44a4 = {};
    let _0x38d5fb = [];
    let _0xa02f51 = Object[_0x1b4988(289)](_0x355afa)[_0x1b4988(305)]();
    for (let _0x479c2b = 0; _0x479c2b < _0xa02f51[_0x1b4988(287)]; _0x479c2b++) {
      let _0x2f2f71 = _0xa02f51[_0x479c2b];
      _0x3c44a4[_0x2f2f71] = _0x355afa[_0x2f2f71];
    }
    for (let _0x3c3b69 in _0x3c44a4) {
      _0x38d5fb[_0x1b4988(312)](encodeURIComponent(_0x3c3b69) + "=" + encodeURIComponent(_0x3c44a4[_0x3c3b69]));
    }
    _0x38d5fb = _0x38d5fb[_0x1b4988(308)]("&");
    let _0x4d12a5 = "POST&" + encodeURIComponent("/") + "&" + encodeURIComponent(_0x38d5fb);
    _0x57e89d = _0x57e89d + "&";
    return crypto[_0x1b4988(288)](_0x1b4988(291), _0x57e89d)[_0x1b4988(277)](new Buffer(_0x4d12a5, _0x1b4988(282)))[_0x1b4988(290)](_0x1b4988(294));
  },
  initAccessKey: function (_0x549f63, _0x507646) {
    const _0x5197d3 = a0_0x10f6a3;
    this[_0x5197d3(295)][_0x5197d3(307)] = _0x549f63;
    this.config[_0x5197d3(310)] = _0x507646;
    this.isInit = true;
  },
  sendRegistSms: function (_0x41d6e1) {
    return new Promise((_0x241373, _0x24082f) => {
      const _0x5141fc = a0_0x2421;
      this[_0x5141fc(295)][_0x5141fc(283)] = "" + Math.random();
      this[_0x5141fc(295)].Timestamp = new Date()[_0x5141fc(299)]();
      this[_0x5141fc(304)](_0x41d6e1, function (_0x59af2c, _0x5da9a2, _0x3a1d5e) {
        const _0x563071 = _0x5141fc;
        console[_0x563071(286)](_0x3a1d5e);
        !!_0x59af2c ? _0x24082f(_0x59af2c) : _0x241373(_0x3a1d5e);
      });
    });
  },
  sendChangePwdSms: function () {}
};
module[a0_0x10f6a3(281)] = AliyunSmsUtil;