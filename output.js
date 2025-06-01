
const a0_0x41a904 = a0_0x52f0;
(function (_0x1f15d7, _0x7e4376) {
  const _0xe017d2 = a0_0x52f0;
  const _0x248c9b = _0x1f15d7();
  while (true) {
    try {
      const _0x313e0d = parseInt(_0xe017d2(159)) / 1 + -parseInt(_0xe017d2(173)) / 2 + -parseInt(_0xe017d2(139)) / 3 + parseInt(_0xe017d2(169)) / 4 + parseInt(_0xe017d2(160)) / 5 * (parseInt(_0xe017d2(142)) / 6) + parseInt(_0xe017d2(140)) / 7 * (-parseInt(_0xe017d2(151)) / 8) + -parseInt(_0xe017d2(158)) / 9 * (-parseInt(_0xe017d2(165)) / 10);
      if (_0x313e0d === _0x7e4376) {
        break;
      } else {
        _0x248c9b.push(_0x248c9b.shift());
      }
    } catch (_0x1a1ff9) {
      _0x248c9b.push(_0x248c9b.shift());
    }
  }
})(a0_0x1693, 724714);
let request = require("request");
let code = require("../constant/code");
let xml2js = require(a0_0x41a904(168));
let service = module[a0_0x41a904(172)];
function a0_0x52f0(_0x279cb1, _0xfee064) {
  const _0x587322 = a0_0x1693();
  a0_0x52f0 = function (_0x2658a5, _0x44a91) {
    _0x2658a5 = _0x2658a5 - 139;
    let _0x9ae290 = _0x587322[_0x2658a5];
    return _0x9ae290;
  };
  return a0_0x52f0(_0x279cb1, _0xfee064);
}
service[a0_0x41a904(141)] = function (_0x5299ad) {
  const _0x537971 = a0_0x41a904;
  console[_0x537971(161)](_0x537971(150) + _0x5299ad);
  return new Promise((_0xec5405, _0x202a23) => {
    request(_0x5299ad, function (_0x2cc15e, _0x2d4b6f, _0x2dfad2) {
      const _0x1ffdf0 = a0_0x52f0;
      !!_0x2cc15e || _0x2d4b6f.statusCode !== 200 ? (console[_0x1ffdf0(155)](_0x1ffdf0(162) + _0x5299ad), _0x202a23(code[_0x1ffdf0(154)])) : (console[_0x1ffdf0(161)](_0x1ffdf0(157), _0x2dfad2), _0xec5405(_0x2dfad2));
    });
  });
};
service[a0_0x41a904(148)] = function (_0xe95c7f, _0x198cc9, _0x2209f3) {
  const _0x584efe = a0_0x41a904;
  console[_0x584efe(161)](_0x584efe(146), _0xe95c7f);
  console[_0x584efe(161)](_0x584efe(153), _0x198cc9);
  return new Promise((_0x3bd0ea, _0x265fa0) => {
    const _0x371e24 = _0x584efe;
    request({
      url: _0xe95c7f,
      method: "POST",
      json: true,
      headers: {
        "CONTENT-TYPE": _0x371e24(175)
      },
      body: JSON[_0x371e24(164)](_0x198cc9)
    }, function (_0xdcbbbc, _0x5f1d4f, _0x5e3377) {
      const _0x1a82df = _0x371e24;
      !!_0xdcbbbc || _0x5f1d4f.statusCode !== 200 ? (console[_0x1a82df(155)](_0x1a82df(144) + _0xe95c7f), _0x265fa0(code[_0x1a82df(154)])) : (console[_0x1a82df(161)](_0x1a82df(145), _0x5e3377), _0x3bd0ea(_0x5e3377));
    });
  });
};
service[a0_0x41a904(152)] = function (_0x984219, _0x5b2cef) {
  return new Promise((_0x24af02, _0x26628b) => {
    const _0x1f86f7 = a0_0x52f0;
    let _0x465449 = new xml2js[_0x1f86f7(174)]();
    let _0x2aef35 = _0x465449[_0x1f86f7(156)](JSON[_0x1f86f7(164)](_0x5b2cef));
    console[_0x1f86f7(161)](_0x1f86f7(167), _0x984219);
    console[_0x1f86f7(161)](_0x1f86f7(166), _0x5b2cef);
    request({
      url: _0x984219,
      method: _0x1f86f7(143),
      headers: {
        "Content-Type": _0x1f86f7(149),
        "Content-Length": _0x2aef35[_0x1f86f7(170)]
      },
      body: _0x2aef35
    }, function (_0x26c1ec, _0x5ba089, _0x5105ed) {
      const _0xc8edfa = _0x1f86f7;
      let _0x17bfb6 = new xml2js[_0xc8edfa(171)]();
      let _0x25f722 = _0x17bfb6.parseString(_0x5105ed);
      console[_0xc8edfa(161)](_0x25f722);
      !!_0x26c1ec || _0x5ba089[_0xc8edfa(163)] !== 200 ? (console[_0xc8edfa(155)](_0xc8edfa(144) + _0x984219, _0x5105ed), _0x26628b(code[_0xc8edfa(154)])) : (console[_0xc8edfa(161)](_0xc8edfa(147), _0x5105ed), _0x24af02(_0x5105ed));
    });
  });
};
function a0_0x1693() {
  const _0x41658f = ["Parser", "exports", "835454LCZCLM", "Builder", "application/x-www-form-urlencoded", "2021463FQpCSK", "336rigtIy", "httpGet", "69708zWiFWA", "POST", "send http post request err:", "收到POST数据", "发送POST请求", "收到POSTxml数据", "httpPost", "text/xml; charset=utf-8", "发送GET请求", "181488LnKfuw", "httpPostXml", "POST参数", "FAIL", "error", "buildObject", "收到GET数据", "15246KPvgbA", "161285nkQmwh", "305VqAwXe", "log", "send http get request err:", "statusCode", "stringify", "8590pAgwOT", "POSTxml参数", "发送POSTxml请求", "xml2js", "2320244vTfKVA", "length"];
  a0_0x1693 = function () {
    return _0x41658f;
  };
  return a0_0x1693();
}