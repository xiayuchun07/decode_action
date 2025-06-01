
function a0_0x1253() {
  const _0xec4380 = ["http load parameter finished", "466744vuoRfU", "65WUrNGN", "afterStartAll", "7EgAPuF", "format", "findOneAndUpdateEx", "996186EGmikf", "afterStartup", "loadParameter", "findOneData", "75412wuCejP", "teamDataModel", "loadConfig", "debug", "6933420WYbfGk", "uniqueIDModel", "pomelo-logger", "length", "moment", "../../../services/configServices", "30601930MxUuFq", "unionModel", "2312583lBvkUM", "217688ObZIGd", "updateDataEx", "unionID", "exports", "28uAjwXn"];
  a0_0x1253 = function () {
    return _0xec4380;
  };
  return a0_0x1253();
}
const a0_0x228ef4 = a0_0x13b5;
function a0_0x13b5(_0xef0e21, _0x2a2e23) {
  const _0x1ddf39 = a0_0x1253();
  a0_0x13b5 = function (_0x5a12f1, _0x35db5e) {
    _0x5a12f1 = _0x5a12f1 - 165;
    let _0x19445b = _0x1ddf39[_0x5a12f1];
    return _0x19445b;
  };
  return a0_0x13b5(_0xef0e21, _0x2a2e23);
}
(function (_0x47dfbe, _0x46c872) {
  const _0x58f480 = a0_0x13b5;
  const _0x376fa5 = _0x47dfbe();
  while (true) {
    try {
      const _0x4b8315 = parseInt(_0x58f480(188)) / 1 * (parseInt(_0x58f480(176)) / 2) + -parseInt(_0x58f480(171)) / 3 + -parseInt(_0x58f480(178)) / 4 * (parseInt(_0x58f480(179)) / 5) + parseInt(_0x58f480(184)) / 6 * (-parseInt(_0x58f480(181)) / 7) + -parseInt(_0x58f480(172)) / 8 + -parseInt(_0x58f480(192)) / 9 + parseInt(_0x58f480(169)) / 10;
      if (_0x4b8315 === _0x46c872) {
        break;
      } else {
        _0x376fa5.push(_0x376fa5.shift());
      }
    } catch (_0xbc6f18) {
      _0x376fa5.push(_0x376fa5.shift());
    }
  }
})(a0_0x1253, 864560);
let domain = module[a0_0x228ef4(175)];
let logger = require(a0_0x228ef4(165)).getLogger("pomelo");
let parameterServices = require(a0_0x228ef4(168));
let commonDao = require("../../../dao/commonDao");
let moment = require(a0_0x228ef4(167));
domain[a0_0x228ef4(185)] = async function (_0x29d2b0) {
  const _0x1f378b = a0_0x228ef4;
  await domain[_0x1f378b(186)]();
  _0x29d2b0();
};
domain[a0_0x228ef4(180)] = async function () {
  const _0xa62963 = a0_0x228ef4;
  let _0xa8489 = await commonDao.findData(_0xa62963(170), {
    isDel: false
  });
  for (let _0x4543ae = 0; _0x4543ae < _0xa8489[_0xa62963(166)]; _0x4543ae++) {
    let _0x47c832 = moment()[_0xa62963(182)]("YYYY-MM-DD");
    let _0x214b01 = moment()[_0xa62963(182)]("x");
    let _0x4913bb = _0xa8489[_0x4543ae][_0xa62963(174)];
    let _0x4bcd8f = await commonDao[_0xa62963(187)](_0xa62963(189), {
      unionID: _0x4913bb,
      dateTime: _0x47c832
    });
    !_0x4bcd8f && (await commonDao[_0xa62963(183)](_0xa62963(189), {
      unionID: _0x4913bb,
      dateTime: _0x47c832
    }, {
      unionID: _0x4913bb,
      dateTime: _0x47c832,
      createTime: _0x214b01,
      userCount: 0,
      drawCount: 0,
      drawTotalCount: 0,
      diamondCount: 0
    }, {
      new: true,
      upsert: true
    }));
  }
  await commonDao[_0xa62963(173)](_0xa62963(193), {
    key: 1
  }, {
    $setOnInsert: {
      unionInviteID: 21130144
    }
  }, {
    upsert: true
  });
};
domain[a0_0x228ef4(186)] = async function () {
  const _0x978adc = a0_0x228ef4;
  await parameterServices[_0x978adc(190)]();
  logger[_0x978adc(191)](_0x978adc(177));
};