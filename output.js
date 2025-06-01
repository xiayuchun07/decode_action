
const a0_0xfb4972 = a0_0xbf38;
(function (_0x51bc34, _0x55bf46) {
  const _0x541595 = a0_0xbf38;
  const _0x3d8678 = _0x51bc34();
  while (true) {
    try {
      const _0x2831e5 = parseInt(_0x541595(231)) / 1 + parseInt(_0x541595(207)) / 2 + parseInt(_0x541595(229)) / 3 + -parseInt(_0x541595(228)) / 4 * (parseInt(_0x541595(215)) / 5) + -parseInt(_0x541595(209)) / 6 + parseInt(_0x541595(238)) / 7 + parseInt(_0x541595(243)) / 8 * (-parseInt(_0x541595(217)) / 9);
      if (_0x2831e5 === _0x55bf46) {
        break;
      } else {
        _0x3d8678.push(_0x3d8678.shift());
      }
    } catch (_0x4ba965) {
      _0x3d8678.push(_0x3d8678.shift());
    }
  }
})(a0_0xad67, 337695);
function a0_0xad67() {
  const _0x33555a = ["createData", "getLogger", "sendPurchaseItem", "config", "spreaderID", "get", "error", "668472VrrXWH", "891948JjPKxM", "pomelo-logger", "36746AUlYJn", "rechargeNum", "nickname", "now", "platformReturnOrderID", "./userInfoServices", "updateUserDataByUid", "4147542soOlAS", "catch", "popDialogContentPush err:", "../API/pushAPI", "app", "38744EbxViF", "updateUserDataNotify", "755634yuJqnW", "INVALID_UERS", "3635112HDtqhP", "../dao/commonDao", "$inc", "../constant/code", "../services/httpRequestServices", "frontendId", "5QavIVb", "popDialogContentPush", "360dlmnps", "pomelo", "getUserDataByUid", "gold"];
  a0_0xad67 = function () {
    return _0x33555a;
  };
  return a0_0xad67();
}
function a0_0xbf38(_0x20fefe, _0x5af331) {
  const _0x526e92 = a0_0xad67();
  a0_0xbf38 = function (_0x2bc115, _0x1b131a) {
    _0x2bc115 = _0x2bc115 - 207;
    let _0x284041 = _0x526e92[_0x2bc115];
    return _0x284041;
  };
  return a0_0xbf38(_0x20fefe, _0x5af331);
}
let code = require(a0_0xfb4972(212));
let dao = require(a0_0xfb4972(210));
let userDao = require("../dao/userDao");
let updateUserInfoServices = require(a0_0xfb4972(236));
let pushAPI = require(a0_0xfb4972(241));
let pomelo = require(a0_0xfb4972(218));
let httpService = require(a0_0xfb4972(213));
let rechargeLogger = require(a0_0xfb4972(230))[a0_0xfb4972(222)]("recharge");
let service = module.exports;
service[a0_0xfb4972(223)] = async function (_0x3f1c20, _0x5f4e15, _0xc3daba, _0x928a57) {
  const _0x5cf095 = a0_0xfb4972;
  let _0x29a4cd = await userDao[_0x5cf095(219)](_0x3f1c20);
  if (!_0x29a4cd) {
    throw new Error(code[_0x5cf095(208)]);
  }
  let _0xea8c61 = parseInt(pomelo[_0x5cf095(242)][_0x5cf095(226)](_0x5cf095(224)).oneRMBToGold || "1");
  let _0x3dcc01 = _0xea8c61 * _0x5f4e15;
  let _0x490814 = {
    uid: _0x29a4cd.uid,
    nickname: _0x29a4cd[_0x5cf095(233)],
    spreaderID: _0x29a4cd[_0x5cf095(225)],
    rechargeMoney: _0x5f4e15,
    goldCount: _0x3dcc01,
    userOrderID: _0x928a57.userOrderID,
    platformReturnOrderID: _0x928a57[_0x5cf095(235)],
    platform: _0xc3daba,
    createTime: Date[_0x5cf095(234)]()
  };
  await dao[_0x5cf095(221)]("rechargeRecordModel", _0x490814);
  let _0xf2b5bc = {};
  _0xf2b5bc[_0x5cf095(211)][_0x5cf095(220)] = _0x3dcc01;
  _0xf2b5bc.$inc[_0x5cf095(232)] = _0x5f4e15;
  let _0x571888 = await userDao[_0x5cf095(237)](_0x3f1c20, _0xf2b5bc);
  !!_0x571888[_0x5cf095(214)] && (updateUserInfoServices[_0x5cf095(244)](_0x3f1c20, _0x571888[_0x5cf095(214)], {
    gold: _0x571888.gold,
    rechargeNum: _0x571888[_0x5cf095(232)]
  }).catch(_0x3338cb => {}), pushAPI[_0x5cf095(216)]({
    code: code.RECHARGE_SUCCESS
  }, [{
    uid: _0x3f1c20,
    sid: _0x571888.frontendId
  }])[_0x5cf095(239)](function (_0x362e77) {
    const _0x2b4ed5 = _0x5cf095;
    rechargeLogger[_0x2b4ed5(227)](_0x2b4ed5(240) + _0x362e77);
  }));
};