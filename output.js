
const a0_0x510f9a = a0_0x58d6;
(function (_0x8df227, _0x4601e2) {
  const _0x2ef0d1 = a0_0x58d6;
  const _0xf657cf = _0x8df227();
  while (true) {
    try {
      const _0x43744b = -parseInt(_0x2ef0d1(163)) / 1 + -parseInt(_0x2ef0d1(164)) / 2 + parseInt(_0x2ef0d1(139)) / 3 + -parseInt(_0x2ef0d1(156)) / 4 + parseInt(_0x2ef0d1(128)) / 5 + parseInt(_0x2ef0d1(127)) / 6 * (-parseInt(_0x2ef0d1(134)) / 7) + parseInt(_0x2ef0d1(124)) / 8 * (parseInt(_0x2ef0d1(129)) / 9);
      if (_0x43744b === _0x4601e2) {
        break;
      } else {
        _0xf657cf.push(_0xf657cf.shift());
      }
    } catch (_0x543ee7) {
      _0xf657cf.push(_0xf657cf.shift());
    }
  }
})(a0_0x361b, 650330);
let code = require(a0_0x510f9a(170));
let async = require(a0_0x510f9a(135));
let rpcAPI = require(a0_0x510f9a(146));
let dispatch = require("../../../util/dispatcher");
let userInfoServices = require(a0_0x510f9a(159));
let pomeloServices = require(a0_0x510f9a(165));
let roomServices = require("../../../services/roomServices");
let logger = require("pomelo-logger")[a0_0x510f9a(169)]("logic");
let userDao = require(a0_0x510f9a(171));
let utils = require(a0_0x510f9a(140));
let redisService = require(a0_0x510f9a(125));
let logServices = require("../../../services/logServices");
module[a0_0x510f9a(157)] = function (_0x4fa09a) {
  return new Handler(_0x4fa09a);
};
function a0_0x58d6(_0x3c1a22, _0x2af4ff) {
  const _0x53f4eb = a0_0x361b();
  a0_0x58d6 = function (_0x200c3e, _0x156c9f) {
    _0x200c3e = _0x200c3e - 123;
    let _0x63b94d = _0x53f4eb[_0x200c3e];
    return _0x63b94d;
  };
  return a0_0x58d6(_0x3c1a22, _0x2af4ff);
}
let Handler = function (_0x4d2c3d) {
  const _0x1b8b89 = a0_0x510f9a;
  this[_0x1b8b89(126)] = _0x4d2c3d;
};
Handler.prototype[a0_0x510f9a(168)] = async function (_0x220c09, _0x537a52, _0x4ac612) {
  const _0x483d8b = a0_0x510f9a;
  try {
    logger = logServices[_0x483d8b(152)](_0x220c09.gameType);
    logger[_0x483d8b(153)]("[" + _0x537a52[_0x483d8b(150)] + _0x483d8b(145) + _0x220c09[_0x483d8b(133)]);
    let _0x129f0f = parseInt(_0x220c09[_0x483d8b(133)]);
    if (!_0x129f0f) {
      _0x4ac612(null, {
        code: code[_0x483d8b(141)]
      });
      return;
    }
    if (!_0x537a52[_0x483d8b(150)]) {
      _0x4ac612(null, {
        code: code[_0x483d8b(137)]
      });
      return;
    }
    let _0x466361 = _0x129f0f + "-Join-New-Room";
    let _0x5695c4 = redisService.isLocked(_0x466361, 5);
    if (_0x5695c4) {
      logger.error("[" + _0x537a52[_0x483d8b(150)] + _0x483d8b(132));
      _0x4ac612(null, {
        code: code[_0x483d8b(147)]
      });
      return;
    }
    let _0x2fcae1 = await userDao[_0x483d8b(166)](_0x537a52[_0x483d8b(150)]);
    if (!_0x2fcae1) {
      _0x4ac612(null, {
        code: code.INVALID_UERS
      });
      redisService.unLock(_0x466361);
      return;
    }
    let _0x223927 = _0x537a52.get(_0x483d8b(133));
    if (!!_0x223927 && _0x129f0f !== _0x223927) {
      logger[_0x483d8b(153)]("[" + _0x537a52[_0x483d8b(150)] + _0x483d8b(161) + _0x223927);
      let _0x45f522 = dispatch[_0x483d8b(160)](_0x223927, this[_0x483d8b(126)].getServersByType("game"));
      let _0x151072 = await rpcAPI.isUserInRoom(_0x45f522.id, _0x537a52.uid, _0x223927);
      !!_0x151072 && (_0x129f0f = _0x223927);
    }
    let _0x59e672 = dispatch[_0x483d8b(160)](_0x129f0f, this[_0x483d8b(126)][_0x483d8b(144)](_0x483d8b(162)));
    let _0x45f70d = await rpcAPI[_0x483d8b(168)](_0x59e672.id, userInfoServices[_0x483d8b(130)](_0x2fcae1), _0x129f0f);
    redisService[_0x483d8b(154)](_0x466361);
    logger[_0x483d8b(153)]("[" + _0x537a52[_0x483d8b(150)] + _0x483d8b(158) + _0x537a52[_0x483d8b(150)] + _0x483d8b(149) + (_0x45f70d == 0 ? _0x483d8b(138) : _0x45f70d) + " ");
    _0x4ac612(null, {
      code: _0x45f70d
    });
  } catch (_0x3d2861) {
    logger.error("[joinRoom]" + e.stack);
    redisService[_0x483d8b(154)](lockKey);
    _0x4ac612(null, {
      code: typeof _0x3d2861 === _0x483d8b(142) ? _0x3d2861 : 500
    });
  }
};
Handler.prototype.createRoom = async function (_0x60d05e, _0x313179, _0x312b02) {
  const _0x45ec72 = a0_0x510f9a;
  try {
    logger[_0x45ec72(136)]("gameHandler", "createRoom");
    if (!_0x313179[_0x45ec72(150)]) {
      _0x312b02(null, {
        code: code.INVALID_UERS
      });
      return;
    }
    let _0x2343e4 = _0x60d05e[_0x45ec72(155)];
    let _0x275419 = await userDao[_0x45ec72(166)](_0x313179[_0x45ec72(150)]);
    if (!_0x275419) {
      _0x312b02(null, {
        code: code[_0x45ec72(137)]
      });
      return;
    }
    let _0x3266ee = this[_0x45ec72(126)].getServersByType("game");
    let _0xf587fb = _0x313179[_0x45ec72(148)](_0x45ec72(133));
    if (!!_0xf587fb) {
      let _0x11d476 = dispatch[_0x45ec72(160)](_0xf587fb, _0x3266ee);
      let _0x1cee4e = await rpcAPI[_0x45ec72(151)](_0x11d476.id, _0x313179[_0x45ec72(150)], _0xf587fb);
      if (!!_0x1cee4e) {
        _0x312b02(null, {
          code: code[_0x45ec72(123)]
        });
        return;
      }
    }
    let _0x3ef875 = dispatch.dispatch(utils.getRandomNum(0, _0x3266ee[_0x45ec72(172)] - 1), _0x3266ee);
    await rpcAPI[_0x45ec72(167)](_0x3ef875.id, userInfoServices[_0x45ec72(130)](_0x275419), _0x2343e4, _0x60d05e.gameType);
    _0x312b02(null, {
      code: code.OK
    });
  } catch (_0x581014) {
    logger[_0x45ec72(143)]("[createRoom]" + _0x581014[_0x45ec72(131)]);
    _0x312b02(null, {
      code: 500
    });
  }
};
function a0_0x361b() {
  const _0x26ba17 = ["288607JncndX", "1880182qewaiI", "../../../services/pomeloServices", "getUserDataByUid", "createRoom", "joinRoom", "getLogger", "../../../constant/code", "../../../dao/userDao", "length", "FAIL", "11752SErbvo", "../../../services/redisService", "app", "1564314EHbUCz", "4850010PRpmKY", "8406pAHnfH", "buildGameRoomUserInfo", "stack", "] joining ...", "roomID", "14sDPVOW", "async", "debug", "INVALID_UERS", "success", "1969296iEmtak", "../../../util/utils", "REQUEST_DATA_ERROR", "number", "error", "getServersByType", "] join room roomID = ", "../../../API/rpcAPI", "ROOM_JOIN_BUSY_LIMIT", "get", " resCode = ", "uid", "isUserInRoom", "getLogByType", "info", "unLock", "gameRule", "2392056uGyuCq", "exports", "] join room end  result uid = ", "../../../services/userInfoServices", "dispatch", "] in  oldRoomID = ", "game"];
  a0_0x361b = function () {
    return _0x26ba17;
  };
  return a0_0x361b();
}