
const a0_0x16d6f9 = a0_0xc6dd;
(function (_0x18498a, _0x150c67) {
  const _0xa75e14 = a0_0xc6dd;
  const _0x6cfec9 = _0x18498a();
  while (true) {
    try {
      const _0x37bf13 = -parseInt(_0xa75e14(348)) / 1 * (parseInt(_0xa75e14(340)) / 2) + parseInt(_0xa75e14(355)) / 3 * (parseInt(_0xa75e14(323)) / 4) + parseInt(_0xa75e14(351)) / 5 * (-parseInt(_0xa75e14(341)) / 6) + parseInt(_0xa75e14(343)) / 7 + parseInt(_0xa75e14(325)) / 8 * (-parseInt(_0xa75e14(353)) / 9) + parseInt(_0xa75e14(342)) / 10 * (-parseInt(_0xa75e14(354)) / 11) + parseInt(_0xa75e14(334)) / 12;
      if (_0x37bf13 === _0x150c67) {
        break;
      } else {
        _0x6cfec9.push(_0x6cfec9.shift());
      }
    } catch (_0x444d21) {
      _0x6cfec9.push(_0x6cfec9.shift());
    }
  }
})(a0_0x5096, 690222);
let dispatch = require(a0_0x16d6f9(331));
let code = require(a0_0x16d6f9(357));
let exp = module[a0_0x16d6f9(349)];
let logger = require(a0_0x16d6f9(344))[a0_0x16d6f9(335)](a0_0x16d6f9(333));
let token = require(a0_0x16d6f9(332));
function a0_0xc6dd(_0x3666e6, _0x52250e) {
  const _0x249fa5 = a0_0x5096();
  a0_0xc6dd = function (_0x5a95e1, _0xed39f6) {
    _0x5a95e1 = _0x5a95e1 - 323;
    let _0x57b4de = _0x249fa5[_0x5a95e1];
    return _0x57b4de;
  };
  return a0_0xc6dd(_0x3666e6, _0x52250e);
}
exp.game = function (_0x345313, _0xef5448, _0x655520, _0x531183) {
  const _0x2912a0 = a0_0x16d6f9;
  let _0x3da4dd = _0x345313[_0x2912a0(324)](_0x2912a0(329));
  if (!!_0x3da4dd) {
    let _0x5e0f67 = dispatch[_0x2912a0(327)](_0x3da4dd, _0x655520[_0x2912a0(347)](_0x2912a0(328)));
    !_0x5e0f67 ? (logger[_0x2912a0(345)](_0x2912a0(338)), _0x531183(code[_0x2912a0(330)])) : _0x531183(null, _0x5e0f67.id);
    return;
  }
  let _0x4bea38 = JSON[_0x2912a0(339)](token[_0x2912a0(350)](_0xef5448[_0x2912a0(352)][0].body)) || {};
  if (_0x4bea38.unionID) {
    let _0x3dcd9f = dispatch[_0x2912a0(327)](_0x4bea38[_0x2912a0(356)], _0x655520[_0x2912a0(347)]("game"));
    !_0x3dcd9f ? (logger[_0x2912a0(345)](_0x2912a0(338)), _0x531183(code.FAIL)) : _0x531183(null, _0x3dcd9f.id);
  } else {
    logger[_0x2912a0(345)](_0x2912a0(337));
    _0x531183(code[_0x2912a0(330)]);
  }
};
exp[a0_0x16d6f9(326)] = function (_0x276ca9, _0xfbc8fa, _0x1181a1, _0x385ba7) {
  const _0x317cb6 = a0_0x16d6f9;
  if (!_0x276ca9) {
    _0x385ba7(new Error(_0x317cb6(336)));
    return;
  }
  if (!_0x276ca9[_0x317cb6(346)]) {
    _0x385ba7(new Error("fail to find frontend id in session"));
    return;
  }
  _0x385ba7(null, _0x276ca9[_0x317cb6(346)]);
};
function a0_0x5096() {
  const _0x1bc6a5 = ["get", "3086040PFHGEU", "connector", "dispatch", "game", "roomID", "FAIL", "./dispatcher", "../util/token", "pomelo", "21580080jWUQIy", "getLogger", "fail to route to connector server for session is empty", "game server msg invaild", "can not dispatcher game server", "parse", "284piMzwe", "376674UEBCtz", "3341230FnOwUQ", "8922907PGjity", "pomelo-logger", "error", "frontendId", "getServersByType", "8079NEPsXZ", "exports", "getMsg", "55rfYcEA", "args", "9dAYKez", "11RyrOUD", "966gzoURb", "unionID", "../constant/code", "2172TuhCge"];
  a0_0x5096 = function () {
    return _0x1bc6a5;
  };
  return a0_0x5096();
}