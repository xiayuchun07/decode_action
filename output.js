
const a0_0x1f5efd = a0_0x5969;
function a0_0x4d22() {
  const _0x9c5b93 = ["2930PsYUta", "5460744EpFJgd", "invokeCallback", "loadParameter", "pomelo-logger", "afterStartAll", "351881HbHXmR", "10vWKsTR", "../../../services/configServices", "loadConfig", "pomelo", "31493539ifModE", "24MOviCd", "debug", "exports", "1181232WFjgWd", "5817dHZgCT", "getLogger", "55359mKUjOr", "../../../util/utils", "155zkXVjL", "http load parameter finished", "103352OIInJT", "2382rSfhWl"];
  a0_0x4d22 = function () {
    return _0x9c5b93;
  };
  return a0_0x4d22();
}
function a0_0x5969(_0x7a9ce8, _0xb38fc3) {
  const _0x25fc2e = a0_0x4d22();
  a0_0x5969 = function (_0x3faf47, _0x21368d) {
    _0x3faf47 = _0x3faf47 - 191;
    let _0x36c72c = _0x25fc2e[_0x3faf47];
    return _0x36c72c;
  };
  return a0_0x5969(_0x7a9ce8, _0xb38fc3);
}
(function (_0x41a6f2, _0x24b632) {
  const _0x3e859d = a0_0x5969;
  const _0x5caf2d = _0x41a6f2();
  while (true) {
    try {
      const _0x594314 = parseInt(_0x3e859d(213)) / 1 * (-parseInt(_0x3e859d(214)) / 2) + -parseInt(_0x3e859d(208)) / 3 + -parseInt(_0x3e859d(205)) / 4 * (-parseInt(_0x3e859d(203)) / 5) + parseInt(_0x3e859d(206)) / 6 * (-parseInt(_0x3e859d(199)) / 7) + parseInt(_0x3e859d(198)) / 8 + parseInt(_0x3e859d(201)) / 9 * (-parseInt(_0x3e859d(207)) / 10) + parseInt(_0x3e859d(194)) / 11 * (parseInt(_0x3e859d(195)) / 12);
      if (_0x594314 === _0x24b632) {
        break;
      } else {
        _0x5caf2d.push(_0x5caf2d.shift());
      }
    } catch (_0x1dd104) {
      _0x5caf2d.push(_0x5caf2d.shift());
    }
  }
})(a0_0x4d22, 962927);
let domain = module[a0_0x1f5efd(197)];
let logger = require(a0_0x1f5efd(211))[a0_0x1f5efd(200)](a0_0x1f5efd(193));
let utils = require(a0_0x1f5efd(202));
let parameterServices = require(a0_0x1f5efd(191));
domain.afterStartup = function (_0x904b3d) {
  const _0x55e771 = a0_0x1f5efd;
  utils[_0x55e771(209)](_0x904b3d);
};
domain[a0_0x1f5efd(212)] = async function (_0x592965) {
  const _0x5444cb = a0_0x1f5efd;
  await domain[_0x5444cb(210)]();
  utils[_0x5444cb(209)](_0x592965);
};
domain[a0_0x1f5efd(210)] = async function () {
  const _0x11dc1a = a0_0x1f5efd;
  await parameterServices[_0x11dc1a(192)]();
  logger[_0x11dc1a(196)](_0x11dc1a(204));
};