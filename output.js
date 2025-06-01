
function a0_0x382b() {
  const _0x54081e = ["../../../util/utils", "3mHwHPO", "debug", "loadConfig", "pomelo", "afterStartup", "6674450uFKDGi", "2051zvZyae", "398022zmYrkw", "4REgmyr", "../../../services/configServices", "getLogger", "14766gvlUJK", "181341DVgtzU", "afterStartAll", "22rhAYLr", "pomelo-logger", "2208714SeZzOC", "1059872xvgfVA", "exports", "loadParameter", "invokeCallback", "1144215bDSgQQ"];
  a0_0x382b = function () {
    return _0x54081e;
  };
  return a0_0x382b();
}
function a0_0x448f(_0x29b79a, _0x50d2a7) {
  const _0x524f72 = a0_0x382b();
  a0_0x448f = function (_0x5eea5e, _0x53d9fe) {
    _0x5eea5e = _0x5eea5e - 346;
    let _0xa806ba = _0x524f72[_0x5eea5e];
    return _0xa806ba;
  };
  return a0_0x448f(_0x29b79a, _0x50d2a7);
}
const a0_0xca2c0b = a0_0x448f;
(function (_0xb8d6b8, _0x2f7dab) {
  const _0x42eab9 = a0_0x448f;
  const _0x56b93d = _0xb8d6b8();
  while (true) {
    try {
      const _0x1f5977 = parseInt(_0x42eab9(367)) / 1 * (-parseInt(_0x42eab9(351)) / 2) + parseInt(_0x42eab9(360)) / 3 * (parseInt(_0x42eab9(352)) / 4) + -parseInt(_0x42eab9(365)) / 5 + parseInt(_0x42eab9(355)) / 6 * (-parseInt(_0x42eab9(350)) / 7) + -parseInt(_0x42eab9(361)) / 8 + parseInt(_0x42eab9(356)) / 9 + -parseInt(_0x42eab9(349)) / 10 * (-parseInt(_0x42eab9(358)) / 11);
      if (_0x1f5977 === _0x2f7dab) {
        break;
      } else {
        _0x56b93d.push(_0x56b93d.shift());
      }
    } catch (_0x452033) {
      _0x56b93d.push(_0x56b93d.shift());
    }
  }
})(a0_0x382b, 411844);
let domain = module[a0_0xca2c0b(362)];
let logger = require(a0_0xca2c0b(359))[a0_0xca2c0b(354)](a0_0xca2c0b(347));
let utils = require(a0_0xca2c0b(366));
let parameterServices = require(a0_0xca2c0b(353));
domain[a0_0xca2c0b(348)] = function (_0x1705fb) {
  const _0x4cb5bd = a0_0xca2c0b;
  utils[_0x4cb5bd(364)](_0x1705fb);
};
domain[a0_0xca2c0b(357)] = async function (_0xd8724f) {
  const _0x306276 = a0_0xca2c0b;
  await domain.loadParameter();
  utils[_0x306276(364)](_0xd8724f);
};
domain[a0_0xca2c0b(363)] = async function () {
  const _0x39302a = a0_0xca2c0b;
  await parameterServices[_0x39302a(346)]();
  logger[_0x39302a(368)]("http load parameter finished");
};