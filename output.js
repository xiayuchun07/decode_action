
function a0_0x59a6() {
  const _0xec0106 = ["6582675yeKZid", "189LfpGic", "createClient", "8223754SyaGJf", "9vuUTrK", "connect to redis fial", "../../../config/redis.json", "connect", "6fBRaoc", "21714vPKQJu", "error", "auth", "getValue", "4857944UncYYx", "exports", "4242464NVaZuC", "port", "host", "password", "36595060FxRCfR", "825706WRTddS", "redis"];
  a0_0x59a6 = function () {
    return _0xec0106;
  };
  return a0_0x59a6();
}
const a0_0x51ee0b = a0_0x183a;
(function (_0xccd18b, _0x57ef08) {
  const _0x38f59c = a0_0x183a;
  const _0x3cd538 = _0xccd18b();
  while (true) {
    try {
      const _0x3ac267 = parseInt(_0x38f59c(270)) / 1 + parseInt(_0x38f59c(259)) / 2 * (parseInt(_0x38f59c(273)) / 3) + parseInt(_0x38f59c(265)) / 4 + parseInt(_0x38f59c(272)) / 5 + parseInt(_0x38f59c(258)) / 6 * (parseInt(_0x38f59c(275)) / 7) + parseInt(_0x38f59c(263)) / 8 * (-parseInt(_0x38f59c(276)) / 9) + -parseInt(_0x38f59c(269)) / 10;
      if (_0x3ac267 === _0x57ef08) {
        break;
      } else {
        _0x3cd538.push(_0x3cd538.shift());
      }
    } catch (_0x454c2a) {
      _0x3cd538.push(_0x3cd538.shift());
    }
  }
})(a0_0x59a6, 794921);
function a0_0x183a(_0x4676dc, _0x2e9182) {
  const _0x29691a = a0_0x59a6();
  a0_0x183a = function (_0x5f5877, _0x50101b) {
    _0x5f5877 = _0x5f5877 - 255;
    let _0x58fd68 = _0x29691a[_0x5f5877];
    return _0x58fd68;
  };
  return a0_0x183a(_0x4676dc, _0x2e9182);
}
const redis = require(a0_0x51ee0b(271));
let redisConfig = require(a0_0x51ee0b(256));
const client = redis[a0_0x51ee0b(274)](redisConfig.redis[a0_0x51ee0b(266)], redisConfig.redis[a0_0x51ee0b(267)]);
client[a0_0x51ee0b(261)](redisConfig[a0_0x51ee0b(271)][a0_0x51ee0b(268)]);
client.on(a0_0x51ee0b(257), _0x4febd9 => {
  const _0x1d489a = a0_0x51ee0b;
  !_0x4febd9 ? console.log("connect to redis success") : console[_0x1d489a(260)](_0x1d489a(255));
});
class redisClient {
  static async setValue(_0x2b2f67, _0x146721, _0x4885cc = 60) {
    return await client.set(_0x2b2f67, _0x146721, "EX", _0x4885cc);
  }
  static async [a0_0x51ee0b(262)](_0x568b14) {
    return new Promise((_0x1e8bad, _0xd63918) => {
      client.get(_0x568b14, (_0x18eca9, _0x50635e) => {
        !!_0x18eca9 ? _0xd63918(null) : _0x1e8bad(_0x50635e);
      });
    });
  }
}
module[a0_0x51ee0b(264)] = redisClient;