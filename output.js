
const a0_0x35114c = a0_0x76d4;
(function (_0x550935, _0x456682) {
  const _0x134cb3 = a0_0x76d4;
  const _0x4d1b83 = _0x550935();
  while (true) {
    try {
      const _0x207014 = parseInt(_0x134cb3(320)) / 1 + -parseInt(_0x134cb3(308)) / 2 * (-parseInt(_0x134cb3(344)) / 3) + parseInt(_0x134cb3(300)) / 4 + parseInt(_0x134cb3(319)) / 5 + parseInt(_0x134cb3(349)) / 6 * (parseInt(_0x134cb3(341)) / 7) + -parseInt(_0x134cb3(338)) / 8 * (-parseInt(_0x134cb3(307)) / 9) + -parseInt(_0x134cb3(297)) / 10;
      if (_0x207014 === _0x456682) {
        break;
      } else {
        _0x4d1b83.push(_0x4d1b83.shift());
      }
    } catch (_0xf053e) {
      _0x4d1b83.push(_0x4d1b83.shift());
    }
  }
})(a0_0x29aa, 414177);
function a0_0x76d4(_0x5e4fdd, _0x295144) {
  const _0x5a5272 = a0_0x29aa();
  a0_0x76d4 = function (_0x7b8a59, _0x4f304c) {
    _0x7b8a59 = _0x7b8a59 - 293;
    let _0x4447da = _0x5a5272[_0x7b8a59];
    return _0x4447da;
  };
  return a0_0x76d4(_0x5e4fdd, _0x295144);
}
function a0_0x29aa() {
  const _0x574ac0 = ["getUniqueIndex", "stringify", "backend", "publicParameter", "loadConfig", "createDataArr", "configModel", "updateDataType", "../API/rpcAPI", "REMOVE", "get", "value", "createData", "rpc", "http.notifyRemote.updatePublicParameter", "invokeCallback", "608ZNrtNl", "config", "app", "161mUxMBf", "waterfall", "hall", "1476033cQiKBw", "ADD", "game.roomRemote.updatePublicParameter", "updatePublicParameterByKey err:", "center", "48354zLSwms", "pomelo", "getServersByType", "error", "updatePublicParameter", "21827670UWNmxR", "gameTypes", "../constant/enumeration", "1327264BShtYp", "../dao/commonDao", "pomelo-logger", "/config/gameTypes.json", "push", "hasOwnProperty", "updatePublicParameterByKey", "92628TLZYQV", "2bLgFEC", "set", "/config/config.json", "game", "findData", "async", "REQUEST_DATA_ERROR", "_doc", "key", "getServerId", "getBase", "3840400EDHHhU", "37488jVvIIf", "length"];
  a0_0x29aa = function () {
    return _0x574ac0;
  };
  return a0_0x29aa();
}
let enumeration = require(a0_0x35114c(299));
let rpcAPI = require(a0_0x35114c(330));
let dao = require(a0_0x35114c(301));
let async = require(a0_0x35114c(313));
let pomelo = require(a0_0x35114c(293));
let logger = require(a0_0x35114c(302)).getLogger(a0_0x35114c(293));
let utils = require("../util/utils");
let pro = module.exports;
pro[a0_0x35114c(326)] = async function () {
  const _0x5920a5 = a0_0x35114c;
  let _0x30ece0 = require(pomelo[_0x5920a5(340)].getBase() + _0x5920a5(310));
  let _0x32c851 = pomelo.app[_0x5920a5(317)]() === "center";
  let _0x58f42f = await dao.findData("configModel", {});
  let _0x20919c = {};
  for (let _0x2764fd in _0x30ece0) {
    if (_0x30ece0[_0x5920a5(305)](_0x2764fd)) {
      let _0x4cb190 = false;
      for (let _0x590b38 = 0; _0x590b38 < _0x58f42f[_0x5920a5(321)]; ++_0x590b38) {
        if (_0x58f42f[_0x590b38][_0x5920a5(316)] === _0x2764fd) {
          _0x4cb190 = true;
          _0x20919c[_0x2764fd] = _0x58f42f[_0x590b38].value;
          break;
        }
      }
      if (!_0x4cb190) {
        let _0x3a0a00 = _0x30ece0[_0x2764fd].value;
        typeof _0x3a0a00 !== "string" && (_0x3a0a00 = JSON[_0x5920a5(323)](_0x3a0a00));
        if (_0x32c851) {
          let _0x436b3a = {};
          _0x436b3a[_0x5920a5(316)] = _0x2764fd;
          _0x436b3a.value = _0x3a0a00;
          _0x436b3a.describe = _0x30ece0[_0x2764fd].describe;
          await dao[_0x5920a5(334)](_0x5920a5(328), _0x436b3a);
        }
        _0x20919c[_0x2764fd] = _0x3a0a00;
      }
    }
  }
  for (let _0x46e37e = 0; _0x46e37e < _0x58f42f[_0x5920a5(321)]; ++_0x46e37e) {
    if (_0x20919c[_0x5920a5(305)](_0x58f42f[_0x46e37e][_0x5920a5(316)])) {
      continue;
    }
    _0x20919c[_0x58f42f[_0x46e37e].key] = _0x58f42f[_0x46e37e][_0x5920a5(333)];
  }
  pomelo[_0x5920a5(340)].set(_0x5920a5(339), _0x20919c);
};
pro.loadGameTypes = async function (_0x2b0c99) {
  const _0x2c8a56 = a0_0x35114c;
  let _0x43e00f = require(pomelo[_0x2c8a56(340)][_0x2c8a56(318)]() + _0x2c8a56(303));
  let _0x563ed7 = pomelo.app[_0x2c8a56(317)]() === _0x2c8a56(348);
  let _0x9ef646 = await dao[_0x2c8a56(312)]("gameTypeModel", {});
  let _0xfdc7a3 = [];
  if (_0x9ef646.length === 0) {
    for (let _0x3fb47c = 0; _0x3fb47c < _0x43e00f.length; ++_0x3fb47c) {
      let _0x1d0d7e = _0x43e00f[_0x3fb47c];
      _0x1d0d7e.gameTypeID = utils[_0x2c8a56(322)]();
      _0xfdc7a3[_0x2c8a56(304)](_0x1d0d7e);
    }
    _0x563ed7 && (await dao[_0x2c8a56(327)]("gameTypeModel", _0xfdc7a3));
  } else {
    for (let _0x2f90fb = 0; _0x2f90fb < _0x9ef646.length; ++_0x2f90fb) {
      _0xfdc7a3[_0x2c8a56(304)](_0x9ef646[_0x2f90fb][_0x2c8a56(315)]);
    }
  }
  pomelo[_0x2c8a56(340)][_0x2c8a56(309)](_0x2c8a56(298), _0xfdc7a3);
  utils[_0x2c8a56(337)](_0x2b0c99);
};
pro.updateConfig = function (_0x1f74b8, _0x35e3a0, _0x1ead32) {
  const _0x46f25c = a0_0x35114c;
  _0x1f74b8[_0x46f25c(309)](_0x46f25c(339), _0x35e3a0);
  let _0x5cdecb = _0x1f74b8[_0x46f25c(294)](_0x46f25c(311));
  for (let _0x21a900 = 0; _0x21a900 < _0x5cdecb[_0x46f25c(321)]; ++_0x21a900) {
    rpcAPI[_0x46f25c(335)](_0x46f25c(346), _0x5cdecb[_0x21a900].id, _0x35e3a0, function (_0x3c9a4d) {
      const _0x1d5e87 = _0x46f25c;
      !!_0x3c9a4d && logger[_0x1d5e87(295)](_0x1d5e87(296), "updatePublicParameterToGame err:" + _0x3c9a4d);
    });
  }
  let _0x15959b = _0x1f74b8[_0x46f25c(294)](_0x46f25c(343));
  for (let _0x42797e = 0; _0x42797e < _0x15959b.length; ++_0x42797e) {
    rpcAPI[_0x46f25c(335)]("hall.notifyRemote.updatePublicParameter", _0x15959b[_0x42797e].id, _0x35e3a0, function (_0x3a56fc) {
      const _0x1310dd = _0x46f25c;
      !!_0x3a56fc && logger[_0x1310dd(295)](_0x1310dd(296), "updatePublicParameterToGame err:" + _0x3a56fc);
    });
  }
  rpcAPI[_0x46f25c(335)](_0x46f25c(336), _0x15959b[i].id, _0x35e3a0, function (_0x4d2980) {
    const _0xc7bdff = _0x46f25c;
    !!_0x4d2980 && logger[_0xc7bdff(295)]("updatePublicParameter", "updatePublicParameterToGame err:" + _0x4d2980);
  });
  _0x1ead32();
};
pro[a0_0x35114c(306)] = function (_0x164094, _0xa2705a, _0x3536e2, _0x4c9b6f, _0x25312) {
  const _0xaf9bc4 = a0_0x35114c;
  let _0xf603c0 = _0x164094[_0xaf9bc4(332)](_0xaf9bc4(325));
  let _0x36838b = _0xf603c0[_0x3536e2];
  async[_0xaf9bc4(342)]([function (_0x503093) {
    const _0x67eae2 = _0xaf9bc4;
    if (_0xa2705a === enumeration[_0x67eae2(329)][_0x67eae2(345)] || _0xa2705a === enumeration.updateDataType.UPDATE) {
      !!_0x36838b ? dao.updateData("configModel", {
        key: _0x3536e2
      }, {
        value: _0x4c9b6f
      }, function (_0x4b36eb) {
        !_0x4b36eb && (_0xf603c0[_0x3536e2] = _0x4c9b6f);
        _0x503093(_0x4b36eb);
      }) : dao[_0x67eae2(334)]("configModel", {
        key: _0x3536e2,
        value: _0x4c9b6f
      }, function (_0xe160f8) {
        !_0xe160f8 && (_0xf603c0[_0x3536e2] = _0x4c9b6f);
        _0x503093(_0xe160f8);
      });
    } else {
      _0xa2705a === enumeration[_0x67eae2(329)][_0x67eae2(331)] ? dao.deleteData({
        key: _0x3536e2
      }, function (_0x4511ac) {
        !_0x4511ac && delete _0xf603c0[_0x3536e2];
        _0x503093(_0x4511ac);
      }) : _0x503093(code[_0x67eae2(314)]);
    }
  }], function (_0x551364) {
    const _0x35fdf8 = _0xaf9bc4;
    !!_0x551364 ? logger.error(_0x35fdf8(347) + _0x551364) : _0x164094[_0x35fdf8(309)](_0x35fdf8(325), _0xf603c0);
    _0x25312(_0x551364);
  });
};
pro.buildClientConfig = function (_0xd057a3) {
  const _0x2681c1 = a0_0x35114c;
  let _0xffe98d = require(pomelo[_0x2681c1(340)][_0x2681c1(318)]() + _0x2681c1(310));
  let _0x57f420 = {};
  for (let _0xbd6525 in _0xd057a3) {
    _0xd057a3[_0x2681c1(305)](_0xbd6525) && !!_0xffe98d[_0xbd6525] && !_0xffe98d[_0xbd6525][_0x2681c1(324)] && (_0x57f420[_0xbd6525] = _0xd057a3[_0xbd6525]);
  }
  return _0x57f420;
};