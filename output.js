
function a0_0x59b5() {
  const _0x5944a0 = ["stack", "NOT_IN_ROOM", "1720WLxlat", "get", "roomID", "roomMessageNotify", "12740pgCBvw", "../../../constant/code", "error", "1899RzorSm", "INVALID_UERS", "17130pWNQPf", "515661pqEuBd", "gameMessageNotify", "uid", "696NksRZi", "1776jnmWDs", "app", "800592AngAeN", "prototype", "1068RbdeDK", "getRoomFrameByID", "receiveGameMessage", "101651UpbXgc", "235940GtRaeR", "12rfklVm", "getLogger"];
  a0_0x59b5 = function () {
    return _0x5944a0;
  };
  return a0_0x59b5();
}
const a0_0x4ff32f = a0_0x2437;
(function (_0x3e781c, _0x47b6e0) {
  const _0x5a9227 = a0_0x2437;
  const _0xdf85d9 = _0x3e781c();
  while (true) {
    try {
      const _0x56ef0d = parseInt(_0x5a9227(164)) / 1 + parseInt(_0x5a9227(176)) / 2 * (parseInt(_0x5a9227(177)) / 3) + parseInt(_0x5a9227(170)) / 4 + parseInt(_0x5a9227(181)) / 5 * (-parseInt(_0x5a9227(167)) / 6) + parseInt(_0x5a9227(185)) / 7 * (-parseInt(_0x5a9227(168)) / 8) + -parseInt(_0x5a9227(161)) / 9 * (-parseInt(_0x5a9227(163)) / 10) + parseInt(_0x5a9227(175)) / 11 * (-parseInt(_0x5a9227(172)) / 12);
      if (_0x56ef0d === _0x47b6e0) {
        break;
      } else {
        _0xdf85d9.push(_0xdf85d9.shift());
      }
    } catch (_0x4bf10a) {
      _0xdf85d9.push(_0xdf85d9.shift());
    }
  }
})(a0_0x59b5, 282739);
let code = require(a0_0x4ff32f(186));
let unionManager = require("../domain/unionManager");
let logger = require("pomelo-logger")[a0_0x4ff32f(178)]("logic");
function a0_0x2437(_0x503cce, _0x11dbc6) {
  const _0x585292 = a0_0x59b5();
  a0_0x2437 = function (_0x421bac, _0x5634a3) {
    _0x421bac = _0x421bac - 160;
    let _0x4b79fb = _0x585292[_0x421bac];
    return _0x4b79fb;
  };
  return a0_0x2437(_0x503cce, _0x11dbc6);
}
module.exports = function (_0xfdce80) {
  return new Handler(_0xfdce80);
};
let Handler = function (_0x4c5074) {
  const _0xd26f11 = a0_0x4ff32f;
  this[_0xd26f11(169)] = _0x4c5074;
};
Handler[a0_0x4ff32f(171)][a0_0x4ff32f(184)] = function (_0x4355d2, _0x1ec9cb, _0x2a9577) {
  const _0x176da5 = a0_0x4ff32f;
  try {
    if (!_0x1ec9cb.uid) {
      _0x2a9577(null, {
        code: code[_0x176da5(162)]
      });
      return;
    }
    let _0x1656d2 = _0x1ec9cb[_0x176da5(182)]("roomID");
    if (!_0x1656d2) {
      _0x2a9577(null, {
        code: code[_0x176da5(180)]
      });
      return;
    }
    let _0x2ec73c = unionManager[_0x176da5(173)](_0x1656d2);
    if (!_0x2ec73c) {
      _0x2a9577(null, {
        code: code.NOT_IN_ROOM
      });
      return;
    }
    _0x2ec73c.receiveRoomMessage(_0x1ec9cb.uid, _0x4355d2);
  } catch (_0x3e084f) {
    logger[_0x176da5(160)](_0x3e084f[_0x176da5(179)]);
  } finally {
    _0x2a9577();
  }
};
Handler[a0_0x4ff32f(171)][a0_0x4ff32f(165)] = function (_0x50ce47, _0x56b1d4, _0x3de3e4) {
  const _0x2452cf = a0_0x4ff32f;
  try {
    if (!_0x56b1d4[_0x2452cf(166)]) {
      _0x3de3e4(null, {
        code: code[_0x2452cf(162)]
      });
      return;
    }
    let _0x105de5 = _0x56b1d4[_0x2452cf(182)](_0x2452cf(183));
    if (!_0x105de5) {
      _0x3de3e4(null, {
        code: code[_0x2452cf(180)]
      });
      return;
    }
    let _0x1f9fcc = unionManager.getRoomFrameByID(_0x105de5);
    if (!_0x1f9fcc) {
      _0x3de3e4(null, {
        code: code[_0x2452cf(180)]
      });
      return;
    }
    _0x1f9fcc[_0x2452cf(174)](_0x56b1d4[_0x2452cf(166)], _0x50ce47);
  } catch (_0x45abdc) {
    logger[_0x2452cf(160)](_0x45abdc[_0x2452cf(179)]);
  } finally {
    _0x3de3e4();
  }
};