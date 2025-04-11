//Fri Apr 11 2025 03:35:19 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";
var page = {};
window.page = page;
page.saveData = function () {
  chrome.storage.local.set({
    GoResMap: JSON.stringify(page.ruleMaps)
  });
  page.showInfo("");
  window.setTimeout(function () {
    {
      page.showInfo("(^ω^)", "success");
    }
  }, 10);
  page.updateDynamicRules();
};
page.getData = function (_0x497b5b) {
  chrome.storage.local.get(["GoResMap"], function (_0x37c77e) {
    {
      var _0x973bd8 = JSON.parse(_0x37c77e.GoResMap || "[]");
      page.ruleMaps = _0x973bd8;
      page.ruleMapsOrigin = JSON.parse(JSON.stringify(page.ruleMaps));
      _0x497b5b();
    }
  });
};
page.addRule = function () {
  page.ruleMaps = [];
  page.saveData();
  page.refresh();
  var _0x3bb8c5 = {
    enable: "checked",
    sid: "20231101_1201",
    type: "INCLUDE",
    into: "https://c2.cgyouxi.com/website/hfplayer/v3/bin/official/game.js?v=2025",
    target: "https://enviyu.xyz/AvgOrange/Myyy.js"
  };
  _0x3bb8c5.sid = hui.formatDate(new Date(), "MMddHHmm") + "_" + Number(Math.round((1 + Math.random()) * 10000)).toString(16);
  page.ruleMaps.push(_0x3bb8c5);
  page.flushList();
  page.showChange();
  page.updateDynamicRules();
};
page.beginNumber = page.curRuleIndex = 10000;
page.clearDynamicRule = function () {
  var _0x4b37b5 = [];
  for (var _0x55d380 = 0, _0x6af1eb = page.curRuleIndex; _0x55d380 < _0x6af1eb; _0x55d380++) {
    _0x4b37b5.push(_0x55d380);
  }
  var _0x4d5e51 = {
    removeRuleIds: _0x4b37b5
  };
  chrome.declarativeNetRequest.updateDynamicRules(_0x4d5e51);
};
page.updateDynamicRules = function (_0x5464a2) {
  chrome.storage.local.get(["GoResMap"], function (_0x3f52c7) {
    {
      var _0x57b59b = JSON.parse(_0x3f52c7.GoResMap || "[]");
      page.curRuleIndex = Math.max(page.curRuleIndex, page.beginNumber + _0x57b59b.length);
      page.clearDynamicRule();
      for (var _0xed3d7 = 0, _0x2bbb6c = _0x57b59b.length; _0xed3d7 < _0x2bbb6c; _0xed3d7++) {
        {
          if (_0x57b59b[_0xed3d7].enable !== "checked") {
            continue;
          }
          if (_0x57b59b[_0xed3d7].type === "INCLUDE") {
            page.createIncludeRule(_0x57b59b[_0xed3d7], page.beginNumber + _0xed3d7);
          } else {
            if (_0x57b59b[_0xed3d7].type === "EXACT") {
              page.createExactRule(_0x57b59b[_0xed3d7], page.beginNumber + _0xed3d7);
            } else {
              if (_0x57b59b[_0xed3d7].type === "REGEX") {
                page.createRegexRule(_0x57b59b[_0xed3d7], page.beginNumber + _0xed3d7);
              } else {
                if (_0x57b59b[_0xed3d7].type === "REPLACE") {
                  page.createReplaceRule(_0x57b59b[_0xed3d7], page.beginNumber + _0xed3d7);
                }
              }
            }
          }
        }
      }
    }
  });
};
page.showInfo = function (_0x5cd3db, _0x1e6ced) {
  var _0x5847f1 = document.getElementById("errorMsg");
  var _0x295f79 = _0x5847f1.parentNode;
  var _0xa0117e = _0x5847f1.parentNode.parentNode.parentNode;
  _0xa0117e.style.display = !_0x5cd3db ? "none" : "";
  hui.removeClass(_0x295f79, "alert-danger alert-success", _0x1e6ced === "success" ? "alert-success" : "alert-danger");
  _0x5847f1.innerText = _0x5cd3db;
  if (_0x5847f1.timer) {
    window.clearTimeout(_0x5847f1.timer);
  }
  _0x5847f1.timer = null;
  if (_0x5cd3db) {
    _0x5847f1.timer = window.setTimeout(function () {
      page.showInfo("");
    }, 2500);
  }
};
page.verify = function () {
  var _0x2e1632 = true;
  hui.removeClass(".has-error", "has-error");
  for (var _0x6a8cff = page.ruleMaps.length - 1; _0x6a8cff > -1; _0x6a8cff--) {
    {
      var _0x468747 = page.ruleMaps[_0x6a8cff];
      var _0x1c7a86 = document.querySelector(".row_" + _0x468747.sid);
      var _0x5428cb = _0x1c7a86.querySelector(".into");
      var _0x243894 = _0x1c7a86.querySelector(".target");
      if (!_0x468747.into) {
        hui.addClass(_0x5428cb.parentNode, "has-error");
        _0x5428cb.title = "匹配条件不能为空";
        _0x2e1632 = false;
      } else {
        if (_0x468747.type === "REGEX") {
          {
            try {
              new RegExp(_0x468747.into);
            } catch (_0x50d40b) {
              {
                hui.addClass(_0x5428cb.parentNode, "has-error");
                _0x5428cb.title = "正则格式错误";
                _0x2e1632 = false;
              }
            }
          }
        }
      }
      !_0x468747.target && (hui.addClass(_0x243894.parentNode, "has-error"), _0x243894.title = "跳转地址不能为空", _0x2e1632 = false);
    }
  }
  if (!_0x2e1632) {
    page.showInfo("请更正列表中的错误");
  }
  return _0x2e1632;
};
page.showChange = function () {
  page.saveRule();
};
page.getParentSid = function (_0x4f8279) {
  if (!_0x4f8279) {
    return "";
  }
  var _0x4f66d5 = "";
  while (_0x4f8279) {
    {
      if (_0x4f8279.hasAttribute("sid")) {
        {
          _0x4f66d5 = _0x4f8279.getAttribute("sid");
          break;
        }
      } else {
        {
          _0x4f8279 = _0x4f8279.parentNode;
        }
      }
    }
  }
  return _0x4f66d5;
};
page.copyRule = function (_0x18302a) {
  var _0x4bdefd = page.getParentSid(_0x18302a);
  for (var _0x42fa01 = page.ruleMaps.length - 1; _0x42fa01 > -1; _0x42fa01--) {
    {
      if (_0x4bdefd === page.ruleMaps[_0x42fa01].sid) {
        {
          var _0x587d72 = Object.assign({}, page.ruleMaps[_0x42fa01]);
          _0x587d72.sid = hui.formatDate(new Date(), "MMddHHmm") + "_" + Number(Math.round((1 + Math.random()) * 10000)).toString(16);
          _0x587d72.enable = "checked";
          page.ruleMaps.push(_0x587d72);
          page.flushList();
          page.showChange();
          page.flushList();
        }
      }
    }
  }
};
page.enableRule = function (_0x38182e) {
  var _0x230ebc = page.getParentSid(_0x38182e);
  for (var _0x5738b3 = page.ruleMaps.length - 1; _0x5738b3 > -1; _0x5738b3--) {
    _0x230ebc === page.ruleMaps[_0x5738b3].sid && (page.ruleMaps[_0x5738b3].enable = !page.ruleMaps[_0x5738b3].enable ? "checked" : "");
  }
  page.showChange();
  page.flushList();
};
page.changeValue = function (_0x4d0fe9, _0x14f95c) {
  var _0x2b4e2b = page.getParentSid(_0x4d0fe9);
  for (var _0x5ce731 = page.ruleMaps.length - 1; _0x5ce731 > -1; _0x5ce731--) {
    {
      if (_0x2b4e2b === page.ruleMaps[_0x5ce731].sid) {
        {
          page.ruleMaps[_0x5ce731][_0x14f95c] = _0x4d0fe9.value;
        }
      }
    }
  }
  page.showChange();
  page.flushList();
};
page.clearInput = function (_0x2e4a71) {
  _0x2e4a71.previousElementSibling.value = "";
  _0x2e4a71.previousElementSibling.focus();
  page.verify();
};
page.changeIndex = function (_0x33f683) {
  var _0x1ef0be = page.getParentSid(_0x33f683);
  var _0x1754c4 = _0x33f683.className.indexOf("btn-moveup") > -1 ? "up" : "down";
  for (var _0x1a46fe = page.ruleMaps.length - 1; _0x1a46fe > -1; _0x1a46fe--) {
    {
      if (_0x1ef0be === page.ruleMaps[_0x1a46fe].sid) {
        {
          var _0x49ef00 = page.ruleMaps[_0x1a46fe];
          if (_0x1754c4 === "up" && _0x1a46fe > 0) {
            {
              page.ruleMaps[_0x1a46fe] = page.ruleMaps[_0x1a46fe - 1];
              page.ruleMaps[_0x1a46fe - 1] = _0x49ef00;
            }
          }
          _0x1754c4 === "down" && _0x1a46fe < page.ruleMaps.length - 1 && (page.ruleMaps[_0x1a46fe] = page.ruleMaps[_0x1a46fe + 1], page.ruleMaps[_0x1a46fe + 1] = _0x49ef00);
          break;
        }
      }
    }
  }
  page.showChange();
  page.flushList();
};
page.removeRule = function (_0xf42f9e) {
  var _0x583d52 = page.getParentSid(_0xf42f9e);
  for (var _0x43a01c = page.ruleMaps.length - 1; _0x43a01c > -1; _0x43a01c--) {
    {
      if (_0x583d52 === page.ruleMaps[_0x43a01c].sid) {
        {
          page.ruleMaps.splice(_0x43a01c, 1);
        }
      }
    }
  }
  page.showChange();
  page.flushList();
};
page.saveRule = function () {
  if (page.verify()) {
    {
      page.saveData();
      page.refresh();
    }
  }
};
page.clearRule = function () {
  page.ruleMaps = [];
  page.saveData();
  page.refresh();
};
page.flushList = function () {
  var _0x199ad3 = "\n    <tr sid=\"{{sid}}\" class=\"row-rule row_{{sid}} type_{{type}}\">\n      <td>\n        <button tabindex=\"0\" class=\"ivu-switch ivu-switch-default ivu-switch-{{enable}}\" :onclick=\"page.enableRule(this)\">\n          <span class=\"ivu-switch-inner\"><span class=\"on\">开</span> <span class=\"off\">关</span></span>\n        </button>\n      </td>\n      <td class=\"sort-bar\">\n        <button class=\"btn btn-default btn-sm btn-moveup\" :onclick=\"page.changeIndex(this, 'up')\"><span class=\"glyphicon glyphicon-arrow-up\"></span></button>\n        <button class=\"btn btn-default btn-sm btn-movedown\" :onclick=\"page.changeIndex(this, 'down')\"><span class=\"glyphicon glyphicon-arrow-down\"></span></button>\n      </td>\n      <td>\n        <select name=\"type\" class=\"btn btn-default dropdown-toggle type\" :onchange=\"page.changeValue(this, 'type')\">\n          <option value=\"REPLACE\" {{selected_REPLACE}}>替换</option>\n          <option value=\"INCLUDE\" {{selected_INCLUDE}}>包含</option>\n          <option value=\"EXACT\" {{selected_EXACT}}>等于</option>\n          <option value=\"REGEX\" {{selected_REGEX}}>正则</option>\n        </select>\n      </td>\n      <td>\n        <div class=\"clearable\">\n        <input required=\"required\" type=\"search\" class=\"form-control into\" value=\"{{into}}\" :onchange=\"page.changeValue(this, 'into')\" />\n        <span class=\"clear-x\" :onclick=\"page.clearInput(this)\"> </span>\n        </div>\n      </td>\n      <td>\n        <div class=\"clearable\">\n        <input required=\"required\" type=\"search\" class=\"form-control target\" value=\"{{target}}\" :onchange=\"page.changeValue(this, 'target')\" />\n        <span class=\"clear-x\" :onclick=\"page.clearInput(this)\"> </span>\n        </span>\n      </td>\n      <td>\n        <button title=\"Delete\" class=\"btn btn-danger btn-sm remove\" :onclick=\"page.removeRule(this)\"><span class=\"glyphicon glyphicon-trash\"></span></button>\n        <button title=\"Copy\" class=\"btn btn-default btn-sm copy\" :onclick=\"page.copyRule(this)\"><span class=\"glyphicon glyphicon-duplicate\"></span></button>\n      </td>\n    </tr>";
  var _0x2a0222 = [];
  for (var _0x36e4ce = 0, _0x10860d = page.ruleMaps.length; _0x36e4ce < _0x10860d; _0x36e4ce++) {
    {
      var _0x1ac454 = page.ruleMaps[_0x36e4ce];
      var _0x15811a = {};
      _0x15811a.selected_REPLACE = "";
      _0x15811a.selected_INCLUDE = "";
      _0x15811a.selected_EXACT = "";
      _0x15811a.selected_REGEX = "";
      _0x15811a["selected_" + _0x1ac454.type] = "selected";
      _0x15811a.sid = _0x1ac454.sid;
      _0x15811a.enable = _0x1ac454.enable;
      _0x15811a.type = _0x1ac454.type;
      _0x15811a.into = _0x1ac454.into;
      _0x15811a.target = _0x1ac454.target;
      var _0x1ddb7a = hui.format(_0x199ad3, _0x15811a);
      _0x2a0222.push(_0x1ddb7a);
    }
  }
  var _0x1874c0 = document.getElementById("ruleList");
  _0x1874c0.html(_0x2a0222.join("\n"));
};
page.exportRules = function () {
  function _0x3eb42b(_0x30d0ad, _0x385a2e) {
    {
      var _0x369368 = _0x30d0ad.type;
      var _0x10570b = "application/octet-stream";
      if (_0x369368 && _0x369368 != _0x10570b) {
        {
          var _0x313f3f = _0x30d0ad.slice || _0x30d0ad.webkitSlice;
          _0x30d0ad = _0x313f3f.call(_0x30d0ad, 0, _0x30d0ad.size, _0x10570b);
        }
      }
      var _0x5dd794 = _0x25434a.createObjectURL(_0x30d0ad);
      var _0x27398a = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
      _0x27398a.href = _0x5dd794;
      _0x27398a.download = _0x385a2e;
      var _0xfaf546 = document.createEvent("MouseEvents");
      _0xfaf546.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      _0x27398a.dispatchEvent(_0xfaf546);
      _0x25434a.revokeObjectURL(_0x5dd794);
    }
  }
  var _0x25434a = _0x25434a || window.webkitURL || window;
  var _0x272a7f = {
    type: "text/json"
  };
  var _0x2e8973 = new Blob([JSON.stringify(page.ruleMaps, null, "\t")], _0x272a7f);
  _0x3eb42b(_0x2e8973, "GoResSetting.json");
};
document.getElementById("jsonFile").onchange = function () {
  var _0x50044d = this.files[0];
  if (_0x50044d) {
    {
      var _0xd0e486 = new FileReader();
      _0xd0e486.readAsText(_0x50044d);
      _0xd0e486.onload = function () {
        {
          try {
            {
              var _0x13b1ec = JSON.parse(this.result);
              page.ruleMaps.length = 0;
              for (var _0x52359c = 0, _0x1b0574 = _0x13b1ec.length; _0x52359c < _0x1b0574; _0x52359c++) {
                page.ruleMaps.push(_0x13b1ec[_0x52359c]);
              }
              page.saveData();
              page.refresh();
              page.showInfo("导入成功", "success");
            }
          } catch (_0x3ac832) {
            {
              page.showInfo("导入失败，请检查文件格式是否正确");
            }
          }
        }
      };
    }
  }
};
page.refresh = function () {
  page.getData(function () {
    page.flushList();
  });
};
page.refresh();
page.createIncludeRule = function (_0x484dea, _0x4d0bf2) {
  var _0x1cb3a2 = {
    url: _0x484dea.target
  };
  var _0x1a6e7c = {
    type: "redirect",
    redirect: _0x1cb3a2
  };
  var _0x73c7f2 = {
    urlFilter: _0x484dea.into,
    resourceTypes: ["csp_report", "font", "image", "main_frame", "media", "object", "other", "ping", "script", "stylesheet", "sub_frame", "webbundle", "websocket", "webtransport", "xmlhttprequest"]
  };
  var _0x59889b = {
    id: _0x4d0bf2,
    priority: 1,
    action: _0x1a6e7c,
    condition: _0x73c7f2
  };
  var _0x2222ef = {
    addRules: [_0x59889b]
  };
  chrome.declarativeNetRequest.updateDynamicRules(_0x2222ef);
};
page.createExactRule = function (_0x12c860, _0x82abc7) {
  var _0x4e01b0 = {
    url: _0x12c860.target
  };
  var _0x2d9db0 = {
    type: "redirect",
    redirect: _0x4e01b0
  };
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [{
      id: _0x82abc7,
      priority: 1,
      action: _0x2d9db0,
      condition: {
        urlFilter: "|" + _0x12c860.into.trim() + "|",
        resourceTypes: ["csp_report", "font", "image", "main_frame", "media", "object", "other", "ping", "script", "stylesheet", "sub_frame", "webbundle", "websocket", "webtransport", "xmlhttprequest"]
      }
    }]
  });
};
page.createReplaceRule = function (_0x164b29, _0x298d11) {
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [{
      id: _0x298d11,
      priority: 1,
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: "\\1" + _0x164b29.target.trim() + "\\2"
        }
      },
      condition: {
        regexFilter: "(.*)" + _0x164b29.into + "(.*)",
        resourceTypes: ["csp_report", "font", "image", "main_frame", "media", "object", "other", "ping", "script", "stylesheet", "sub_frame", "webbundle", "websocket", "webtransport", "xmlhttprequest"]
      }
    }]
  });
};
page.createRegexRule = function (_0x355e31, _0x27f328) {
  var _0x2b38b5 = {
    url: _0x355e31.target
  };
  var _0x5dbc05 = {
    type: "redirect",
    redirect: _0x2b38b5
  };
  var _0x185d0a = {
    regexFilter: _0x355e31.into,
    resourceTypes: ["csp_report", "font", "image", "main_frame", "media", "object", "other", "ping", "script", "stylesheet", "sub_frame", "webbundle", "websocket", "webtransport", "xmlhttprequest"]
  };
  var _0x1f4fef = {
    id: _0x27f328,
    priority: 1,
    action: _0x5dbc05,
    condition: _0x185d0a
  };
  var _0x528f42 = {
    addRules: [_0x1f4fef]
  };
  chrome.declarativeNetRequest.updateDynamicRules(_0x528f42);
};