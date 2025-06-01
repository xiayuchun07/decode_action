
function a0_0x9192(_0x23aab6, _0x1c601a) {
  const _0x11473f = a0_0x1f6e();
  a0_0x9192 = function (_0x40427f, _0x3244cd) {
    _0x40427f = _0x40427f - 164;
    let _0x30e771 = _0x11473f[_0x40427f];
    return _0x30e771;
  };
  return a0_0x9192(_0x23aab6, _0x1c601a);
}
const a0_0x3155cb = a0_0x9192;
(function (_0x2cf660, _0xc6e42f) {
  const _0x4fdde1 = a0_0x9192;
  const _0x5a9846 = _0x2cf660();
  while (true) {
    try {
      const _0x6ee774 = parseInt(_0x4fdde1(168)) / 1 * (parseInt(_0x4fdde1(184)) / 2) + parseInt(_0x4fdde1(175)) / 3 + -parseInt(_0x4fdde1(186)) / 4 + -parseInt(_0x4fdde1(194)) / 5 + parseInt(_0x4fdde1(178)) / 6 * (-parseInt(_0x4fdde1(165)) / 7) + parseInt(_0x4fdde1(193)) / 8 * (-parseInt(_0x4fdde1(179)) / 9) + parseInt(_0x4fdde1(203)) / 10;
      if (_0x6ee774 === _0xc6e42f) {
        break;
      } else {
        _0x5a9846.push(_0x5a9846.shift());
      }
    } catch (_0x35dd1b) {
      _0x5a9846.push(_0x5a9846.shift());
    }
  }
})(a0_0x1f6e, 107847);
let rpcAPI = require(a0_0x3155cb(170));
let code = require(a0_0x3155cb(196));
let utils = require("../util/utils");
let pomelo = require(a0_0x3155cb(183));
let logger = require(a0_0x3155cb(197))[a0_0x3155cb(190)](a0_0x3155cb(204));
let dispatch = require(a0_0x3155cb(195));
let async = require(a0_0x3155cb(200));
let service = module[a0_0x3155cb(177)];
service[a0_0x3155cb(167)] = async function (_0x31e9c2) {
  const _0x118cd5 = a0_0x3155cb;
  let _0x30ceb9 = pomelo.app[_0x118cd5(192)](_0x118cd5(189));
  for (let _0x351fe6 = 0; _0x351fe6 < _0x30ceb9[_0x118cd5(169)]; ++_0x351fe6) {
    let _0x3ffe32 = await rpcAPI[_0x118cd5(167)](_0x30ceb9[_0x351fe6].id, _0x31e9c2)[_0x118cd5(182)](_0x168652 => {});
    if (!!_0x3ffe32) {
      return _0x3ffe32;
    }
  }
  return 0;
};
service[a0_0x3155cb(166)] = function (_0x57aeee) {
  return new Promise((_0x9e52fe, _0x2da878) => {
    const _0x267be7 = a0_0x9192;
    let _0x14f9eb = [];
    let _0x3c3668 = pomelo.app[_0x267be7(192)](_0x267be7(189));
    let _0x398d14 = [];
    let _0x11e3de = 0;
    function _0x26ebb7(_0x1607d2) {
      let _0x393d23 = _0x3c3668[_0x11e3de++];
      rpcAPI.getMatchRoomList(_0x393d23.id, _0x57aeee, _0x1607d2);
    }
    for (let _0x363708 = 0; _0x363708 < _0x3c3668[_0x267be7(169)]; ++_0x363708) {
      _0x398d14[_0x267be7(188)](_0x26ebb7);
    }
    async[_0x267be7(201)](_0x398d14, function (_0x165514, _0x2b5ebc) {
      const _0x150dda = _0x267be7;
      if (!!_0x165514) {
        logger[_0x150dda(180)](_0x150dda(171), "matchRoom err:" + _0x165514);
        _0x2da878(_0x165514);
      } else {
        for (let _0x5e8e0e = 0; _0x5e8e0e < _0x2b5ebc.length; ++_0x5e8e0e) {
          !!_0x2b5ebc[_0x5e8e0e] && (_0x14f9eb = _0x14f9eb[_0x150dda(172)](_0x2b5ebc[_0x5e8e0e]));
        }
        _0x9e52fe(_0x14f9eb);
      }
    });
  });
};
service[a0_0x3155cb(171)] = async function (_0x59a95d, _0x3e1f2a) {
  const _0x579f52 = a0_0x3155cb;
  let _0x215fba = await service[_0x579f52(166)](_0x3e1f2a[_0x579f52(187)]);
  return await service[_0x579f52(191)](_0x59a95d, _0x215fba, _0x3e1f2a);
};
service[a0_0x3155cb(191)] = async function (_0x5c1075, _0x458c41, _0x3dfeee) {
  const _0x418d4e = a0_0x3155cb;
  if (_0x5c1075[_0x418d4e(181)] < _0x3dfeee[_0x418d4e(176)]) {
    throw new Error(code[_0x418d4e(164)]);
  }
  if (_0x458c41[_0x418d4e(169)] === 0) {
    return await service.createRoom(_0x5c1075, _0x3dfeee, null);
  } else {
    let _0x1e32a1 = utils[_0x418d4e(185)](0, _0x458c41[_0x418d4e(169)] - 1);
    let _0xf702b4 = await service[_0x418d4e(202)](_0x5c1075, _0x458c41[_0x1e32a1]).catch(_0x28ae36 => {
      logger.error("matchRoom", "joinRoom err:" + _0x28ae36);
    });
    if (!_0xf702b4) {
      _0x458c41[_0x418d4e(174)](_0x1e32a1, 1);
      return await service[_0x418d4e(191)](_0x5c1075, _0x458c41, _0x3dfeee);
    }
    return _0xf702b4;
  }
};
service.createRoom = async function (_0xec2be1, _0x14715e, _0x1a6124) {
  const _0x1cc321 = a0_0x3155cb;
  let _0x4a1018 = dispatch[_0x1cc321(199)](utils.getRandomNum(0, pomelo[_0x1cc321(173)].getServersByType(_0x1cc321(189)).length - 1), pomelo[_0x1cc321(173)][_0x1cc321(192)](_0x1cc321(189)));
  return await rpcAPI[_0x1cc321(198)](_0x4a1018.id, _0xec2be1, _0x1a6124, _0x14715e);
};
service[a0_0x3155cb(202)] = async function (_0x591f61, _0x3f1b06) {
  const _0xaef358 = a0_0x3155cb;
  let _0x57802a = pomelo.app[_0xaef358(192)](_0xaef358(189));
  let _0x379d6d = dispatch[_0xaef358(199)](_0x3f1b06, _0x57802a);
  await rpcAPI[_0xaef358(202)](_0x379d6d.id, _0x591f61, _0x3f1b06);
  return _0x3f1b06;
};
function a0_0x1f6e() {
  const _0x4248ba = ["646748yHIiys", "gameTypeID", "push", "game", "getLogger", "matchRoom", "getServersByType", "8kNwARw", "364255IKknNl", "../util/dispatcher", "../constant/code", "pomelo-logger", "createRoom", "dispatch", "async", "parallel", "joinRoom", "4680260ZQxhTu", "logic", "LEAVE_ROOM_GOLD_NOT_ENOUGH_LIMIT", "1243529ktdSpr", "getMatchRoomList", "searchRoomByUid", "2iRGrOZ", "length", "../API/rpcAPI", "startMatch", "concat", "app", "splice", "311631hTDUYJ", "goldLowerLimit", "exports", "6UxmUjs", "1518615MAuiMC", "error", "gold", "catch", "pomelo", "116864rsFIoA", "getRandomNum"];
  a0_0x1f6e = function () {
    return _0x4248ba;
  };
  return a0_0x1f6e();
}