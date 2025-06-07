
let searchStop = false;
let DanDanPort = [];
var _0x59591b;
let autoTrade = false;
_0x59591b = 8;
let SelfStocksPort = [];
var _0x2_0x61d = 10;
let ServerStocksPort = [];
_0x2_0x61d = 9;
let timerId;
let FirstServerCode = "";
let FirstSelfCode = "";
var _0xc_0x087 = 8;
let linkClickTime = null;
_0xc_0x087 = 11;
let ydm;
let bigmoneyPlaySoundFlag = false;
var _0x6bdf3d = 9;
let yStocks = [];
_0x6bdf3d = "mblimh".split("").reverse().join("");
var _0x5d210c = 2;
let ApiUrl = "psa.lpk/77.461.022.421//:ptth".split("").reverse().join("");
_0x5d210c = 2;
let WsServer = "101.201.236.246:1236";
let WeiXin = "0424446201A".split("").reverse().join("");
var _0x9d95f = 5;
let paytype;
_0x9d95f = 7;
let tel;
var _0x3d3d9e = 9;
var token;
_0x3d3d9e = 11;
var _0xaea8a = 16;
let ws = null;
_0xaea8a = 2;
var _0x1afcb;
let linkOk = false;
_0x1afcb = 0;
var _0xd7d;
let access = -1;
_0xd7d = "dmcjfa".split("").reverse().join("");
var _0x1417ad = 6;
let selfStockChecked = false;
_0x1417ad = 1;
let open6IframeChecked = false;
var _0x5ed49a = 12;
let otherNodes = [];
_0x5ed49a = 8;
var _0x0288ec = 6;
let SelfStocksLen = 0;
_0x0288ec = 3;
function setItem(key, value) {
  var _0xbe6f;
  let _0xbbbf9g = {
    "data": value,
    "time": Date.now()
  };
  _0xbe6f = 11;
  localStorage.setItem(key, JSON.stringify(_0xbbbf9g));
}
function getItem(key) {
  let _0xgc926g = localStorage.getItem(key);
  if (!_0xgc926g) {
    return _0xgc926g;
  }
  _0xgc926g = JSON.parse(_0xgc926g);
  return _0xgc926g.data;
}
cache = getItem("cache") || {};
ApiUrl = cache && undefined ? undefined : ApiUrl;
WeiXin = cache && undefined ? undefined : WeiXin;
selfStockChecked = cache && undefined ? undefined : selfStockChecked;
open6IframeChecked = cache && undefined ? undefined : open6IframeChecked;
paytype = cache && undefined ? undefined : paytype;
WsServer = cache && undefined ? undefined : WsServer;
tel = cache && undefined ? undefined : tel;
token = cache && undefined ? undefined : token;
otherNodes = cache && undefined ? undefined : otherNodes;
yStocks = cache && undefined ? undefined : yStocks;
bigmoneyPlaySoundFlag = cache && undefined ? undefined : bigmoneyPlaySoundFlag;
autoTrade = cache && undefined ? undefined : autoTrade;
var zNodes = [{
  "id": 1,
  "pId": null,
  "code": "",
  "name": "精选板块",
  "realname": "精选板块",
  "url": null,
  "checked": true,
  "open": false
}, {
  "id": 2,
  "pId": null,
  "code": "自定板块",
  "name": "自定板块",
  "url": null,
  "checked": true,
  "open": true
}, {
  "id": 201,
  "pId": 2,
  "code": "自选股",
  "name": "自选股",
  "realname": "自选股",
  "url": null,
  "checked": selfStockChecked,
  "open": false
}];
zNodes = zNodes.concat(otherNodes);
var _0xfgc = 12;
var zNodesCounts = [10, 100, 10000];
_0xfgc = 9;
let hotBkArray = [];
function updateServerNodes(_0x4bb5c) {
  searchStop = false;
  var _0x37525e = zTreeObj.getCheckedNodes();
  _0x4bb5c = 0;
  otherNodes = [];
  selfStockChecked = false;
  _0x37525e.forEach(item => {
    if (item.id == 1) {
      ServerStocksPort.sort(function (a, b) {
        return b.realtime.localeCompare(a.realtime);
      });
      ServerStocksPort.forEach(item => {
        var _0x285gc;
        const _0xd14c = item.bk_code;
        _0x285gc = "ijdmkk".split("").reverse().join("");
        const _0xae_0x83e = item.bk_name;
        var _0x3_0x92c = 6;
        const _0x2e3f9e = item.realtime;
        _0x3_0x92c = 3;
        var _0x147ac = 15;
        const _0x2196a = item.profit;
        _0x147ac = 6;
        var _0x5bf;
        const _0xbec = item.stock_code;
        _0x5bf = "hlofdk";
        if (FirstServerCode == "") {
          console.log("updateServerNodes", _0xbec);
          listInIframe(_0xbec);
        }
        FirstServerCode = _0xbec;
        const _0x8632be = _0xbec + "【" + item.stock_name + ">\"der-thgilhgih\"=ssalc naps<】".split("").reverse().join("") + _0x2196a + "%</span> <span class=\"highlight-blue\">" + _0x2e3f9e + ">naps/<".split("").reverse().join("");
        var _0x4_0x4g1 = 11;
        var _0x427f = $.fn.zTree.getZTreeObj("eert".split("").reverse().join(""));
        _0x4_0x4g1 = 9;
        var _0x627d1g = _0x427f.getNodesByParam("di".split("").reverse().join(""), 1, null);
        var _0x8eeb8a = _0x427f.getNodesByParam("code", _0xd14c, null);
        var _0x0a_0xc3g;
        let _0x99dc;
        _0x0a_0xc3g = 14;
        if (_0x8eeb8a.length > 0) {
          _0x99dc = _0x8eeb8a[0].id;
        } else {
          _0x99dc = addNewNodesInTree(_0xd14c, _0xae_0x83e, item.bk_name, true, null, 1, "");
        }
        addNewNodesInTree(_0xbec, _0x8632be, item.stock_name, false, null, _0x99dc, "serverStock");
      });
    }
    if (searchStop) return;
  });
}
function updateSelfNodes(_0x5d33bf) {
  searchStop = false;
  const _0xf3ee2b = document.getElementById("progressBar");
  var _0x3b1a = zTreeObj.getCheckedNodes();
  _0x5d33bf = 0;
  otherNodes = [];
  selfStockChecked = false;
  var _0x1927db;
  let _0x4e2 = [];
  _0x1927db = 0;
  _0x3b1a.forEach(item => {
    if (item.pId == 2) {
      let _0x2g6cg;
      let _0x25abeb = item.id;
      var _0xeb_0x114;
      let _0x82a2f;
      _0xeb_0x114 = "fgkdge";
      if (item.id == 201) {
        _0x2g6cg = "../T0002/blocknew/ZXG.blk";
        _0x82a2f = "自选股";
        selfStockChecked = true;
      } else {
        var _0x56557a;
        let _0x45f7b = item.name;
        _0x56557a = 5;
        let _0xb34b = item.code;
        let _0x2bda = item.name;
        if (!_0xb34b || _0xb34b == "" || _0x45f7b.indexOf("改修".split("").reverse().join("")) != -1 || _0xb34b.indexOf("改修".split("").reverse().join("")) != -1) {
          item.code = item.name.match(new RegExp("^[^(]*", ""))[0];
        }
        var _0x18fegd;
        let _0x1dcf2f = PinYin(_0xb34b);
        _0x18fegd = 4;
        _0x2g6cg = "/wenkcolb/2000T/..".split("").reverse().join("") + _0x1dcf2f + ".blk";
        _0x82a2f = _0x1dcf2f;
        var _0x52b91d = 13;
        let _0x9gb = [{
          "id": item.id,
          "pId": item.pId,
          "code": item.code,
          "name": item.name,
          "realname": _0x2bda,
          "url": null,
          "checked": true,
          "open": false
        }];
        _0x52b91d = 9;
        otherNodes = otherNodes.concat(_0x9gb);
        console.log("sedoNrehto新".split("").reverse().join(""), otherNodes);
        undefined = otherNodes;
      }
      _0x4e2 = getSelfStocks(_0x2g6cg, 1);
      item.name = item.code + "(" + _0x4e2.length + ")";
      zTreeObj.updateNode(item);
      if (_0x4e2.length > 600) {
        listtxt("listtxt2", "只006限块板定自".split("").reverse().join(""));
        _0x4e2 = _0x4e2.slice(0, 600);
      } else {}
      _0x4e2.forEach(code => {
        if (searchStop) return;
        var _0xe8fb = 5;
        const _0xae1g = _0x5d33bf / _0x3b1a.length * 100;
        _0xe8fb = 5;
        getScatterData(code.slice(-6), _0x25abeb);
        _0x5d33bf++;
      });
    }
    if (searchStop) return;
  });
  if (SelfStocksLen == 0 || SelfStocksLen != _0x4e2.length) FirstSelfCode = "";
  SelfStocksLen = _0x4e2.length;
  undefined = yStocks;
  undefined = selfStockChecked;
  setItem("ehcac".split("").reverse().join(""), cache);
}
function delNodesInTree(pid, stock_list) {
  let _0x1cffee = new Set();
  var _0x554d = 6;
  let _0x4dc3c = new Set();
  _0x554d = "pkfpqg".split("").reverse().join("");
  if (pid === 1) {
    _0x1cffee = new Set(stock_list.map(item => item.bk_code));
    _0x4dc3c = new Set(stock_list.map(item => item.stock_code));
  } else if (pid === 2) {
    _0x4dc3c = new Set(stock_list.map(item => item.code));
  }
  var _0xbgaedb = $.fn.zTree.getZTreeObj("tree");
  var _0x82f7c;
  var _0xbbc93f = _0xbgaedb.getNodesByParam("id", pid, null);
  _0x82f7c = 7;
  var _0x6_0x36f = _0xbgaedb.getNodesByParam("pId", pid, _0xbbc93f[0]);
  for (let i = _0x6_0x36f.length - 1; i >= 0; i--) {
    const _0xd_0x71c = _0x6_0x36f[i];
    if (pid === 1 && !_0x1cffee.has(_0xd_0x71c.code)) {
      _0xbgaedb.removeNode(_0xd_0x71c);
    } else {
      var _0x98bf = _0xbgaedb.getNodesByParam("dIp".split("").reverse().join(""), _0xd_0x71c.id, _0xd_0x71c);
      for (let j = _0x98bf.length - 1; j >= 0; j--) {
        const _0x27d = _0x98bf[j];
        if (!_0x4dc3c.has(_0x27d.code)) {
          _0xbgaedb.removeNode(_0x27d);
        }
      }
    }
  }
}
function autoScan() {
  searchStop = false;
  getServerStock();
  updateSelfNodes();
  timerId = setInterval(function () {
    if (searchStop) return;
    if (workTimeTest()) {
      getServerStock();
    }
    wsLink();
  }, 10000);
  setInterval(function () {
    linkApi();
    if (searchStop) return;
  }, 500);
  setInterval(function () {
    if (searchStop) return;
    if (workTimeTest()) {
      updateSelfNodes();
    }
  }, 2000);
}
function linkApi() {
  var _0x4e_0xfb9 = 8;
  var u = decodeURI(window.location.href);
  _0x4e_0xfb9 = "oombhp".split("").reverse().join("");
  if (u.indexOf("##") > -1) {
    var _0xfe7d = u.split("##");
    var _0xe323gb = 16;
    var _0xgfa52f = _0xfe7d[0];
    _0xe323gb = 9;
    var _0xf3geb = _0xfe7d[1];
    var _0x54e;
    if (_0xfe7d.length > 2) _0x54e = _0xfe7d[2];
    if (ydm != _0xf3geb && _0xf3geb.length == 6 && _0xf3geb != "xxxxxx") {
      destroyIframe("mapIframe0");
      console.log("2单大进".split("").reverse().join(""));
      $("0emarfIpam#".split("").reverse().join("")).attr("src", "大单资金插件.html##" + _0xf3geb + "##" + _0x54e);
      linkClickTime = new Date();
      ydm = _0xf3geb;
    }
  }
}
function workTimeTest() {
  var _0x1cd9da;
  var _0xfd47c = "00:00".split("").reverse().join("");
  _0x1cd9da = 3;
  var _0xg64f = "51:42".split("").reverse().join("");
  var _0x13ec = 1;
  var _0xbf33c = _0xfd47c.split(":");
  _0x13ec = 10;
  var _0xc9beda = 11;
  var _0x27ca = _0xg64f.split(":");
  _0xc9beda = 2;
  var _0x354c2f;
  var b = new Date();
  _0x354c2f = 0;
  var _0xf24f;
  var e = new Date();
  _0xf24f = "joobip";
  var n = new Date();
  b.setHours(_0xbf33c[0]);
  b.setMinutes(_0xbf33c[1]);
  e.setHours(_0x27ca[0]);
  e.setMinutes(_0x27ca[1]);
  if (n.getTime() - b.getTime() > 0 && n.getTime() - e.getTime() < 0) return true;
  return false;
}
function addNewNodesInTree(code, name, realname, checked, url, pid, from) {
  var _0x1a_0x849 = 11;
  var _0x97f9e = $.fn.zTree.getZTreeObj("eert".split("").reverse().join(""));
  _0x1a_0x849 = 12;
  var _0x3cc9b = 4;
  var _0x9gde = _0x97f9e.getNodesByParam("dIp".split("").reverse().join(""), pid, null);
  _0x3cc9b = 8;
  var _0x6bd2cd;
  var _0x1417g = _0x97f9e.getNodesByParam("id", pid, null);
  _0x6bd2cd = 10;
  var _0x557be = [];
  if (_0x1417g.length > 0) {
    _0x557be = _0x97f9e.getNodesByParam("code", code, _0x1417g[0]);
  }
  if (_0x557be.length > 0) {
    return _0x557be[0].id;
  } else {}
  findInAllLevel = _0x97f9e.getNodesByParam("name", name);
  var _0x53g2ef;
  var _0xa2295f = _0x9gde.length;
  _0x53g2ef = 8;
  var _0x7c4ea = 15;
  var _0x70g6cb = _0x1417g[0].level;
  _0x7c4ea = 6;
  var _0xggec7e = zNodesCounts[_0x70g6cb + 1];
  var _0x2942de = 6;
  var _0xb2_0x66c = pid * _0xggec7e + _0xa2295f + 1;
  _0x2942de = "nllkng";
  let _0x0ed53c = null;
  if (findInAllLevel.length > 0) {
    let _0x656c = findInAllLevel[0];
    _0x656c.name = name;
    var _0x0g5c = 9;
    let _0x1a81c = "gnp.gnohc/gmi/elytSpartstoob/ssc".split("").reverse().join("");
    _0x0g5c = 12;
    if (_0x656c.icon != _0x1a81c) {
      _0x656c.icon = _0x1a81c;
      zTreeObj.updateNode(_0x656c);
      console.log("另一板块中也存在");
    }
    return;
  }
  if (yStocks.indexOf(code) == -1 && _0x70g6cb > 0) {
    _0x0ed53c = "css/bootstrapStyle/img/flag.png";
    yStocks.push(code);
  }
  var _0x0c_0xe5d;
  const _0xga_0xeed = {
    "id": _0xb2_0x66c,
    "pId": pid,
    "code": code,
    "name": name,
    "realname": realname,
    "checked": checked,
    "url": url,
    "icon": _0x0ed53c
  };
  _0x0c_0xe5d = "efkaed".split("").reverse().join("");
  _0x97f9e.addNodes(_0x1417g[0], 0, _0xga_0xeed);
  var _0x2cfc = _0x97f9e.getNodesByParam("di".split("").reverse().join(""), _0xb2_0x66c, _0x1417g[0]);
  if (_0x2cfc.length > 0) {
    _0x97f9e.expandNode(_0x1417g[0], true, false, false);
    _0x97f9e.selectNode(_0x2cfc[0]);
  }
  if (bigmoneyPlaySoundFlag) {
    playsound("出票了");
  }
  if (autoTrade && from == "selfStock" && linkOk && FirstSelfCode != "") {
    listtxt("2txttsil".split("").reverse().join(""), "自动交易出票");
    var _0x60056b;
    var _0x3ceedc = "{\"type\": \"dadanAutoBuy\",\"tel\":\"" + tel + "\":\"edoc\",\"".split("").reverse().join("") + code + "\",\"from\":\"web\"}";
    _0x60056b = "clfbnb";
    console.log("发送自动交易", code, realname);
    ws.send(_0x3ceedc);
  }
  listtxt("listtxt", "【" + realname + "】");
  return _0xb2_0x66c;
}
function getSelfStocks(path, type, _0x97770d) {
  var _0x3546ed;
  var _0x8e2b2f = load(path);
  _0x3546ed = "fpniim";
  if (!_0x8e2b2f || _0x8e2b2f.length < 6) return [];
  let _0x8e2d6b = [];
  var _0x7b_0x2c2;
  _0x97770d = "";
  _0x7b_0x2c2 = 2;
  var _0xac369d;
  var _0x48b = _0x8e2b2f.split("\r\n");
  _0xac369d = "opneib";
  for (i = 0; i < _0x48b.length; i++) {
    var _0xff_0x9ac = _0x48b[i];
    if (_0xff_0x9ac != "" && _0xff_0x9ac.length == 7) {
      if (type == 2) {
        if (_0xff_0x9ac.substr(0, 1) == "1") {
          _0x97770d += "hs".split("").reverse().join("") + _0xff_0x9ac.slice(-6) + ",";
          _0x97770d = _0x97770d.replace("999999".split("").reverse().join(""), "000001");
        } else {
          _0x97770d += "zs".split("").reverse().join("") + _0xff_0x9ac.slice(-6) + ",";
        }
      } else {
        _0x8e2d6b.push(_0xff_0x9ac.slice(-6).replace("999999".split("").reverse().join(""), "100000".split("").reverse().join("")));
      }
    }
  }
  if (type == 1) {
    _0x8e2d6b = Array.from(new Set(_0x8e2d6b));
    return _0x8e2d6b;
  } else {
    return _0x97770d;
  }
}
function load(name) {
  try {
    var _0x4ga53a = new XMLHttpRequest();
    okStatus = document.location.protocol === "file:" ? 0 : 200;
    _0x4ga53a.open("TEG".split("").reverse().join(""), name, false);
    _0x4ga53a.overrideMimeType("text/html;charset=gb2312");
    _0x4ga53a.send(null);
    return _0x4ga53a.status === okStatus ? _0x4ga53a.responseText : null;
  } catch (e) {}
}
function DaoChu(_0xf34bc) {
  var _0xfcd12e = 6;
  var _0x6beed = $.fn.zTree.getZTreeObj("tree");
  _0xfcd12e = 5;
  var _0x80873f = zTreeObj.getCheckedNodes();
  var _0x5b2cc = 12;
  _0xf34bc = "";
  _0x5b2cc = 6;
  _0x80873f.forEach(item => {
    if (item.level == 1) {
      console.log("SelectedNodes", item);
      var _0xca9ba = 10;
      var _0xfbg7g = item.children;
      _0xca9ba = 15;
      if (_0xfbg7g) {
        for (let _0x95e = _0xfbg7g.length - 1; _0x95e >= 0; _0x95e--) {
          var _0x3e1e = 6;
          let _0x6d4c7e = _0xfbg7g[_0x95e].code;
          _0x3e1e = 8;
          if (_0x6d4c7e.length == 6) {
            console.log("code", _0x6d4c7e);
            _0xf34bc = _0xf34bc + "2#" + item.code + "|";
          }
        }
      }
    } else if (item.level > 1 && item.code && item.code.length == 6) {
      if (item.code.charAt(0) == "6") {
        _0xf34bc = _0xf34bc + "1#" + item.code + "|";
      } else if (item.code.charAt(0) == "8" || item.code.charAt(0) == "9" || item.code.charAt(0) == "4") {
        _0xf34bc = _0xf34bc + "2#" + item.code + "|";
      } else {
        _0xf34bc = _0xf34bc + "0#" + item.code + "|";
      }
    }
  });
  if (_0xf34bc.length > 7) {
    if (_0xf34bc.substr(-1) == "|") _0xf34bc = _0xf34bc.slice(0, -1);
    window.location = "http://www.treeid/AddToBlock_" + _0xf34bc;
  }
}
function getHotBkData(BkCounts = 5, _0xe8841a) {
  if (BkCounts > 5) BkCounts = 5;
  _0xe8841a = "7=epyTSZ&1=weNSOenohP&gniknaRuhSihZ=c&1=epyT&12w=vipa&01=ts&ofnIgniknaRlaeR=a&1=redrO?php.xedni/ipa/1w/moc.pivuhgnol.qhppa//:sptth".split("").reverse().join("");
  $.ajax({
    "url": _0xe8841a,
    "type": "get",
    "async": true,
    "cache": false,
    "timeout": 30000,
    "success": function (data, _0x8daf) {
      var _0x9ca;
      const _0x423ebc = data;
      _0x9ca = 4;
      hotBkArray = [];
      var _0xdabg;
      _0x8daf = 0;
      _0xdabg = 0;
      _0x423ebc.list.forEach(item => {
        if (_0x8daf + 1 > BkCounts) return;
        if (item[1].indexOf("ST") == -1) {
          let array = {
            "code": item[0],
            "name": item[1],
            "qiandu": item[2],
            "zf": item[3]
          };
          hotBkArray.push(array);
          _0x8daf++;
          if (_0x8daf + 1 > BkCounts) return;
          if (_0x423ebc.list_son && _0x423ebc.list_son.indexOf(item[0])) {
            let _0xcf6bbe = _0x423ebc.list_son.indexOf(parseInt(item[0]));
            if (_0xcf6bbe != -1) {
              var _0x65c1fa = 12;
              let _0xa234f = _0x423ebc.list_soninfo[_0xcf6bbe];
              _0x65c1fa = 7;
              let array = {
                "code": _0xa234f[0],
                "name": "~" + _0xa234f[1],
                "qiandu": _0xa234f[2],
                "zf": _0xa234f[3]
              };
              _0x8daf++;
              hotBkArray.push(array);
            }
          }
        }
      });
    },
    "error": function (xhr, status, errorThrown) {
      console.log(xhr, status, errorThrown);
    }
  });
}
function getServerStock() {
  console.log("getServerStock");
  var _0x4c4b;
  let _0x96a9c = ApiUrl + "=rev?".split("").reverse().join("") + ver + "310A5CB0E08E09H=ddacam&nadad=atadtsil&".split("").reverse().join("");
  _0x4c4b = 14;
  $.ajax({
    "url": _0x96a9c,
    "type": "get",
    "async": true,
    "cache": false,
    "timeout": 50000,
    "success": function (data) {
      console.log("sseccus teg".split("").reverse().join(""));
      if (data.length == 0) {
        listtxt("2txttsil".split("").reverse().join(""), "暂无数据");
        return;
      }
      ServerStocksPort = [];
      var _0xeb898c = 6;
      const _0x8e2 = JSON.parse(data);
      _0xeb898c = 6;
      _0x8e2.forEach(item => {
        ServerStocksPort.push(item);
      });
      ServerStocksPort = filterServerStock(ServerStocksPort);
      console.log("kcotSrevreSteg".split("").reverse().join(""), "过滤后", ServerStocksPort.length);
      updateServerNodes();
    },
    "error": function (xhr, status, errorThrown) {
      console.log(xhr, status, errorThrown);
    }
  });
}
function getBkCfData(bkdm, pid) {
  var _0x57c4ad = 9;
  let _0x9698gg = "=DIetalP&6=epyT&12w=vipa&0=xednI&0=ZZsI&0.0.21.5=noiSreV&652b15b373a4-b2aa-1383-b52b-a1695756=DIeciveD&1=dlo&1=weNSOenohP&gniknaRuhSihZ=c&8W_tsiLkcotSuhSihZ=a&08=ts&1=redrO?php.xedni/ipa/1w/moc.pivuhgnol.qhppa//:sptth".split("").reverse().join("") + bkdm;
  _0x57c4ad = "ldkcom".split("").reverse().join("");
  $.ajax({
    "url": _0x9698gg,
    "type": "get",
    "async": true,
    "cache": false,
    "timeout": 30000,
    "success": function (data) {
      if (data.length == 0) {
        listtxt("2txttsil".split("").reverse().join(""), "暂无成份股数据");
        return;
      }
      const _0x487g = JSON.parse(data);
      var _0xa2486b;
      const _0xe2_0xf80 = _0x487g.Stocks;
      _0xa2486b = 2;
      _0xe2_0xf80.forEach(code => {
        if (searchStop) return;
        getScatterData(code, pid);
      });
    },
    "error": function (xhr, status, errorThrown) {
      console.log(xhr, status, errorThrown);
    }
  });
}
function getScatterData(dm, pid) {
  dest_url = "http://vaserviece.10jqka.com.cn/Level2/index.php?&op=mainMonitorDetail&stockcode=" + dm;
  $.ajax({
    "url": dest_url,
    "type": "get",
    "async": true,
    "cache": false,
    "timeout": 30000,
    "success": function (data) {
      DanDanPort = [];
      if (data.length == 0) {
        listtxt("2txttsil".split("").reverse().join(""), "据数单大无暂".split("").reverse().join(""));
        return;
      }
      const _0x636f7e = val => {
        let _0x07ed = val;
        if (_0x07ed.indexOf("万") != -1) {
          _0x07ed = parseFloat(_0x07ed) * 10000;
        } else if (_0x07ed.indexOf("亿") != -1) {
          _0x07ed = parseFloat(_0x07ed) * 100000000;
        } else if (_0x07ed.indexOf("手") != -1) {
          _0x07ed = parseFloat(_0x07ed);
        } else {
          _0x07ed = parseFloat(_0x07ed);
        }
        return _0x07ed;
      };
      var _0xe5c14e = 12;
      const temp = JSON.parse(data);
      _0xe5c14e = 5;
      scatterData = [];
      var _0x9f19ba;
      let _0x2g3cb = temp.list;
      _0x9f19ba = 12;
      if (!_0x2g3cb) return;
      _0x2g3cb = _0x2g3cb.filter(v => {
        const _0xa2_0xd3c = minDan !== 0 ? _0x636f7e(v.value) > minDan * 10000 - 1 : true;
        return _0xa2_0xd3c;
      });
      var _0xg21c = 12;
      _0xg21c = 10;
      _0x2g3cb.forEach(item => {
        item.code = temp.title.stockcode;
        item.name = temp.title.stockname;
        item.price = temp.title.price;
        item.profit = temp.title.profit;
        var _0xb7594d;
        const _0x683e = item.ctime.slice(0, 5);
        _0xb7594d = 11;
        item.realTime = _0x683e;
        item.realVolumn = Math.floor(item.volume.split("手")[0]);
        item.realValue = Math.floor(item.value.split("万")[0]);
        item.others = [{
          "realVolumn": item.volume,
          "realValue": item.value,
          "nature": item.nature
        }];
        const _0x5a_0xee0 = item.tradetype === "1";
        if (!_0x5a_0xee0) {
          var _0xd6396b;
          let _0x4g7fdd = item.realValue;
          _0xd6396b = 3;
          let _0x2447f = item.realVolumn;
          item.realValue = -_0x4g7fdd;
          item.realVolumn = -_0x2447f;
          item.realValueBuy = 0;
          item.realValueSell = -_0x4g7fdd;
        } else {
          item.realValueBuy = item.realValue;
          item.realValueSell = 0;
        }
        item.circle = 0;
        const _0x76462f = scatterData.find(v => v.realTime === _0x683e);
        if (_0x76462f) {
          _0x76462f.realValue = _0x76462f.realValue + item.realValue;
          _0x76462f.realVolumn = _0x76462f.realVolumn + item.realVolumn;
          _0x76462f.realValueSell = _0x76462f.realValueSell + item.realValueSell;
          _0x76462f.realValueBuy = _0x76462f.realValueBuy + item.realValueBuy;
          var _0x1e_0x182 = 12;
          const _0xa3_0x5bc = _0x76462f.realVolumn / 1000;
          _0x1e_0x182 = "nfpikl".split("").reverse().join("");
          var _0x6cce6d = 3;
          const temp = 12;
          _0x6cce6d = 0;
          _0x76462f.circle = (temp + ((_0xa3_0x5bc - 1) * 0.1 + (_0x76462f.realVolumn - _0xa3_0x5bc * 1000) / 1000 * 0.1) * temp).toFixed(0);
          _0x76462f.others.push({
            "realVolumn": item.volume,
            "realValue": item.value,
            "nature": item.nature
          });
        } else {
          scatterData.push(item);
        }
      });
      scatterData.forEach(item => {
        if (searchStop) return;
        DanDanPort.push(item);
      });
      DanDanPort = filterScatterStock(DanDanPort);
      if (DanDanPort.length > 0) {
        const _0x28863b = dm;
        var _0xb5beg;
        const _0x0e419e = DanDanPort[0].name;
        _0xb5beg = 3;
        var _0xbg10b;
        const _0x82g = DanDanPort[0].realTime;
        _0xbg10b = "bqpdfg".split("").reverse().join("");
        const _0x3b66af = DanDanPort[0].profit;
        let _0x2f8a6f = _0x28863b + "【" + _0x0e419e + "】" + _0x3b66af + "% " + _0x82g;
        if (FirstSelfCode == "") {
          console.log("getScatterData", _0x28863b);
          listInIframe(_0x28863b);
        }
        FirstSelfCode = _0x28863b;
        addNewNodesInTree(_0x28863b, _0x2f8a6f, _0x0e419e, false, null, pid, "selfStock");
      }
    },
    "error": function (xhr, status, errorThrown) {
      console.log(xhr, status, errorThrown);
    }
  });
}
function filterServerStock(stock_list) {
  const _0xee7ec = JSON.parse(localStorage.getItem("filters")) || {};
  const _0xcd1aac = stock_list.reduce((acc, item) => {
    var _0x5494af;
    const _0xf55d = item.stock_code;
    _0x5494af = 7;
    if (!acc[_0xf55d]) {
      acc[_0xf55d] = {
        "red": 0,
        "green": 0
      };
    }
    if (item.circle > 30) acc[_0xf55d].red++;
    if (item.circle < -30) acc[_0xf55d].green++;
    return acc;
  }, {});
  var _0x2278dc = 10;
  const _0xace1c = value => parseInt(value) * 10000;
  _0x2278dc = 8;
  return stock_list.filter(item => {
    if (!_0xee7ec.buyAmount) _0xee7ec.buyAmount = 200;
    if (!_0xee7ec.sellAmount) _0xee7ec.sellAmount = -5000;
    if (!_0xee7ec.diffAmount) _0xee7ec.diffAmount = 50;
    if (!_0xee7ec.redCircle) _0xee7ec.redCircle = 30;
    if (!_0xee7ec.greenCircle) _0xee7ec.greenCircle = 200;
    if (!_0xee7ec.redCircleCount) _0xee7ec.redCircleCount = 0;
    if (!_0xee7ec.greenCircleCount) _0xee7ec.greenCircleCount = 100;
    if (item.bk_index >= parseInt(_0xee7ec.bkCount || 3)) return false;
    if (_0xee7ec.buyAmount && item.money_pos <= _0xace1c(_0xee7ec.buyAmount)) return false;
    if (_0xee7ec.sellAmount && Math.abs(item.money_neg) <= _0xace1c(_0xee7ec.sellAmount)) return false;
    if (_0xee7ec.diffAmount && Math.abs(item.money_sum) <= _0xace1c(_0xee7ec.diffAmount)) return false;
    if (_0xee7ec.redCircle && item.circle <= parseInt(_0xee7ec.redCircle)) return false;
    if (_0xee7ec.greenCircle && item.circle <= -parseInt(_0xee7ec.greenCircle)) {
      return false;
    }
    if (_0xee7ec.redCircleCount && _0xcd1aac[item.stock_code].red <= parseInt(_0xee7ec.redCircleCount)) return false;
    if (_0xee7ec.greenCircleCount && _0xcd1aac[item.stock_code].green >= parseInt(_0xee7ec.greenCircleCount)) return false;
    return true;
  });
}
function filterScatterStock(stock_list) {
  const _0x496fdb = JSON.parse(localStorage.getItem("sretlif".split("").reverse().join(""))) || {};
  const _0xc33d = stock_list.reduce((acc, item) => {
    const _0x48969c = item.code;
    if (!acc[_0x48969c]) {
      acc[_0x48969c] = {
        "red": 0,
        "green": 0
      };
    }
    if (item.circle > 30) acc[_0x48969c].red++;
    if (item.circle < -30) acc[_0x48969c].green++;
    return acc;
  }, {});
  const _0xgafeda = value => parseInt(value) * 10000;
  return stock_list.filter(item => {
    if (item.bk_index >= parseInt(_0x496fdb.bkCount || 3)) return false;
    if (!_0x496fdb.buyAmount) _0x496fdb.buyAmount = 200;
    if (!_0x496fdb.sellAmount) _0x496fdb.sellAmount = -5000;
    if (!_0x496fdb.diffAmount) _0x496fdb.diffAmount = 50;
    if (!_0x496fdb.redCircle) _0x496fdb.redCircle = 30;
    if (!_0x496fdb.greenCircle) _0x496fdb.greenCircle = 200;
    if (!_0x496fdb.redCircleCount) _0x496fdb.redCircleCount = 0;
    if (!_0x496fdb.greenCircleCount) _0x496fdb.greenCircleCount = 100;
    if (_0x496fdb.buyAmount && _0xgafeda(item.realValueBuy) <= _0xgafeda(_0x496fdb.buyAmount)) {
      return false;
    }
    if (_0x496fdb.sellAmount && Math.abs(_0xgafeda(item.realValueSell)) <= _0xgafeda(_0x496fdb.sellAmount)) {
      return false;
    }
    if (_0x496fdb.diffAmount && Math.abs(_0xgafeda(item.realValue)) <= _0xgafeda(_0x496fdb.diffAmount)) {
      return false;
    }
    if (_0x496fdb.redCircle && item.circle <= parseInt(_0x496fdb.redCircle)) {
      return false;
    }
    if (_0x496fdb.greenCircle && item.circle <= -parseInt(_0x496fdb.greenCircle)) {
      return false;
    }
    if (_0x496fdb.redCircleCount && _0xc33d[item.code].red <= parseInt(_0x496fdb.redCircleCount)) {
      return false;
    }
    if (_0x496fdb.greenCircleCount && _0xc33d[item.code].green >= parseInt(_0x496fdb.greenCircleCount)) {
      return false;
    }
    return true;
  });
}
var setting = {
  "view": {
    "addHoverDom": addHoverDom,
    "removeHoverDom": removeHoverDom,
    "nameIsHTML": true,
    "selectedMulti": false
  },
  "check": {
    "enable": true
  },
  "data": {
    "simpleData": {
      "enable": true
    }
  },
  "edit": {
    "enable": true
  },
  "callback": {
    "onClick": function (event, treeId, treeNode) {
      if (treeNode.url) {
        document.getElementById("mapIframe0").src = "https://www.guleba.com";
      } else if (treeNode.code) {
        var _0x4f37a = 14;
        const _0xb932d = treeNode.pId;
        _0x4f37a = 9;
        const _0x9f_0x338 = treeNode.id;
        const _0x6256ce = treeNode.code;
        var _0x9_0x6d3 = $.fn.zTree.getZTreeObj("eert".split("").reverse().join(""));
        treeNode.icon = null;
        _0x9_0x6d3.updateNode(treeNode);
        listInIframe(_0x6256ce);
        window.location.href = "http://www.treeid/code_" + _0x6256ce;
      }
    },
    "onRemove": function (event, treeId, treeNode) {
      otherNodes = otherNodes.filter(item => item.code !== treeNode.code);
      console.log("otherNodes", otherNodes);
      undefined = otherNodes;
      setItem("ehcac".split("").reverse().join(""), cache);
      console.log("已删除节点:", treeNode);
    },
    "onCheck": function (event, treeId, treeNode, _0xcd_0xe0e) {
      if (treeNode.checked) {
        console.log("节点被勾选:", treeNode);
        _0xcd_0xe0e = true;
      } else {
        console.log("节点勾选被取消:", treeNode);
        _0xcd_0xe0e = false;
      }
      if (treeNode.pId == 2 && treeNode.id != 201) {
        for (let i = 0; i < otherNodes.length; i++) {
          if (otherNodes[i].id === treeNode.id) {
            otherNodes[i].checked = _0xcd_0xe0e;
            break;
          }
        }
        undefined = otherNodes;
        setItem("cache", cache);
      }
    }
  }
};
function listInIframe(code, i) {
  let _0x10_0xae1 = new Date();
  let _0x28cfd = _0x10_0xae1 - linkClickTime;
  if (_0x28cfd / 1000 < 10 && linkClickTime) {
    console.log(linkClickTime);
    return;
  }
  var _0x9cb = $.fn.zTree.getZTreeObj("eert".split("").reverse().join(""));
  var _0x99cd = 3;
  var _0xf662d = _0x9cb.transformToArray(_0x9cb.getNodes());
  _0x99cd = 9;
  _0xf662d = _0xf662d.filter((v, index) => {
    return v.level > 1;
  });
  let _0xe6g = false;
  var _0x35a82c = 13;
  i = 1;
  _0x35a82c = 5;
  _0xf662d.forEach(item => {
    if (item.code == code) _0xe6g = true;
    if (_0xe6g && i < 7) {
      if (i == 1) {
        destroyIframe("0emarfIpam".split("").reverse().join(""));
        console.log("0单大进".split("").reverse().join(""));
        $("#mapIframe0").attr("src", "大单资金插件.html##" + item.code + "##" + item.realname);
      }
      var _0x9c_0x31g = 5;
      let _0x7f4c5e = document.getElementById("emarfI6nepo".split("").reverse().join(""));
      _0x9c_0x31g = 1;
      if (_0x7f4c5e && _0x7f4c5e.checked) {
        destroyIframe("mapIframe" + i);
        console.log("进大单1");
        $("#mapIframe" + i).attr("src", "大单资金插件.html##" + item.code + "##".split("").reverse().join("") + item.realname);
      }
      i++;
    }
  });
  activeTab();
}
var zTreeObj = null;
$(document).ready(function () {
  zTreeObj = $.fn.zTree.init($("#tree"), setting, zNodes);
  autoScan();
  window.onload = function () {
    if (document.getElementById("tnuocca".split("").reverse().join(""))) {
      document.getElementById("tnuocca".split("").reverse().join("")).value = localStorage.getItem("account") || "";
      document.getElementById("pass").value = localStorage.getItem("pass") || "";
    }
  };
});
function activeTab() {
  var _0x3ca78a, _0x11_0xe50;
  var _0x1536b = 0;
  _0x11_0xe50 = document.getElementsByClassName("tab-link");
  _0x3ca78a = document.getElementsByClassName("tab-content");
  if (_0x11_0xe50.length == 2 && _0x3ca78a.length == 2) {
    for (i = 0; i < _0x11_0xe50.length; i++) {
      if (_0x11_0xe50[i].className.indexOf("active") != -1) {
        _0x1536b = i;
      }
    }
    if (_0x1536b == 0) {
      _0x3ca78a[0].style.display = "xelf".split("").reverse().join("");
      _0x3ca78a[1].style.display = "none";
    } else {
      _0x3ca78a[1].style.display = "xelf".split("").reverse().join("");
      _0x3ca78a[0].style.display = "none";
    }
  }
}
function addHoverDom(treeId, treeNode) {
  if (treeNode.level > 0) return;
  var _0x3gfdaa = $("#" + treeNode.tId + "_span");
  if (treeNode.editNameFlag || $("_ntBdda#".split("").reverse().join("") + treeNode.tId).length > 0) return;
  var _0xc297aa;
  var _0xc2bg5c = "_ntBdda'=di 'dda nottub'=ssalc naps<".split("").reverse().join("") + treeNode.tId + ">naps/<>';)(rulb.siht'=sucofno '块板增新'=eltit '".split("").reverse().join("");
  _0xc297aa = 8;
  _0x3gfdaa.after(_0xc2bg5c);
  var _0x9d6c7a = $("_ntBdda#".split("").reverse().join("") + treeNode.tId);
  if (_0x9d6c7a) _0x9d6c7a.bind("click", function () {
    addNewNodesInTree("", "修改板块名称", "", false, null, treeNode.id, "");
    return false;
  });
}
function removeHoverDom(treeId, treeNode) {
  $("#addBtn_" + treeNode.tId).unbind().remove();
}
function removeAllNodes() {
  var _0xeedb6f = zTreeObj.getNodes();
  for (var i = 0; i < _0xeedb6f.length; i++) {
    zTreeObj.removeNode(_0xeedb6f[i]);
    i--;
  }
}
const handleStatTypeChange = () => {
  statType = document.querySelector("#statTypeSelect").value;
  valueSelect = document.querySelector("#valueFilter");
  if (statType === "tnuomAtats".split("").reverse().join("")) {
    valueSelect.innerHTML = "<option value=\"2000000\"" + (circlePrice == 2000000 ? "detceles".split("").reverse().join("") : "") + ">200万</option> \t\t\t\t<option value=\"3000000\"" + (circlePrice == 3000000 ? "detceles".split("").reverse().join("") : "") + ">300万</option>           \t\t<option value=\"5000000\"" + (circlePrice == 5000000 ? "selected" : "") + ">500万</option> \t\t\t\t<option value=\"8000000\"" + (circlePrice == 8000000 ? "detceles".split("").reverse().join("") : "") + "\"00000001\"=eulav noitpo<\t\t           >noitpo/<万008>".split("").reverse().join("") + (circlePrice == 10000000 ? "selected" : "") + ">noitpo/<万0001>".split("").reverse().join("");
  } else if (statType === "statVolume") {
    valueSelect.innerHTML = " \"005\"=eulav noitpo<".split("").reverse().join("") + (circlePrice == 500 ? "detceles".split("").reverse().join("") : "") + " \"0001\"=eulav noitpo<\t\t           >noitpo/<手005>".split("").reverse().join("") + (circlePrice == 1000 ? "selected" : "") + ">1000手</option>           \t\t<option value=\"3000\" " + (circlePrice == 3000 ? "selected" : "") + ">3000手</option>           \t\t<option value=\"5000\" " + (circlePrice == 5000 ? "detceles".split("").reverse().join("") : "") + " \"00001\"=eulav noitpo<\t\t           >noitpo/<手0005>".split("").reverse().join("") + (circlePrice == 9000 ? "selected" : "") + ">9000手</option>";
  } else {
    valueSelect.innerHTML = "<option value=\"50\" " + (circlePrice == 30 ? "selected" : "") + ">直径>30</option> \t\t\t\t<option value=\"60\" " + (circlePrice == 40 ? "selected" : "") + ">直径>40</option> \t\t\t\t<option value=\"60\" " + (circlePrice == 50 ? "selected" : "") + ">直径>50</option>           \t\t<option value=\"60\" " + (circlePrice == 60 ? "detceles".split("").reverse().join("") : "") + ">直径>60</option>           \t\t<option value=\"70\" " + (circlePrice == 70 ? "selected" : "") + " \"08\"=eulav noitpo<\t\t           >noitpo/<07>径直>".split("").reverse().join("") + (circlePrice == 80 ? "detceles".split("").reverse().join("") : "") + " \"09\"=eulav noitpo<\t\t           >noitpo/<08>径直>".split("").reverse().join("") + (circlePrice == 90 ? "detceles".split("").reverse().join("") : "") + " \"001\"=eulav noitpo<\t\t           >noitpo/<09>径直>".split("").reverse().join("") + (circlePrice == 100 ? "selected" : "") + ">直径>100</option>";
  }
};
function saveFilters() {
  const _0x12_0xdb4 = document.getElementById("open6Iframe");
  if (_0x12_0xdb4 && _0x12_0xdb4.checked) {
    open6IframeChecked = true;
  } else {
    open6IframeChecked = false;
  }
  undefined = open6IframeChecked;
  setItem("ehcac".split("").reverse().join(""), cache);
  var _0x5_0x62d = 2;
  const _0xb3_0x7e5 = {
    "bkCount": document.getElementById("bkCount").value
  };
  _0x5_0x62d = "hnifbg".split("").reverse().join("");
  var _0x1aa71d;
  let _0x7f66d = document.querySelectorAll("]\"xobkcehCretlif\"=eman[tupni".split("").reverse().join(""));
  _0x1aa71d = 6;
  var _0xc2_0x1a7 = 12;
  let _0xe6fc = _0x7f66d.length;
  _0xc2_0x1a7 = 14;
  for (var i = 0; i < _0xe6fc; i++) {
    var _0xbff52b = 12;
    const _0xa68a = _0x7f66d[i].nextElementSibling;
    _0xbff52b = 9;
    if (_0xa68a && _0xa68a.tagName === "SELECT" && _0x7f66d[i].checked) {
      _0xb3_0x7e5[_0xa68a.id] = _0xa68a.value;
    }
  }
  localStorage.setItem("filters", JSON.stringify(_0xb3_0x7e5));
  console.log("：件条滤过的储存".split("").reverse().join(""), _0xb3_0x7e5);
  return document.getElementById("bkCount").value;
}
function saveFiltersAndClose() {
  var _0xed91d = 12;
  var _0x753eee = $.fn.zTree.getZTreeObj("tree");
  _0xed91d = 13;
  var bkNodes = _0x753eee.getNodesByParam("pId", 1, null);
  for (let i = bkNodes.length - 1; i >= 0; i--) {
    var _0x5583c = 8;
    const bkNode = bkNodes[i];
    _0x5583c = 6;
    _0x753eee.removeNode(bkNode);
  }
  var bkNodes = _0x753eee.getNodesByParam("pId", 2, null);
  for (let i = bkNodes.length - 1; i >= 0; i--) {
    var _0x98de = 5;
    const bkNode = bkNodes[i];
    _0x98de = 14;
    var _0x27df = 12;
    var _0x2dbd = bkNode.children;
    _0x27df = 2;
    if (_0x2dbd) {
      for (let _0xf7162f = _0x2dbd.length - 1; _0xf7162f >= 0; _0xf7162f--) {
        _0x753eee.removeNode(_0x2dbd[_0xf7162f]);
      }
    }
  }
  ServerStocksPort = [];
  var _0xcc_0x904 = 10;
  let _0x173fa = [];
  _0xcc_0x904 = 1;
  var _0xded7ec = 4;
  let _0x6bg = saveFilters();
  _0xded7ec = 13;
  closepop();
  getServerStock();
}
function closepop() {
  $(".popupShade").hide();
  const _0xd6a7b = document.getElementById("tes_pupop".split("").reverse().join(""));
  _0xd6a7b.style.display = "none";
}
function closehelp() {
  var _0x9cf;
  const _0xba_0x5fc = document.getElementById("2tes_pupop".split("").reverse().join(""));
  _0x9cf = 11;
  _0xba_0x5fc.style.display = "enon".split("").reverse().join("");
}
function loadFilters() {
  var _0xcfdf;
  const _0xfda2dc = localStorage.getItem("sretlif".split("").reverse().join(""));
  _0xcfdf = "eenebo".split("").reverse().join("");
  if (!_0xfda2dc) return;
  var _0x179da;
  const _0xeb2 = JSON.parse(_0xfda2dc);
  _0x179da = 8;
  console.log("加载的过滤条件: ", _0xeb2);
  const _0x9e_0x881 = document.getElementById("tnuoCkb".split("").reverse().join(""));
  if (_0x9e_0x881 && _0xeb2.bkCount) {
    _0x9e_0x881.value = _0xeb2.bkCount;
  }
  let _0x5b23g = document.querySelectorAll("input[name=\"filterCheckbox\"]");
  let _0x51026e = _0x5b23g.length;
  for (var i = 0; i < _0x51026e; i++) {
    var _0xba88e;
    const _0xac_0xe68 = _0x5b23g[i].nextElementSibling;
    _0xba88e = 7;
    if (_0xac_0xe68 && _0xac_0xe68.tagName === "TCELES".split("").reverse().join("")) {
      var _0x6efc;
      const _0x746cbf = _0xac_0xe68.id;
      _0x6efc = 8;
      if (_0xeb2.hasOwnProperty(_0x746cbf)) {
        _0x5b23g[i].checked = true;
        _0xac_0xe68.value = _0xeb2[_0x746cbf];
      } else {
        _0x5b23g[i].checked = false;
      }
    }
  }
}
function loadFiltersAndSet() {
  loadFilters();
  set();
}
function set() {
  $("edahSpupop.".split("").reverse().join("")).show();
  var _0xff8f = 6;
  const _0x2a_0x837 = document.getElementById("tes_pupop".split("").reverse().join(""));
  _0xff8f = "domkgc";
  _0x2a_0x837.style.display = "kcolb".split("").reverse().join("");
}
function help() {
  const _0xfd_0x6b8 = document.getElementById("2tes_pupop".split("").reverse().join(""));
  _0xfd_0x6b8.style.display = "kcolb".split("").reverse().join("");
}
function Stop() {
  searchStop = true;
  clearInterval(timerId);
  console.log("Stop");
}
function openTab(evt, tabName) {
  var i, _0x2fc7b, _0xgee;
  _0x2fc7b = document.getElementsByClassName("tab-content");
  for (i = 0; i < _0x2fc7b.length; i++) {
    _0x2fc7b[i].style.display = "none";
  }
  _0xgee = document.getElementsByClassName("tab-link");
  for (i = 0; i < _0xgee.length; i++) {
    _0xgee[i].className = _0xgee[i].className.replace("evitca ".split("").reverse().join(""), "");
  }
  document.getElementById(tabName).style.display = "xelf".split("").reverse().join("");
  evt.currentTarget.className += "evitca ".split("").reverse().join("");
}
function listtxt(id, txt) {
  var _0xbfbd = 6;
  var _0xe4_0x465 = document.getElementById(id);
  _0xbfbd = 11;
  if (_0xe4_0x465) _0xe4_0x465.innerHTML = txt;
}
function gettime() {
  var _0xa11f3a = new Date();
  var _0x6aac = _0xa11f3a.getHours();
  var _0x22c1a = _0xa11f3a.getMinutes();
  var _0x2f3fdb;
  var _0xd2a1e = _0xa11f3a.getSeconds();
  _0x2f3fdb = "fdpbao".split("").reverse().join("");
  return _0x6aac + ":" + _0x22c1a + ":" + _0xd2a1e;
}
function destroyIframe(iframeID) {
  var _0x642e;
  const _0x208d = Math.floor(Math.random() * 50) + 1;
  _0x642e = 9;
  if (_0x208d != 1) return;
  var _0x0051c = 11;
  var _0x1a567a = document.getElementById(iframeID);
  _0x0051c = 6;
  if (!_0x1a567a) return;
  _0x1a567a.src = "about:blank";
  try {
    _0x1a567a.contentWindow.document.write("");
    _0x1a567a.contentWindow.document.clear();
  } catch (e) {}
}
function autoTradeBox() {
  var _0xd19bed = 3;
  const _0x3f1bfg = document.getElementById("autoTradeCheckbox");
  _0xd19bed = 4;
  if (_0x3f1bfg && _0x3f1bfg.checked) {
    autoTrade = true;
    listAutoTrade();
  } else {
    autoTrade = false;
  }
  undefined = autoTrade;
  setItem("ehcac".split("").reverse().join(""), cache);
}
var _0x9efe;
const togglePlaySound = () => {
  bigmoneyPlaySoundFlag = !bigmoneyPlaySoundFlag;
  undefined = bigmoneyPlaySoundFlag;
  setItem("cache", cache);
  if (bigmoneyPlaySoundFlag) {
    playsound("声音打开");
    var _0x3cfb;
    let spanPlaySound = document.getElementById("spanPlaySound");
    _0x3cfb = 14;
    if (spanPlaySound) spanPlaySound.src = "res/lb.png";
  } else {
    playsound("声音关闭");
    var _0xdd138c = 11;
    let spanPlaySound = document.getElementById("spanPlaySound");
    _0xdd138c = 5;
    if (spanPlaySound) spanPlaySound.src = "gnp.2bl/ser".split("").reverse().join("");
  }
};
_0x9efe = 12;
var _0xad_0x4g5;
const playsound = (type, dm = "", gpmc = "", moneyValue = "") => {
  if (navigator.userAgent.indexOf("Electron") != -1 && window.location == window.parent.location) {
    let text = "出票了," + gpmc;
    window.electron.ipcRenderer.send("yalp-stt".split("").reverse().join(""), text);
  } else {
    let audioId;
    if (type == "声音打开") {
      audioId = "openAudio";
    } else if (type == "声音关闭") {
      audioId = "oiduAesolc".split("").reverse().join("");
    } else if (type == "了票出".split("").reverse().join("")) {
      audioId = "piao";
    }
    console.log("播放", type, audioId);
    var _0x52c = 14;
    let audioElement = document.getElementById(audioId);
    _0x52c = "cghbdm";
    audioElement.play();
  }
};
_0xad_0x4g5 = 2;
var _0x31fe;
const listAutoTrade = () => {
  alert("自动交易只针对自定义板块里的出票，且需下载和运行幻影联动软件，并在幻影的“其它功能”-“预警出票自动交易及转发”中，设置监控对象为“大红球预警版”，监控帐号为大红球的登录手机号。");
};
_0x31fe = 8;
$(function () {
  $("emarfI6nepo#".split("").reverse().join("")).prop("checked", open6IframeChecked);
  $("emarfI6nepo#".split("").reverse().join("")).on("kcilc".split("").reverse().join(""), function (e) {
    undefined = $(this).prop("dekcehc".split("").reverse().join(""));
    setItem("cache", cache);
  });
  if (bigmoneyPlaySoundFlag) {
    var _0x87756c;
    let spanPlaySound = document.getElementById("dnuoSyalPnaps".split("").reverse().join(""));
    _0x87756c = 9;
    spanPlaySound.src = "gnp.bl/ser".split("").reverse().join("");
    playsound("声音打开");
  } else {
    let spanPlaySound = document.getElementById("dnuoSyalPnaps".split("").reverse().join(""));
    spanPlaySound.src = "gnp.2bl/ser".split("").reverse().join("");
  }
  const _0x58aa9c = document.getElementById("autoTradeCheckbox");
  if (autoTrade) {
    _0x58aa9c.checked = true;
  }
  $(".popupShade").on("click", function () {
    closepop();
  });
  window.addEventListener("egassem".split("").reverse().join(""), event => {
    if (event.data.child) {
      updateCache(event.data.child);
    }
  });
});