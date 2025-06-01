
const a0_0x496720 = a0_0x5c13;
function a0_0x5c13(_0x3d1cef, _0x928270) {
  const _0x2f2d8a = a0_0x524e();
  a0_0x5c13 = function (_0xcc7351, _0x1dfdd3) {
    _0xcc7351 = _0xcc7351 - 134;
    let _0x5536d2 = _0x2f2d8a[_0xcc7351];
    return _0x5536d2;
  };
  return a0_0x5c13(_0x3d1cef, _0x928270);
}
(function (_0x49a26e, _0x318666) {
  const _0x49181a = a0_0x5c13;
  const _0x38ab = _0x49a26e();
  while (true) {
    try {
      const _0x4d3bbd = -parseInt(_0x49181a(140)) / 1 * (-parseInt(_0x49181a(137)) / 2) + -parseInt(_0x49181a(147)) / 3 * (parseInt(_0x49181a(139)) / 4) + -parseInt(_0x49181a(146)) / 5 * (parseInt(_0x49181a(157)) / 6) + parseInt(_0x49181a(134)) / 7 * (parseInt(_0x49181a(162)) / 8) + -parseInt(_0x49181a(156)) / 9 + -parseInt(_0x49181a(143)) / 10 * (parseInt(_0x49181a(161)) / 11) + -parseInt(_0x49181a(149)) / 12 * (-parseInt(_0x49181a(158)) / 13);
      if (_0x4d3bbd === _0x318666) {
        break;
      } else {
        _0x38ab.push(_0x38ab.shift());
      }
    } catch (_0x5e9ace) {
      _0x38ab.push(_0x38ab.shift());
    }
  }
})(a0_0x524e, 922926);
function a0_0x524e() {
  const _0x2b52e3 = ["curServer", "6739101RnDWJm", "1038RVnmHF", "26QDchNM", "---------game Server Start afterStartAll--------------", "./domain/lifecycleDomain", "11HWhMCE", "32WDJVtt", "pomelo", "1500268THQjLS", "after start all err:", "beforeStartup", "2239364ULqHkW", "exports", "4DZurms", "1KzFgKs", "../../dao/commonDao", "afterStartAll", "2807710lPqlqc", "ShutDown", "pomelo-logger", "16015PBwRHn", "1781139sQHPkM", "async", "6740040uTCoPU", "userModel", "beforeShutdown", "error", "updateAllData", "info"];
  a0_0x524e = function () {
    return _0x2b52e3;
  };
  return a0_0x524e();
}
let logger = require(a0_0x496720(145)).getLogger(a0_0x496720(163));
let async = require(a0_0x496720(148));
let lifecycleDomain = require(a0_0x496720(160));
let commonDao = require(a0_0x496720(141));
module[a0_0x496720(138)][a0_0x496720(136)] = function (_0x29f00c, _0x788de1) {
  const _0xe1ed0a = a0_0x496720;
  logger[_0xe1ed0a(154)](_0x29f00c[_0xe1ed0a(155)].id, _0xe1ed0a(136));
  _0x788de1();
};
module.exports.afterStartup = function (_0x3cb564, _0x2654ec) {
  const _0x4df349 = a0_0x496720;
  logger[_0x4df349(154)](_0x3cb564[_0x4df349(155)].id, "afterStartup");
  _0x2654ec();
};
module[a0_0x496720(138)][a0_0x496720(151)] = function (_0x519dae, _0x21143a) {
  const _0x16dbde = a0_0x496720;
  logger[_0x16dbde(154)](_0x519dae[_0x16dbde(155)].id, "beforeShutdown");
  console.time(_0x16dbde(144) + _0x519dae[_0x16dbde(155)].id);
  _0x21143a();
};
module[a0_0x496720(138)][a0_0x496720(142)] = async function (_0x19c60a) {
  const _0x10f54c = a0_0x496720;
  await lifecycleDomain[_0x10f54c(142)]().catch(function (_0x828189) {
    const _0x239c9f = _0x10f54c;
    !!_0x828189 && console[_0x239c9f(152)](_0x239c9f(135) + _0x828189);
  });
  await commonDao[_0x10f54c(153)](_0x10f54c(150), {
    isRobot: true
  }, {
    roomID: "",
    frontendId: ""
  });
  logger[_0x10f54c(154)](_0x10f54c(159));
  logger[_0x10f54c(154)](_0x19c60a.curServer.id, "afterStartAll");
};