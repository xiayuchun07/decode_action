
function a0_0x1825(_0xf6f7d2, _0x483239) {
  const _0xcc8ba2 = a0_0x45f7();
  a0_0x1825 = function (_0x153035, _0x1d9a4b) {
    _0x153035 = _0x153035 - 383;
    let _0x525dc1 = _0xcc8ba2[_0x153035];
    return _0x525dc1;
  };
  return a0_0x1825(_0xf6f7d2, _0x483239);
}
const a0_0x309950 = a0_0x1825;
(function (_0x7b59e2, _0x18e049) {
  const _0x32fb04 = a0_0x1825;
  const _0x5bdd37 = _0x7b59e2();
  while (true) {
    try {
      const _0x2d698a = parseInt(_0x32fb04(441)) / 1 * (parseInt(_0x32fb04(409)) / 2) + -parseInt(_0x32fb04(460)) / 3 + parseInt(_0x32fb04(491)) / 4 + -parseInt(_0x32fb04(385)) / 5 * (parseInt(_0x32fb04(440)) / 6) + parseInt(_0x32fb04(421)) / 7 * (-parseInt(_0x32fb04(434)) / 8) + parseInt(_0x32fb04(433)) / 9 * (parseInt(_0x32fb04(389)) / 10) + -parseInt(_0x32fb04(516)) / 11 * (-parseInt(_0x32fb04(481)) / 12);
      if (_0x2d698a === _0x18e049) {
        break;
      } else {
        _0x5bdd37.push(_0x5bdd37.shift());
      }
    } catch (_0x4d1651) {
      _0x5bdd37.push(_0x5bdd37.shift());
    }
  }
})(a0_0x45f7, 924534);
let dao = require(a0_0x309950(457));
let userDao = require(a0_0x309950(447));
let commonDao = require(a0_0x309950(457));
let async = require(a0_0x309950(506));
let pushAPI = require("../API/pushAPI");
let pomelo = require(a0_0x309950(453));
let code = require(a0_0x309950(476));
let utils = require(a0_0x309950(384));
let moment = require(a0_0x309950(498));
let logger = require(a0_0x309950(411))[a0_0x309950(408)](a0_0x309950(453));
let enumeration = require("../constant/enumeration");
let service = module.exports;
function a0_0x45f7() {
  const _0x2cf2bf = ["error", "saveScore", "todayWin", "unshift", "../util/utils", "10iPocVw", "convertMongoUserDataToRedisUserData", "$gainCount", "tree", "13196210CMFeSa", "toString", "includes", "startGold", "gold", "location", "buildShortUserInfo", "hasOwnProperty", "$unionID", "limitScore", "yesterdayWin", "partner", "findData", "morentouxiang", "getNewUserEmail", "parse", "now", "endOf", "$changeCount", "getLogger", "341540zxeRfU", "FAIL", "pomelo-logger", "get", "string", "filter", "slice", "userGameRecordModel", "winRate", "startOf", "total", "find", "7zeQNSE", "type", "prohibitGame", "lastLoginIP", "getUserLowScoreAll", "floor", "buildGameRoomUserInfo", "GAME_WIN", "unionID", "length", "userRebateRecordModel", "address", "9DMqGKd", "14646760vAALHp", "userScoreModel", "getSPreadLevelAsync", "getTodayUserScore", "_id", "buildGameRoomUserInfoWithUnion", "3558090fxhiJe", "5bQiujY", "floatScore", "getUserDataTotal", "toFixed", "yesterdayDraw", "updateUserDataNotify", "../dao/userDao", "getUserSuperAll", "targetScore", "lastLoginTime", "UNION_GAME_ENTER_LIMIT_SCORE", "avatar", "pomelo", "userScoreDetailModel", "spreaderID", "getIntervalDay", "../dao/commonDao", "getRandomNum", "rebateRate", "1158981rNQnao", "SAFE_BOX", "agentMemberAchievement", "createTime", "convertRedisUserDataToMongoUserData", "achievement", "avatarFrame", "fixScoreRate", "isTest", "app", "frontendId", "getUserDataByUid", "GAME_WIN_CHOU", "directlyMemberCount", "$inc", "yesterdayRebate", "../constant/code", "day", "buildShortAgentInfo", "format", "add", "6960684oNOGzc", "uid", "updateDataEx", "userList", "map", "totalDraw", "userModel", "waterfall", "createUserThenLoad", "unionModel", "6296832WmULKW", "nickname", "schema", "userType", "score", "stringify", "groupLimit", "moment", "getStatisticsInfo", "updateUserInfoPush", "getUnionAllUser", "userBlockModel", "safeScore", "push", "log", "async", "getLimitScore", "findOneData", "scoreChangeType", "isRobot", "unionInfo", "todayDraw", "$uid", "showFixScore", "buildShortMemberInfo", "11Gwxtij", "systemEmail", "reCountUserScore", "sex", "FIX_SCORE", "YYYYMMDD", "winType"];
  a0_0x45f7 = function () {
    return _0x2cf2bf;
  };
  return a0_0x45f7();
}
service.checkBlockUser = async function (_0x1f6fc8, _0x2d1815, _0x537cda) {
  const _0x41b1d5 = a0_0x309950;
  let _0x34a1bd = code.OK;
  let _0x311baf = await dao.findOneData(_0x41b1d5(490), {
    unionID: _0x1f6fc8
  });
  if (_0x311baf && !_0x311baf[_0x41b1d5(497)]) {
    let _0x37c443 = {
      unionID: _0x1f6fc8,
      $and: [{
        userList: {
          $elemMatch: {
            uid: _0x2d1815
          }
        }
      }, {
        userList: {
          $elemMatch: {
            uid: {
              $in: _0x537cda
            }
          }
        }
      }]
    };
    let _0x558929 = await commonDao[_0x41b1d5(508)](_0x41b1d5(502), _0x37c443);
    _0x558929 && (_0x34a1bd = code.USER_BLOCK_LIMITE);
  }
  return _0x34a1bd;
};
service[a0_0x309950(507)] = async function (_0x5489d6, _0x29ab6d) {
  const _0xfff22b = a0_0x309950;
  let _0x221539 = await service[_0xfff22b(501)](_0x5489d6);
  let _0xee5d95 = _0x221539[_0xfff22b(420)](_0x3b7567 => _0x3b7567[_0xfff22b(482)] == _0x29ab6d);
  let _0x5992b2 = await service[_0xfff22b(448)](_0x29ab6d, _0x5489d6, _0x221539);
  _0xee5d95[_0xfff22b(400)] && _0x5992b2[_0xfff22b(383)](_0x29ab6d);
  let _0x4ecfad = _0x5992b2.slice();
  let _0x20f33a = code.OK;
  for (let _0x4299a8 = 0; _0x4299a8 < _0x4ecfad[_0xfff22b(430)]; _0x4299a8++) {
    let _0x173edb = _0x4ecfad[_0x4299a8];
    let _0x15c703 = _0x221539[_0xfff22b(420)](_0xd983e5 => _0xd983e5[_0xfff22b(482)] == _0x173edb);
    if (!_0x15c703[_0xfff22b(398)]) {
      continue;
    }
    let _0x2edd9f = await service[_0xfff22b(425)](_0x173edb, _0x5489d6, _0x221539);
    if (_0x2edd9f < _0x15c703[_0xfff22b(398)]) {
      _0x20f33a = code[_0xfff22b(451)];
      break;
    }
  }
  return _0x20f33a;
};
service[a0_0x309950(437)] = async function (_0x1461de, _0x300755, _0x99b528) {
  const _0x2e2399 = a0_0x309950;
  let _0x438507 = moment(_0x99b528)[_0x2e2399(418)]("d").format("x");
  let _0x4f0b39 = moment(_0x99b528).endOf("d")[_0x2e2399(479)]("x");
  let _0x2d9e7a = {
    "userList.uid": {
      $in: _0x300755
    },
    unionID: _0x1461de,
    createTime: {
      $gte: _0x438507,
      $lte: _0x4f0b39
    }
  };
  let _0x54f806 = 0;
  let _0x58fc42 = 0;
  let _0x451d07 = await commonDao[_0x2e2399(401)](_0x2e2399(416), _0x2d9e7a);
  for (let _0x23f4f8 = 0; _0x23f4f8 < _0x451d07[_0x2e2399(430)]; _0x23f4f8++) {
    let _0x4c3198 = _0x451d07[_0x23f4f8];
    let _0x42d4f1 = _0x4c3198[_0x2e2399(484)];
    for (let _0x2f68d4 = 0; _0x2f68d4 < _0x42d4f1[_0x2e2399(430)]; _0x2f68d4++) {
      let _0xa26974 = _0x42d4f1[_0x2f68d4];
      _0x300755[_0x2e2399(391)](_0xa26974[_0x2e2399(482)]) && (_0x54f806 += _0xa26974.score, _0x58fc42 += 1);
    }
  }
  return {
    todayDraw: _0x58fc42,
    todayWin: _0x54f806
  };
};
service.getTodayUserScoreBack = async function (_0x19dc5f, _0x2b0960, _0xb3d265) {
  const _0x54e848 = a0_0x309950;
  let _0x182afe = [enumeration[_0x54e848(509)].FIX_SCORE, enumeration[_0x54e848(509)][_0x54e848(472)], enumeration[_0x54e848(509)][_0x54e848(428)], enumeration[_0x54e848(509)][_0x54e848(461)], enumeration[_0x54e848(509)].GAME_START_UNION_CHOU];
  let _0x499755 = moment(_0xb3d265)[_0x54e848(418)]("d")[_0x54e848(479)]("x");
  let _0x38253 = moment(_0xb3d265).endOf("d")[_0x54e848(479)]("x");
  let _0x448a4d = {
    uid: {
      $in: _0x2b0960
    },
    unionID: _0x19dc5f,
    changeType: {
      $in: _0x182afe
    },
    createTime: {
      $gte: _0x499755,
      $lte: _0x38253
    }
  };
  let _0x325e73 = {
    _id: "$uid",
    score: {
      $sum: _0x54e848(407)
    }
  };
  let _0x5261e1 = [{
    $match: _0x448a4d
  }, {
    $group: _0x325e73
  }];
  let _0x545ff0 = 0;
  let _0x83f47b = 0;
  let _0x361854 = await commonDao[_0x54e848(499)](_0x54e848(454), _0x5261e1);
  for (let _0x45e6e4 = 0; _0x45e6e4 < _0x361854.length; _0x45e6e4++) {
    let _0x5a5dc6 = _0x361854[_0x45e6e4];
    let _0x5bb672 = _0x5a5dc6[_0x54e848(438)];
    let _0x2a4454 = parseFloat(_0x5a5dc6[_0x54e848(495)][_0x54e848(444)](2)) || 0;
    let _0x49c598 = await userDao[_0x54e848(471)](_0x5bb672);
    let _0x105b42 = _0x49c598[_0x54e848(511)][_0x54e848(420)](function (_0x37ab4c) {
      const _0x3ace7a = _0x54e848;
      return _0x37ab4c[_0x3ace7a(429)] === _0x19dc5f;
    });
    _0x545ff0 += _0x2a4454;
    _0xb3d265 == moment()[_0x54e848(479)](_0x54e848(521)) ? _0x83f47b += _0x105b42[_0x54e848(512)] : _0x83f47b += _0x105b42[_0x54e848(445)];
  }
  return {
    todayDraw: _0x83f47b,
    todayWin: _0x545ff0
  };
};
service[a0_0x309950(518)] = async function (_0x5a56dc, _0x93e111) {
  const _0x5454f3 = a0_0x309950;
  let _0x494d84 = [enumeration[_0x5454f3(509)][_0x5454f3(520)], enumeration[_0x5454f3(509)].GAME_WIN_CHOU, enumeration[_0x5454f3(509)].GAME_WIN, enumeration[_0x5454f3(509)][_0x5454f3(461)], enumeration[_0x5454f3(509)].GAME_START_UNION_CHOU];
  let _0x42ddfe = moment(_0x93e111)[_0x5454f3(418)]("d").format("x");
  let _0x35f896 = moment(_0x93e111).endOf("d")[_0x5454f3(479)]("x");
  let _0xd9aaac = {
    unionID: _0x5a56dc,
    changeType: {
      $in: _0x494d84
    },
    createTime: {
      $gte: _0x42ddfe,
      $lte: _0x35f896
    }
  };
  let _0x269b26 = {
    _id: _0x5454f3(513),
    score: {
      $sum: _0x5454f3(407)
    }
  };
  let _0x6c0fe2 = [{
    $match: _0xd9aaac
  }, {
    $group: _0x269b26
  }];
  let _0x7afe03 = await commonDao[_0x5454f3(499)]("userScoreDetailModel", _0x6c0fe2);
  for (let _0x57295a = 0; _0x57295a < _0x7afe03.length; _0x57295a++) {
    let _0x1ae5c9 = _0x7afe03[_0x57295a];
    let _0x20a677 = _0x1ae5c9[_0x5454f3(438)];
    let _0x500c0b = _0x1ae5c9[_0x5454f3(495)][_0x5454f3(444)](2);
    let _0x46cdd6 = await userDao[_0x5454f3(471)](_0x20a677);
    let _0x195f96 = _0x46cdd6[_0x5454f3(492)];
    let _0x2bae98 = _0x46cdd6.avatar;
    let _0x2c1e23 = _0x46cdd6.unionInfo.find(function (_0x1e5e08) {
      const _0x2c3eea = _0x5454f3;
      return _0x1e5e08[_0x2c3eea(429)] === _0x5a56dc;
    });
    let _0x2c7c8f = (_0x2c1e23 && _0x2c1e23[_0x5454f3(495)] || 0)[_0x5454f3(444)](2);
    let _0x25252e = (_0x2c1e23 && _0x2c1e23[_0x5454f3(524)] || 0)[_0x5454f3(444)](2);
    let _0x43ed10 = {
      unionID: _0x5a56dc,
      uid: _0x20a677,
      score: _0x500c0b,
      nickname: _0x195f96,
      userScore: _0x2c7c8f,
      saveScore: _0x25252e,
      avatar: _0x2bae98,
      dayTime: _0x93e111,
      createTime: moment()[_0x5454f3(479)]("x")
    };
    await commonDao[_0x5454f3(483)](_0x5454f3(435), {
      uid: _0x20a677,
      unionID: _0x5a56dc,
      dayTime: _0x93e111
    }, _0x43ed10, {
      upsert: true
    }).catch(_0x6b0771 => {
      const _0x5d5ab7 = _0x5454f3;
      logger[_0x5d5ab7(523)](_0x6b0771);
    });
  }
  return _0x7afe03.length;
};
service[a0_0x309950(489)] = async function (_0x52e3b2, _0x460d5b) {
  const _0x314c16 = a0_0x309950;
  let _0x2ea4db = utils[_0x314c16(458)](1, 10);
  let _0x1cc0b8 = {
    uid: _0x52e3b2
  };
  _0x1cc0b8.uid = _0x52e3b2;
  _0x1cc0b8[_0x314c16(393)] = parseInt(pomelo[_0x314c16(469)].get("config")[_0x314c16(392)] || "0");
  _0x1cc0b8[_0x314c16(452)] = _0x460d5b[_0x314c16(452)] || _0x314c16(402) + _0x2ea4db;
  _0x1cc0b8[_0x314c16(466)] = "";
  _0x1cc0b8[_0x314c16(492)] = _0x460d5b.nickname || _0x1cc0b8[_0x314c16(482)].toString();
  _0x1cc0b8[_0x314c16(519)] = _0x460d5b[_0x314c16(519)] || 0;
  _0x1cc0b8.createTime = Date[_0x314c16(405)]();
  await dao.createData("userModel", _0x1cc0b8);
  return await userDao[_0x314c16(471)](_0x52e3b2);
};
service[a0_0x309950(446)] = async function (_0x278fff, _0x6f9916, _0x2f75da) {
  const _0x347f8b = a0_0x309950;
  if (!_0x278fff) {
    return;
  }
  if (!!_0x6f9916) {
    await pushAPI[_0x347f8b(500)](_0x2f75da, [{
      uid: _0x278fff,
      sid: _0x6f9916
    }]);
  } else {
    let _0x5ed1b1 = await userDao.getUserDataByUid(_0x278fff);
    if (!_0x5ed1b1 || !_0x5ed1b1[_0x347f8b(470)] || _0x5ed1b1[_0x347f8b(510)]) {
      return;
    }
    await pushAPI[_0x347f8b(500)](_0x2f75da, [{
      uid: _0x278fff,
      sid: _0x6f9916
    }]);
  }
};
service[a0_0x309950(403)] = function (_0x5abf41, _0x1a400c) {
  const _0x54d3fd = a0_0x309950;
  let _0x703285 = _0x5abf41[_0x54d3fd(430)] > 0 ? JSON[_0x54d3fd(404)](_0x5abf41) : [];
  let _0x23f8f9 = pomelo[_0x54d3fd(469)][_0x54d3fd(412)]("config");
  let _0x1954d0 = false;
  let _0x5cafd9 = [];
  for (let _0x494065 = 0; _0x494065 < _0x703285[_0x54d3fd(430)]; ++_0x494065) {
    let _0x1b4a29 = _0x703285[_0x494065];
    utils[_0x54d3fd(456)](_0x1b4a29[_0x54d3fd(463)], Date[_0x54d3fd(405)]()) < 7 ? _0x5cafd9.push(_0x703285[_0x494065]) : _0x1954d0 = true;
  }
  let _0x54b11c = parseInt(_0x23f8f9.lastUpdateSystemEmailTime);
  if (_0x1a400c > 0 && _0x54b11c > 0 && _0x54b11c > _0x1a400c) {
    if (!!_0x23f8f9[_0x54d3fd(517)]) {
      let _0x11a66e = JSON[_0x54d3fd(404)](_0x23f8f9[_0x54d3fd(517)]);
      for (let _0x21e987 = 0; _0x21e987 < _0x11a66e.length; ++_0x21e987) {
        let _0x196a21 = _0x11a66e[_0x21e987];
        let _0x37def6 = false;
        for (let _0x3057b0 = 0; _0x3057b0 < _0x703285[_0x54d3fd(430)]; ++_0x3057b0) {
          if (_0x703285[_0x3057b0].id === _0x196a21.id) {
            _0x37def6 = true;
            break;
          }
        }
        !_0x37def6 && utils[_0x54d3fd(456)](_0x196a21[_0x54d3fd(463)], Date.now()) < 7 && (_0x5cafd9[_0x54d3fd(504)](_0x196a21), _0x1954d0 = true);
      }
    }
  }
  return _0x1954d0 ? JSON[_0x54d3fd(496)](_0x5cafd9) : null;
};
service[a0_0x309950(386)] = function (_0xd408b9) {
  const _0x8c3c7d = a0_0x309950;
  if (!_0xd408b9) {
    return null;
  }
  let _0xb23dc9 = {};
  for (let _0x516a45 in _0xd408b9) {
    if (_0x516a45 === _0x8c3c7d(438)) {
      continue;
    }
    _0xd408b9[_0x8c3c7d(396)](_0x516a45) && (typeof _0xd408b9[_0x516a45] !== _0x8c3c7d(413) && _0x516a45 !== _0x8c3c7d(474) ? _0xb23dc9[_0x516a45] = _0xd408b9[_0x516a45][_0x8c3c7d(390)]() : _0xb23dc9[_0x516a45] = _0xd408b9[_0x516a45]);
  }
  return _0xb23dc9;
};
service[a0_0x309950(464)] = function (_0x37528c) {
  const _0x3404b = a0_0x309950;
  let _0x48870c = pomelo.app.get("dbClient")[_0x3404b(487)][_0x3404b(493)][_0x3404b(388)];
  let _0x28de88 = {};
  for (let _0x5eb460 in _0x37528c) {
    if (_0x37528c[_0x3404b(396)](_0x5eb460)) {
      let _0x19ac60 = _0x48870c[_0x5eb460];
      !!_0x19ac60 && !!_0x19ac60.type && _0x19ac60[_0x3404b(422)].name === "Number" ? _0x28de88[_0x5eb460] = parseFloat(_0x37528c[_0x5eb460]) : _0x28de88[_0x5eb460] = _0x37528c[_0x5eb460];
    }
  }
  return _0x28de88;
};
service[a0_0x309950(395)] = function (_0x3bb991) {
  const _0x2fce9a = a0_0x309950;
  let _0x14cc8f = {};
  if (_0x2fce9a(492) in _0x3bb991) {
    _0x14cc8f[_0x2fce9a(492)] = _0x3bb991[_0x2fce9a(492)];
  }
  if (_0x2fce9a(452) in _0x3bb991) {
    _0x14cc8f.avatar = _0x3bb991[_0x2fce9a(452)];
  }
  if (_0x2fce9a(482) in _0x3bb991) {
    _0x14cc8f[_0x2fce9a(482)] = _0x3bb991[_0x2fce9a(482)];
  }
  if (_0x2fce9a(519) in _0x3bb991) {
    _0x14cc8f[_0x2fce9a(519)] = _0x3bb991[_0x2fce9a(519)];
  }
  return _0x14cc8f;
};
service[a0_0x309950(515)] = function (_0x516cc3) {
  const _0x31d89c = a0_0x309950;
  return {
    uid: _0x516cc3[_0x31d89c(482)],
    nickname: _0x516cc3[_0x31d89c(492)],
    avatar: _0x516cc3[_0x31d89c(452)],
    achievement: _0x516cc3[_0x31d89c(465)],
    lastLoginTime: _0x516cc3[_0x31d89c(450)]
  };
};
service[a0_0x309950(478)] = function (_0x8609e4) {
  const _0x50b4e5 = a0_0x309950;
  return {
    uid: _0x8609e4[_0x50b4e5(482)],
    nickname: _0x8609e4[_0x50b4e5(492)],
    avatar: _0x8609e4[_0x50b4e5(452)],
    directlyMemberAchievement: _0x8609e4.directlyMemberAchievement,
    agentMemberAchievement: _0x8609e4[_0x50b4e5(462)],
    directlyMemberCount: _0x8609e4[_0x50b4e5(473)],
    agentMemberCount: _0x8609e4.agentMemberCount,
    lastLoginTime: _0x8609e4.lastLoginTime
  };
};
service[a0_0x309950(427)] = function (_0x2a493a) {
  const _0x235726 = a0_0x309950;
  let _0x4d4537 = {};
  if (_0x235726(482) in _0x2a493a) {
    _0x4d4537[_0x235726(482)] = _0x2a493a[_0x235726(482)];
  }
  if (_0x235726(492) in _0x2a493a) {
    _0x4d4537[_0x235726(492)] = _0x2a493a[_0x235726(492)];
  }
  if (_0x235726(452) in _0x2a493a) {
    _0x4d4537[_0x235726(452)] = _0x2a493a[_0x235726(452)];
  }
  if (_0x235726(393) in _0x2a493a) {
    _0x4d4537[_0x235726(393)] = _0x2a493a[_0x235726(393)];
  }
  if (_0x235726(470) in _0x2a493a) {
    _0x4d4537[_0x235726(470)] = _0x2a493a[_0x235726(470)];
  }
  if ("unionInfo" in _0x2a493a) {
    _0x4d4537[_0x235726(511)] = _0x2a493a.unionInfo;
  }
  if (_0x235726(432) in _0x2a493a) {
    _0x4d4537[_0x235726(432)] = _0x2a493a[_0x235726(432)];
  }
  if (_0x235726(394) in _0x2a493a) {
    _0x4d4537[_0x235726(394)] = _0x2a493a.location;
  }
  if (_0x235726(424) in _0x2a493a) {
    _0x4d4537.lastLoginIP = _0x2a493a[_0x235726(424)];
  }
  if (_0x235726(519) in _0x2a493a) {
    _0x4d4537[_0x235726(519)] = _0x2a493a.sex;
  }
  if (_0x235726(468) in _0x2a493a) {
    _0x4d4537[_0x235726(468)] = _0x2a493a[_0x235726(468)];
  }
  if ("isRobot" in _0x2a493a) {
    _0x4d4537.isRobot = _0x2a493a[_0x235726(510)] || false;
  }
  if ("winRate" in _0x2a493a) {
    _0x4d4537[_0x235726(417)] = _0x2a493a[_0x235726(417)] || 0;
  }
  if ("winType" in _0x2a493a) {
    _0x4d4537[_0x235726(522)] = _0x2a493a[_0x235726(522)] || 0;
  }
  if ("userType" in _0x2a493a) {
    _0x4d4537[_0x235726(494)] = _0x2a493a[_0x235726(494)] || 0;
  }
  for (let _0x10ecbf in _0x4d4537) {
    if (_0x4d4537[_0x235726(396)](_0x10ecbf)) {
      return _0x4d4537;
    }
  }
  return null;
};
service[a0_0x309950(439)] = function (_0x124b52, _0x1825b0) {
  const _0xe71e47 = a0_0x309950;
  let _0x55a1f0 = {};
  if (_0xe71e47(482) in _0x124b52) {
    _0x55a1f0.uid = _0x124b52.uid;
  }
  if (_0xe71e47(492) in _0x124b52) {
    _0x55a1f0[_0xe71e47(492)] = _0x124b52.nickname;
  }
  if (_0xe71e47(452) in _0x124b52) {
    _0x55a1f0.avatar = _0x124b52[_0xe71e47(452)];
  }
  if (_0xe71e47(393) in _0x124b52) {
    _0x55a1f0[_0xe71e47(393)] = _0x124b52[_0xe71e47(393)];
  }
  if (_0xe71e47(470) in _0x124b52) {
    _0x55a1f0.frontendId = _0x124b52.frontendId;
  }
  if (_0xe71e47(432) in _0x124b52) {
    _0x55a1f0.address = _0x124b52[_0xe71e47(432)];
  }
  if (_0xe71e47(394) in _0x124b52) {
    _0x55a1f0[_0xe71e47(394)] = _0x124b52[_0xe71e47(394)];
  }
  if (_0xe71e47(424) in _0x124b52) {
    _0x55a1f0[_0xe71e47(424)] = _0x124b52[_0xe71e47(424)];
  }
  if ("sex" in _0x124b52) {
    _0x55a1f0.sex = _0x124b52[_0xe71e47(519)];
  }
  if (_0xe71e47(468) in _0x124b52) {
    _0x55a1f0[_0xe71e47(468)] = _0x124b52[_0xe71e47(468)];
  }
  if (_0xe71e47(510) in _0x124b52) {
    _0x55a1f0.isRobot = _0x124b52[_0xe71e47(510)] || false;
  }
  if (_0xe71e47(417) in _0x124b52) {
    _0x55a1f0[_0xe71e47(417)] = _0x124b52[_0xe71e47(417)] || 0;
  }
  if ("winType" in _0x124b52) {
    _0x55a1f0[_0xe71e47(522)] = _0x124b52.winType || 0;
  }
  if ("userType" in _0x124b52) {
    _0x55a1f0[_0xe71e47(494)] = _0x124b52[_0xe71e47(494)] || 0;
  }
  if (_0x1825b0 === 1) {
    _0x55a1f0[_0xe71e47(495)] = 0;
    _0x55a1f0[_0xe71e47(455)] = "";
  } else {
    if (_0xe71e47(511) in _0x124b52) {
      let _0x31dbf9 = _0x124b52.unionInfo[_0xe71e47(420)](function (_0x36429d) {
        const _0x21f872 = _0xe71e47;
        return _0x36429d[_0x21f872(429)] === _0x1825b0;
      });
      !!_0x31dbf9 ? (_0x55a1f0[_0xe71e47(495)] = parseFloat(_0x31dbf9[_0xe71e47(495)][_0xe71e47(444)](2)), _0x55a1f0[_0xe71e47(455)] = _0x31dbf9[_0xe71e47(455)], _0x55a1f0.prohibitGame = _0x31dbf9[_0xe71e47(423)] || false, _0x55a1f0[_0xe71e47(449)] = _0x31dbf9[_0xe71e47(449)] || 0, _0x55a1f0[_0xe71e47(442)] = _0x31dbf9[_0xe71e47(442)] || 0) : (_0x55a1f0[_0xe71e47(495)] = 0, _0x55a1f0[_0xe71e47(455)] = "", _0x55a1f0[_0xe71e47(423)] = false, _0x55a1f0[_0xe71e47(449)] = 0, _0x55a1f0[_0xe71e47(442)] = 0);
    }
  }
  for (let _0x5f035a in _0x55a1f0) {
    if (_0x55a1f0.hasOwnProperty(_0x5f035a)) {
      return _0x55a1f0;
    }
  }
};
service[a0_0x309950(443)] = async (_0x3102c4, _0xa9bb62, _0xba46 = true) => {
  return new Promise((_0x1389c0, _0x1933b) => {
    const _0x28142b = a0_0x1825;
    let _0x2a98e7 = {
      uid: {
        $in: _0xa9bb62
      }
    };
    async[_0x28142b(488)]([async _0x5ad88a => {
      const _0x1d9935 = _0x28142b;
      let _0x1c9651 = await dao.findData(_0x1d9935(487), _0x2a98e7, {
        "unionInfo.todayWin": -1
      }, 0, 0);
      let _0x4429d8 = 0;
      let _0x2b2e46 = 0;
      let _0x58f6f5 = 0;
      let _0x1e80c6 = 0;
      let _0x556e2a = 0;
      let _0x58ae54 = 0;
      let _0x2a6f27 = 0;
      let _0x560292 = 0;
      let _0x38acf3 = 0;
      let _0x38fdb5 = 0;
      let _0x127881 = 0;
      let _0x423989 = 0;
      let _0x451ea2 = 0;
      for (let _0x449525 = 0; _0x449525 < _0x1c9651[_0x1d9935(430)]; _0x449525++) {
        if (_0x1c9651[_0x449525]) {
          let _0x3c5971 = _0x1c9651[_0x449525][_0x1d9935(511)][_0x1d9935(420)](function (_0x35cf8f) {
            return _0x35cf8f.unionID === _0x3102c4;
          });
          _0x3c5971 ? (_0x4429d8 += 1, _0x1e80c6 += parseInt(_0x3c5971.todayDraw[_0x1d9935(444)](2)) || 0, _0x58f6f5 += parseInt(_0x3c5971[_0x1d9935(445)][_0x1d9935(444)](2)) || 0, _0x38fdb5 += parseFloat(_0x3c5971[_0x1d9935(525)].toFixed(2)) || 0, _0x127881 += parseFloat(_0x3c5971[_0x1d9935(399)][_0x1d9935(444)](2)) || 0, _0x2b2e46 += parseFloat(_0x3c5971.score) || 0, _0x2b2e46 += parseFloat(_0x3c5971[_0x1d9935(503)]) || 0, _0x2b2e46 += parseFloat(_0x3c5971[_0x1d9935(524)]) || 0, _0x2a6f27 += parseFloat(_0x3c5971.todayProvideRebate[_0x1d9935(444)](2)) || 0, _0x560292 += parseFloat(_0x3c5971.yesterdayProvideRebate[_0x1d9935(444)](2)) || 0, _0x423989 += parseFloat(_0x3c5971.todayRebate[_0x1d9935(444)](2)) || 0, _0x451ea2 += parseFloat(_0x3c5971[_0x1d9935(475)].toFixed(2)) || 0, _0x38acf3 += parseInt(_0x3c5971[_0x1d9935(486)]) || 0) : console[_0x1d9935(505)](_0x1c9651[_0x449525]);
        }
      }
      if (_0xba46) {
        let _0x4baab8 = moment()[_0x1d9935(418)](_0x1d9935(477))[_0x1d9935(479)]("x");
        let _0x114ae6 = moment()[_0x1d9935(406)](_0x1d9935(477)).format("x");
        let _0x52030e = moment().add(-1, "d").startOf(_0x1d9935(477))[_0x1d9935(479)]("x");
        let _0x1602c1 = moment()[_0x1d9935(480)](-1, "d")[_0x1d9935(406)](_0x1d9935(477))[_0x1d9935(479)]("x");
        let _0xe8f4c6 = {
          createTime: {
            $gte: parseInt(_0x4baab8),
            $lte: parseInt(_0x114ae6)
          },
          uid: {
            $in: _0xa9bb62
          },
          unionID: _0x3102c4
        };
        let _0x3a45bf = {
          _id: _0x1d9935(397),
          total: {
            $sum: _0x1d9935(387)
          }
        };
        let _0x296a89 = [{
          $match: _0xe8f4c6
        }, {
          $group: _0x3a45bf
        }];
        let _0x2f3527 = await commonDao[_0x1d9935(499)](_0x1d9935(431), _0x296a89);
        _0x556e2a = _0x2f3527.length > 0 ? _0x2f3527[0].total : 0;
        let _0x543eb5 = {
          createTime: {
            $gte: parseInt(_0x52030e),
            $lte: parseInt(_0x1602c1)
          },
          uid: {
            $in: _0xa9bb62
          },
          unionID: _0x3102c4
        };
        let _0xd02f3e = [{
          $match: _0x543eb5
        }, {
          $group: _0x3a45bf
        }];
        let _0xc776c2 = await commonDao[_0x1d9935(499)](_0x1d9935(431), _0xd02f3e);
        _0x58ae54 = _0xc776c2[_0x1d9935(430)] > 0 ? _0xc776c2[0][_0x1d9935(419)] : 0;
      }
      _0x2b2e46 = Math[_0x1d9935(426)](_0x2b2e46 * 100) / 100;
      _0x5ad88a(null, {
        todayTotalRebate: _0x556e2a,
        yesterdayTotalRebate: _0x58ae54,
        totalCount: _0x4429d8,
        totalScore: _0x2b2e46,
        yesterdayDrawTotal: _0x58f6f5,
        todayDrawTotal: _0x1e80c6,
        yesterdayTotalProvideRebate: _0x560292,
        totalDraw: _0x38acf3,
        todayWinTotal: _0x38fdb5,
        yesterdayWinTotal: _0x127881
      });
    }], (_0xfcd4b9, _0x33fe32) => {
      const _0x17a918 = _0x28142b;
      _0xfcd4b9 ? _0x1933b(code[_0x17a918(410)]) : _0x1389c0(_0x33fe32);
    });
  });
};
service[a0_0x309950(501)] = async function (_0x39822c) {
  const _0x2175b3 = a0_0x309950;
  let _0x9a62d = null;
  if (_0x9a62d) {
    _0x9a62d = JSON.parse(_0x9a62d);
  } else {
    _0x9a62d = [];
    let _0x498f5e = {
      unionInfo: {
        $elemMatch: {
          unionID: _0x39822c
        }
      }
    };
    let _0x45c572 = await commonDao[_0x2175b3(401)](_0x2175b3(487), _0x498f5e, null, 0, 0);
    for (let _0x2c81d9 = 0; _0x2c81d9 < _0x45c572.length; _0x2c81d9++) {
      let _0x375321 = _0x45c572[_0x2c81d9];
      let _0xd72013 = _0x375321[_0x2175b3(511)][_0x2175b3(420)](function (_0x1e35ad) {
        const _0xaba342 = _0x2175b3;
        return _0x1e35ad[_0xaba342(429)] === _0x39822c;
      });
      let {
        uid: _0x2d0c2e,
        nickname: _0x5de446,
        avatar: _0x3fdf92,
        isAgent: _0x3b00e7,
        userType: _0x23c86f,
        isTest: _0x45ec7e
      } = _0x375321;
      let {
        spreaderID: _0x51db83,
        score: _0x83d485,
        saveScore: _0x4fe3,
        showFixScore: _0xae64a1,
        partner: _0x3b2366,
        rebateRate: _0x27a70e,
        manager: _0x560a8a,
        limitScore: _0x20e393,
        targetScore: _0x1b53a4,
        floatScore: _0x437dfe
      } = _0xd72013;
      let _0x27af39 = {
        uid: _0x2d0c2e,
        nickname: _0x5de446,
        score: _0x83d485,
        saveScore: _0x4fe3,
        avatar: _0x3fdf92,
        isAgent: _0x3b00e7,
        userType: _0x23c86f,
        isTest: _0x45ec7e,
        spreaderID: _0x51db83,
        showFixScore: _0xae64a1,
        partner: _0x3b2366,
        rebateRate: _0x27a70e,
        manager: _0x560a8a,
        limitScore: _0x20e393,
        targetScore: _0x1b53a4,
        floatScore: _0x437dfe
      };
      _0x9a62d.push(_0x27af39);
    }
  }
  return _0x9a62d;
};
service[a0_0x309950(425)] = async function (_0x48e442, _0xa6fad4, _0x30ba05 = null) {
  const _0x3e4c5f = a0_0x309950;
  !_0x30ba05 && (_0x30ba05 = await service.getUnionAllUser(_0xa6fad4));
  let _0x326bd0 = _0x30ba05[_0x3e4c5f(415)]();
  let _0x2107f8 = _0x326bd0[_0x3e4c5f(420)](_0x356732 => _0x356732[_0x3e4c5f(482)] == _0x48e442);
  let _0x1ec858 = (_0x2107f8[_0x3e4c5f(495)] || 0) + (_0x2107f8.saveScore || 0);
  if (_0x2107f8) {
    let _0x3863dd = true;
    let _0x330dc7 = [_0x2107f8[_0x3e4c5f(482)]];
    while (_0x3863dd) {
      let _0x22adc0 = _0x326bd0[_0x3e4c5f(414)](_0x409526 => _0x330dc7[_0x3e4c5f(391)](_0x409526[_0x3e4c5f(455)]));
      _0x22adc0[_0x3e4c5f(430)] > 0 ? (_0x330dc7 = [], _0x22adc0[_0x3e4c5f(485)](_0x5dc6bd => {
        const _0x22dc5d = _0x3e4c5f;
        _0x330dc7.push(_0x5dc6bd[_0x22dc5d(482)]);
        _0x1ec858 += _0x5dc6bd.score || 0;
        _0x1ec858 += _0x5dc6bd[_0x22dc5d(524)] || 0;
      })) : _0x3863dd = false;
    }
  }
  return _0x1ec858;
};
service.getUserLowAll = async function (_0x5436a1, _0x10b7b4, _0x2f2d0a = null) {
  const _0x364bae = a0_0x309950;
  !_0x2f2d0a && (_0x2f2d0a = await service[_0x364bae(501)](_0x10b7b4));
  let _0xfdfa5f = _0x2f2d0a[_0x364bae(415)]();
  let _0x168215 = _0xfdfa5f.find(_0x1ff5f6 => _0x1ff5f6[_0x364bae(482)] == _0x5436a1);
  let _0x2beded = [_0x5436a1];
  if (_0x168215) {
    let _0xe5f3d8 = true;
    let _0xee626d = [_0x168215.uid];
    while (_0xe5f3d8) {
      let _0x23ad9a = _0xfdfa5f[_0x364bae(414)](_0x19288b => _0xee626d[_0x364bae(391)](_0x19288b[_0x364bae(455)]));
      _0x23ad9a[_0x364bae(430)] > 0 ? (_0xee626d = [], _0x23ad9a[_0x364bae(485)](_0x475a9f => {
        const _0x5b1a5f = _0x364bae;
        _0xee626d.push(_0x475a9f[_0x5b1a5f(482)]);
        _0x2beded[_0x5b1a5f(504)](_0x475a9f[_0x5b1a5f(482)]);
      })) : _0xe5f3d8 = false;
    }
  }
  return _0x2beded;
};
service[a0_0x309950(448)] = async function (_0x261c11, _0xf4726, _0x1d25cf = null) {
  const _0x3c0a4c = a0_0x309950;
  !_0x1d25cf && (_0x1d25cf = await service[_0x3c0a4c(501)](_0xf4726));
  let _0x3487e0 = _0x1d25cf.slice();
  let _0x7d21a8 = _0x3487e0[_0x3c0a4c(420)](_0x27117e => _0x27117e[_0x3c0a4c(482)] == _0x261c11);
  let _0x1fcc6d = _0x7d21a8.spreaderID;
  let _0x4403b8 = [];
  if (_0x7d21a8) {
    let _0x4956a4 = true;
    while (_0x4956a4 && _0x1fcc6d && _0x1fcc6d != "") {
      let _0x5504f0 = _0x3487e0.find(_0x169009 => _0x169009[_0x3c0a4c(482)] == _0x1fcc6d);
      _0x5504f0 ? (_0x4403b8[_0x3c0a4c(504)](_0x5504f0[_0x3c0a4c(482)]), _0x1fcc6d = _0x5504f0[_0x3c0a4c(455)], _0x1fcc6d == "" && (_0x4956a4 = false)) : _0x4956a4 = false;
    }
  }
  return _0x4403b8;
};
service[a0_0x309950(436)] = function (_0x418d41, _0x3df2c0) {
  return new Promise((_0x399da4, _0x365825) => {
    let _0x7aab56 = [];
    let _0x4d7710 = 0;
    let _0x5f32b9 = false;
    async.doUntil(async _0x7667d8 => {
      const _0x3620bf = a0_0x1825;
      let _0x3074a2 = await userDao[_0x3620bf(471)](_0x418d41);
      _0x4d7710 += 1;
      if (_0x3074a2) {
        let _0x10a943 = _0x3074a2[_0x3620bf(511)][_0x3620bf(420)](function (_0x38db65) {
          const _0x5592a6 = _0x3620bf;
          return _0x38db65[_0x5592a6(429)] === _0x3df2c0;
        });
        if (_0x10a943) {
          let _0x1dc59e = _0x10a943[_0x3620bf(455)];
          let _0x509eee = _0x10a943[_0x3620bf(459)];
          let _0x3bbf79 = 0;
          _0x10a943[_0x3620bf(514)] && (_0x3bbf79 = _0x10a943[_0x3620bf(467)]);
          let _0x381a33 = _0x10a943.ticketRate || 0;
          let _0x170e98 = {
            userId: _0x418d41,
            spreaderID: _0x1dc59e,
            rebateRate: _0x509eee,
            ticketRate: _0x381a33,
            count: _0x4d7710,
            fixScoreRate: _0x3bbf79
          };
          _0x7aab56[_0x3620bf(504)](_0x170e98);
          _0x10a943[_0x3620bf(455)] == "" || !_0x10a943.spreaderID ? _0x5f32b9 = true : _0x418d41 = _0x10a943[_0x3620bf(455)];
        } else {
          _0x5f32b9 = true;
        }
      } else {
        _0x5f32b9 = true;
      }
      _0x4d7710 > 100 && (_0x5f32b9 = true);
      _0x7667d8(null, _0x418d41);
    }, () => {
      return _0x5f32b9;
    }, (_0x40853c, _0x53ab23) => {
      _0x40853c ? _0x365825([]) : _0x399da4(_0x7aab56);
    });
  });
};