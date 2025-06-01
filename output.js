
function a0_0x1fb1(_0x4047aa, _0x4b80b4) {
  const _0x45f4a2 = a0_0x3c9d();
  a0_0x1fb1 = function (_0x42b288, _0x4d8065) {
    _0x42b288 = _0x42b288 - 343;
    let _0x53f547 = _0x45f4a2[_0x42b288];
    return _0x53f547;
  };
  return a0_0x1fb1(_0x4047aa, _0x4b80b4);
}
const a0_0x47a28c = a0_0x1fb1;
(function (_0x33fcf7, _0x574599) {
  const _0x5222a1 = a0_0x1fb1;
  const _0x5470d6 = _0x33fcf7();
  while (true) {
    try {
      const _0x49e7f1 = -parseInt(_0x5222a1(383)) / 1 * (-parseInt(_0x5222a1(346)) / 2) + -parseInt(_0x5222a1(369)) / 3 + parseInt(_0x5222a1(374)) / 4 * (parseInt(_0x5222a1(386)) / 5) + -parseInt(_0x5222a1(344)) / 6 * (-parseInt(_0x5222a1(402)) / 7) + -parseInt(_0x5222a1(367)) / 8 * (-parseInt(_0x5222a1(401)) / 9) + parseInt(_0x5222a1(381)) / 10 * (parseInt(_0x5222a1(354)) / 11) + -parseInt(_0x5222a1(396)) / 12;
      if (_0x49e7f1 === _0x574599) {
        break;
      } else {
        _0x5470d6.push(_0x5470d6.shift());
      }
    } catch (_0x23992f) {
      _0x5470d6.push(_0x5470d6.shift());
    }
  }
})(a0_0x3c9d, 897583);
let logger = require(a0_0x47a28c(404)).getLogger(a0_0x47a28c(353));
const enumeration = require(a0_0x47a28c(393));
const gameConfig = require("../gameComponent/gameConfig");
const userDao = require(a0_0x47a28c(392));
const commonDao = require(a0_0x47a28c(389));
const code = require(a0_0x47a28c(390));
const userInfoServices = require(a0_0x47a28c(371));
const moment = require("moment");
class gameServices {
  static async roomPay(_0xe61193, _0x251907, _0x19b845, _0x344b57, _0x2d70ad, _0x682265) {
    const _0x2a10ac = a0_0x47a28c;
    let _0x1520aa = gameConfig[_0x2a10ac(373)](_0x251907[_0x2a10ac(370)], _0x251907.gameType);
    if (_0x251907[_0x2a10ac(352)] === enumeration[_0x2a10ac(384)].AAZHIFU) {
      let _0x53928a = [];
      let _0x3128ce = [];
      for (let _0x213fa7 in _0xe61193) {
        let _0x17d91e = _0xe61193[_0x213fa7];
        if (_0x17d91e) {
          if (_0x17d91e[_0x2a10ac(358)] >= _0x19b845) {
            continue;
          } else {
            _0x3128ce[_0x2a10ac(380)](_0x213fa7);
          }
        }
      }
      if (_0x3128ce.length === 0) {
        return;
      }
      let _0x2324f8 = Math[_0x2a10ac(363)](_0x1520aa / _0x3128ce[_0x2a10ac(361)]) || 1;
      for (let _0x20dc29 = 0; _0x20dc29 < _0x3128ce.length; _0x20dc29++) {
        _0x53928a[_0x2a10ac(380)]({
          matchData: {
            uid: _0x3128ce[_0x20dc29]
          },
          saveData: {
            $inc: {
              gold: -_0x2324f8
            }
          }
        });
      }
      logger[_0x2a10ac(343)]("[" + _0x344b57 + _0x2a10ac(391) + _0x251907.payType + _0x2a10ac(348) + _0x3128ce + _0x2a10ac(394) + _0x2324f8);
      let _0x5079cd = await userDao.updateUserDataArr(_0x53928a);
      for (let _0xcd50de = 0; _0xcd50de < _0x5079cd[_0x2a10ac(361)]; ++_0xcd50de) {
        let _0x1d322a = _0x5079cd[_0xcd50de];
        if (!_0x1d322a) {
          continue;
        }
        !!_0x1d322a[_0x2a10ac(356)] && userInfoServices[_0x2a10ac(376)](_0x1d322a[_0x2a10ac(387)], _0x1d322a.frontendId, {
          gold: _0x1d322a[_0x2a10ac(403)]
        }).catch(_0x15e059 => {
          const _0x38984d = _0x2a10ac;
          logger[_0x38984d(345)](_0x15e059[_0x38984d(405)]);
        });
      }
    } else {
      if (_0x251907.payType === enumeration[_0x2a10ac(384)].WOZHIFU) {
        return gameServices[_0x2a10ac(372)](_0x2d70ad, _0x1520aa, _0x344b57, -1, _0x682265);
      }
    }
  }
  static async [a0_0x47a28c(349)](_0x167716, _0x50233a, _0x447aaf, _0x272722, _0x1318db, _0x3263ea = false) {
    const _0x4dbf83 = a0_0x47a28c;
    let _0x14521e = 0;
    if (_0x3263ea) {
      let _0x3fb6fa = parseInt(_0x50233a[_0x4dbf83(370)]) || 1;
      let _0x29eab5 = _0x50233a[_0x4dbf83(347)] || _0x50233a.payDiamond || 1;
      _0x29eab5 = _0x29eab5 * _0x3fb6fa;
    } else {
      _0x14521e = gameConfig[_0x4dbf83(373)](_0x50233a[_0x4dbf83(370)], _0x50233a.gameType);
    }
    let _0x5afc48 = {
      $inc: {
        diamondCount: _0x14521e
      }
    };
    let _0x56648d = moment()[_0x4dbf83(365)](_0x4dbf83(398));
    await commonDao[_0x4dbf83(378)](_0x4dbf83(364), {
      unionID: _0x272722,
      dateTime: _0x56648d
    }, _0x5afc48);
    let _0x11c7a9 = {
      uid: _0x167716,
      gold: {
        $gte: _0x14521e
      }
    };
    let _0x4e32e7 = await userDao[_0x4dbf83(397)](_0x11c7a9, {
      $inc: {
        gold: -_0x14521e
      }
    });
    if (!_0x4e32e7) {
      logger.info("[" + _0x447aaf + _0x4dbf83(385) + _0x50233a.payType + " unionOwnerUid = [" + _0x167716 + _0x4dbf83(394) + _0x14521e + " fail", true);
      return code[_0x4dbf83(382)];
    } else {
      !!_0x4e32e7[_0x4dbf83(356)] && userInfoServices[_0x4dbf83(376)](_0x4e32e7[_0x4dbf83(387)], _0x4e32e7[_0x4dbf83(356)], {
        gold: _0x4e32e7[_0x4dbf83(403)]
      }).catch(_0x59d77e => {
        const _0x3d29fd = _0x4dbf83;
        logger.error(_0x59d77e[_0x3d29fd(405)]);
      });
      let _0x2c5b6e = moment()[_0x4dbf83(365)](_0x4dbf83(398));
      let _0x26642e = _0x4e32e7[_0x4dbf83(377)];
      let _0x1ffb06 = _0x4e32e7.nickname;
      let _0xdb0160 = {
        unionID: _0x272722,
        day: _0x2c5b6e,
        roomID: _0x447aaf,
        gameType: _0x1318db,
        avatar: _0x26642e,
        nickname: _0x1ffb06,
        uid: _0x167716,
        count: _0x14521e,
        createTime: Date[_0x4dbf83(395)]()
      };
      await commonDao.createData(_0x4dbf83(379), _0xdb0160);
      delete _0xdb0160[_0x4dbf83(360)];
      _0xdb0160[_0x4dbf83(357)] = {
        count: _0x14521e
      };
      await commonDao.findOneAndUpdateEx(_0x4dbf83(366), {
        day: _0x2c5b6e,
        unionID: _0x272722,
        uid: _0x167716
      }, _0xdb0160, {
        upsert: true,
        new: true
      });
      logger[_0x4dbf83(343)]("[" + _0x447aaf + "][pay] union room pay payType = " + _0x50233a[_0x4dbf83(352)] + " unionOwnerUid = [" + _0x167716 + _0x4dbf83(394) + _0x14521e + _0x4dbf83(355) + _0x4e32e7[_0x4dbf83(403)] + _0x4dbf83(351));
      return code.OK;
    }
  }
  static async [a0_0x47a28c(372)](_0x33f2ad, _0x1ddc0f, _0x13abb5, _0x543214, _0x511fcd) {
    const _0x52b22e = a0_0x47a28c;
    let _0x4a6b2f = {
      uid: _0x33f2ad
    };
    _0x4a6b2f[_0x52b22e(403)] = {
      $gte: _0x1ddc0f
    };
    let _0xb93696 = await userDao.updateUserData(_0x4a6b2f, {
      $inc: {
        gold: -_0x1ddc0f
      }
    });
    if (!_0xb93696) {
      logger[_0x52b22e(343)]("[" + _0x13abb5 + _0x52b22e(350) + _0x33f2ad + _0x52b22e(394) + _0x1ddc0f + _0x52b22e(362));
      return code[_0x52b22e(382)];
    } else {
      !!_0xb93696[_0x52b22e(356)] && userInfoServices[_0x52b22e(376)](_0xb93696[_0x52b22e(387)], _0xb93696[_0x52b22e(356)], {
        gold: _0xb93696[_0x52b22e(403)]
      })[_0x52b22e(375)](_0xa496eb => {
        const _0x2dbd2d = _0x52b22e;
        logger[_0x2dbd2d(345)](_0xa496eb.stack);
      });
      let _0x101151 = moment()[_0x52b22e(365)](_0x52b22e(398));
      let _0x11fc42 = _0xb93696[_0x52b22e(377)];
      let _0x2a36a3 = _0xb93696[_0x52b22e(388)];
      let _0x4de526 = {
        unionID: _0x543214,
        day: _0x101151,
        roomID: _0x13abb5,
        gameType: _0x511fcd,
        avatar: _0x11fc42,
        nickname: _0x2a36a3,
        uid: _0x33f2ad,
        count: _0x1ddc0f,
        createTime: Date[_0x52b22e(395)]()
      };
      await commonDao.createData("userPayDetailModel", _0x4de526);
      delete _0x4de526.count;
      _0x4de526[_0x52b22e(357)] = {
        count: _0x1ddc0f
      };
      await commonDao[_0x52b22e(378)](_0x52b22e(366), {
        day: _0x101151,
        unionID: _0x543214,
        uid: _0x33f2ad
      }, _0x4de526, {
        upsert: true,
        new: true
      });
      logger[_0x52b22e(343)]("[" + _0x13abb5 + _0x52b22e(368) + _0x33f2ad + "] payDiamond = " + _0x1ddc0f + _0x52b22e(355) + _0xb93696[_0x52b22e(403)] + " success");
      return code.OK;
    }
  }
  static async [a0_0x47a28c(400)](_0x2fc0a1, _0x4a00b3) {
    const _0x4797dd = a0_0x47a28c;
    let _0x4cbbe0 = 0;
    if (_0x4a00b3[_0x4797dd(352)] === enumeration[_0x4797dd(384)][_0x4797dd(399)]) {
      let _0x227ce6 = parseInt(_0x4a00b3.bureau) || 1;
      let _0x33d728 = _0x4a00b3[_0x4797dd(347)] || _0x4a00b3[_0x4797dd(359)] || 1;
      _0x33d728 = _0x33d728 * _0x227ce6;
    } else {
      _0x4cbbe0 = gameConfig[_0x4797dd(373)](_0x4a00b3[_0x4797dd(370)], _0x4a00b3.gameType);
    }
    return _0x2fc0a1[_0x4797dd(403)] < _0x4cbbe0 ? true : false;
  }
}
function a0_0x3c9d() {
  const _0x759bdf = ["6BgdePk", "error", "4910NIRcKU", "perDiamond", " payUserList = [", "unionRoomPay", "][pay] user pay  uid = [", "  success", "payType", "gameData", "9692309VCRgpq", " allCount = ", "frontendId", "$inc", "chairID", "payDiamond", "count", "length", " fail", "ceil", "teamDataModel", "format", "userPayModel", "13128dvhlTZ", "][pay] user pay uid = [", "646626XWcqRs", "bureau", "../services/userInfoServices", "userPay", "oneUserDiamondCount", "3532lPvbbB", "catch", "updateUserDataNotify", "avatar", "findOneAndUpdateEx", "userPayDetailModel", "push", "10KjerAJ", "NOT_ENOUGH_GOLD", "683JdpSMr", "roomPayType", "][pay] union room pay payType = ", "7835AcfdHJ", "uid", "nickname", "../dao/commonDao", "../constant/code", "][pay] hall room pay payType = ", "../dao/userDao", "../constant/enumeration", "] payDiamond = ", "now", "44564412tjMeYO", "updateUserData", "YYYY-MM-DD", "AAZHIFU", "checkGold", "3348gRxufx", "1923803VPzozO", "gold", "pomelo-logger", "stack", "info"];
  a0_0x3c9d = function () {
    return _0x759bdf;
  };
  return a0_0x3c9d();
}
module.exports = gameServices;