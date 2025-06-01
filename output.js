
const a0_0x5bdeb6 = a0_0x9986;
function a0_0x9986(_0x492486, _0x41e909) {
  const _0x50d5eb = a0_0x1110();
  a0_0x9986 = function (_0x492ab5, _0x314d2d) {
    _0x492ab5 = _0x492ab5 - 164;
    let _0x5b0698 = _0x50d5eb[_0x492ab5];
    return _0x5b0698;
  };
  return a0_0x9986(_0x492486, _0x41e909);
}
(function (_0x414cc7, _0x3d12d5) {
  const _0x3434e5 = a0_0x9986;
  const _0x5175b8 = _0x414cc7();
  while (true) {
    try {
      const _0x11cd79 = parseInt(_0x3434e5(176)) / 1 * (-parseInt(_0x3434e5(167)) / 2) + parseInt(_0x3434e5(179)) / 3 * (parseInt(_0x3434e5(183)) / 4) + -parseInt(_0x3434e5(175)) / 5 * (parseInt(_0x3434e5(186)) / 6) + -parseInt(_0x3434e5(177)) / 7 + parseInt(_0x3434e5(178)) / 8 + parseInt(_0x3434e5(182)) / 9 * (-parseInt(_0x3434e5(165)) / 10) + parseInt(_0x3434e5(168)) / 11;
      if (_0x11cd79 === _0x3d12d5) {
        break;
      } else {
        _0x5175b8.push(_0x5175b8.shift());
      }
    } catch (_0x39f8bd) {
      _0x5175b8.push(_0x5175b8.shift());
    }
  }
})(a0_0x1110, 894532);
let authServices = require(a0_0x5bdeb6(164));
let pomelo = require(a0_0x5bdeb6(185));
let code = require("../../../constant/code");
module.exports = function (_0x4e7f40, _0x5e7892) {
  const _0x33ca81 = a0_0x5bdeb6;
  _0x5e7892.post(_0x33ca81(189), async function (_0x223d02, _0x542def) {
    const _0x29d40f = _0x33ca81;
    _0x542def[_0x29d40f(170)](_0x29d40f(166), "*");
    _0x542def[_0x29d40f(170)](_0x29d40f(184), "PUT, GET, POST, DELETE, OPTIONS");
    _0x542def.header("Access-Control-Allow-Headers", _0x29d40f(171));
    _0x542def.header(_0x29d40f(181), _0x29d40f(172));
    try {
      await authServices[_0x29d40f(169)](_0x223d02[_0x29d40f(188)][_0x29d40f(173)]);
      _0x542def[_0x29d40f(180)](JSON[_0x29d40f(174)]({
        code: code.OK
      }));
    } catch (_0x41aec3) {
      _0x542def.end(JSON[_0x29d40f(174)]({
        code: code[_0x29d40f(187)]
      }));
    }
  });
};
function a0_0x1110() {
  const _0xa0dce5 = ["body", "/getSMSCode", "../../../services/authServices", "30abVroA", "Access-Control-Allow-Origin", "142tFbUqj", "15533782Snajdh", "sendSmsAuthCode", "header", "X-Requested-With", "Content-Type", "phoneNumber", "stringify", "2863620IkvZrp", "5099vhtSkd", "7804405yZYAwL", "11949008qmRxkh", "52578oPTjdn", "end", "Access-Control-Allow-Headers", "2671398EiHPXU", "212OHeuPb", "Access-Control-Allow-Methods", "pomelo", "6BFvnAq", "SMS_SEND_FAILED"];
  a0_0x1110 = function () {
    return _0xa0dce5;
  };
  return a0_0x1110();
}