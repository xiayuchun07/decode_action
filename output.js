
const a0_0x555270 = a0_0x11a9;
(function (_0x593d4f, _0x185a28) {
  const _0x2105e2 = a0_0x11a9;
  const _0x46e14b = _0x593d4f();
  while (true) {
    try {
      const _0x3c91a6 = parseInt(_0x2105e2(275)) / 1 + parseInt(_0x2105e2(321)) / 2 * (-parseInt(_0x2105e2(273)) / 3) + parseInt(_0x2105e2(284)) / 4 + parseInt(_0x2105e2(291)) / 5 * (-parseInt(_0x2105e2(294)) / 6) + parseInt(_0x2105e2(274)) / 7 + parseInt(_0x2105e2(330)) / 8 + parseInt(_0x2105e2(271)) / 9 * (parseInt(_0x2105e2(350)) / 10);
      if (_0x3c91a6 === _0x185a28) {
        break;
      } else {
        _0x46e14b.push(_0x46e14b.shift());
      }
    } catch (_0x3cba89) {
      _0x46e14b.push(_0x46e14b.shift());
    }
  }
})(a0_0x4e0f, 968468);
let code = require(a0_0x555270(313));
let unionManager = require(a0_0x555270(316));
let userDao = require("../../../dao/userDao");
let commonDao = require(a0_0x555270(308));
let rpcAPI = require(a0_0x555270(311));
let dispatch = require(a0_0x555270(314));
let userInfoServices = require(a0_0x555270(310));
let redisService = require("../../../services/redisService");
let logger = require(a0_0x555270(269))[a0_0x555270(333)]("logic");
function a0_0x4e0f() {
  const _0x4e827b = ["game", "findOneData", "buildGameRoomUserInfo", "stack", "] joinWatch end errMsg =", "message", "885860HOFobK", "] ask createRoom Again begin", "gameRule", "createRoomBR", "] user create new room begin", " unionID = ", "quickJoin code:", "25qzrbws", "getUserDataByUid", "number", "2299722ZqqGtu", "uid", "getHongBao", "dispatch", "../../../services/gameAgainServices", "  isUserInRoom = ", "updateUserData", "REQUEST_DATA_ERROR", "success", "info", "prototype", "createRoom", "INVALID_UERS", "fail code = ", "../../../dao/commonDao", "createAndWatch", "../../../services/userInfoServices", "../../../API/rpcAPI", "] create br room result ", "../../../constant/code", "../../../util/dispatcher", "] create room loop uid = ", "../domain/unionManager", "isLocked", "] 正在快速加入房间请稍后", "exports", "Creat-Again-Room", "18430aqZhgL", "getUnion", "userModel", "get", "joinWatch", "getLogByType", "app", "stringify", "= success", "4277528Wqedue", "Quick-JOIN-Room", "getUnionRoomList", "getLogger", "FAIL", "createRoom code:", "Creat-New-Room", "roomID", "frontendId", "unLock", "joinRoom", "gameLimitModel", "gameRuleID", "createRoomAgain", "isUserInRoom", " oldRoomID = ", "gameType", "getRoomByID", "] ask joinWatch begin roomID = ", "getUnionInfo", "5050TTZemb", "] userLeaveRoom uid = ", "unionID", "] in other room oldRoomID = ", "../../../services/logServices", "pomelo-logger", "] createRoom but in room and join resCode = ", "22293OThsSl", "getServersByType", "363XXteSB", "7865900MLHHuS", "869177ixincU", "getDataCount", "error"];
  a0_0x4e0f = function () {
    return _0x4e827b;
  };
  return a0_0x4e0f();
}
const gameAgainServices = require(a0_0x555270(298));
const logerService = require(a0_0x555270(354));
function a0_0x11a9(_0x44f092, _0x49239a) {
  const _0x2c0e72 = a0_0x4e0f();
  a0_0x11a9 = function (_0x1d3dc3, _0x2ee029) {
    _0x1d3dc3 = _0x1d3dc3 - 269;
    let _0x5cab0a = _0x2c0e72[_0x1d3dc3];
    return _0x5cab0a;
  };
  return a0_0x11a9(_0x44f092, _0x49239a);
}
module[a0_0x555270(319)] = function (_0x273ad7) {
  return new Handler(_0x273ad7);
};
let Handler = function (_0x3d6e5b) {
  const _0x1c5b6a = a0_0x555270;
  this[_0x1c5b6a(327)] = _0x3d6e5b;
};
Handler[a0_0x555270(304)][a0_0x555270(349)] = async function (_0x1aee3e, _0x474ab9, _0x2a14ca) {
  const _0x3fd040 = a0_0x555270;
  if (!_0x474ab9[_0x3fd040(295)]) {
    _0x2a14ca(null, {
      code: code[_0x3fd040(306)]
    });
    return;
  }
  if (!_0x1aee3e[_0x3fd040(352)]) {
    _0x2a14ca(null, {
      code: code.REQUEST_DATA_ERROR
    });
    return;
  }
  let _0x260c5b = await unionManager[_0x3fd040(322)](_0x1aee3e.unionID);
  let _0x13b885 = _0x260c5b[_0x3fd040(349)](_0x474ab9[_0x3fd040(295)]);
  let _0x272857 = {
    uid: _0x474ab9[_0x3fd040(295)],
    unionID: _0x1aee3e.unionID
  };
  let _0x533628 = [];
  let _0x1f65ad = await commonDao[_0x3fd040(279)](_0x3fd040(341), _0x272857);
  _0x1f65ad && (_0x533628 = _0x1f65ad.list || []);
  _0x272857 = {
    "unionInfo.unionID": _0x1aee3e[_0x3fd040(352)]
  };
  let _0x117c8f = await commonDao[_0x3fd040(276)](_0x3fd040(323), _0x272857);
  _0x272857[_0x3fd040(338)] = {
    $ne: ""
  };
  let _0x40e43e = await commonDao[_0x3fd040(276)](_0x3fd040(323), _0x272857);
  let _0x155ec3 = {
    plusInfo: {
      userCount: _0x117c8f,
      onLineCount: _0x40e43e
    },
    unionInfo: _0x13b885,
    roomList: _0x260c5b.getUnionRoomList(),
    gameLimit: _0x533628
  };
  _0x2a14ca(null, {
    code: code.OK,
    msg: _0x155ec3
  });
};
Handler[a0_0x555270(304)].getUnionRoomList = async function (_0x295da3, _0x1cafb7, _0x36a2ca) {
  const _0x45a82b = a0_0x555270;
  if (!_0x1cafb7[_0x45a82b(295)]) {
    _0x36a2ca(null, {
      code: code.INVALID_UERS
    });
    return;
  }
  if (!_0x295da3[_0x45a82b(352)]) {
    _0x36a2ca(null, {
      code: code[_0x45a82b(301)]
    });
    return;
  }
  let _0x239c78 = await unionManager[_0x45a82b(322)](_0x295da3[_0x45a82b(352)]);
  _0x36a2ca(null, {
    code: code.OK,
    msg: {
      roomList: _0x239c78[_0x45a82b(332)]()
    }
  });
};
Handler[a0_0x555270(304)].createRoom = async function (_0x22826e, _0x16e4cb, _0x2b11db) {
  const _0x51aaa4 = a0_0x555270;
  let _0x3a2a20 = logerService[_0x51aaa4(326)](_0x22826e[_0x51aaa4(346)]);
  _0x3a2a20[_0x51aaa4(303)]("[" + _0x16e4cb.uid + _0x51aaa4(288));
  let _0x34665a = _0x16e4cb[_0x51aaa4(295)] + _0x51aaa4(336);
  let _0x4179e8 = redisService[_0x51aaa4(317)](_0x34665a, 3);
  if (_0x4179e8) {
    _0x3a2a20.error("[" + _0x16e4cb[_0x51aaa4(295)] + "] creating ......");
    _0x2b11db(null, {
      code: code.OK
    });
    return;
  }
  if (!_0x16e4cb.uid) {
    _0x2b11db(null, {
      code: code.INVALID_UERS
    });
    redisService[_0x51aaa4(339)](_0x34665a);
    return;
  }
  if (!_0x22826e[_0x51aaa4(352)] || !_0x22826e[_0x51aaa4(342)] && !_0x22826e[_0x51aaa4(286)]) {
    _0x2b11db(null, {
      code: code[_0x51aaa4(301)]
    });
    redisService[_0x51aaa4(339)](_0x34665a);
    return;
  }
  try {
    let _0x5b18eb = await userDao[_0x51aaa4(292)](_0x16e4cb.uid);
    if (!_0x5b18eb) {
      _0x2b11db(null, {
        code: code[_0x51aaa4(306)]
      });
      redisService.unLock(_0x34665a);
      return;
    }
    if (_0x22826e[_0x51aaa4(346)] >= 200) {
      let _0x46ade2 = await unionManager[_0x51aaa4(322)](_0x22826e[_0x51aaa4(352)]);
      let _0x22600f = await _0x46ade2[_0x51aaa4(287)](_0x22826e[_0x51aaa4(342)], _0x22826e[_0x51aaa4(286)], userInfoServices.buildGameRoomUserInfo(_0x5b18eb));
      _0x3a2a20.info("[" + _0x16e4cb[_0x51aaa4(295)] + _0x51aaa4(312) + (_0x22600f == 0 ? _0x51aaa4(329) : "fail code = " + _0x22600f) + " ");
      _0x2b11db(null, {
        code: _0x22600f
      });
    } else {
      let _0x2f4ce4 = this[_0x51aaa4(327)][_0x51aaa4(272)](_0x51aaa4(278));
      let _0x31932d = _0x16e4cb.get(_0x51aaa4(337));
      let _0x49503d = await unionManager[_0x51aaa4(322)](_0x22826e[_0x51aaa4(352)]);
      if (!!_0x31932d) {
        let _0x1ac1eb = dispatch[_0x51aaa4(297)](_0x31932d, _0x2f4ce4);
        let _0x224373 = await rpcAPI[_0x51aaa4(344)](_0x1ac1eb.id, _0x16e4cb[_0x51aaa4(295)], _0x31932d);
        _0x3a2a20[_0x51aaa4(303)]("[" + _0x16e4cb[_0x51aaa4(295)] + _0x51aaa4(315) + _0x16e4cb[_0x51aaa4(295)] + _0x51aaa4(345) + _0x31932d + _0x51aaa4(299) + _0x224373 + " ");
        if (!!_0x224373) {
          let _0x2459fd = await _0x49503d[_0x51aaa4(340)](_0x31932d, userInfoServices.buildGameRoomUserInfo(_0x5b18eb));
          _0x3a2a20.info("[" + _0x16e4cb[_0x51aaa4(295)] + _0x51aaa4(270) + _0x2459fd + " ");
          redisService[_0x51aaa4(339)](_0x34665a);
          return;
        }
      }
      let _0x2f60d5 = _0x22826e[_0x51aaa4(309)] || false;
      let _0x1f72b6 = await _0x49503d[_0x51aaa4(305)](_0x22826e[_0x51aaa4(342)], _0x22826e[_0x51aaa4(286)], userInfoServices[_0x51aaa4(280)](_0x5b18eb), _0x2f60d5, _0x22826e[_0x51aaa4(346)]);
      _0x3a2a20[_0x51aaa4(303)]("[" + _0x16e4cb[_0x51aaa4(295)] + "] create room result " + (_0x1f72b6 == 0 ? "= success" : _0x51aaa4(307) + _0x1f72b6) + " ");
      redisService[_0x51aaa4(339)](_0x34665a);
      _0x2b11db(null, {
        code: _0x1f72b6
      });
    }
  } catch (_0x263199) {
    typeof _0x263199 === _0x51aaa4(293) ? (_0x3a2a20[_0x51aaa4(277)]("createRoom code:" + _0x263199), redisService[_0x51aaa4(339)](_0x34665a), _0x2b11db(null, {
      code: _0x263199
    })) : (_0x3a2a20[_0x51aaa4(277)](JSON[_0x51aaa4(328)](_0x263199[_0x51aaa4(283)])), redisService[_0x51aaa4(339)](_0x34665a), _0x2b11db(null, {
      code: 500
    }));
  }
};
Handler.prototype[a0_0x555270(325)] = async function (_0x5c94cf, _0x5b6bfc, _0x14dec0) {
  const _0xbaf810 = a0_0x555270;
  let _0x1d6497 = logerService[_0xbaf810(326)](_0x5c94cf[_0xbaf810(346)]);
  _0x1d6497[_0xbaf810(303)]("[" + _0x5b6bfc[_0xbaf810(295)] + _0xbaf810(348) + _0x5c94cf[_0xbaf810(337)]);
  if (!_0x5b6bfc.uid) {
    _0x14dec0(null, {
      code: code.INVALID_UERS
    });
    return;
  }
  let _0x1082a2 = parseInt(_0x5c94cf[_0xbaf810(337)]);
  if (!_0x1082a2) {
    _0x14dec0(null, {
      code: code[_0xbaf810(301)]
    });
    return;
  }
  if (!_0x5c94cf.unionID) {
    _0x14dec0(null, {
      code: code.REQUEST_DATA_ERROR
    });
    return;
  }
  try {
    let _0x26654e = await userDao[_0xbaf810(292)](_0x5b6bfc[_0xbaf810(295)]);
    if (!_0x26654e) {
      _0x14dec0(null, {
        code: code[_0xbaf810(306)]
      });
      return;
    }
    let _0x19703e = _0x5b6bfc[_0xbaf810(324)](_0xbaf810(337));
    if (!!_0x19703e && _0x1082a2 !== _0x19703e) {
      _0x1d6497[_0xbaf810(303)]("[" + _0x5b6bfc[_0xbaf810(295)] + _0xbaf810(353) + _0x19703e);
      let _0x239cce = dispatch.dispatch(_0x19703e, this.app[_0xbaf810(272)]("game"));
      let _0x40a7c6 = await rpcAPI.isUserInRoom(_0x239cce.id, _0x5b6bfc[_0xbaf810(295)], _0x19703e);
      !!_0x40a7c6 && (_0x1082a2 = _0x19703e);
    }
    let _0x39ec39 = dispatch[_0xbaf810(297)](_0x1082a2, this.app[_0xbaf810(272)](_0xbaf810(278)));
    let _0x527cf5 = await rpcAPI[_0xbaf810(325)](_0x39ec39.id, userInfoServices[_0xbaf810(280)](_0x26654e), _0x1082a2);
    _0x1d6497[_0xbaf810(303)]("[" + _0x5b6bfc.uid + "] join watch end result  resCode = " + (_0x527cf5 == 0 ? _0xbaf810(302) : _0x527cf5) + " ");
    _0x14dec0(null, {
      code: _0x527cf5
    });
  } catch (_0x19d1f6) {
    typeof _0x19d1f6 === _0xbaf810(293) ? (_0x1d6497[_0xbaf810(277)]("[" + _0x5b6bfc.uid + "] joinWatch end code =" + _0x19d1f6), _0x14dec0(null, {
      code: _0x19d1f6
    })) : (_0x1d6497.error("[" + _0x5b6bfc[_0xbaf810(295)] + _0xbaf810(282) + _0x19d1f6[_0xbaf810(281)]), _0x14dec0(null, {
      code: 500
    }));
  }
};
Handler[a0_0x555270(304)][a0_0x555270(343)] = async function (_0x3cb1b7, _0x3bcc78, _0x5b3c10) {
  const _0x85703b = a0_0x555270;
  let _0xd17a08 = logerService[_0x85703b(326)](_0x3cb1b7[_0x85703b(286)].gameType);
  _0xd17a08[_0x85703b(303)]("[" + _0x3bcc78[_0x85703b(295)] + _0x85703b(285));
  let _0x47016b = _0x3bcc78.uid + _0x85703b(320);
  let _0x2ebdf2 = redisService[_0x85703b(317)](_0x47016b, 3);
  if (_0x2ebdf2) {
    _0xd17a08[_0x85703b(277)]("[" + _0x3bcc78[_0x85703b(295)] + "] createRoomAgain ...");
    _0x5b3c10(null, {
      code: code.OK
    });
    return;
  }
  if (!_0x3bcc78[_0x85703b(295)]) {
    _0x5b3c10(null, {
      code: code[_0x85703b(306)]
    });
    return;
  }
  if (!_0x3cb1b7[_0x85703b(337)] && !_0x3cb1b7[_0x85703b(352)] || !_0x3cb1b7[_0x85703b(342)] && !_0x3cb1b7[_0x85703b(286)]) {
    _0x5b3c10(null, {
      code: code.REQUEST_DATA_ERROR
    });
    return;
  }
  try {
    let _0x51b0b3 = await userDao[_0x85703b(292)](_0x3bcc78[_0x85703b(295)]);
    if (!_0x51b0b3) {
      _0x5b3c10(null, {
        code: code[_0x85703b(306)]
      });
      return;
    }
    let _0x3312bd = await unionManager[_0x85703b(322)](_0x3cb1b7[_0x85703b(352)]);
    let _0x14052f = _0x3312bd[_0x85703b(347)](_0x3cb1b7[_0x85703b(337)]);
    _0x14052f && (_0xd17a08[_0x85703b(303)]("[" + _0x3bcc78[_0x85703b(295)] + _0x85703b(351) + _0x3bcc78[_0x85703b(295)] + _0x85703b(345) + _0x3cb1b7[_0x85703b(337)] + _0x85703b(289) + _0x3cb1b7[_0x85703b(352)] + "  "), await _0x14052f.userLeaveRoom(_0x3bcc78[_0x85703b(295)], false));
    let _0x40c3bc = gameAgainServices.getInstance();
    await _0x40c3bc.addUserList(_0x3cb1b7.roomID, userInfoServices[_0x85703b(280)](_0x51b0b3), _0x3312bd, _0x3cb1b7[_0x85703b(342)], _0x3cb1b7[_0x85703b(286)]);
    _0xd17a08[_0x85703b(303)]("[" + _0x3bcc78[_0x85703b(295)] + "] ask createRoom Again end");
    _0x5b3c10(null, {
      code: 0
    });
  } catch (_0x353c87) {
    typeof _0x353c87 === _0x85703b(293) ? (_0xd17a08[_0x85703b(277)](_0x85703b(335) + _0x353c87), _0x5b3c10(null, {
      code: _0x353c87
    })) : (_0xd17a08[_0x85703b(277)](_0x353c87.stack), _0x5b3c10(null, {
      code: 500
    }));
  }
};
Handler[a0_0x555270(304)].quickJoin = async function (_0x45bdb1, _0x483f59, _0x524410) {
  const _0x466421 = a0_0x555270;
  let _0x18241a = _0x483f59[_0x466421(295)] + _0x466421(331);
  let _0x9fea6a = redisService[_0x466421(317)](_0x18241a, 10);
  if (_0x9fea6a) {
    logger.error("[" + _0x483f59[_0x466421(295)] + _0x466421(318));
    return;
  }
  if (!_0x483f59[_0x466421(295)]) {
    _0x524410(null, {
      code: code[_0x466421(306)]
    });
    redisService[_0x466421(339)](_0x18241a);
    return;
  }
  if (!_0x45bdb1[_0x466421(352)]) {
    _0x524410(null, {
      code: code[_0x466421(301)]
    });
    redisService[_0x466421(339)](_0x18241a);
    return;
  }
  try {
    let _0x185d53 = await userDao[_0x466421(292)](_0x483f59.uid);
    if (!_0x185d53) {
      _0x524410(null, {
        code: code[_0x466421(306)]
      });
      redisService.unLock(_0x18241a);
      return;
    }
    let _0x4a80ca = this.app[_0x466421(272)](_0x466421(278));
    let _0x62988 = _0x483f59.get(_0x466421(337));
    let _0xf26424 = await unionManager[_0x466421(322)](_0x45bdb1[_0x466421(352)]);
    if (!!_0x62988) {
      let _0x38372e = dispatch[_0x466421(297)](_0x62988, _0x4a80ca);
      let _0x549511 = await rpcAPI[_0x466421(344)](_0x38372e.id, _0x483f59[_0x466421(295)], _0x62988);
      if (!!_0x549511) {
        _0x524410(null, {
          code: code[_0x466421(334)]
        });
        redisService[_0x466421(339)](_0x18241a);
        return;
      } else {
        let _0x418283 = _0xf26424.getRoomByID(_0x62988);
        _0x418283 && (await _0x418283.userLeaveRoom(_0x483f59[_0x466421(295)]));
      }
    }
    let _0x46d071 = await _0xf26424.quickJoin(_0x45bdb1.gameRuleID, userInfoServices[_0x466421(280)](_0x185d53));
    redisService[_0x466421(339)](_0x18241a);
    _0x524410(null, {
      code: _0x46d071
    });
  } catch (_0x289040) {
    typeof _0x289040 === _0x466421(293) ? (logger[_0x466421(277)](_0x466421(290) + _0x289040), redisService[_0x466421(339)](_0x18241a), _0x524410(null, {
      code: _0x289040
    })) : (logger[_0x466421(277)](_0x289040[_0x466421(281)]), redisService.unLock(_0x18241a), _0x524410(null, {
      code: 500
    }));
  }
};
Handler[a0_0x555270(304)][a0_0x555270(296)] = async function (_0x1960eb, _0x105148, _0x53eb8e) {
  const _0x3fb04b = a0_0x555270;
  if (!_0x105148[_0x3fb04b(295)]) {
    _0x53eb8e(null, {
      code: code[_0x3fb04b(306)]
    });
    return;
  }
  if (!_0x1960eb.unionID) {
    _0x53eb8e(null, {
      code: code[_0x3fb04b(301)]
    });
    return;
  }
  try {
    let _0x512911 = await unionManager.getUnion(_0x1960eb[_0x3fb04b(352)]);
    let _0x10d14d = await _0x512911[_0x3fb04b(296)](_0x105148.uid);
    typeof _0x10d14d === "object" ? _0x53eb8e(null, {
      code: code.OK,
      msg: {
        score: _0x10d14d.score
      },
      updateUserData: _0x10d14d[_0x3fb04b(300)]
    }) : _0x53eb8e(null, {
      code: code.OK,
      msg: {
        score: _0x10d14d
      }
    });
  } catch (_0x2cba67) {
    typeof _0x2cba67 === _0x3fb04b(293) ? (logger[_0x3fb04b(277)](_0x3fb04b(290) + _0x2cba67), _0x53eb8e(null, {
      code: _0x2cba67
    })) : (logger[_0x3fb04b(277)](_0x2cba67.stack), _0x53eb8e(null, {
      code: 500
    }));
  }
};