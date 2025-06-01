
const a0_0x9581eb = a0_0x2b19;
(function (_0x2decde, _0x3aabc2) {
  const _0xe54404 = a0_0x2b19;
  const _0x5413e3 = _0x2decde();
  while (true) {
    try {
      const _0x9cd149 = -parseInt(_0xe54404(247)) / 1 * (-parseInt(_0xe54404(221)) / 2) + -parseInt(_0xe54404(248)) / 3 * (parseInt(_0xe54404(223)) / 4) + parseInt(_0xe54404(230)) / 5 + -parseInt(_0xe54404(231)) / 6 * (parseInt(_0xe54404(243)) / 7) + parseInt(_0xe54404(242)) / 8 * (-parseInt(_0xe54404(240)) / 9) + -parseInt(_0xe54404(233)) / 10 + parseInt(_0xe54404(244)) / 11;
      if (_0x9cd149 === _0x3aabc2) {
        break;
      } else {
        _0x5413e3.push(_0x5413e3.shift());
      }
    } catch (_0x5064b2) {
      _0x5413e3.push(_0x5413e3.shift());
    }
  }
})(a0_0x42b4, 331097);
let pomelo = require(a0_0x9581eb(225));
let async = require(a0_0x9581eb(237));
let logger = require("pomelo-logger")[a0_0x9581eb(238)](a0_0x9581eb(225));
let lifecycleDomain = require(a0_0x9581eb(224));
function a0_0x2b19(_0x13e5d8, _0x4a8b29) {
  const _0x5df40d = a0_0x42b4();
  a0_0x2b19 = function (_0x15ebfa, _0x395e7f) {
    _0x15ebfa = _0x15ebfa - 221;
    let _0x18eee2 = _0x5df40d[_0x15ebfa];
    return _0x18eee2;
  };
  return a0_0x2b19(_0x13e5d8, _0x4a8b29);
}
function a0_0x42b4() {
  const _0x4059e8 = ["81910LgFeig", "1671762gBxwPP", "load config finished", "5471150bjYZjj", "app", "error", "catch", "async", "getLogger", "exports", "9LHcfte", "info", "1371208mvPBRP", "7ImUJTT", "18660224USqNhi", "afterStartup", "centerManager", "1213jFQPLx", "24771aUpRFY", "142fpkZnk", "curServer", "228fctCUv", "./domain/lifecycleDomain", "pomelo", "beforeStartup", "beforeShutdown", "timeEnd", "afterStartAll"];
  a0_0x42b4 = function () {
    return _0x4059e8;
  };
  return a0_0x42b4();
}
module.exports.beforeStartup = function (_0x327ca4, _0x4dc22b) {
  const _0x38bd73 = a0_0x9581eb;
  logger[_0x38bd73(241)](_0x327ca4.curServer.id, _0x38bd73(226));
  _0x4dc22b();
};
module[a0_0x9581eb(239)][a0_0x9581eb(245)] = function (_0x14ffb1, _0x37de56) {
  const _0x44c024 = a0_0x9581eb;
  logger[_0x44c024(241)](_0x14ffb1[_0x44c024(222)].id, _0x44c024(245));
  lifecycleDomain[_0x44c024(245)](function () {
    const _0x2a7c99 = _0x44c024;
    logger[_0x2a7c99(241)](_0x14ffb1[_0x2a7c99(222)].id, _0x2a7c99(232));
    _0x37de56();
  });
};
module[a0_0x9581eb(239)][a0_0x9581eb(227)] = function (_0x45ea2b, _0x1fb127) {
  const _0x31de1b = a0_0x9581eb;
  logger[_0x31de1b(241)](_0x45ea2b.curServer.id, _0x31de1b(227));
  console.time("ShutDown" + _0x45ea2b[_0x31de1b(222)].id);
  pomelo[_0x31de1b(234)][_0x31de1b(246)].beforeShutdown(function () {
    const _0x5be1c1 = _0x31de1b;
    console[_0x5be1c1(228)]("ShutDown" + _0x45ea2b[_0x5be1c1(222)].id);
    _0x1fb127();
  }).catch(_0x322aab => {
    console.error(_0x322aab);
  });
};
module[a0_0x9581eb(239)][a0_0x9581eb(229)] = function (_0x5d48c3) {
  const _0x2419bc = a0_0x9581eb;
  logger[_0x2419bc(241)](_0x5d48c3.curServer.id, "afterStartAll");
  lifecycleDomain[_0x2419bc(229)]()[_0x2419bc(236)](_0x5dde12 => {
    const _0xb0cd66 = _0x2419bc;
    console[_0xb0cd66(235)](_0x5dde12);
  });
};