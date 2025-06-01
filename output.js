
const a0_0x583b2d = a0_0x2eeb;
function a0_0x2eeb(_0x541341, _0x31489d) {
  const _0x2f37a4 = a0_0x17c1();
  a0_0x2eeb = function (_0x4c7982, _0x45a47f) {
    _0x4c7982 = _0x4c7982 - 281;
    let _0x128b3b = _0x2f37a4[_0x4c7982];
    return _0x128b3b;
  };
  return a0_0x2eeb(_0x541341, _0x31489d);
}
(function (_0x11e40f, _0x5c51d6) {
  const _0x2b2ac6 = a0_0x2eeb;
  const _0x5ce360 = _0x11e40f();
  while (true) {
    try {
      const _0x36240a = parseInt(_0x2b2ac6(402)) / 1 * (-parseInt(_0x2b2ac6(324)) / 2) + parseInt(_0x2b2ac6(419)) / 3 + -parseInt(_0x2b2ac6(326)) / 4 + -parseInt(_0x2b2ac6(306)) / 5 * (parseInt(_0x2b2ac6(398)) / 6) + -parseInt(_0x2b2ac6(307)) / 7 * (-parseInt(_0x2b2ac6(364)) / 8) + -parseInt(_0x2b2ac6(415)) / 9 + parseInt(_0x2b2ac6(367)) / 10;
      if (_0x36240a === _0x5c51d6) {
        break;
      } else {
        _0x5ce360.push(_0x5ce360.shift());
      }
    } catch (_0x24a23b) {
      _0x5ce360.push(_0x5ce360.shift());
    }
  }
})(a0_0x17c1, 922859);
function a0_0x17c1() {
  const _0x47e6d2 = ["includes", "getUnionByRoomID", "add", "unionInfo", "opening", "isUserInRoom", "roomRuleList", "delete union id:", "parse", "] room Dismissed = ", "robotCreateRoom", "robotJoinRoom", "../../../services/userInfoServices", "union not exit", "  gameType = ", "updateAllData", "hasOwnProperty", "maxPlayerCount", "pomelo", "saveScore", "robotScheduler", "app", "sort", "uid", "gameType", "createData", "unionID", "joinRoom", "unionList", "curBureau", "../../../dao/commonDao", "checkUserScore", "477765aSSzOw", "217VfYcAo", "dailyTaskScheduler", "todayWin", "avatar", "isRobot", "userInfo", "frontendId", "leaveRoom", "push", "gameRule", "find", "userArr", "order", "ownerUid", " curCount = ", "dailyClear", "winScore", "3395486BbSLWI", "toString", "7151708FLQslK", "0 0 0 * * *", "pomelo-logger", "] auto join robotCount = ", "buildGameRoomUserInfo", "MODIFY_LOW", "roomList", "union count:", "scoreLowLimit", "getUnion", "moment", "bind", "updateUserDataAndUnlock", "createTime", "createRoom", "getServersByType", "startScheduler", "addAllRobot", "../../../API/rpcAPI", "weekTaskSchedulerID", "safeScore", "roomDismissed", "destroyRoom", "error", "_id", "userScoreChangeRecordModel", "createNewRoomID", "../../../util/utils", "dailyTaskSchedulerClearData", "cancelJob", "] maxRobot = ", "] join fail  = ", "floor", "curServer", "scheduleJob", "dismissRoom", " gameType = ", "] autoCreateRoom union is not exit", "309592mnCgZU", "MODIFY_UP", "stack", "53410250aFakxD", "getUserDataByUid", "] join success score limited uid = ", "score", "warn", "roomID", "connector", "abs", "beforeShutdown", "removeUnionCache", "../../../constant/enumeration", "robotReady", "userModel", "gameStarted", "exports", "loseScore", ":room manager schedule task", "../../../util/dispatcher", "] game started canEnter = ", "getRandomNum", "scoreChangeType", "onDestroy", "findData", "showLogTime", "findOneData", "./union", "pomelo-scheduler", "splice", "createDataArr", "scoreModifyRecordModel", " nikeName = ", "78RYgjxf", "userLeaveRoom", "updateUserDataNotify", "isShouldDelete", "1qzVJoE", "getRoomFrameByID", "init", "getLogger", "joinWatch", " score = ", "union id: ", "nickname", "unionData", " maxCount = ", "userScoreDetailModel", "info", "[robotScheduler][", "15029532omDggO", "findOneAndUpdate", "dailyTaskSchedulerID", "now", "2339916terTYs", "stopScheduler", "concat", "dispatch", "给下级", "checkEmptyRoomList", "format", "random", "length", "] auto create robotCount = ", "DZPK", " resCode = ", "catch", "manager", "filter", "scheduleJobID"];
  a0_0x17c1 = function () {
    return _0x47e6d2;
  };
  return a0_0x17c1();
}
let code = require("../../../constant/code");
let scheduler = require(a0_0x583b2d(393));
let logger = require("pomelo-logger").getLogger("logic");
let utils = require(a0_0x583b2d(353));
let enumeration = require(a0_0x583b2d(377));
let pomelo = require(a0_0x583b2d(292));
let moment = require(a0_0x583b2d(336));
let Union = require(a0_0x583b2d(392));
let rpcAPI = require(a0_0x583b2d(344));
let commonDao = require(a0_0x583b2d(304));
let userDao = require("../../../dao/userDao");
let userInfoServices = require(a0_0x583b2d(286));
let dispatch = require(a0_0x583b2d(384));
let robotlogger = require(a0_0x583b2d(328))[a0_0x583b2d(405)]("robot");
let exp = module[a0_0x583b2d(381)];
let UNION_MAX_DELAY_DELETE_TIME = 86400000;
let IS_WIN_LOSE_LIMIT = true;
exp[a0_0x583b2d(404)] = function () {
  const _0x53db89 = a0_0x583b2d;
  this[_0x53db89(302)] = {};
  this[_0x53db89(390)] = 0;
  this[_0x53db89(434)] = -1;
  this[_0x53db89(342)]();
};
exp.beforeShutdown = async function (_0x43f220) {
  const _0x6dca3f = a0_0x583b2d;
  scheduler[_0x6dca3f(355)](this[_0x6dca3f(417)]);
  scheduler[_0x6dca3f(355)](this[_0x6dca3f(345)]);
  await commonDao[_0x6dca3f(289)](_0x6dca3f(379), {
    $or: [{
      roomID: {
        $ne: ""
      }
    }, {
      frontendId: {
        $ne: ""
      }
    }]
  }, {
    roomID: "",
    frontendId: ""
  });
  _0x43f220();
};
let scheduleTask = function (_0x44477c) {
  const _0x5909e4 = a0_0x583b2d;
  let _0xa0c982 = _0x44477c[_0x5909e4(432)];
  let _0x2dec31 = new Date().toLocaleString();
  logger.info(pomelo[_0x5909e4(295)][_0x5909e4(359)].id + _0x5909e4(383));
  logger[_0x5909e4(413)](_0x2dec31);
  let _0x1cd70f = 0;
  for (let _0x317665 in _0xa0c982[_0x5909e4(302)]) {
    if (_0xa0c982[_0x5909e4(302)][_0x5909e4(290)](_0x317665)) {
      let _0x2140bb = _0xa0c982[_0x5909e4(302)][_0x317665];
      logger[_0x5909e4(413)](_0x5909e4(408) + _0x317665);
      _0x2140bb[_0x5909e4(401)](UNION_MAX_DELAY_DELETE_TIME) ? (_0x2140bb.onDestroy(), delete _0xa0c982[_0x5909e4(302)][_0x317665], logger[_0x5909e4(413)](_0x5909e4(281) + _0x317665)) : _0x1cd70f++;
    }
  }
  logger[_0x5909e4(413)](_0x5909e4(333) + _0x1cd70f);
};
exp.dailyTaskScheduler = function () {
  const _0x7441f8 = a0_0x583b2d;
  logger.info(_0x7441f8(354));
  for (let _0xd78064 in exp[_0x7441f8(302)]) {
    if (exp[_0x7441f8(302)][_0x7441f8(290)](_0xd78064)) {
      let _0x4fab27 = exp[_0x7441f8(302)][_0xd78064];
      _0x4fab27[_0x7441f8(322)]();
    }
  }
};
exp[a0_0x583b2d(342)] = function () {
  const _0x87371d = a0_0x583b2d;
  this[_0x87371d(434)] = scheduler[_0x87371d(360)]({
    period: 3600000
  }, scheduleTask, {
    manager: this
  });
  this[_0x87371d(417)] = scheduler[_0x87371d(360)](_0x87371d(327), exp[_0x87371d(308)]);
  this[_0x87371d(294)] = scheduler.scheduleJob("0/10 * * * * *", () => {
    const _0x314ebe = _0x87371d;
    let _0x4ad4e1 = moment().format("x");
    _0x4ad4e1 > this[_0x314ebe(390)] && (this.showLogTime = moment().add(1, "m")[_0x314ebe(425)]("x"));
    this[_0x314ebe(424)]();
  });
};
exp.stopScheduler = function () {
  const _0x2c7371 = a0_0x583b2d;
  scheduler[_0x2c7371(355)](this[_0x2c7371(434)]);
  scheduler[_0x2c7371(355)](this.dailyTaskSchedulerID);
};
exp[a0_0x583b2d(375)] = function (_0x4a7996) {
  const _0x56693c = a0_0x583b2d;
  this[_0x56693c(420)]();
  _0x4a7996();
};
exp[a0_0x583b2d(335)] = async function (_0x4b24ff) {
  const _0x3b9484 = a0_0x583b2d;
  if (!this[_0x3b9484(302)][_0x4b24ff]) {
    let _0x27d223 = new Union(_0x4b24ff);
    this[_0x3b9484(302)][_0x4b24ff] = _0x27d223;
    await _0x27d223[_0x3b9484(404)]();
  }
  return this[_0x3b9484(302)][_0x4b24ff];
};
exp[a0_0x583b2d(376)] = function (_0x542ebb) {
  const _0x3f7135 = a0_0x583b2d;
  if (!this.unionList[_0x542ebb]) {
    return;
  }
  let _0x441090 = this[_0x3f7135(302)][_0x542ebb];
  _0x441090[_0x3f7135(388)]();
  delete this[_0x3f7135(302)][_0x542ebb];
  logger.info(_0x3f7135(281) + _0x542ebb);
};
exp[a0_0x583b2d(301)] = async function (_0x1e6d0f, _0x4bc48b) {
  const _0x435f0a = a0_0x583b2d;
  let _0x2416a9 = this.getUnionByRoomID(_0x4bc48b);
  if (!_0x2416a9) {
    return code.ROOM_NOT_EXIST;
  }
  return await _0x2416a9[_0x435f0a(301)](_0x4bc48b, _0x1e6d0f);
};
exp[a0_0x583b2d(406)] = async function (_0x238296, _0x45962f) {
  const _0x2bc3cd = a0_0x583b2d;
  let _0x5b507f = this[_0x2bc3cd(436)](_0x45962f);
  if (!_0x5b507f) {
    return code.ROOM_NOT_EXIST;
  }
  return await _0x5b507f[_0x2bc3cd(406)](_0x45962f, _0x238296);
};
exp[a0_0x583b2d(314)] = async function (_0x40082e, _0x46659d) {
  const _0x3557e2 = a0_0x583b2d;
  let _0x253c66 = this[_0x3557e2(403)](_0x40082e);
  if (!_0x253c66) {
    return;
  }
  return await _0x253c66.userOffLine(_0x46659d);
};
exp[a0_0x583b2d(361)] = function (_0x3c0898) {
  const _0x57a63a = a0_0x583b2d;
  let _0x33a4cd = this[_0x57a63a(436)](_0x3c0898);
  if (!_0x33a4cd) {
    logger[_0x57a63a(371)]("dismissRoom", _0x57a63a(287));
    return;
  }
  _0x33a4cd[_0x57a63a(348)](_0x3c0898);
};
exp.getRoomFrameByID = function (_0x3a1002) {
  const _0x352053 = a0_0x583b2d;
  for (let _0x110a88 in this.unionList) {
    if (this.unionList[_0x352053(290)](_0x110a88)) {
      if (!!this[_0x352053(302)][_0x110a88][_0x352053(332)][_0x3a1002]) {
        return this[_0x352053(302)][_0x110a88][_0x352053(332)][_0x3a1002];
      }
    }
  }
  return null;
};
exp[a0_0x583b2d(436)] = function (_0x1704a8) {
  const _0xa2e09 = a0_0x583b2d;
  for (let _0x32735b in this.unionList) {
    if (this[_0xa2e09(302)][_0xa2e09(290)](_0x32735b)) {
      if (!!this[_0xa2e09(302)][_0x32735b][_0xa2e09(332)][_0x1704a8]) {
        return this.unionList[_0x32735b];
      }
    }
  }
  return null;
};
exp[a0_0x583b2d(440)] = function (_0x3e8a4d, _0x3d4208) {
  const _0x1bbdad = a0_0x583b2d;
  let _0x404d24 = this[_0x1bbdad(403)](_0x3d4208);
  return _0x404d24 && _0x404d24.isUserInRoom(_0x3e8a4d);
};
exp[a0_0x583b2d(352)] = function () {
  const _0x17f345 = a0_0x583b2d;
  let _0x2bb8de = pomelo[_0x17f345(295)].getServersByType("game");
  let _0x11a2bf = 0;
  for (let _0x1e3509 = 0; _0x1e3509 < _0x2bb8de[_0x17f345(427)]; ++_0x1e3509) {
    if (_0x2bb8de[_0x1e3509].id === pomelo[_0x17f345(295)][_0x17f345(359)].id) {
      _0x11a2bf = _0x1e3509;
      break;
    }
  }
  let _0x57b308 = -1;
  let _0x1f19c3 = Math[_0x17f345(358)](100000 / _0x2bb8de[_0x17f345(427)]) + 1;
  let _0x5b699f = Math[_0x17f345(358)](1000000 / _0x2bb8de[_0x17f345(427)]) - 1;
  do {
    _0x57b308 = utils[_0x17f345(386)](_0x1f19c3, _0x5b699f) * _0x2bb8de[_0x17f345(427)] + _0x11a2bf;
  } while (!!this[_0x17f345(403)](_0x57b308));
  return _0x57b308;
};
exp[a0_0x583b2d(424)] = async () => {
  const _0x10072b = a0_0x583b2d;
  for (let _0x15feeb in this.unionList) {
    if (this[_0x10072b(302)][_0x10072b(290)](_0x15feeb)) {
      if (!!this.unionList[_0x15feeb]) {
        if (!this.unionList[_0x15feeb][_0x10072b(410)]) {
          continue;
        }
        if (!this[_0x10072b(302)][_0x15feeb].unionData[_0x10072b(439)]) {
          continue;
        }
        let _0x24e6eb = this[_0x10072b(302)][_0x15feeb].unionData[_0x10072b(320)];
        let _0x1f9d0c = {
          unionID: _0x15feeb,
          isReback: true,
          isRobot: true,
          roomID: ""
        };
        let _0x443986 = await commonDao.findData(_0x10072b(379), _0x1f9d0c);
        for (let _0x2d4579 = 0; _0x2d4579 < _0x443986[_0x10072b(427)]; _0x2d4579++) {
          let _0x4bca65 = _0x443986[_0x2d4579];
          let _0x58a933 = _0x4bca65[_0x10072b(438)][_0x10072b(317)](function (_0x38d2e9) {
            const _0x5d65eb = _0x10072b;
            return _0x38d2e9[_0x5d65eb(300)][_0x5d65eb(325)]() === _0x15feeb[_0x5d65eb(325)]();
          });
          if (_0x58a933) {
            let _0x1d243e = parseFloat(((_0x58a933[_0x10072b(293)] || 0) + _0x58a933[_0x10072b(370)] + _0x58a933[_0x10072b(346)]).toFixed(2));
            let _0x2976ba = await commonDao[_0x10072b(416)]("userModel", {
              uid: this[_0x10072b(302)][_0x15feeb][_0x10072b(410)][_0x10072b(320)],
              "unionInfo.unionID": _0x15feeb
            }, {
              $inc: {
                "unionInfo.$.score": _0x1d243e
              }
            });
            _0x2976ba.frontendId && (await userInfoServices[_0x10072b(400)](_0x2976ba[_0x10072b(297)], _0x2976ba[_0x10072b(313)], {
              unionInfo: _0x2976ba[_0x10072b(438)]
            })[_0x10072b(431)](_0xc6917 => {
              const _0x285901 = _0x10072b;
              robotlogger[_0x285901(349)](_0xc6917.stack);
            }));
            await commonDao[_0x10072b(416)](_0x10072b(379), {
              uid: _0x4bca65[_0x10072b(297)],
              isRobot: true,
              isReback: true
            }, {
              unionInfo: [],
              unionID: 0,
              isReback: false
            });
          }
        }
        let _0x202564 = this[_0x10072b(302)][_0x15feeb][_0x10072b(332)];
        let _0x41d5e9 = this[_0x10072b(302)][_0x15feeb].unionData[_0x10072b(441)];
        let _0x1d9290 = [enumeration[_0x10072b(298)][_0x10072b(429)]];
        _0x41d5e9 = _0x41d5e9[_0x10072b(433)](_0x4f2bd9 => !_0x1d9290[_0x10072b(435)](_0x4f2bd9[_0x10072b(298)]));
        _0x41d5e9[_0x10072b(427)] > 0 && (await this[_0x10072b(284)](_0x15feeb, _0x41d5e9));
        if (_0x202564 != {}) {
          for (let _0x3d90b2 in _0x202564) {
            if (_0x202564[_0x3d90b2]) {
              let _0x4801cd = _0x202564[_0x3d90b2];
              let _0x296866 = _0x4801cd[_0x10072b(380)];
              let _0x27c4a0 = _0x4801cd[_0x10072b(316)];
              let _0x26d23e = _0x4801cd.gameType;
              if (_0x1d9290[_0x10072b(435)](_0x26d23e)) {
                continue;
              }
              let _0x60660 = _0x4801cd[_0x10072b(318)];
              let _0xedfa31 = 0;
              for (let _0x392844 in _0x60660) {
                let _0x4f572a = _0x60660[_0x392844];
                _0x4f572a[_0x10072b(312)][_0x10072b(311)] && (_0xedfa31 += 1);
              }
              let _0x25498e = _0x27c4a0.robotCount || 0;
              _0x26d23e >= 200 && (_0x25498e = 20);
              if (_0x25498e == 0 || _0xedfa31 >= _0x25498e) {
                continue;
              }
              if (_0x4801cd[_0x10072b(347)]) {
                continue;
              }
              if (_0x4801cd[_0x10072b(303)] >= 1 && _0x27c4a0 && !_0x27c4a0.canEnter) {
                continue;
              }
              let _0x7a0c10 = moment(_0x4801cd[_0x10072b(339)])[_0x10072b(425)]("YYYY-MM-DD HH:mm:ss");
              let _0x185a1c = moment()[_0x10072b(437)](-2, "h")[_0x10072b(425)]("x");
              let _0x45166f = parseInt(moment()[_0x10072b(425)]("H"));
              let _0x34ed7b = {
                beginTime: {
                  $lte: _0x45166f
                },
                endTime: {
                  $gt: _0x45166f
                },
                unionID: parseInt(_0x15feeb),
                isReback: {
                  $ne: true
                },
                isRobot: true,
                roomID: "",
                isBind: true,
                gameType: {
                  $in: [0, _0x26d23e]
                },
                robotType: {
                  $in: [1]
                }
              };
              let _0xdf6f12 = await commonDao[_0x10072b(389)](_0x10072b(379), _0x34ed7b, {
                lastLoginTime: 1
              });
              let _0x5a8200 = !_0x25498e || _0x25498e - _0xedfa31 > 3 ? 3 : _0x25498e - _0xedfa31;
              let _0x3738bd = 0;
              if (_0xdf6f12 && _0xdf6f12[_0x10072b(427)] > 0) {
                for (let _0x17f482 = 0; _0x17f482 < _0xdf6f12[_0x10072b(427)] && _0x3738bd < _0x5a8200; _0x17f482++) {
                  let _0x39b076 = _0xdf6f12[_0x17f482];
                  let _0x532c74 = _0x39b076[_0x10072b(438)][_0x10072b(317)](function (_0x4fb98a) {
                    const _0x36a817 = _0x10072b;
                    return _0x4fb98a[_0x36a817(300)][_0x36a817(325)]() === _0x15feeb[_0x36a817(325)]();
                  }[_0x10072b(337)](this));
                  if (!_0x532c74) {
                    continue;
                  }
                  let _0x55b68c = await this[_0x10072b(305)](_0x39b076[_0x10072b(297)], _0x15feeb, _0x39b076[_0x10072b(323)], _0x39b076[_0x10072b(382)], _0x532c74, _0x27c4a0[_0x10072b(334)], _0x24e6eb);
                  if (_0x55b68c) {
                    _0x39b076 = await commonDao[_0x10072b(391)](_0x10072b(379), {
                      uid: _0x39b076[_0x10072b(297)]
                    });
                    let _0x3238be = await this[_0x10072b(285)](_0x15feeb, _0x39b076, _0x3d90b2);
                    _0x3238be == code.OK && (_0x3738bd += 1);
                  } else {
                    continue;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
exp.robotCreateRoom = async function (_0xf16f62, _0x24c17a) {
  const _0x47ca9a = a0_0x583b2d;
  let _0x52bfdb = await this[_0x47ca9a(335)](_0xf16f62);
  !_0x52bfdb && robotlogger.info("[robotScheduler][" + _0xf16f62 + _0x47ca9a(363));
  let _0x41a0f4 = [];
  let _0x5c7664 = [];
  let _0x180550 = [];
  let _0x3fee45 = {};
  let _0x2a11a7 = this[_0x47ca9a(302)][_0xf16f62][_0x47ca9a(332)];
  for (let _0x420447 in _0x2a11a7) {
    let _0x17d516 = _0x2a11a7[_0x420447];
    let _0xfb2ace = _0x17d516[_0x47ca9a(316)][_0x47ca9a(350)];
    let _0xf759b6 = _0x17d516.gameRule[_0x47ca9a(298)];
    !_0x3fee45[_0xf759b6] && (_0x3fee45[_0xf759b6] = {});
    !_0x3fee45[_0xf759b6][_0xfb2ace] && (_0x3fee45[_0xf759b6][_0xfb2ace] = 0);
    _0x3fee45[_0xf759b6][_0xfb2ace] += 1;
    !_0x180550[_0x47ca9a(435)](_0xfb2ace) && _0x180550.push(_0xfb2ace);
  }
  let _0x492b48 = {};
  for (let _0x1910e8 in _0x3fee45) {
    let _0x50296a = _0x3fee45[_0x1910e8];
    let _0x5bfc82 = 0;
    for (let _0xe10b15 in _0x50296a) {
      _0x50296a[_0xe10b15] > _0x5bfc82 && (_0x5bfc82 = _0x50296a[_0xe10b15]);
    }
    _0x492b48[_0x1910e8] = _0x5bfc82;
  }
  for (let _0x2d8212 = 0; _0x2d8212 < _0x24c17a[_0x47ca9a(427)]; _0x2d8212++) {
    let _0x4b0469 = _0x24c17a[_0x2d8212];
    let _0x3cf129 = _0x4b0469[_0x47ca9a(350)].toString();
    let _0x1669db = _0x4b0469[_0x47ca9a(298)];
    if (_0x1669db >= 200) {
      continue;
    }
    let _0x479efb = _0x3fee45[_0x1669db] && _0x3fee45[_0x1669db][_0x3cf129] || 0;
    let _0x5e6406 = _0x492b48[_0x1669db] || 0;
    !_0x180550[_0x47ca9a(435)](_0x3cf129) ? _0x41a0f4[_0x47ca9a(315)]({
      gameRuleDetail: _0x4b0469,
      order: 0
    }) : _0x180550[_0x47ca9a(435)](_0x3cf129) && _0x479efb < _0x5e6406 ? _0x41a0f4[_0x47ca9a(315)]({
      gameRuleDetail: _0x4b0469,
      order: _0x479efb
    }) : _0x5c7664[_0x47ca9a(315)]({
      gameRuleDetail: _0x4b0469,
      order: 9999
    });
  }
  _0x5c7664 = _0x41a0f4[_0x47ca9a(421)](_0x5c7664);
  _0x5c7664[_0x47ca9a(296)]((_0x1dffc9, _0x23e5a8) => {
    const _0x34a022 = _0x47ca9a;
    return _0x1dffc9.order - _0x23e5a8[_0x34a022(319)];
  });
  for (let _0x3513a4 = 0; _0x3513a4 < _0x5c7664[_0x47ca9a(427)]; _0x3513a4++) {
    let _0x5a1dc0 = _0x5c7664[_0x3513a4].gameRuleDetail;
    let _0x11a6da = _0x5a1dc0[_0x47ca9a(298)];
    let _0x1a1b78 = JSON[_0x47ca9a(282)](_0x5a1dc0[_0x47ca9a(316)]) || null;
    let _0x59b68e = moment()[_0x47ca9a(437)](-2, "h")[_0x47ca9a(425)]("x");
    let _0x2c981c = parseInt(moment().format("H"));
    let _0x3079cb = {
      unionID: _0xf16f62,
      isRobot: true,
      isReback: {
        $ne: true
      },
      roomID: "",
      gameType: {
        $in: [_0x11a6da]
      },
      isBind: true,
      robotType: 0
    };
    let _0x4623f5 = await commonDao[_0x47ca9a(389)](_0x47ca9a(379), _0x3079cb, {
      lastLoginTime: 1
    });
    let _0x1cbf6a = _0x1a1b78[_0x47ca9a(291)];
    let _0x2b9911 = [];
    for (let _0x403428 = 0; _0x403428 < _0x4623f5[_0x47ca9a(427)]; _0x403428++) {
      let _0x346783 = _0x4623f5[_0x403428];
      let _0x24f623 = _0x346783.unionInfo.find(function (_0x41a6ef) {
        const _0x166394 = _0x47ca9a;
        return _0x41a6ef[_0x166394(300)][_0x166394(325)]() === _0xf16f62[_0x166394(325)]();
      }[_0x47ca9a(337)](this));
      let _0x260954 = _0x52bfdb[_0x47ca9a(410)][_0x47ca9a(320)];
      let _0x439f31 = await this[_0x47ca9a(305)](_0x346783[_0x47ca9a(297)], _0xf16f62, _0x346783[_0x47ca9a(323)], _0x346783[_0x47ca9a(382)], _0x24f623, _0x1a1b78[_0x47ca9a(334)], _0x260954, true);
      _0x439f31 && _0x2b9911[_0x47ca9a(315)](_0x346783);
    }
    if (_0x2b9911[_0x47ca9a(427)] >= _0x1cbf6a) {
      let _0x16c6c7 = _0x2b9911.pop();
      let _0x4fdefc = _0x16c6c7[_0x47ca9a(438)][_0x47ca9a(317)](function (_0x3df8b1) {
        const _0x56b614 = _0x47ca9a;
        return _0x3df8b1.unionID.toString() === _0xf16f62[_0x56b614(325)]();
      }[_0x47ca9a(337)](this));
      if (_0x4fdefc && _0x5a1dc0[_0x47ca9a(316)]) {
        if (_0x4fdefc[_0x47ca9a(370)] < _0x1a1b78[_0x47ca9a(334)]) {
          continue;
        }
      }
      let _0xd10fe3 = await _0x52bfdb[_0x47ca9a(340)](_0x5a1dc0[_0x47ca9a(350)][_0x47ca9a(325)](), _0x5a1dc0[_0x47ca9a(316)], userInfoServices[_0x47ca9a(330)](_0x16c6c7));
      if (_0xd10fe3 == code.OK) {
        let _0xc29da3 = await _0x52bfdb.robotReady(_0x16c6c7[_0x47ca9a(297)]);
        let _0x1b501f = dispatch[_0x47ca9a(422)](_0x16c6c7[_0x47ca9a(297)], pomelo[_0x47ca9a(295)][_0x47ca9a(341)](_0x47ca9a(373)));
        let _0x4cd6af = moment()[_0x47ca9a(425)]("x");
        let _0x253ddd = await userDao.updateUserDataByUid(_0x16c6c7[_0x47ca9a(297)], {
          frontendId: _0x1b501f.id,
          lastLoginTime: _0x4cd6af
        });
        let _0x480d33 = _0x253ddd[_0x47ca9a(372)];
        _0x2b9911[_0x47ca9a(296)]((_0x24f8c6, _0x25c591) => {
          const _0x2272b5 = _0x47ca9a;
          return Math[_0x2272b5(426)]() > 0.5;
        });
        let _0xc55229 = _0x2b9911[_0x47ca9a(394)](0, _0x1cbf6a - 1);
        for (let _0x322fcc = 0; _0x322fcc < _0xc55229[_0x47ca9a(427)]; _0x322fcc++) {
          let _0x485509 = _0xc55229[_0x322fcc];
          await this.robotJoinRoom(_0xf16f62, _0x485509, _0x480d33);
        }
      }
    }
    let _0x46b6df = {
      beginTime: {
        $lte: _0x2c981c
      },
      endTime: {
        $gt: _0x2c981c
      },
      unionID: parseInt(_0xf16f62),
      isRobot: true,
      isReback: {
        $ne: true
      },
      roomID: "",
      gameType: {
        $in: [0, _0x11a6da]
      },
      isBind: true,
      robotType: {
        $in: [2]
      }
    };
    let _0x2e98d4 = await commonDao[_0x47ca9a(389)](_0x47ca9a(379), _0x46b6df, {
      lastLoginTime: 1
    });
    for (let _0x57da95 = 0; _0x57da95 < _0x2e98d4[_0x47ca9a(427)]; _0x57da95++) {
      let _0x3d06cd = _0x2e98d4[_0x57da95];
      if (_0x3d06cd) {
        let _0x84a3ef = _0x3d06cd.unionInfo[_0x47ca9a(317)](function (_0x2ec13f) {
          const _0x561258 = _0x47ca9a;
          return _0x2ec13f.unionID[_0x561258(325)]() === _0xf16f62[_0x561258(325)]();
        }[_0x47ca9a(337)](this));
        if (_0x84a3ef && _0x5a1dc0.gameRule) {
          let _0x12db21 = JSON.parse(_0x5a1dc0[_0x47ca9a(316)]) || null;
          if (_0x12db21 && !_0x12db21.robotCount) {
            continue;
          }
          let _0xc97d26 = _0x2e98d4[_0x57da95];
          let _0x31dfb8 = _0x52bfdb[_0x47ca9a(410)][_0x47ca9a(320)];
          let _0x4a1299 = await this.checkUserScore(_0xc97d26[_0x47ca9a(297)], _0xf16f62, _0xc97d26.winScore, _0xc97d26[_0x47ca9a(382)], _0x84a3ef, _0x12db21[_0x47ca9a(334)], _0x31dfb8);
          if (_0x12db21 && _0x4a1299) {
            let _0x85e7c3 = await _0x52bfdb[_0x47ca9a(340)](_0x5a1dc0._id[_0x47ca9a(325)](), _0x5a1dc0.gameRule, userInfoServices.buildGameRoomUserInfo(_0xc97d26));
            if (_0x85e7c3 == code.OK) {
              let _0x13da7d = await _0x52bfdb[_0x47ca9a(378)](_0xc97d26[_0x47ca9a(297)]);
              let _0x316c44 = dispatch[_0x47ca9a(422)](_0xc97d26.uid, pomelo[_0x47ca9a(295)][_0x47ca9a(341)](_0x47ca9a(373)));
              let _0x4fc8c0 = moment().format("x");
              await userDao.updateUserDataByUid(_0xc97d26[_0x47ca9a(297)], {
                frontendId: _0x316c44.id,
                lastLoginTime: _0x4fc8c0
              });
              break;
            }
          } else {
            continue;
          }
        }
      }
    }
  }
};
exp[a0_0x583b2d(285)] = async function (_0x2124bd, _0x110b6b, _0x20f589) {
  const _0x3111df = a0_0x583b2d;
  let _0x436de0 = await this.getUnion(_0x2124bd);
  !_0x436de0 && robotlogger[_0x3111df(413)]("[robotScheduler] robotJoinRoom union is not exit");
  let _0x2bf1cb = userInfoServices.buildGameRoomUserInfo(_0x110b6b);
  let _0x2abf00 = await _0x436de0[_0x3111df(301)](_0x20f589, _0x2bf1cb);
  if (_0x2abf00 == code.OK) {
    let _0x14f412 = code.OK;
    _0x110b6b[_0x3111df(298)] < 200 && (_0x14f412 = await _0x436de0[_0x3111df(378)](_0x110b6b[_0x3111df(297)], _0x20f589));
    if (_0x14f412 == code.FAIL) {
      await _0x436de0[_0x3111df(399)](_0x110b6b[_0x3111df(297)], _0x20f589);
    } else {
      let _0x4d10b1 = dispatch[_0x3111df(422)](_0x110b6b[_0x3111df(297)], pomelo[_0x3111df(295)][_0x3111df(341)](_0x3111df(373)));
      let _0x3eba91 = moment()[_0x3111df(425)]("x");
      await userDao.updateUserDataByUid(_0x110b6b[_0x3111df(297)], {
        frontendId: _0x4d10b1.id,
        lastLoginTime: _0x3eba91
      });
    }
  }
  return _0x2abf00;
};
exp[a0_0x583b2d(343)] = async function () {};
exp[a0_0x583b2d(305)] = async function (_0x47ff8a, _0x231566, _0x3ed1bd, _0x5c134c, _0x35678b, _0x19043a, _0xa79383, _0x36a07f = false) {
  const _0x29530d = a0_0x583b2d;
  let _0x366479 = true;
  if (IS_WIN_LOSE_LIMIT && !_0x36a07f) {
    let _0x52fbe2 = _0x35678b && _0x35678b[_0x29530d(309)] || 0;
    (_0x3ed1bd && _0x52fbe2 > _0x3ed1bd || _0x5c134c && _0x52fbe2 < 0 && Math[_0x29530d(374)](_0x52fbe2) > _0x5c134c) && (_0x366479 = false);
  }
  if (_0x366479) {
    let _0x44e3ca = _0x3ed1bd ? parseInt(_0x19043a + _0x3ed1bd + Math[_0x29530d(426)]() * _0x3ed1bd) : parseInt(_0x19043a + +Math[_0x29530d(426)]() * _0x19043a);
    if (_0x44e3ca > _0x35678b[_0x29530d(370)]) {
      let _0x293f8f = _0x44e3ca - _0x35678b.score;
      let _0x2aab9e = await userDao[_0x29530d(368)](_0xa79383);
      let _0x3cc0fa = null;
      for (let _0x250d1a = 0; _0x250d1a < _0x2aab9e.unionInfo[_0x29530d(427)]; ++_0x250d1a) {
        if (_0x2aab9e[_0x29530d(438)][_0x250d1a][_0x29530d(300)] == _0x231566) {
          _0x3cc0fa = _0x2aab9e[_0x29530d(438)][_0x250d1a];
          break;
        }
      }
      if (_0x3cc0fa && _0x3cc0fa[_0x29530d(370)] > _0x293f8f) {
        let _0x11dfea = await userDao[_0x29530d(338)]({
          uid: _0x47ff8a,
          "unionInfo.unionID": _0x231566
        }, {
          $inc: {
            "unionInfo.$.score": _0x293f8f
          }
        });
        let _0x3343cd = await userDao[_0x29530d(338)]({
          uid: _0xa79383,
          "unionInfo.unionID": _0x231566
        }, {
          $inc: {
            "unionInfo.$.score": -_0x293f8f
          }
        });
        if (!!_0x3343cd[_0x29530d(313)]) {
          userInfoServices[_0x29530d(400)](_0x3343cd.uid, _0x3343cd.frontendId, {
            unionInfo: _0x3343cd[_0x29530d(438)]
          })[_0x29530d(431)](_0xd07ab8 => {
            logger.error(_0xd07ab8.stack);
          });
        }
        let _0x3881f2 = _0x11dfea.unionInfo[_0x29530d(317)](_0x44c0e7 => _0x44c0e7[_0x29530d(300)] == _0x231566);
        let _0x597701 = {
          uid: _0xa79383,
          nickname: _0x2aab9e[_0x29530d(409)],
          avatar: _0x2aab9e.avatar,
          gainUid: _0x47ff8a,
          gainNickname: _0x11dfea[_0x29530d(409)],
          gainAvatar: _0x11dfea[_0x29530d(310)],
          gainScore: _0x3881f2.score,
          unionID: _0x231566,
          count: _0x293f8f,
          createTime: Date.now()
        };
        commonDao[_0x29530d(299)](_0x29530d(396), _0x597701)[_0x29530d(431)](_0xb18f2 => {
          const _0x3d73c2 = _0x29530d;
          logger.error(_0xb18f2[_0x3d73c2(366)]);
        });
        let _0x1c17a4 = _0x3343cd[_0x29530d(438)][_0x29530d(317)](function (_0x53583c) {
          const _0x4fc392 = _0x29530d;
          return _0x53583c[_0x4fc392(300)] == _0x231566;
        });
        let _0x4a8da9 = [];
        _0x4a8da9[_0x29530d(315)]({
          uid: _0x3343cd[_0x29530d(297)],
          nickname: _0x3343cd[_0x29530d(409)],
          unionID: _0x231566,
          changeCount: -_0x293f8f,
          leftCount: _0x1c17a4[_0x29530d(370)],
          leftSafeBoxCount: _0x1c17a4[_0x29530d(346)],
          leftSaveBoxCount: _0x1c17a4.saveScore,
          changeType: enumeration[_0x29530d(387)][_0x29530d(331)],
          describe: _0x29530d(423) + _0x11dfea.uid + "加分" + _0x293f8f,
          createTime: Date[_0x29530d(418)]()
        });
        let _0x2f263a = _0x11dfea.unionInfo[_0x29530d(317)](function (_0x4bb70e) {
          const _0x4c4cd8 = _0x29530d;
          return _0x4bb70e[_0x4c4cd8(300)] == _0x231566;
        });
        _0x4a8da9[_0x29530d(315)]({
          uid: _0x11dfea[_0x29530d(297)],
          nickname: _0x11dfea[_0x29530d(409)],
          unionID: _0x231566,
          changeCount: _0x293f8f,
          leftCount: _0x2f263a[_0x29530d(370)],
          leftSafeBoxCount: _0x2f263a[_0x29530d(346)],
          leftSaveBoxCount: _0x2f263a[_0x29530d(293)],
          changeType: enumeration.scoreChangeType[_0x29530d(365)],
          describe: "上级" + _0x3343cd[_0x29530d(297)] + "加分" + _0x293f8f,
          createTime: Date.now()
        });
        await commonDao[_0x29530d(395)](_0x29530d(351), _0x4a8da9);
        await commonDao[_0x29530d(395)](_0x29530d(412), _0x4a8da9).catch(_0x351bc8 => {
          const _0x268674 = _0x29530d;
          logger[_0x268674(349)](_0x351bc8[_0x268674(366)]);
        });
      }
    }
  }
  return _0x366479;
};