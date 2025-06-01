
const a0_0x12b713 = a0_0x3b14;
(function (_0x22720f, _0x5f9fa4) {
  const _0x57ed9a = a0_0x3b14;
  const _0x283d8d = _0x22720f();
  while (true) {
    try {
      const _0x15a3fd = parseInt(_0x57ed9a(470)) / 1 * (-parseInt(_0x57ed9a(469)) / 2) + -parseInt(_0x57ed9a(508)) / 3 + -parseInt(_0x57ed9a(526)) / 4 * (-parseInt(_0x57ed9a(506)) / 5) + -parseInt(_0x57ed9a(468)) / 6 + parseInt(_0x57ed9a(533)) / 7 + -parseInt(_0x57ed9a(510)) / 8 * (parseInt(_0x57ed9a(448)) / 9) + parseInt(_0x57ed9a(442)) / 10;
      if (_0x15a3fd === _0x5f9fa4) {
        break;
      } else {
        _0x283d8d.push(_0x283d8d.shift());
      }
    } catch (_0x2c1d32) {
      _0x283d8d.push(_0x283d8d.shift());
    }
  }
})(a0_0x3bcb, 488985);
function a0_0x3bcb() {
  const _0x4f66a2 = ["tableStyle", "updateData", "status", "updateUnionInfo", "tableHideCount", "stack", "6148065pSCWmd", "getUnionInfo", "logic", "INVALID_UERS", "removeRoomRuleList", "joinVerify", "dismissRoom", "find", "PERMISSION_NOT_ENOUGH", "updatePartnerNoticeSwitch", "transferUid", "tableColor", "uid", "25553040YpDorE", "../../../dao/userDao", "disApplyCount", "updateUnionName", "error", "isOpen", "11367YKFXPd", "updateUnionTableColor", "pomelo-logger", "userModel", "REQUEST_DATA_ERROR", "gold", "unionBg", "exports", "isInvite", "updateUnionNotice", "updateOpeningStatus", "showRank", "notice", "unionInfo", "unReadyKick", "emptyTable", "oneUserDiamondCount", "getUserDataByUid", "ruleName", "gameType", "5803242bXcDcm", "4334VKVoak", "347AWXucj", "length", "hbCount", "info", "getLogger", "app", " userGold = ", "../../../constant/code", "unionName", "manager", "_id", "roomRule", "FAIL", "] add room rule list begin", "getUnionRoomList", "inviteLimit", "dismissType", "../../../gameComponent/gameConfig", "hbEnd", "unionOpen", "updateHongBaoSetting", "../../../dao/commonDao", "[addRoomRuleList] payDiamond = ", "getOwnerUid", "getUnion", "prototype", "deleteUnion", "gameRule", "UpdatePumpWaterPattern", "startTime", "pumpWaterPattern", "count", "updateUnionServerScore", "hbStatus", "hongBaoSetting", "opening", "3266255XHvOLT", "unionNotice", "2881524oLgfNM", "updateLotteryStatus", "5816qMmxQq", "tableSort", "addRoomRuleList", "propsLimit", "updateUnionTableSort", "groupLimit", "canNegativeScore", "serverScore", "hongBaoInfo", "bureau", "transferUnion", "updateRoomRuleList", "unionID", "hbOpen", "buildGameRoomUserInfo", "totalScore", "4iTBIvc"];
  a0_0x3bcb = function () {
    return _0x4f66a2;
  };
  return a0_0x3bcb();
}
let code = require(a0_0x12b713(477));
let unionManager = require("../domain/unionManager");
let userDao = require(a0_0x12b713(443));
let commonDao = require(a0_0x12b713(491));
let logger = require(a0_0x12b713(450))[a0_0x12b713(474)](a0_0x12b713(535));
let gameConfig = require(a0_0x12b713(487));
let enumeration = require("../../../constant/enumeration");
const userInfoServices = require("../../../services/userInfoServices");
module[a0_0x12b713(455)] = function (_0xe45c45) {
  return new Handler(_0xe45c45);
};
function a0_0x3b14(_0x6a67ac, _0x2e62ee) {
  const _0x51dfb3 = a0_0x3bcb();
  a0_0x3b14 = function (_0x36bd39, _0x53c845) {
    _0x36bd39 = _0x36bd39 - 440;
    let _0x5a498f = _0x51dfb3[_0x36bd39];
    return _0x5a498f;
  };
  return a0_0x3b14(_0x6a67ac, _0x2e62ee);
}
let Handler = function (_0x27817) {
  const _0x2e5973 = a0_0x12b713;
  this[_0x2e5973(475)] = _0x27817;
};
Handler[a0_0x12b713(495)][a0_0x12b713(512)] = async function (_0x10eea9, _0x1912bf, _0x1a1315) {
  const _0x5c9dbd = a0_0x12b713;
  logger[_0x5c9dbd(473)]("[" + _0x1912bf.uid + _0x5c9dbd(483));
  if (!_0x1912bf[_0x5c9dbd(441)]) {
    _0x1a1315(null, {
      code: code[_0x5c9dbd(536)]
    });
    return;
  }
  if (!_0x10eea9.unionID || !_0x10eea9.ruleName || !_0x10eea9[_0x5c9dbd(467)] || !_0x10eea9[_0x5c9dbd(481)]) {
    _0x1a1315(null, {
      code: code.REQUEST_DATA_ERROR
    });
    return;
  }
  let _0x3b63f5 = await userDao[_0x5c9dbd(465)](_0x1912bf.uid);
  let _0x4ca44f = _0x3b63f5[_0x5c9dbd(461)][_0x5c9dbd(540)](_0x4b31f => _0x4b31f.unionID === _0x10eea9[_0x5c9dbd(522)]);
  if (!_0x4ca44f) {
    _0x1a1315(null, {
      code: code.REQUEST_DATA_ERROR
    });
    return;
  }
  let _0x8aa32 = await unionManager[_0x5c9dbd(494)](_0x10eea9[_0x5c9dbd(522)]);
  if (_0x1912bf[_0x5c9dbd(441)] !== _0x8aa32[_0x5c9dbd(493)]() && !_0x4ca44f[_0x5c9dbd(479)]) {
    _0x1a1315(null, {
      code: code[_0x5c9dbd(541)]
    });
    return;
  }
  let _0x260f49 = gameConfig.oneUserDiamondCount(_0x10eea9[_0x5c9dbd(481)][_0x5c9dbd(519)], _0x10eea9[_0x5c9dbd(481)].gameType);
  let _0x4475ed = await userDao.getUserDataByUid(_0x8aa32[_0x5c9dbd(493)]());
  logger.info(_0x5c9dbd(492) + _0x260f49 + _0x5c9dbd(476) + _0x4475ed[_0x5c9dbd(453)] + "  ");
  if (_0x4475ed[_0x5c9dbd(453)] < _0x260f49) {
    _0x1a1315(null, {
      code: code.NOT_ENOUGH_GOLD
    });
    return;
  }
  if (_0x10eea9[_0x5c9dbd(481)][_0x5c9dbd(467)] >= 200) {
    let _0x7b309b = await _0x8aa32[_0x5c9dbd(512)](_0x10eea9[_0x5c9dbd(481)], _0x10eea9.ruleName, _0x10eea9[_0x5c9dbd(467)]);
    if (!_0x7b309b) {
      _0x1a1315(null, {
        code: code.REQUEST_DATA_ERROR
      });
      return;
    }
    let _0x4a441b = await _0x8aa32.createRoomBR(_0x7b309b._id, _0x7b309b[_0x5c9dbd(497)], userInfoServices[_0x5c9dbd(524)](_0x4475ed));
    _0x1a1315(null, {
      code: _0x4a441b,
      msg: {
        unionInfo: _0x8aa32[_0x5c9dbd(534)](_0x1912bf.uid),
        roomList: _0x8aa32[_0x5c9dbd(484)]()
      }
    });
  } else {
    await _0x8aa32[_0x5c9dbd(512)](_0x10eea9[_0x5c9dbd(481)], _0x10eea9[_0x5c9dbd(466)], _0x10eea9.gameType);
    _0x1a1315(null, {
      code: code.OK,
      msg: {
        unionInfo: _0x8aa32[_0x5c9dbd(534)](_0x1912bf[_0x5c9dbd(441)]),
        roomList: _0x8aa32[_0x5c9dbd(484)]()
      }
    });
  }
};
Handler[a0_0x12b713(495)][a0_0x12b713(521)] = async function (_0x83bc1e, _0x1df734, _0x5a461a) {
  const _0x2f7603 = a0_0x12b713;
  if (!_0x1df734[_0x2f7603(441)]) {
    _0x5a461a(null, {
      code: code[_0x2f7603(536)]
    });
    return;
  }
  if (!_0x83bc1e[_0x2f7603(522)] || !_0x83bc1e[_0x2f7603(466)] || !_0x83bc1e[_0x2f7603(467)] || !_0x83bc1e[_0x2f7603(480)] || !_0x83bc1e[_0x2f7603(481)]) {
    _0x5a461a(null, {
      code: code[_0x2f7603(452)]
    });
    return;
  }
  let _0x233641 = await userDao[_0x2f7603(465)](_0x1df734[_0x2f7603(441)]);
  let _0x501c83 = _0x233641[_0x2f7603(461)][_0x2f7603(540)](function (_0x4e82b7) {
    const _0x27edaf = _0x2f7603;
    return _0x4e82b7.unionID === _0x83bc1e[_0x27edaf(522)];
  });
  if (!_0x501c83) {
    _0x5a461a(null, {
      code: code[_0x2f7603(452)]
    });
    return;
  }
  let _0x329182 = await unionManager[_0x2f7603(494)](_0x83bc1e[_0x2f7603(522)]);
  if (_0x1df734[_0x2f7603(441)] !== _0x329182[_0x2f7603(493)]() && !_0x501c83[_0x2f7603(479)]) {
    _0x5a461a(null, {
      code: code[_0x2f7603(541)]
    });
    return;
  }
  let _0x477e01 = gameConfig[_0x2f7603(464)](_0x83bc1e[_0x2f7603(481)].bureau, _0x83bc1e[_0x2f7603(481)][_0x2f7603(467)]);
  let _0x4adb6f = await userDao[_0x2f7603(465)](_0x329182.getOwnerUid());
  if (_0x4adb6f.gold <= 0 || _0x4adb6f[_0x2f7603(453)] < _0x477e01) {
    _0x5a461a(null, {
      code: code.NOT_ENOUGH_GOLD
    });
    return;
  } else {
    await _0x329182[_0x2f7603(521)](_0x83bc1e[_0x2f7603(480)], _0x83bc1e[_0x2f7603(481)], _0x83bc1e[_0x2f7603(466)], _0x83bc1e[_0x2f7603(467)]);
    _0x5a461a(null, {
      code: code.OK,
      msg: {
        unionInfo: _0x329182[_0x2f7603(534)](_0x1df734[_0x2f7603(441)]),
        roomList: _0x329182[_0x2f7603(484)]()
      }
    });
  }
};
Handler[a0_0x12b713(495)].removeRoomRuleList = async function (_0x3e02af, _0x36cd94, _0x3f6c86) {
  const _0x8df73d = a0_0x12b713;
  if (!_0x36cd94.uid) {
    _0x3f6c86(null, {
      code: code[_0x8df73d(536)]
    });
    return;
  }
  if (!_0x3e02af[_0x8df73d(522)] || !_0x3e02af.roomRuleID) {
    _0x3f6c86(null, {
      code: code.REQUEST_DATA_ERROR
    });
    return;
  }
  let _0x5ec7f0 = await userDao[_0x8df73d(465)](_0x36cd94[_0x8df73d(441)]);
  let _0x133bf3 = _0x5ec7f0[_0x8df73d(461)].find(function (_0x2f723b) {
    const _0x140f5f = _0x8df73d;
    return _0x2f723b.unionID === _0x3e02af[_0x140f5f(522)];
  });
  if (!_0x133bf3) {
    _0x3f6c86(null, {
      code: code[_0x8df73d(452)]
    });
    return;
  }
  let _0x2bbaed = await unionManager[_0x8df73d(494)](_0x3e02af.unionID);
  if (_0x36cd94.uid !== _0x2bbaed.getOwnerUid() && !_0x133bf3[_0x8df73d(479)]) {
    _0x3f6c86(null, {
      code: code[_0x8df73d(541)]
    });
    return;
  }
  await _0x2bbaed[_0x8df73d(537)](_0x3e02af.roomRuleID);
  _0x3f6c86(null, {
    code: code.OK,
    msg: {
      unionInfo: _0x2bbaed[_0x8df73d(534)](_0x36cd94.uid),
      roomList: _0x2bbaed[_0x8df73d(484)]()
    }
  });
};
Handler[a0_0x12b713(495)][a0_0x12b713(457)] = async function (_0x48e498, _0xde52c0, _0xe8489a) {
  const _0xaf0f5c = a0_0x12b713;
  if (!_0xde52c0[_0xaf0f5c(441)]) {
    _0xe8489a(null, {
      code: code[_0xaf0f5c(536)]
    });
    return;
  }
  if (!_0x48e498[_0xaf0f5c(522)] || !_0x48e498[_0xaf0f5c(460)] && _0x48e498[_0xaf0f5c(460)] !== "" || _0x48e498.notice[_0xaf0f5c(471)] > 50) {
    _0xe8489a(null, {
      code: code[_0xaf0f5c(452)]
    });
    return;
  }
  let _0x37517a = await userDao[_0xaf0f5c(465)](_0xde52c0.uid);
  let _0x4e3a1e = _0x37517a[_0xaf0f5c(461)][_0xaf0f5c(540)](function (_0x1a06bf) {
    const _0xd8b75f = _0xaf0f5c;
    return _0x1a06bf.unionID === _0x48e498[_0xd8b75f(522)];
  });
  if (!_0x4e3a1e) {
    _0xe8489a(null, {
      code: code[_0xaf0f5c(452)]
    });
    return;
  }
  let _0x1bd858 = await unionManager.getUnion(_0x48e498.unionID);
  if (_0xde52c0[_0xaf0f5c(441)] !== _0x1bd858[_0xaf0f5c(493)]() && !_0x4e3a1e[_0xaf0f5c(479)]) {
    _0xe8489a(null, {
      code: code[_0xaf0f5c(541)]
    });
    return;
  }
  await _0x1bd858[_0xaf0f5c(457)](_0x48e498[_0xaf0f5c(460)]);
  _0xe8489a(null, {
    code: code.OK,
    msg: {
      unionInfo: _0x1bd858[_0xaf0f5c(534)](_0xde52c0[_0xaf0f5c(441)]),
      roomList: _0x1bd858[_0xaf0f5c(484)]()
    }
  });
};
Handler[a0_0x12b713(495)].updateOpeningStatus = async function (_0x1a988b, _0x2fda52, _0x475e7d) {
  const _0x1da0ff = a0_0x12b713;
  if (!_0x2fda52[_0x1da0ff(441)]) {
    _0x475e7d(null, {
      code: code[_0x1da0ff(536)]
    });
    return;
  }
  if (!_0x1a988b[_0x1da0ff(522)]) {
    _0x475e7d(null, {
      code: code.REQUEST_DATA_ERROR
    });
    return;
  }
  let _0x44732d = await userDao.getUserDataByUid(_0x2fda52[_0x1da0ff(441)]);
  let _0x42e94f = _0x44732d.unionInfo.find(function (_0x58b244) {
    return _0x58b244.unionID === _0x1a988b.unionID;
  });
  if (!_0x42e94f) {
    _0x475e7d(null, {
      code: code[_0x1da0ff(452)]
    });
    return;
  }
  let _0x2e8464 = await unionManager.getUnion(_0x1a988b[_0x1da0ff(522)]);
  if (_0x2fda52[_0x1da0ff(441)] !== _0x2e8464.getOwnerUid() && !_0x42e94f[_0x1da0ff(479)]) {
    _0x475e7d(null, {
      code: code[_0x1da0ff(541)]
    });
    return;
  }
  await _0x2e8464[_0x1da0ff(458)](_0x1a988b[_0x1da0ff(447)]);
  _0x475e7d(null, {
    code: code.OK,
    msg: {
      unionInfo: _0x2e8464[_0x1da0ff(534)](_0x2fda52.uid),
      roomList: _0x2e8464[_0x1da0ff(484)]()
    }
  });
};
Handler[a0_0x12b713(495)][a0_0x12b713(520)] = async function (_0x537480, _0x2824b1, _0x46655c) {
  const _0x52b247 = a0_0x12b713;
  if (!_0x2824b1[_0x52b247(441)]) {
    _0x46655c(null, {
      code: code[_0x52b247(536)]
    });
    return;
  }
  if (!_0x537480[_0x52b247(522)] || !_0x537480[_0x52b247(543)] || _0x537480[_0x52b247(543)] === _0x2824b1[_0x52b247(441)]) {
    _0x46655c(null, {
      code: code[_0x52b247(452)]
    });
    return;
  }
  let _0x5f2d84 = await userDao.getUserDataByUid(_0x537480[_0x52b247(543)]);
  if (!_0x5f2d84) {
    _0x46655c(null, {
      code: code[_0x52b247(452)]
    });
    return;
  }
  let _0x26dddb = await unionManager[_0x52b247(494)](_0x537480[_0x52b247(522)]);
  if (_0x2824b1.uid !== _0x26dddb[_0x52b247(493)]()) {
    _0x46655c(null, {
      code: code[_0x52b247(452)]
    });
    return;
  }
  let _0x5554d8 = _0x5f2d84[_0x52b247(461)].find(function (_0x3928fe) {
    const _0x34cce6 = _0x52b247;
    return _0x3928fe[_0x34cce6(522)] === _0x537480[_0x34cce6(522)];
  });
  if (!_0x5554d8) {
    _0x46655c(null, {
      code: code[_0x52b247(452)]
    });
    return;
  }
  await _0x26dddb.transferUnion(_0x537480.transferUid);
  _0x46655c(null, {
    code: code.OK,
    msg: {
      unionInfo: _0x26dddb.getUnionInfo(_0x2824b1[_0x52b247(441)]),
      roomList: _0x26dddb.getUnionRoomList()
    }
  });
};
Handler[a0_0x12b713(495)][a0_0x12b713(445)] = async function (_0x16bb84, _0x5da2d8, _0x24539b) {
  const _0x152404 = a0_0x12b713;
  if (!_0x5da2d8[_0x152404(441)]) {
    _0x24539b(null, {
      code: code[_0x152404(536)]
    });
    return;
  }
  if (!_0x16bb84.unionID || !_0x16bb84[_0x152404(478)]) {
    _0x24539b(null, {
      code: code[_0x152404(452)]
    });
    return;
  }
  let _0x35426d = await userDao[_0x152404(465)](_0x5da2d8[_0x152404(441)]);
  let _0x59be56 = _0x35426d[_0x152404(461)][_0x152404(540)](function (_0x55dd70) {
    const _0x4c17c5 = _0x152404;
    return _0x55dd70[_0x4c17c5(522)] === _0x16bb84[_0x4c17c5(522)];
  });
  if (!_0x59be56) {
    _0x24539b(null, {
      code: code[_0x152404(452)]
    });
    return;
  }
  let _0x1e8ace = await unionManager.getUnion(_0x16bb84[_0x152404(522)]);
  if (_0x5da2d8[_0x152404(441)] !== _0x1e8ace[_0x152404(493)]() && !_0x59be56[_0x152404(479)]) {
    _0x24539b(null, {
      code: code[_0x152404(541)]
    });
    return;
  }
  await _0x1e8ace.updateUnionName(_0x16bb84[_0x152404(478)]);
  _0x24539b(null, {
    code: code.OK,
    msg: {
      unionInfo: _0x1e8ace[_0x152404(534)](_0x5da2d8[_0x152404(441)]),
      roomList: _0x1e8ace.getUnionRoomList()
    }
  });
};
Handler[a0_0x12b713(495)][a0_0x12b713(542)] = async function (_0x43f0e5, _0x458f0d, _0x1adeb7) {
  const _0x50dd14 = a0_0x12b713;
  if (!_0x458f0d.uid) {
    _0x1adeb7(null, {
      code: code.INVALID_UERS
    });
    return;
  }
  if (!_0x43f0e5.unionID) {
    _0x1adeb7(null, {
      code: code[_0x50dd14(452)]
    });
    return;
  }
  let _0x2bc756 = await unionManager[_0x50dd14(494)](_0x43f0e5[_0x50dd14(522)]);
  if (_0x458f0d[_0x50dd14(441)] !== _0x2bc756.getOwnerUid()) {
    _0x1adeb7(null, {
      code: code[_0x50dd14(452)]
    });
    return;
  }
  await _0x2bc756[_0x50dd14(542)](_0x43f0e5[_0x50dd14(447)]);
  _0x1adeb7(null, {
    code: code.OK
  });
};
Handler[a0_0x12b713(495)][a0_0x12b713(539)] = async function (_0xf1fbf4, _0x1b3a7d, _0x26fbc5) {
  const _0x4ddf0b = a0_0x12b713;
  if (!_0x1b3a7d.uid) {
    _0x26fbc5(null, {
      code: code[_0x4ddf0b(536)]
    });
    return;
  }
  if (!_0xf1fbf4.unionID || !_0xf1fbf4.roomID) {
    _0x26fbc5(null, {
      code: code[_0x4ddf0b(452)]
    });
    return;
  }
  let _0x5cb130 = await unionManager[_0x4ddf0b(494)](_0xf1fbf4[_0x4ddf0b(522)]);
  let _0x5641ee = await userDao[_0x4ddf0b(465)](_0x1b3a7d[_0x4ddf0b(441)]);
  let _0x531d1e = _0x5641ee[_0x4ddf0b(461)][_0x4ddf0b(540)](function (_0x326152) {
    const _0x2f9409 = _0x4ddf0b;
    return _0x326152[_0x2f9409(522)] === _0xf1fbf4[_0x2f9409(522)];
  });
  if (!_0x531d1e) {
    _0x26fbc5(null, {
      code: code.REQUEST_DATA_ERROR
    });
    return;
  }
  if (_0x1b3a7d[_0x4ddf0b(441)] !== _0x5cb130.getOwnerUid() && !_0x531d1e[_0x4ddf0b(479)]) {
    _0x26fbc5(null, {
      code: code[_0x4ddf0b(541)]
    });
    return;
  }
  (await _0x5cb130[_0x4ddf0b(539)](_0xf1fbf4.roomID)) ? _0x26fbc5(null, {
    code: code.OK,
    msg: {
      unionInfo: _0x5cb130[_0x4ddf0b(534)](_0x1b3a7d[_0x4ddf0b(441)]),
      roomList: _0x5cb130[_0x4ddf0b(484)]()
    }
  }) : _0x26fbc5(null, {
    code: code[_0x4ddf0b(482)],
    msg: {
      unionInfo: _0x5cb130[_0x4ddf0b(534)](_0x1b3a7d[_0x4ddf0b(441)]),
      roomList: _0x5cb130.getUnionRoomList()
    }
  });
};
Handler[a0_0x12b713(495)][a0_0x12b713(504)] = async function (_0x3a965d, _0x447763, _0x5ad186) {
  const _0x1450d3 = a0_0x12b713;
  if (!_0x447763[_0x1450d3(441)]) {
    _0x5ad186(null, {
      code: code[_0x1450d3(536)]
    });
    return;
  }
  if (!_0x3a965d[_0x1450d3(522)]) {
    _0x5ad186(null, {
      code: code.REQUEST_DATA_ERROR
    });
    return;
  }
  try {
    let _0x36c157 = await userDao[_0x1450d3(465)](_0x447763[_0x1450d3(441)]);
    let _0x75c807 = _0x36c157[_0x1450d3(461)][_0x1450d3(540)](function (_0x52010e) {
      const _0x454789 = _0x1450d3;
      return _0x52010e[_0x454789(522)] === _0x3a965d[_0x454789(522)];
    });
    if (!_0x75c807) {
      _0x5ad186(null, {
        code: code[_0x1450d3(452)]
      });
      return;
    }
    let _0x2d3bf0 = await unionManager.getUnion(_0x3a965d[_0x1450d3(522)]);
    if (_0x447763[_0x1450d3(441)] !== _0x2d3bf0[_0x1450d3(493)]() && !_0x75c807.manager) {
      _0x5ad186(null, {
        code: code[_0x1450d3(541)]
      });
      return;
    }
    let _0xa91562 = await _0x2d3bf0[_0x1450d3(490)](_0x3a965d[_0x1450d3(529)], _0x3a965d[_0x1450d3(499)], _0x3a965d.endTime, _0x3a965d.count, _0x3a965d[_0x1450d3(525)]);
    _0x5ad186(null, {
      code: _0xa91562
    });
  } catch (_0x2ab60d) {
    logger[_0x1450d3(446)](_0x2ab60d.stack);
    _0x5ad186(null, {
      code: 500
    });
  }
};
Handler[a0_0x12b713(495)].updateLotteryStatus = async function (_0x5aa554, _0x5f5d19, _0x45b470) {
  const _0x4c8a3c = a0_0x12b713;
  if (!_0x5f5d19[_0x4c8a3c(441)]) {
    _0x45b470(null, {
      code: code[_0x4c8a3c(536)]
    });
    return;
  }
  if (!_0x5aa554[_0x4c8a3c(522)]) {
    _0x45b470(null, {
      code: code.REQUEST_DATA_ERROR
    });
    return;
  }
  let _0x3bc2b5 = await userDao[_0x4c8a3c(465)](_0x5f5d19[_0x4c8a3c(441)]);
  let _0x4fba73 = _0x3bc2b5[_0x4c8a3c(461)].find(function (_0x511fae) {
    const _0x5a082a = _0x4c8a3c;
    return _0x511fae[_0x5a082a(522)] === _0x5aa554.unionID;
  });
  if (!_0x4fba73) {
    _0x45b470(null, {
      code: code[_0x4c8a3c(452)]
    });
    return;
  }
  let _0x2d0b83 = await unionManager[_0x4c8a3c(494)](_0x5aa554[_0x4c8a3c(522)]);
  if (_0x5f5d19.uid !== _0x2d0b83.getOwnerUid() && !_0x4fba73.manager) {
    _0x45b470(null, {
      code: code[_0x4c8a3c(541)]
    });
    return;
  }
  await _0x2d0b83[_0x4c8a3c(509)](_0x5aa554.isOpen);
  _0x45b470(null, {
    code: code.OK
  });
};
Handler[a0_0x12b713(495)].UpdatePumpWaterPattern = async function (_0x8db4ec, _0x33e12d, _0x5894fc) {
  const _0x40a0a3 = a0_0x12b713;
  if (!_0x33e12d[_0x40a0a3(441)]) {
    _0x5894fc(null, {
      code: code[_0x40a0a3(536)]
    });
    return;
  }
  if (!_0x8db4ec.unionID) {
    _0x5894fc(null, {
      code: code[_0x40a0a3(452)]
    });
    return;
  }
  let _0x41d0eb = await unionManager.getUnion(_0x8db4ec[_0x40a0a3(522)]);
  if (_0x33e12d[_0x40a0a3(441)] !== _0x41d0eb[_0x40a0a3(493)]()) {
    _0x5894fc(null, {
      code: code[_0x40a0a3(541)]
    });
    return;
  }
  await _0x41d0eb[_0x40a0a3(498)](_0x8db4ec[_0x40a0a3(500)]);
  _0x5894fc(null, {
    code: code.OK,
    msg: {
      unionInfo: _0x41d0eb.getUnionInfo(_0x33e12d.uid)
    }
  });
};
Handler[a0_0x12b713(495)][a0_0x12b713(502)] = async function (_0x55c5a3, _0x2e9b75, _0x46aaf6) {
  const _0x39748a = a0_0x12b713;
  if (!_0x2e9b75[_0x39748a(441)]) {
    _0x46aaf6(null, {
      code: code.INVALID_UERS
    });
    return;
  }
  if (!_0x55c5a3[_0x39748a(522)] || !_0x55c5a3[_0x39748a(517)]) {
    _0x46aaf6(null, {
      code: code.REQUEST_DATA_ERROR
    });
    return;
  }
  let _0x294cf5 = await unionManager[_0x39748a(494)](_0x55c5a3[_0x39748a(522)]);
  if (_0x2e9b75[_0x39748a(441)] !== _0x294cf5.getOwnerUid()) {
    _0x46aaf6(null, {
      code: code.PERMISSION_NOT_ENOUGH
    });
    return;
  }
  let _0x4a0faf = parseInt(_0x55c5a3[_0x39748a(517)]);
  await _0x294cf5[_0x39748a(502)](_0x4a0faf);
  _0x46aaf6(null, {
    code: code.OK,
    msg: {
      unionInfo: _0x294cf5.getUnionInfo(_0x2e9b75.uid),
      roomList: _0x294cf5.getUnionRoomList()
    }
  });
};
Handler.prototype[a0_0x12b713(514)] = async function (_0x8697aa, _0x47f4cc, _0x4904b0) {
  const _0x521747 = a0_0x12b713;
  if (!_0x47f4cc[_0x521747(441)]) {
    _0x4904b0(null, {
      code: code[_0x521747(536)]
    });
    return;
  }
  if (!_0x8697aa[_0x521747(522)]) {
    _0x4904b0(null, {
      code: code[_0x521747(452)]
    });
    return;
  }
  let _0xa528eb = await unionManager.getUnion(_0x8697aa[_0x521747(522)]);
  if (_0x47f4cc.uid !== _0xa528eb[_0x521747(493)]()) {
    _0x4904b0(null, {
      code: code[_0x521747(541)]
    });
    return;
  }
  await _0xa528eb.updateUnionTableSort(_0x8697aa.unionID, _0x8697aa.tableSort);
  _0x4904b0(null, {
    code: code.OK,
    msg: {
      tableSort: _0x8697aa[_0x521747(511)]
    }
  });
};
Handler[a0_0x12b713(495)][a0_0x12b713(449)] = async function (_0x1c1024, _0x44c51c, _0x5cce15) {
  const _0x3b666a = a0_0x12b713;
  if (!_0x44c51c[_0x3b666a(441)]) {
    _0x5cce15(null, {
      code: code[_0x3b666a(536)]
    });
    return;
  }
  if (!_0x1c1024[_0x3b666a(522)]) {
    _0x5cce15(null, {
      code: code.REQUEST_DATA_ERROR
    });
    return;
  }
  let _0x37ec86 = await userDao[_0x3b666a(465)](_0x44c51c[_0x3b666a(441)]);
  let _0x1fa71a = _0x37ec86.unionInfo[_0x3b666a(540)](function (_0x2d9896) {
    const _0x374ffc = _0x3b666a;
    return _0x2d9896[_0x374ffc(522)] === _0x1c1024.unionID;
  });
  if (!_0x1fa71a) {
    _0x5cce15(null, {
      code: code[_0x3b666a(452)]
    });
    return;
  }
  let _0x5b2955 = await unionManager[_0x3b666a(494)](_0x1c1024.unionID);
  if (_0x44c51c[_0x3b666a(441)] !== _0x5b2955[_0x3b666a(493)]() && !_0x1fa71a.manager) {
    _0x5cce15(null, {
      code: code[_0x3b666a(541)]
    });
    return;
  }
  (_0x1c1024[_0x3b666a(440)] == null || _0x1c1024.tableColor == undefined) && (_0x1c1024[_0x3b666a(440)] = 0);
  (_0x1c1024[_0x3b666a(454)] == null || _0x1c1024[_0x3b666a(454)] == undefined) && (_0x1c1024[_0x3b666a(454)] = 0);
  (_0x1c1024[_0x3b666a(527)] == null || _0x1c1024.tableStyle == undefined) && (_0x1c1024[_0x3b666a(527)] = 0);
  await _0x5b2955[_0x3b666a(449)](_0x1c1024[_0x3b666a(522)], _0x1c1024[_0x3b666a(440)], _0x1c1024[_0x3b666a(454)], _0x1c1024[_0x3b666a(527)]);
  _0x5cce15(null, {
    code: code.OK,
    msg: {
      tableColor: _0x1c1024[_0x3b666a(440)],
      unionBg: _0x1c1024[_0x3b666a(454)],
      tableStyle: _0x1c1024[_0x3b666a(527)]
    }
  });
};
Handler[a0_0x12b713(495)].deleteUnion = async function (_0x5a4be6, _0x284a07, _0x4983fb) {
  const _0x16017e = a0_0x12b713;
  if (!_0x284a07[_0x16017e(441)]) {
    _0x4983fb(null, {
      code: code[_0x16017e(536)]
    });
    return;
  }
  if (!_0x5a4be6[_0x16017e(522)]) {
    _0x4983fb(null, {
      code: code[_0x16017e(452)]
    });
    return;
  }
  let _0x251269 = await unionManager[_0x16017e(494)](_0x5a4be6.unionID);
  if (_0x284a07[_0x16017e(441)] !== _0x251269.getOwnerUid()) {
    _0x4983fb(null, {
      code: code[_0x16017e(541)]
    });
    return;
  }
  await commonDao[_0x16017e(528)](_0x16017e(451), {
    unionID: _0x5a4be6[_0x16017e(522)],
    isRobot: true
  }, {
    unionID: 0
  });
  await _0x251269[_0x16017e(496)]();
  _0x4983fb(null, {
    code: code.OK,
    msg: {
      unionInfo: _0x251269.getUnionInfo(_0x284a07[_0x16017e(441)])
    }
  });
};
Handler[a0_0x12b713(495)][a0_0x12b713(530)] = async function (_0x202f11, _0x8e9bff, _0x590e05) {
  const _0xf85c84 = a0_0x12b713;
  if (!_0x8e9bff.uid) {
    _0x590e05(null, {
      code: code.INVALID_UERS
    });
    return;
  }
  if (!_0x202f11.unionID || !_0x202f11[_0xf85c84(461)]) {
    _0x590e05(null, {
      code: code[_0xf85c84(452)]
    });
    return;
  }
  try {
    let _0x4c6c99 = await userDao.getUserDataByUid(_0x8e9bff[_0xf85c84(441)]);
    let _0xc69b14 = _0x4c6c99[_0xf85c84(461)][_0xf85c84(540)](function (_0x8036bf) {
      const _0x519ba7 = _0xf85c84;
      return _0x8036bf[_0x519ba7(522)] === _0x202f11.unionID;
    });
    if (!_0xc69b14) {
      _0x590e05(null, {
        code: code[_0xf85c84(452)]
      });
      return;
    }
    let _0x2314d0 = await unionManager[_0xf85c84(494)](_0x202f11[_0xf85c84(522)]);
    if (_0x8e9bff[_0xf85c84(441)] !== _0x2314d0.getOwnerUid() && !_0xc69b14[_0xf85c84(479)]) {
      _0x590e05(null, {
        code: code.PERMISSION_NOT_ENOUGH
      });
      return;
    }
    let _0x2c8a2f = {
      resultLotteryInfo: {},
      hongBaoInfo: {}
    };
    _0x2c8a2f[_0xf85c84(517)] = _0x202f11.unionInfo.unionFee || 0;
    _0x2c8a2f[_0xf85c84(505)] = _0x202f11.unionInfo[_0xf85c84(489)] || false;
    _0x2c8a2f.resultLotteryInfo[_0xf85c84(529)] = _0x202f11[_0xf85c84(461)][_0xf85c84(523)] || false;
    _0x2c8a2f[_0xf85c84(518)][_0xf85c84(529)] = _0x202f11.unionInfo[_0xf85c84(503)] || false;
    _0x2c8a2f[_0xf85c84(518)][_0xf85c84(499)] = _0x202f11[_0xf85c84(461)].hbStart || 0;
    _0x2c8a2f[_0xf85c84(518)].endTime = _0x202f11[_0xf85c84(461)][_0xf85c84(488)] || 0;
    _0x2c8a2f[_0xf85c84(518)][_0xf85c84(501)] = _0x202f11.unionInfo[_0xf85c84(472)] || 0;
    _0x2c8a2f[_0xf85c84(518)][_0xf85c84(525)] = _0x202f11[_0xf85c84(461)].hbTotal || 0;
    _0x2c8a2f.notice = _0x202f11[_0xf85c84(461)][_0xf85c84(507)] || "";
    _0x2c8a2f[_0xf85c84(478)] = _0x202f11[_0xf85c84(461)][_0xf85c84(478)] || 0;
    _0x2c8a2f[_0xf85c84(463)] = _0x202f11.unionInfo[_0xf85c84(463)];
    _0x2c8a2f[_0xf85c84(456)] = _0x202f11.unionInfo.isInvite;
    _0x2c8a2f.fullTableLimit = _0x202f11[_0xf85c84(461)].fullTableLimit || 0;
    _0x2c8a2f[_0xf85c84(444)] = _0x202f11[_0xf85c84(461)][_0xf85c84(444)] || 0;
    _0x2c8a2f[_0xf85c84(485)] = _0x202f11.unionInfo[_0xf85c84(485)] || false;
    _0x2c8a2f[_0xf85c84(538)] = _0x202f11[_0xf85c84(461)][_0xf85c84(538)] || false;
    _0x2c8a2f[_0xf85c84(513)] = _0x202f11[_0xf85c84(461)].propsLimit || false;
    _0x2c8a2f[_0xf85c84(531)] = _0x202f11[_0xf85c84(461)][_0xf85c84(531)] || 0;
    _0x2c8a2f[_0xf85c84(462)] = _0x202f11.unionInfo[_0xf85c84(462)] || 0;
    _0x2c8a2f[_0xf85c84(515)] = _0x202f11.unionInfo[_0xf85c84(515)] || false;
    _0x2c8a2f[_0xf85c84(486)] = _0x202f11.unionInfo[_0xf85c84(486)] || 0;
    _0x2c8a2f[_0xf85c84(459)] = _0x202f11.unionInfo[_0xf85c84(459)] || false;
    _0x2c8a2f[_0xf85c84(511)] = _0x202f11[_0xf85c84(461)][_0xf85c84(511)] || 0;
    _0x2c8a2f.canNegativeScore = _0x202f11[_0xf85c84(461)][_0xf85c84(516)] || false;
    let _0x1fdc44 = await _0x2314d0[_0xf85c84(530)](_0x2c8a2f);
    _0x590e05(null, {
      code: _0x1fdc44,
      msg: {
        unionInfo: _0x2314d0[_0xf85c84(534)](_0x8e9bff[_0xf85c84(441)])
      }
    });
  } catch (_0x147a00) {
    logger[_0xf85c84(446)](_0x147a00[_0xf85c84(532)]);
    _0x590e05(null, {
      code: 500
    });
  }
};