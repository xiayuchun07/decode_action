
const a0_0x33fd94 = a0_0x5e5e;
function a0_0x5e5e(_0x2066aa, _0x59252c) {
  const _0xccd4ba = a0_0x41b2();
  a0_0x5e5e = function (_0x3f1c26, _0x53cec6) {
    _0x3f1c26 = _0x3f1c26 - 482;
    let _0x1ba4c2 = _0xccd4ba[_0x3f1c26];
    return _0x1ba4c2;
  };
  return a0_0x5e5e(_0x2066aa, _0x59252c);
}
(function (_0x5bdbfd, _0x4f895b) {
  const _0x52ef09 = a0_0x5e5e;
  const _0xf2062a = _0x5bdbfd();
  while (true) {
    try {
      const _0x1dbc8e = -parseInt(_0x52ef09(523)) / 1 * (-parseInt(_0x52ef09(502)) / 2) + parseInt(_0x52ef09(483)) / 3 + -parseInt(_0x52ef09(484)) / 4 * (-parseInt(_0x52ef09(524)) / 5) + -parseInt(_0x52ef09(486)) / 6 + parseInt(_0x52ef09(510)) / 7 + parseInt(_0x52ef09(504)) / 8 + -parseInt(_0x52ef09(490)) / 9;
      if (_0x1dbc8e === _0x4f895b) {
        break;
      } else {
        _0xf2062a.push(_0xf2062a.shift());
      }
    } catch (_0x533273) {
      _0xf2062a.push(_0xf2062a.shift());
    }
  }
})(a0_0x41b2, 233635);
let pomelo = require(a0_0x33fd94(516));
let utils = require(a0_0x33fd94(511));
let logger = require(a0_0x33fd94(482))[a0_0x33fd94(505)]("pomelo");
let code = require(a0_0x33fd94(506));
let dao = module[a0_0x33fd94(512)];
dao.getRechargeStatisticsInfo = function (_0x50cc3c, _0x58e04d) {
  const _0x44aec0 = a0_0x33fd94;
  let _0x464c84 = pomelo[_0x44aec0(503)][_0x44aec0(499)](_0x44aec0(522))[_0x44aec0(500)];
  _0x464c84[_0x44aec0(518)]([{
    $match: _0x50cc3c
  }, {
    $group: {
      _id: "$uid",
      count: {
        $sum: 1
      },
      total: {
        $sum: _0x44aec0(488)
      },
      maxCount: {
        $max: "$rechargeMoney"
      }
    }
  }])[_0x44aec0(491)](function (_0x4def93, _0x35ee9e) {
    const _0x2a090b = _0x44aec0;
    !!_0x4def93 ? (logger.err(_0x2a090b(507), "error:" + _0x4def93), utils[_0x2a090b(485)](_0x58e04d, code[_0x2a090b(494)])) : utils.invokeCallback(_0x58e04d, null, _0x35ee9e);
  });
};
dao[a0_0x33fd94(487)] = function (_0x204151, _0x2bc9b6) {
  const _0x2e606a = a0_0x33fd94;
  let _0x2f8e6c = pomelo.app[_0x2e606a(499)](_0x2e606a(522))[_0x2e606a(500)];
  let _0x37937f = 86400000;
  let _0x1bb6f7 = 28800000;
  _0x2f8e6c[_0x2e606a(518)]([{
    $match: _0x204151
  }, {
    $project: {
      day: {
        $floor: {
          $divide: [{
            $add: [_0x2e606a(519), _0x1bb6f7]
          }, _0x37937f]
        }
      },
      rechargeMoney: _0x2e606a(488),
      diamondCount: "$diamondCount",
      couponCount: _0x2e606a(515)
    }
  }, {
    $group: {
      _id: "$day",
      totalCount: {
        $sum: _0x2e606a(488)
      },
      totalDiamondCount: {
        $sum: _0x2e606a(492)
      },
      totalCouponCount: {
        $sum: _0x2e606a(515)
      }
    }
  }])[_0x2e606a(491)](function (_0x15a4f5, _0x4f8ef5) {
    const _0x271a46 = _0x2e606a;
    !!_0x15a4f5 ? (logger[_0x271a46(495)](_0x271a46(487), _0x271a46(520) + _0x15a4f5), _0x2bc9b6(code[_0x271a46(494)])) : _0x2bc9b6(null, _0x4f8ef5);
  });
};
dao.getGameProfitStatisticsInfo = function (_0x5be56b, _0x537d5a) {
  const _0x409c51 = a0_0x33fd94;
  let _0x338a0e = pomelo[_0x409c51(503)].get(_0x409c51(522))[_0x409c51(509)];
  _0x338a0e[_0x409c51(518)]([{
    $match: _0x5be56b
  }, {
    $group: {
      _id: null,
      total: {
        $sum: _0x409c51(493)
      }
    }
  }])[_0x409c51(491)](function (_0x6c5d37, _0x41de52) {
    const _0x170982 = _0x409c51;
    !!_0x6c5d37 ? (logger.err(_0x170982(514), _0x170982(520) + _0x6c5d37), utils[_0x170982(485)](_0x537d5a, code[_0x170982(494)])) : utils.invokeCallback(_0x537d5a, null, _0x41de52);
  });
};
dao[a0_0x33fd94(497)] = function (_0x33eb2b, _0x196d4d) {
  const _0x5245bd = a0_0x33fd94;
  let _0x55366b = pomelo[_0x5245bd(503)][_0x5245bd(499)](_0x5245bd(522))[_0x5245bd(508)];
  _0x55366b.aggregate([{
    $match: _0x33eb2b
  }, {
    $group: {
      _id: null,
      total: {
        $sum: _0x5245bd(493)
      }
    }
  }]).exec(function (_0x15d134, _0x538263) {
    const _0x5dd558 = _0x5245bd;
    !!_0x15d134 ? (logger[_0x5dd558(495)](_0x5dd558(497), _0x5dd558(520) + _0x15d134), utils[_0x5dd558(485)](_0x196d4d, code.MYSQL_ERROR)) : utils[_0x5dd558(485)](_0x196d4d, null, _0x538263);
  });
};
dao[a0_0x33fd94(498)] = function (_0x3e041d, _0x387a4d) {
  const _0x19cd15 = a0_0x33fd94;
  let _0x5f4806 = pomelo[_0x19cd15(503)][_0x19cd15(499)]("dbClient")[_0x19cd15(496)];
  _0x5f4806[_0x19cd15(518)]([{
    $match: _0x3e041d
  }, {
    $group: {
      _id: null,
      total: {
        $sum: "$count"
      }
    }
  }])[_0x19cd15(491)](function (_0x33706d, _0x1c4c40) {
    const _0x50943b = _0x19cd15;
    !!_0x33706d ? (logger.err(_0x50943b(498), "error:" + _0x33706d), utils[_0x50943b(485)](_0x387a4d, code.MYSQL_ERROR)) : utils[_0x50943b(485)](_0x387a4d, null, _0x1c4c40);
  });
};
dao.getCommissionExtractStatisticsInfo = function (_0x408e56, _0x13f879) {
  const _0x1a8940 = a0_0x33fd94;
  let _0x16d0ee = pomelo[_0x1a8940(503)].get(_0x1a8940(522))[_0x1a8940(489)];
  _0x16d0ee.aggregate([{
    $match: _0x408e56
  }, {
    $group: {
      _id: null,
      total: {
        $sum: _0x1a8940(493)
      }
    }
  }]).exec(function (_0x31d707, _0x571898) {
    const _0x4c3852 = _0x1a8940;
    !!_0x31d707 ? (logger.err("getCommissionExtractStatisticsInfo", "error:" + _0x31d707), utils[_0x4c3852(485)](_0x13f879, code[_0x4c3852(494)])) : utils.invokeCallback(_0x13f879, null, _0x571898);
  });
};
dao[a0_0x33fd94(517)] = function (_0x747734, _0x8d3e82) {
  const _0xa58638 = a0_0x33fd94;
  let _0x168cc5 = pomelo[_0xa58638(503)][_0xa58638(499)](_0xa58638(522))[_0xa58638(513)];
  _0x168cc5[_0xa58638(518)]([{
    $match: _0x747734
  }, {
    $group: {
      _id: null,
      total: {
        $sum: _0xa58638(493)
      }
    }
  }])[_0xa58638(491)](function (_0x16dc14, _0x27b119) {
    const _0x123028 = _0xa58638;
    !!_0x16dc14 ? (logger.err(_0x123028(517), _0x123028(520) + _0x16dc14), utils.invokeCallback(_0x8d3e82, code[_0x123028(494)])) : utils[_0x123028(485)](_0x8d3e82, null, _0x27b119);
  });
};
dao[a0_0x33fd94(521)] = function (_0x2ea254, _0x13a596) {
  const _0x1a16ce = a0_0x33fd94;
  let _0x216616 = pomelo[_0x1a16ce(503)][_0x1a16ce(499)](_0x1a16ce(522)).userModel;
  _0x216616[_0x1a16ce(518)]([{
    $match: _0x2ea254
  }, {
    $group: {
      _id: null,
      total: {
        $sum: _0x1a16ce(501)
      }
    }
  }])[_0x1a16ce(491)](function (_0x1ea3e6, _0x50eea1) {
    const _0x3778ca = _0x1a16ce;
    !!_0x1ea3e6 ? (logger[_0x3778ca(495)](_0x3778ca(521), _0x3778ca(520) + _0x1ea3e6), utils[_0x3778ca(485)](_0x13a596, code[_0x3778ca(494)])) : utils[_0x3778ca(485)](_0x13a596, null, _0x50eea1);
  });
};
function a0_0x41b2() {
  const _0x39c534 = ["816184UEZCuz", "getLogger", "../constant/code", "getRechargeStatisticsInfo", "inventoryValueExtractRecordModel", "gameProfitRecordSchemaModel", "303135QZjEjw", "../util/utils", "exports", "withdrawCashRecordModel", "getGameProfitStatisticsInfo", "$couponCount", "pomelo", "getWithdrawCashStatisticsInfo", "aggregate", "$createTime", "error:", "getUserGoldStatisticsInfo", "dbClient", "224191cBYLsn", "1838365xSmHEf", "pomelo-logger", "15228EVEgwN", "4iNZNcB", "invokeCallback", "871608WhpPte", "getRechargeStatisticsInfoGroupByDay", "$rechargeMoney", "extractionCommissionRecordModel", "3270285OgAzKa", "exec", "$diamondCount", "$count", "MYSQL_ERROR", "err", "modifyInventoryValueRecordModel", "getInventoryExtractStatisticsInfo", "getInventoryModifyStatisticsInfo", "get", "rechargeRecordModel", "$gold", "2OBQuWu", "app"];
  a0_0x41b2 = function () {
    return _0x39c534;
  };
  return a0_0x41b2();
}