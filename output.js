
function a0_0x9947() {
  const _0x2d3244 = ["get", "TOKEN_INFO_ERROR", "WEI_XIN", "register err:", "undefined", "2387706eHHmxB", "../../../../config/wechart", "2640519aoQDbz", "access_token", "GET_HALL_SERVERS_FAIL", "length", "password", "parseToken", "Access-Control-Allow-Origin", "1436012AFBIsQ", "4bRiOIM", "[wxInfo] get userInfo error : ", "authSmsCode", "app", "INVALID_UERS", "ACCOUNT", "ACCOUNT_EXIST", "now", "../../../util/utils", "MOBILE_PHONE", "findOneData", "Access-Control-Allow-Methods", "catch", "json", "getLogger", "1179650eacHjO", "openid", "code", "timekey", "token", "176410wBNQaz", "NICKNAME_EXIST", "findOneAndUpdate", "dispatcherServers", "/login", "/reconnection", "body", "wechart", "FAIL", "post", "serverID", "REQUEST_DATA_ERROR", "5YHrNMa", "account", "SMS_CODE_ERROR", "pomelo-logger", "logic", "1101592beROtl", "14NLRblx", "getServersByType", "https://api.weixin.qq.com/sns/oauth2/access_token?appid=", "data", "Content-Type", "X-Requested-With", "axios", "/register", "header", "Access-Control-Allow-Headers", "phoneAccount", "smsCode", "null", "&openid=", "https://api.weixin.qq.com/sns/userinfo?access_token=", "wxAccount", "userModel", "stringify", "uid", "accountModel", "connector", "then", "registerInfo", "../../../util/token", "createData", "PUT, GET, POST, DELETE, OPTIONS", "[wxInfo] get access token error : ", "../../../constant/enumeration", "&code=", "../../../services/authServices", "3782271QeDAtZ", "error", "nickname", "loginPlatform", "[wxInfo] get access token fail : "];
  a0_0x9947 = function () {
    return _0x2d3244;
  };
  return a0_0x9947();
}
const a0_0x14f2f7 = a0_0x2845;
(function (_0xcbc099, _0x5f0f67) {
  const _0x28cfe4 = a0_0x2845;
  const _0x1b15b4 = _0xcbc099();
  while (true) {
    try {
      const _0x565668 = -parseInt(_0x28cfe4(395)) / 1 + parseInt(_0x28cfe4(411)) / 2 + -parseInt(_0x28cfe4(376)) / 3 * (-parseInt(_0x28cfe4(396)) / 4) + -parseInt(_0x28cfe4(340)) / 5 * (-parseInt(_0x28cfe4(386)) / 6) + -parseInt(_0x28cfe4(346)) / 7 * (-parseInt(_0x28cfe4(345)) / 8) + -parseInt(_0x28cfe4(388)) / 9 + -parseInt(_0x28cfe4(416)) / 10;
      if (_0x565668 === _0x5f0f67) {
        break;
      } else {
        _0x1b15b4.push(_0x1b15b4.shift());
      }
    } catch (_0x15add9) {
      _0x1b15b4.push(_0x1b15b4.shift());
    }
  }
})(a0_0x9947, 776887);
let pomelo = require("pomelo");
let enumeration = require(a0_0x14f2f7(373));
let code = require("../../../constant/code");
let accountServices = require("../../../services/accountServices");
let commonDao = require("../../../dao/commonDao");
let logger = require(a0_0x14f2f7(343))[a0_0x14f2f7(410)](a0_0x14f2f7(344));
let authServices = require(a0_0x14f2f7(375));
let token = require(a0_0x14f2f7(369));
let utils = require(a0_0x14f2f7(404));
let wechartConfig = require(a0_0x14f2f7(387));
let axios = require(a0_0x14f2f7(352));
function a0_0x2845(_0x63a903, _0x42a623) {
  const _0x514558 = a0_0x9947();
  a0_0x2845 = function (_0x10be39, _0x8e88e6) {
    _0x10be39 = _0x10be39 - 334;
    let _0x35f31c = _0x514558[_0x10be39];
    return _0x35f31c;
  };
  return a0_0x2845(_0x63a903, _0x42a623);
}
const os = require("os");
let TOKEN_RECONNETION_INVALID_TIME = 86400000;
module.exports = function (_0x582a01, _0x78b88b) {
  const _0x4dca2b = a0_0x14f2f7;
  _0x78b88b[_0x4dca2b(337)](_0x4dca2b(353), async function (_0xbc8f34, _0x704a4d) {
    const _0xe2e62c = _0x4dca2b;
    _0x704a4d[_0xe2e62c(354)]("Access-Control-Allow-Origin", "*");
    _0x704a4d[_0xe2e62c(354)](_0xe2e62c(407), _0xe2e62c(371));
    _0x704a4d[_0xe2e62c(354)](_0xe2e62c(355), _0xe2e62c(351));
    _0x704a4d.header(_0xe2e62c(355), "Content-Type");
    let _0x180e39 = _0xbc8f34[_0xe2e62c(334)][_0xe2e62c(341)] || null;
    let _0x4481ea = _0xbc8f34[_0xe2e62c(334)].password || null;
    let _0x53f194 = _0xbc8f34[_0xe2e62c(334)].loginPlatform || null;
    _0x53f194 = parseInt(_0x53f194);
    let _0xcca74f = _0xbc8f34[_0xe2e62c(334)][_0xe2e62c(368)] || JSON[_0xe2e62c(363)]({});
    let _0x3329fb = _0xbc8f34[_0xe2e62c(334)][_0xe2e62c(357)] || "";
    let _0xe6cf62 = {};
    let _0x46174c = {};
    if (_0x53f194 === enumeration[_0xe2e62c(379)][_0xe2e62c(401)]) {
      if (!accountServices.checkAccountAndPassword(_0x180e39, _0x4481ea, _0x53f194)) {
        _0x704a4d[_0xe2e62c(409)]({
          code: code[_0xe2e62c(339)]
        });
        return;
      }
      _0x46174c[_0xe2e62c(341)] = _0x180e39;
      _0xe6cf62[_0xe2e62c(341)] = _0x180e39;
      _0xe6cf62[_0xe2e62c(392)] = _0x4481ea;
      _0xe6cf62[_0xe2e62c(368)] = JSON[_0xe2e62c(363)](_0xcca74f);
    } else {
      if (_0x53f194 === enumeration[_0xe2e62c(379)][_0xe2e62c(383)]) {
        _0x46174c[_0xe2e62c(361)] = _0x180e39;
        _0xe6cf62.wxAccount = _0x180e39;
        _0xe6cf62[_0xe2e62c(368)] = JSON.stringify(_0xcca74f);
      } else {
        if (_0x53f194 === enumeration.loginPlatform.MOBILE_PHONE) {
          let _0x4ec405 = _0xbc8f34[_0xe2e62c(334)][_0xe2e62c(378)];
          if (!_0x4ec405) {
            _0x704a4d[_0xe2e62c(409)]({
              code: code[_0xe2e62c(339)]
            });
            return;
          }
          let _0x3302a6 = await commonDao.findOneData(_0xe2e62c(362), {
            nickname: _0x4ec405
          });
          if (_0x3302a6) {
            _0x704a4d[_0xe2e62c(409)]({
              code: code[_0xe2e62c(417)]
            });
            return;
          }
          if (!_0x3329fb) {
            _0x704a4d[_0xe2e62c(409)]({
              code: code[_0xe2e62c(342)]
            });
            return;
          } else {
            if (!(await authServices[_0xe2e62c(398)](_0x180e39, _0x3329fb))) {
              _0x704a4d[_0xe2e62c(409)]({
                code: code[_0xe2e62c(342)]
              });
              return;
            }
          }
          _0x46174c[_0xe2e62c(356)] = _0x180e39;
          _0xe6cf62[_0xe2e62c(356)] = _0x180e39;
          _0xe6cf62.password = _0x4481ea;
          _0xe6cf62.registerInfo = JSON.stringify(_0xcca74f);
        }
      }
    }
    try {
      let _0x7ffeac = await commonDao[_0xe2e62c(406)](_0xe2e62c(365), _0x46174c);
      if (_0x53f194 === enumeration[_0xe2e62c(379)].ACCOUNT || _0x53f194 === enumeration[_0xe2e62c(379)][_0xe2e62c(405)]) {
        if (!!_0x7ffeac) {
          _0x704a4d[_0xe2e62c(409)]({
            code: code[_0xe2e62c(402)]
          });
          return;
        }
      }
      if (!_0x7ffeac) {
        let _0x57f695;
        let _0x1bfce1 = 100;
        while (_0x1bfce1 > 0) {
          _0x57f695 = utils.getRandomNum(100000, 999999);
          let _0x28e053 = await commonDao.findOneData(_0xe2e62c(365), {
            uid: _0x57f695
          });
          let _0x1c65c1 = await commonDao[_0xe2e62c(406)]("userModel", {
            uid: _0x57f695
          });
          if (!_0x1c65c1 && !_0x28e053) {
            break;
          }
          _0x1bfce1--;
          if (_0x1bfce1 <= 0) {
            _0x704a4d.json({
              code: code[_0xe2e62c(336)]
            });
            return;
          }
        }
        _0xe6cf62[_0xe2e62c(364)] = _0x57f695;
        _0x7ffeac = await commonDao[_0xe2e62c(370)](_0xe2e62c(365), _0xe6cf62);
      }
      let _0x40ce76 = accountServices[_0xe2e62c(419)](pomelo[_0xe2e62c(399)].getServersByType(_0xe2e62c(366)), _0x7ffeac[_0xe2e62c(364)]);
      !_0x40ce76 ? _0x704a4d[_0xe2e62c(409)]({
        code: code[_0xe2e62c(390)]
      }) : _0x704a4d[_0xe2e62c(409)]({
        code: code.OK,
        msg: _0x40ce76
      });
    } catch (_0x2af253) {
      logger[_0xe2e62c(377)](_0xe2e62c(384) + JSON[_0xe2e62c(363)](_0x2af253));
      _0x704a4d.json({
        code: _0x2af253
      });
    }
  });
  _0x78b88b[_0x4dca2b(337)](_0x4dca2b(420), async function (_0x21f07f, _0x3d8f30) {
    const _0xfee029 = _0x4dca2b;
    _0x3d8f30.header(_0xfee029(394), "*");
    _0x3d8f30[_0xfee029(354)](_0xfee029(407), _0xfee029(371));
    _0x3d8f30[_0xfee029(354)]("Access-Control-Allow-Headers", "X-Requested-With");
    _0x3d8f30[_0xfee029(354)]("Access-Control-Allow-Headers", _0xfee029(350));
    let _0x37a509 = _0x21f07f[_0xfee029(334)][_0xfee029(341)] || null;
    let _0x4c80f1 = _0x21f07f[_0xfee029(334)][_0xfee029(392)] || null;
    let _0x5f04d8 = parseInt(_0x21f07f[_0xfee029(334)][_0xfee029(379)]) || null;
    if (!_0x37a509 || !_0x5f04d8) {
      _0x3d8f30[_0xfee029(409)]({
        code: code[_0xfee029(339)]
      });
      return;
    }
    let _0x495c85 = {};
    if (_0x5f04d8 === enumeration.loginPlatform[_0xfee029(401)]) {
      _0x495c85[_0xfee029(341)] = _0x37a509;
      _0x495c85[_0xfee029(392)] = _0x4c80f1;
    } else {
      if (_0x5f04d8 === enumeration[_0xfee029(379)][_0xfee029(383)]) {
        _0x495c85[_0xfee029(361)] = _0x37a509;
      } else {
        let _0x940186 = _0x21f07f.body[_0xfee029(357)];
        if (_0x21f07f[_0xfee029(334)][_0xfee029(357)] && _0x940186[_0xfee029(391)] != 0 && _0x940186 != _0xfee029(385) && _0x940186 != _0xfee029(358)) {
          if (!(await authServices[_0xfee029(398)](_0x37a509, _0x940186))) {
            _0x3d8f30[_0xfee029(409)]({
              code: code[_0xfee029(342)]
            });
            return;
          }
          _0x495c85[_0xfee029(356)] = _0x37a509;
        } else {
          _0x495c85[_0xfee029(356)] = _0x37a509;
          _0x495c85[_0xfee029(392)] = _0x4c80f1;
        }
      }
    }
    let _0x40ee8b = await commonDao[_0xfee029(406)](_0xfee029(365), _0x495c85);
    if (!_0x40ee8b) {
      _0x3d8f30[_0xfee029(409)]({
        code: code[_0xfee029(400)]
      });
    } else {
      let _0x550a9e = accountServices.dispatcherServers(pomelo.app[_0xfee029(347)](_0xfee029(366)), _0x40ee8b.uid);
      !_0x550a9e ? _0x3d8f30.json({
        code: code[_0xfee029(390)]
      }) : _0x3d8f30[_0xfee029(409)]({
        code: code.OK,
        msg: _0x550a9e
      });
    }
  });
  _0x78b88b[_0x4dca2b(337)](_0x4dca2b(421), async function (_0x13ef07, _0x3877be) {
    const _0x3f45a1 = _0x4dca2b;
    _0x3877be[_0x3f45a1(354)](_0x3f45a1(394), "*");
    _0x3877be[_0x3f45a1(354)](_0x3f45a1(407), _0x3f45a1(371));
    _0x3877be[_0x3f45a1(354)](_0x3f45a1(355), "X-Requested-With");
    _0x3877be.header(_0x3f45a1(355), _0x3f45a1(350));
    if (!_0x13ef07.body[_0x3f45a1(415)]) {
      _0x3877be.json({
        code: code[_0x3f45a1(339)]
      });
      return;
    }
    let _0x2e83bf = token[_0x3f45a1(393)](_0x13ef07[_0x3f45a1(334)][_0x3f45a1(415)]);
    if (!_0x2e83bf || !_0x2e83bf[_0x3f45a1(338)] || !_0x2e83bf[_0x3f45a1(414)] || !_0x2e83bf[_0x3f45a1(364)]) {
      _0x3877be[_0x3f45a1(409)]({
        code: code.REQUEST_DATA_ERROR
      });
      return;
    }
    let _0x661d7 = Date[_0x3f45a1(403)]();
    if (_0x661d7 - _0x2e83bf[_0x3f45a1(414)] > TOKEN_RECONNETION_INVALID_TIME) {
      _0x3877be[_0x3f45a1(409)](null, {
        code: code[_0x3f45a1(382)]
      });
      return;
    }
    let _0xfb890 = accountServices.dispatcherServers(pomelo[_0x3f45a1(399)].getServersByType("connector"), _0x2e83bf[_0x3f45a1(364)]);
    !_0xfb890 ? _0x3877be[_0x3f45a1(409)]({
      code: code[_0x3f45a1(390)]
    }) : _0x3877be[_0x3f45a1(409)]({
      code: code.OK,
      msg: _0xfb890
    });
  });
  _0x78b88b.post("/wxInfo", async function (_0x7a53b6, _0x2e00a4) {
    const _0x127519 = _0x4dca2b;
    _0x2e00a4[_0x127519(354)](_0x127519(394), "*");
    _0x2e00a4[_0x127519(354)](_0x127519(407), _0x127519(371));
    _0x2e00a4[_0x127519(354)]("Access-Control-Allow-Headers", "X-Requested-With");
    _0x2e00a4[_0x127519(354)](_0x127519(355), _0x127519(350));
    if (!_0x7a53b6[_0x127519(334)].code) {
      _0x2e00a4.json({
        code: code[_0x127519(339)]
      });
      return;
    }
    let _0x10302d = _0x7a53b6[_0x127519(334)][_0x127519(413)];
    let {
      appID: _0x4534be,
      appSecret: _0x3966af
    } = wechartConfig[_0x127519(335)];
    let _0x5af1c9 = _0x127519(348) + _0x4534be + "&secret=" + _0x3966af + _0x127519(374) + _0x10302d + "&grant_type=authorization_code";
    axios[_0x127519(381)](_0x5af1c9)[_0x127519(367)](_0xaaff55 => {
      const _0x4fb6d7 = _0x127519;
      if (_0xaaff55 && _0xaaff55[_0x4fb6d7(349)] && _0xaaff55[_0x4fb6d7(349)].errcode) {
        logger[_0x4fb6d7(377)](_0x4fb6d7(380) + JSON[_0x4fb6d7(363)](_0xaaff55.data));
        _0x2e00a4[_0x4fb6d7(409)]({
          code: code[_0x4fb6d7(336)]
        });
        return;
      } else {
        let _0x148808 = _0xaaff55[_0x4fb6d7(349)][_0x4fb6d7(412)];
        let _0x2440bf = _0xaaff55[_0x4fb6d7(349)][_0x4fb6d7(389)];
        let _0x35e7cf = _0x4fb6d7(360) + _0x2440bf + _0x4fb6d7(359) + _0x148808;
        axios[_0x4fb6d7(381)](_0x35e7cf).then(_0x4ec426 => {
          const _0x6fcd1a = _0x4fb6d7;
          _0x2e00a4[_0x6fcd1a(409)]({
            code: code.OK,
            msg: _0x4ec426[_0x6fcd1a(349)]
          });
          return;
        })[_0x4fb6d7(408)](_0x276464 => {
          const _0xc136c0 = _0x4fb6d7;
          logger[_0xc136c0(377)](_0xc136c0(397) + JSON[_0xc136c0(363)](_0x276464));
          _0x2e00a4[_0xc136c0(409)]({
            code: code.FAIL
          });
          return;
        });
      }
    })[_0x127519(408)](_0x367a42 => {
      const _0x3f3450 = _0x127519;
      logger.error(_0x3f3450(372) + JSON[_0x3f3450(363)](_0x367a42));
      _0x2e00a4[_0x3f3450(409)]({
        code: code[_0x3f3450(336)]
      });
      return;
    });
  });
  _0x78b88b[_0x4dca2b(337)]("/upavatar", async function (_0xdc06bd, _0x418267) {
    const _0x4fcc6f = _0x4dca2b;
    _0x418267[_0x4fcc6f(354)]("Access-Control-Allow-Origin", "*");
    _0x418267[_0x4fcc6f(354)](_0x4fcc6f(407), _0x4fcc6f(371));
    _0x418267.header(_0x4fcc6f(355), _0x4fcc6f(351));
    _0x418267[_0x4fcc6f(354)]("Access-Control-Allow-Headers", _0x4fcc6f(350));
    if (!_0xdc06bd[_0x4fcc6f(334)].uid || !_0xdc06bd.body.data) {
      _0x418267[_0x4fcc6f(409)]({
        code: _0x2ed1ec.REQUEST_DATA_ERROR
      });
      return;
    }
    let _0x46d260 = await commonDao[_0x4fcc6f(418)]("userModel", {
      uid: _0xdc06bd[_0x4fcc6f(334)][_0x4fcc6f(364)]
    }, {
      avater64: _0xdc06bd[_0x4fcc6f(334)][_0x4fcc6f(349)]
    });
    let _0x2ed1ec = _0x46d260 ? _0x2ed1ec.OK : _0x2ed1ec[_0x4fcc6f(336)];
    _0x418267[_0x4fcc6f(409)]({
      code: _0x2ed1ec,
      msg: _0xdc06bd[_0x4fcc6f(334)][_0x4fcc6f(349)]
    });
  });
  _0x78b88b.post("/resetPassword", async function (_0x54e1c6, _0x4d85ab) {
    const _0x3b54fa = _0x4dca2b;
    _0x4d85ab.header(_0x3b54fa(394), "*");
    _0x4d85ab[_0x3b54fa(354)](_0x3b54fa(407), "PUT, GET, POST, DELETE, OPTIONS");
    _0x4d85ab[_0x3b54fa(354)](_0x3b54fa(355), "X-Requested-With");
    _0x4d85ab.header(_0x3b54fa(355), _0x3b54fa(350));
    let _0x502840 = _0x54e1c6.body[_0x3b54fa(341)] || null;
    let _0x2d5198 = _0x54e1c6[_0x3b54fa(334)][_0x3b54fa(392)] || null;
    let _0x29387d = _0x54e1c6[_0x3b54fa(334)][_0x3b54fa(357)] || null;
    if (!_0x502840 || !_0x2d5198 || !_0x29387d) {
      _0x4d85ab[_0x3b54fa(409)]({
        code: code.REQUEST_DATA_ERROR
      });
      return;
    }
    if (!(await authServices.authSmsCode(_0x502840, _0x29387d))) {
      _0x4d85ab[_0x3b54fa(409)]({
        code: code[_0x3b54fa(342)]
      });
      return;
    }
    await commonDao.updateData("accountModel", {
      phoneAccount: _0x502840
    }, {
      password: _0x2d5198
    });
    _0x4d85ab.json({
      code: code.OK
    });
  });
};