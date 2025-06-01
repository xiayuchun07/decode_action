
const a0_0x40c009 = a0_0xe2bf;
function a0_0xe2bf(_0x1f09e6, _0xa01fe0) {
  const _0x3a0dc6 = a0_0x31bc();
  a0_0xe2bf = function (_0x42b371, _0x4fa4ea) {
    _0x42b371 = _0x42b371 - 131;
    let _0x2ffec0 = _0x3a0dc6[_0x42b371];
    return _0x2ffec0;
  };
  return a0_0xe2bf(_0x1f09e6, _0xa01fe0);
}
(function (_0x23f004, _0x39a198) {
  const _0x465726 = a0_0xe2bf;
  const _0x417990 = _0x23f004();
  while (true) {
    try {
      const _0x5a1baf = parseInt(_0x465726(177)) / 1 * (parseInt(_0x465726(199)) / 2) + parseInt(_0x465726(200)) / 3 * (parseInt(_0x465726(190)) / 4) + parseInt(_0x465726(151)) / 5 * (parseInt(_0x465726(140)) / 6) + -parseInt(_0x465726(164)) / 7 * (parseInt(_0x465726(202)) / 8) + parseInt(_0x465726(175)) / 9 * (-parseInt(_0x465726(181)) / 10) + -parseInt(_0x465726(198)) / 11 * (parseInt(_0x465726(220)) / 12) + -parseInt(_0x465726(157)) / 13 * (-parseInt(_0x465726(189)) / 14);
      if (_0x5a1baf === _0x39a198) {
        break;
      } else {
        _0x417990.push(_0x417990.shift());
      }
    } catch (_0xeca03e) {
      _0x417990.push(_0x417990.shift());
    }
  }
})(a0_0x31bc, 229189);
let scheduler = require("pomelo-scheduler");
let dao = require(a0_0x40c009(146));
let userDao = require("../../../dao/userDao");
let commonDao = require(a0_0x40c009(146));
let pomelo = require("pomelo");
let logger = require(a0_0x40c009(154))[a0_0x40c009(213)](a0_0x40c009(182));
let moment = require(a0_0x40c009(132));
let async = require(a0_0x40c009(187));
let userInfoServices = require(a0_0x40c009(206));
let exp = module.exports;
function a0_0x31bc() {
  const _0x2688bd = ["async", "reCountUserScore", "3962InCuUS", "8XsIZqK", "yesterdayRebate", "dailyTaskSchedulerClearData userScoreDetailModel err:", "dbClient", "close", "findData", "dailyTaskScheduler", "yesterdayProvideRebate", "55hZukSi", "658xbOMkb", "289257IlVxje", "userModel", "1112VTwUSi", "setValue", "YYYY-MM-DD", "weekTaskSchedulerID", "../../../services/userInfoServices", "unionModel", "userScoreScheduler", "dailyTaskSchedulerClearData userDelModel err:", "dailyTaskScheduler time:", "dailyTaskSchedulerClearData userGameRecordModel err:", "now", "getLogger", "uid", "todayDraw", "scheduleJob", "userScoreSchedulerID", "[userScore] count user score dayTime  = ", "todayRebate", "976344xgVRTR", "deleteData", "stack", "userScoreChangeRecordModel", "userRebateRecordModel", "info", "beforeShutdown", "dailyTaskSchedulerClearData userRebateRecordModel err:", "todayWin", "YYYYMMDD", "pause", "moment", "[userScore] delete history data beginDay = ", "catch", "------------ Get Union User Data Begin ------------", "add", "memberTodayDraw", "dailyTaskSchedulerClearData userPayModel err:", "teamDataModel", "64566oPhyzg", "length", "dailyTaskSchedulerID", "UNION_", "[userScore] unionID = ", "weekTaskSchedulerClearData", "../../../dao/commonDao", "todayBigWinDraw", "dailyTaskSchedulerClearData scoreModifyRecordModel err:", "error", "get", "100tCELsc", "dailyTaskSchedulerClearData userScoreChangeRecordModel err:", "format", "pomelo-logger", "userDelModel", "unionInfo", "31135kJmFTI", "cancelJob", "dailyTaskSchedulerClearData", "dailyTaskScheduler end, updateTotalCount:", "unionUserTaskSchedulerID", "scoreModifyRecordModel", "userScoreDetailModel", "16793cLwpWE", "stream", "dailyTaskSchedulerClearData userScoreModel err:", "findOneAndUpdateEx", "updateUserDataByUid", "push", "memberYesterdayDraw", "0 0 0 * * *", " begin count score totoalUser = ", "todayProvideRebate", "resume", "853506WBqoVe", "data", "511sfBPtB", "dailyTaskSchedulerClearData userPayDetailModel err:", "find", "userGameRecordModel", "30XxKBFe", "logic", "userPayDetailModel", "weekTaskScheduler", "updateAllData", "mapSeries"];
  a0_0x31bc = function () {
    return _0x2688bd;
  };
  return a0_0x31bc();
}
exp.init = function () {
  const _0x2214b1 = a0_0x40c009;
  this[_0x2214b1(142)] = scheduler[_0x2214b1(216)](_0x2214b1(171), exp[_0x2214b1(196)]);
  this[_0x2214b1(205)] = scheduler[_0x2214b1(216)]("0 0 17 * * 0", exp[_0x2214b1(184)]);
  this[_0x2214b1(217)] = scheduler[_0x2214b1(216)](_0x2214b1(171), exp[_0x2214b1(208)]);
};
exp.unionUserTaskScheduler = async () => {
  const _0x5987ec = a0_0x40c009;
  logger[_0x5987ec(225)](_0x5987ec(135));
  let _0x14cd8f = await dao.findData("unionModel", {
    isDel: false,
    opening: true
  });
  for (let _0x5e28d2 = 0; _0x5e28d2 < _0x14cd8f[_0x5987ec(141)]; _0x5e28d2++) {
    let {
      unionID: _0x468b2a,
      ownerUid: _0x23dd5a,
      ownerNickname: _0x341efa,
      ownerAvatar: _0x1ad4e0,
      unionName: _0x28cac4,
      serverScore: _0x29a843
    } = _0x14cd8f[_0x5e28d2];
    let _0x58f4ee = {
      unionID: _0x468b2a,
      ownerUid: _0x23dd5a,
      ownerNickname: _0x341efa,
      ownerAvatar: _0x1ad4e0,
      unionName: _0x28cac4,
      serverScore: _0x29a843
    };
    let _0x42aea9 = await dao[_0x5987ec(195)](_0x5987ec(201), {
      unionInfo: {
        $elemMatch: {
          unionID: _0x468b2a
        }
      }
    });
    let _0x2d7cc3 = [];
    for (let _0x16eb63 = 0; _0x16eb63 < _0x42aea9[_0x5987ec(141)]; _0x16eb63++) {
      let _0x138df6 = _0x42aea9[_0x16eb63];
      let _0x5570c9 = _0x138df6[_0x5987ec(156)][_0x5987ec(179)](function (_0x293aea) {
        return _0x293aea.unionID === _0x468b2a;
      });
      let {
        uid: _0x25070b,
        nickname: _0x3e5215,
        avatar: _0x4e6cf0,
        isAgent: _0x2a4bee,
        userType: _0x20b805,
        isTest: _0x4718fb
      } = _0x138df6;
      let {
        spreaderID: _0x4efb84,
        score: _0x319531,
        saveScore: _0x3d51f6,
        showFixScore: _0x2ccb0f,
        partner: _0x1ebf79,
        rebateRate: _0x175adb,
        manager: _0x3af0c0,
        limitScore: _0x23ab20,
        targetScore: _0x12de41,
        floatScore: _0x12a4d0
      } = _0x5570c9;
      let _0x3eebdd = {
        uid: _0x25070b,
        score: _0x319531,
        saveScore: _0x3d51f6,
        nickname: _0x3e5215,
        avatar: _0x4e6cf0,
        isAgent: _0x2a4bee,
        userType: _0x20b805,
        isTest: _0x4718fb,
        spreaderID: _0x4efb84,
        showFixScore: _0x2ccb0f,
        partner: _0x1ebf79,
        rebateRate: _0x175adb,
        manager: _0x3af0c0,
        limitScore: _0x23ab20,
        targetScore: _0x12de41,
        floatScore: _0x12a4d0
      };
      _0x2d7cc3[_0x5987ec(169)](_0x3eebdd);
    }
    await redis[_0x5987ec(203)](_0x5987ec(143) + _0x468b2a, JSON.stringify(_0x2d7cc3), 120);
  }
  logger[_0x5987ec(225)]("------------ Get Union User Data End   ------------");
};
exp.userScoreScheduler = async function () {
  const _0x16bcc6 = a0_0x40c009;
  let _0x29984f = require(_0x16bcc6(154))[_0x16bcc6(213)]("userScore");
  _0x29984f[_0x16bcc6(225)]("[userScore] -------------------- user score count begin -------------------- ");
  {
    let _0x11edd1 = moment()[_0x16bcc6(136)](-7, "d")[_0x16bcc6(153)]("YYYYMMDD");
    let _0x364ed8 = {
      dayTime: {
        $lte: _0x11edd1
      }
    };
    dao[_0x16bcc6(221)]("userScoreModel", _0x364ed8)[_0x16bcc6(134)](function (_0x249f13) {
      const _0x4dfd7b = _0x16bcc6;
      _0x29984f[_0x4dfd7b(149)](_0x4dfd7b(166) + _0x249f13);
    });
    _0x29984f.info(_0x16bcc6(133) + _0x11edd1);
  }
  let _0x4f79c9 = moment().add(-1, "d")[_0x16bcc6(153)](_0x16bcc6(229));
  _0x29984f.info(_0x16bcc6(218) + _0x4f79c9);
  let _0x33658e = await commonDao[_0x16bcc6(195)](_0x16bcc6(207), {
    isDel: false
  });
  async[_0x16bcc6(186)](_0x33658e, async (_0x5d42d5, _0x3731ae) => {
    const _0x4b4d93 = _0x16bcc6;
    let _0x4718db = _0x5d42d5.unionID;
    let _0x840d05 = await userInfoServices[_0x4b4d93(188)](_0x4718db, _0x4f79c9);
    _0x29984f.info(_0x4b4d93(144) + _0x4718db + _0x4b4d93(172) + _0x840d05 + " ");
    let _0x14eb0d = moment()[_0x4b4d93(153)](_0x4b4d93(204));
    let _0x3080bc = moment().format("x");
    await commonDao[_0x4b4d93(167)](_0x4b4d93(139), {
      unionID: _0x4718db,
      dateTime: _0x14eb0d
    }, {
      unionID: _0x4718db,
      dateTime: _0x14eb0d,
      createTime: _0x3080bc,
      userCount: 0,
      drawCount: 0,
      drawTotalCount: 0,
      diamondCount: 0
    }, {
      new: true,
      upsert: true
    });
    _0x3731ae(null);
  }, function (_0x25f8dd, _0x24b22e) {
    const _0x21a558 = _0x16bcc6;
    _0x29984f[_0x21a558(225)]("[userScore] -------------------- user score count end --------------------");
  });
};
exp[a0_0x40c009(226)] = async function (_0x1390d7) {
  const _0x1a3abb = a0_0x40c009;
  scheduler[_0x1a3abb(158)](this[_0x1a3abb(142)]);
  scheduler.cancelJob(this[_0x1a3abb(205)]);
  scheduler.cancelJob(this[_0x1a3abb(217)]);
  scheduler[_0x1a3abb(158)](this[_0x1a3abb(161)]);
  await dao[_0x1a3abb(185)](_0x1a3abb(201), {
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
  _0x1390d7();
};
exp[a0_0x40c009(196)] = function () {
  const _0x14add4 = a0_0x40c009;
  logger[_0x14add4(225)](_0x14add4(159));
  {
    let _0x3ef859 = {
      createTime: {
        $lte: Date.now() - 259200000
      }
    };
    dao[_0x14add4(221)]("userPayModel", _0x3ef859)[_0x14add4(134)](function (_0x2eb5ba) {
      const _0x2657d3 = _0x14add4;
      logger.error(_0x2657d3(138) + _0x2eb5ba);
    });
  }
  {
    let _0x22ba0d = {
      createTime: {
        $lte: Date.now() - 259200000
      }
    };
    dao[_0x14add4(221)](_0x14add4(183), _0x22ba0d)[_0x14add4(134)](function (_0x2f0a08) {
      const _0x41e8a6 = _0x14add4;
      logger.error(_0x41e8a6(178) + _0x2f0a08);
    });
  }
  {
    let _0x4175e1 = {
      createTime: {
        $lte: Date[_0x14add4(212)]() - 259200000
      }
    };
    dao[_0x14add4(221)](_0x14add4(180), _0x4175e1).catch(function (_0x5152fa) {
      const _0x94a10 = _0x14add4;
      logger[_0x94a10(149)](_0x94a10(211) + _0x5152fa);
    });
  }
  {
    let _0x66510a = {
      createTime: {
        $lte: Date[_0x14add4(212)]() - 259200000
      }
    };
    dao[_0x14add4(221)](_0x14add4(155), _0x66510a)[_0x14add4(134)](function (_0x44b1f5) {
      const _0x482742 = _0x14add4;
      logger.error(_0x482742(209) + _0x44b1f5);
    });
  }
  {
    let _0x147efd = {
      createTime: {
        $lte: Date[_0x14add4(212)]() - 259200000
      }
    };
    dao[_0x14add4(221)](_0x14add4(224), _0x147efd)[_0x14add4(134)](function (_0x38b12a) {
      const _0x3c5866 = _0x14add4;
      logger.error(_0x3c5866(227) + _0x38b12a);
    });
  }
  {
    let _0x308cde = {
      createTime: {
        $lte: Date[_0x14add4(212)]() - 259200000
      }
    };
    dao[_0x14add4(221)](_0x14add4(162), _0x308cde)[_0x14add4(134)](function (_0x2c21eb) {
      const _0x318f60 = _0x14add4;
      logger[_0x318f60(149)](_0x318f60(148) + _0x2c21eb);
    });
    dao[_0x14add4(221)](_0x14add4(163), _0x308cde).catch(function (_0x4ee0a3) {
      const _0x19aae8 = _0x14add4;
      logger[_0x19aae8(149)](_0x19aae8(192) + _0x4ee0a3);
    });
    dao[_0x14add4(221)](_0x14add4(223), _0x308cde)[_0x14add4(134)](function (_0x3fd528) {
      const _0x11ca7a = _0x14add4;
      logger[_0x11ca7a(149)](_0x11ca7a(152) + _0x3fd528);
    });
  }
  let _0x557521 = Date[_0x14add4(212)]();
  let _0x37bb44 = 0;
  function _0x5e5ab0(_0x534960) {
    const _0x5ae706 = _0x14add4;
    _0x37bb44++;
    for (let _0x13a3e6 = 0; _0x13a3e6 < _0x534960.length; ++_0x13a3e6) {
      let _0x3a0602 = _0x534960[_0x13a3e6];
      if (_0x3a0602.unionInfo[_0x5ae706(141)] === 0) {
        continue;
      }
      for (let _0x3f4cd8 = 0; _0x3f4cd8 < _0x3a0602.unionInfo[_0x5ae706(141)]; ++_0x3f4cd8) {
        let _0x5cf23e = _0x3a0602[_0x5ae706(156)][_0x3f4cd8];
        _0x5cf23e.yesterdayDraw = _0x5cf23e.todayDraw;
        _0x5cf23e[_0x5ae706(215)] = 0;
        _0x5cf23e[_0x5ae706(170)] = _0x5cf23e[_0x5ae706(137)];
        _0x5cf23e[_0x5ae706(137)] = 0;
        _0x5cf23e.yesterdayBigWinDraw = _0x5cf23e[_0x5ae706(147)];
        _0x5cf23e.todayBigWinDraw = 0;
        _0x5cf23e.memberYesterdayBigWinDraw = _0x5cf23e.memberTodayBigWinDraw;
        _0x5cf23e.memberTodayBigWinDraw = 0;
        _0x5cf23e[_0x5ae706(197)] = _0x5cf23e[_0x5ae706(173)];
        _0x5cf23e[_0x5ae706(173)] = 0;
        _0x5cf23e[_0x5ae706(191)] = _0x5cf23e.todayRebate;
        _0x5cf23e[_0x5ae706(219)] = 0;
        _0x5cf23e.yesterdayWin = _0x5cf23e[_0x5ae706(228)];
        _0x5cf23e[_0x5ae706(228)] = 0;
      }
      userDao[_0x5ae706(168)](_0x3a0602[_0x5ae706(214)], {
        unionInfo: _0x3a0602.unionInfo
      })[_0x5ae706(134)](_0x550114 => {
        const _0x21c42b = _0x5ae706;
        logger[_0x21c42b(149)](_0x550114.stack);
      });
    }
  }
  let _0x490d62 = pomelo.app[_0x14add4(150)](_0x14add4(193)).userModel;
  let _0x4f027a = _0x490d62[_0x14add4(179)]({})[_0x14add4(165)]();
  let _0x41f814 = [];
  _0x4f027a.on(_0x14add4(176), function (_0xb34d73) {
    const _0x113299 = _0x14add4;
    _0x41f814[_0x113299(169)](_0xb34d73);
    _0x41f814[_0x113299(141)] === 10 && (_0x4f027a[_0x113299(131)](), _0x5e5ab0(_0x41f814), _0x41f814 = [], _0x4f027a[_0x113299(174)]());
  });
  _0x4f027a.on("end", function () {
    const _0x301fe7 = _0x14add4;
    _0x41f814[_0x301fe7(141)] !== 0 && (_0x5e5ab0(_0x41f814), _0x41f814 = []);
    logger[_0x301fe7(225)](_0x301fe7(210) + (Date[_0x301fe7(212)]() - _0x557521) + "ms");
    logger.info(_0x301fe7(160) + _0x37bb44);
  });
  _0x4f027a.on(_0x14add4(194), function () {
    const _0xa7df6f = _0x14add4;
    logger[_0xa7df6f(225)]("dailyTaskScheduler close");
  });
};
exp[a0_0x40c009(184)] = function () {
  const _0x241b72 = a0_0x40c009;
  logger[_0x241b72(225)](_0x241b72(145));
  dao[_0x241b72(185)](_0x241b72(201), {
    "unionInfo.weekDraw": {
      $exists: true
    }
  }, {
    "unionInfo.$.weekDraw": 0
  })[_0x241b72(134)](_0x19d70b => {
    const _0x156818 = _0x241b72;
    logger[_0x156818(149)](_0x19d70b[_0x156818(222)]);
  });
  logger[_0x241b72(225)]("weekTaskScheduler close");
};