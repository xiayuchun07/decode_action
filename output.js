
const a0_0xff8b95 = a0_0x586a;
(function (_0x2522da, _0x3bfc43) {
  const _0x42c0c8 = a0_0x586a;
  const _0x3c5ffe = _0x2522da();
  while (true) {
    try {
      const _0x2749fb = parseInt(_0x42c0c8(358)) / 1 * (parseInt(_0x42c0c8(334)) / 2) + parseInt(_0x42c0c8(369)) / 3 + parseInt(_0x42c0c8(343)) / 4 + parseInt(_0x42c0c8(356)) / 5 * (parseInt(_0x42c0c8(370)) / 6) + -parseInt(_0x42c0c8(335)) / 7 + parseInt(_0x42c0c8(333)) / 8 * (-parseInt(_0x42c0c8(374)) / 9) + -parseInt(_0x42c0c8(355)) / 10;
      if (_0x2749fb === _0x3bfc43) {
        break;
      } else {
        _0x3c5ffe.push(_0x3c5ffe.shift());
      }
    } catch (_0x1ff81c) {
      _0x3c5ffe.push(_0x3c5ffe.shift());
    }
  }
})(a0_0x5675, 766356);
function a0_0x586a(_0x41050, _0x13d20f) {
  const _0x66dc5 = a0_0x5675();
  a0_0x586a = function (_0x56d822, _0x233670) {
    _0x56d822 = _0x56d822 - 328;
    let _0x57ff56 = _0x66dc5[_0x56d822];
    return _0x57ff56;
  };
  return a0_0x586a(_0x41050, _0x13d20f);
}
let utils = require(a0_0xff8b95(351));
let pomelo = require("pomelo");
let code = require(a0_0xff8b95(329));
let commonDao = require(a0_0xff8b95(328));
let aliyunSmsServices = require(a0_0xff8b95(347));
let logger = require("pomelo-logger")[a0_0xff8b95(342)](a0_0xff8b95(348));
let axios = require(a0_0xff8b95(337));
let CODE_TIME_OUT_TIME = 120000;
let services = module.exports;
function a0_0x5675() {
  const _0x5a8ef3 = ["getRandomNum", "message", "smsAuthConfig", "SignName", "querystring", "SMS_CODE_ERROR", "AccessKeySecret", "findOneData", "authSmsCode", "2657778hQMsHX", "60tVwhjt", "[] 您的验证码是", "&p=", "toString", "4812120fPdNMW", ",请尽快验证", "authImgCode", "../dao/commonDao", "../constant/code", "sendRegistSms", "&m=", "TemplateCode", "8FGVpcu", "16zmEomv", "8544088AcfAgw", "updateDataEx", "axios", "https://api.smsbao.com/sms?u=", "catch", "error message = ", "now", "getLogger", "3275580jOoCaE", "&c=", "{\"code\":\"", "get", "./aliyunSmsServices", "logic", "fail code = ", "error", "../util/utils", "app", "getData", "AccessKeyId", "6494710smLGKd", "446755mkYnHZ", "smsCodeRecordModel", "71595NUTdJr", "code"];
  a0_0x5675 = function () {
    return _0x5a8ef3;
  };
  return a0_0x5675();
}
var querystring = require(a0_0xff8b95(364));
services.sendSmsAuthCode = async function (_0x19a2cb) {
  const _0x5df179 = a0_0xff8b95;
  let _0x4717e2 = utils[_0x5df179(360)](100000, 999999).toString();
  let _0x241668 = "";
  let _0x339971 = "";
  let _0x741a41 = _0x5df179(371) + _0x4717e2 + _0x5df179(375);
  let _0x171e0b = _0x5df179(338) + _0x241668 + _0x5df179(372) + _0x339971 + _0x5df179(331) + _0x19a2cb + _0x5df179(344) + _0x741a41;
  axios[_0x5df179(346)](_0x171e0b).then(_0x30f0eb => {
    const _0x252847 = _0x5df179;
    _0x30f0eb.data == 0 ? commonDao[_0x252847(336)](_0x252847(357), {
      phone: _0x19a2cb
    }, {
      code: _0x4717e2,
      createTime: Date.now()
    }, {
      upsert: true
    }).catch(_0x4512f5 => {}) : logger.error(_0x252847(349) + _0x30f0eb.data);
  }).catch(_0x122c09 => {
    const _0x408f3d = _0x5df179;
    logger.info(_0x408f3d(340) + JSON.stringify(_0x122c09[_0x408f3d(361)]));
  });
};
services.sendSmsAuthCode2 = async function (_0x11b2c2) {
  const _0x26c9b0 = a0_0xff8b95;
  let _0x208d3d = pomelo[_0x26c9b0(352)][_0x26c9b0(346)]("config")[_0x26c9b0(362)];
  if (!!_0x208d3d) {
    _0x208d3d = JSON.parse(_0x208d3d);
  }
  if (!_0x208d3d) {
    throw new Error(code[_0x26c9b0(365)]);
  }
  !aliyunSmsServices.isInit && aliyunSmsServices.initAccessKey(_0x208d3d[_0x26c9b0(354)], _0x208d3d[_0x26c9b0(366)]);
  let _0x2fbb7b = utils[_0x26c9b0(360)](1000, 9999)[_0x26c9b0(373)]();
  let _0x1638e1 = {
    PhoneNumbers: _0x11b2c2,
    SignName: _0x208d3d[_0x26c9b0(363)],
    TemplateCode: _0x208d3d[_0x26c9b0(332)],
    TemplateParam: _0x26c9b0(345) + _0x2fbb7b + "\"}"
  };
  await aliyunSmsServices[_0x26c9b0(330)](_0x1638e1);
  commonDao[_0x26c9b0(336)](_0x26c9b0(357), {
    phone: _0x11b2c2
  }, {
    code: _0x2fbb7b,
    createTime: Date[_0x26c9b0(341)]()
  }, {
    upsert: true
  })[_0x26c9b0(339)](_0x4ebb53 => {});
};
services[a0_0xff8b95(368)] = async function (_0x51f3a5, _0xf3432e) {
  const _0x2c3c45 = a0_0xff8b95;
  try {
    let _0x5f1e3d = await commonDao[_0x2c3c45(367)](_0x2c3c45(357), {
      phone: _0x51f3a5
    });
    return !!_0x5f1e3d && _0x5f1e3d[_0x2c3c45(359)] === _0xf3432e && Date[_0x2c3c45(341)]() - _0x5f1e3d.createTime <= CODE_TIME_OUT_TIME;
  } catch (_0x2d0693) {
    console[_0x2c3c45(350)](_0x2d0693);
    return false;
  }
};
services[a0_0xff8b95(376)] = async function (_0x260782, _0x451a4a) {
  const _0x143cf3 = a0_0xff8b95;
  return (await cacheDataDao[_0x143cf3(353)]("IMG_AUTH_CODE_" + _0x260782)) === _0x451a4a;
};