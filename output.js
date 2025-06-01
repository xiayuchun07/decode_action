
const a0_0x1518ff = a0_0x45a3;
(function (_0x240267, _0x740eb0) {
  const _0x67e5b9 = a0_0x45a3;
  const _0x376d82 = _0x240267();
  while (true) {
    try {
      const _0x3e86c2 = parseInt(_0x67e5b9(217)) / 1 + -parseInt(_0x67e5b9(224)) / 2 + parseInt(_0x67e5b9(234)) / 3 + -parseInt(_0x67e5b9(233)) / 4 * (-parseInt(_0x67e5b9(228)) / 5) + parseInt(_0x67e5b9(220)) / 6 * (-parseInt(_0x67e5b9(211)) / 7) + -parseInt(_0x67e5b9(239)) / 8 + -parseInt(_0x67e5b9(222)) / 9 * (-parseInt(_0x67e5b9(240)) / 10);
      if (_0x3e86c2 === _0x740eb0) {
        break;
      } else {
        _0x376d82.push(_0x376d82.shift());
      }
    } catch (_0x557bb2) {
      _0x376d82.push(_0x376d82.shift());
    }
  }
})(a0_0x484b, 310559);
function a0_0x484b() {
  const _0x5b2101 = ["1268VmHQFG", "505374WGTFhO", "MOBILE_PHONE", "ACCOUNT", "findOneData", "string", "2909024wSrGjI", "59710khyLdm", "2984345rBnLDN", "WEI_XIN", "checkAccountAndPassword", "../dao/commonDao", "../util/token", "dispatcherServers", "473102IZtPcT", "REQUEST_DATA_ERROR", "clientPort", "6sLLWEz", "registerAccount", "774lFLGLY", "length", "124938UoeQcn", "ACCOUNT_EXIST", "loginPlatform", "clientHost", "125IswdPc", "createToken", "../constant/enumeration", "accountModel", "dispatch"];
  a0_0x484b = function () {
    return _0x5b2101;
  };
  return a0_0x484b();
}
function a0_0x45a3(_0x2a0848, _0x11f6fd) {
  const _0x30aa52 = a0_0x484b();
  a0_0x45a3 = function (_0x4c75b5, _0x405f3d) {
    _0x4c75b5 = _0x4c75b5 - 211;
    let _0x5795bf = _0x30aa52[_0x4c75b5];
    return _0x5795bf;
  };
  return a0_0x45a3(_0x2a0848, _0x11f6fd);
}
let code = require("../constant/code");
let dao = require(a0_0x1518ff(214));
let enumeration = require(a0_0x1518ff(230));
let dispatcher = require("../util/dispatcher");
let token = require(a0_0x1518ff(215));
let services = module.exports;
services[a0_0x1518ff(213)] = function (_0x12b957, _0x26fb60, _0x3cb0be) {
  const _0x4d363c = a0_0x1518ff;
  if (!_0x12b957 || !_0x26fb60 || !_0x3cb0be) {
    return false;
  }
  if (typeof _0x12b957 !== _0x4d363c(238) || typeof _0x26fb60 !== _0x4d363c(238)) {
    return false;
  }
  if (_0x3cb0be === enumeration[_0x4d363c(226)][_0x4d363c(236)]) {
    return _0x12b957[_0x4d363c(223)] <= 20 && _0x26fb60.length <= 20;
  } else {
    if (_0x3cb0be === enumeration[_0x4d363c(226)][_0x4d363c(235)]) {
      return _0x12b957[_0x4d363c(223)] === 11 && _0x26fb60[_0x4d363c(223)] < 20;
    } else {
      if (_0x3cb0be === enumeration[_0x4d363c(226)][_0x4d363c(212)]) {
        return true;
      }
    }
  }
  return false;
};
services[a0_0x1518ff(221)] = async function (_0x15bf43, _0x35c4bf, _0x2df93b, _0x200fb7) {
  const _0x13b78f = a0_0x1518ff;
  if (!services.checkAccountAndPassword(_0x15bf43, _0x35c4bf, _0x2df93b)) {
    throw new Error(code[_0x13b78f(218)]);
  }
  let _0x4e4558 = {
    account: _0x15bf43,
    password: _0x35c4bf
  };
  let _0x326290 = {
    account: _0x15bf43,
    password: _0x35c4bf,
    registerInfo: _0x200fb7
  };
  let _0x58b1ef = await dao[_0x13b78f(237)](_0x13b78f(231), _0x326290);
  if (!!_0x58b1ef) {
    throw new Error(code[_0x13b78f(225)]);
  }
  return await dao.createData(_0x13b78f(231), _0x4e4558);
};
services[a0_0x1518ff(216)] = function (_0x1506f0, _0x410b79) {
  const _0x24ad81 = a0_0x1518ff;
  if (!_0x1506f0 || _0x1506f0[_0x24ad81(223)] === 0) {
    return null;
  }
  let _0x391341 = dispatcher[_0x24ad81(232)](_0x410b79, _0x1506f0);
  return {
    serverInfo: {
      host: _0x391341[_0x24ad81(227)],
      port: _0x391341[_0x24ad81(219)]
    },
    token: token[_0x24ad81(229)](_0x410b79, _0x391341.id)
  };
};