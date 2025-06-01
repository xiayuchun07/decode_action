
const a0_0x368442 = a0_0x45ce;
(function (_0x343b6f, _0x3b125b) {
  const _0x2cf609 = a0_0x45ce;
  const _0x526e4a = _0x343b6f();
  while (true) {
    try {
      const _0x1f157a = parseInt(_0x2cf609(438)) / 1 + -parseInt(_0x2cf609(443)) / 2 + parseInt(_0x2cf609(437)) / 3 * (parseInt(_0x2cf609(444)) / 4) + parseInt(_0x2cf609(418)) / 5 + parseInt(_0x2cf609(408)) / 6 * (-parseInt(_0x2cf609(415)) / 7) + -parseInt(_0x2cf609(419)) / 8 * (parseInt(_0x2cf609(430)) / 9) + -parseInt(_0x2cf609(413)) / 10;
      if (_0x1f157a === _0x3b125b) {
        break;
      } else {
        _0x526e4a.push(_0x526e4a.shift());
      }
    } catch (_0x2b2939) {
      _0x526e4a.push(_0x526e4a.shift());
    }
  }
})(a0_0x2c1c, 982248);
let code = require("../../../constant/code");
let enumeration = require(a0_0x368442(425));
let dao = require(a0_0x368442(417));
let DAY_MS = 8640000;
let WEEK_MS = 7 * DAY_MS;
let logger = require(a0_0x368442(409)).getLogger(a0_0x368442(442));
module[a0_0x368442(420)] = function (_0x15a3ac) {
  return new Handler(_0x15a3ac);
};
function a0_0x45ce(_0xbb9445, _0x1034dd) {
  const _0x38a0c9 = a0_0x2c1c();
  a0_0x45ce = function (_0x9acf94, _0x299ef1) {
    _0x9acf94 = _0x9acf94 - 408;
    let _0x9f9a3f = _0x38a0c9[_0x9acf94];
    return _0x9f9a3f;
  };
  return a0_0x45ce(_0xbb9445, _0x1034dd);
}
function a0_0x2c1c() {
  const _0x5c7bb3 = ["2491615QhpYSg", "696WyufYo", "exports", "prototype", "count", "[getAgentMemberRecordData]", "recordType", "../../../constant/enumeration", "[getRecordData]", "stack", "startIndex", "userModel", "192123yYtNnS", "safeBoxRecordModel", "uid", "withdrawCashRecordModel", "WITHDRAWALS", "getRecordData", "INVALID_UERS", "36QbhnUJ", "1790226NyYnub", "getDirectlyMemberRecordData", "rechargeRecordModel", "findDataAndCount", "handler", "167776GQkphc", "317412mSFfuz", "451374sCzLre", "pomelo-logger", "error", "[getDirectlyMemberRecordData]", "userGameRecordModel", "2422310NVpeHZ", "now", "7eLLcFW", "SAFE_BOX", "../../../dao/commonDao"];
  a0_0x2c1c = function () {
    return _0x5c7bb3;
  };
  return a0_0x2c1c();
}
let Handler = function (_0x22b6f0) {
  this.app = _0x22b6f0;
};
Handler[a0_0x368442(421)][a0_0x368442(435)] = async function (_0x119e9b, _0x54580c, _0x212476) {
  const _0x230826 = a0_0x368442;
  try {
    if (!_0x54580c[_0x230826(432)]) {
      _0x212476(null, {
        code: code[_0x230826(436)]
      });
      return;
    }
    let _0x34b3e4 = _0x119e9b.recordType;
    let _0x18728c = _0x119e9b.startIndex || 0;
    let _0x463ad0 = _0x119e9b[_0x230826(422)] || 20;
    let _0x4932b4 = "";
    if (_0x34b3e4 === enumeration[_0x230826(424)].RECHARGE) {
      _0x4932b4 = _0x230826(440);
    } else {
      if (_0x34b3e4 === enumeration.recordType[_0x230826(434)]) {
        _0x4932b4 = _0x230826(433);
      } else {
        if (_0x34b3e4 === enumeration[_0x230826(424)].GAME) {
          _0x4932b4 = _0x230826(412);
        } else {
          _0x34b3e4 === enumeration.recordType[_0x230826(416)] && (_0x4932b4 = _0x230826(431));
        }
      }
    }
    let _0x49fdae = {
      uid: _0x54580c.uid,
      createTime: {
        $gte: Date[_0x230826(414)]() - WEEK_MS
      }
    };
    let _0x27525c = await dao.findDataAndCount(_0x4932b4, _0x18728c, _0x463ad0, {
      createTime: -1
    }, _0x49fdae);
    _0x212476(null, {
      code: code.OK,
      msg: _0x27525c
    });
  } catch (_0x45194e) {
    logger.error(_0x230826(426) + _0x45194e[_0x230826(427)]);
    _0x212476(null, {
      code: 500
    });
  }
};
Handler[a0_0x368442(421)][a0_0x368442(439)] = async function (_0x16195e, _0x388a84, _0x326f05) {
  const _0x1bd86e = a0_0x368442;
  try {
    if (!_0x388a84[_0x1bd86e(432)]) {
      _0x326f05(null, {
        code: code.INVALID_UERS
      });
      return;
    }
    let _0x430b87 = _0x16195e[_0x1bd86e(428)] || 0;
    let _0x156a78 = _0x16195e[_0x1bd86e(422)] || 20;
    let _0x274337 = {
      spreaderID: _0x388a84[_0x1bd86e(432)]
    };
    let _0xd92b20 = await dao[_0x1bd86e(441)](_0x1bd86e(429), _0x430b87, _0x156a78, {
      createTime: -1
    }, _0x274337);
    _0x326f05(null, {
      code: code.OK,
      msg: _0xd92b20
    });
  } catch (_0x4e415c) {
    logger[_0x1bd86e(410)](_0x1bd86e(411) + _0x4e415c[_0x1bd86e(427)]);
    _0x326f05(null, {
      code: 500
    });
  }
};
Handler[a0_0x368442(421)].getAgentMemberRecordData = async function (_0x544d15, _0x569edf, _0x24d500) {
  const _0x10a358 = a0_0x368442;
  try {
    if (!_0x569edf[_0x10a358(432)]) {
      _0x24d500(null, {
        code: code[_0x10a358(436)]
      });
      return;
    }
    let _0x1f3298 = _0x544d15.startIndex || 0;
    let _0x28141d = _0x544d15.count || 20;
    let _0xbda40c = {
      spreaderID: _0x569edf[_0x10a358(432)],
      directlyMemberCount: {
        $gte: 1
      }
    };
    let _0x4b839c = await dao[_0x10a358(441)](_0x10a358(429), _0x1f3298, _0x28141d, {
      createTime: -1
    }, _0xbda40c);
    _0x24d500(null, {
      code: code.OK,
      msg: _0x4b839c
    });
  } catch (_0x339cb4) {
    logger[_0x10a358(410)](_0x10a358(423) + _0x339cb4[_0x10a358(427)]);
    _0x24d500(null, {
      code: 500
    });
  }
};