
function a0_0x2dec(_0x27cb4c, _0x130a62) {
  const _0x1ee9a3 = a0_0x2e60();
  a0_0x2dec = function (_0x4d8953, _0x21c15f) {
    _0x4d8953 = _0x4d8953 - 479;
    let _0x2f8c99 = _0x1ee9a3[_0x4d8953];
    return _0x2f8c99;
  };
  return a0_0x2dec(_0x27cb4c, _0x130a62);
}
const a0_0x3e5648 = a0_0x2dec;
(function (_0xdf5139, _0x284709) {
  const _0x115c5c = a0_0x2dec;
  const _0x584504 = _0xdf5139();
  while (true) {
    try {
      const _0x5a1164 = -parseInt(_0x115c5c(496)) / 1 + parseInt(_0x115c5c(494)) / 2 + -parseInt(_0x115c5c(491)) / 3 * (parseInt(_0x115c5c(479)) / 4) + -parseInt(_0x115c5c(488)) / 5 + -parseInt(_0x115c5c(483)) / 6 + parseInt(_0x115c5c(487)) / 7 * (parseInt(_0x115c5c(481)) / 8) + parseInt(_0x115c5c(490)) / 9 * (parseInt(_0x115c5c(493)) / 10);
      if (_0x5a1164 === _0x284709) {
        break;
      } else {
        _0x584504.push(_0x584504.shift());
      }
    } catch (_0x975122) {
      _0x584504.push(_0x584504.shift());
    }
  }
})(a0_0x2e60, 269004);
function a0_0x2e60() {
  const _0x520e2c = ["get", "5482110qWqNxa", "1005874vGXcXx", "pomelo", "466553BLewOI", "exports", "629284ihLrcU", "../util/utils", "8SXUIjE", "redisClient", "1345848VAXEch", "getData", "set", "setData", "2997127fhkaRj", "1810615LvJsXw", "app", "9AYCdde", "3aipsvi"];
  a0_0x2e60 = function () {
    return _0x520e2c;
  };
  return a0_0x2e60();
}
let pomelo = require(a0_0x3e5648(495));
let utils = require(a0_0x3e5648(480));
let dao = module[a0_0x3e5648(497)];
dao[a0_0x3e5648(486)] = async function (_0x58f88c, _0x3c911f) {
  const _0x476497 = a0_0x3e5648;
  let _0x9e6959 = pomelo[_0x476497(489)][_0x476497(492)](_0x476497(482));
  return await _0x9e6959[_0x476497(485)](_0x58f88c, _0x3c911f);
};
dao[a0_0x3e5648(484)] = async function (_0x2a4ffa) {
  const _0x941dae = a0_0x3e5648;
  let _0x428f1c = pomelo[_0x941dae(489)][_0x941dae(492)](_0x941dae(482));
  return await _0x428f1c[_0x941dae(492)](_0x2a4ffa);
};
dao.deleteData = async function (_0x47b545) {
  const _0x93d6e0 = a0_0x3e5648;
  let _0x175822 = pomelo[_0x93d6e0(489)][_0x93d6e0(492)]("redisClient");
  return await _0x175822.del(_0x47b545);
};