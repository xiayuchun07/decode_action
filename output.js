
function a0_0x4e29() {
  const _0x17ac20 = ["36PhoWbu", "partner", "uid", "getInstance", "includes", "map", "330KpzhlE", "6waNdEb", "filter", "unionUserList", "408PrxqAy", "spreaderID", "2615606TEOpQq", "getLowerUser", "7441225EzBrlG", "1241920JOaSLF", "29860pMRiMT", "31921wFigVX", "length", "instance", "getAllUnionData", "push", "find", "addUnionUser", "1097352pjoUeW", "64971BYHVkX", "unionList", "getSpreaderUser", "getUnionByID"];
  a0_0x4e29 = function () {
    return _0x17ac20;
  };
  return a0_0x4e29();
}
function a0_0x201c(_0x5c22c2, _0x3ea42d) {
  const _0xf3c4d8 = a0_0x4e29();
  a0_0x201c = function (_0x3bf74b, _0x3d7423) {
    _0x3bf74b = _0x3bf74b - 135;
    let _0x37fb9a = _0xf3c4d8[_0x3bf74b];
    return _0x37fb9a;
  };
  return a0_0x201c(_0x5c22c2, _0x3ea42d);
}
const a0_0x1e28ef = a0_0x201c;
(function (_0x2508e9, _0x31167e) {
  const _0x58c683 = a0_0x201c;
  const _0x6bea01 = _0x2508e9();
  while (true) {
    try {
      const _0x4a8cdb = parseInt(_0x58c683(158)) / 1 * (parseInt(_0x58c683(141)) / 2) + parseInt(_0x58c683(148)) / 3 * (-parseInt(_0x58c683(136)) / 4) + -parseInt(_0x58c683(157)) / 5 * (-parseInt(_0x58c683(147)) / 6) + parseInt(_0x58c683(153)) / 7 + parseInt(_0x58c683(151)) / 8 * (parseInt(_0x58c683(137)) / 9) + -parseInt(_0x58c683(156)) / 10 + -parseInt(_0x58c683(155)) / 11;
      if (_0x4a8cdb === _0x31167e) {
        break;
      } else {
        _0x6bea01.push(_0x6bea01.shift());
      }
    } catch (_0xcf28e7) {
      _0x6bea01.push(_0x6bea01.shift());
    }
  }
})(a0_0x4e29, 295522);
class unionUserService {
  constructor() {
    const _0x3cc5f8 = a0_0x201c;
    this[_0x3cc5f8(138)] = {};
    this.unionUserList = {};
  }
  static [a0_0x1e28ef(144)]() {
    const _0x3e583c = a0_0x1e28ef;
    !unionUserService[_0x3e583c(160)] && (unionUserService[_0x3e583c(160)] = new unionUserService());
    return unionUserService[_0x3e583c(160)];
  }
  addUnionData(_0x549250, _0xa8c187) {
    this.unionList[_0x549250] = _0xa8c187;
  }
  [a0_0x1e28ef(140)](_0x46a874) {
    const _0x350f0b = a0_0x1e28ef;
    return this[_0x350f0b(138)][_0x46a874];
  }
  [a0_0x1e28ef(161)]() {
    const _0x4a34ff = a0_0x1e28ef;
    return this[_0x4a34ff(138)];
  }
  [a0_0x1e28ef(135)](_0x30ecd3, _0x4f21df) {
    const _0x1933b1 = a0_0x1e28ef;
    this[_0x1933b1(150)][_0x30ecd3] = _0x4f21df;
  }
  [a0_0x1e28ef(154)](_0x4bbd7b, _0x501f23) {
    const _0x544276 = a0_0x1e28ef;
    let _0x3678d9 = [];
    let _0x54cd40 = this.unionUserList[_0x4bbd7b];
    let _0x5287db = _0x54cd40.find(_0x4f44d8 => _0x4f44d8.uid == _0x501f23);
    if (_0x5287db) {
      let _0xdb12a5 = true;
      let _0x58bc40 = [_0x5287db.uid];
      if (_0x5287db[_0x544276(142)]) {
        while (_0xdb12a5) {
          let _0x37c437 = _0x54cd40[_0x544276(149)](_0x3851c6 => _0x58bc40[_0x544276(145)](_0x3851c6[_0x544276(152)]));
          _0x37c437[_0x544276(159)] > 0 ? (_0x58bc40 = [], _0x37c437[_0x544276(146)](_0x10e950 => {
            const _0xe77cd8 = _0x544276;
            _0x58bc40[_0xe77cd8(162)](_0x10e950[_0xe77cd8(143)]);
            _0x3678d9[_0xe77cd8(162)](_0x10e950[_0xe77cd8(143)]);
          })) : _0xdb12a5 = false;
        }
      }
    }
    return _0x3678d9;
  }
  [a0_0x1e28ef(139)](_0x3a3d51, _0x229756) {
    const _0x5266ec = a0_0x1e28ef;
    let _0x1b5350 = [];
    let _0x2b2712 = this[_0x5266ec(150)][_0x3a3d51];
    let _0x386b01 = _0x2b2712[_0x5266ec(163)](_0x482e44 => _0x482e44[_0x5266ec(143)] == _0x229756);
    if (_0x386b01) {
      let _0xfbe11a = true;
      let _0x1a36aa = _0x386b01.spreaderID;
      while (_0xfbe11a && _0x1a36aa) {
        _0x1b5350[_0x5266ec(162)](_0x1a36aa);
        let _0x22de40 = _0x2b2712[_0x5266ec(163)](_0x2027e1 => _0x2027e1[_0x5266ec(143)] == _0x1a36aa);
        _0x22de40 ? _0x22de40[_0x5266ec(152)] ? _0x1a36aa = _0x22de40[_0x5266ec(152)] : _0xfbe11a = false : _0xfbe11a = false;
      }
    }
    return _0x1b5350;
  }
}
module.exports = unionUserService;