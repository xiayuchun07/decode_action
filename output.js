
function a0_0xd8f7(_0x47e946, _0x13bbef) {
  const _0x4396a3 = a0_0x5acb();
  a0_0xd8f7 = function (_0x2c2a08, _0x19d4e2) {
    _0x2c2a08 = _0x2c2a08 - 194;
    let _0x555894 = _0x4396a3[_0x2c2a08];
    return _0x555894;
  };
  return a0_0xd8f7(_0x47e946, _0x13bbef);
}
function a0_0x5acb() {
  const _0x310809 = ["[getHallNotice]", "count", "stack", "../../../services/redisService", "format", "REQUEST_DATA_ERROR", "unLock", "contact", "2187945hmdWnm", "password", "prototype", "1120343mzteYZ", "note", "589476cZvBzy", "authSmsCode", "getUserData", "frontendId", "phone", "updateUserDataNotify", "handler", "account", "INVALID_UERS", "[updateUserInfo]  msg  = ", "now", "number", "stringify", "bindAccount", "findOneData", "../../../dao/userDao", "94MfwNSH", "updateUserDataByUid", "5IibvlV", "searchUserData", "nickname", "1392294IdoHVS", "[resetPassword]", "getLogger", "transferGold", "2304621uZvEYT", "Add-Gold", "21bIMssM", "location", "NOT_FIND_USER", "NOT_ENOUGH_GOLD", "[note]", "10ZEBBke", "avatar", "getUserDataByUid", "error", "accountModel", "[bindPhone]", "sex", "safeGold", "adminGrantRecordModel", "bindAccountNew", "updateUserAddress", "updateData", "safeBoxOperation", "18784sbckRg", "4049ryOOjD", "ACCOUNT_EXIST", "SMS_CODE_ERROR", "avater", "isLocked", "message", "../../../constant/code", "idCard", "8YLFBQn", "avatarTemp", "bindPhone", "userNoteModel", "updateUserInfo", "address", "uid", "pomelo", "gold", "name", "smsCode", "[searchByPhone]", "json", "createData", "NOT_FIND_BIND_PHONE"];
  a0_0x5acb = function () {
    return _0x310809;
  };
  return a0_0x5acb();
}
const a0_0x1c41b0 = a0_0xd8f7;
(function (_0x20b29c, _0x5bb9eb) {
  const _0x4ad84d = a0_0xd8f7;
  const _0x6fd573 = _0x20b29c();
  while (true) {
    try {
      const _0x1e98c5 = parseInt(_0x4ad84d(194)) / 1 * (parseInt(_0x4ad84d(246)) / 2) + parseInt(_0x4ad84d(257)) / 3 * (parseInt(_0x4ad84d(275)) / 4) + parseInt(_0x4ad84d(248)) / 5 * (-parseInt(_0x4ad84d(251)) / 6) + -parseInt(_0x4ad84d(228)) / 7 * (-parseInt(_0x4ad84d(202)) / 8) + -parseInt(_0x4ad84d(225)) / 9 + parseInt(_0x4ad84d(262)) / 10 * (parseInt(_0x4ad84d(255)) / 11) + parseInt(_0x4ad84d(230)) / 12;
      if (_0x1e98c5 === _0x5bb9eb) {
        break;
      } else {
        _0x6fd573.push(_0x6fd573.shift());
      }
    } catch (_0x259a06) {
      _0x6fd573.push(_0x6fd573.shift());
    }
  }
})(a0_0x5acb, 166704);
let code = require(a0_0x1c41b0(200));
let userInfoServices = require("../../../services/userInfoServices");
let authServices = require("../../../services/authServices");
let redisService = require(a0_0x1c41b0(220));
let pomelo = require(a0_0x1c41b0(209));
let commonDao = require("../../../dao/commonDao");
let userDao = require(a0_0x1c41b0(245));
let logger = require("pomelo-logger")[a0_0x1c41b0(253)](a0_0x1c41b0(236));
let moment = require("moment");
module.exports = function (_0x41b3fe) {
  return new Handler(_0x41b3fe);
};
let Handler = function (_0x4a1f5d) {
  this.app = _0x4a1f5d;
};
Handler[a0_0x1c41b0(227)][a0_0x1c41b0(254)] = async function (_0x152e9f, _0x3f098d, _0x2c8e62) {
  const _0x1068ad = a0_0x1c41b0;
  let _0x48f3f1 = _0x3f098d[_0x1068ad(208)] + _0x1068ad(256);
  let _0x530ca4 = redisService[_0x1068ad(198)](_0x48f3f1, 3);
  if (_0x530ca4) {
    _0x2c8e62(null, {
      code: code.REQUEST_DATA_ERROR
    });
    return;
  }
  if (!_0x3f098d[_0x1068ad(208)] || !_0x152e9f[_0x1068ad(208)]) {
    _0x2c8e62(null, {
      code: code[_0x1068ad(238)]
    });
    redisService[_0x1068ad(223)](_0x48f3f1);
    return;
  }
  if (_0x3f098d.uid == _0x152e9f[_0x1068ad(208)]) {
    _0x2c8e62(null, {
      code: code[_0x1068ad(238)]
    });
    redisService.unLock(_0x48f3f1);
    return;
  }
  _0x152e9f[_0x1068ad(218)] = parseInt(_0x152e9f[_0x1068ad(218)]);
  if (!_0x152e9f[_0x1068ad(218)] || typeof _0x152e9f[_0x1068ad(218)] !== "number" || _0x152e9f[_0x1068ad(218)] <= 0) {
    _0x2c8e62(null, {
      code: code[_0x1068ad(222)]
    });
    redisService[_0x1068ad(223)](_0x48f3f1);
    return;
  }
  let _0x34e1bf = await userDao[_0x1068ad(264)](_0x152e9f[_0x1068ad(208)]);
  if (!_0x34e1bf) {
    _0x2c8e62(null, {
      code: code[_0x1068ad(238)]
    });
    redisService[_0x1068ad(223)](_0x48f3f1);
    return;
  }
  let _0x1ddce8 = await userDao.getUserDataByUid(_0x3f098d.uid);
  if (!_0x1ddce8) {
    _0x2c8e62(null, {
      code: code[_0x1068ad(238)]
    });
    redisService[_0x1068ad(223)](_0x48f3f1);
    return;
  }
  if (_0x1ddce8[_0x1068ad(210)] - _0x152e9f[_0x1068ad(218)] < 0) {
    _0x2c8e62(null, {
      code: code[_0x1068ad(260)]
    });
    redisService[_0x1068ad(223)](_0x48f3f1);
    return;
  }
  let _0x372bf3 = {
    $inc: {
      gold: -_0x152e9f[_0x1068ad(218)]
    }
  };
  let _0x4ebc8b = await userDao[_0x1068ad(247)](_0x3f098d[_0x1068ad(208)], _0x372bf3);
  let _0x2436f9 = {
    $inc: {
      gold: _0x152e9f[_0x1068ad(218)]
    }
  };
  let _0x24910a = await userDao[_0x1068ad(247)](_0x152e9f[_0x1068ad(208)], _0x2436f9);
  await userInfoServices.updateUserDataNotify(_0x3f098d[_0x1068ad(208)], _0x4ebc8b[_0x1068ad(233)], {
    gold: _0x4ebc8b[_0x1068ad(210)]
  });
  await userInfoServices.updateUserDataNotify(_0x152e9f[_0x1068ad(208)], _0x24910a.frontendId, {
    gold: _0x24910a.gold
  });
  let _0x441b8b = {
    uid: _0x1ddce8[_0x1068ad(208)],
    avatar: _0x1ddce8[_0x1068ad(263)],
    nickname: _0x1ddce8[_0x1068ad(250)],
    gainUid: _0x34e1bf.uid,
    gainName: _0x34e1bf[_0x1068ad(250)],
    gainAvatar: _0x34e1bf[_0x1068ad(263)],
    type: "gold",
    count: _0x152e9f.count,
    createTime: Date[_0x1068ad(240)]()
  };
  await commonDao[_0x1068ad(215)](_0x1068ad(270), _0x441b8b);
  redisService.unLock(_0x48f3f1);
  _0x2c8e62(null, {
    code: code.OK
  });
};
Handler[a0_0x1c41b0(227)][a0_0x1c41b0(274)] = async function (_0x13b773, _0x330497, _0xaba24a) {
  const _0x3a2754 = a0_0x1c41b0;
  try {
    if (!_0x330497[_0x3a2754(208)]) {
      _0xaba24a(null, {
        code: code[_0x3a2754(238)]
      });
      return;
    }
    if (!_0x13b773.count || typeof _0x13b773.count !== _0x3a2754(241) || _0x13b773[_0x3a2754(218)] === 0) {
      _0xaba24a(null, {
        code: code[_0x3a2754(222)]
      });
      return;
    }
    let _0x2b2fab = await userDao[_0x3a2754(264)](_0x330497[_0x3a2754(208)]);
    if (!_0x2b2fab) {
      _0xaba24a(null, {
        code: code[_0x3a2754(238)]
      });
      return;
    }
    if (_0x13b773[_0x3a2754(218)] > 0) {
      if (_0x2b2fab[_0x3a2754(210)] < _0x13b773.count) {
        _0xaba24a(null, {
          code: code.REQUEST_DATA_ERROR
        });
        return;
      }
    } else {
      if (_0x2b2fab[_0x3a2754(269)] < _0x13b773[_0x3a2754(218)] * -1) {
        _0xaba24a(null, {
          code: code[_0x3a2754(222)]
        });
        return;
      }
    }
    let _0x1a81e2 = {
      $inc: {
        gold: -_0x13b773[_0x3a2754(218)],
        safeGold: _0x13b773.count
      }
    };
    let _0x1d7e12 = await userDao[_0x3a2754(247)](_0x330497[_0x3a2754(208)], _0x1a81e2);
    if (_0x1d7e12[_0x3a2754(210)] < 0 || _0x1d7e12.safeGold < 0) {
      _0x1a81e2 = {
        gold: _0x13b773[_0x3a2754(218)],
        safeGold: -_0x13b773[_0x3a2754(218)]
      };
      await userDao[_0x3a2754(247)](_0x330497.uid, _0x1a81e2);
      _0xaba24a(null, {
        code: code.REQUEST_DATA_ERROR
      });
      return;
    }
    await userInfoServices[_0x3a2754(235)](_0x330497[_0x3a2754(208)], _0x1d7e12.frontendId, {
      gold: _0x1d7e12[_0x3a2754(210)],
      safeGold: _0x1d7e12.safeGold
    });
    _0xaba24a(null, {
      code: code.OK
    });
  } catch (_0x132cae) {
    logger[_0x3a2754(265)]("[safeBoxOperation]" + _0x132cae[_0x3a2754(219)]);
    _0xaba24a(null, {
      code: 500
    });
  }
};
Handler.prototype[a0_0x1c41b0(204)] = async function (_0x384763, _0x4f72ff, _0x290058) {
  const _0x4bbb05 = a0_0x1c41b0;
  try {
    if (!_0x4f72ff[_0x4bbb05(208)]) {
      _0x290058(null, {
        code: code[_0x4bbb05(238)]
      });
      return;
    }
    if (!_0x384763[_0x4bbb05(234)] || !_0x384763[_0x4bbb05(212)]) {
      _0x290058(null, {
        code: code.REQUEST_DATA_ERROR
      });
      return;
    }
    if (!_0x384763.smsCode) {
      _0x290058(null, {
        code: code[_0x4bbb05(196)]
      });
      return;
    } else {
      if (!(await authServices[_0x4bbb05(231)](_0x384763[_0x4bbb05(234)], _0x384763[_0x4bbb05(212)]))) {
        _0x290058(null, {
          code: code.SMS_CODE_ERROR
        });
        return;
      }
    }
    let _0x1fb7b0 = await commonDao[_0x4bbb05(244)](_0x4bbb05(266), {
      phoneAccount: _0x384763[_0x4bbb05(234)]
    });
    if (!!_0x1fb7b0) {
      _0x290058(null, {
        code: code.PHONE_ALREADY_BIND
      });
      return;
    }
    await commonDao[_0x4bbb05(273)](_0x4bbb05(266), {
      uid: parseInt(_0x4f72ff.uid)
    }, {
      phoneAccount: _0x384763.phone
    });
    await userDao.updateUserDataByUid(_0x4f72ff[_0x4bbb05(208)], {
      mobilePhone: _0x384763[_0x4bbb05(234)]
    });
    _0x290058(null, {
      code: code.OK,
      updateUserData: {
        mobilePhone: _0x384763[_0x4bbb05(234)]
      }
    });
  } catch (_0x1808fa) {
    logger[_0x4bbb05(265)](_0x4bbb05(267) + _0x1808fa[_0x4bbb05(219)]);
    _0x290058(null, {
      code: 500
    });
  }
};
Handler[a0_0x1c41b0(227)].authRealName = async function (_0x47c560, _0x495328, _0x40c469) {
  const _0x49804c = a0_0x1c41b0;
  try {
    if (!_0x495328.uid) {
      _0x40c469(null, {
        code: code[_0x49804c(238)]
      });
      return;
    }
    if (!_0x47c560[_0x49804c(211)] || !_0x47c560[_0x49804c(201)]) {
      _0x40c469(null, {
        code: code[_0x49804c(222)]
      });
      return;
    }
    let _0x5647ec = JSON[_0x49804c(242)]({
      name: _0x47c560[_0x49804c(211)],
      idCard: _0x47c560[_0x49804c(201)]
    });
    await userDao[_0x49804c(247)](_0x495328[_0x49804c(208)], {
      realName: _0x5647ec
    });
    _0x40c469(null, {
      code: code.OK,
      updateUserData: {
        realName: _0x5647ec
      }
    });
  } catch (_0x377568) {
    logger.error("[authRealName]" + _0x377568[_0x49804c(219)]);
    _0x40c469(null, {
      code: 500
    });
  }
};
Handler[a0_0x1c41b0(227)][a0_0x1c41b0(206)] = async function (_0x52c6a0, _0x376138, _0x50b934) {
  const _0x1f2637 = a0_0x1c41b0;
  try {
    logger[_0x1f2637(265)](_0x1f2637(239) + JSON.stringify(_0x52c6a0));
    if (!_0x376138[_0x1f2637(208)]) {
      _0x50b934(null, {
        code: code[_0x1f2637(238)]
      });
      return;
    }
    let _0xdb91f6 = {};
    _0x52c6a0[_0x1f2637(197)] && (_0xdb91f6[_0x1f2637(263)] = _0x52c6a0[_0x1f2637(197)]);
    _0x52c6a0[_0x1f2637(250)] && (_0xdb91f6[_0x1f2637(250)] = _0x52c6a0.nickname);
    _0x52c6a0[_0x1f2637(268)] != undefined && (_0xdb91f6.sex = _0x52c6a0[_0x1f2637(268)]);
    await userDao.updateUserDataByUid(_0x376138[_0x1f2637(208)], _0xdb91f6);
    let _0x3a3b83 = await userDao[_0x1f2637(264)](_0x376138[_0x1f2637(208)]);
    await userInfoServices[_0x1f2637(235)](_0x376138[_0x1f2637(208)], _0x3a3b83[_0x1f2637(233)], _0xdb91f6);
    _0x50b934(null, {
      code: code.OK,
      updateUserData: _0xdb91f6
    });
  } catch (_0x40284b) {
    logger[_0x1f2637(265)]("[updateUserInfo]" + _0x40284b[_0x1f2637(219)]);
    _0x50b934(null, {
      code: 500
    });
  }
};
Handler[a0_0x1c41b0(227)][a0_0x1c41b0(272)] = async function (_0x8a1d6d, _0x5e1977, _0x28a36c) {
  const _0xaca58d = a0_0x1c41b0;
  try {
    if (!_0x5e1977[_0xaca58d(208)]) {
      _0x28a36c(null, {
        code: code[_0xaca58d(238)]
      });
      return;
    }
    await userDao[_0xaca58d(247)](_0x5e1977[_0xaca58d(208)], {
      address: _0x8a1d6d.address,
      location: _0x8a1d6d[_0xaca58d(258)]
    });
    _0x28a36c(null, {
      code: code.OK,
      updateUserData: {
        address: _0x8a1d6d[_0xaca58d(207)],
        location: _0x8a1d6d[_0xaca58d(258)]
      }
    });
  } catch (_0x13b390) {
    logger[_0xaca58d(265)]("[updateUserAddress]" + _0x13b390.stack);
    _0x28a36c(null, {
      code: 500
    });
  }
};
Handler[a0_0x1c41b0(227)].searchByPhone = async function (_0x515c66, _0x7e08ff, _0xd57823) {
  const _0x330e84 = a0_0x1c41b0;
  try {
    if (!_0x7e08ff[_0x330e84(208)]) {
      _0xd57823(null, {
        code: code[_0x330e84(238)]
      });
      return;
    }
    if (!_0x515c66[_0x330e84(234)]) {
      _0xd57823(null, {
        code: code.REQUEST_DATA_ERROR
      });
      return;
    }
    let _0x554de0 = await userDao[_0x330e84(232)]({
      mobilePhone: _0x515c66[_0x330e84(234)]
    });
    !_0x554de0 ? _0xd57823(null, {
      code: code[_0x330e84(216)]
    }) : _0xd57823(null, {
      code: code.OK,
      msg: {
        userData: _0x554de0
      }
    });
  } catch (_0x3fb74b) {
    logger[_0x330e84(265)](_0x330e84(213) + _0x3fb74b[_0x330e84(219)]);
    _0xd57823(null, {
      code: 500
    });
  }
};
Handler[a0_0x1c41b0(227)][a0_0x1c41b0(249)] = async function (_0x4e92e1, _0x29494e, _0x239a31) {
  const _0x6726f = a0_0x1c41b0;
  try {
    if (!_0x29494e.uid) {
      _0x239a31(null, {
        code: code[_0x6726f(238)]
      });
      return;
    }
    if (!_0x4e92e1[_0x6726f(208)]) {
      _0x239a31(null, {
        code: code[_0x6726f(222)]
      });
      return;
    }
    let _0x13d5fd = await userDao[_0x6726f(232)]({
      uid: _0x4e92e1[_0x6726f(208)]
    });
    !_0x13d5fd ? _0x239a31(null, {
      code: code[_0x6726f(259)]
    }) : _0x239a31(null, {
      code: code.OK,
      msg: {
        userData: _0x13d5fd
      }
    });
  } catch (_0x532260) {
    logger.error("[searchUserData]" + _0x532260[_0x6726f(219)]);
    _0x239a31(null, {
      code: 500
    });
  }
};
Handler[a0_0x1c41b0(227)].getHallNotice = async function (_0xa1b21c, _0x1546fb, _0x504cfe) {
  const _0x95f1d6 = a0_0x1c41b0;
  try {
    _0x504cfe(null, {
      code: code.OK,
      msg: {
        notice: []
      }
    });
    return;
  } catch (_0x2acf32) {
    logger[_0x95f1d6(265)](_0x95f1d6(217) + _0x2acf32[_0x95f1d6(219)]);
    _0x504cfe(null, {
      code: 500
    });
  }
};
Handler[a0_0x1c41b0(227)].resetPassword = async function (_0x347a86, _0x9e0d7, _0x1f7aa8) {
  const _0x62eb5 = a0_0x1c41b0;
  try {
    if (!_0x9e0d7[_0x62eb5(208)]) {
      _0x1f7aa8(null, {
        code: code[_0x62eb5(238)]
      });
      return;
    }
    if (!_0x347a86[_0x62eb5(237)] || !_0x347a86[_0x62eb5(226)] || !_0x347a86.smsCode) {
      _0x1f7aa8(null, {
        code: code[_0x62eb5(222)]
      });
      return;
    }
    if (!(await authServices[_0x62eb5(231)](_0x347a86[_0x62eb5(237)], _0x347a86[_0x62eb5(212)]))) {
      res[_0x62eb5(214)]({
        code: code.SMS_CODE_ERROR
      });
      return;
    }
    await commonDao[_0x62eb5(273)](_0x62eb5(266), {
      phoneAccount: _0x347a86[_0x62eb5(237)],
      uid: parseInt(_0x9e0d7.uid)
    }, {
      password: _0x347a86[_0x62eb5(226)]
    });
    await userDao[_0x62eb5(247)](_0x9e0d7[_0x62eb5(208)], {
      password: _0x347a86[_0x62eb5(226)]
    });
    _0x1f7aa8(null, {
      code: code.OK
    });
  } catch (_0x28f978) {
    logger.error(_0x62eb5(252) + _0x28f978[_0x62eb5(219)]);
    _0x1f7aa8(null, {
      code: 500
    });
  }
};
Handler.prototype[a0_0x1c41b0(271)] = async function (_0x332c80, _0x45f648, _0x1602c5) {
  const _0x4e1e23 = a0_0x1c41b0;
  try {
    if (!_0x45f648[_0x4e1e23(208)]) {
      _0x1602c5(null, {
        code: code.INVALID_UERS
      });
      return;
    }
    if (!_0x332c80[_0x4e1e23(237)] || !_0x332c80[_0x4e1e23(226)] || !_0x332c80.smsCode) {
      _0x1602c5(null, {
        code: code[_0x4e1e23(222)]
      });
      return;
    }
    if (!(await authServices.authSmsCode(_0x332c80.account, _0x332c80[_0x4e1e23(212)]))) {
      res[_0x4e1e23(214)]({
        code: code.SMS_CODE_ERROR
      });
      return;
    }
    let _0x3f6f94 = await commonDao[_0x4e1e23(244)](_0x4e1e23(266), {
      phoneAccount: _0x332c80.account
    });
    if (!!_0x3f6f94) {
      _0x1602c5(null, {
        code: code[_0x4e1e23(195)]
      });
      return;
    }
    await commonDao.updateData("accountModel", {
      uid: parseInt(_0x45f648[_0x4e1e23(208)])
    }, {
      phoneAccount: _0x332c80[_0x4e1e23(237)],
      password: _0x332c80.password
    });
    await userDao[_0x4e1e23(247)](_0x45f648.uid, {
      account: _0x332c80[_0x4e1e23(237)],
      password: _0x332c80[_0x4e1e23(226)],
      isBind: true
    });
    let _0x5e0248 = await userDao.getUserDataByUid(_0x45f648[_0x4e1e23(208)]);
    await userInfoServices[_0x4e1e23(235)](_0x45f648[_0x4e1e23(208)], _0x5e0248[_0x4e1e23(233)], {
      isBind: true,
      account: _0x332c80[_0x4e1e23(237)]
    });
    _0x1602c5(null, {
      code: code.OK,
      updateUserData: {
        account: _0x332c80[_0x4e1e23(237)]
      }
    });
  } catch (_0x26bb9f) {
    logger[_0x4e1e23(265)]("[bindAccount]" + _0x26bb9f.stack);
    _0x1602c5(null, {
      code: 500
    });
  }
};
Handler[a0_0x1c41b0(227)][a0_0x1c41b0(243)] = async function (_0x1bc77f, _0x500f17, _0x1d9c5e) {
  const _0x3c6e50 = a0_0x1c41b0;
  try {
    if (!_0x500f17[_0x3c6e50(208)]) {
      _0x1d9c5e(null, {
        code: code[_0x3c6e50(238)]
      });
      return;
    }
    if (!_0x1bc77f[_0x3c6e50(237)] || !_0x1bc77f[_0x3c6e50(226)]) {
      _0x1d9c5e(null, {
        code: code[_0x3c6e50(222)]
      });
      return;
    }
    let _0x45aa69 = await commonDao.findOneData("accountModel", {
      account: _0x1bc77f.account
    });
    if (!!_0x45aa69) {
      _0x1d9c5e(null, {
        code: code[_0x3c6e50(195)]
      });
      return;
    }
    await commonDao[_0x3c6e50(273)]("accountModel", {
      uid: parseInt(_0x500f17[_0x3c6e50(208)])
    }, {
      account: _0x1bc77f[_0x3c6e50(237)],
      password: _0x1bc77f.password
    });
    await userDao.updateUserDataByUid(_0x500f17[_0x3c6e50(208)], {
      account: _0x1bc77f[_0x3c6e50(237)],
      password: _0x1bc77f.password,
      isBind: true,
      account: _0x1bc77f.account
    });
    let _0x1d28c6 = await userDao[_0x3c6e50(264)](_0x500f17[_0x3c6e50(208)]);
    await userInfoServices[_0x3c6e50(235)](_0x500f17[_0x3c6e50(208)], _0x1d28c6[_0x3c6e50(233)], {
      isBind: true,
      account: _0x1bc77f.account
    });
    _0x1d9c5e(null, {
      code: code.OK,
      updateUserData: {
        account: _0x1bc77f[_0x3c6e50(237)]
      }
    });
  } catch (_0x197436) {
    logger.error("[bindAccount]" + _0x197436.stack);
    _0x1d9c5e(null, {
      code: 500
    });
  }
};
Handler[a0_0x1c41b0(227)][a0_0x1c41b0(229)] = async function (_0x19f333, _0x89fa52, _0x4c6cfb) {
  const _0x2dbbcd = a0_0x1c41b0;
  try {
    if (!_0x89fa52[_0x2dbbcd(208)]) {
      _0x4c6cfb(null, {
        code: code.INVALID_UERS
      });
      return;
    }
    if (!_0x19f333[_0x2dbbcd(199)] || !_0x19f333[_0x2dbbcd(250)]) {
      _0x4c6cfb(null, {
        code: code[_0x2dbbcd(222)]
      });
      return;
    }
    let _0x2ae854 = {
      uid: _0x89fa52[_0x2dbbcd(208)],
      message: _0x19f333[_0x2dbbcd(199)],
      contact: _0x19f333[_0x2dbbcd(224)] || "",
      nickname: _0x19f333[_0x2dbbcd(250)],
      createTime: moment()[_0x2dbbcd(221)]("x")
    };
    await commonDao[_0x2dbbcd(215)](_0x2dbbcd(205), _0x2ae854);
    _0x4c6cfb(null, {
      code: code.OK
    });
  } catch (_0x4aeb61) {
    logger.error(_0x2dbbcd(261) + _0x4aeb61[_0x2dbbcd(219)]);
    _0x4c6cfb(null, {
      code: 500
    });
  }
};