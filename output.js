
const a0_0x52cd34 = a0_0x4fbb;
function a0_0x4fbb(_0x48fa8a, _0x5acaa0) {
  const _0x38fef2 = a0_0x437c();
  a0_0x4fbb = function (_0x27bf34, _0x2677ab) {
    _0x27bf34 = _0x27bf34 - 300;
    let _0x5cffa8 = _0x38fef2[_0x27bf34];
    return _0x5cffa8;
  };
  return a0_0x4fbb(_0x48fa8a, _0x5acaa0);
}
(function (_0x638348, _0x105c9d) {
  const _0x5803b0 = a0_0x4fbb;
  const _0x5bf7f7 = _0x638348();
  while (true) {
    try {
      const _0x407f62 = -parseInt(_0x5803b0(318)) / 1 * (-parseInt(_0x5803b0(305)) / 2) + -parseInt(_0x5803b0(322)) / 3 + -parseInt(_0x5803b0(314)) / 4 + -parseInt(_0x5803b0(300)) / 5 + -parseInt(_0x5803b0(307)) / 6 + parseInt(_0x5803b0(311)) / 7 * (-parseInt(_0x5803b0(321)) / 8) + parseInt(_0x5803b0(323)) / 9;
      if (_0x407f62 === _0x105c9d) {
        break;
      } else {
        _0x5bf7f7.push(_0x5bf7f7.shift());
      }
    } catch (_0x290d86) {
      _0x5bf7f7.push(_0x5bf7f7.shift());
    }
  }
})(a0_0x437c, 204977);
const moment = require("moment");
function a0_0x437c() {
  const _0x32a075 = ["isAfter", "limitScore", "exports", "isLocked", "87694WSiOpX", "endTime", "1766628bOxbHZ", "instance", "addUserSuper", "totalScore", "6097RsmljB", "add", "getInstance", "1082848FdXBaq", "getUserLimitScore", "unLock", "addUserLevel", "9rxutvX", "format", "getUserSuper", "248FcpiwI", "1091697nlBWYG", "10444878vXJIke", "getUserLevel", "1970690kgZTdO"];
  a0_0x437c = function () {
    return _0x32a075;
  };
  return a0_0x437c();
}
let redisKey = {};
let userLevel = {};
let superListArr = {};
let limitScoreListArr = {};
class redisService {
  static [a0_0x52cd34(313)]() {
    const _0x2a896e = a0_0x52cd34;
    !redisService[_0x2a896e(308)] && (redisService.instance = new redisService());
    return redisService[_0x2a896e(308)];
  }
  [a0_0x52cd34(304)](_0x23448d, _0x4ed546 = 3) {
    const _0x45ed67 = a0_0x52cd34;
    return redisKey[_0x23448d] ? moment()[_0x45ed67(301)](redisKey[_0x23448d]) ? (delete redisKey[_0x23448d], redisKey[_0x23448d] = moment()[_0x45ed67(312)](_0x4ed546, "s"), false) : true : (redisKey[_0x23448d] = moment().add(_0x4ed546, "s"), false);
  }
  [a0_0x52cd34(316)](_0x1e4e83) {
    redisKey[_0x1e4e83] && delete redisKey[_0x1e4e83];
  }
  [a0_0x52cd34(317)](_0x5a6f0f, _0x4b086c, _0x147965) {
    userLevel[_0x5a6f0f + "-" + _0x4b086c] = _0x147965;
  }
  [a0_0x52cd34(324)](_0x15f64b, _0x4b2411) {
    return userLevel[_0x15f64b + "-" + _0x4b2411];
  }
  [a0_0x52cd34(309)](_0x4d2505, _0x259ef2, _0x562e2b, _0x254d74) {
    superListArr[_0x4d2505 + "-" + _0x259ef2] = {
      superList: _0x562e2b,
      endTime: _0x254d74
    };
  }
  [a0_0x52cd34(320)](_0x2db951, _0x19ee50) {
    const _0x3212d0 = a0_0x52cd34;
    let _0x4050f8 = superListArr[_0x2db951 + "-" + _0x19ee50];
    return _0x4050f8 && _0x4050f8[_0x3212d0(306)] > moment()[_0x3212d0(319)]("x") ? _0x4050f8.superList : null;
  }
  addUserLimitScore(_0x4d48c7, _0x481025, _0x46ae85, _0x2b4694, _0x1232b1) {
    limitScoreListArr[_0x4d48c7 + "-" + _0x481025] = {
      limitScore: _0x46ae85,
      totalScore: _0x2b4694,
      endTime: _0x1232b1
    };
  }
  [a0_0x52cd34(315)](_0x2e3960, _0x2e75ba) {
    const _0x523588 = a0_0x52cd34;
    let _0x2f7a77 = limitScoreListArr[_0x2e3960 + "-" + _0x2e75ba];
    return _0x2f7a77 && _0x2f7a77[_0x523588(306)] > moment()[_0x523588(319)]("x") ? {
      limitScore: _0x2f7a77[_0x523588(302)],
      totalScore: _0x2f7a77[_0x523588(310)]
    } : null;
  }
}
module[a0_0x52cd34(303)] = redisService.getInstance();