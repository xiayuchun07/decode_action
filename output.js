
const a0_0x40ed2c = a0_0x4620;
function a0_0x4620(_0x2b1a38, _0xcfe4d5) {
  const _0x283579 = a0_0x1352();
  a0_0x4620 = function (_0xa61528, _0x39c983) {
    _0xa61528 = _0xa61528 - 186;
    let _0x14df32 = _0x283579[_0xa61528];
    return _0x14df32;
  };
  return a0_0x4620(_0x2b1a38, _0xcfe4d5);
}
function a0_0x1352() {
  const _0x573435 = ["exec", "remove", "getLogger", "2SafXze", "findOneAndUpdateEx", "model=", "3437zGRfcG", "pomelo-logger", "_doc", " model=", "find", ", err:", "count", "findOneAndUpdate", "5dFPxvW", "227382YNLBdJ", "2102BOdZdB", "26348YyVpDs", ", execData=", "getStatisticsInfo", "70ulWmUD", "limit", "error", "1280BBMdEb", "not find model:", "skip", "133119AgRdnt", "../constant/code", "sort", ", saveData=", "SQL_ERROR", "findData", "getDataCount", "updateData", "length", ", matchData=", "get", "698757YNTWKp", "findDataAndUpdateEx", "update", "updateDataEx", "save", "findDataAndCount", "pomelo", "231935cqwloh", "createData", "24GLiarv", "create", "findOneData", "app", "dbClient", "stringify"];
  a0_0x1352 = function () {
    return _0x573435;
  };
  return a0_0x1352();
}
(function (_0x39f7d7, _0x5d0ffe) {
  const _0x5da1eb = a0_0x4620;
  const _0x4f3549 = _0x39f7d7();
  while (true) {
    try {
      const _0x844d6e = parseInt(_0x5da1eb(211)) / 1 * (-parseInt(_0x5da1eb(224)) / 2) + parseInt(_0x5da1eb(193)) / 3 + -parseInt(_0x5da1eb(225)) / 4 + parseInt(_0x5da1eb(222)) / 5 * (-parseInt(_0x5da1eb(223)) / 6) + parseInt(_0x5da1eb(214)) / 7 * (parseInt(_0x5da1eb(231)) / 8) + -parseInt(_0x5da1eb(234)) / 9 * (parseInt(_0x5da1eb(228)) / 10) + parseInt(_0x5da1eb(200)) / 11 * (-parseInt(_0x5da1eb(202)) / 12);
      if (_0x844d6e === _0x5d0ffe) {
        break;
      } else {
        _0x4f3549.push(_0x4f3549.shift());
      }
    } catch (_0x28e6f7) {
      _0x4f3549.push(_0x4f3549.shift());
    }
  }
})(a0_0x1352, 119186);
let pomelo = require(a0_0x40ed2c(199));
let logger = require(a0_0x40ed2c(215))[a0_0x40ed2c(210)](a0_0x40ed2c(199));
let code = require(a0_0x40ed2c(235));
let dao = module.exports;
dao[a0_0x40ed2c(201)] = async function (_0x2f825e, _0x2cfbf8) {
  const _0x1e4f79 = a0_0x40ed2c;
  let _0x531a5e = pomelo[_0x1e4f79(205)][_0x1e4f79(192)](_0x1e4f79(206))[_0x2f825e];
  if (!_0x531a5e) {
    logger[_0x1e4f79(230)](_0x1e4f79(201), _0x1e4f79(232) + _0x2f825e);
    throw new Error(code.SQL_ERROR);
  } else {
    try {
      let _0x29faa0 = new _0x531a5e(_0x2cfbf8);
      let _0x4861f5 = await _0x29faa0[_0x1e4f79(197)]();
      return _0x4861f5[_0x1e4f79(216)];
    } catch (_0x2fc717) {
      logger[_0x1e4f79(230)](_0x1e4f79(201), _0x1e4f79(217) + _0x2f825e + ", saveData=" + JSON[_0x1e4f79(207)](_0x2cfbf8) + _0x1e4f79(219) + _0x2fc717);
      throw new Error(code[_0x1e4f79(186)]);
    }
  }
};
dao.createDataArr = async function (_0x1ac695, _0x24173e) {
  const _0x289f87 = a0_0x40ed2c;
  let _0x4c6138 = pomelo[_0x289f87(205)].get("dbClient")[_0x1ac695];
  if (!_0x4c6138) {
    logger[_0x289f87(230)](_0x289f87(201), _0x289f87(232) + _0x1ac695);
    throw new Error(code.SQL_ERROR);
  } else {
    try {
      return await _0x4c6138[_0x289f87(203)](_0x24173e);
    } catch (_0x570b15) {
      logger[_0x289f87(230)](_0x289f87(201), _0x289f87(217) + _0x1ac695 + _0x289f87(237) + JSON[_0x289f87(207)](_0x24173e) + _0x289f87(219) + _0x570b15);
      throw new Error(code[_0x289f87(186)]);
    }
  }
};
dao[a0_0x40ed2c(204)] = async function (_0x575689, _0x54a0c0) {
  const _0x45a096 = a0_0x40ed2c;
  let _0x16f891 = pomelo[_0x45a096(205)].get(_0x45a096(206))[_0x575689];
  if (!_0x16f891) {
    logger[_0x45a096(230)](_0x45a096(204), "not find model:" + _0x575689);
    throw new Error(code[_0x45a096(186)]);
  } else {
    try {
      let _0x255731 = await _0x16f891.findOne(_0x54a0c0);
      return !!_0x255731 ? _0x255731[_0x45a096(216)] : null;
    } catch (_0x5b8deb) {
      logger[_0x45a096(230)]("findOneData", _0x45a096(213) + _0x575689 + _0x45a096(191) + JSON[_0x45a096(207)](_0x54a0c0) + ", err:" + _0x5b8deb);
      throw new Error(code.SQL_ERROR);
    }
  }
};
dao[a0_0x40ed2c(187)] = async function (_0x3f10bd, _0x55e8b3, _0x49b6b7, _0x717446, _0x570a64) {
  const _0x2022d5 = a0_0x40ed2c;
  _0x49b6b7 = _0x49b6b7 || {};
  _0x717446 = _0x717446 || 0;
  _0x570a64 = _0x570a64 || 0;
  let _0x4e3dbc = pomelo[_0x2022d5(205)][_0x2022d5(192)](_0x2022d5(206))[_0x3f10bd];
  if (!_0x4e3dbc) {
    logger[_0x2022d5(230)](_0x2022d5(187), _0x2022d5(232) + _0x3f10bd);
    throw new Error(code[_0x2022d5(186)]);
  } else {
    try {
      let _0x303673 = await _0x4e3dbc[_0x2022d5(218)](_0x55e8b3)[_0x2022d5(236)](_0x49b6b7)[_0x2022d5(233)](_0x717446)[_0x2022d5(229)](_0x570a64).exec();
      for (let _0x5b66ea = 0; _0x5b66ea < _0x303673[_0x2022d5(190)]; ++_0x5b66ea) {
        _0x303673[_0x5b66ea] = _0x303673[_0x5b66ea][_0x2022d5(216)];
      }
      return _0x303673;
    } catch (_0x2f8d61) {
      logger[_0x2022d5(230)](_0x2022d5(187), _0x2022d5(213) + _0x3f10bd + _0x2022d5(191) + JSON[_0x2022d5(207)](_0x55e8b3) + _0x2022d5(219) + _0x2f8d61);
      throw new Error(code[_0x2022d5(186)]);
    }
  }
};
dao[a0_0x40ed2c(198)] = async function (_0xbff9bc, _0x2f1abf, _0x41756a, _0x58ef23, _0x2e818b) {
  const _0x3cc502 = a0_0x40ed2c;
  let _0x503f25 = pomelo[_0x3cc502(205)].get("dbClient")[_0xbff9bc];
  if (!_0x503f25) {
    logger[_0x3cc502(230)](_0x3cc502(198), _0x3cc502(232) + _0xbff9bc);
    throw new Error(code[_0x3cc502(186)]);
  } else {
    try {
      let _0x2e55bb = await _0x503f25.find(_0x2e818b).sort(_0x58ef23)[_0x3cc502(233)](_0x2f1abf)[_0x3cc502(229)](_0x41756a)[_0x3cc502(208)]();
      for (let _0x290242 = 0; _0x290242 < _0x2e55bb[_0x3cc502(190)]; ++_0x290242) {
        _0x2e55bb[_0x290242] = _0x2e55bb[_0x290242][_0x3cc502(216)];
      }
      let _0x4611bf = await dao[_0x3cc502(188)](_0xbff9bc, _0x2e818b);
      return {
        recordArr: _0x2e55bb,
        totalCount: _0x4611bf
      };
    } catch (_0x5dd2d4) {
      logger[_0x3cc502(230)](_0x3cc502(198), _0x3cc502(213) + _0xbff9bc + _0x3cc502(191) + JSON[_0x3cc502(207)](_0x2e818b) + _0x3cc502(219) + _0x5dd2d4);
      throw new Error(code.SQL_ERROR);
    }
  }
};
dao.getDataCount = async function (_0x385948, _0x14ef60) {
  const _0x378300 = a0_0x40ed2c;
  let _0x56d38e = pomelo[_0x378300(205)][_0x378300(192)](_0x378300(206))[_0x385948];
  if (!_0x56d38e) {
    logger[_0x378300(230)]("getDataCount", _0x378300(232) + _0x385948);
    throw new Error(code.SQL_ERROR);
  } else {
    try {
      return await _0x56d38e[_0x378300(218)](_0x14ef60)[_0x378300(220)]().exec();
    } catch (_0x343317) {
      logger[_0x378300(230)](_0x378300(188), _0x378300(213) + _0x385948 + _0x378300(191) + JSON[_0x378300(207)](_0x14ef60) + ", err:" + _0x343317);
      throw new Error(code[_0x378300(186)]);
    }
  }
};
dao[a0_0x40ed2c(221)] = async function (_0x4f1db5, _0x4e7585, _0x2480f9) {
  const _0x49bed8 = a0_0x40ed2c;
  let _0x4d9597 = pomelo[_0x49bed8(205)][_0x49bed8(192)]("dbClient")[_0x4f1db5];
  if (!_0x4d9597) {
    logger[_0x49bed8(230)](_0x49bed8(221), _0x49bed8(232) + _0x4f1db5);
    throw new Error(code[_0x49bed8(186)]);
  } else {
    try {
      let _0x34eded = await _0x4d9597.findOneAndUpdate(_0x4e7585, _0x2480f9, {
        new: true
      });
      return !!_0x34eded ? _0x34eded[_0x49bed8(216)] : null;
    } catch (_0x38f2de) {
      logger[_0x49bed8(230)](_0x49bed8(188), _0x49bed8(213) + _0x4f1db5 + _0x49bed8(191) + JSON[_0x49bed8(207)](_0x4e7585) + _0x49bed8(219) + _0x38f2de);
      throw new Error(code[_0x49bed8(186)]);
    }
  }
};
dao[a0_0x40ed2c(212)] = async function (_0x2dfe59, _0x57695e, _0xd2c4c7, _0x33febc) {
  const _0x4a4eaa = a0_0x40ed2c;
  let _0x54bfbe = pomelo[_0x4a4eaa(205)][_0x4a4eaa(192)]("dbClient")[_0x2dfe59];
  if (!_0x54bfbe) {
    logger.error("findDataAndUpdateEx", _0x4a4eaa(232) + _0x2dfe59);
    throw new Error(code[_0x4a4eaa(186)]);
  } else {
    try {
      let _0x457379 = await _0x54bfbe[_0x4a4eaa(221)](_0x57695e, _0xd2c4c7, _0x33febc);
      return !!_0x457379 ? _0x457379[_0x4a4eaa(216)] : null;
    } catch (_0x35e61a) {
      logger.error(_0x4a4eaa(194), _0x4a4eaa(213) + _0x2dfe59 + _0x4a4eaa(191) + JSON.stringify(_0x57695e) + _0x4a4eaa(237) + _0xd2c4c7 + _0x4a4eaa(219) + _0x35e61a);
      throw new Error(code[_0x4a4eaa(186)]);
    }
  }
};
dao.updateData = async function (_0xfde77e, _0x26b601, _0x157bf2) {
  const _0x35a738 = a0_0x40ed2c;
  let _0x285c70 = pomelo[_0x35a738(205)][_0x35a738(192)](_0x35a738(206))[_0xfde77e];
  if (!_0x285c70) {
    logger.error(_0x35a738(189), _0x35a738(232) + _0xfde77e);
    throw new Error(code[_0x35a738(186)]);
  } else {
    try {
      let _0xfaa8b4 = await _0x285c70[_0x35a738(195)](_0x26b601, _0x157bf2);
      return _0xfaa8b4;
    } catch (_0x323fb0) {
      logger[_0x35a738(230)](_0x35a738(189), "model=" + _0xfde77e + ", matchData=" + JSON[_0x35a738(207)](_0x26b601) + ", saveData=" + _0x157bf2 + _0x35a738(219) + _0x323fb0);
      throw new Error(code.SQL_ERROR);
    }
  }
};
dao[a0_0x40ed2c(196)] = async function (_0x25ee9b, _0x6725f0, _0x413d72, _0x5cca6d) {
  const _0x31146a = a0_0x40ed2c;
  let _0x1fcf7f = pomelo[_0x31146a(205)][_0x31146a(192)](_0x31146a(206))[_0x25ee9b];
  if (!_0x1fcf7f) {
    logger[_0x31146a(230)](_0x31146a(189), "not find model:" + _0x25ee9b);
    throw new Error(code[_0x31146a(186)]);
  } else {
    try {
      return await _0x1fcf7f[_0x31146a(195)](_0x6725f0, _0x413d72, _0x5cca6d);
    } catch (_0x3974d8) {
      logger[_0x31146a(230)](_0x31146a(196), _0x31146a(213) + _0x25ee9b + _0x31146a(191) + JSON.stringify(_0x6725f0) + _0x31146a(237) + _0x413d72 + ", err:" + _0x3974d8);
      throw new Error(code[_0x31146a(186)]);
    }
  }
};
dao.updateAllData = async function (_0x462965, _0x619e2d, _0x4080c9) {
  const _0x2754da = a0_0x40ed2c;
  return await dao[_0x2754da(196)](_0x462965, _0x619e2d, _0x4080c9, {
    multi: true
  });
};
dao.deleteData = async function (_0x585427, _0x162bdb) {
  const _0x235823 = a0_0x40ed2c;
  let _0x102cb7 = pomelo.app[_0x235823(192)]("dbClient")[_0x585427];
  if (!_0x102cb7) {
    logger[_0x235823(230)]("updateAllData", _0x235823(232) + _0x585427);
    throw new Error(code[_0x235823(186)]);
  } else {
    try {
      return await _0x102cb7[_0x235823(209)](_0x162bdb);
    } catch (_0x956f59) {
      logger[_0x235823(230)](_0x235823(189), _0x235823(213) + _0x585427 + _0x235823(191) + JSON[_0x235823(207)](_0x162bdb) + _0x235823(219) + _0x956f59);
      throw new Error(code[_0x235823(186)]);
    }
  }
};
dao[a0_0x40ed2c(227)] = async function (_0x3f0971, _0x977207) {
  const _0x47f7ef = a0_0x40ed2c;
  let _0x3bca6a = pomelo[_0x47f7ef(205)][_0x47f7ef(192)](_0x47f7ef(206))[_0x3f0971];
  if (!_0x3bca6a) {
    logger[_0x47f7ef(230)]("updateAllData", _0x47f7ef(232) + _0x3f0971);
    throw new Error(code.SQL_ERROR);
  } else {
    try {
      return await _0x3bca6a.aggregate(_0x977207)[_0x47f7ef(208)]();
    } catch (_0x5d4e69) {
      logger[_0x47f7ef(230)](_0x47f7ef(227), "model=" + _0x3f0971 + _0x47f7ef(226) + JSON.stringify(_0x977207) + _0x47f7ef(219) + _0x5d4e69);
      throw new Error(code[_0x47f7ef(186)]);
    }
  }
};