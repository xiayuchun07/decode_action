
function a0_0x5796() {
  const _0x21849a = ["pomelo", "beforeStartup", "async", "26031DMtnVY", "937KGisqz", "7742736kPcDbs", "pomelo-logger", "getLogger", "afterStartup", "2337950JMnSUp", "curServer", "2188NCryvJ", "timeEnd", "exports", "loadConfig finished", "./domain/lifecycleDomain", "9960447xhMNBk", "ShutDown", "info", "afterStartAll", "beforeShutdown", "2800OpwXfn", "206789tnYOsE", "6369543ibcrtW", "8KxxsJy", "time", "232NxhgcT"];
  a0_0x5796 = function () {
    return _0x21849a;
  };
  return a0_0x5796();
}
const a0_0x12057b = a0_0x3b3c;
function a0_0x3b3c(_0x44120d, _0x36acb1) {
  const _0x444b70 = a0_0x5796();
  a0_0x3b3c = function (_0xf433ce, _0xc2f17b) {
    _0xf433ce = _0xf433ce - 244;
    let _0x39c29b = _0x444b70[_0xf433ce];
    return _0x39c29b;
  };
  return a0_0x3b3c(_0x44120d, _0x36acb1);
}
(function (_0x3063b0, _0x3de36a) {
  const _0x3b230a = a0_0x3b3c;
  const _0x21be52 = _0x3063b0();
  while (true) {
    try {
      const _0x36f1fe = -parseInt(_0x3b230a(258)) / 1 * (parseInt(_0x3b230a(265)) / 2) + -parseInt(_0x3b230a(257)) / 3 * (-parseInt(_0x3b230a(253)) / 4) + -parseInt(_0x3b230a(263)) / 5 + -parseInt(_0x3b230a(259)) / 6 + -parseInt(_0x3b230a(270)) / 7 + parseInt(_0x3b230a(251)) / 8 * (-parseInt(_0x3b230a(250)) / 9) + -parseInt(_0x3b230a(248)) / 10 * (-parseInt(_0x3b230a(249)) / 11);
      if (_0x36f1fe === _0x3de36a) {
        break;
      } else {
        _0x21be52.push(_0x21be52.shift());
      }
    } catch (_0x41fd74) {
      _0x21be52.push(_0x21be52.shift());
    }
  }
})(a0_0x5796, 853214);
let pomelo = require("pomelo");
let async = require(a0_0x12057b(256));
let logger = require(a0_0x12057b(260))[a0_0x12057b(261)](a0_0x12057b(254));
let lifecycleDomain = require(a0_0x12057b(269));
module[a0_0x12057b(267)][a0_0x12057b(255)] = function (_0x26a291, _0x5cc2fa) {
  const _0xdca2da = a0_0x12057b;
  logger[_0xdca2da(245)](_0x26a291.curServer.id, _0xdca2da(255));
  _0x5cc2fa();
};
module[a0_0x12057b(267)][a0_0x12057b(262)] = function (_0x3320c4, _0x12cbe2) {
  const _0x1cd5b7 = a0_0x12057b;
  logger[_0x1cd5b7(245)](_0x3320c4.curServer.id, _0x1cd5b7(262));
  _0x12cbe2();
};
module[a0_0x12057b(267)][a0_0x12057b(247)] = function (_0x8ed053, _0x59efed) {
  const _0x566e44 = a0_0x12057b;
  logger[_0x566e44(245)](_0x8ed053.curServer.id, "beforeShutdown");
  console[_0x566e44(252)](_0x566e44(244) + _0x8ed053[_0x566e44(264)].id);
  console[_0x566e44(266)](_0x566e44(244) + _0x8ed053.curServer.id);
  _0x59efed();
};
module.exports[a0_0x12057b(246)] = function (_0x461811) {
  const _0x49c730 = a0_0x12057b;
  logger[_0x49c730(245)](_0x461811[_0x49c730(264)].id, "afterStartAll");
  lifecycleDomain[_0x49c730(246)](function () {
    const _0xbdfc = _0x49c730;
    logger[_0xbdfc(245)](_0x461811[_0xbdfc(264)].id, _0xbdfc(268));
  });
};