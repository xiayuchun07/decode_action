
const a0_0x35dbab = a0_0x4ea2;
(function (_0x44101e, _0x2a469f) {
  const _0x323efc = a0_0x4ea2;
  const _0x28619f = _0x44101e();
  while (true) {
    try {
      const _0x4ffb98 = -parseInt(_0x323efc(253)) / 1 + parseInt(_0x323efc(246)) / 2 + -parseInt(_0x323efc(241)) / 3 + parseInt(_0x323efc(243)) / 4 + -parseInt(_0x323efc(247)) / 5 * (-parseInt(_0x323efc(244)) / 6) + -parseInt(_0x323efc(259)) / 7 * (-parseInt(_0x323efc(258)) / 8) + parseInt(_0x323efc(255)) / 9;
      if (_0x4ffb98 === _0x2a469f) {
        break;
      } else {
        _0x28619f.push(_0x28619f.shift());
      }
    } catch (_0x4842ea) {
      _0x28619f.push(_0x28619f.shift());
    }
  }
})(a0_0x154a, 420460);
function a0_0x4ea2(_0x488d81, _0x133836) {
  const _0x31ee19 = a0_0x154a();
  a0_0x4ea2 = function (_0x38c1e3, _0x13fd5e) {
    _0x38c1e3 = _0x38c1e3 - 241;
    let _0x1856e7 = _0x31ee19[_0x38c1e3];
    return _0x1856e7;
  };
  return a0_0x4ea2(_0x488d81, _0x133836);
}
let domain = require(a0_0x35dbab(249));
let commonDao = require("../../../dao/commonDao");
let userInfoServices = require(a0_0x35dbab(245));
let dispatch = require(a0_0x35dbab(251));
let rpcAPI = require(a0_0x35dbab(242));
let code = require(a0_0x35dbab(262));
let logger = require("pomelo-logger")[a0_0x35dbab(252)](a0_0x35dbab(261));
module.exports = function (_0x47b146) {
  return new remote(_0x47b146);
};
let remote = function (_0x2ae7ef) {
  const _0x5f4e6d = a0_0x35dbab;
  this[_0x5f4e6d(260)] = _0x2ae7ef;
};
let pro = remote[a0_0x35dbab(257)];
pro[a0_0x35dbab(254)] = async function (_0x58ec98, _0x551b8c) {
  const _0x5319f7 = a0_0x35dbab;
  let _0x35ade1 = await commonDao.findData(_0x5319f7(250), {
    kind: _0x58ec98
  }, null, 0, 0);
  _0x551b8c(null, _0x35ade1);
};
pro.modifyInventoryValue = async function (_0x482f2d, _0x3a55f6, _0xcfa134, _0x31f903) {
  const _0x55c7cd = a0_0x35dbab;
  let _0xf7e86c = await commonDao[_0x55c7cd(256)]("robotSetting", {
    kind: _0x3a55f6
  }, {
    $inc: {
      curInventoryValue: _0xcfa134
    }
  });
  _0x31f903(null, _0xf7e86c);
};
pro.updateGameControllerData = async function (_0x138a9f, _0xc0c9ad, _0x583fbb) {
  const _0x1c72be = a0_0x35dbab;
  let _0x1b6114 = await commonDao[_0x1c72be(248)](_0x1c72be(250), {
    kind: _0x138a9f
  }, _0xc0c9ad, {
    upsert: true,
    new: true
  });
  _0x583fbb(null, _0x1b6114);
};
function a0_0x154a() {
  const _0x59662d = ["../../../constant/code", "1837719VCeStH", "../../../API/rpcAPI", "1135212cbnGHu", "16314ifvImS", "../../../services/userInfoServices", "44934LzMuTt", "470vtNWZW", "findOneAndUpdateEx", "../domain/lifecycleDomain", "robotSetting", "../../../util/dispatcher", "getLogger", "380369aEUKKe", "getGameControllerData", "5712768FmsSab", "updateData", "prototype", "16TZjejT", "758779cbHMgu", "app", "robot"];
  a0_0x154a = function () {
    return _0x59662d;
  };
  return a0_0x154a();
}