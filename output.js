
const a0_0x40d207 = a0_0x578b;
function a0_0x578b(_0x494810, _0x59d5c8) {
  const _0x439b4b = a0_0x3967();
  a0_0x578b = function (_0x2da819, _0x95a481) {
    _0x2da819 = _0x2da819 - 198;
    let _0x3c0694 = _0x439b4b[_0x2da819];
    return _0x3c0694;
  };
  return a0_0x578b(_0x494810, _0x59d5c8);
}
(function (_0x59ad26, _0x5b392e) {
  const _0x53c700 = a0_0x578b;
  const _0x116171 = _0x59ad26();
  while (true) {
    try {
      const _0x574a35 = -parseInt(_0x53c700(221)) / 1 * (-parseInt(_0x53c700(199)) / 2) + parseInt(_0x53c700(210)) / 3 + -parseInt(_0x53c700(198)) / 4 + -parseInt(_0x53c700(216)) / 5 + parseInt(_0x53c700(203)) / 6 + -parseInt(_0x53c700(212)) / 7 * (-parseInt(_0x53c700(220)) / 8) + -parseInt(_0x53c700(201)) / 9 * (parseInt(_0x53c700(214)) / 10);
      if (_0x574a35 === _0x5b392e) {
        break;
      } else {
        _0x116171.push(_0x116171.shift());
      }
    } catch (_0x3a9ff0) {
      _0x116171.push(_0x116171.shift());
    }
  }
})(a0_0x3967, 469777);
let async = require(a0_0x40d207(202));
let lifecycleDomain = require(a0_0x40d207(213));
function a0_0x3967() {
  const _0x5145e8 = ["afterStartAll", "exports", "parallel", "8kKcAnt", "1NYQvov", "3101920GOxZtI", "296836ctQVpw", "afterStartup", "9gMSdEB", "async", "3443280YnqWEn", "log", "timeEnd", "beforeStartup", "unionManager", "curServer", "ShutDown", "2056200oEnVpD", "time", "2330069bvLeam", "./domain/lifecycleDomain", "2582760xleADb", "beforeShutdown", "1185160EQBUPX"];
  a0_0x3967 = function () {
    return _0x5145e8;
  };
  return a0_0x3967();
}
module.exports[a0_0x40d207(206)] = function (_0x6aad85, _0x407ee4) {
  const _0x1d4c5e = a0_0x40d207;
  console[_0x1d4c5e(204)](_0x6aad85[_0x1d4c5e(208)].id, _0x1d4c5e(206));
  _0x407ee4();
};
module.exports[a0_0x40d207(200)] = function (_0x3a1fc4, _0x16a9fb) {
  console.log(_0x3a1fc4.curServer.id, "afterStartup");
  _0x16a9fb();
};
module.exports[a0_0x40d207(215)] = function (_0x18872d, _0x2959ab) {
  const _0x5854fe = a0_0x40d207;
  console.log(_0x18872d.curServer.id, _0x5854fe(215));
  console[_0x5854fe(211)](_0x5854fe(209) + _0x18872d[_0x5854fe(208)].id);
  async[_0x5854fe(219)]([function (_0x1e74e7) {
    const _0x367415 = _0x5854fe;
    _0x18872d[_0x367415(207)][_0x367415(215)](_0x1e74e7);
  }], function (_0x4b257d, _0x45c1ad) {
    const _0x5e1dc2 = _0x5854fe;
    console.log("callback in lifecycle and I think this will not hit in pomelo-sync@0.0.3", _0x4b257d, _0x45c1ad);
    console[_0x5e1dc2(205)](_0x5e1dc2(209) + _0x18872d[_0x5e1dc2(208)].id);
    _0x2959ab();
  });
};
module[a0_0x40d207(218)].afterStartAll = function (_0x764877) {
  const _0x355ed0 = a0_0x40d207;
  console[_0x355ed0(204)](_0x764877[_0x355ed0(208)].id, "afterStartAll");
  lifecycleDomain[_0x355ed0(217)]();
};