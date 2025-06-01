
const a0_0x126781 = a0_0x1838;
(function (_0xa134f3, _0x4a3258) {
  const _0x10954f = a0_0x1838;
  const _0xb98833 = _0xa134f3();
  while (true) {
    try {
      const _0x629873 = parseInt(_0x10954f(362)) / 1 * (-parseInt(_0x10954f(338)) / 2) + -parseInt(_0x10954f(324)) / 3 * (parseInt(_0x10954f(341)) / 4) + -parseInt(_0x10954f(365)) / 5 * (-parseInt(_0x10954f(331)) / 6) + -parseInt(_0x10954f(326)) / 7 + -parseInt(_0x10954f(345)) / 8 * (-parseInt(_0x10954f(370)) / 9) + parseInt(_0x10954f(323)) / 10 + parseInt(_0x10954f(371)) / 11;
      if (_0x629873 === _0x4a3258) {
        break;
      } else {
        _0xb98833.push(_0xb98833.shift());
      }
    } catch (_0x1a9164) {
      _0xb98833.push(_0xb98833.shift());
    }
  }
})(a0_0x10cf, 292297);
function a0_0x1838(_0x4f3e75, _0xba6e95) {
  const _0x2020ce = a0_0x10cf();
  a0_0x1838 = function (_0x4dd979, _0x51063a) {
    _0x4dd979 = _0x4dd979 - 320;
    let _0x328e51 = _0x2020ce[_0x4dd979];
    return _0x328e51;
  };
  return a0_0x1838(_0x4f3e75, _0xba6e95);
}
let utils = require(a0_0x126781(366));
let async = require(a0_0x126781(327));
let code = require(a0_0x126781(369));
let dao = require(a0_0x126781(325));
let logger = require("pomelo-logger")[a0_0x126781(367)]("pomelo");
let userInfoServices = require(a0_0x126781(322));
let pomelo = require("pomelo");
let services = module.exports;
function a0_0x10cf() {
  const _0x48c52c = ["getLogger", "weekAddedDirectlyMemberCount", "../constant/code", "9UOsYmR", "9602934utOPst", "addAgentMemberCount err:", "addDirectlyMemberCount", "getUserByUid", "getCommisionChangeValue", "get", "monthAddedAgentMemberCount", "userModel", "userDetailData", "length", "./userInfoServices", "1395300TPbcdE", "530373ffnWDm", "../dao/commonDao", "1239959MTvJBZ", "async", "number", "spreaderID", "addDirectlyMemberAchievement", "524778yxytsU", "agentMemberAchievement", "INVALID_PARAM", "error", "hallManager", "app", "updateUserDataNotify", "569466EVcDkS", "updateUserDataByUid", "invokeCallback", "8XmDXic", "findOneAndUpdateEx", "addDirectlyMemberAchievement addAgentMemberAchievement err, count:", "addAgentMemberAchievement addAgentMemberAchievement err, count:", "1640256pwOuhV", "max", "updateMemberAchievement", "agentProfit", "directlyMemberCount", "addDirectlyMemberAchievement uid err, uid:", "addAgentMemberAchievement uid err, uid:", "_doc", "getCommision", "addAgentMemberCount", "findOneData", "HALL", "series", "addAgentMemberAchievement", ", uid:", "addDirectlyMemberCount err:", "directlyMemberAchievement", "2nGMPsG", "addDirectlyMemberAchievement updateData err, count:", "weekAddedAgentMemberCount", "10PJRtFO", "../util/utils"];
  a0_0x10cf = function () {
    return _0x48c52c;
  };
  return a0_0x10cf();
}
services[a0_0x126781(347)] = function (_0x4be712, _0x5aeb29, _0xd381a9) {
  const _0x8232e1 = a0_0x126781;
  services[_0x8232e1(330)](_0x4be712, _0x5aeb29, _0xd381a9);
};
services[a0_0x126781(330)] = function (_0x1f4271, _0x56e8b2, _0x5cb1a1) {
  const _0x5a716a = a0_0x126781;
  if (typeof _0x56e8b2 !== _0x5a716a(328) || _0x56e8b2 <= 0) {
    logger[_0x5a716a(334)]("addDirectlyMemberAchievement count err, count:" + _0x56e8b2);
    utils.invokeCallback(_0x5cb1a1);
    return;
  }
  !_0x1f4271 && (logger[_0x5a716a(334)](_0x5a716a(350) + _0x1f4271), utils[_0x5a716a(340)](_0x5cb1a1, code[_0x5a716a(333)]));
  let _0x411a7a = pomelo[_0x5a716a(336)][_0x5a716a(335)][_0x5a716a(374)](_0x1f4271);
  if (!!_0x411a7a) {
    let _0x45130f = {
      uid: _0x1f4271,
      directlyMemberAchievement: _0x411a7a[_0x5a716a(320)][_0x5a716a(361)] + _0x56e8b2
    };
    _0x411a7a[_0x5a716a(339)](_0x45130f);
    userInfoServices[_0x5a716a(337)](_0x411a7a, _0x45130f);
    if (!!_0x411a7a[_0x5a716a(320)][_0x5a716a(329)]) {
      let _0x46055c = _0x411a7a[_0x5a716a(320)][_0x5a716a(361)] + _0x411a7a[_0x5a716a(320)].agentMemberAchievement;
      let _0x1f39eb = this[_0x5a716a(375)](_0x46055c - _0x56e8b2, _0x46055c);
      services[_0x5a716a(358)](_0x411a7a[_0x5a716a(320)].spreaderID, _0x56e8b2, _0x1f39eb, function (_0x237538) {
        const _0xad3e11 = _0x5a716a;
        !!_0x237538 && logger[_0xad3e11(334)](_0xad3e11(343) + _0x56e8b2);
        utils[_0xad3e11(340)](_0x5cb1a1, _0x237538);
      });
    }
  } else {
    dao.findOneAndUpdateEx(_0x5a716a(378), {
      uid: _0x1f4271
    }, {
      $inc: {
        directlyMemberAchievement: _0x56e8b2
      }
    }, {
      new: true
    }, function (_0x10b2bd, _0x33e4ac) {
      const _0x1ee575 = _0x5a716a;
      if (!!_0x10b2bd) {
        logger[_0x1ee575(334)](_0x1ee575(363) + _0x56e8b2);
        utils[_0x1ee575(340)](_0x5cb1a1, _0x10b2bd);
      } else {
        if (!!_0x33e4ac && !!_0x33e4ac.spreaderID) {
          let _0x121192 = _0x33e4ac[_0x1ee575(361)] + _0x33e4ac[_0x1ee575(332)];
          let _0x587efc = services[_0x1ee575(375)](_0x121192 - _0x56e8b2, _0x121192);
          services.addAgentMemberAchievement(_0x33e4ac[_0x1ee575(329)], _0x56e8b2, _0x587efc, function (_0x359f20) {
            const _0x33bea8 = _0x1ee575;
            !!_0x10b2bd && logger[_0x33bea8(334)](_0x33bea8(343) + _0x56e8b2);
            utils.invokeCallback(_0x5cb1a1, _0x359f20);
          });
        } else {
          utils[_0x1ee575(340)](_0x5cb1a1);
        }
      }
    });
  }
};
services[a0_0x126781(358)] = function (_0x20fed8, _0x2d47e8, _0x1ce279, _0x2aa94e) {
  const _0x55f0ea = a0_0x126781;
  if (typeof _0x2d47e8 !== "number" || _0x2d47e8 <= 0) {
    logger[_0x55f0ea(334)]("addAgentMemberAchievement count err, count:" + _0x2d47e8);
    utils[_0x55f0ea(340)](_0x2aa94e);
    return;
  }
  !_0x20fed8 && (logger.error(_0x55f0ea(351) + _0x20fed8), utils[_0x55f0ea(340)](_0x2aa94e, code[_0x55f0ea(333)]));
  let _0x3326df = pomelo[_0x55f0ea(336)][_0x55f0ea(335)].getUserByUid(_0x20fed8);
  if (!!_0x3326df) {
    let _0x3c9b0e = {
      uid: _0x20fed8,
      agentMemberAchievement: _0x3326df.userDetailData[_0x55f0ea(332)] + _0x2d47e8,
      thisWeekLowerAgentCommision: _0x3326df[_0x55f0ea(320)].thisWeekLowerAgentCommision + _0x1ce279
    };
    _0x3326df[_0x55f0ea(339)](_0x3c9b0e);
    userInfoServices[_0x55f0ea(337)](_0x3326df, _0x3c9b0e);
    if (!!_0x3326df[_0x55f0ea(320)][_0x55f0ea(329)]) {
      let _0x5b96fb = _0x3326df[_0x55f0ea(320)][_0x55f0ea(361)] + _0x3326df[_0x55f0ea(320)][_0x55f0ea(332)];
      let _0x533d10 = this.getCommisionChangeValue(_0x5b96fb - _0x2d47e8, _0x5b96fb);
      services[_0x55f0ea(358)](_0x3326df.userDetailData.spreaderID, _0x2d47e8, _0x533d10, function (_0x59eb9c) {
        const _0x48d981 = _0x55f0ea;
        !!_0x59eb9c && logger[_0x48d981(334)]("addAgentMemberAchievement addAgentMemberAchievement err, count:" + _0x2d47e8);
        utils[_0x48d981(340)](_0x2aa94e, _0x59eb9c);
      });
    }
  } else {
    dao[_0x55f0ea(342)](_0x55f0ea(378), {
      uid: _0x20fed8
    }, {
      $inc: {
        agentMemberAchievement: _0x2d47e8,
        thisWeekLowerAgentCommision: _0x1ce279
      }
    }, {
      new: true
    }, function (_0x29525a, _0x1d4726) {
      const _0x2a6f16 = _0x55f0ea;
      if (!!_0x29525a) {
        logger[_0x2a6f16(334)]("addAgentMemberAchievement findOneAndUpdate err, count:" + _0x2d47e8);
        utils[_0x2a6f16(340)](_0x2aa94e, _0x29525a);
      } else {
        if (!!_0x1d4726 && !!_0x1d4726.spreaderID) {
          let _0x3f9a54 = _0x1d4726[_0x2a6f16(361)] + _0x1d4726[_0x2a6f16(332)];
          let _0x17d944 = services[_0x2a6f16(375)](_0x3f9a54 - _0x2d47e8, _0x3f9a54);
          services.addAgentMemberAchievement(_0x1d4726[_0x2a6f16(329)], _0x2d47e8, _0x17d944, function (_0x39bcce) {
            const _0x5d3a94 = _0x2a6f16;
            !!_0x29525a && logger.error(_0x5d3a94(344) + _0x2d47e8);
            utils[_0x5d3a94(340)](_0x2aa94e, _0x39bcce);
          });
        } else {
          utils[_0x2a6f16(340)](_0x2aa94e);
        }
      }
    });
  }
};
services[a0_0x126781(353)] = function (_0x424c8e) {
  const _0x205781 = a0_0x126781;
  let _0x9baacd = pomelo[_0x205781(336)][_0x205781(376)](_0x205781(348));
  for (let _0x1cf9f3 = 0; _0x1cf9f3 < _0x9baacd[_0x205781(321)]; ++_0x1cf9f3) {
    let _0x4871f3 = _0x9baacd[_0x1cf9f3];
    if (_0x4871f3.min <= _0x424c8e && (_0x4871f3[_0x205781(346)] > _0x424c8e || _0x4871f3[_0x205781(346)] === -1)) {
      return _0x4871f3.proportion * _0x424c8e;
    }
  }
  return 0;
};
services[a0_0x126781(375)] = function (_0xc50947, _0x327cfd) {
  return this.getCommision(_0x327cfd) - this.getCommision(_0xc50947);
};
services[a0_0x126781(373)] = function (_0x37b3d6, _0x226baa) {
  const _0x17a373 = a0_0x126781;
  let _0x1c6f46 = pomelo.app[_0x17a373(335)].getUserByUid(_0x37b3d6);
  let _0x2738a5 = null;
  async[_0x17a373(357)]([function (_0x109cfa) {
    const _0xdbbda7 = _0x17a373;
    !!_0x1c6f46 ? (_0x2738a5 = _0x1c6f46[_0xdbbda7(320)], _0x109cfa()) : dao[_0xdbbda7(355)]("userModel", {
      uid: _0x37b3d6
    }, function (_0x5a124e, _0x3af4e7) {
      const _0x203200 = _0xdbbda7;
      !!_0x5a124e ? _0x109cfa() : !_0x3af4e7 ? _0x109cfa(code[_0x203200(356)].NOT_FIND) : (_0x2738a5 = _0x3af4e7[_0x203200(352)], _0x109cfa());
    });
  }, function (_0x1864f3) {
    const _0x4a7891 = _0x17a373;
    _0x2738a5.directlyMemberCount === 0 && _0x2738a5[_0x4a7891(329)][_0x4a7891(321)] > 0 && services[_0x4a7891(354)](_0x2738a5[_0x4a7891(329)]);
    let _0x1a4b7e = {
      uid: _0x37b3d6,
      directlyMemberCount: _0x2738a5[_0x4a7891(349)] + 1,
      weekAddedDirectlyMemberCount: _0x2738a5[_0x4a7891(368)] + 1,
      monthAddedDirectlyMemberCount: _0x2738a5.monthAddedDirectlyMemberCount + 1
    };
    userInfoServices.updateUserDataByUid(_0x1c6f46, _0x1a4b7e, _0x1864f3);
  }], function (_0x5b60fa) {
    const _0x3509a4 = _0x17a373;
    !!_0x5b60fa && logger[_0x3509a4(334)](_0x3509a4(360) + _0x5b60fa + _0x3509a4(359) + _0x37b3d6);
    utils[_0x3509a4(340)](_0x226baa, _0x5b60fa);
  });
};
services.addAgentMemberCount = function (_0x1c5b86, _0x58372d) {
  const _0x265281 = a0_0x126781;
  let _0x40734c = pomelo[_0x265281(336)][_0x265281(335)].getUserByUid(_0x1c5b86);
  let _0x2ca0b1 = null;
  async.series([function (_0x1731d5) {
    const _0x4c822d = _0x265281;
    !!_0x40734c ? (_0x2ca0b1 = _0x40734c[_0x4c822d(320)], _0x1731d5()) : dao[_0x4c822d(355)]("userModel", {
      uid: _0x1c5b86
    }, function (_0x3b2a30, _0x3ec8ad) {
      const _0x1d3ba8 = _0x4c822d;
      !!_0x3b2a30 ? _0x1731d5() : !_0x3ec8ad ? _0x1731d5(code[_0x1d3ba8(356)].NOT_FIND) : (_0x2ca0b1 = _0x3ec8ad[_0x1d3ba8(352)], _0x1731d5());
    });
  }, function (_0x581f8f) {
    const _0x34c3b5 = _0x265281;
    let _0x2a1a40 = {
      uid: _0x1c5b86,
      agentMemberCount: _0x2ca0b1.agentMemberCount + 1,
      weekAddedAgentMemberCount: _0x2ca0b1[_0x34c3b5(364)] + 1,
      monthAddedAgentMemberCount: _0x2ca0b1[_0x34c3b5(377)] + 1
    };
    userInfoServices[_0x34c3b5(339)](_0x40734c, _0x2a1a40, _0x581f8f);
  }], function (_0x5c9d47) {
    const _0x1c087b = _0x265281;
    !!_0x5c9d47 && logger[_0x1c087b(334)](_0x1c087b(372) + _0x5c9d47 + _0x1c087b(359) + _0x1c5b86);
    utils.invokeCallback(_0x58372d, _0x5c9d47);
  });
};