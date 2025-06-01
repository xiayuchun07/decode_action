
const a0_0x10e98a = a0_0x4030;
(function (_0x558bf9, _0x5d4f43) {
  const _0x1a8ee4 = a0_0x4030;
  const _0x1ca752 = _0x558bf9();
  while (true) {
    try {
      const _0x1b81b7 = -parseInt(_0x1a8ee4(305)) / 1 * (-parseInt(_0x1a8ee4(301)) / 2) + parseInt(_0x1a8ee4(320)) / 3 * (-parseInt(_0x1a8ee4(319)) / 4) + -parseInt(_0x1a8ee4(321)) / 5 + -parseInt(_0x1a8ee4(326)) / 6 + parseInt(_0x1a8ee4(329)) / 7 * (parseInt(_0x1a8ee4(335)) / 8) + -parseInt(_0x1a8ee4(318)) / 9 + parseInt(_0x1a8ee4(313)) / 10 * (parseInt(_0x1a8ee4(309)) / 11);
      if (_0x1b81b7 === _0x5d4f43) {
        break;
      } else {
        _0x1ca752.push(_0x1ca752.shift());
      }
    } catch (_0x13588f) {
      _0x1ca752.push(_0x1ca752.shift());
    }
  }
})(a0_0x2866, 881252);
let domain = require(a0_0x10e98a(314));
let userDao = require("../../../dao/userDao");
let userInfoServices = require(a0_0x10e98a(310));
let dispatch = require(a0_0x10e98a(330));
let rpcAPI = require("../../../API/rpcAPI");
let code = require(a0_0x10e98a(308));
let logger = require(a0_0x10e98a(332))[a0_0x10e98a(312)]("robot");
let robotServices = require(a0_0x10e98a(303));
let commonDao = require(a0_0x10e98a(334));
let unionManager = require(a0_0x10e98a(317));
function a0_0x2866() {
  const _0x32f26c = ["4acCoop", "4758111iqZgex", "359100pqLpLa", "exports", " errMsg = ", " RoomId = ", "game", "7837356yFBLTc", "error", "[robot] Join Game Fail RoomId = ", "77HEYxKy", "../../../util/dispatcher", " unionID = ", "pomelo-logger", "uid", "../../../dao/commonDao", "465736fmfhpA", "[robot] Join Game Success  robotUserID = ", " robotUserID =  ", "3443730TghELg", "app", "../../../services/robotServices", "getServersByType", "1bKyEEN", " Code = ", "joinRoom", "../../../constant/code", "616LIsACi", "../../../services/userInfoServices", "getRandomRobot", "getLogger", "363480syjRVM", "../domain/lifecycleDomain", "dispatch", "prototype", "../../game/domain/unionManager", "4971645ulhXhI"];
  a0_0x2866 = function () {
    return _0x32f26c;
  };
  return a0_0x2866();
}
module[a0_0x10e98a(322)] = function (_0x30a645) {
  return new remote(_0x30a645);
};
let remote = function (_0x3baaf2) {
  const _0x5e491a = a0_0x10e98a;
  this[_0x5e491a(302)] = _0x3baaf2;
};
let pro = remote[a0_0x10e98a(316)];
function a0_0x4030(_0x592194, _0x2f935a) {
  const _0x1b46c6 = a0_0x2866();
  a0_0x4030 = function (_0x4b3142, _0x42bb6a) {
    _0x4b3142 = _0x4b3142 - 299;
    let _0x488602 = _0x1b46c6[_0x4b3142];
    return _0x488602;
  };
  return a0_0x4030(_0x592194, _0x2f935a);
}
pro[a0_0x10e98a(311)] = async function (_0x2df16d, _0x398ad7, _0x2fe547) {
  const _0x2d7e89 = a0_0x10e98a;
  let _0x18e922 = await robotServices[_0x2d7e89(311)](_0x2df16d);
  if (_0x18e922 && !!_0x398ad7) {
    let _0x4558cb = dispatch[_0x2d7e89(315)](_0x398ad7, this[_0x2d7e89(302)][_0x2d7e89(304)](_0x2d7e89(325)));
    let _0x3e34ac = await rpcAPI.isUserInRoom(_0x4558cb.id, _0x18e922[_0x2d7e89(333)], _0x398ad7);
    if (!_0x3e34ac) {
      let _0x541d41 = await rpcAPI[_0x2d7e89(307)](_0x4558cb.id, _0x18e922, _0x398ad7);
      _0x541d41 == 0 ? logger.info(_0x2d7e89(299) + _0x18e922[_0x2d7e89(333)] + _0x2d7e89(324) + _0x398ad7 + " unionID = " + _0x2df16d + " ") : logger[_0x2d7e89(327)](_0x2d7e89(328) + _0x398ad7 + _0x2d7e89(331) + _0x2df16d + _0x2d7e89(306) + _0x541d41 + _0x2d7e89(323) + code[_0x541d41]);
    } else {
      logger.info("[robot] User In Room unionID = " + _0x2df16d + "  RoomId = " + _0x398ad7 + _0x2d7e89(300) + _0x18e922[_0x2d7e89(333)] + " ");
    }
  }
};