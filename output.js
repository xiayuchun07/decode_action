
function a0_0x4bd9(_0x33eb55, _0xf95e69) {
  const _0x388f6f = a0_0x6e8d();
  a0_0x4bd9 = function (_0x39ad6a, _0x35ba1a) {
    _0x39ad6a = _0x39ad6a - 136;
    let _0x1bf29d = _0x388f6f[_0x39ad6a];
    return _0x1bf29d;
  };
  return a0_0x4bd9(_0x33eb55, _0xf95e69);
}
const a0_0x11eb58 = a0_0x4bd9;
(function (_0x53c3ac, _0x5c956c) {
  const _0x1f2977 = a0_0x4bd9;
  const _0x1b535c = _0x53c3ac();
  while (true) {
    try {
      const _0x5c9084 = parseInt(_0x1f2977(140)) / 1 * (-parseInt(_0x1f2977(136)) / 2) + -parseInt(_0x1f2977(143)) / 3 + parseInt(_0x1f2977(155)) / 4 + parseInt(_0x1f2977(147)) / 5 + parseInt(_0x1f2977(148)) / 6 * (parseInt(_0x1f2977(145)) / 7) + -parseInt(_0x1f2977(137)) / 8 * (parseInt(_0x1f2977(154)) / 9) + parseInt(_0x1f2977(138)) / 10;
      if (_0x5c9084 === _0x5c956c) {
        break;
      } else {
        _0x1b535c.push(_0x1b535c.shift());
      }
    } catch (_0x514d48) {
      _0x1b535c.push(_0x1b535c.shift());
    }
  }
})(a0_0x6e8d, 208047);
const enumeration = require(a0_0x11eb58(150));
let commonDao = require(a0_0x11eb58(146));
class logServices {
  static [a0_0x11eb58(144)](_0x4a9ed9 = 0) {
    const _0xe09471 = a0_0x11eb58;
    let _0x196f46 = enumeration[_0xe09471(142)][_0x4a9ed9] || _0xe09471(153);
    return require(_0xe09471(152)).getLogger(_0x196f46);
  }
  static async getLogByRuleID(_0x3a3912) {
    const _0x2a5b4d = a0_0x11eb58;
    let _0x5efa85 = await commonDao[_0x2a5b4d(139)](_0x2a5b4d(156), {
      "roomRuleList._id": _0x3a3912
    });
    let _0x3e7dab = _0x5efa85 && _0x5efa85.roomRuleList && _0x5efa85.roomRuleList.find(_0x4fc9d3 => _0x4fc9d3[_0x2a5b4d(149)] == _0x3a3912);
    let _0x346cc2 = _0x3e7dab && _0x3e7dab[_0x2a5b4d(141)];
    return this[_0x2a5b4d(144)](_0x346cc2);
  }
}
function a0_0x6e8d() {
  const _0x3f8827 = ["1124770CIOpjD", "129678EKojYK", "_id", "../constant/enumeration", "exports", "pomelo-logger", "logic", "1631529OCCGaQ", "31252UxJDdx", "unionModel", "6622TnTPYf", "8omoQRP", "1437660kUhHFx", "findOneData", "64LvnBQa", "gameType", "gameLogType", "557844sRqzKY", "getLogByType", "133GZXKdJ", "../dao/commonDao"];
  a0_0x6e8d = function () {
    return _0x3f8827;
  };
  return a0_0x6e8d();
}
module[a0_0x11eb58(151)] = logServices;