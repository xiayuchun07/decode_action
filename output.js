
const a0_0x14f25f = a0_0x4e07;
function a0_0x1e8f() {
  const _0x2ae827 = ["updateUserDataByUid", "INVALID_UERS", "deleteEmail", "1048xdJpee", "getUserDataByUid", "99ABJpkA", "emailArr", "prototype", "../../../dao/commonDao", "readEmail", "splice", "isRead", "stringify", "stack", "handler", "14whMZgj", "45296490bOLwub", "emailID", "frontendId", "number", "1694290cKJdZp", "../../../constant/code", "getLogger", "uid", "3010204zYXick", "1292718YrIXVt", "app", "../../../dao/userDao", "exports", "3468447BIRxsL", "length", "[deleteEmail]", "parse", "10108782UajYOP", "8KLQQcP", "error", "REQUEST_DATA_ERROR", "updateUserDataNotify"];
  a0_0x1e8f = function () {
    return _0x2ae827;
  };
  return a0_0x1e8f();
}
function a0_0x4e07(_0x76d14b, _0x47fc6c) {
  const _0xc861f2 = a0_0x1e8f();
  a0_0x4e07 = function (_0x5d3164, _0x7bc490) {
    _0x5d3164 = _0x5d3164 - 303;
    let _0x2784ba = _0xc861f2[_0x5d3164];
    return _0x2784ba;
  };
  return a0_0x4e07(_0x76d14b, _0x47fc6c);
}
(function (_0x552556, _0x3d577a) {
  const _0x2390e8 = a0_0x4e07;
  const _0x3b45a8 = _0x552556();
  while (true) {
    try {
      const _0x10d923 = parseInt(_0x2390e8(340)) / 1 * (-parseInt(_0x2390e8(338)) / 2) + -parseInt(_0x2390e8(326)) / 3 + -parseInt(_0x2390e8(321)) / 4 + -parseInt(_0x2390e8(317)) / 5 + -parseInt(_0x2390e8(322)) / 6 * (parseInt(_0x2390e8(312)) / 7) + parseInt(_0x2390e8(331)) / 8 * (-parseInt(_0x2390e8(330)) / 9) + parseInt(_0x2390e8(313)) / 10;
      if (_0x10d923 === _0x3d577a) {
        break;
      } else {
        _0x3b45a8.push(_0x3b45a8.shift());
      }
    } catch (_0x53c066) {
      _0x3b45a8.push(_0x3b45a8.shift());
    }
  }
})(a0_0x1e8f, 676111);
let code = require(a0_0x14f25f(318));
let userInfoServices = require("../../../services/userInfoServices");
let userDao = require(a0_0x14f25f(324));
let commonDao = require(a0_0x14f25f(305));
let logger = require("pomelo-logger")[a0_0x14f25f(319)](a0_0x14f25f(311));
module[a0_0x14f25f(325)] = function (_0x4a3c47) {
  return new Handler(_0x4a3c47);
};
let Handler = function (_0x2745dd) {
  const _0x2c8960 = a0_0x14f25f;
  this[_0x2c8960(323)] = _0x2745dd;
};
Handler[a0_0x14f25f(304)][a0_0x14f25f(306)] = async function (_0xa985ad, _0x3f6605, _0x3d0995) {
  const _0x543418 = a0_0x14f25f;
  try {
    if (!_0x3f6605[_0x543418(320)]) {
      _0x3d0995(null, {
        code: code[_0x543418(336)]
      });
      return;
    }
    if (!_0xa985ad.emailID) {
      _0x3d0995(null, {
        code: code.REQUEST_DATA_ERROR
      });
      return;
    }
    let _0x39392e = await userDao[_0x543418(339)](_0x3f6605[_0x543418(320)]);
    if (!_0x39392e) {
      _0x3d0995(null, {
        code: code[_0x543418(336)]
      });
      return;
    }
    if (_0x39392e.emailArr.length === 0) {
      _0x3d0995(null, {
        code: code.REQUEST_DATA_ERROR
      });
      return;
    }
    let _0x300bfc = JSON[_0x543418(329)](_0x39392e[_0x543418(303)]);
    let _0x35c746 = false;
    for (let _0x1af3d6 = 0; _0x1af3d6 < _0x300bfc[_0x543418(327)]; ++_0x1af3d6) {
      let _0x36b90c = _0x300bfc[_0x1af3d6];
      if (_0x36b90c.id === _0xa985ad[_0x543418(314)]) {
        if (_0x36b90c[_0x543418(308)]) {
          break;
        }
        _0x36b90c.isRead = true;
        _0x35c746 = true;
        break;
      }
    }
    _0x35c746 && (await userDao[_0x543418(335)](_0x3f6605[_0x543418(320)], {
      emailArr: JSON.stringify(_0x300bfc)
    }), await userInfoServices[_0x543418(334)](_0x3f6605[_0x543418(320)], _0x39392e[_0x543418(315)], {
      emailArr: JSON.stringify(_0x300bfc)
    }));
    _0x3d0995(null, {
      code: code.OK
    });
  } catch (_0xb4faa3) {
    logger.error("withdrawCashRequest", _0xb4faa3);
    _0x3d0995(null, {
      code: typeof _0xb4faa3 === _0x543418(316) ? _0xb4faa3 : 500
    });
  }
};
Handler[a0_0x14f25f(304)][a0_0x14f25f(337)] = async function (_0x1c8b9c, _0x197f52, _0x50c8ab) {
  const _0x116b74 = a0_0x14f25f;
  try {
    if (!_0x197f52[_0x116b74(320)]) {
      _0x50c8ab(null, {
        code: code[_0x116b74(336)]
      });
      return;
    }
    if (!_0x1c8b9c[_0x116b74(314)]) {
      _0x50c8ab(null, {
        code: code[_0x116b74(333)]
      });
      return;
    }
    let _0x9ea74 = await userDao.getUserDataByUid(_0x197f52[_0x116b74(320)]);
    !_0x9ea74 && _0x50c8ab(null, {
      code: code.REQUEST_DATA_ERROR
    });
    if (_0x9ea74[_0x116b74(303)].length === 0) {
      _0x50c8ab(null, {
        code: code.OK
      });
      return;
    }
    let _0xfadee7 = JSON[_0x116b74(329)](_0x9ea74[_0x116b74(303)]);
    let _0x532699 = false;
    for (let _0x58856c = 0; _0x58856c < _0xfadee7[_0x116b74(327)]; ++_0x58856c) {
      let _0x3b75a9 = _0xfadee7[_0x58856c];
      if (_0x3b75a9.id === _0x1c8b9c[_0x116b74(314)]) {
        _0xfadee7[_0x116b74(307)](_0x58856c, 1);
        _0x532699 = true;
        break;
      }
    }
    _0x532699 ? (await userDao[_0x116b74(335)](_0x197f52[_0x116b74(320)], {
      emailArr: JSON.stringify(_0xfadee7)
    }), _0x50c8ab(null, {
      code: code.OK,
      updateUserData: {
        emailArr: JSON[_0x116b74(309)](_0xfadee7)
      }
    })) : _0x50c8ab(null, {
      code: code.OK
    });
  } catch (_0x13cc55) {
    logger[_0x116b74(332)](_0x116b74(328) + _0x13cc55[_0x116b74(310)]);
    _0x50c8ab(null, {
      code: 500
    });
  }
};