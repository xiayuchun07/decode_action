
const a0_0x4ce072 = a0_0x5dd1;
function a0_0x5dd1(_0x5a37b9, _0x460a2e) {
  const _0x18f481 = a0_0x4316();
  a0_0x5dd1 = function (_0x5c5612, _0x58bdab) {
    _0x5c5612 = _0x5c5612 - 154;
    let _0x2fe2ca = _0x18f481[_0x5c5612];
    return _0x2fe2ca;
  };
  return a0_0x5dd1(_0x5a37b9, _0x460a2e);
}
(function (_0x3f669b, _0x2028c9) {
  const _0x915916 = a0_0x5dd1;
  const _0x46cc1f = _0x3f669b();
  while (true) {
    try {
      const _0x7c4cd6 = parseInt(_0x915916(180)) / 1 * (parseInt(_0x915916(188)) / 2) + parseInt(_0x915916(168)) / 3 * (-parseInt(_0x915916(171)) / 4) + parseInt(_0x915916(189)) / 5 * (-parseInt(_0x915916(173)) / 6) + parseInt(_0x915916(178)) / 7 + -parseInt(_0x915916(183)) / 8 + parseInt(_0x915916(181)) / 9 * (parseInt(_0x915916(170)) / 10) + parseInt(_0x915916(155)) / 11;
      if (_0x7c4cd6 === _0x2028c9) {
        break;
      } else {
        _0x46cc1f.push(_0x46cc1f.shift());
      }
    } catch (_0x2ea23d) {
      _0x46cc1f.push(_0x46cc1f.shift());
    }
  }
})(a0_0x4316, 411348);
function a0_0x4316() {
  const _0x543582 = ["61590IzhEKR", "93356UzGqSZ", "roomMessagePush", "1698oTYvtj", "KickUserPush", "JoinGameAgainPush", "ServerMessagePush", "stack", "3594227znQEOo", "../util/token", "990FOQlSw", "63QTNCse", "SelfEntryRoomPush", "3664472mpdxfG", "popDialogContentPush", "pomelo-logger", "pushMessageByUids", "error", "534qhnYHR", "1935nFtfqw", "get", "connector", "2508451achQlZ", "pushRouter", "updateUserInfoPush", "broadcastPush", "channelService", "PopDialogContentPush", "app", "selfEntryRoomPush", "getLogger", "exports", "gameInvitation", "createMsg", "pomelo", "9EJSyin", "broadcast"];
  a0_0x4316 = function () {
    return _0x543582;
  };
  return a0_0x4316();
}
let api = module[a0_0x4ce072(164)];
let pomelo = require("pomelo");
let logger = require(a0_0x4ce072(185))[a0_0x4ce072(163)](a0_0x4ce072(167));
let token = require(a0_0x4ce072(179));
api[a0_0x4ce072(172)] = function (_0x2750e8, _0x1633f3) {
  return new Promise((_0x5168dd, _0x361f2a) => {
    const _0x160f5b = a0_0x5dd1;
    let _0x524fc3 = pomelo[_0x160f5b(161)].get(_0x160f5b(159));
    _0x2750e8.pushRouter = "RoomMessagePush";
    let _0x442dde = token.createMsg(_0x2750e8);
    _0x524fc3[_0x160f5b(186)](_0x160f5b(176), _0x442dde, _0x1633f3, {}, function (_0x343e13) {
      const _0x2312e1 = _0x160f5b;
      !!_0x343e13 ? (logger[_0x2312e1(187)](_0x343e13[_0x2312e1(177)]), _0x361f2a(_0x343e13)) : _0x5168dd();
    });
  });
};
api.gameMessagePush = function (_0x5c2994, _0xbe0d7d) {
  return new Promise((_0x4076e0, _0x4150ed) => {
    const _0x3ed108 = a0_0x5dd1;
    let _0x59647d = pomelo[_0x3ed108(161)].get(_0x3ed108(159));
    _0x5c2994[_0x3ed108(156)] = "GameMessagePush";
    let _0x1bfb6c = token.createMsg(_0x5c2994);
    _0x59647d[_0x3ed108(186)](_0x3ed108(176), _0x1bfb6c, _0xbe0d7d, {}, function (_0x409d31) {
      const _0x6dd78f = _0x3ed108;
      !!_0x409d31 ? (logger[_0x6dd78f(187)](_0x409d31.stack), _0x4150ed(_0x409d31)) : _0x4076e0();
    });
  });
};
api[a0_0x4ce072(162)] = function (_0x21fd39, _0x57cb60) {
  return new Promise((_0x529672, _0x310bd5) => {
    const _0xe071d = a0_0x5dd1;
    let _0x20a3ab = pomelo[_0xe071d(161)].get("channelService");
    _0x21fd39.pushRouter = _0xe071d(182);
    let _0x558ec1 = token[_0xe071d(166)](_0x21fd39);
    _0x20a3ab.pushMessageByUids(_0xe071d(176), _0x558ec1, _0x57cb60, {}, function (_0x37f5c2) {
      const _0x48ba5f = _0xe071d;
      !!_0x37f5c2 ? (logger.error(_0x37f5c2[_0x48ba5f(177)]), _0x310bd5(_0x37f5c2)) : _0x529672();
    });
  });
};
api[a0_0x4ce072(157)] = function (_0x4c00f4, _0x3f57a4) {
  return new Promise((_0x4ba9b5, _0x86092f) => {
    const _0x325979 = a0_0x5dd1;
    let _0x147c3d = pomelo[_0x325979(161)][_0x325979(190)](_0x325979(159));
    _0x4c00f4[_0x325979(156)] = "UpdateUserInfoPush";
    let _0x92123d = token[_0x325979(166)](_0x4c00f4);
    _0x147c3d[_0x325979(186)](_0x325979(176), _0x92123d, _0x3f57a4, {}, function (_0x54b1ae) {
      const _0x2adb89 = _0x325979;
      !!_0x54b1ae ? (logger[_0x2adb89(187)](_0x54b1ae[_0x2adb89(177)]), _0x86092f(_0x54b1ae)) : _0x4ba9b5(true);
    });
  });
};
api.kickUserPush = function (_0x48555c, _0x1c0ee2) {
  return new Promise((_0x2a3048, _0x5361d2) => {
    const _0x4f9269 = a0_0x5dd1;
    let _0x38e561 = pomelo[_0x4f9269(161)].get(_0x4f9269(159));
    _0x48555c[_0x4f9269(156)] = _0x4f9269(174);
    let _0x3c2e66 = token[_0x4f9269(166)](_0x48555c);
    _0x38e561[_0x4f9269(186)](_0x4f9269(176), _0x3c2e66, _0x1c0ee2, {}, function (_0x24b25f) {
      const _0x3c3ee6 = _0x4f9269;
      !!_0x24b25f ? (logger[_0x3c3ee6(187)](_0x24b25f.stack), _0x5361d2(_0x24b25f)) : _0x2a3048(true);
    });
  });
};
api[a0_0x4ce072(165)] = function (_0x5ed26a, _0x4eb409) {
  return new Promise((_0x59e87c, _0x348a32) => {
    const _0x15ade3 = a0_0x5dd1;
    let _0x584d1d = pomelo[_0x15ade3(161)][_0x15ade3(190)](_0x15ade3(159));
    _0x5ed26a[_0x15ade3(156)] = "gameInvitation";
    let _0x573dbf = token[_0x15ade3(166)](_0x5ed26a);
    _0x584d1d[_0x15ade3(186)]("ServerMessagePush", _0x573dbf, _0x4eb409, {}, function (_0x2fefbf) {
      const _0x519d27 = _0x15ade3;
      !!_0x2fefbf ? (logger[_0x519d27(187)](_0x2fefbf[_0x519d27(177)]), _0x348a32(_0x2fefbf)) : _0x59e87c(true);
    });
  });
};
api.joinGameAgainPush = function (_0x3eb6c0, _0x7c896a) {
  return new Promise((_0x2bd76d, _0x491c18) => {
    const _0x253952 = a0_0x5dd1;
    let _0x28f844 = pomelo.app[_0x253952(190)]("channelService");
    _0x3eb6c0.pushRouter = _0x253952(175);
    let _0x1c088f = token[_0x253952(166)](_0x3eb6c0);
    _0x28f844.pushMessageByUids(_0x253952(176), _0x1c088f, _0x7c896a, {}, function (_0x3da540) {
      const _0x3b4274 = _0x253952;
      !!_0x3da540 ? (logger.error(_0x3da540[_0x3b4274(177)]), _0x491c18(_0x3da540)) : _0x2bd76d(true);
    });
  });
};
api[a0_0x4ce072(158)] = function (_0x429a68) {
  return new Promise((_0x578cfd, _0x34999a) => {
    const _0x396610 = a0_0x5dd1;
    let _0x12add7 = pomelo[_0x396610(161)].get(_0x396610(159));
    _0x429a68[_0x396610(156)] = "BroadcastPush";
    let _0x1b0951 = token.createMsg(_0x429a68);
    _0x12add7[_0x396610(169)](_0x396610(154), _0x396610(176), _0x1b0951, null, function (_0x3b47d1) {
      const _0x4c4078 = _0x396610;
      !!_0x3b47d1 ? (logger[_0x4c4078(187)](_0x3b47d1[_0x4c4078(177)]), _0x34999a(_0x3b47d1)) : _0x578cfd();
    });
  });
};
api[a0_0x4ce072(184)] = function (_0x19734b, _0x18b828) {
  return new Promise((_0x512cde, _0x93292a) => {
    const _0x1de73c = a0_0x5dd1;
    let _0x484d00 = pomelo[_0x1de73c(161)][_0x1de73c(190)](_0x1de73c(159));
    _0x19734b[_0x1de73c(156)] = _0x1de73c(160);
    let _0x5674c2 = token[_0x1de73c(166)](_0x19734b);
    _0x484d00[_0x1de73c(186)]("ServerMessagePush", _0x5674c2, _0x18b828, {}, function (_0x1c2f31) {
      const _0x59063 = _0x1de73c;
      !!_0x1c2f31 ? (logger[_0x59063(187)](_0x1c2f31[_0x59063(177)]), _0x93292a(_0x1c2f31)) : _0x512cde();
    });
  });
};