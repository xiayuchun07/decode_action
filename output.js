
const a0_0xc7957a = a0_0x4b8d;
function a0_0x3425() {
  const _0x3f9042 = ["ticketRate", "FIX_SCORE", "rebateTicket", "nickname", "format", "../constant/enumeration", "] pay serverFee = ", "unionInfo", " rebateCount = ", "] rebateRateList = ", "createData", "score", "error", "userInfo", "userScoreDetailModel", "execRebate", "./userInfoServices", "fixScore", "scoreChangeType", "getBigWinUidArr", "userId", "752KadXDm", "execTicketRebate", "] single rebate detail  serverScore = ", "unionInfo.$.todayBigWinDraw", "] 获取保底返利 unionID = ", "catch", "11930EdEewl", "GAME_START_UNION_CHOU", "ladderScore", "] 保底返利获取失败 unionID = ", "] 门票返利获取失败 unionID = ", "] 返利获取失败 unionID = ", "frontendId", " avgScore = ", "saveScore", " uid = ", "sort", "floor", "rebate", "1lVuXVL", "../util/utils", "find", "] 保底返利明细 rebateRateList = ", "length", "info", "rebateDouble", "rebateScore", "lowUid", "fixScoreRate", " winScore = ", "minScore", "avatar", "push", "363696qkYoIt", "] 只有盟主收取保底 ", " roomID = ", "抽取服务费", "UNION_SERVICE", "9ifubHi", "274757IcSEwC", "safeScore", "unionID", " count = ", "toFixed", "% serverScoreFee = ", " fixedScoreList = ", "] fixScore = ", "12loApgZ", "3978020OsKsku", "updateUserData", "unionInfo.$.score", "] 门票返利明细 rebateRateList = ", "赢家抽分", "stack", "uid", "bigWinCount", "169816ZXlURr", "ticketScore", "stringify", "抽取门票", "] pay fixedScore = ", "] double rebate detail serverScore = ", "now", "userRebateRecordModel", "getRebateList", "保底抽分", " userID = ", "rebateSingle", "] pay serverScore = ", "userScoreChangeRecordModel", "] 只有盟主收取门票 ", " getFixedScore = ", "] 获取门票返利 unionID = ", "] 获取门票会层级返利 ", "$inc", "clone", "addServerScore", " fixScoreList = ", "addFixedScore", "moment", "unionManager", "maxScore", "isRobot", " scoreList = ", "] uid = ", "4511056zxJRxE", "GAME_WIN_CHOU", "toString", "winScore", " userSpreadList = ", "抽取保底", "createDataArr", "roomPayRule", "pop", "execFixRebate", "游戏抽水", " rebateTotal = ", "updateUserDataNotify", "pomelo", "../constant/code", " rebateList = ", "count", "getSPreadLevelAsync", "percentScore", "%  serverScoreFee = ", "percentMinWinScore", "abs", "rebateRate", "hasOwnProperty", "2402056tKfhoL", "spreaderID", "fixScoreType", "bind", "indexOf"];
  a0_0x3425 = function () {
    return _0x3f9042;
  };
  return a0_0x3425();
}
(function (_0x291001, _0x528eeb) {
  const _0x2a6790 = a0_0x4b8d;
  const _0x1f41f8 = _0x291001();
  while (true) {
    try {
      const _0x23db3d = parseInt(_0x2a6790(443)) / 1 * (parseInt(_0x2a6790(480)) / 2) + parseInt(_0x2a6790(457)) / 3 + -parseInt(_0x2a6790(424)) / 4 * (-parseInt(_0x2a6790(430)) / 5) + -parseInt(_0x2a6790(471)) / 6 * (-parseInt(_0x2a6790(463)) / 7) + parseInt(_0x2a6790(533)) / 8 + parseInt(_0x2a6790(462)) / 9 * (-parseInt(_0x2a6790(472)) / 10) + -parseInt(_0x2a6790(509)) / 11;
      if (_0x23db3d === _0x528eeb) {
        break;
      } else {
        _0x1f41f8.push(_0x1f41f8.shift());
      }
    } catch (_0x418535) {
      _0x1f41f8.push(_0x1f41f8.shift());
    }
  }
})(a0_0x3425, 225569);
let utils = require(a0_0xc7957a(444));
let moment = require(a0_0xc7957a(503));
let code = require(a0_0xc7957a(523));
let userDao = require("../dao/userDao");
let dao = require("../dao/commonDao");
let logger = require("pomelo-logger").getLogger(a0_0xc7957a(442));
let userInfoServices = require(a0_0xc7957a(554));
let pomelo = require(a0_0xc7957a(522));
function a0_0x4b8d(_0x5b641b, _0x41c518) {
  const _0x48c5d8 = a0_0x3425();
  a0_0x4b8d = function (_0x218e33, _0x224b0b) {
    _0x218e33 = _0x218e33 - 424;
    let _0x1db977 = _0x48c5d8[_0x218e33];
    return _0x1db977;
  };
  return a0_0x4b8d(_0x5b641b, _0x41c518);
}
const enumeration = require(a0_0xc7957a(543));
let services = module.exports;
services[a0_0xc7957a(553)] = async function (_0x44e5e3, _0x3626c1, _0x46f6ae, _0x251844, _0x2eb42a, _0x192ef4, _0x41bb7a, _0x5907d1, _0x25400c, _0x228d2e) {
  const _0x878d5f = a0_0xc7957a;
  if (_0x5907d1 <= 0) {
    return;
  }
  logger.info("[" + _0x44e5e3 + "][" + _0x3626c1 + "] rabate unionID = " + _0x44e5e3 + _0x878d5f(459) + _0x3626c1 + _0x878d5f(490) + _0x251844[_0x878d5f(478)] + _0x878d5f(466) + _0x5907d1 + " ");
  let _0x45ee4e = await userInfoServices[_0x878d5f(526)](_0x251844.uid, _0x44e5e3);
  _0x45ee4e[_0x878d5f(440)]((_0xae0c61, _0x277134) => _0x277134.count - _0xae0c61[_0x878d5f(525)]);
  let _0x3c1dfd = [];
  let _0x18f7e5 = _0x5907d1;
  if (_0x45ee4e[_0x878d5f(447)] > 0) {
    for (let _0x212e2e = 0; _0x212e2e < _0x45ee4e[_0x878d5f(447)]; _0x212e2e++) {
      let _0x413b28 = _0x45ee4e[_0x212e2e];
      if (!_0x413b28) {
        continue;
      }
      let _0x1afdd3 = _0x45ee4e[_0x878d5f(445)](_0x46124b => _0x46124b[_0x878d5f(534)] && _0x46124b.spreaderID.toString() == _0x413b28[_0x878d5f(558)][_0x878d5f(511)]());
      if (_0x1afdd3) {
        let _0x3402b5 = _0x1afdd3[_0x878d5f(531)];
        if (_0x18f7e5 < 0.1 || _0x3402b5 <= 0) {
          let _0x5f9b29 = {
            uid: _0x413b28.userId,
            count: _0x18f7e5,
            lowUid: _0x1afdd3[_0x878d5f(558)]
          };
          _0x3c1dfd[_0x878d5f(456)](_0x5f9b29);
          break;
        } else {
          let _0x5aa403 = Math[_0x878d5f(441)](_0x18f7e5 * (1 - _0x3402b5) * 100) / 100;
          let _0x85293d = {
            uid: _0x413b28[_0x878d5f(558)],
            count: _0x5aa403,
            lowUid: _0x1afdd3[_0x878d5f(558)]
          };
          _0x3c1dfd.push(_0x85293d);
          _0x18f7e5 = Math.floor((_0x18f7e5 - _0x5aa403) * 100) / 100;
        }
      } else {
        let _0xd2c572 = {
          uid: _0x413b28[_0x878d5f(558)],
          count: _0x18f7e5,
          lowUid: _0x413b28[_0x878d5f(558)]
        };
        _0x3c1dfd[_0x878d5f(456)](_0xd2c572);
        break;
      }
    }
  } else {
    logger[_0x878d5f(550)]("[" + _0x44e5e3 + "][" + _0x3626c1 + _0x878d5f(435) + _0x44e5e3 + _0x878d5f(459) + _0x3626c1 + " userID = " + _0x251844[_0x878d5f(478)] + " userSpreadList = " + JSON[_0x878d5f(482)](_0x45ee4e) + " ");
  }
  logger[_0x878d5f(448)]("[" + _0x44e5e3 + "][" + _0x3626c1 + _0x878d5f(547) + JSON[_0x878d5f(482)](_0x3c1dfd) + " ");
  for (let _0x466931 = 0; _0x466931 < _0x3c1dfd.length; _0x466931++) {
    let _0xca5d29 = _0x3c1dfd[_0x466931];
    let _0x446e83 = _0xca5d29[_0x878d5f(525)] || 0;
    let _0x19baa7 = {
      $inc: {
        "unionInfo.$.safeScore": _0x446e83,
        "unionInfo.$.todayRebate": _0x446e83,
        "unionInfo.$.totalRebate": _0x446e83
      }
    };
    !_0x228d2e && (_0x19baa7[_0x878d5f(498)]["unionInfo.$.memberTodayDraw"] = 1, _0x25400c && (_0x19baa7.$inc["unionInfo.$.memberTodayBigWinDraw"] = 1));
    let _0x32ff23 = await userDao[_0x878d5f(473)]({
      uid: _0xca5d29.uid,
      "unionInfo.unionID": _0x44e5e3
    }, _0x19baa7);
    !!_0x32ff23.frontendId && (await userInfoServices[_0x878d5f(521)](_0x32ff23[_0x878d5f(478)], _0x32ff23[_0x878d5f(436)], {
      unionInfo: _0x32ff23[_0x878d5f(545)]
    })[_0x878d5f(429)](_0x3d61d9 => {}));
    !!_0xca5d29.lowUid && (await userDao.updateUserData({
      uid: _0xca5d29.lowUid,
      "unionInfo.unionID": _0x44e5e3
    }, {
      $inc: {
        "unionInfo.$.todayProvideRebate": _0x446e83
      }
    }));
    let _0x164103 = {
      uid: _0x32ff23.uid,
      nickname: _0x32ff23[_0x878d5f(541)],
      avatar: _0x32ff23[_0x878d5f(455)],
      roomID: _0x3626c1,
      gameType: _0x46f6ae,
      unionID: _0x44e5e3,
      playerUid: _0x251844[_0x878d5f(478)],
      playerNickname: _0x251844[_0x878d5f(541)],
      playerAvatar: _0x251844[_0x878d5f(455)],
      totalCount: _0x5907d1,
      gainCount: _0x446e83,
      start: false,
      createTime: Date.now()
    };
    await dao[_0x878d5f(548)](_0x878d5f(487), _0x164103).catch(_0x15a080 => {
      const _0x555cad = _0x878d5f;
      logger[_0x555cad(550)](_0x15a080[_0x555cad(477)]);
    });
  }
};
services[a0_0xc7957a(488)] = function (_0xab1dc, _0x8c2742, _0x1867fc) {
  const _0x4b6ff8 = a0_0xc7957a;
  _0x8c2742 = utils[_0x4b6ff8(499)](_0x8c2742);
  let _0x1fc988 = _0xab1dc[_0x4b6ff8(516)];
  let _0x5d4a07 = parseFloat(_0xab1dc[_0x4b6ff8(555)]) || 0;
  let _0x16bc1d = services[_0x4b6ff8(557)](_0xab1dc, _0x8c2742);
  let _0x46b4cf = {};
  let _0x2a3172 = {};
  let _0xff49a2 = {};
  for (let _0x37d066 = 0; _0x37d066 < _0x16bc1d[_0x4b6ff8(447)]; ++_0x37d066) {
    let _0x4ffaa6 = _0x16bc1d[_0x37d066];
    let _0x54ce07 = _0x8c2742[_0x4ffaa6];
    let _0x3bcc11 = Math[_0x4b6ff8(530)](_0x54ce07[_0x4b6ff8(512)]);
    if (_0x1fc988[_0x4b6ff8(432)] && _0x1fc988[_0x4b6ff8(432)][_0x4b6ff8(447)] > 0) {
      for (let _0x25ff8e = 0; _0x25ff8e < _0x1fc988.ladderScore[_0x4b6ff8(447)]; _0x25ff8e++) {
        let _0x4efade = _0x1fc988[_0x4b6ff8(432)][_0x25ff8e];
        if (_0x3bcc11 >= Math.abs(_0x4efade[_0x4b6ff8(454)]) && _0x3bcc11 < Math[_0x4b6ff8(530)](_0x4efade[_0x4b6ff8(505)])) {
          let _0x223b67 = Math[_0x4b6ff8(530)](_0x4efade[_0x4b6ff8(450)]);
          _0x46b4cf[_0x4ffaa6] = (_0x46b4cf[_0x4ffaa6] || 0) + _0x223b67;
          break;
        }
      }
      if (_0x1867fc && _0x46b4cf[_0x4ffaa6]) {
        let _0x43e603 = _0x46b4cf[_0x4ffaa6] * _0x1867fc / 100;
        _0xff49a2[_0x4ffaa6] = _0x43e603;
        _0x46b4cf[_0x4ffaa6] -= _0x43e603;
      }
      if (_0xab1dc[_0x4b6ff8(535)] == 1 && _0x5d4a07) {
        _0x46b4cf[_0x4ffaa6] > _0x5d4a07 ? (_0x2a3172[_0x4ffaa6] = _0x5d4a07, _0x46b4cf[_0x4ffaa6] -= _0x5d4a07) : (_0x2a3172[_0x4ffaa6] = _0x46b4cf[_0x4ffaa6], _0x46b4cf[_0x4ffaa6] = 0);
      } else {
        if (_0xab1dc.fixScoreType == 2 && _0x5d4a07) {
          let _0x5c73b6 = _0x2a3172[_0x4ffaa6] * _0x5d4a07 / 100;
          _0x2a3172[_0x4ffaa6] = _0x5c73b6;
          _0x46b4cf[_0x4ffaa6] = -_0x5c73b6;
        }
      }
    } else {
      if (_0x1fc988[_0x4b6ff8(527)] !== null) {
        if (_0x1fc988[_0x4b6ff8(529)] === null || _0x3bcc11 >= _0x1fc988[_0x4b6ff8(529)]) {
          let _0x1bd17a = Math[_0x4b6ff8(441)](_0x1fc988[_0x4b6ff8(527)] / 100 * _0x3bcc11 * 100) / 100;
          if (_0x1bd17a < 0.01) {
            continue;
          }
          _0x46b4cf[_0x4ffaa6] = (_0x46b4cf[_0x4ffaa6] || 0) + _0x1bd17a;
        }
        if (_0x1867fc && _0x46b4cf[_0x4ffaa6]) {
          let _0x410db5 = _0x46b4cf[_0x4ffaa6] * _0x1867fc / 100;
          _0xff49a2[_0x4ffaa6] = _0x410db5;
          _0x46b4cf[_0x4ffaa6] -= _0x410db5;
        }
        if (_0xab1dc[_0x4b6ff8(535)] == 1 && _0x5d4a07 && _0x46b4cf[_0x4ffaa6]) {
          _0x46b4cf[_0x4ffaa6] > _0x5d4a07 ? (_0x2a3172[_0x4ffaa6] = _0x5d4a07, _0x46b4cf[_0x4ffaa6] -= _0x5d4a07) : (_0x2a3172[_0x4ffaa6] = _0x46b4cf[_0x4ffaa6], _0x46b4cf[_0x4ffaa6] = 0);
        } else {
          if (_0xab1dc[_0x4b6ff8(535)] == 2 && _0x5d4a07 && _0x46b4cf[_0x4ffaa6]) {
            let _0x1dd78a = _0x46b4cf[_0x4ffaa6] * _0x5d4a07 / 100;
            _0x2a3172[_0x4ffaa6] = _0x1dd78a;
            _0x46b4cf[_0x4ffaa6] -= _0x1dd78a;
          }
        }
      } else {
        _0xab1dc[_0x4b6ff8(535)] == 1 && _0x5d4a07 ? _0x2a3172[_0x4ffaa6] = _0x5d4a07 : _0x2a3172[_0x4ffaa6] = 0;
      }
    }
  }
  return {
    rebateList: _0x46b4cf,
    fixedScoreList: _0x2a3172,
    bigWinUidArr: _0x16bc1d,
    serverScoreFee: _0xff49a2
  };
};
services[a0_0xc7957a(557)] = function (_0x5ec6a3, _0x5df68c) {
  const _0x1a2fa1 = a0_0xc7957a;
  let _0x4623e6 = [];
  for (let _0x4c9ea3 in _0x5df68c) {
    let _0x3872c1 = _0x5df68c[_0x4c9ea3];
    if (!_0x3872c1 || !_0x3872c1[_0x1a2fa1(512)] || _0x3872c1[_0x1a2fa1(512)] <= 0) {
      continue;
    }
    _0x4623e6[_0x1a2fa1(456)]({
      uid: _0x4c9ea3,
      winScore: _0x3872c1.winScore
    });
  }
  _0x4623e6[_0x1a2fa1(440)](function (_0x2bbcbb, _0x22872d) {
    const _0x3d16ae = _0x1a2fa1;
    return _0x22872d[_0x3d16ae(512)] - _0x2bbcbb[_0x3d16ae(512)];
  });
  let _0x237e13 = _0x5ec6a3[_0x1a2fa1(516)];
  let _0x5538ff = 100;
  _0x237e13[_0x1a2fa1(479)] === -1 ? _0x5538ff = 100 : _0x5538ff = _0x237e13[_0x1a2fa1(479)] || 100;
  let _0x57a4f9 = [];
  let _0xb99438 = _0x4623e6[0];
  for (let _0x137a49 = 0; _0x137a49 < _0x4623e6.length; ++_0x137a49) {
    let _0x20ede5 = _0x4623e6[_0x137a49];
    if (_0x20ede5[_0x1a2fa1(512)] <= 0) {
      continue;
    }
    if (_0x5538ff <= 0 && _0x20ede5.winScore !== _0xb99438) {
      break;
    }
    _0x57a4f9[_0x1a2fa1(456)](_0x20ede5[_0x1a2fa1(478)]);
    _0x5538ff--;
  }
  return _0x57a4f9;
};
services[a0_0xc7957a(491)] = async function (_0x57482a, _0x555474, _0x5ba327, _0x468266, _0xe963b8, _0xe4cbf2, _0x5bbd03, _0x20be5b, _0x35265b, _0x31a435 = false) {
  const _0x57d700 = a0_0xc7957a;
  logger.info("[" + _0x57482a + "][" + _0x5bbd03 + _0x57d700(426) + _0xe963b8 + _0x57d700(468) + JSON.stringify(_0x35265b) + _0x57d700(524) + JSON[_0x57d700(482)](_0x5ba327) + _0x57d700(469) + JSON[_0x57d700(482)](_0x468266) + " ");
  let _0x2b63ac = [];
  let _0x363d18 = 0;
  for (let _0x244236 in _0x555474) {
    if (_0x555474[_0x57d700(532)](_0x244236)) {
      try {
        let _0x477266 = _0x555474[_0x244236];
        if (!_0x477266) {
          continue;
        }
        let _0x1b74d5 = _0x477266.winScore;
        _0x363d18 += 1;
        let _0x19e459 = {
          $inc: {
            "unionInfo.$.totalDraw": 1,
            "unionInfo.$.weekDraw": 1
          }
        };
        _0xe4cbf2[_0x57d700(537)](_0x244236) !== -1 && (_0x19e459[_0x57d700(498)][_0x57d700(427)] = 1);
        let _0x5cafce = _0x5ba327[_0x244236] || 0;
        let _0x1c42b2 = _0x468266[_0x244236] || 0;
        let _0x2d150c = _0x35265b[_0x244236] || 0;
        let _0x1537fc = _0x5cafce + _0x1c42b2 + _0x2d150c;
        if (_0x1537fc > 0) {
          let _0x43d336 = _0x1537fc;
          _0x19e459[_0x57d700(498)][_0x57d700(474)] = -_0x43d336;
        }
        logger[_0x57d700(448)]("[" + _0x57482a + "][" + _0x5bbd03 + "] uid = " + _0x244236 + _0x57d700(453) + _0x1b74d5 + _0x57d700(520) + _0x1537fc + " serverFee = " + _0x2d150c + _0x57d700(546) + _0x5cafce + " getFixedScore = " + _0x1c42b2 + " ");
        let _0xad1393 = await userDao[_0x57d700(473)]({
          uid: _0x244236,
          "unionInfo.unionID": _0x57482a
        }, _0x19e459);
        !_0xad1393 && _0x477266[_0x57d700(551)][_0x57d700(506)] && (_0xad1393 = await userDao.getUserDataByUid(_0x244236));
        _0xad1393.frontendId && (await userInfoServices[_0x57d700(521)](_0xad1393[_0x57d700(478)], _0xad1393.frontendId, {
          unionInfo: _0xad1393[_0x57d700(545)]
        })[_0x57d700(429)](_0x376bf5 => {}));
        let _0x1f3961 = _0xad1393.unionInfo[_0x57d700(445)](function (_0x3c4d94) {
          const _0x27c473 = _0x57d700;
          return _0x3c4d94[_0x27c473(465)] === _0x57482a;
        }[_0x57d700(536)](this));
        _0x1f3961 = _0x1f3961 ? _0x1f3961 : {};
        if (_0x1537fc > 0) {
          let _0x23ac90 = {
            uid: _0xad1393[_0x57d700(478)],
            nickname: _0xad1393[_0x57d700(541)],
            unionID: _0x57482a,
            changeCount: -_0x1537fc,
            leftCount: _0x1f3961[_0x57d700(549)],
            leftSafeBoxCount: _0x1f3961[_0x57d700(464)],
            leftSaveBoxCount: _0x1f3961[_0x57d700(438)],
            gameType: _0x20be5b,
            changeType: enumeration.scoreChangeType.GAME_WIN_CHOU,
            describe: _0x57d700(519) + _0x1537fc,
            createTime: Date[_0x57d700(486)]()
          };
          await dao.createData("userScoreDetailModel", _0x23ac90)[_0x57d700(429)](_0x413ee2 => {
            logger.error(_0x413ee2.stack);
          });
        }
        _0x2d150c > 0 && (await services[_0x57d700(500)](_0x2d150c, _0xad1393, _0x57482a, _0x5bbd03, _0x20be5b), logger.info("[" + _0x57482a + "][" + _0x5bbd03 + _0x57d700(544) + _0x2d150c + _0x57d700(439) + _0x244236 + " "), _0x2b63ac.push({
          uid: _0xad1393[_0x57d700(478)],
          nickname: _0xad1393[_0x57d700(541)],
          unionID: _0x57482a,
          changeCount: -_0x2d150c,
          leftCount: _0x1f3961.score || 0,
          leftSafeBoxCount: _0x1f3961[_0x57d700(464)] || 0,
          leftSaveBoxCount: _0x1f3961[_0x57d700(438)] || 0,
          gameType: _0x20be5b,
          changeType: enumeration[_0x57d700(556)][_0x57d700(461)],
          describe: "抽取服务费" + _0x2d150c,
          createTime: moment().format("x")
        }));
        _0x1c42b2 > 0 && (logger[_0x57d700(448)]("[" + _0x57482a + "][" + _0x5bbd03 + _0x57d700(484) + _0x1c42b2 + _0x57d700(439) + _0x244236 + " "), _0x2b63ac[_0x57d700(456)]({
          uid: _0xad1393[_0x57d700(478)],
          nickname: _0xad1393[_0x57d700(541)],
          unionID: _0x57482a,
          changeCount: -_0x1c42b2,
          leftCount: _0x1f3961.score || 0,
          leftSafeBoxCount: _0x1f3961[_0x57d700(464)] || 0,
          leftSaveBoxCount: _0x1f3961.saveScore || 0,
          gameType: _0x20be5b,
          changeType: enumeration[_0x57d700(556)][_0x57d700(539)],
          describe: _0x57d700(514) + _0x1c42b2,
          createTime: moment()[_0x57d700(542)]("x")
        }), await services[_0x57d700(518)](_0x57482a, _0x5bbd03, _0x20be5b, _0x477266.userInfo, _0x1c42b2));
        _0x5cafce > 0 && (_0x2b63ac[_0x57d700(456)]({
          uid: _0xad1393.uid,
          nickname: _0xad1393[_0x57d700(541)],
          unionID: _0x57482a,
          changeCount: -_0x5cafce,
          leftCount: _0x1f3961[_0x57d700(549)] || 0,
          leftSafeBoxCount: _0x1f3961[_0x57d700(464)] || 0,
          changeType: enumeration[_0x57d700(556)].GAME_WIN_CHOU,
          leftSaveBoxCount: _0x1f3961[_0x57d700(438)],
          gameType: _0x20be5b,
          describe: _0x57d700(476) + _0x5cafce,
          createTime: moment().format("x")
        }), await services[_0x57d700(553)](_0x57482a, _0x5bbd03, _0x20be5b, _0x477266[_0x57d700(551)], null, null, _0x244236, _0x5cafce, _0xe4cbf2[_0x57d700(537)](_0x244236) !== -1));
      } catch (_0x4a0367) {
        logger[_0x57d700(550)](_0x4a0367[_0x57d700(477)]);
      }
    }
  }
  _0x2b63ac[_0x57d700(447)] > 0 && (await dao[_0x57d700(515)]("userScoreChangeRecordModel", _0x2b63ac)[_0x57d700(429)](_0x55e079 => {
    const _0x321e59 = _0x57d700;
    logger[_0x321e59(550)](_0x55e079[_0x321e59(477)]);
  }));
};
services[a0_0xc7957a(449)] = async function (_0x5389a8, _0x37ad2a, _0x43bd1b, _0x1996b5, _0x31cbf3, _0x253e06, _0x37ab60, _0x55199a, _0x3c39e8, _0x35c4e8 = false) {
  const _0x43bb1c = a0_0xc7957a;
  logger[_0x43bb1c(448)]("[" + _0x5389a8 + "][" + _0x37ab60 + _0x43bb1c(485) + _0x31cbf3 + _0x43bb1c(528) + JSON[_0x43bb1c(482)](_0x3c39e8) + _0x43bb1c(524) + JSON.stringify(_0x43bd1b) + _0x43bb1c(469) + JSON[_0x43bb1c(482)](_0x1996b5) + " ");
  let _0x104c32 = [];
  let _0x61ff0 = 0;
  let _0x576b5b = 0;
  let _0x442e76 = 0;
  for (let _0xd17f2d in _0x37ad2a) {
    if (_0x37ad2a[_0x43bb1c(532)](_0xd17f2d)) {
      let _0xdf0940 = _0x37ad2a[_0xd17f2d];
      _0xdf0940[_0x43bb1c(551)] && _0xdf0940.userInfo[_0x43bb1c(534)] && _0xdf0940[_0x43bb1c(551)].spreaderID != "" && (_0x61ff0 += 1);
    }
  }
  for (let _0x545a50 in _0x37ad2a) {
    if (_0x37ad2a.hasOwnProperty(_0x545a50)) {
      try {
        let _0xb5b6b4 = _0x37ad2a[_0x545a50];
        if (!_0xb5b6b4) {
          continue;
        }
        _0x442e76 += 1;
        let _0x3767a9 = {
          $inc: {
            "unionInfo.$.totalDraw": 1,
            "unionInfo.$.weekDraw": 1
          }
        };
        _0x253e06[_0x43bb1c(537)](_0x545a50) !== -1 && (_0x3767a9[_0x43bb1c(498)][_0x43bb1c(427)] = 1);
        let _0x25c7b0 = _0x43bd1b[_0x545a50] || 0;
        let _0x17ebe0 = _0x1996b5[_0x545a50] || 0;
        let _0x57a542 = _0x3c39e8[_0x545a50] || 0;
        let _0x396a36 = _0x25c7b0 + _0x17ebe0 + _0x57a542;
        if (_0x396a36 > 0) {
          let _0x39fba9 = _0x396a36;
          _0x3767a9[_0x43bb1c(498)][_0x43bb1c(474)] = -_0x39fba9;
        }
        logger[_0x43bb1c(448)]("[" + _0x5389a8 + "][" + _0x37ab60 + _0x43bb1c(508) + _0x545a50 + _0x43bb1c(453) + _0xb5b6b4[_0x43bb1c(512)] + _0x43bb1c(520) + _0x396a36 + " serverFee = " + _0x57a542 + _0x43bb1c(546) + _0x25c7b0 + _0x43bb1c(495) + _0x17ebe0 + " ");
        let _0x34a64e = await userDao[_0x43bb1c(473)]({
          uid: _0x545a50,
          "unionInfo.unionID": _0x5389a8
        }, _0x3767a9);
        !_0x34a64e && _0xb5b6b4.userInfo[_0x43bb1c(506)] && (_0x34a64e = await userDao.getUserDataByUid(_0x545a50));
        _0x34a64e[_0x43bb1c(436)] && (await userInfoServices.updateUserDataNotify(_0x34a64e[_0x43bb1c(478)], _0x34a64e.frontendId, {
          unionInfo: _0x34a64e[_0x43bb1c(545)]
        }).catch(_0x1dde53 => {}));
        let _0x3b5970 = _0x34a64e[_0x43bb1c(545)][_0x43bb1c(445)](function (_0x1c4b93) {
          const _0x1b52bd = _0x43bb1c;
          return _0x1c4b93[_0x1b52bd(465)] === _0x5389a8;
        }.bind(this));
        _0x3b5970 = _0x3b5970 ? _0x3b5970 : {};
        _0x3b5970.todayDraw == 1 && (_0x576b5b += 1);
        if (_0x396a36 > 0) {
          let _0x476b58 = {
            uid: _0x34a64e[_0x43bb1c(478)],
            nickname: _0x34a64e.nickname,
            unionID: _0x5389a8,
            changeCount: -_0x396a36,
            leftCount: _0x3b5970[_0x43bb1c(549)],
            leftSafeBoxCount: _0x3b5970.safeScore,
            leftSaveBoxCount: _0x3b5970.saveScore,
            gameType: _0x55199a,
            changeType: enumeration[_0x43bb1c(556)][_0x43bb1c(510)],
            describe: _0x43bb1c(519) + _0x396a36,
            createTime: Date[_0x43bb1c(486)]()
          };
          await dao[_0x43bb1c(548)](_0x43bb1c(552), _0x476b58).catch(_0x5c4b66 => {
            const _0xc7ca8b = _0x43bb1c;
            logger[_0xc7ca8b(550)](_0x5c4b66[_0xc7ca8b(477)]);
          });
        }
        _0x57a542 > 0 && (await services[_0x43bb1c(500)](_0x57a542, _0x34a64e, _0x5389a8, _0x37ab60, _0x55199a), logger.info("[" + _0x5389a8 + "][" + _0x37ab60 + _0x43bb1c(492) + _0x57a542 + " uid = " + _0x545a50 + " "), _0x104c32[_0x43bb1c(456)]({
          uid: _0x34a64e[_0x43bb1c(478)],
          nickname: _0x34a64e[_0x43bb1c(541)],
          unionID: _0x5389a8,
          changeCount: -_0x57a542,
          leftCount: _0x3b5970[_0x43bb1c(549)] || 0,
          leftSafeBoxCount: _0x3b5970[_0x43bb1c(464)] || 0,
          leftSaveBoxCount: _0x3b5970.saveScore,
          gameType: _0x55199a,
          changeType: enumeration[_0x43bb1c(556)][_0x43bb1c(461)],
          describe: _0x43bb1c(460) + _0x57a542,
          createTime: moment()[_0x43bb1c(542)]("x")
        }));
        if (_0x25c7b0 + _0x17ebe0 > 0) {
          let _0x4a17df = _0x25c7b0;
          let _0x411e82 = Math[_0x43bb1c(441)](_0x25c7b0 / _0x61ff0 * 100) / 100;
          let _0x5bf0a3 = Math[_0x43bb1c(441)](_0x17ebe0 / _0x61ff0 * 100) / 100;
          let _0x4f5db6 = [];
          let _0x17d3d6 = [];
          let _0x49e1fe = _0x17ebe0;
          for (let _0x359b4c = 0; _0x359b4c < _0x61ff0; _0x359b4c++) {
            _0x359b4c == _0x61ff0 - 1 ? (_0x4f5db6[_0x359b4c] = _0x4a17df, _0x17d3d6[_0x359b4c] = _0x49e1fe) : (_0x4a17df > _0x411e82 ? (_0x4f5db6[_0x359b4c] = _0x411e82, _0x4a17df = parseFloat((_0x4a17df - _0x411e82)[_0x43bb1c(467)](2))) : (_0x4f5db6[_0x359b4c] = _0x4a17df, _0x4a17df = 0), _0x49e1fe > _0x5bf0a3 ? (_0x17d3d6[_0x359b4c] = _0x5bf0a3, _0x49e1fe = parseFloat((_0x49e1fe - _0x5bf0a3)[_0x43bb1c(467)](2))) : (_0x49e1fe[_0x359b4c] = _0x49e1fe, _0x49e1fe = 0));
          }
          logger.info("[" + _0x5389a8 + "][" + _0x37ab60 + _0x43bb1c(470) + _0x17ebe0 + " fixAvgScore = " + _0x5bf0a3 + _0x43bb1c(501) + JSON[_0x43bb1c(482)](_0x17d3d6) + _0x43bb1c(546) + _0x25c7b0 + _0x43bb1c(437) + _0x411e82 + _0x43bb1c(439) + _0x545a50 + "  totalSpreaderCount = " + _0x61ff0 + _0x43bb1c(507) + JSON.stringify(_0x4f5db6));
          for (let _0x31ed69 in _0x37ad2a) {
            if (_0x37ad2a[_0x43bb1c(532)](_0x31ed69)) {
              let _0x5bf986 = _0x37ad2a[_0x31ed69];
              if (_0x5bf986[_0x43bb1c(551)] && _0x5bf986[_0x43bb1c(551)][_0x43bb1c(534)] && _0x5bf986[_0x43bb1c(551)][_0x43bb1c(534)] != "") {
                let _0x3cd123 = _0x17d3d6[_0x43bb1c(517)]() || 0;
                _0x3cd123 > 0 && (_0x104c32[_0x43bb1c(456)]({
                  uid: _0x34a64e[_0x43bb1c(478)],
                  nickname: _0x34a64e.nickname,
                  unionID: _0x5389a8,
                  changeCount: -_0x3cd123,
                  leftCount: _0x3b5970[_0x43bb1c(549)] || 0,
                  leftSafeBoxCount: _0x3b5970[_0x43bb1c(464)] || 0,
                  leftSaveBoxCount: _0x3b5970.saveScore,
                  gameType: _0x55199a,
                  changeType: enumeration[_0x43bb1c(556)].FIX_SCORE,
                  describe: _0x43bb1c(489) + _0x3cd123,
                  createTime: moment()[_0x43bb1c(542)]("x")
                }), await services.execFixRebate(_0x5389a8, _0x37ab60, _0x55199a, _0x5bf986.userInfo, _0x3cd123));
                let _0x13fdb9 = _0x4f5db6[_0x43bb1c(517)]() || 0;
                _0x13fdb9 > 0 && (_0x104c32[_0x43bb1c(456)]({
                  uid: _0x34a64e[_0x43bb1c(478)],
                  nickname: _0x34a64e[_0x43bb1c(541)],
                  unionID: _0x5389a8,
                  changeCount: -_0x13fdb9,
                  leftCount: _0x3b5970[_0x43bb1c(549)] || 0,
                  leftSafeBoxCount: _0x3b5970[_0x43bb1c(464)] || 0,
                  leftSaveBoxCount: _0x3b5970[_0x43bb1c(438)],
                  gameType: _0x55199a,
                  changeType: enumeration[_0x43bb1c(556)][_0x43bb1c(510)],
                  describe: _0x43bb1c(476) + _0x13fdb9,
                  createTime: moment()[_0x43bb1c(542)]("x")
                }), await services[_0x43bb1c(553)](_0x5389a8, _0x37ab60, _0x55199a, _0x5bf986[_0x43bb1c(551)], null, null, _0x31ed69, _0x13fdb9, _0x253e06.indexOf(_0x31ed69) !== -1));
              }
            }
          }
        }
      } catch (_0x5475c9) {
        logger[_0x43bb1c(550)](_0x5475c9[_0x43bb1c(477)]);
      }
    }
  }
  _0x104c32[_0x43bb1c(447)] > 0 && (await dao[_0x43bb1c(515)](_0x43bb1c(493), _0x104c32)[_0x43bb1c(429)](_0x304496 => {
    const _0x527cbe = _0x43bb1c;
    logger[_0x527cbe(550)](_0x304496[_0x527cbe(477)]);
  }));
};
services[a0_0xc7957a(500)] = async function (_0x207e4d, _0x503b81, _0x731542, _0x61e57f, _0x1dec11) {
  const _0x47cb65 = a0_0xc7957a;
  let _0x587be7 = await pomelo.app[_0x47cb65(504)].getUnion(_0x731542);
  let _0x56f3a2 = _0x587be7.getOwnerUid();
  let _0x49fcf2 = {
    $inc: {
      "unionInfo.$.safeScore": _0x207e4d,
      "unionInfo.$.todayRebate": _0x207e4d,
      "unionInfo.$.totalRebate": _0x207e4d
    }
  };
  let _0x48d0e0 = await userDao[_0x47cb65(473)]({
    uid: _0x56f3a2,
    "unionInfo.unionID": _0x731542
  }, _0x49fcf2);
  _0x48d0e0[_0x47cb65(436)] && (await userInfoServices[_0x47cb65(521)](_0x48d0e0[_0x47cb65(478)], _0x48d0e0[_0x47cb65(436)], {
    unionInfo: _0x48d0e0[_0x47cb65(545)]
  }).catch(_0x425130 => {}));
  let _0x1afb71 = {
    uid: _0x56f3a2,
    roomID: _0x61e57f,
    gameType: _0x1dec11,
    unionID: _0x731542,
    playerUid: _0x503b81.uid,
    playerNickname: _0x503b81.nickname,
    playerAvatar: _0x503b81.avatar,
    totalCount: _0x207e4d,
    gainCount: _0x207e4d,
    start: true,
    type: enumeration[_0x47cb65(556)][_0x47cb65(461)],
    createTime: Date.now()
  };
  await dao[_0x47cb65(548)](_0x47cb65(487), _0x1afb71)[_0x47cb65(429)](_0x31decd => {
    const _0x49e7e1 = _0x47cb65;
    logger[_0x49e7e1(550)](_0x31decd[_0x49e7e1(477)]);
  });
};
services[a0_0xc7957a(502)] = async function (_0x1eb6e6, _0x4d5880, _0x49d67c, _0x62cb4, _0x1bd5c6) {
  const _0x13f348 = a0_0xc7957a;
  let _0x45772c = await pomelo.app[_0x13f348(504)].getUnion(_0x49d67c);
  let _0x4bd2da = _0x45772c.getOwnerUid();
  let _0x278297 = {
    $inc: {
      "unionInfo.$.safeScore": _0x1eb6e6,
      "unionInfo.$.todayRebate": _0x1eb6e6,
      "unionInfo.$.totalRebate": _0x1eb6e6
    }
  };
  let _0x5e3877 = await userDao[_0x13f348(473)]({
    uid: _0x4bd2da,
    "unionInfo.unionID": _0x49d67c
  }, _0x278297);
  _0x5e3877[_0x13f348(436)] && (await userInfoServices[_0x13f348(521)](_0x5e3877[_0x13f348(478)], _0x5e3877[_0x13f348(436)], {
    unionInfo: _0x5e3877[_0x13f348(545)]
  })[_0x13f348(429)](_0x24b28b => {}));
  let _0x582841 = {
    uid: _0x4bd2da,
    roomID: _0x62cb4,
    gameType: _0x1bd5c6,
    unionID: _0x49d67c,
    playerUid: _0x4d5880.uid,
    playerNickname: _0x4d5880[_0x13f348(541)],
    playerAvatar: _0x4d5880.avatar,
    totalCount: _0x1eb6e6,
    gainCount: _0x1eb6e6,
    start: true,
    type: enumeration[_0x13f348(556)][_0x13f348(539)],
    createTime: Date.now()
  };
  await dao[_0x13f348(548)](_0x13f348(487), _0x582841)[_0x13f348(429)](_0x422d91 => {
    const _0x55d086 = _0x13f348;
    logger[_0x55d086(550)](_0x422d91[_0x55d086(477)]);
  });
};
services.execFixRebate = async function (_0x35952f, _0x521aad, _0x32d076, _0x3aef28, _0x6fe5bf) {
  const _0x48675f = a0_0xc7957a;
  if (_0x6fe5bf <= 0) {
    return;
  }
  logger[_0x48675f(448)]("[" + _0x35952f + "][" + _0x521aad + _0x48675f(428) + _0x35952f + _0x48675f(459) + _0x521aad + _0x48675f(490) + _0x3aef28[_0x48675f(478)] + _0x48675f(466) + _0x6fe5bf + " ");
  let _0x4494dd = await userInfoServices[_0x48675f(526)](_0x3aef28[_0x48675f(478)], _0x35952f);
  _0x4494dd[_0x48675f(440)]((_0x509fc7, _0x4b01e4) => _0x4b01e4[_0x48675f(525)] - _0x509fc7.count);
  let _0x3e84d2 = [];
  logger[_0x48675f(448)]("[" + _0x35952f + "][" + _0x521aad + "] 获取保底会层级返利 ");
  let _0x4c4c5a = _0x6fe5bf;
  if (_0x4494dd[_0x48675f(447)] > 0) {
    for (let _0x276a26 = 0; _0x276a26 < _0x4494dd[_0x48675f(447)]; _0x276a26++) {
      let _0x8dce23 = _0x4494dd[_0x276a26];
      if (!_0x8dce23) {
        continue;
      }
      let _0x5eb2cd = _0x4494dd.find(_0x3d4ed8 => _0x3d4ed8[_0x48675f(534)] && _0x3d4ed8[_0x48675f(534)].toString() == _0x8dce23[_0x48675f(558)][_0x48675f(511)]());
      if (_0x5eb2cd) {
        let _0x2caed3 = _0x5eb2cd[_0x48675f(452)];
        if (_0x4c4c5a < 0.1 || _0x2caed3 <= 0) {
          let _0x2de5da = {
            uid: _0x8dce23[_0x48675f(558)],
            count: _0x4c4c5a,
            lowUid: _0x5eb2cd[_0x48675f(558)]
          };
          _0x3e84d2[_0x48675f(456)](_0x2de5da);
          break;
        } else {
          let _0x38b867 = Math[_0x48675f(441)](_0x4c4c5a * (100 - _0x2caed3)) / 100;
          let _0x4dd95e = {
            uid: _0x8dce23[_0x48675f(558)],
            count: _0x38b867,
            lowUid: _0x5eb2cd[_0x48675f(558)]
          };
          _0x3e84d2.push(_0x4dd95e);
          _0x4c4c5a = Math[_0x48675f(441)]((_0x4c4c5a - _0x38b867) * 100) / 100;
        }
      } else {
        let _0x26084a = {
          uid: _0x8dce23[_0x48675f(558)],
          count: _0x4c4c5a,
          lowUid: _0x8dce23[_0x48675f(558)]
        };
        _0x3e84d2[_0x48675f(456)](_0x26084a);
        break;
      }
    }
  } else {
    logger.error("[" + _0x35952f + "][" + _0x521aad + _0x48675f(433) + _0x35952f + _0x48675f(459) + _0x521aad + " userID = " + _0x3aef28[_0x48675f(478)] + _0x48675f(513) + JSON.stringify(_0x4494dd) + " ");
  }
  logger[_0x48675f(448)]("[" + _0x35952f + "][" + _0x521aad + _0x48675f(446) + JSON[_0x48675f(482)](_0x3e84d2) + " ");
  for (let _0x52c438 = 0; _0x52c438 < _0x3e84d2[_0x48675f(447)]; _0x52c438++) {
    let _0x386aa4 = _0x3e84d2[_0x52c438];
    let _0xfac640 = _0x386aa4[_0x48675f(525)] || 0;
    let _0x3dbfab = {
      $inc: {
        "unionInfo.$.safeScore": _0xfac640,
        "unionInfo.$.todayRebate": _0xfac640,
        "unionInfo.$.totalRebate": _0xfac640
      }
    };
    let _0x18588d = await userDao[_0x48675f(473)]({
      uid: _0x386aa4.uid,
      "unionInfo.unionID": _0x35952f
    }, _0x3dbfab);
    !!_0x18588d[_0x48675f(436)] && (await userInfoServices[_0x48675f(521)](_0x18588d[_0x48675f(478)], _0x18588d[_0x48675f(436)], {
      unionInfo: _0x18588d.unionInfo
    })[_0x48675f(429)](_0x341605 => {}));
    !!_0x386aa4.lowUid && (await userDao[_0x48675f(473)]({
      uid: _0x386aa4[_0x48675f(451)],
      "unionInfo.unionID": _0x35952f
    }, {
      $inc: {
        "unionInfo.$.todayProvideRebate": _0xfac640
      }
    }));
    let _0x3dde3a = {
      uid: _0x18588d[_0x48675f(478)],
      nickname: _0x18588d[_0x48675f(541)],
      avatar: _0x18588d[_0x48675f(455)],
      roomID: _0x521aad,
      gameType: _0x32d076,
      unionID: _0x35952f,
      playerUid: _0x3aef28[_0x48675f(478)],
      playerNickname: _0x3aef28[_0x48675f(541)],
      playerAvatar: _0x3aef28.avatar,
      totalCount: _0x6fe5bf,
      gainCount: _0xfac640,
      start: true,
      type: enumeration.scoreChangeType[_0x48675f(539)],
      createTime: Date.now()
    };
    await dao[_0x48675f(548)]("userRebateRecordModel", _0x3dde3a)[_0x48675f(429)](_0x2194b2 => {
      const _0x4baf94 = _0x48675f;
      logger[_0x4baf94(550)](_0x2194b2[_0x4baf94(477)]);
    });
  }
};
services[a0_0xc7957a(540)] = async function (_0x2a643c, _0x2b38e6, _0x4b9b88, _0x169cf0, _0x2fcfe1) {
  const _0x3ae19e = a0_0xc7957a;
  if (_0x2b38e6[_0x3ae19e(481)] === undefined || _0x2b38e6[_0x3ae19e(481)] === null || _0x2b38e6[_0x3ae19e(481)] <= 0) {
    return;
  }
  let _0x48a9ea = parseFloat(_0x2b38e6[_0x3ae19e(481)]);
  let _0x42350c = [];
  for (let _0x4e1b7d in _0x4b9b88) {
    let _0x2ff477 = _0x4b9b88[_0x4e1b7d];
    if (!_0x2ff477) {
      continue;
    }
    let _0x2aafdf = {
      $inc: {
        "unionInfo.$.score": -_0x48a9ea
      }
    };
    let _0xae8cfd = await userDao[_0x3ae19e(473)]({
      uid: _0x4e1b7d,
      "unionInfo.unionID": _0x2a643c
    }, _0x2aafdf);
    _0xae8cfd[_0x3ae19e(436)] && userInfoServices[_0x3ae19e(521)](_0xae8cfd[_0x3ae19e(478)], _0xae8cfd.frontendId, {
      unionInfo: _0xae8cfd[_0x3ae19e(545)]
    })[_0x3ae19e(429)](_0x153e59 => {});
    let _0x33b1c6 = _0xae8cfd[_0x3ae19e(545)][_0x3ae19e(445)](function (_0x4b5708) {
      const _0x88d0e = _0x3ae19e;
      return _0x4b5708[_0x88d0e(465)] === _0x2a643c;
    }[_0x3ae19e(536)](this));
    _0x42350c[_0x3ae19e(456)]({
      uid: _0xae8cfd.uid,
      nickname: _0xae8cfd[_0x3ae19e(541)],
      unionID: _0x2a643c,
      changeCount: -_0x48a9ea,
      leftCount: _0x33b1c6[_0x3ae19e(549)],
      leftSafeBoxCount: _0x33b1c6[_0x3ae19e(464)],
      leftSaveBoxCount: _0x33b1c6[_0x3ae19e(438)],
      gameType: _0x2fcfe1,
      changeType: enumeration[_0x3ae19e(556)][_0x3ae19e(431)],
      describe: _0x3ae19e(483) + _0x48a9ea,
      createTime: Date[_0x3ae19e(486)]()
    });
    await services[_0x3ae19e(425)](_0x2a643c, _0x169cf0, _0x2fcfe1, _0x2ff477[_0x3ae19e(551)], _0x48a9ea);
  }
  _0x42350c[_0x3ae19e(447)] > 0 && (await dao[_0x3ae19e(515)](_0x3ae19e(493), _0x42350c).catch(_0x6179c3 => {
    const _0xf49ee9 = _0x3ae19e;
    logger[_0xf49ee9(550)](_0x6179c3[_0xf49ee9(477)]);
  }), await dao[_0x3ae19e(515)]("userScoreDetailModel", _0x42350c)[_0x3ae19e(429)](_0x4331ff => {
    const _0x35626b = _0x3ae19e;
    logger[_0x35626b(550)](_0x4331ff.stack);
  }));
};
services[a0_0xc7957a(425)] = async function (_0x295838, _0x2df5eb, _0x33a8ba, _0x2cf6ec, _0x376387) {
  const _0x2a6eee = a0_0xc7957a;
  if (_0x376387 <= 0) {
    return;
  }
  logger[_0x2a6eee(448)]("[" + _0x295838 + "][" + _0x2df5eb + _0x2a6eee(496) + _0x295838 + _0x2a6eee(459) + _0x2df5eb + _0x2a6eee(490) + _0x2cf6ec[_0x2a6eee(478)] + _0x2a6eee(466) + _0x376387 + " ");
  let _0x1ffd4a = await userInfoServices[_0x2a6eee(526)](_0x2cf6ec[_0x2a6eee(478)], _0x295838);
  _0x1ffd4a[_0x2a6eee(440)]((_0x3f1591, _0x1876b1) => _0x1876b1[_0x2a6eee(525)] - _0x3f1591[_0x2a6eee(525)]);
  let _0x3d15ca = [];
  logger[_0x2a6eee(448)]("[" + _0x295838 + "][" + _0x2df5eb + _0x2a6eee(494));
  let _0x3cd3a0 = _0x1ffd4a[0];
  let _0x46181f = {
    uid: _0x3cd3a0[_0x2a6eee(558)],
    count: _0x376387,
    lowUid: _0x2cf6ec[_0x2a6eee(478)]
  };
  _0x3d15ca.push(_0x46181f);
  logger[_0x2a6eee(448)]("[" + _0x295838 + "][" + _0x2df5eb + _0x2a6eee(475) + JSON[_0x2a6eee(482)](_0x3d15ca) + " ");
  for (let _0x2c0ad3 = 0; _0x2c0ad3 < _0x3d15ca.length; _0x2c0ad3++) {
    let _0x5d5989 = _0x3d15ca[_0x2c0ad3];
    let _0x14de55 = _0x5d5989.count || 0;
    let _0x1eed72 = {
      $inc: {
        "unionInfo.$.safeScore": _0x14de55,
        "unionInfo.$.todayRebate": _0x14de55,
        "unionInfo.$.totalRebate": _0x14de55
      }
    };
    let _0x2ee60c = await userDao[_0x2a6eee(473)]({
      uid: _0x5d5989[_0x2a6eee(478)],
      "unionInfo.unionID": _0x295838
    }, _0x1eed72);
    !!_0x2ee60c[_0x2a6eee(436)] && (await userInfoServices[_0x2a6eee(521)](_0x2ee60c[_0x2a6eee(478)], _0x2ee60c[_0x2a6eee(436)], {
      unionInfo: _0x2ee60c[_0x2a6eee(545)]
    })[_0x2a6eee(429)](_0x2ca9bd => {}));
    !!_0x5d5989[_0x2a6eee(451)] && (await userDao[_0x2a6eee(473)]({
      uid: _0x5d5989[_0x2a6eee(451)],
      "unionInfo.unionID": _0x295838
    }, {
      $inc: {
        "unionInfo.$.todayProvideRebate": _0x14de55
      }
    }));
    let _0x45fc6f = {
      uid: _0x2ee60c[_0x2a6eee(478)],
      nickname: _0x2ee60c.nickname,
      avatar: _0x2ee60c[_0x2a6eee(455)],
      roomID: _0x2df5eb,
      gameType: _0x33a8ba,
      unionID: _0x295838,
      playerUid: _0x2cf6ec[_0x2a6eee(478)],
      playerNickname: _0x2cf6ec[_0x2a6eee(541)],
      playerAvatar: _0x2cf6ec.avatar,
      totalCount: _0x376387,
      gainCount: _0x14de55,
      start: true,
      type: enumeration[_0x2a6eee(556)][_0x2a6eee(431)],
      createTime: Date[_0x2a6eee(486)]()
    };
    await dao[_0x2a6eee(548)](_0x2a6eee(487), _0x45fc6f)[_0x2a6eee(429)](_0x99b19a => {
      const _0x1494c2 = _0x2a6eee;
      logger[_0x1494c2(550)](_0x99b19a[_0x1494c2(477)]);
    });
  }
};