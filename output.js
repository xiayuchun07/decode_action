
function a0_0x64e6(_0x659065, _0x1a4b74) {
  const _0x1dbd0f = a0_0x4eca();
  a0_0x64e6 = function (_0x298ed9, _0x39b833) {
    _0x298ed9 = _0x298ed9 - 406;
    let _0x527e9b = _0x1dbd0f[_0x298ed9];
    return _0x527e9b;
  };
  return a0_0x64e6(_0x659065, _0x1a4b74);
}
const a0_0x1e85f7 = a0_0x64e6;
(function (_0x130a2a, _0x226725) {
  const _0x1c22e9 = a0_0x64e6;
  const _0x8b73bb = _0x130a2a();
  while (true) {
    try {
      const _0x1545da = -parseInt(_0x1c22e9(420)) / 1 * (-parseInt(_0x1c22e9(439)) / 2) + parseInt(_0x1c22e9(435)) / 3 * (-parseInt(_0x1c22e9(436)) / 4) + parseInt(_0x1c22e9(434)) / 5 + -parseInt(_0x1c22e9(438)) / 6 + -parseInt(_0x1c22e9(429)) / 7 + -parseInt(_0x1c22e9(437)) / 8 * (parseInt(_0x1c22e9(445)) / 9) + parseInt(_0x1c22e9(449)) / 10 * (parseInt(_0x1c22e9(443)) / 11);
      if (_0x1545da === _0x226725) {
        break;
      } else {
        _0x8b73bb.push(_0x8b73bb.shift());
      }
    } catch (_0x3e7457) {
      _0x8b73bb.push(_0x8b73bb.shift());
    }
  }
})(a0_0x4eca, 578261);
let code = require(a0_0x1e85f7(427));
let unionManager = require(a0_0x1e85f7(411));
let logger = require(a0_0x1e85f7(421))[a0_0x1e85f7(419)](a0_0x1e85f7(416));
module[a0_0x1e85f7(447)] = function (_0x5572b9) {
  return new roomRemote(_0x5572b9);
};
let roomRemote = function (_0x236146) {
  const _0x15215a = a0_0x1e85f7;
  this[_0x15215a(422)] = _0x236146;
};
let pro = roomRemote[a0_0x1e85f7(424)];
function a0_0x4eca() {
  const _0xb11433 = ["roomDismissed", "createRoom", "4999785UOVKRV", "4611liVGtz", "1388YwwxkL", "16SzCeGA", "5083104xUQWYW", "2065028lkOzfp", "roomManager", "REQUEST_DATA_ERROR", "leaveRoom", "11KYXMgg", "searchRoomByUid", "913923CFtpnZ", "dissMissRoom", "exports", "getUnionByRoomID", "7522500npNLLS", "updateRoomUserInfo", "joinRoom", "message", "then", "set", "config", "../domain/unionManager", "isUserInRoom", "stack", "joinWatch", "userArr", "logic", "gameType", "getMatchRoomList", "getLogger", "1fWToxV", "pomelo-logger", "app", "getRoomFrameByID", "prototype", "getUnion", "error", "../../../constant/code", "getRoomGameDataByRoomID", "4359901zHsXyF", "roomID", "gameRule"];
  a0_0x4eca = function () {
    return _0xb11433;
  };
  return a0_0x4eca();
}
pro.createRoom = async function (_0x58f638, _0x5f1435, _0x183461, _0x232c45) {
  const _0x247f99 = a0_0x1e85f7;
  await this[_0x247f99(440)][_0x247f99(433)](_0x58f638, _0x5f1435, _0x183461);
  _0x232c45();
};
pro[a0_0x1e85f7(406)] = async function (_0x299cd3, _0x693d71, _0x186898) {
  const _0x29c6a8 = a0_0x1e85f7;
  try {
    let _0x5ab8c7 = await unionManager[_0x29c6a8(406)](_0x299cd3, _0x693d71);
    _0x186898(null, _0x5ab8c7);
  } catch (_0x53d4bb) {
    logger.error(_0x53d4bb.stack);
    _0x186898(parseInt(_0x53d4bb.message || 500));
  }
};
pro[a0_0x1e85f7(414)] = async function (_0x45f985, _0x452153, _0xfa6a2) {
  const _0x30fcf9 = a0_0x1e85f7;
  try {
    let _0x268856 = await unionManager[_0x30fcf9(414)](_0x45f985, _0x452153);
    _0xfa6a2(null, _0x268856);
  } catch (_0x592a7b) {
    logger[_0x30fcf9(426)](_0x592a7b[_0x30fcf9(413)]);
    _0xfa6a2(parseInt(_0x592a7b[_0x30fcf9(407)] || 500));
  }
};
pro[a0_0x1e85f7(442)] = function (_0x59b17d, _0x53f275, _0x48ec8a) {
  const _0x1adcac = a0_0x1e85f7;
  unionManager.leaveRoom(_0x59b17d, _0x53f275)[_0x1adcac(408)](() => {
    _0x48ec8a();
  }).catch(_0x187426 => {
    const _0x5b715b = _0x1adcac;
    logger[_0x5b715b(426)](_0x187426.stack);
    _0x48ec8a();
  });
};
pro[a0_0x1e85f7(412)] = function (_0x27e927, _0xcfdf15, _0x608287) {
  _0x608287(null, unionManager.isUserInRoom(_0x27e927, _0xcfdf15));
};
pro[a0_0x1e85f7(444)] = function (_0x391890, _0x2f04b6) {
  const _0xc9ff58 = a0_0x1e85f7;
  _0x2f04b6(null, unionManager[_0xc9ff58(444)](_0x391890));
};
pro[a0_0x1e85f7(428)] = function (_0x2880e7, _0x567c8b) {
  const _0x4cfab9 = a0_0x1e85f7;
  let _0x13a805 = unionManager[_0x4cfab9(423)](_0x2880e7);
  let _0x37d196 = {
    gameType: _0x13a805[_0x4cfab9(417)],
    roomDismissed: _0x13a805[_0x4cfab9(432)],
    roomID: _0x13a805[_0x4cfab9(430)],
    userArr: _0x13a805[_0x4cfab9(415)],
    gameRule: _0x13a805[_0x4cfab9(431)]
  };
  _0x567c8b(null, _0x37d196);
};
pro[a0_0x1e85f7(450)] = function (_0x16b03c, _0x326830, _0x5af367) {
  const _0x481806 = a0_0x1e85f7;
  let _0x37826e = this[_0x481806(440)][_0x481806(423)](_0x326830);
  !_0x37826e ? _0x5af367(code[_0x481806(441)]) : (_0x37826e[_0x481806(450)](_0x16b03c, false), _0x5af367());
};
pro.updatePublicParameter = function (_0x167065, _0x534055) {
  const _0x595228 = a0_0x1e85f7;
  this[_0x595228(422)][_0x595228(409)](_0x595228(410), _0x167065);
  _0x534055();
};
pro[a0_0x1e85f7(418)] = function (_0x4a315a, _0x2152d4) {
  const _0x428f80 = a0_0x1e85f7;
  _0x2152d4(null, this.roomManager[_0x428f80(418)](_0x4a315a));
};
pro[a0_0x1e85f7(446)] = async function (_0xb75410, _0x302c5e) {
  const _0x4f9784 = a0_0x1e85f7;
  let _0x25cf23 = await unionManager[_0x4f9784(448)](_0xb75410);
  _0x25cf23 && (await _0x25cf23.dismissRoom(_0xb75410));
  _0x302c5e();
};
pro.removeRuleID = async function (_0x4236ba, _0x363b55, _0x31d1b2) {
  const _0x5b7124 = a0_0x1e85f7;
  let _0x18d4ca = await unionManager[_0x5b7124(425)](_0x4236ba);
  _0x18d4ca && (await _0x18d4ca.removeRoomRuleList(_0x363b55));
  _0x31d1b2();
};