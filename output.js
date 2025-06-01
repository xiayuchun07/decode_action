
const a0_0x2ad6c2 = a0_0x41ed;
function a0_0x41ed(_0x50274c, _0xe0f28) {
  const _0x46d50e = a0_0x1ee2();
  a0_0x41ed = function (_0x1ae6c1, _0x32cb9d) {
    _0x1ae6c1 = _0x1ae6c1 - 430;
    let _0xf5390f = _0x46d50e[_0x1ae6c1];
    return _0xf5390f;
  };
  return a0_0x41ed(_0x50274c, _0xe0f28);
}
(function (_0x206cb2, _0x279396) {
  const _0x109b29 = a0_0x41ed;
  const _0x4679fa = _0x206cb2();
  while (true) {
    try {
      const _0x35da36 = parseInt(_0x109b29(457)) / 1 + parseInt(_0x109b29(431)) / 2 + parseInt(_0x109b29(446)) / 3 + -parseInt(_0x109b29(447)) / 4 * (parseInt(_0x109b29(475)) / 5) + parseInt(_0x109b29(432)) / 6 * (parseInt(_0x109b29(445)) / 7) + -parseInt(_0x109b29(467)) / 8 * (parseInt(_0x109b29(461)) / 9) + -parseInt(_0x109b29(474)) / 10;
      if (_0x35da36 === _0x279396) {
        break;
      } else {
        _0x4679fa.push(_0x4679fa.shift());
      }
    } catch (_0x20d251) {
      _0x4679fa.push(_0x4679fa.shift());
    }
  }
})(a0_0x1ee2, 693627);
const moment = require("moment");
let userDao = require(a0_0x2ad6c2(435));
let logger = require("pomelo-logger")[a0_0x2ad6c2(466)](a0_0x2ad6c2(441));
let pushAPI = require(a0_0x2ad6c2(480));
class createRoomAgain {
  static [a0_0x2ad6c2(481)]() {
    const _0x1c3309 = a0_0x2ad6c2;
    !createRoomAgain[_0x1c3309(438)] && (createRoomAgain[_0x1c3309(438)] = new createRoomAgain());
    return createRoomAgain.instance;
  }
  constructor() {
    const _0x381130 = a0_0x2ad6c2;
    this.createRoomTimer = {};
    this[_0x381130(440)] = {};
    this[_0x381130(443)] = {};
    this.curJoinUser = {};
  }
  async [a0_0x2ad6c2(453)](_0x4efb22, _0x5d5b87, _0x2bffbb, _0x21a80e, _0xfa931d) {
    const _0x1426d8 = a0_0x2ad6c2;
    logger[_0x1426d8(437)](_0x1426d8(451) + _0x5d5b87.uid + _0x1426d8(439) + _0x4efb22 + _0x1426d8(449) + _0x21a80e + " ");
    if (!this[_0x1426d8(440)][_0x4efb22]) {
      let _0x2cd7db = moment()[_0x1426d8(458)]("x");
      let _0xb65f53 = moment()[_0x1426d8(473)](10, "s")[_0x1426d8(458)]("x");
      let _0x1a67f6 = false;
      let _0x5726ef = null;
      let _0x4b32e6 = [];
      let _0x1665f1 = null;
      let _0x5c00a0 = [];
      let _0x25a91b = true;
      this[_0x1426d8(440)][_0x4efb22] = {
        isJoined: _0x25a91b,
        joinRoomID: _0x1665f1,
        createTime: _0x2cd7db,
        endTime: _0xb65f53,
        union: _0x2bffbb,
        gameRuleID: _0x21a80e,
        gameRule: _0xfa931d,
        isCreated: _0x1a67f6,
        creatrUser: _0x5726ef,
        joinUserList: _0x4b32e6,
        pendingUserList: _0x5c00a0
      };
      this[_0x1426d8(443)][_0x4efb22] = setInterval(() => {
        const _0x518134 = _0x1426d8;
        !this.curJoinUser[_0x4efb22] && this[_0x518134(448)](_0x4efb22);
      }, 200);
    }
    !this[_0x1426d8(440)][_0x4efb22][_0x1426d8(433)].find(_0x528c48 => _0x528c48[_0x1426d8(455)] == _0x5d5b87[_0x1426d8(455)]) && !this.createUserList[_0x4efb22].joinUserList.includes(_0x5d5b87.uid) && this[_0x1426d8(440)][_0x4efb22][_0x1426d8(433)][_0x1426d8(472)](_0x5d5b87);
  }
  async [a0_0x2ad6c2(448)](_0x463f51) {
    const _0x210fc9 = a0_0x2ad6c2;
    let _0xb29308 = this[_0x210fc9(440)][_0x463f51];
    if (!_0xb29308) {
      return;
    }
    _0xb29308 && moment().format("x") > _0xb29308[_0x210fc9(471)] && this.clearRoomData(_0x463f51);
    let _0x229f0b = _0xb29308[_0x210fc9(456)];
    if (_0xb29308 && _0x229f0b && _0xb29308[_0x210fc9(444)]) {
      let _0x51c353 = _0xb29308[_0x210fc9(433)][_0x210fc9(459)]();
      if (_0x51c353 && !_0xb29308[_0x210fc9(478)][_0x210fc9(482)](_0x51c353[_0x210fc9(455)])) {
        this[_0x210fc9(462)][_0x463f51] = _0x51c353;
        this.createUserList[_0x463f51][_0x210fc9(444)] = false;
        if (_0xb29308[_0x210fc9(454)]) {
          let _0x516171 = await _0x229f0b.joinRoom(_0xb29308[_0x210fc9(454)], _0x51c353);
          _0x516171 == 0 ? (this[_0x210fc9(440)][_0x463f51].joinUserList.push(_0x51c353.uid), logger[_0x210fc9(437)](_0x210fc9(451) + _0x51c353.uid + _0x210fc9(450) + _0xb29308[_0x210fc9(454)] + _0x210fc9(436) + this[_0x210fc9(440)][_0x463f51][_0x210fc9(478)])) : (pushAPI[_0x210fc9(442)]({
            uid: _0x51c353[_0x210fc9(455)],
            code: _0x516171
          }, [{
            uid: _0x51c353[_0x210fc9(455)],
            sid: _0x51c353[_0x210fc9(470)]
          }]), logger[_0x210fc9(469)]("[createRoomAgain] uid = " + _0x51c353.uid + _0x210fc9(450) + _0xb29308.joinRoomID + _0x210fc9(434) + _0x516171 + " "));
          this[_0x210fc9(440)][_0x463f51].isJoined = true;
          this[_0x210fc9(462)][_0x463f51] = null;
        } else {
          let _0x1bd5df = await _0x229f0b[_0x210fc9(460)](_0xb29308[_0x210fc9(463)], _0xb29308[_0x210fc9(468)], _0x51c353);
          if (_0x1bd5df == 0) {
            let _0x51c18d = await userDao[_0x210fc9(479)](_0x51c353[_0x210fc9(455)]);
            this[_0x210fc9(440)][_0x463f51].joinRoomID = _0x51c18d[_0x210fc9(430)];
            this[_0x210fc9(440)][_0x463f51][_0x210fc9(478)][_0x210fc9(472)](_0x51c353[_0x210fc9(455)]);
            logger[_0x210fc9(437)]("[createRoomAgain] uid = " + _0x51c353[_0x210fc9(455)] + _0x210fc9(464) + _0x463f51 + _0x210fc9(477) + _0xb29308[_0x210fc9(454)] + _0x210fc9(436) + this.createUserList[_0x463f51][_0x210fc9(478)]);
          } else {
            logger[_0x210fc9(437)](_0x210fc9(451) + _0x51c353[_0x210fc9(455)] + " create fail code = " + _0x1bd5df);
            pushAPI[_0x210fc9(442)]({
              uid: _0x51c353[_0x210fc9(455)],
              code: _0x1bd5df
            }, [{
              uid: _0x51c353[_0x210fc9(455)],
              sid: _0x51c353[_0x210fc9(470)]
            }]);
          }
          this[_0x210fc9(440)][_0x463f51][_0x210fc9(444)] = true;
          this[_0x210fc9(462)][_0x463f51] = null;
        }
      }
    }
  }
  [a0_0x2ad6c2(465)](_0xd74ad3) {
    const _0x4683c6 = a0_0x2ad6c2;
    logger.info(_0x4683c6(452) + _0xd74ad3);
    this[_0x4683c6(443)][_0xd74ad3] && (clearInterval(this[_0x4683c6(443)][_0xd74ad3]), delete this[_0x4683c6(443)][_0xd74ad3], this[_0x4683c6(443)][_0xd74ad3] = null);
    delete this[_0x4683c6(440)][_0xd74ad3];
    delete this[_0x4683c6(462)][_0xd74ad3];
  }
}
function a0_0x1ee2() {
  const _0x2b62d2 = ["includes", "roomID", "1790132utsZkY", "1698SQKjUh", "pendingUserList", " fail code = ", "../dao/userDao", " success userList = ", "info", "instance", " game Again roomID = ", "createUserList", "createagain", "joinGameAgainPush", "createRoomIntervalID", "isJoined", "13615pLUFpO", "3468810ukoveK", "1040gIifKw", "addUserToGame", " gameRuleID = ", " join roomID = ", "[createRoomAgain] uid = ", "[createRoomAgain] clear join again data roomID = ", "addUserList", "joinRoomID", "uid", "union", "1003876fuTKvs", "format", "shift", "createRoom", "4006440HOAfvM", "curJoinUser", "gameRuleID", " oldRoomID = ", "clearRoomData", "getLogger", "16SfEhil", "gameRule", "error", "frontendId", "endTime", "push", "add", "18020000RKWTya", "4225zleBQf", "exports", " create roomID = ", "joinUserList", "getUserDataByUid", "../API/pushAPI", "getInstance"];
  a0_0x1ee2 = function () {
    return _0x2b62d2;
  };
  return a0_0x1ee2();
}
module[a0_0x2ad6c2(476)] = createRoomAgain;