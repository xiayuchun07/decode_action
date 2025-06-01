
const a0_0x5a853d = a0_0x5272;
function a0_0x5272(_0x2927a1, _0x415721) {
  const _0x54ef76 = a0_0x4939();
  a0_0x5272 = function (_0xd62958, _0x3e7c96) {
    _0xd62958 = _0xd62958 - 366;
    let _0x3ffefa = _0x54ef76[_0xd62958];
    return _0x3ffefa;
  };
  return a0_0x5272(_0x2927a1, _0x415721);
}
(function (_0x3d7a80, _0x22351d) {
  const _0x588028 = a0_0x5272;
  const _0x5ab70e = _0x3d7a80();
  while (true) {
    try {
      const _0x42aee9 = parseInt(_0x588028(431)) / 1 * (parseInt(_0x588028(395)) / 2) + parseInt(_0x588028(413)) / 3 + -parseInt(_0x588028(387)) / 4 * (parseInt(_0x588028(432)) / 5) + parseInt(_0x588028(381)) / 6 * (-parseInt(_0x588028(382)) / 7) + -parseInt(_0x588028(430)) / 8 * (parseInt(_0x588028(417)) / 9) + -parseInt(_0x588028(398)) / 10 + parseInt(_0x588028(403)) / 11;
      if (_0x42aee9 === _0x22351d) {
        break;
      } else {
        _0x5ab70e.push(_0x5ab70e.shift());
      }
    } catch (_0x44bbb2) {
      _0x5ab70e.push(_0x5ab70e.shift());
    }
  }
})(a0_0x4939, 561984);
let code = require(a0_0x5a853d(372));
let rechargeServices = require(a0_0x5a853d(383));
let enumeration = require(a0_0x5a853d(386));
let dao = require("../../../dao/commonDao");
let axios = require(a0_0x5a853d(392));
let moment = require("moment");
let utils = require("../../../util/utils");
let logger = require(a0_0x5a853d(367))[a0_0x5a853d(389)](a0_0x5a853d(401));
module[a0_0x5a853d(373)] = function (_0x42b42c) {
  return new Handler(_0x42b42c);
};
let Handler = function (_0x4169a4) {
  const _0x4baf97 = a0_0x5a853d;
  this[_0x4baf97(410)] = _0x4169a4;
  this[_0x4baf97(406)] = _0x4169a4[_0x4baf97(376)](_0x4baf97(369));
};
function a0_0x4939() {
  const _0x20667a = ["count", "recharge", "wxpay", "16606667RTlzVw", "gold", "error", "publicParameter", " addGold = ", "number", "REQUEST_DATA_ERROR", "app", "1001", "uid", "1808664PJqVBX", "startIndex", "INVALID_UERS", "format", "69858iaRCXC", "sendPurchaseItem", "randomKey", "type", "wxrrOWsqFmPusRPYQDFwVVXFMW751T0b", "rechargeItem", "findOneData", "addGold", "qrcode", "] recharge error = ", "out_trade_no", "trade_no", "RECHARGE_FAIL", "136ohvUdX", "37567oufgIS", "815fAdObB", "] recharge fail = ", "code", "post", "pomelo-logger", "stringify", "config", "purchaseItem", "then", "../../../constant/code", "exports", "RechargePlatform", "goldList", "get", "钻石充值", "rechargeModel", "alipay", "orderList", "3072asKmlV", "12761mwgYMV", "../../../services/rechargeServices", "sign", "orderModel", "../../../constant/enumeration", "14948ejruQR", "findDataAndCount", "getLogger", "catch", "free", "axios", " gold = ", "sign_type", "52KATzWa", "] recharge count = ", "prototype", "8528820FLkPSd", "freeShopItem"];
  a0_0x4939 = function () {
    return _0x20667a;
  };
  return a0_0x4939();
}
Handler.prototype[a0_0x5a853d(375)] = async function (_0x33a286, _0x2f3fce, _0x36c6ba) {
  const _0x1ce086 = a0_0x5a853d;
  if (!_0x2f3fce[_0x1ce086(412)]) {
    _0x36c6ba(null, {
      code: code[_0x1ce086(415)]
    });
    return;
  }
  let _0x64fd2a = await dao[_0x1ce086(388)]("rechargeModel", 0, 0, {
    count: 1
  }, {});
  _0x36c6ba(null, {
    code: code.OK,
    msg: _0x64fd2a
  });
};
Handler[a0_0x5a853d(397)][a0_0x5a853d(380)] = async function (_0x601ebe, _0xbc567c, _0x4bfd34) {
  const _0x1dfafb = a0_0x5a853d;
  if (!_0xbc567c[_0x1dfafb(412)]) {
    _0x4bfd34(null, {
      code: code[_0x1dfafb(415)]
    });
    return;
  }
  let _0x2b8cbd = _0x601ebe[_0x1dfafb(414)] || 0;
  let _0x19282e = _0x601ebe[_0x1dfafb(400)] || 20;
  let _0x95db4d = await dao.findDataAndCount(_0x1dfafb(385), _0x2b8cbd, _0x19282e, {
    createTime: -1
  }, {
    uid: _0xbc567c.uid
  });
  _0x4bfd34(null, {
    code: code.OK,
    msg: _0x95db4d
  });
};
Handler.prototype[a0_0x5a853d(422)] = async function (_0x58b2e3, _0x565f2f, _0x45e3db) {
  const _0x1a41fc = a0_0x5a853d;
  if (!_0x565f2f[_0x1a41fc(412)]) {
    _0x45e3db(null, {
      code: code[_0x1a41fc(415)]
    });
    return;
  }
  let _0x261d89 = parseInt(_0x58b2e3[_0x1a41fc(400)]);
  if (!_0x261d89 || typeof _0x261d89 !== _0x1a41fc(408) || _0x261d89 <= 0) {
    _0x45e3db(null, {
      code: code[_0x1a41fc(429)]
    });
    return;
  }
  let _0x41bec4 = parseInt(_0x58b2e3[_0x1a41fc(420)]);
  if (!_0x41bec4 || _0x41bec4 != 1 && _0x41bec4 != 2) {
    _0x45e3db(null, {
      code: code[_0x1a41fc(429)]
    });
    return;
  }
  let _0x442c6f = _0x41bec4 == 1 ? _0x1a41fc(402) : _0x1a41fc(379);
  let _0x269c24 = await dao[_0x1a41fc(423)](_0x1a41fc(378), {
    count: _0x261d89
  });
  if (!_0x269c24) {
    _0x45e3db(null, {
      code: code[_0x1a41fc(429)]
    });
    return;
  }
  logger.info("[" + _0x565f2f.uid + _0x1a41fc(396) + _0x261d89 + _0x1a41fc(393) + _0x269c24[_0x1a41fc(404)] + _0x1a41fc(407) + _0x269c24[_0x1a41fc(424)] + " ");
  let _0x46ede2 = utils[_0x1a41fc(419)](5) + moment()[_0x1a41fc(416)]("x");
  let _0x5b1d18 = "http://www.azgj22.com/pay/apisubmit";
  let _0x1bfb83 = _0x1a41fc(411);
  let _0x170a70 = _0x1a41fc(421);
  let _0x43a8e0 = "http://120.27.224.195:13200/payorder";
  let _0x2ba3cb = "http://120.27.224.195:13200/payorder";
  let _0x26e481 = {
    pid: _0x1bfb83,
    type: _0x442c6f,
    out_trade_no: _0x46ede2,
    notify_url: _0x43a8e0,
    return_url: _0x2ba3cb,
    name: "钻石充值",
    money: _0x261d89
  };
  _0x26e481[_0x1a41fc(384)] = utils[_0x1a41fc(384)](_0x26e481, _0x170a70);
  _0x26e481[_0x1a41fc(394)] = "MD5";
  axios[_0x1a41fc(366)](_0x5b1d18, _0x26e481)[_0x1a41fc(371)](_0x2afacd => {
    const _0x27f3b5 = _0x1a41fc;
    _0x2afacd = _0x2afacd.data;
    if (_0x2afacd[_0x27f3b5(434)] == 200) {
      let _0x4987af = {
        uid: _0x565f2f.uid,
        gold: _0x269c24[_0x27f3b5(404)],
        addGold: _0x269c24[_0x27f3b5(424)],
        count: _0x261d89,
        orderNo: _0x2afacd[_0x27f3b5(427)],
        tradeNo: _0x2afacd[_0x27f3b5(428)],
        payType: _0x442c6f,
        goodName: _0x27f3b5(377),
        createTime: moment()[_0x27f3b5(416)]("x")
      };
      dao.createData(_0x27f3b5(385), _0x4987af);
      _0x2afacd[_0x27f3b5(425)] = decodeURIComponent(_0x2afacd[_0x27f3b5(425)]);
      _0x45e3db(null, {
        code: code.OK,
        msg: _0x2afacd
      });
    } else {
      logger[_0x27f3b5(405)]("[" + _0x565f2f[_0x27f3b5(412)] + _0x27f3b5(433) + JSON[_0x27f3b5(368)](_0x2afacd) + " ");
    }
  })[_0x1a41fc(390)](function (_0x28e13b) {
    const _0x1ea5c6 = _0x1a41fc;
    logger[_0x1ea5c6(405)]("[" + _0x565f2f[_0x1ea5c6(412)] + _0x1ea5c6(426) + JSON[_0x1ea5c6(368)](_0x28e13b) + " ");
    _0x45e3db(null, {
      code: code[_0x1ea5c6(429)]
    });
    return;
  });
};
Handler[a0_0x5a853d(397)][a0_0x5a853d(370)] = function (_0x1f3607, _0x1d5680, _0x59ebd7) {
  const _0x35c9c2 = a0_0x5a853d;
  if (!_0x1d5680[_0x35c9c2(412)]) {
    _0x59ebd7(null, {
      code: code[_0x35c9c2(415)]
    });
    return;
  }
  let _0x570aa3 = _0x1f3607[_0x35c9c2(400)];
  if (!_0x570aa3 || typeof _0x570aa3 !== _0x35c9c2(408) || _0x570aa3 <= 0) {
    _0x59ebd7(null, {
      code: code.REQUEST_DATA_ERROR
    });
    return;
  }
  let _0x2a71c0 = this[_0x35c9c2(410)][_0x35c9c2(376)]("config");
  _0x2a71c0[_0x35c9c2(399)] === _0x35c9c2(391) ? rechargeServices[_0x35c9c2(418)](_0x1d5680[_0x35c9c2(412)], _0x570aa3, enumeration[_0x35c9c2(374)].NONE, {
    userOrderID: 0,
    platformReturnOrderID: 0
  }).then(() => {
    _0x59ebd7(null, {
      code: code.OK
    });
  })[_0x35c9c2(390)](_0x2dee01 => {
    _0x59ebd7(null, {
      code: _0x2dee01
    });
  }) : _0x59ebd7(null, {
    code: code[_0x35c9c2(409)]
  });
};