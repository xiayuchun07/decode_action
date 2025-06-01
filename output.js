
function a0_0x43ed() {
  const _0x3ab259 = ["23856ivrIUH", "findOneData", "8UlxTwk", "8673732DDRXHJ", "132", "getUserData", "156", "138", "679362tceIvO", "139", "3ZEHlaZ", "getRandomNickname", "../util/utils", "187", "152", "157", "getRandomNum", "158", "185", "exports", "159", "189", "createRobot", "136", "getRandomRobot", "1060676eAZKit", "135", "131", "328786jYxBWR", "userModel", "155", "188", "134", "../dao/userDao", "150", "137", "1728797nTxZmm", "getRobotList", "accountModel", "../dao/commonDao", "232620XTeVnF", "181", "151", "186"];
  a0_0x43ed = function () {
    return _0x3ab259;
  };
  return a0_0x43ed();
}
const a0_0x3ff08c = a0_0xf1d9;
(function (_0x83d6d5, _0x407998) {
  const _0x1a788f = a0_0xf1d9;
  const _0x315fc5 = _0x83d6d5();
  while (true) {
    try {
      const _0x3c012d = parseInt(_0x1a788f(240)) / 1 * (-parseInt(_0x1a788f(258)) / 2) + -parseInt(_0x1a788f(230)) / 3 + -parseInt(_0x1a788f(255)) / 4 + -parseInt(_0x1a788f(226)) / 5 + -parseInt(_0x1a788f(238)) / 6 + -parseInt(_0x1a788f(222)) / 7 * (-parseInt(_0x1a788f(232)) / 8) + parseInt(_0x1a788f(233)) / 9;
      if (_0x3c012d === _0x407998) {
        break;
      } else {
        _0x315fc5.push(_0x315fc5.shift());
      }
    } catch (_0x5be6ca) {
      _0x315fc5.push(_0x315fc5.shift());
    }
  }
})(a0_0x43ed, 284668);
function a0_0xf1d9(_0x3357c0, _0x91b5dc) {
  const _0x266dcb = a0_0x43ed();
  a0_0xf1d9 = function (_0x27e80b, _0x4236a3) {
    _0x27e80b = _0x27e80b - 220;
    let _0x4ab76b = _0x266dcb[_0x27e80b];
    return _0x4ab76b;
  };
  return a0_0xf1d9(_0x3357c0, _0x91b5dc);
}
let utils = require(a0_0x3ff08c(242));
let commonDao = require(a0_0x3ff08c(225));
let userDao = require(a0_0x3ff08c(263));
let phoneTitleArr = [a0_0x3ff08c(262), a0_0x3ff08c(256), a0_0x3ff08c(253), a0_0x3ff08c(221), a0_0x3ff08c(237), a0_0x3ff08c(239), a0_0x3ff08c(220), a0_0x3ff08c(228), a0_0x3ff08c(245), a0_0x3ff08c(247), a0_0x3ff08c(250), a0_0x3ff08c(244), a0_0x3ff08c(253), a0_0x3ff08c(228), a0_0x3ff08c(236), a0_0x3ff08c(248), a0_0x3ff08c(227), "170", a0_0x3ff08c(229), a0_0x3ff08c(243), a0_0x3ff08c(261), "130", a0_0x3ff08c(257), a0_0x3ff08c(234), a0_0x3ff08c(260), "156", a0_0x3ff08c(251)];
let services = module[a0_0x3ff08c(249)];
services[a0_0x3ff08c(241)] = function () {
  return phoneTitleArr[utils.getRandomNum(0, phoneTitleArr.length - 1)] + utils.getRandomNum(10000000, 99999999);
};
services[a0_0x3ff08c(223)] = async function (_0x5d8c5e) {
  const _0x9f9402 = a0_0x3ff08c;
  let _0x8121fe = await userDao[_0x9f9402(235)]({
    unionID: _0x5d8c5e,
    isRobot: true,
    roomId: null
  });
  return _0x8121fe;
};
services[a0_0x3ff08c(254)] = async function (_0x3354e9) {
  const _0x5e7b18 = a0_0x3ff08c;
  let _0x1fe0c7 = await userDao[_0x5e7b18(235)]({
    unionID: _0x3354e9,
    isRobot: true,
    roomId: null
  });
  return _0x1fe0c7;
};
services[a0_0x3ff08c(252)] = async function () {
  const _0x1c0ce7 = a0_0x3ff08c;
  let _0x3da4b3 = null;
  let _0x2bceb3 = 1000;
  let _0x4c54a8 = null;
  while (_0x2bceb3 > 0) {
    _0x3da4b3 = utils[_0x1c0ce7(246)](100000, 999999);
    let _0x32e042 = await commonDao[_0x1c0ce7(231)](_0x1c0ce7(224), {
      uid: _0x3da4b3
    });
    if (!_0x32e042) {
      break;
    }
    _0x2bceb3--;
    if (_0x2bceb3 <= 0) {
      _0x3da4b3 = null;
      break;
    }
  }
  if (_0x3da4b3) {
    let _0x5f0b8b = this[_0x1c0ce7(241)]();
    let _0x4dfb24 = {
      syncLock: 0,
      nickname: _0x5f0b8b,
      uid: _0x3da4b3,
      isRobot: true,
      avatar: null,
      roomID: null
    };
    _0x4c54a8 = await commonDao.findOneAndUpdateEx(_0x1c0ce7(259), {
      uid: _0x3da4b3
    }, _0x4dfb24, {
      upsert: true,
      new: true
    });
  }
  return _0x4c54a8;
};