
const a0_0x2c43cc = a0_0x3e34;
function a0_0x3e34(_0x107fcd, _0x5baf35) {
  const _0x4e431d = a0_0x5038();
  a0_0x3e34 = function (_0x3c212d, _0x125820) {
    _0x3c212d = _0x3c212d - 305;
    let _0x5c7ede = _0x4e431d[_0x3c212d];
    return _0x5c7ede;
  };
  return a0_0x3e34(_0x107fcd, _0x5baf35);
}
function a0_0x5038() {
  const _0x35e714 = ["send", "/modifyInventoryValue", "/sendSystemBroadcast", "Access-Control-Allow-Headers", "/updateGameControllerData", "3cLCQZz", "/deleteUnionNotify", "permission", "1010540tMURBB", "1887940EpKKZD", "count", "hasOwnProperty", "app", "/reloadParameterNotify", "reloadParameterNotify err:", "../../../util/dispatcher", "../../../services/userInfoServices", "roomID", "robot", "PERMISSION_NOT_ENOUGH", "getServers", "Access-Control-Allow-Origin", "header", "Access-Control-Allow-Methods", "game.roomRemote.dissMissRoom", "3737678ywtrAl", "robot.controllerRemote.modifyInventoryValue", "rpc", "Content-Type", "broadcastPush", "uid", "data", "/dissmissroom", "../../../constant/enumeration", "pomelo", "length", "dispatch", "GAME_CONTROL", "updateKeys", "getServersByType", "/getGameControllerData", "post", "json", "game", "REQUEST_DATA_ERROR", "logic", "../../../constant/code", "serverType", "3291712hMzlyD", "getUserDataByUid", "parse", "robot.controllerRemote.updateGameControllerData", "unionID", "662329nyGaab", "async", "getLogger", "body", "../../../dao/userDao", "../../../API/pushAPI", "frontendId", "700194SkRlwa", "updateUserDataNotify", "1538202tEINuX", "PUT, GET, POST, DELETE, OPTIONS", "exports", "kind", "pomelo-logger"];
  a0_0x5038 = function () {
    return _0x35e714;
  };
  return a0_0x5038();
}
(function (_0x502061, _0x17627d) {
  const _0x400874 = a0_0x3e34;
  const _0x57d5eb = _0x502061();
  while (true) {
    try {
      const _0x2caa3a = parseInt(_0x400874(358)) / 1 + -parseInt(_0x400874(365)) / 2 + parseInt(_0x400874(310)) / 3 * (-parseInt(_0x400874(313)) / 4) + -parseInt(_0x400874(314)) / 5 + -parseInt(_0x400874(367)) / 6 + parseInt(_0x400874(330)) / 7 + parseInt(_0x400874(353)) / 8;
      if (_0x2caa3a === _0x17627d) {
        break;
      } else {
        _0x57d5eb.push(_0x57d5eb.shift());
      }
    } catch (_0x3a9f50) {
      _0x57d5eb.push(_0x57d5eb.shift());
    }
  }
})(a0_0x5038, 371060);
let pomelo = require(a0_0x2c43cc(339));
let enumeration = require(a0_0x2c43cc(338));
let code = require(a0_0x2c43cc(351));
let async = require(a0_0x2c43cc(359));
let userDao = require(a0_0x2c43cc(362));
let logger = require(a0_0x2c43cc(371))[a0_0x2c43cc(360)](a0_0x2c43cc(350));
let rpcAPI = require("../../../API/rpcAPI");
let pushAPI = require(a0_0x2c43cc(363));
let userInfoServices = require(a0_0x2c43cc(321));
let dispatch = require(a0_0x2c43cc(320));
module[a0_0x2c43cc(369)] = function (_0x67e167, _0x871560) {
  const _0x713bfa = a0_0x2c43cc;
  _0x871560.post("/updateUserDataNotify", async function (_0x11aac4, _0x5b4624) {
    const _0x30eaf8 = a0_0x3e34;
    _0x5b4624.header(_0x30eaf8(326), "*");
    _0x5b4624[_0x30eaf8(327)]("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    _0x5b4624[_0x30eaf8(327)](_0x30eaf8(308), "X-Requested-With");
    _0x5b4624.header(_0x30eaf8(308), "Content-Type");
    let _0x3400b9 = _0x11aac4.body[_0x30eaf8(335)] || null;
    let _0x1d93d3 = _0x11aac4[_0x30eaf8(361)][_0x30eaf8(343)] || null;
    try {
      let _0x411bdd = await userDao[_0x30eaf8(354)](_0x3400b9);
      if (!_0x411bdd || !_0x411bdd[_0x30eaf8(364)]) {
        _0x5b4624[_0x30eaf8(347)]({
          code: code.OK
        });
        return;
      }
      let _0x3f1926 = {};
      for (let _0x2847d8 = 0; _0x2847d8 < _0x1d93d3[_0x30eaf8(340)]; ++_0x2847d8) {
        let _0x286e26 = _0x1d93d3[_0x2847d8];
        _0x3f1926[_0x286e26] = _0x411bdd[_0x286e26];
      }
      await userInfoServices[_0x30eaf8(366)](_0x3400b9, _0x411bdd[_0x30eaf8(364)], _0x3f1926);
      _0x5b4624.json({
        code: code.OK
      });
    } catch (_0x31533f) {
      _0x5b4624[_0x30eaf8(347)]({
        code: _0x31533f
      });
    }
  });
  _0x871560[_0x713bfa(346)]("/updateUnionDataNotify", async function (_0x2cf4f9, _0x3c8dad) {
    const _0x22fedc = _0x713bfa;
    _0x3c8dad.header(_0x22fedc(326), "*");
    _0x3c8dad[_0x22fedc(327)](_0x22fedc(328), _0x22fedc(368));
    _0x3c8dad.header(_0x22fedc(308), "X-Requested-With");
    _0x3c8dad[_0x22fedc(327)](_0x22fedc(308), _0x22fedc(333));
    let _0x4d11f5 = _0x2cf4f9[_0x22fedc(361)][_0x22fedc(357)] || null;
    try {
      if (!_0x4d11f5) {
        _0x3c8dad.json({
          code: code.OK
        });
        return;
      }
      let _0x197d27 = dispatch[_0x22fedc(341)](_0x4d11f5, _0x67e167[_0x22fedc(344)]("game"));
      if (!_0x197d27) {
        _0x3c8dad[_0x22fedc(347)]({
          code: code.OK
        });
        return;
      }
      rpcAPI[_0x22fedc(332)]("game.notifyRemote.updateUnionDataNotify", _0x197d27.id, _0x4d11f5, function (_0x5a3340, _0x9e421f) {
        const _0x324ad5 = _0x22fedc;
        !!_0x5a3340 ? _0x3c8dad[_0x324ad5(305)]({
          code: _0x5a3340
        }) : _0x3c8dad.send({
          code: code.OK,
          msg: {
            recordArr: [_0x9e421f]
          }
        });
      });
    } catch (_0x46856b) {
      _0x3c8dad[_0x22fedc(347)]({
        code: _0x46856b
      });
    }
  });
  _0x871560[_0x713bfa(346)](_0x713bfa(318), function (_0x469aa3, _0x4da8e6) {
    const _0x333fcc = _0x713bfa;
    let _0xb38bd6 = pomelo[_0x333fcc(317)][_0x333fcc(325)]();
    for (let _0x43949f in _0xb38bd6) {
      if (_0xb38bd6[_0x333fcc(316)](_0x43949f)) {
        let _0x40134c = _0xb38bd6[_0x43949f];
        let _0x543719 = _0x40134c[_0x333fcc(352)] + ".notifyRemote.reloadParameterNotify";
        rpcAPI[_0x333fcc(332)](_0x543719, _0x40134c.id, function (_0x5d5407) {
          const _0x2fab3f = _0x333fcc;
          !!_0x5d5407 && logger.error(_0x2fab3f(319) + _0x5d5407);
        });
      }
    }
    _0x4da8e6.send({
      code: code.OK
    });
  });
  _0x871560[_0x713bfa(346)](_0x713bfa(307), function (_0x514b6a, _0x259d1f) {
    const _0x39a8e9 = _0x713bfa;
    pushAPI[_0x39a8e9(334)]({
      content: _0x514b6a[_0x39a8e9(361)].content
    }, function (_0x1eff50) {
      !!_0x1eff50 ? _0x259d1f.send({
        code: code.FAIL
      }) : _0x259d1f.send({
        code: code.OK
      });
    });
  });
  _0x871560[_0x713bfa(346)](_0x713bfa(345), function (_0x253aac, _0x2d1c5d) {
    const _0x4e0163 = _0x713bfa;
    let _0x32908c = parseInt(_0x253aac[_0x4e0163(361)].permission);
    if ((_0x32908c & enumeration.userPermissionType[_0x4e0163(342)]) === 0) {
      _0x2d1c5d.send({
        code: code[_0x4e0163(324)]
      });
      return;
    }
    if (!_0x253aac.body.kind) {
      _0x2d1c5d[_0x4e0163(305)]({
        code: code.REQUEST_DATA_ERROR
      });
      return;
    }
    rpcAPI[_0x4e0163(332)]("robot.controllerRemote.getGameControllerData", _0x4e0163(323), parseInt(_0x253aac.body[_0x4e0163(370)]), function (_0x1a3914, _0x492e27) {
      const _0x246a86 = _0x4e0163;
      !!_0x1a3914 ? _0x2d1c5d.send({
        code: _0x1a3914
      }) : _0x2d1c5d[_0x246a86(305)]({
        code: code.OK,
        msg: {
          recordArr: _0x492e27
        }
      });
    });
  });
  _0x871560.post(_0x713bfa(309), function (_0x886f2, _0x321506) {
    const _0x34f35b = _0x713bfa;
    let _0x1cb88e = _0x886f2[_0x34f35b(361)][_0x34f35b(312)];
    if ((_0x1cb88e & enumeration.userPermissionType[_0x34f35b(342)]) === 0) {
      _0x321506.send({
        code: code[_0x34f35b(324)]
      });
      return;
    }
    if (!_0x886f2[_0x34f35b(361)][_0x34f35b(370)]) {
      _0x321506.send({
        code: code[_0x34f35b(349)]
      });
      return;
    }
    let _0x2819fd = JSON[_0x34f35b(355)](_0x886f2[_0x34f35b(361)][_0x34f35b(336)]);
    rpcAPI[_0x34f35b(332)](_0x34f35b(356), _0x34f35b(323), parseInt(_0x886f2[_0x34f35b(361)].kind), _0x2819fd, function (_0x416430) {
      const _0x2a2df2 = _0x34f35b;
      _0x321506[_0x2a2df2(305)]({
        code: !!_0x416430 ? _0x416430 : code.OK
      });
    });
  });
  _0x871560[_0x713bfa(346)](_0x713bfa(306), function (_0x3a2f90, _0x3b3ae0) {
    const _0x109ff2 = _0x713bfa;
    let _0x59e111 = _0x3a2f90[_0x109ff2(361)][_0x109ff2(312)];
    if ((_0x59e111 & enumeration.userPermissionType.GAME_CONTROL) === 0) {
      _0x3b3ae0[_0x109ff2(305)]({
        code: code[_0x109ff2(324)]
      });
      return;
    }
    if (!_0x3a2f90[_0x109ff2(361)][_0x109ff2(370)] || !_0x3a2f90.body[_0x109ff2(335)] || !_0x3a2f90[_0x109ff2(361)][_0x109ff2(315)]) {
      _0x3b3ae0.send({
        code: code[_0x109ff2(349)]
      });
      return;
    }
    rpcAPI[_0x109ff2(332)](_0x109ff2(331), _0x109ff2(323), _0x3a2f90[_0x109ff2(361)].uid, parseInt(_0x3a2f90[_0x109ff2(361)].kind), parseFloat(_0x3a2f90[_0x109ff2(361)][_0x109ff2(315)]), function (_0xfbbaaf) {
      const _0x54532f = _0x109ff2;
      _0x3b3ae0[_0x54532f(305)]({
        code: !!_0xfbbaaf ? _0xfbbaaf : code.OK
      });
    });
  });
  _0x871560.post(_0x713bfa(311), function (_0x57fbae, _0x57eea2) {
    const _0x51029d = _0x713bfa;
    let _0x48ba31 = _0x57fbae.body[_0x51029d(312)];
    if (_0x48ba31 !== -1) {
      _0x57eea2.send({
        code: code.PERMISSION_NOT_ENOUGH
      });
      return;
    }
    if (!_0x57fbae[_0x51029d(361)][_0x51029d(357)]) {
      _0x57eea2[_0x51029d(305)]({
        code: code[_0x51029d(349)]
      });
      return;
    }
    let _0xbfce01 = dispatch[_0x51029d(341)](_0x57fbae[_0x51029d(361)][_0x51029d(357)], _0x67e167[_0x51029d(344)](_0x51029d(348)));
    rpcAPI[_0x51029d(332)]("game.notifyRemote.deleteUnionDataNotify", _0xbfce01.id, _0x57fbae.body[_0x51029d(357)], function (_0x27b27e) {
      const _0x4a67f1 = _0x51029d;
      _0x57eea2[_0x4a67f1(305)]({
        code: !!_0x27b27e ? _0x27b27e : code.OK
      });
    });
  });
  _0x871560[_0x713bfa(346)](_0x713bfa(337), async function (_0x19d4fb, _0x179794) {
    const _0x15c042 = _0x713bfa;
    let _0xec118e = _0x19d4fb[_0x15c042(361)][_0x15c042(312)];
    if (_0xec118e !== -1) {
      _0x179794[_0x15c042(305)]({
        code: code.PERMISSION_NOT_ENOUGH
      });
      return;
    }
    let _0x27d1f4 = _0x19d4fb.body[_0x15c042(322)];
    let _0xc9e23a = dispatch[_0x15c042(341)](_0x27d1f4, _0x67e167.getServersByType(_0x15c042(348)));
    rpcAPI[_0x15c042(332)](_0x15c042(329), _0xc9e23a.id, _0x27d1f4, function (_0x733063) {
      _0x179794.send({
        code: !!_0x733063 ? _0x733063 : code.OK
      });
    });
  });
};