
function a0_0x1dc7() {
  const _0x3e9b0d = ["pomelo-logger", "invokeCallback", "2718633IZkpdS", "9lbpmbb", "416350rrWcMT", "loadParameter", "9335672DsZttQ", "12bNHADL", "21OmeqmR", "exports", "debug", "2vxKvNz", "pomelo", "15601168OePUSc", "1204955SUvgEW", "972560MryTzi", "1160106aCzvKA", "getLogger", "hall load parameter finished", "loadConfig"];
  a0_0x1dc7 = function () {
    return _0x3e9b0d;
  };
  return a0_0x1dc7();
}
const a0_0x184352 = a0_0x10bf;
(function (_0x352239, _0x25e5b7) {
  const _0x540949 = a0_0x10bf;
  const _0xef63fd = _0x352239();
  while (true) {
    try {
      const _0x29e2f9 = parseInt(_0x540949(364)) / 1 + -parseInt(_0x540949(360)) / 2 * (-parseInt(_0x540949(371)) / 3) + -parseInt(_0x540949(376)) / 4 * (-parseInt(_0x540949(363)) / 5) + parseInt(_0x540949(365)) / 6 * (parseInt(_0x540949(377)) / 7) + -parseInt(_0x540949(375)) / 8 + parseInt(_0x540949(372)) / 9 * (parseInt(_0x540949(373)) / 10) + -parseInt(_0x540949(362)) / 11;
      if (_0x29e2f9 === _0x25e5b7) {
        break;
      } else {
        _0xef63fd.push(_0xef63fd.shift());
      }
    } catch (_0x5a8806) {
      _0xef63fd.push(_0xef63fd.shift());
    }
  }
})(a0_0x1dc7, 638185);
let domain = module[a0_0x184352(378)];
let pomelo = require(a0_0x184352(361));
let logger = require(a0_0x184352(369))[a0_0x184352(366)]("pomelo");
let utils = require("../../../util/utils");
let parameterServices = require("../../../services/configServices");
let async = require("async");
function a0_0x10bf(_0x4959e3, _0x36efab) {
  const _0x57b2e5 = a0_0x1dc7();
  a0_0x10bf = function (_0x511047, _0x11b372) {
    _0x511047 = _0x511047 - 360;
    let _0x238660 = _0x57b2e5[_0x511047];
    return _0x238660;
  };
  return a0_0x10bf(_0x4959e3, _0x36efab);
}
domain.afterStartAll = async function (_0x316a1c) {
  const _0x4126cd = a0_0x184352;
  await domain[_0x4126cd(374)]();
  utils[_0x4126cd(370)](_0x316a1c);
};
domain[a0_0x184352(374)] = async function () {
  const _0x5d5774 = a0_0x184352;
  await parameterServices[_0x5d5774(368)]();
  logger[_0x5d5774(379)](_0x5d5774(367));
};