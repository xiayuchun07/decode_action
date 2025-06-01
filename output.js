
const a0_0x5a9eee = a0_0x1cf3;
(function (_0x599cd9, _0x3a2274) {
  const _0x480861 = a0_0x1cf3;
  const _0x5e96ec = _0x599cd9();
  while (true) {
    try {
      const _0x1903e3 = -parseInt(_0x480861(324)) / 1 + parseInt(_0x480861(310)) / 2 + -parseInt(_0x480861(333)) / 3 * (-parseInt(_0x480861(335)) / 4) + -parseInt(_0x480861(334)) / 5 + parseInt(_0x480861(322)) / 6 + -parseInt(_0x480861(331)) / 7 * (parseInt(_0x480861(323)) / 8) + parseInt(_0x480861(329)) / 9 * (parseInt(_0x480861(314)) / 10);
      if (_0x1903e3 === _0x3a2274) {
        break;
      } else {
        _0x5e96ec.push(_0x5e96ec.shift());
      }
    } catch (_0x472992) {
      _0x5e96ec.push(_0x5e96ec.shift());
    }
  }
})(a0_0x7666, 777949);
function a0_0x7666() {
  const _0x556982 = ["3OiyOQz", "2020560kPVnZf", "4266628KfMTtV", "2274412qszntP", "beforeStartup", "pomelo-logger", "ShutDown", "440TmrFnX", "afterStartAll", "info", "error", "after start all err:", "set", "curServer", "afterStartup", "2261382sqnJgg", "832XEgTrA", "1208587KJioOA", "exports", "allServerStarted", "catch", "pomelo", "267930iFEwcA", "time", "100961boKkek", "./domain/lifecycleDomain"];
  a0_0x7666 = function () {
    return _0x556982;
  };
  return a0_0x7666();
}
function a0_0x1cf3(_0x475b49, _0x316c2f) {
  const _0x278556 = a0_0x7666();
  a0_0x1cf3 = function (_0x25bf29, _0x33ca3d) {
    _0x25bf29 = _0x25bf29 - 310;
    let _0x5efcae = _0x278556[_0x25bf29];
    return _0x5efcae;
  };
  return a0_0x1cf3(_0x475b49, _0x316c2f);
}
let logger = require(a0_0x5a9eee(312)).getLogger(a0_0x5a9eee(328));
let async = require("async");
let lifecycleDomain = require(a0_0x5a9eee(332));
module[a0_0x5a9eee(325)][a0_0x5a9eee(311)] = function (_0x520044, _0x14c185) {
  const _0x2a477f = a0_0x5a9eee;
  logger[_0x2a477f(316)](_0x520044[_0x2a477f(320)].id, _0x2a477f(311));
  _0x14c185();
};
module[a0_0x5a9eee(325)][a0_0x5a9eee(321)] = function (_0x5ee12f, _0x2b3009) {
  const _0x56ac72 = a0_0x5a9eee;
  logger[_0x56ac72(316)](_0x5ee12f[_0x56ac72(320)].id, "afterStartup");
  _0x2b3009();
};
module[a0_0x5a9eee(325)].beforeShutdown = function (_0x414081, _0x344254) {
  const _0x5929a7 = a0_0x5a9eee;
  logger.info(_0x414081[_0x5929a7(320)].id, "beforeShutdown");
  console[_0x5929a7(330)](_0x5929a7(313) + _0x414081[_0x5929a7(320)].id);
  _0x344254();
};
module.exports[a0_0x5a9eee(315)] = async function (_0x4b682b) {
  const _0x3d316c = a0_0x5a9eee;
  await lifecycleDomain[_0x3d316c(315)]()[_0x3d316c(327)](function (_0x88c880) {
    const _0x3975ad = _0x3d316c;
    !!_0x88c880 && console[_0x3975ad(317)](_0x3975ad(318) + _0x88c880);
  });
  _0x4b682b[_0x3d316c(319)](_0x3d316c(326), true);
  logger[_0x3d316c(316)](_0x4b682b[_0x3d316c(320)].id, _0x3d316c(315));
};