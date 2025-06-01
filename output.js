
function a0_0x4a0b() {
  const _0x1a22d1 = ["../constant/code", "updateUserData", "all", "catch", "error", "8qarJAR", "stringify", "saveData", "24JvGXRT", "updateData", "getUserDataByUid", "1195245WuZKhh", "./commonDao", "3323820rhOipf", "updateUserDataArr", "stack", "1953656CxKEDo", "unlockUserData", "get", "findOneAndUpdateEx", "5618JEVUgI", "pomelo-logger", "554665VxosHg", "339420sjdyvE", "pomelo", "_doc", "app", "2183405SngbKS", "271IJKcFJ", "USER_MODEL", "userModel", "updateUserDataByUid", "getUserData", "syncLock", "../services/userInfoServices", "638yrjXdH", "matchData", "updateUserDataAndUnlockByUid", "hgetall", "getLogger", "updateUserDataAndUnlock", "length", "findOneData"];
  a0_0x4a0b = function () {
    return _0x1a22d1;
  };
  return a0_0x4a0b();
}
const a0_0x59949c = a0_0x1f63;
(function (_0x3f0bec, _0x181620) {
  const _0x27eedf = a0_0x1f63;
  const _0x15c71a = _0x3f0bec();
  while (true) {
    try {
      const _0x260602 = parseInt(_0x27eedf(482)) / 1 * (-parseInt(_0x27eedf(474)) / 2) + -parseInt(_0x27eedf(510)) / 3 + parseInt(_0x27eedf(513)) / 4 + parseInt(_0x27eedf(476)) / 5 * (parseInt(_0x27eedf(505)) / 6) + -parseInt(_0x27eedf(481)) / 7 + parseInt(_0x27eedf(502)) / 8 * (-parseInt(_0x27eedf(508)) / 9) + parseInt(_0x27eedf(477)) / 10 * (parseInt(_0x27eedf(489)) / 11);
      if (_0x260602 === _0x181620) {
        break;
      } else {
        _0x15c71a.push(_0x15c71a.shift());
      }
    } catch (_0x53567b) {
      _0x15c71a.push(_0x15c71a.shift());
    }
  }
})(a0_0x4a0b, 586883);
function a0_0x1f63(_0x1388d3, _0x371616) {
  const _0x4640ed = a0_0x4a0b();
  a0_0x1f63 = function (_0x35d748, _0x5e2965) {
    _0x35d748 = _0x35d748 - 473;
    let _0x549fb1 = _0x4640ed[_0x35d748];
    return _0x549fb1;
  };
  return a0_0x1f63(_0x1388d3, _0x371616);
}
let pomelo = require("pomelo");
let utils = require("../util/utils");
let code = require(a0_0x59949c(497));
let commonDao = require(a0_0x59949c(509));
let logger = require(a0_0x59949c(475))[a0_0x59949c(493)](a0_0x59949c(478));
let userInfoServices = require(a0_0x59949c(488));
let dao = module.exports;
let USER_CACHE_DATA_HEAD = a0_0x59949c(483);
dao[a0_0x59949c(507)] = async function (_0x17ceca) {
  const _0x3ba65a = a0_0x59949c;
  return await commonDao[_0x3ba65a(496)](_0x3ba65a(484), {
    uid: _0x17ceca
  });
};
dao[a0_0x59949c(486)] = async function (_0x2123bb) {
  const _0x461f3d = a0_0x59949c;
  return await commonDao[_0x461f3d(496)](_0x461f3d(484), _0x2123bb);
};
dao.getUnlockUserDataAndLock = async function (_0x1f942d) {
  const _0xd2103d = a0_0x59949c;
  return await commonDao.findOneAndUpdateEx(_0xd2103d(484), {
    uid: _0x1f942d,
    syncLock: 0
  }, {
    syncLock: 1
  }, {
    new: true
  });
};
dao.loadUserDataByUid = async function (_0x52b217) {
  const _0x152074 = a0_0x59949c;
  let _0x5c8f2d = pomelo[_0x152074(480)][_0x152074(515)]("redisClient");
  let _0x51af7f = await _0x5c8f2d[_0x152074(492)](USER_CACHE_DATA_HEAD + _0x52b217);
  if (!!_0x51af7f) {
    return userInfoServices.convertRedisUserDataToMongoUserData(_0x51af7f);
  } else {
    let _0x3c8f99 = await commonDao[_0x152074(496)](_0x152074(484), {
      uid: _0x52b217
    });
    return !_0x3c8f99 ? null : (await _0x5c8f2d.hmset(USER_CACHE_DATA_HEAD + _0x52b217, userInfoServices.convertMongoUserDataToRedisUserData(_0x3c8f99[_0x152074(479)])), _0x3c8f99._doc);
  }
};
dao[a0_0x59949c(485)] = async function (_0x5cb284, _0x1ff04f) {
  const _0x14cfd2 = a0_0x59949c;
  return await commonDao[_0x14cfd2(473)]("userModel", {
    uid: _0x5cb284
  }, _0x1ff04f, {
    new: true
  });
};
dao[a0_0x59949c(498)] = async function (_0x3d3770, _0x184917) {
  return await commonDao.findOneAndUpdateEx("userModel", _0x3d3770, _0x184917, {
    new: true
  });
};
dao[a0_0x59949c(491)] = async function (_0x1c160e, _0x495e02) {
  const _0x4933a2 = a0_0x59949c;
  _0x495e02[_0x4933a2(487)] = 0;
  return await commonDao[_0x4933a2(473)](_0x4933a2(484), {
    uid: _0x1c160e
  }, _0x495e02, {
    new: true
  });
};
dao[a0_0x59949c(494)] = async function (_0x242b69, _0x5c59e0) {
  const _0x3f106d = a0_0x59949c;
  _0x5c59e0.syncLock = 0;
  return await commonDao[_0x3f106d(473)](_0x3f106d(484), _0x242b69, _0x5c59e0, {
    new: true
  });
};
dao[a0_0x59949c(514)] = async function (_0xb03ce3) {
  const _0xebf64e = a0_0x59949c;
  await commonDao[_0xebf64e(506)](_0xebf64e(484), {
    uid: _0xb03ce3
  }, {
    syncLock: 0
  });
};
dao.updateUserDataArr = async function (_0x26dfc6) {
  const _0xb18b4a = a0_0x59949c;
  let _0xbcf523 = [];
  let _0x483b67 = function (_0x10186d) {
    _0xbcf523.push(new Promise(async function (_0x4671f5) {
      const _0x4d1fe3 = a0_0x1f63;
      try {
        let _0x590fa0 = await dao.updateUserData(_0x10186d[_0x4d1fe3(490)], _0x10186d[_0x4d1fe3(504)])[_0x4d1fe3(500)](_0x5541a2 => {
          const _0x11996b = _0x4d1fe3;
          logger[_0x11996b(501)](_0x5541a2[_0x11996b(512)]);
          _0x4671f5();
        });
        _0x4671f5(_0x590fa0);
      } catch (_0x21c6a3) {
        logger[_0x4d1fe3(501)](_0x4d1fe3(511), JSON[_0x4d1fe3(503)](_0x21c6a3));
        _0x4671f5(null);
      }
    }));
  };
  for (let _0x5c299a = 0; _0x5c299a < _0x26dfc6[_0xb18b4a(495)]; ++_0x5c299a) {
    _0x483b67(_0x26dfc6[_0x5c299a]);
  }
  return await Promise[_0xb18b4a(499)](_0xbcf523);
};