
function a0_0x1b4b() {
  const _0x52ce0d = ["] union create room begin isLocked = ", "unionType", "2405IXSvAw", "PERMISSION_NOT_ENOUGH", "stack", "hongBaoUidList", "unionInfo", "userArr", "updateUnionServerScore", "init", "unionID", "updatePartnerNoticeSwitch", "../../../constant/code", "getUserDataByUid", "indexOf", "USER_CREATE", "joinRoom", "nickname", "tableSort", "shift", "52243pbbGtD", "16636BJHdhT", "USER_DATA_LOCKED", "serverScore", "tableStyle", "moment", "safeScore", "info", "userEntryRoom", " resCode = ", "toString", "HUNDRED", "opening", "unLock", "length", "21SLzPQA", "onDestroy", "updateUnionName", "notice", "showRank", "11OBrXno", "hongBaoInfo", "领取红包:", "findOneAndUpdate", "canEnter", "updateData", "roomRuleList", "scoreChangeType", "] create room end and join room = [", "updateHongBaoSetting", "isRobot", "_doc", "getLastActiveTime", "clone", "isGameEnd", "destroyRoom", "UNION_CREATE", "dailyClear", "tableColor", "17574wSXyjA", "../../../services/logServices", "14137680tEeiiP", "isShouldDelete", "getLength", "3325360lovcUD", "hasStartedOneBureau", "roomType", "unionModel", "dismissRoom", "39EpMpTG", "roomDismissed", "userLeaveRoom", "getLotteryStatus", "roomID", "../../../util/utils", "../../../baiRenGame/", "removeRoomRuleList", "pomelo-scheduler", "creatRoom", "userScoreChangeRecordModel", "getLogByType", "emptyTable", "robotReady", "endTime", "uid", "pomelo-logger", "createRoomBR", "UNION_OWNER_DISMISS", "hasOwnProperty", "createNewRoomID", "chairCount", "getUnionInfo", "_id", "hongBaoScoreList", "status", "startTime", "ROOM_JOIN_BUSY_LIMIT", "curBureau", "getHongBao", "userModel", "  ruleKeyLocked = ", "chairID", "count", "pendingRoom", "bind", "showUnionActive", "./unionManager", "23865288jEgfTr", "unionName", "getRoomInfo", "isManager", "forbidInvite", "gameFrameSinkPath", "roomCreatorType", "gameType", "userReady", "NOT_ENOUGH_GOLD", "updateUnionInfo", "gameRoomDismissReason", "updateUnionTableSort", "stringify", "catch", "now", "exports", "INVALID_UERS", "addRoomRuleList", "error", "unionData", "getOwnerUid", "totalScore", "userChangeSeat", "randomRedPacket", "isLocked", "forbidGive", "updateUserData", "getGameFrameByType", "getHours", "gold", "roomList", "WOZHIFU", "userJoinWatch", "pumpWaterPattern", "oneUserDiamondCount", "transferUnion", "createAndWatch", "NONE", "joinWatch", "payType", "parse", "../../../services/userInfoServices", "format", "unionBg", "findOneData", "../../../dao/userDao", "activeTime", "score", "12446406LMPHgH", "54zZqgrR", "noticeSwitch", "gameRule", "updateLotteryInfo", "ROOM_ALREAY_LIMIT", "../../../dao/commonDao", "NOT_IN_UNION", "createData", "updateUnionTableColor", "] createAndWatch = ", "isOpening", "deleteUnion", "resultLotteryInfo", "isDel", "../../../services/gameDataServices", "ruleName", "roomPayType", "ownerUid", "bureau", "getLogger", "push", "find", "FAIL", "buildGameRoomUserInfo", "-create-join-room", "filter", "ROOM_NOT_EXIST"];
  a0_0x1b4b = function () {
    return _0x52ce0d;
  };
  return a0_0x1b4b();
}
function a0_0x3068(_0x57a7e4, _0x12aa55) {
  const _0x4a0a91 = a0_0x1b4b();
  a0_0x3068 = function (_0x1c3cc3, _0x3b7adb) {
    _0x1c3cc3 = _0x1c3cc3 - 244;
    let _0x7fc6f5 = _0x4a0a91[_0x1c3cc3];
    return _0x7fc6f5;
  };
  return a0_0x3068(_0x57a7e4, _0x12aa55);
}
const a0_0x146753 = a0_0x3068;
(function (_0x5b568b, _0x1b7acd) {
  const _0x4c5d61 = a0_0x3068;
  const _0x45b32b = _0x5b568b();
  while (true) {
    try {
      const _0x49e7f5 = parseInt(_0x4c5d61(334)) / 1 * (-parseInt(_0x4c5d61(287)) / 2) + -parseInt(_0x4c5d61(383)) / 3 * (-parseInt(_0x4c5d61(335)) / 4) + -parseInt(_0x4c5d61(316)) / 5 * (-parseInt(_0x4c5d61(373)) / 6) + parseInt(_0x4c5d61(349)) / 7 * (-parseInt(_0x4c5d61(378)) / 8) + parseInt(_0x4c5d61(286)) / 9 + -parseInt(_0x4c5d61(375)) / 10 + -parseInt(_0x4c5d61(354)) / 11 * (-parseInt(_0x4c5d61(421)) / 12);
      if (_0x49e7f5 === _0x1b7acd) {
        break;
      } else {
        _0x45b32b.push(_0x45b32b.shift());
      }
    } catch (_0x2f0f1a) {
      _0x45b32b.push(_0x45b32b.shift());
    }
  }
})(a0_0x1b4b, 763285);
let code = require(a0_0x146753(326));
let scheduler = require(a0_0x146753(391));
let RoomFrame = require("../../../gameComponent/roomFrame");
let utils = require(a0_0x146753(388));
let enumeration = require("../../../constant/enumeration");
let commonDao = require(a0_0x146753(292));
let userDao = require(a0_0x146753(283));
let unionManager = require(a0_0x146753(420));
let logger = require(a0_0x146753(399))[a0_0x146753(306)]("logic");
let gameConfig = require("../../../gameComponent/gameConfig");
let moment = require(a0_0x146753(339));
let redisService = require("../../../services/redisService");
let logerService = require(a0_0x146753(374));
let gameDataServices = require(a0_0x146753(301));
let userInfoServices = require(a0_0x146753(279));
class union {
  constructor(_0x30c691) {
    const _0x3334f2 = a0_0x146753;
    this[_0x3334f2(324)] = _0x30c691;
    this[_0x3334f2(268)] = {};
    this[_0x3334f2(284)] = Date.now();
    this[_0x3334f2(257)] = null;
    this[_0x3334f2(417)] = {};
  }
  async [a0_0x146753(323)]() {
    const _0x2f0240 = a0_0x146753;
    if (this.unionID !== 1) {
      this[_0x2f0240(257)] = await commonDao[_0x2f0240(282)](_0x2f0240(381), {
        unionID: this[_0x2f0240(324)]
      });
      if (this[_0x2f0240(257)]) {
        let _0x403019 = this[_0x2f0240(257)][_0x2f0240(360)][_0x2f0240(312)](_0x2a75b8 => _0x2a75b8[_0x2f0240(244)] >= 200);
        let _0x3473fd = await userDao.getUserDataByUid(this.unionData[_0x2f0240(304)]);
        let _0xb0bbfb = userInfoServices[_0x2f0240(310)](_0x3473fd);
        for (let _0x1ebf97 = 0; _0x1ebf97 < _0x403019.length; _0x1ebf97++) {
          let _0x23cf30 = _0x403019[_0x1ebf97].id;
          let _0x32f95e = JSON[_0x2f0240(278)](_0x403019[_0x1ebf97][_0x2f0240(289)]);
          await this[_0x2f0240(400)](_0x23cf30, _0x32f95e, _0xb0bbfb);
        }
      }
    }
  }
  async [a0_0x146753(350)]() {
    const _0x26d193 = a0_0x146753;
    for (let _0x472cac in this.roomList) {
      let _0x17dcc0 = this.roomList[_0x472cac];
      if (!_0x17dcc0) {
        return;
      }
      await _0x17dcc0[_0x26d193(382)](enumeration[_0x26d193(248)].UNION_OWNER_DISMISS).catch(_0x5a034e => {
        const _0x373224 = _0x26d193;
        logger[_0x373224(256)](_0x5a034e[_0x373224(318)]);
      });
    }
  }
  [a0_0x146753(405)](_0x2520b3) {
    const _0x31c33d = a0_0x146753;
    this[_0x31c33d(284)] = Date.now();
    if (this.unionData) {
      let _0x105f57 = utils[_0x31c33d(367)](this.unionData);
      return _0x105f57;
    } else {
      return null;
    }
  }
  getUnionRoomList() {
    const _0x4ccf10 = a0_0x146753;
    this[_0x4ccf10(284)] = Date[_0x4ccf10(252)]();
    let _0x513a86 = [];
    for (let _0x1ea87c in this[_0x4ccf10(268)]) {
      if (this[_0x4ccf10(268)][_0x4ccf10(402)](_0x1ea87c)) {
        let _0x59ca30 = this[_0x4ccf10(268)][_0x1ea87c][_0x4ccf10(423)]();
        !!_0x59ca30 && !_0x59ca30[_0x4ccf10(368)] && _0x513a86[_0x4ccf10(307)](this[_0x4ccf10(268)][_0x1ea87c][_0x4ccf10(423)]());
      }
    }
    return _0x513a86;
  }
  [a0_0x146753(258)]() {
    const _0xb353a3 = a0_0x146753;
    if (!this[_0xb353a3(257)]) {
      return 0;
    } else {
      return this[_0xb353a3(257)][_0xb353a3(304)];
    }
  }
  async [a0_0x146753(247)](_0xca5333) {
    const _0x38bc40 = a0_0x146753;
    if (!this[_0x38bc40(257)]) {
      throw new Error(code[_0x38bc40(309)]);
    }
    await commonDao.updateData(_0x38bc40(381), {
      unionID: this[_0x38bc40(324)]
    }, _0xca5333);
    this[_0x38bc40(257)] = await commonDao.findOneData(_0x38bc40(381), {
      unionID: this.unionID
    });
    return code.OK;
  }
  async updateUnionNotice(_0x28274f) {
    const _0x1300c1 = a0_0x146753;
    if (!this.unionData) {
      throw new Error(code[_0x1300c1(309)]);
    }
    if (this[_0x1300c1(257)][_0x1300c1(352)] === _0x28274f) {
      return;
    }
    await commonDao[_0x1300c1(359)](_0x1300c1(381), {
      unionID: this[_0x1300c1(324)]
    }, {
      notice: _0x28274f
    });
    this[_0x1300c1(257)][_0x1300c1(352)] = _0x28274f;
  }
  async [a0_0x146753(273)](_0x43d190) {
    const _0x20f997 = a0_0x146753;
    if (!this[_0x20f997(257)]) {
      throw new Error(code.FAIL);
    }
    let _0x2f9ae8 = await commonDao.findOneData(_0x20f997(413), {
      uid: _0x43d190
    });
    await commonDao.updateData(_0x20f997(381), {
      unionID: this.unionID
    }, {
      ownerUid: _0x43d190,
      ownerNickname: _0x2f9ae8[_0x20f997(331)],
      ownerAvatar: _0x2f9ae8.avatar
    });
    this.unionData.ownerUid = _0x43d190;
  }
  async [a0_0x146753(351)](_0x488b75) {
    const _0x5b0361 = a0_0x146753;
    if (!this[_0x5b0361(257)]) {
      throw new Error(code[_0x5b0361(309)]);
    }
    if (this[_0x5b0361(257)][_0x5b0361(422)] === _0x488b75) {
      return;
    }
    await commonDao[_0x5b0361(359)](_0x5b0361(381), {
      unionID: this.unionID
    }, {
      unionName: _0x488b75
    });
    this.unionData[_0x5b0361(422)] = _0x488b75;
  }
  async UpdatePumpWaterPattern(_0x380146) {
    const _0x59e2d1 = a0_0x146753;
    if (!this.unionData) {
      throw new Error(code[_0x59e2d1(309)]);
    }
    if (this[_0x59e2d1(257)].pumpWaterPattern === _0x380146) {
      return;
    }
    await commonDao.updateData("unionModel", {
      unionID: this[_0x59e2d1(324)]
    }, {
      pumpWaterPattern: _0x380146
    });
    this[_0x59e2d1(257)][_0x59e2d1(271)] = _0x380146;
  }
  async [a0_0x146753(322)](_0x355c14) {
    const _0x5646e3 = a0_0x146753;
    if (!this[_0x5646e3(257)]) {
      throw new Error(code[_0x5646e3(309)]);
    }
    if (this.unionData[_0x5646e3(337)] === _0x355c14) {
      return;
    }
    if (_0x355c14 <= 0) {
      return;
    }
    await commonDao[_0x5646e3(359)](_0x5646e3(381), {
      unionID: this.unionID
    }, {
      serverScore: _0x355c14
    });
    this.unionData[_0x5646e3(337)] = _0x355c14;
  }
  async [a0_0x146753(249)](_0x50985d, _0x1bcfc1) {
    const _0x431fa5 = a0_0x146753;
    if (!this.unionData) {
      throw new Error(code[_0x431fa5(309)]);
    }
    await commonDao[_0x431fa5(359)](_0x431fa5(381), {
      unionID: _0x50985d
    }, {
      tableSort: _0x1bcfc1
    });
    this[_0x431fa5(257)][_0x431fa5(332)] = _0x1bcfc1;
  }
  async [a0_0x146753(295)](_0x5144b0, _0x2d73c0, _0x56b8ff, _0x392f88) {
    const _0x5ceb53 = a0_0x146753;
    if (!this[_0x5ceb53(257)]) {
      throw new Error(code.FAIL);
    }
    await commonDao[_0x5ceb53(359)]("unionModel", {
      unionID: _0x5144b0
    }, {
      tableColor: _0x2d73c0,
      unionBg: _0x56b8ff,
      tableStyle: _0x392f88
    });
    this[_0x5ceb53(257)][_0x5ceb53(372)] = _0x2d73c0;
    this[_0x5ceb53(257)][_0x5ceb53(281)] = _0x56b8ff;
    this[_0x5ceb53(257)][_0x5ceb53(338)] = _0x392f88;
  }
  async [a0_0x146753(298)]() {
    const _0x190d02 = a0_0x146753;
    if (!this[_0x190d02(257)]) {
      throw new Error(code.FAIL);
    }
    await commonDao.updateData(_0x190d02(381), {
      unionID: this[_0x190d02(324)]
    }, {
      isDel: true
    });
    await commonDao.updateAllData(_0x190d02(413), {
      "unionInfo.unionID": this[_0x190d02(324)]
    }, {
      $pull: {
        unionInfo: {
          unionID: this[_0x190d02(324)]
        }
      }
    });
    this.unionData[_0x190d02(300)] = true;
  }
  async [a0_0x146753(325)](_0x4fdce4) {
    const _0x45e556 = a0_0x146753;
    if (!this.unionData) {
      throw new Error(code[_0x45e556(309)]);
    }
    if (this[_0x45e556(257)][_0x45e556(288)] === _0x4fdce4) {
      return;
    }
    await commonDao[_0x45e556(359)]("unionModel", {
      unionID: this[_0x45e556(324)]
    }, {
      noticeSwitch: _0x4fdce4
    });
    this[_0x45e556(257)][_0x45e556(422)] = unionName;
  }
  async [a0_0x146753(363)](_0x43d386, _0x337c31, _0x331649, _0x48fdfe, _0x29aefe) {
    const _0x4d6ec0 = a0_0x146753;
    if (!this[_0x4d6ec0(257)]) {
      return code[_0x4d6ec0(309)];
    }
    let _0x37653b = {
      status: _0x43d386,
      startTime: _0x337c31,
      endTime: _0x331649,
      count: _0x48fdfe,
      totalScore: _0x29aefe
    };
    let _0x44a316 = {
      hongBaoInfo: _0x37653b
    };
    if (!_0x43d386) {
      this[_0x4d6ec0(257)][_0x4d6ec0(407)] = [];
      this.unionData.hongBaoUidList = [];
      _0x44a316[_0x4d6ec0(407)] = [];
      _0x44a316[_0x4d6ec0(319)] = [];
    } else {
      if (this.unionData[_0x4d6ec0(407)][_0x4d6ec0(348)] === 0) {
        this.unionData[_0x4d6ec0(407)] = utils[_0x4d6ec0(261)](_0x37653b[_0x4d6ec0(259)], _0x37653b[_0x4d6ec0(416)]);
        this[_0x4d6ec0(257)].hongBaoUidList = [];
        _0x44a316[_0x4d6ec0(319)] = this[_0x4d6ec0(257)][_0x4d6ec0(407)];
        _0x44a316[_0x4d6ec0(319)] = [];
      } else {
        return code.CAN_NOT_CREATE_NEW_HONG_BAO;
      }
    }
    await commonDao[_0x4d6ec0(359)](_0x4d6ec0(381), {
      unionID: this[_0x4d6ec0(324)]
    }, _0x44a316);
    this.unionData[_0x4d6ec0(355)] = _0x37653b;
    return code.OK;
  }
  async [a0_0x146753(412)](_0x264f27) {
    const _0x2cb640 = a0_0x146753;
    if (!this.unionData) {
      logger[_0x2cb640(256)](_0x2cb640(412), "unionData not exist");
      return -1;
    }
    let _0x14027a = this[_0x2cb640(257)][_0x2cb640(355)];
    if (!_0x14027a || !_0x14027a.status) {
      return -1;
    }
    let _0x420cb3 = new Date();
    let _0x1bb91f = _0x420cb3[_0x2cb640(266)]();
    if (_0x1bb91f < _0x14027a[_0x2cb640(409)] || _0x1bb91f >= _0x14027a[_0x2cb640(397)]) {
      return -1;
    }
    if (_0x14027a[_0x2cb640(259)] <= 0 || _0x14027a[_0x2cb640(416)] <= 0) {
      return -1;
    }
    if (this.unionData[_0x2cb640(407)].length === 0) {
      return 0;
    }
    if (this[_0x2cb640(257)][_0x2cb640(319)][_0x2cb640(328)](_0x264f27) !== -1) {
      return 0;
    }
    let _0x5d385f = this[_0x2cb640(257)][_0x2cb640(407)][_0x2cb640(333)]();
    this[_0x2cb640(257)].hongBaoUidList[_0x2cb640(307)](_0x264f27);
    let _0x3cb11d = {
      $inc: {
        "unionInfo.$.score": _0x5d385f
      }
    };
    let _0x2b666b = await userDao[_0x2cb640(264)]({
      uid: _0x264f27,
      "unionInfo.unionID": this[_0x2cb640(324)]
    }, _0x3cb11d);
    let _0x453be2 = _0x2b666b[_0x2cb640(320)][_0x2cb640(308)](function (_0x3a016d) {
      const _0x10c0c6 = _0x2cb640;
      return _0x3a016d[_0x10c0c6(324)] === this[_0x10c0c6(324)];
    }[_0x2cb640(418)](this));
    if (!_0x453be2) {
      return -1;
    }
    let _0x2809db = {
      uid: _0x264f27,
      nickname: _0x2b666b[_0x2cb640(331)],
      unionID: this[_0x2cb640(324)],
      changeCount: _0x5d385f,
      leftCount: _0x453be2[_0x2cb640(285)],
      leftSafeBoxCount: _0x453be2[_0x2cb640(340)],
      changeType: enumeration[_0x2cb640(361)][_0x2cb640(275)],
      describe: _0x2cb640(356) + _0x5d385f,
      createTime: Date.now()
    };
    commonDao[_0x2cb640(294)](_0x2cb640(393), _0x2809db)[_0x2cb640(251)](_0x2cd014 => {
      const _0x521537 = _0x2cb640;
      logger[_0x521537(256)](_0x2cd014.stack);
    });
    commonDao[_0x2cb640(359)](_0x2cb640(381), {
      unionID: this[_0x2cb640(324)]
    }, {
      hongBaoScoreList: this.unionData[_0x2cb640(407)],
      $push: {
        hongBaoUidList: _0x264f27
      }
    })[_0x2cb640(251)](_0x4a1a30 => {
      const _0x5b64ac = _0x2cb640;
      logger[_0x5b64ac(256)](_0x4a1a30[_0x5b64ac(318)]);
    });
    return {
      score: _0x5d385f,
      updateUserData: {
        unionInfo: _0x2b666b[_0x2cb640(320)]
      }
    };
  }
  async updateOpeningStatus(_0x3959a8) {
    const _0x492fcf = a0_0x146753;
    if (!this.unionData) {
      throw new Error(code[_0x492fcf(309)]);
    }
    if (this[_0x492fcf(257)][_0x492fcf(346)] === _0x3959a8) {
      return;
    }
    await commonDao.updateData("unionModel", {
      unionID: this[_0x492fcf(324)]
    }, {
      opening: _0x3959a8
    });
    this[_0x492fcf(257)][_0x492fcf(346)] = _0x3959a8;
  }
  async updateLotteryStatus(_0x21496c) {
    const _0x2d4583 = a0_0x146753;
    if (!this[_0x2d4583(257)]) {
      throw new Error(code[_0x2d4583(309)]);
    }
    if (!this[_0x2d4583(257)][_0x2d4583(299)]) {
      this[_0x2d4583(257)].resultLotteryInfo = {};
    }
    if (this[_0x2d4583(257)][_0x2d4583(299)][_0x2d4583(408)] === _0x21496c) {
      return;
    }
    this[_0x2d4583(257)].resultLotteryInfo[_0x2d4583(408)] = _0x21496c;
    await commonDao[_0x2d4583(359)](_0x2d4583(381), {
      unionID: this.unionID
    }, {
      resultLotteryInfo: this[_0x2d4583(257)][_0x2d4583(299)]
    });
    for (let _0x4fdfca in this[_0x2d4583(268)]) {
      if (this[_0x2d4583(268)][_0x2d4583(402)](_0x4fdfca)) {
        let _0x101a5a = this[_0x2d4583(268)][_0x4fdfca];
        _0x101a5a.updateLotteryInfo(this.unionData[_0x2d4583(299)]);
      }
    }
  }
  [a0_0x146753(386)]() {
    const _0x53d1aa = a0_0x146753;
    if (!this[_0x53d1aa(257)]) {
      return {};
    }
    return this[_0x53d1aa(257)][_0x53d1aa(299)] || {};
  }
  async updateStatus() {
    const _0x155c49 = a0_0x146753;
    if (!this[_0x155c49(257)]) {
      throw new Error(code[_0x155c49(309)]);
    }
    let _0x240144 = await commonDao[_0x155c49(282)](_0x155c49(381), {
      unionID: this[_0x155c49(324)]
    });
    if (!_0x240144) {
      throw new Error(code[_0x155c49(309)]);
    }
    this.unionData.showRank = !!_0x240144[_0x155c49(353)];
    this[_0x155c49(257)][_0x155c49(419)] = !!_0x240144[_0x155c49(419)];
    this.unionData.showSingleRank = !!_0x240144.showSingleRank;
    this.unionData[_0x155c49(425)] = !!_0x240144[_0x155c49(425)];
    this.unionData.forbidGive = !!_0x240144[_0x155c49(263)];
  }
  async [a0_0x146753(255)](_0x1837f4, _0x51399b, _0x36c57a) {
    const _0x23a350 = a0_0x146753;
    if (!this[_0x23a350(257)]) {
      throw new Error(code[_0x23a350(309)]);
    }
    let _0x3652e7 = _0x36c57a + moment()[_0x23a350(280)]("x");
    let _0x1f8301 = {
      gameRule: JSON[_0x23a350(250)](_0x1837f4),
      ruleName: _0x51399b,
      gameType: _0x36c57a,
      createTime: _0x3652e7
    };
    let _0x2c8270 = await commonDao[_0x23a350(357)](_0x23a350(381), {
      unionID: this[_0x23a350(324)]
    }, {
      $push: {
        roomRuleList: _0x1f8301
      }
    });
    let _0x1e30f8 = [];
    for (let _0x30b5c5 = 0; _0x30b5c5 < _0x2c8270[_0x23a350(360)][_0x23a350(348)]; ++_0x30b5c5) {
      _0x1e30f8[_0x23a350(307)](_0x2c8270[_0x23a350(360)][_0x30b5c5][_0x23a350(365)]);
    }
    this[_0x23a350(257)][_0x23a350(360)] = _0x1e30f8;
    let _0x4da819 = _0x2c8270[_0x23a350(360)][_0x23a350(308)](_0x1d042e => _0x1d042e.createTime == _0x3652e7);
    return _0x4da819;
  }
  async updateRoomRuleList(_0x58b8b0, _0x262ec4, _0x2c9d6f, _0x3b3ae1) {
    const _0x336720 = a0_0x146753;
    if (!this.unionData) {
      throw new Error(code[_0x336720(309)]);
    }
    let _0x2ff735 = {
      "roomRuleList.$.gameRule": JSON[_0x336720(250)](_0x262ec4),
      "roomRuleList.$.ruleName": _0x2c9d6f,
      "roomRuleList.$.gameType": _0x3b3ae1
    };
    let _0x45d59e = await commonDao[_0x336720(357)]("unionModel", {
      unionID: this.unionID,
      "roomRuleList._id": _0x58b8b0
    }, _0x2ff735);
    let _0xc32ba3 = [];
    for (let _0x396150 = 0; _0x396150 < _0x45d59e.roomRuleList.length; ++_0x396150) {
      _0xc32ba3[_0x336720(307)](_0x45d59e[_0x336720(360)][_0x396150][_0x336720(365)]);
    }
    this[_0x336720(257)][_0x336720(360)] = _0xc32ba3;
  }
  async [a0_0x146753(390)](_0x12fa19) {
    const _0x89d4ea = a0_0x146753;
    if (!this[_0x89d4ea(257)]) {
      throw new Error(code[_0x89d4ea(309)]);
    }
    let _0x4bdd43 = await commonDao.findOneAndUpdate(_0x89d4ea(381), {
      unionID: this.unionID
    }, {
      $pull: {
        roomRuleList: {
          _id: _0x12fa19
        }
      }
    });
    let _0x57ce98 = [];
    for (let _0x43ef4f = 0; _0x43ef4f < _0x4bdd43.roomRuleList[_0x89d4ea(348)]; ++_0x43ef4f) {
      _0x57ce98.push(_0x4bdd43[_0x89d4ea(360)][_0x43ef4f]._doc);
    }
    this[_0x89d4ea(257)].roomRuleList = _0x57ce98;
  }
  async [a0_0x146753(382)](_0x4d65b0) {
    const _0x3a924a = a0_0x146753;
    let _0x337493 = this.roomList[_0x4d65b0];
    if (!_0x337493) {
      return false;
    }
    await _0x337493.dismissRoom(enumeration.gameRoomDismissReason[_0x3a924a(401)])[_0x3a924a(251)](_0xf6c866 => {
      const _0x23ad3b = _0x3a924a;
      logger.error(_0xf6c866[_0x23ad3b(318)]);
    });
    return true;
  }
  async [a0_0x146753(385)](_0x47ac6e, _0x48b28b) {
    const _0x3d82db = a0_0x146753;
    let _0x42e7c7 = this.roomList[_0x48b28b];
    _0x42e7c7 && (await _0x42e7c7[_0x3d82db(385)](_0x47ac6e));
  }
  async [a0_0x146753(396)](_0x437859, _0x458e9e) {
    const _0x1f4a27 = a0_0x146753;
    if (!_0x458e9e) {
      let _0x5d2cb5 = await commonDao[_0x1f4a27(282)](_0x1f4a27(413), {
        uid: _0x437859
      });
      _0x458e9e = _0x5d2cb5[_0x1f4a27(387)];
    }
    let _0x4a1f1a = this[_0x1f4a27(268)][_0x458e9e];
    if (_0x4a1f1a) {
      let _0x2326dc = _0x4a1f1a[_0x1f4a27(321)][_0x437859];
      if (_0x2326dc && _0x2326dc[_0x1f4a27(415)] < _0x4a1f1a[_0x1f4a27(404)]) {
        return _0x4a1f1a[_0x1f4a27(411)] >= 1 ? 0 : await _0x4a1f1a[_0x1f4a27(245)](_0x437859);
      } else {
        let _0x1af4d8 = _0x2326dc[_0x1f4a27(415)];
        let _0x42c017 = 0;
        for (let _0xa9b1d2 in _0x4a1f1a.userArr) {
          _0x4a1f1a.userArr[_0x1f4a27(402)](_0xa9b1d2) && _0x4a1f1a.userArr[_0xa9b1d2][_0x1f4a27(415)] < _0x4a1f1a.chairCount && (_0x42c017 += 1);
        }
        return _0x42c017 < _0x4a1f1a[_0x1f4a27(404)] ? await _0x4a1f1a[_0x1f4a27(260)](_0x437859, _0x1af4d8, _0x42c017) : code[_0x1f4a27(309)];
      }
    } else {
      return code[_0x1f4a27(309)];
    }
  }
  async createRoom(_0xdb53b9, _0x88c215, _0x50951a, _0x324545, _0x423245) {
    const _0x196d92 = a0_0x146753;
    logger = logerService[_0x196d92(394)](_0x423245);
    if (this[_0x196d92(324)] !== 1) {
      if (!this[_0x196d92(257)][_0x196d92(346)]) {
        return code[_0x196d92(317)];
      }
      let _0x221598 = _0x50951a[_0x196d92(320)][_0x196d92(308)](function (_0x32d4e5) {
        const _0x31f736 = _0x196d92;
        return _0x32d4e5[_0x31f736(324)] === this.unionID;
      }[_0x196d92(418)](this));
      if (!_0x221598) {
        return code[_0x196d92(254)];
      }
    }
    if (this.unionID !== 1 && this[_0x196d92(257)][_0x196d92(395)]) {
      for (let _0x9e1505 in this[_0x196d92(268)]) {
        let _0x45cc9c = this[_0x196d92(268)][_0x9e1505];
        if (_0x45cc9c[_0x196d92(289)][_0x196d92(406)] == _0xdb53b9) {
          return code[_0x196d92(291)];
        }
      }
    }
    let _0x40459b = _0x50951a[_0x196d92(398)];
    let _0x3e5508 = _0x40459b + _0x196d92(311);
    let _0x5bd9b7 = redisService[_0x196d92(262)](_0x3e5508, 2);
    let _0x325721 = _0xdb53b9 + _0x196d92(392);
    let _0x2a9a86 = redisService[_0x196d92(262)](_0x325721, 2);
    logger.info("[" + _0x50951a.uid + _0x196d92(314) + _0x5bd9b7 + _0x196d92(414) + _0x2a9a86);
    if (this[_0x196d92(324)] !== 1 && this[_0x196d92(257)][_0x196d92(395)] && _0x2a9a86) {
      return code[_0x196d92(291)];
    }
    if (_0x5bd9b7) {
      return code[_0x196d92(336)];
    }
    this[_0x196d92(284)] = Date[_0x196d92(252)]();
    if (!!_0xdb53b9) {
      let _0x3bf965 = null;
      for (let _0x546b03 = 0; _0x546b03 < this[_0x196d92(257)][_0x196d92(360)][_0x196d92(348)]; ++_0x546b03) {
        if (this[_0x196d92(257)][_0x196d92(360)][_0x546b03][_0x196d92(406)].toString() === _0xdb53b9) {
          _0x3bf965 = this.unionData[_0x196d92(360)][_0x546b03];
          break;
        }
      }
      if (!_0x3bf965) {
        redisService[_0x196d92(347)](_0x325721);
        redisService[_0x196d92(347)](_0x3e5508);
        return code[_0x196d92(313)];
      }
      _0x88c215 = JSON[_0x196d92(278)](_0x3bf965.gameRule);
      _0x88c215[_0x196d92(244)] = _0x3bf965[_0x196d92(244)];
      _0x88c215.ruleName = _0x3bf965.ruleName;
      _0x88c215[_0x196d92(406)] = _0x3bf965._id[_0x196d92(344)]();
    }
    if (this[_0x196d92(324)] !== 1 && _0x88c215[_0x196d92(277)] === enumeration[_0x196d92(303)][_0x196d92(269)]) {
      let _0x5130e0 = gameConfig[_0x196d92(272)](_0x88c215[_0x196d92(305)], _0x88c215[_0x196d92(244)]);
      let _0x973a75 = await userDao[_0x196d92(327)](this[_0x196d92(257)].ownerUid);
      if (_0x973a75[_0x196d92(267)] <= 0 || _0x973a75[_0x196d92(267)] < _0x5130e0) {
        redisService[_0x196d92(347)](_0x325721);
        redisService.unLock(_0x3e5508);
        return code[_0x196d92(246)];
      }
    } else {
      let _0x4cd7dd = await gameDataServices.checkGold(_0x50951a, _0x88c215);
      if (_0x4cd7dd) {
        redisService.unLock(_0x325721);
        redisService[_0x196d92(347)](_0x3e5508);
        return code.NOT_ENOUGH_GOLD;
      }
    }
    let _0x5f1ceb = unionManager[_0x196d92(403)]();
    let _0x10c268 = null;
    this[_0x196d92(324)] === 1 ? _0x10c268 = {
      creatorType: enumeration.roomCreatorType[_0x196d92(329)],
      uid: _0x50951a[_0x196d92(398)]
    } : _0x10c268 = {
      creatorType: enumeration[_0x196d92(427)].UNION_CREATE,
      unionID: this[_0x196d92(324)],
      unionType: this[_0x196d92(257)][_0x196d92(315)],
      ownerUid: this[_0x196d92(257)][_0x196d92(304)],
      serverScore: this.unionData[_0x196d92(337)] || 0,
      pumpWaterPattern: this[_0x196d92(257)][_0x196d92(271)] || false
    };
    let _0x2aa51d = null;
    _0x88c215[_0x196d92(274)] = _0x324545;
    let _0x54a51b = gameConfig[_0x196d92(265)](_0x88c215[_0x196d92(244)]);
    if (_0x54a51b) {
      let _0x3924bb = require("../../../gameComponent/" + _0x54a51b[_0x196d92(426)]);
      _0x2aa51d = new _0x3924bb(_0x5f1ceb, _0x10c268, _0x88c215);
    } else {
      _0x2aa51d = new RoomFrame(_0x5f1ceb, _0x10c268, _0x88c215);
    }
    let _0x12b506 = code[_0x196d92(309)];
    _0x88c215.createAndWatch ? _0x12b506 = await _0x2aa51d[_0x196d92(270)](_0x50951a) : _0x12b506 = await _0x2aa51d[_0x196d92(342)](_0x50951a);
    this[_0x196d92(268)][_0x5f1ceb] = _0x2aa51d;
    logger.info("[" + _0x50951a[_0x196d92(398)] + _0x196d92(362) + _0x5f1ceb + _0x196d92(296) + _0x88c215[_0x196d92(274)] + _0x196d92(343) + _0x12b506 + " ");
    _0x12b506 != code.OK && (logger[_0x196d92(341)]("[" + _0x50951a[_0x196d92(398)] + "] join room fail and delete room = " + _0x5f1ceb + " "), this[_0x196d92(382)](_0x5f1ceb));
    redisService.unLock(_0x325721);
    redisService[_0x196d92(347)](_0x3e5508);
    return _0x12b506;
  }
  async [a0_0x146753(330)](_0x4d56a8, _0x102163) {
    const _0x4e7198 = a0_0x146753;
    if (this.unionID !== 1) {
      let _0x77fe32 = _0x102163.unionInfo.find(function (_0x2aaa61) {
        const _0xef686f = a0_0x3068;
        return _0x2aaa61[_0xef686f(324)] === this[_0xef686f(324)];
      }.bind(this));
      if (!_0x77fe32 && !_0x102163.isRobot) {
        return code[_0x4e7198(293)];
      }
    }
    let _0x9cb51d = _0x102163[_0x4e7198(398)];
    let _0x209ba2 = _0x9cb51d + _0x4e7198(311);
    let _0x474c8a = redisService.isLocked(_0x209ba2, 2);
    if (_0x474c8a) {
      return code[_0x4e7198(410)];
    }
    this[_0x4e7198(284)] = Date[_0x4e7198(252)]();
    let _0x368f02 = this[_0x4e7198(268)][_0x4d56a8];
    if (!_0x368f02) {
      redisService[_0x4e7198(347)](_0x209ba2);
      return code[_0x4e7198(313)];
    } else {
      let _0x5a330c = await _0x368f02[_0x4e7198(342)](_0x102163);
      redisService[_0x4e7198(347)](_0x209ba2);
      return _0x5a330c;
    }
  }
  async [a0_0x146753(276)](_0x2c28b9, _0x2b324e) {
    const _0xdf9c26 = a0_0x146753;
    let _0x5e81de = _0x2b324e[_0xdf9c26(398)];
    let _0x15e884 = _0x5e81de + "-join-watch";
    let _0x4fe3b3 = redisService[_0xdf9c26(262)](_0x15e884, 2);
    if (_0x4fe3b3) {
      logger.info("[" + _0x2b324e[_0xdf9c26(398)] + "] union join room watch isLocked = " + _0x4fe3b3 + " ");
      return code.OK;
    }
    if (this[_0xdf9c26(324)] !== 1) {
      let _0x308891 = _0x2b324e.unionInfo.find(function (_0xd7cfdb) {
        const _0x553b67 = _0xdf9c26;
        return _0xd7cfdb[_0x553b67(324)] === this.unionID;
      }[_0xdf9c26(418)](this));
      if (!_0x308891 && !_0x2b324e[_0xdf9c26(364)]) {
        return code.NOT_IN_UNION;
      }
    }
    this[_0xdf9c26(284)] = Date[_0xdf9c26(252)]();
    let _0x576798 = this[_0xdf9c26(268)][_0x2c28b9];
    if (!_0x576798) {
      return code[_0xdf9c26(313)];
    } else {
      let _0x389e30 = await _0x576798[_0xdf9c26(270)](_0x2b324e);
      return _0x389e30;
    }
  }
  async quickJoin(_0x5dcb2d, _0x1fc10a) {
    const _0x4a76a1 = a0_0x146753;
    let _0x3615ff = _0x1fc10a[_0x4a76a1(398)];
    let _0x4ff954 = _0x3615ff + _0x4a76a1(311);
    let _0x3b49ec = redisService[_0x4a76a1(262)](_0x4ff954, 3);
    if (_0x3b49ec) {
      return;
    }
    this[_0x4a76a1(284)] = Date[_0x4a76a1(252)]();
    let _0x45a02d = null;
    for (let _0x171f2e = 0; _0x171f2e < this.unionData[_0x4a76a1(360)][_0x4a76a1(348)]; ++_0x171f2e) {
      if (this[_0x4a76a1(257)][_0x4a76a1(360)][_0x171f2e][_0x4a76a1(406)][_0x4a76a1(344)]() === _0x5dcb2d) {
        _0x45a02d = this[_0x4a76a1(257)].roomRuleList[_0x171f2e];
        break;
      }
    }
    if (!_0x45a02d) {
      redisService[_0x4a76a1(347)](_0x4ff954);
      return code[_0x4a76a1(313)];
    }
    for (let _0x40b165 in this.roomList) {
      if (this.roomList[_0x4a76a1(402)](_0x40b165)) {
        let _0x14325d = this.roomList[_0x40b165];
        if (!_0x14325d[_0x4a76a1(379)] && !_0x14325d[_0x4a76a1(384)] && _0x14325d[_0x4a76a1(289)][_0x4a76a1(406)] === _0x5dcb2d && _0x14325d[_0x4a76a1(358)]() && _0x14325d.hasEmptyChair()) {
          redisService.unLock(_0x4ff954);
          return await this[_0x4a76a1(330)](_0x14325d[_0x4a76a1(387)], _0x1fc10a);
        }
      }
    }
    let _0x5db70d = unionManager.createNewRoomID();
    let _0x5b95b8 = null;
    this[_0x4a76a1(324)] === 1 ? _0x5b95b8 = {
      creatorType: enumeration[_0x4a76a1(427)].USER_CREATE,
      uid: _0x1fc10a[_0x4a76a1(398)]
    } : _0x5b95b8 = {
      creatorType: enumeration[_0x4a76a1(427)][_0x4a76a1(370)],
      unionID: this[_0x4a76a1(324)]
    };
    let _0x2ab1d2 = JSON[_0x4a76a1(278)](_0x45a02d[_0x4a76a1(289)]);
    _0x2ab1d2[_0x4a76a1(244)] = _0x45a02d.gameType;
    _0x2ab1d2.ruleName = _0x45a02d[_0x4a76a1(302)];
    _0x2ab1d2[_0x4a76a1(406)] = _0x45a02d[_0x4a76a1(406)][_0x4a76a1(344)]();
    let _0x1b5af5 = new RoomFrame(_0x5db70d, _0x5b95b8, _0x2ab1d2);
    this[_0x4a76a1(268)][_0x5db70d] = _0x1b5af5;
    _0x1b5af5[_0x4a76a1(290)](this[_0x4a76a1(386)]());
    redisService[_0x4a76a1(347)](_0x4ff954);
    return await _0x1b5af5[_0x4a76a1(342)](_0x1fc10a);
  }
  [a0_0x146753(369)](_0x2634eb) {
    const _0x5039df = a0_0x146753;
    delete this[_0x5039df(268)][_0x2634eb];
  }
  getRoomByID(_0x49fed9) {
    const _0x2fa38e = a0_0x146753;
    return this[_0x2fa38e(268)][_0x49fed9];
  }
  [a0_0x146753(297)]() {
    const _0x326db2 = a0_0x146753;
    return !!this[_0x326db2(257)] && this.unionData[_0x326db2(346)];
  }
  [a0_0x146753(366)]() {
    return this.activeTime;
  }
  [a0_0x146753(376)](_0x56b42c) {
    const _0x5ec207 = a0_0x146753;
    return utils[_0x5ec207(377)](this.roomList) === 0 && this[_0x5ec207(284)] - Date[_0x5ec207(252)]() > _0x56b42c;
  }
  [a0_0x146753(371)]() {
    const _0x36120f = a0_0x146753;
    return;
    if (!this.unionData) {
      return;
    }
    !!this[_0x36120f(257)][_0x36120f(355)] && ((this[_0x36120f(257)].hongBaoInfo[_0x36120f(407)][_0x36120f(348)] !== 0 || this[_0x36120f(257)][_0x36120f(355)][_0x36120f(319)][_0x36120f(348)] !== 0) && (this.unionData[_0x36120f(355)][_0x36120f(407)] = [], this[_0x36120f(257)][_0x36120f(355)][_0x36120f(319)] = []), commonDao[_0x36120f(359)](_0x36120f(381), {
      unionID: this[_0x36120f(324)]
    }, {
      hongBaoUidList: [],
      hongBaoScoreList: []
    })[_0x36120f(251)](_0x14fc6d => {
      const _0x145e27 = _0x36120f;
      logger[_0x145e27(256)](_0x14fc6d[_0x145e27(318)]);
    }));
  }
  async createRoomBR(_0x19986c, _0x3e7aa5, _0x5f0532) {
    const _0x40d637 = a0_0x146753;
    if (this.unionID !== 1) {
      if (!this[_0x40d637(257)][_0x40d637(346)]) {
        return code[_0x40d637(317)];
      }
      let _0x41d49a = _0x5f0532[_0x40d637(320)][_0x40d637(308)](_0x4c2bcb => _0x4c2bcb[_0x40d637(324)] == this[_0x40d637(324)]);
      if (!_0x41d49a) {
        return code[_0x40d637(254)];
      }
      if (!_0x41d49a[_0x40d637(424)] && _0x5f0532[_0x40d637(398)] != this.unionData.ownerUid) {
        return code.PERMISSION_NOT_ENOUGH;
      }
    }
    this[_0x40d637(284)] = Date.now();
    if (!!_0x19986c) {
      let _0x5be7cc = this[_0x40d637(257)][_0x40d637(360)].find(_0x5c46a8 => _0x5c46a8._id == _0x19986c);
      if (!_0x5be7cc) {
        return code[_0x40d637(313)];
      }
      _0x3e7aa5 = JSON[_0x40d637(278)](_0x5be7cc[_0x40d637(289)]);
      _0x3e7aa5[_0x40d637(244)] = _0x5be7cc.gameType;
      _0x3e7aa5[_0x40d637(302)] = _0x5be7cc[_0x40d637(302)];
      _0x3e7aa5._id = _0x5be7cc[_0x40d637(406)].toString();
    }
    let _0x662d91 = logerService[_0x40d637(394)](_0x3e7aa5[_0x40d637(244)]);
    let _0xbb55a3 = unionManager.createNewRoomID();
    let _0x47b957 = null;
    this.unionID === 1 ? _0x47b957 = {
      ruleID: _0x19986c,
      roomType: enumeration[_0x40d637(380)].HUNDRED,
      creatorType: enumeration.roomCreatorType[_0x40d637(329)],
      uid: _0x5f0532[_0x40d637(398)]
    } : _0x47b957 = {
      ruleID: _0x19986c,
      roomType: enumeration[_0x40d637(380)][_0x40d637(345)],
      creatorType: enumeration.roomCreatorType[_0x40d637(370)],
      unionID: this[_0x40d637(324)],
      unionType: this[_0x40d637(257)].unionType,
      ownerUid: this.unionData[_0x40d637(304)],
      serverScore: this[_0x40d637(257)][_0x40d637(337)] || 0,
      pumpWaterPattern: this[_0x40d637(257)][_0x40d637(271)] || false
    };
    let _0xa43bca = null;
    let _0x48c11a = gameConfig[_0x40d637(265)](_0x3e7aa5[_0x40d637(244)]);
    if (_0x48c11a) {
      let _0x22509e = require(_0x40d637(389) + _0x48c11a[_0x40d637(426)]);
      _0xa43bca = new _0x22509e(_0xbb55a3, _0x47b957, _0x3e7aa5);
    }
    let _0x461bd6 = code.OK;
    this.roomList[_0xbb55a3] = _0xa43bca;
    _0x662d91[_0x40d637(341)]("[" + _0x5f0532[_0x40d637(398)] + "] union create bairen room sucess ");
    this[_0x40d637(324)] == 1 && (_0x461bd6 = await _0xa43bca[_0x40d637(342)](_0x5f0532));
    return _0x461bd6;
  }
}
module[a0_0x146753(253)] = union;