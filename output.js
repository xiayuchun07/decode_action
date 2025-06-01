
const a0_0x1c58df = a0_0x36aa;
function a0_0x3780() {
  const _0x39db12 = ["config", "get", "3602952QuOmzx", "12678SciFKm", "10iPFkud", "https://api.weixin.qq.com/sns/userinfo", "7798208pceGLX", "977898foSSux", "105jIRSID", "errcode", "secret", "./httpRequestServices", "1901582MMJfqN", "config wxData：: ", "exports", "34868HpnVUD", "1148AZgdDs", "appid", "log", "325c0a0bc89b5b84bc9dddf1f095090e", "3yfPLrJ", "wx8827f0ee82d59896", "26956083xYiOnQ", "https://api.weixin.qq.com/sns/oauth2/access_token"];
  a0_0x3780 = function () {
    return _0x39db12;
  };
  return a0_0x3780();
}
function a0_0x36aa(_0x44e5e4, _0x24947b) {
  const _0x258396 = a0_0x3780();
  a0_0x36aa = function (_0x33c84e, _0x39b9da) {
    _0x33c84e = _0x33c84e - 143;
    let _0x42ebdf = _0x258396[_0x33c84e];
    return _0x42ebdf;
  };
  return a0_0x36aa(_0x44e5e4, _0x24947b);
}
(function (_0xb53398, _0x594dc8) {
  const _0xa21022 = a0_0x36aa;
  const _0x221cd1 = _0xb53398();
  while (true) {
    try {
      const _0x5c03ae = parseInt(_0xa21022(144)) / 1 + parseInt(_0xa21022(149)) / 2 * (-parseInt(_0xa21022(157)) / 3) + parseInt(_0xa21022(152)) / 4 * (-parseInt(_0xa21022(145)) / 5) + -parseInt(_0xa21022(164)) / 6 * (parseInt(_0xa21022(153)) / 7) + -parseInt(_0xa21022(143)) / 8 + -parseInt(_0xa21022(163)) / 9 * (parseInt(_0xa21022(165)) / 10) + parseInt(_0xa21022(159)) / 11;
      if (_0x5c03ae === _0x594dc8) {
        break;
      } else {
        _0x221cd1.push(_0x221cd1.shift());
      }
    } catch (_0x5072f9) {
      _0x221cd1.push(_0x221cd1.shift());
    }
  }
})(a0_0x3780, 572967);
let httpService = require(a0_0x1c58df(148));
let WeiXinUtil = {
  isInit: false,
  config: {
    appid: a0_0x1c58df(158),
    secret: a0_0x1c58df(156)
  },
  getAccessToken: async function (_0x2624ce) {
    const _0x3bfa7b = a0_0x1c58df;
    let _0xe5ddb8 = {
      appid: this.config.appid,
      secret: this.config[_0x3bfa7b(147)],
      code: _0x2624ce,
      grant_type: "authorization_code"
    };
    console[_0x3bfa7b(155)](_0x3bfa7b(150), _0xe5ddb8);
    let _0x402daf = await httpService[_0x3bfa7b(162)](_0x3bfa7b(160), _0xe5ddb8);
    return _0x402daf;
  },
  async getStateInfo(_0x44c66e) {
    const _0x47b2a9 = a0_0x1c58df;
    let _0x47e02d = await this.getAccessToken(_0x44c66e);
    if (_0x47e02d[_0x47b2a9(146)]) {
      return _0x47e02d;
    }
    let _0x1fd9b2 = {
      access_token: _0x47e02d.access_token,
      openid: this[_0x47b2a9(161)][_0x47b2a9(154)]
    };
    return await httpService[_0x47b2a9(162)](_0x47b2a9(166), _0x1fd9b2);
  }
};
module[a0_0x1c58df(151)] = WeiXinUtil;