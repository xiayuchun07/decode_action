
const a0_0x2dbc4c = a0_0x3492;
(function (_0x6a20f0, _0x861b48) {
  const _0x3af101 = a0_0x3492;
  const _0x1c3423 = _0x6a20f0();
  while (true) {
    try {
      const _0x3e27ae = parseInt(_0x3af101(174)) / 1 + parseInt(_0x3af101(156)) / 2 + parseInt(_0x3af101(168)) / 3 * (-parseInt(_0x3af101(165)) / 4) + -parseInt(_0x3af101(155)) / 5 + parseInt(_0x3af101(177)) / 6 + -parseInt(_0x3af101(170)) / 7 + -parseInt(_0x3af101(146)) / 8 * (-parseInt(_0x3af101(157)) / 9);
      if (_0x3e27ae === _0x861b48) {
        break;
      } else {
        _0x1c3423.push(_0x1c3423.shift());
      }
    } catch (_0x103279) {
      _0x1c3423.push(_0x1c3423.shift());
    }
  }
})(a0_0x1869, 648615);
let code = require(a0_0x2dbc4c(154));
let scheduler = require(a0_0x2dbc4c(133));
let logger = require("pomelo-logger").getLogger(a0_0x2dbc4c(169));
let RoomFrame = require(a0_0x2dbc4c(159));
let utils = require(a0_0x2dbc4c(134));
let enumeration = require(a0_0x2dbc4c(167));
let exp = module[a0_0x2dbc4c(150)];
let ROOM_MAX_DELAY_DELETE_TIME = 3600000;
function a0_0x3492(_0x104a62, _0x13b3b3) {
  const _0x22818e = a0_0x1869();
  a0_0x3492 = function (_0x2ca971, _0xbafc8a) {
    _0x2ca971 = _0x2ca971 - 132;
    let _0x25a4fa = _0x22818e[_0x2ca971];
    return _0x25a4fa;
  };
  return a0_0x3492(_0x104a62, _0x13b3b3);
}
exp[a0_0x2dbc4c(139)] = function (_0xf65fa0) {
  const _0x480b87 = a0_0x2dbc4c;
  this[_0x480b87(147)] = _0xf65fa0;
  this[_0x480b87(136)] = {};
  this[_0x480b87(142)] = -1;
  this[_0x480b87(148)]();
};
function a0_0x1869() {
  const _0x5920fe = ["game", "stopScheduler", "room id: ", "createRoom", "getServersByType", "16imBoUY", "curServer", "../../../constant/enumeration", "500190LTDUcT", "logic", "874349ASdCyc", "manager", "isShouldDelete", "destroyRoom", "1034863wFqbYA", "getRandomNum", "createNewRoomID", "729420seFcUk", "roomID", "pomelo-scheduler", "../../../util/utils", "ROOM_NOT_EXIST", "roomList", "room count:", "length", "init", "leaveRoom", "cancelJob", "scheduleJobID", "dismissRoom", "info", "getRoomFrameByID", "16DmUqVK", "app", "startScheduler", "ownUser", "exports", "hasOwnProperty", "toLocaleString", ":room manager schedule task", "../../../constant/code", "5554915CbSDll", "224388qTZrVR", "5772591pIAFlX", "userOffLine", "../../../gameComponent/roomFrame"];
  a0_0x1869 = function () {
    return _0x5920fe;
  };
  return a0_0x1869();
}
let scheduleTask = function (_0x121b56) {
  const _0x3733e3 = a0_0x2dbc4c;
  let _0x447338 = _0x121b56[_0x3733e3(171)];
  let _0x1c02a1 = new Date()[_0x3733e3(152)]();
  logger[_0x3733e3(144)](_0x447338[_0x3733e3(147)][_0x3733e3(166)].id + _0x3733e3(153));
  logger[_0x3733e3(144)](_0x1c02a1);
  let _0x2716fd = 0;
  for (let _0x360bfe in _0x447338[_0x3733e3(136)]) {
    if (_0x447338[_0x3733e3(136)][_0x3733e3(151)](_0x360bfe)) {
      let _0x523066 = _0x447338[_0x3733e3(136)][_0x360bfe];
      logger[_0x3733e3(144)](_0x3733e3(162) + _0x360bfe);
      _0x523066[_0x3733e3(172)](ROOM_MAX_DELAY_DELETE_TIME) ? (_0x523066[_0x3733e3(173)](), delete _0x447338.roomList[_0x360bfe], logger[_0x3733e3(144)]("delete room id:" + _0x360bfe)) : _0x2716fd++;
    }
  }
  logger[_0x3733e3(144)](_0x3733e3(137) + _0x2716fd);
};
exp[a0_0x2dbc4c(148)] = function () {
  const _0x25e952 = a0_0x2dbc4c;
  this[_0x25e952(142)] = scheduler.scheduleJob({
    period: ROOM_MAX_DELAY_DELETE_TIME
  }, scheduleTask, {
    manager: this
  });
};
exp[a0_0x2dbc4c(161)] = function () {
  const _0x234d48 = a0_0x2dbc4c;
  scheduler[_0x234d48(141)](this[_0x234d48(142)]);
};
exp.beforeShutdown = function (_0x428c02) {
  const _0x2cf59c = a0_0x2dbc4c;
  this[_0x2cf59c(161)]();
  _0x428c02();
};
exp[a0_0x2dbc4c(163)] = async function (_0xcd684a, _0x42ebd4) {
  const _0x15e89f = a0_0x2dbc4c;
  let _0x41ae6a = this.createNewRoomID();
  let _0x4b162a = new RoomFrame(_0x41ae6a, _0xcd684a, _0x42ebd4);
  this[_0x15e89f(136)][_0x41ae6a] = _0x4b162a;
  return await _0x4b162a.userEntryRoom(_0xcd684a);
};
exp.joinRoom = async function (_0x4204a9, _0x3361d3) {
  const _0x378675 = a0_0x2dbc4c;
  let _0x535ee3 = this[_0x378675(136)][_0x3361d3];
  if (!_0x535ee3) {
    throw new Error(code.ROOM_NOT_EXIST);
  }
  await _0x535ee3.userEntryRoom(_0x4204a9);
  return _0x3361d3;
};
exp[a0_0x2dbc4c(140)] = async function (_0x6c9f77, _0x98fe8e) {
  const _0x66786c = a0_0x2dbc4c;
  let _0x499aa6 = this[_0x66786c(136)][_0x6c9f77];
  if (!_0x499aa6) {
    throw new Error(code[_0x66786c(135)]);
  }
  return await _0x499aa6[_0x66786c(158)](_0x98fe8e);
};
exp[a0_0x2dbc4c(143)] = function (_0x3c6671) {
  const _0x231731 = a0_0x2dbc4c;
  delete this[_0x231731(136)][_0x3c6671];
};
exp[a0_0x2dbc4c(145)] = function (_0x2fd7a0) {
  return this.roomList[_0x2fd7a0] || null;
};
exp.isUserInRoom = function (_0x17aadc, _0xe036e9) {
  let _0x2364a3 = this.roomList[_0xe036e9];
  return _0x2364a3 && _0x2364a3.ownUser(_0x17aadc);
};
exp.searchRoomByUid = function (_0x385c11) {
  const _0x1ad1e1 = a0_0x2dbc4c;
  let _0x2068c0 = 0;
  for (let _0x20b8a7 in this[_0x1ad1e1(136)]) {
    if (this[_0x1ad1e1(136)][_0x1ad1e1(151)](_0x20b8a7)) {
      let _0x24b561 = this.roomList[_0x20b8a7];
      if (_0x24b561[_0x1ad1e1(149)](_0x385c11)) {
        _0x2068c0 = _0x24b561[_0x1ad1e1(132)];
        break;
      }
    }
  }
  return _0x2068c0;
};
exp[a0_0x2dbc4c(176)] = function () {
  const _0x468bd5 = a0_0x2dbc4c;
  let _0x3955e1 = this[_0x468bd5(147)][_0x468bd5(164)](_0x468bd5(160));
  let _0x1454da = 0;
  for (let _0x70e696 = 0; _0x70e696 < _0x3955e1[_0x468bd5(138)]; ++_0x70e696) {
    if (_0x3955e1[_0x70e696].id === this[_0x468bd5(147)][_0x468bd5(166)].id) {
      _0x1454da = _0x70e696;
      break;
    }
  }
  let _0x969913 = -1;
  let _0x542e49 = Math.floor(100000 / _0x3955e1[_0x468bd5(138)]) + 1;
  let _0x20ebbb = Math.floor(1000000 / _0x3955e1[_0x468bd5(138)]) - 1;
  do {
    _0x969913 = utils[_0x468bd5(175)](_0x542e49, _0x20ebbb) * _0x3955e1[_0x468bd5(138)] + _0x1454da;
  } while (!!this[_0x468bd5(136)][_0x969913] && !!_0x969913);
  return _0x969913;
};