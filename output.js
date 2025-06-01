
const a0_0x493ac1 = a0_0x29a3;
(function (_0x5d01ac, _0x4e4091) {
  const _0x3afbb2 = a0_0x29a3;
  const _0x4dfa64 = _0x5d01ac();
  while (true) {
    try {
      const _0x2c525a = -parseInt(_0x3afbb2(251)) / 1 * (parseInt(_0x3afbb2(258)) / 2) + -parseInt(_0x3afbb2(215)) / 3 * (-parseInt(_0x3afbb2(238)) / 4) + -parseInt(_0x3afbb2(260)) / 5 * (-parseInt(_0x3afbb2(272)) / 6) + parseInt(_0x3afbb2(201)) / 7 + parseInt(_0x3afbb2(190)) / 8 * (parseInt(_0x3afbb2(224)) / 9) + -parseInt(_0x3afbb2(226)) / 10 * (-parseInt(_0x3afbb2(192)) / 11) + -parseInt(_0x3afbb2(217)) / 12 * (parseInt(_0x3afbb2(242)) / 13);
      if (_0x2c525a === _0x4e4091) {
        break;
      } else {
        _0x4dfa64.push(_0x4dfa64.shift());
      }
    } catch (_0x4d4e95) {
      _0x4dfa64.push(_0x4dfa64.shift());
    }
  }
})(a0_0x19fa, 414710);
let code = require(a0_0x493ac1(216));
let token = require(a0_0x493ac1(275));
let userDao = require("../../../dao/userDao");
let logger = require(a0_0x493ac1(271))[a0_0x493ac1(243)](a0_0x493ac1(255));
let userInfoServices = require("../../../services/userInfoServices");
let pomeloServices = require(a0_0x493ac1(220));
let configServices = require(a0_0x493ac1(250));
let dispatch = require(a0_0x493ac1(222));
let rpcAPI = require("../../../API/rpcAPI");
let commonDao = require(a0_0x493ac1(196));
let pushAPI = require("../../../API/pushAPI");
let redisService = require("../../../services/redisService");
let pomelo = require("pomelo");
module[a0_0x493ac1(229)] = function (_0x5d550a) {
  return new Handler(_0x5d550a);
};
function a0_0x29a3(_0x4a8947, _0x55f494) {
  const _0x3054a3 = a0_0x19fa();
  a0_0x29a3 = function (_0x31773f, _0x2e0484) {
    _0x31773f = _0x31773f - 190;
    let _0x3198bd = _0x3054a3[_0x31773f];
    return _0x3198bd;
  };
  return a0_0x29a3(_0x4a8947, _0x55f494);
}
function a0_0x19fa() {
  const _0x14eb61 = ["62124viOrMZ", "updateUserData", "getServersByType", "../../../services/pomeloServices", "userInfo", "../../../util/dispatcher", "prototype", "27009UajyJd", "findOneData", "2140ihxpfF", "kick", "pushAll", "exports", "logout", "token", "deviceID", "frontendId", "now", "getServerId", "] close session and leave begin lastLoginTime = ", "config", "6308McjTtW", "gameRule", "getRoomGameDataByRoomID", "set", "2600YogAcC", "getLogger", "updateUserDataByUid", "slice", "bind", "connector entry error:", "lastLoginTime", "app", "../../../services/configServices", "19cZVdwz", "closed", "number", "getUserDataByUid", "logic", "game", "kick uid err", "1064xALZqg", "sessionService", "5EeqaRF", "getNewUserEmail", "accountModel", "info", "lastLoginIP", "game.roomRemote.leaveRoom", "error", "account", "nickname", "FAIL", "stringify", "pomelo-logger", "2046444HVvupO", "phoneAccount", "allServerStarted", "../../../util/token", "232jJSZGG", "emailArr", "35123HYZzis", "createUserThenLoad", "getClientAddressBySessionId", "get", "../../../dao/commonDao", "] logout close session and leave begin", "entry", "not find leave user uid:", "isUserInRoom", "587139UWwaZX", "TOKEN_INFO_ERROR", "length", "sex", "uid", "gameType", "user entry data = ", "kickUserPush", "rpc", "mobilePhone", "dispatch", "roomID", "address", "parseToken", "504iMFvbM", "../../../constant/code"];
  a0_0x19fa = function () {
    return _0x14eb61;
  };
  return a0_0x19fa();
}
let Handler = function (_0x4f2020) {
  const _0x1caf2d = a0_0x493ac1;
  this[_0x1caf2d(249)] = _0x4f2020;
};
Handler[a0_0x493ac1(223)][a0_0x493ac1(198)] = async function (_0x5b3073, _0x1557c3, _0x59df01) {
  const _0x18d824 = a0_0x493ac1;
  try {
    let _0x496f5a = this[_0x18d824(249)][_0x18d824(195)](_0x18d824(274));
    if (!_0x496f5a) {
      _0x59df01(null, {
        code: code.SERVER_MAINTENANCE
      });
      return;
    }
    if (!_0x5b3073[_0x18d824(231)]) {
      _0x59df01(null, {
        code: code.REQUEST_DATA_ERROR
      });
      return;
    }
    let _0x57301d = token[_0x18d824(214)](_0x5b3073[_0x18d824(231)]);
    if (!token.checkToken(_0x57301d)) {
      logger[_0x18d824(263)](_0x18d824(207) + JSON[_0x18d824(270)](_0x5b3073));
      _0x59df01(null, {
        code: code[_0x18d824(202)]
      });
      return;
    }
    let _0x260349 = _0x57301d.uid;
    let _0x26748d = await userDao[_0x18d824(254)](_0x260349);
    let _0x58310e = _0x5b3073[_0x18d824(221)];
    _0x58310e[_0x18d824(268)] && _0x58310e[_0x18d824(268)][_0x18d824(203)] > 11 && (_0x58310e[_0x18d824(268)] = _0x58310e[_0x18d824(268)].slice(0, 11));
    let _0x45ad3d = this[_0x18d824(249)][_0x18d824(195)](_0x18d824(259));
    let _0x2578c2 = await _0x45ad3d.getByUid(_0x260349);
    if (_0x2578c2 && _0x26748d[_0x18d824(232)] != _0x5b3073[_0x18d824(232)]) {
      let _0x5c1e55 = _0x2578c2[0] && _0x2578c2[0][_0x18d824(233)];
      pushAPI[_0x18d824(208)]({
        uid: _0x260349
      }, [{
        uid: _0x260349,
        sid: _0x5c1e55
      }]);
    }
    let _0x2489e6 = Date[_0x18d824(234)]();
    let _0x543109 = function () {
      return new Promise((_0x11433e, _0x4470ec) => {
        const _0x50766e = a0_0x29a3;
        _0x45ad3d[_0x50766e(227)](_0x260349, function (_0x3581d2) {
          const _0x3c64a9 = _0x50766e;
          !!_0x3581d2 && logger[_0x3c64a9(266)](_0x3c64a9(257));
          _0x1557c3.on(_0x3c64a9(252), onUserLeave[_0x3c64a9(246)](null, this[_0x3c64a9(249)]));
          _0x1557c3[_0x3c64a9(246)](_0x260349, function (_0x4ec1b0) {
            const _0x29e88e = _0x3c64a9;
            !!_0x4ec1b0 ? _0x4470ec(code[_0x29e88e(269)]) : (_0x1557c3[_0x29e88e(241)](_0x29e88e(248), _0x2489e6), _0x1557c3[_0x29e88e(228)](), _0x11433e());
          });
        }[_0x50766e(246)](this));
      });
    }[_0x18d824(246)](this);
    await _0x543109();
    !_0x26748d && (_0x26748d = await userInfoServices[_0x18d824(193)](_0x260349, _0x58310e));
    if (!!_0x26748d.isBlockedAccount) {
      _0x59df01(null, {
        code: code.BLOCKED_ACCOUNT
      });
      return;
    }
    let _0x1529a0 = "";
    let _0x1294eb = "";
    let _0x2c9e50 = "";
    if (_0x26748d[_0x18d824(212)]) {
      let _0x45ad46 = this[_0x18d824(249)][_0x18d824(219)](_0x18d824(256));
      let _0x11a509 = dispatch[_0x18d824(211)](_0x26748d[_0x18d824(212)], _0x45ad46);
      let _0x36d863 = await rpcAPI[_0x18d824(200)](_0x11a509.id, _0x1557c3[_0x18d824(205)], _0x26748d[_0x18d824(212)]);
      if (_0x36d863) {
        _0x1529a0 = _0x26748d[_0x18d824(212)];
        await pomeloServices.pushSessionData(_0x1557c3, "roomID", _0x26748d[_0x18d824(212)]);
        let _0x1c9fd7 = await rpcAPI[_0x18d824(240)](_0x11a509.id, _0x1529a0);
        _0x1294eb = _0x1c9fd7[_0x18d824(206)];
        _0x2c9e50 = _0x1c9fd7[_0x18d824(239)];
      }
    }
    let _0x4e9a93 = {
      syncLock: 0,
      lastLoginIP: _0x45ad3d[_0x18d824(194)](_0x1557c3.id).ip.split(":").pop(),
      lastLoginTime: _0x2489e6,
      frontendId: this[_0x18d824(249)][_0x18d824(235)](),
      roomID: _0x1529a0
    };
    if (_0x26748d[_0x18d824(267)] == "" || _0x26748d[_0x18d824(210)] == "") {
      let _0xb26de4 = await commonDao[_0x18d824(225)](_0x18d824(262), {
        uid: _0x260349
      });
      _0xb26de4 && (_0x4e9a93[_0x18d824(267)] = _0xb26de4[_0x18d824(267)], _0x4e9a93.mobilePhone = _0xb26de4[_0x18d824(273)]);
    }
    if (!!_0x58310e && _0x58310e.nickname) {
      _0x4e9a93[_0x18d824(268)] = _0x58310e[_0x18d824(268)];
    }
    if (!!_0x58310e && _0x58310e[_0x18d824(264)]) {
      _0x4e9a93[_0x18d824(264)] = _0x58310e[_0x18d824(264)];
    }
    if (!!_0x58310e && _0x18d824(204) in _0x58310e) {
      _0x4e9a93[_0x18d824(204)] = _0x58310e[_0x18d824(204)];
    }
    if (!!_0x58310e && _0x18d824(213) in _0x58310e) {
      _0x4e9a93[_0x18d824(213)] = _0x58310e[_0x18d824(213)];
    }
    if ("deviceID" in _0x5b3073) {
      _0x4e9a93[_0x18d824(232)] = _0x5b3073.deviceID;
    }
    let _0x583dfb = userInfoServices[_0x18d824(261)](_0x26748d[_0x18d824(191)], _0x26748d[_0x18d824(248)]);
    if (!!_0x583dfb) {
      _0x4e9a93[_0x18d824(191)] = _0x583dfb;
    }
    _0x26748d = await userDao[_0x18d824(244)](_0x260349, _0x4e9a93);
    _0x26748d[_0x18d824(268)] && _0x26748d[_0x18d824(268)][_0x18d824(203)] > 8 && (_0x26748d[_0x18d824(268)] = _0x26748d[_0x18d824(268)][_0x18d824(245)](0, 8));
    _0x26748d[_0x18d824(206)] = _0x1294eb;
    _0x26748d[_0x18d824(239)] = _0x2c9e50;
    let _0x43db2a = configServices.buildClientConfig(this.app[_0x18d824(195)](_0x18d824(237)));
    _0x59df01(null, {
      code: code.OK,
      msg: {
        userInfo: _0x26748d,
        config: _0x43db2a
      }
    });
  } catch (_0x30f744) {
    logger[_0x18d824(266)](_0x18d824(247) + _0x30f744);
    _0x59df01(null, {
      code: typeof _0x30f744 !== _0x18d824(253) ? 500 : _0x30f744
    });
  }
};
Handler[a0_0x493ac1(223)][a0_0x493ac1(230)] = async function (_0x1636b7, _0x32b11f, _0x58d53e) {
  const _0x592fc1 = a0_0x493ac1;
  try {
    if (!_0x32b11f || !_0x32b11f.uid) {
      return;
    }
    let _0x346f4e = _0x32b11f[_0x592fc1(205)];
    logger[_0x592fc1(263)]("[" + _0x346f4e + _0x592fc1(197));
    try {
      let _0x529c92 = await userDao.getUserDataByUid(_0x32b11f[_0x592fc1(205)]);
      if (!_0x529c92) {
        logger.error("not find leave user uid:" + _0x32b11f[_0x592fc1(205)]);
      } else {
        if (!!_0x529c92[_0x592fc1(212)]) {
          let _0x51c6da = dispatch.dispatch(_0x529c92[_0x592fc1(212)], app.getServersByType(_0x592fc1(256)));
          rpcAPI[_0x592fc1(209)](_0x592fc1(265), _0x51c6da.id, _0x529c92[_0x592fc1(212)], _0x32b11f[_0x592fc1(205)], async function (_0x37f3af) {});
        }
        let _0x27c19e = this.app[_0x592fc1(195)](_0x592fc1(259));
        _0x27c19e[_0x592fc1(227)](_0x346f4e);
        await userDao[_0x592fc1(244)](_0x32b11f[_0x592fc1(205)], {
          frontendId: ""
        });
      }
    } catch (_0x5d83a3) {
      logger[_0x592fc1(266)]("onUserLeave error:" + _0x5d83a3);
    }
  } catch (_0xb4f252) {
    logger.error("connector entry error:" + _0xb4f252);
    _0x58d53e(null, {
      code: typeof _0xb4f252 !== _0x592fc1(253) ? 500 : _0xb4f252
    });
  }
};
let onUserLeave = async function (_0x2c261d, _0x58e728) {
  const _0x156acd = a0_0x493ac1;
  if (!_0x58e728 || !_0x58e728[_0x156acd(205)]) {
    return;
  }
  let _0x50af9d = _0x58e728[_0x156acd(205)];
  let _0x4ad488 = _0x58e728[_0x156acd(195)](_0x156acd(248));
  logger[_0x156acd(263)]("[" + _0x50af9d + _0x156acd(236) + _0x4ad488);
  try {
    let _0x3a57af = await userDao[_0x156acd(218)]({
      uid: _0x58e728[_0x156acd(205)],
      lastLoginTime: {
        $lte: _0x4ad488
      }
    }, {
      frontendId: ""
    });
    if (!_0x3a57af) {
      logger.error(_0x156acd(199) + _0x58e728.uid);
    } else {
      if (_0x4ad488 <= _0x3a57af[_0x156acd(248)]) {
        if (!!_0x3a57af[_0x156acd(212)]) {
          let _0x4e47b2 = dispatch.dispatch(_0x3a57af.roomID, _0x2c261d.getServersByType(_0x156acd(256)));
          rpcAPI.rpc(_0x156acd(265), _0x4e47b2.id, _0x3a57af[_0x156acd(212)], _0x58e728[_0x156acd(205)], async function (_0x3abdb6) {});
        }
      } else {
        logger[_0x156acd(266)]("leave wrong lastLoginTime = " + JSON[_0x156acd(270)](_0x4ad488) + " userlastLoginTime = " + JSON.stringify(_0x3a57af[_0x156acd(248)]));
      }
    }
  } catch (_0x479bf3) {
    logger[_0x156acd(266)]("onUserLeave error:" + _0x479bf3);
  }
};