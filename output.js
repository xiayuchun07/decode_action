
function toggleCollapse(_0x4a123a) {
  const _0x2d7f1c = document.getElementById(_0x4a123a + "Details");
  if (!_0x2d7f1c) {
    {
      console.error("Content not found for ID: " + _0x4a123a + "Details");
      return;
    }
  }
  const _0x4c4adc = document.getElementById(_0x4a123a + "Arrow");
  if (_0x2d7f1c.style.display === "block") {
    _0x2d7f1c.style.display = "none";
    if (_0x4c4adc) _0x4c4adc.innerHTML = "⬇";
  } else {
    {
      _0x2d7f1c.style.display = "block";
      if (_0x4c4adc) _0x4c4adc.innerHTML = "⬆";
    }
  }
}
(function () {
  var _0x50774b = 1,
    _0x2670fc = false,
    _0x36dc16 = true,
    _0x393318 = null;
  window.handleThemeClick = function (_0x323ced, _0x49a7cc) {
    _0x323ced.preventDefault();
    _0x393318 = _0x49a7cc;
    document.querySelectorAll("[data-theme-code]").forEach(_0x12938e => {
      _0x12938e.classList.remove("border-blue-500");
      _0x12938e.classList.add("border-gray-800");
    });
    const _0x57313e = _0x323ced.currentTarget;
    _0x57313e.classList.remove("border-gray-800");
    _0x57313e.classList.add("border-blue-500");
    _0x765757(_0x49a7cc);
  };
  function _0x31fa54(_0x5148e0) {
    var _0x240697 = new Date(_0x5148e0);
    return _0x240697.getFullYear() + "-" + ("0" + (_0x240697.getMonth() + 1)).slice(-2) + "-" + ("0" + _0x240697.getDate()).slice(-2);
  }
  function _0x5ef1be(_0x3a6bd0) {
    if (_0x3a6bd0 == null || isNaN(_0x3a6bd0)) return "-";
    if (_0x3a6bd0 >= 100000000) {
      return (_0x3a6bd0 / 100000000).toFixed(2) + "亿";
    } else {
      if (_0x3a6bd0 >= 10000) return (_0x3a6bd0 / 10000).toFixed(2) + "万";
    }
    return _0x3a6bd0.toFixed(2);
  }
  function _0x5e0c77(_0x5da57e) {
    if (_0x5da57e == null || isNaN(_0x5da57e)) return "-";
    var _0x4cc36e = Math.abs(_0x5da57e);
    return _0x4cc36e >= 100000000 ? (_0x5da57e / 100000000).toFixed(2) + "亿" : (_0x5da57e / 10000).toFixed(2) + "万";
  }
  function _0x765757(_0x4301c9) {
    document.getElementById("stockList").innerHTML = "<div class=\"text-gray-400 text-center\">加载中...</div>";
    var _0x469c45 = {
      "args": {
        "themeCode": _0x4301c9,
        "pageSize": 1000,
        "pageNum": 1,
        "sort": -1,
        "sortField": "f3"
      },
      "client": "web",
      "clientVersion": "8.3",
      "clientType": "cfw",
      "randomCode": "CZ7odv3YipURcVif",
      "timestamp": Date.now()
    };
    return fetch("https://emcfgdata.eastmoney.com/api/themeInvest/getStockList", {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json;charset=UTF-8",
        "Accept": "application/json, text/plain, */*",
        "Origin": "https://emrnweb.eastmoney.com",
        "Referer": "https://emrnweb.eastmoney.com/"
      },
      "body": JSON.stringify(_0x469c45)
    }).then(function (_0x21b32d) {
      return _0x21b32d.json();
    }).then(function (_0x21e418) {
      _0x21e418.code === 0 && _0x21e418.data && _0x21e418.data.stockList && _0x1a86c9(_0x21e418.data.stockList, _0x21e418.data.statistic, _0x21e418.data.total);
    }).catch(function (_0x31e526) {
      console.error("Error:", _0x31e526);
      document.getElementById("stockList").innerHTML = "<div class=\"text-red-500 text-center\">获取数据失败</div>";
    });
  }
  function _0x52c6d0(_0x5d70d6, _0x524d01, _0x540a43) {
    {
      _0x540a43 = _0x540a43 || 1;
      var _0x5c099a = {
        "args": _0x524d01 ? {} : {
          "pageSize": 700,
          "pageNum": _0x540a43,
          "sort": -1
        },
        "client": "web",
        "clientVersion": "8.3",
        "clientType": "cfw",
        "randomCode": _0x524d01 ? "qwRtDlKIulaJS88Y" : "QMvrYSV2BSS4uDmf",
        "timestamp": Date.now()
      };
      return fetch(_0x5d70d6, {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json;charset=UTF-8",
          "Accept": "application/json, text/plain, */*",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
          "Origin": "https://emrnweb.eastmoney.com",
          "Referer": "https://emrnweb.eastmoney.com/"
        },
        "body": JSON.stringify(_0x5c099a)
      }).then(function (_0x4a8390) {
        return _0x4a8390.json();
      }).then(function (_0x46ea26) {
        if (_0x46ea26.code === 0) {
          return _0x46ea26.data;
        } else throw new Error(_0x46ea26.message);
      }).catch(function (_0x3803bb) {
        console.error("Error:", _0x3803bb);
        return null;
      });
    }
  }
  function _0x590783(_0x5067c1, _0x5eac1a = false) {
    const _0x55f6b4 = document.getElementById("allThemes"),
      _0x1debd5 = _0x5067c1.map(_0x18e05e => "  \n        <div class=\"bg-gray-900 rounded-lg p-3 border " + (_0x393318 === _0x18e05e.themeCode ? "border-blue-500" : "border-gray-800") + " cursor-pointer hover:bg-gray-800\"  \n             data-theme-code=\"" + _0x18e05e.themeCode + "\"  \n             onclick=\"handleThemeClick(event, '" + _0x18e05e.themeCode + "')\">  \n            <div class=\"flex justify-between items-center\">  \n                <div class=\"flex items-center gap-2\">  \n                    <span class=\"text-sm font-medium\" style=\"color: #FFA500\">" + _0x18e05e.themeName + "</span>  \n                    " + (_0x18e05e.fex3 > 0 ? "  \n                        <span class=\"px-2 py-0.5 bg-gray-800 rounded-full text-xs text-red-500\">  \n                            " + _0x18e05e.fex3 + "家涨停  \n                        </span>  \n                    " : "") + "  \n                </div>  \n                <span class=\"text-sm font-bold " + (_0x18e05e.bf3 >= 0 ? "text-red-500" : "text-green-500") + "\">  \n                    " + _0x18e05e.bf3 + "%  \n                </span>  \n            </div>  \n            <div class=\"flex justify-between items-center mt-2 text-xs text-gray-400\">  \n                <span>领涨：<span style=\"color: #FFA500\">" + (_0x18e05e.securityName || "-") + "</span></span>  \n                <span class=\"" + (_0x18e05e.f3 >= 0 ? "text-red-500" : "text-green-500") + "\">  \n                    " + (_0x18e05e.f3 !== undefined ? _0x18e05e.f3.toFixed(2) + "%" : "-") + "  \n                </span>  \n            </div>  \n        </div>  \n    ").join("");
    if (_0x5eac1a) {
      _0x55f6b4.innerHTML += _0x1debd5;
    } else _0x55f6b4.innerHTML = _0x1debd5;
    _0x2fb811();
  }
  function _0x2fb811() {
    {
      const _0xc6e31c = document.getElementById("allThemes"),
        _0x1d8845 = Array.from(_0xc6e31c.children).filter(_0x319c2b => _0x319c2b.style.display !== "none"),
        _0x538413 = document.getElementById("allThemesCount");
      _0x538413 && (_0x538413.textContent = "(" + _0x1d8845.length + ")");
      const _0x8f19e0 = document.getElementById("stockListCount");
      _0x8f19e0 && (_0x8f19e0.textContent = "(" + document.getElementById("stockList").children.length + ")");
    }
  }
  window.filterThemes = function () {
    {
      const _0x2cad8e = document.getElementById("searchInput").value.toLowerCase(),
        _0x5d6112 = document.querySelectorAll("#allThemes > div");
      _0x5d6112.forEach(_0x3e7e94 => {
        const _0x435ffb = _0x3e7e94.querySelector(".text-sm.font-medium").textContent.toLowerCase();
        if (_0x435ffb.includes(_0x2cad8e)) {
          _0x3e7e94.style.display = "";
        } else _0x3e7e94.style.display = "none";
      });
    }
  };
  function _0x29e3e1(_0x257f2e) {
    const _0x4b6fb8 = _0x257f2e.map(_0x5d6c5e => "  \n        <div class=\"bg-gray-900 rounded-lg p-4 border border-gray-800 cursor-pointer hover:bg-gray-800\"   \n             data-theme-code=\"" + _0x5d6c5e.themeCode + "\"   \n             onclick=\"handleThemeClick(event, '" + _0x5d6c5e.themeCode + "')\">  \n            <div class=\"flex justify-between items-center mb-2\">  \n                <h3 class=\"text-sm font-bold\" style=\"color: #FFA500\">" + _0x5d6c5e.themeName + "</h3>  \n                <span class=\"text-sm font-bold " + (_0x5d6c5e.f3 >= 0 ? "text-red-500" : "text-green-500") + "\">  \n                    " + _0x5d6c5e.f3 + "% " + (_0x5d6c5e.f3 >= 0 ? "↑" : "↓") + "  \n                </span>  \n                <span id=\"today-" + _0x5d6c5e.themeCode + "Arrow\" class=\"collapse-arrow\" onclick=\"toggleCollapse('today-" + _0x5d6c5e.themeCode + "'); event.stopPropagation();\">⬇</span>  \n            </div>  \n            <div id=\"today-" + _0x5d6c5e.themeCode + "Details\" class=\"collapsible-content\" style=\"display: none;\">  \n                <p class=\"text-gray-400 text-xs mb-4\">" + (_0x5d6c5e.newsTitle || "暂无详细介绍") + "</p>  \n                <div class=\"grid grid-cols-2 gap-2\">  \n                    " + (_0x5d6c5e.stock && _0x5d6c5e.stock.length > 0 ? _0x5d6c5e.stock.map(_0xf68e01 => "  \n                        <div class=\"bg-gray-800 p-2 rounded\">  \n                            <div class=\"text-xs\" style=\"color: #FFA500\">" + _0xf68e01.name + "</div>  \n                            <div class=\"text-xs " + (_0xf68e01.f3 >= 0 ? "text-red-500" : "text-green-500") + "\">" + _0xf68e01.f3 + "%</div>  \n                        </div>  \n                    ").join("") : "<div class=\"text-gray-400\">无成分股数据</div>") + "  \n                </div>  \n            </div>  \n        </div>  \n    ").join("");
    document.getElementById("todayHot").innerHTML = _0x4b6fb8;
  }
  function _0x10e3f8(_0x5954f9) {
    const _0x157b7f = _0x5954f9.map(_0x479559 => {
      {
        const _0x31bd78 = _0x479559.theme && _0x479559.theme[0],
          _0x5bcdf7 = _0x31bd78 ? _0x31bd78.code : "";
        return "  \n            <div class=\"bg-gray-900 rounded-lg p-4 border border-gray-800 cursor-pointer hover:bg-gray-800\"   \n                 data-theme-code=\"" + _0x5bcdf7 + "\"   \n                 onclick=\"handleThemeClick(event, '" + _0x5bcdf7 + "')\">  \n                <div class=\"flex justify-between items-center mb-2\">  \n                    <h3 class=\"text-sm font-bold\" style=\"color: #FFA500\">" + (_0x31bd78 ? _0x31bd78.name : "") + "</h3>  \n                    " + (_0x31bd78 ? "<span class=\"text-sm font-bold " + (_0x31bd78.f3 >= 0 ? "text-red-500" : "text-green-500") + "\">" + _0x31bd78.f3 + "% " + (_0x31bd78.f3 >= 0 ? "↑" : "↓") + "</span>" : "") + "  \n                    <span id=\"expected-" + _0x5bcdf7 + "Arrow\" class=\"collapse-arrow\" onclick=\"toggleCollapse('expected-" + _0x5bcdf7 + "'); event.stopPropagation();\">⬇</span>  \n                </div>  \n                <div id=\"expected-" + _0x5bcdf7 + "Details\" class=\"collapsible-content\" style=\"display: none;\">  \n                    <p class=\"text-gray-400 text-xs mb-4\">" + (_0x479559.summary || "暂无详细介绍") + "</p>  \n                    <div class=\"grid grid-cols-2 gap-2\">  \n                        " + _0x479559.theme.slice(1).map(_0x48715a => "  \n                            <div class=\"bg-gray-800 p-2 rounded\">  \n                                <div class=\"text-xs\" style=\"color: #FFA500\">" + _0x48715a.name + "</div>  \n                                <div class=\"text-xs " + (_0x48715a.f3 >= 0 ? "text-red-500" : "text-green-500") + "\">" + _0x48715a.f3 + "%</div>  \n                            </div>  \n                        ").join("") + "  \n                    </div>  \n                    <div class=\"text-gray-400 text-xs mt-2\">" + _0x31fa54(_0x479559.date) + "</div>  \n                </div>  \n            </div>";
      }
    }).join("");
    document.getElementById("expectedHot").innerHTML = _0x157b7f;
  }
  function _0x1a86c9(_0x40a592, _0x458f58, _0x47ed8e) {
    var _0x2db9bf = document.getElementById("stockListTitle");
    _0x2db9bf && (_0x2db9bf.innerHTML = "成分股 <span class=\"text-red-500\">(" + (_0x47ed8e || _0x40a592.length) + ")</span>" + "<button id=\"collectStocksBtn\" " + "class=\"ml-4 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 focus:outline-none\">" + "加入板块" + "</button>");
    var _0x4178f9 = "<div class=\"flex text-sm mb-4\"><span>涨跌统计 <span style=\"color: #FF3B30\">" + (_0x458f58 && _0x458f58.f104 || 0) + "</span>/" + (_0x458f58 && _0x458f58.f106 || 0) + "/" + "<span class=\"text-green-500\">" + (_0x458f58 && _0x458f58.f105 || 0) + "</span>" + "</span>" + "<span style=\"margin-left: 32px;\">涨跌停 " + "<span style=\"color: #FF3B30\">" + (_0x458f58 && _0x458f58.fex3 || 0) + "</span>/" + "<span class=\"text-green-500\">" + (_0x458f58 && _0x458f58.fex4 || 0) + "</span>" + "</span>" + "<span style=\"margin-left: 32px;\">净流入 " + "<span class=\"" + ((_0x458f58 && _0x458f58.fex5 || 0) >= 0 ? "text-red-500" : "text-green-500") + "\">" + _0x5e0c77(_0x458f58 && _0x458f58.fex5) + "</span>" + "</span>" + "</div>",
      _0x1f5908 = _0x40a592.filter(_0x3e87f3 => _0x3e87f3.label && !_0x3e87f3.label.includes("昨") && _0x3e87f3.f3 >= 9.9),
      _0x14dbae = _0x40a592.filter(_0x57143c => !_0x57143c.label || _0x57143c.label.includes("昨") || _0x57143c.f3 < 9.9);
    function _0x48767b(_0x4faf8b) {
      return "<a href=\"http://www.treeid/code_" + _0x4faf8b.securityCode + "\" " + "class=\"block stock-item bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-200\" style=\"padding: 3px; margin: 2px; border: 1px solid #222; cursor: pointer;\">" + "<div class=\"flex justify-between items-center\">" + "<div class=\"stock-name\">" + "<span class=\"text-base font-medium\" style=\"color: #FFA500; text-decoration: none;\">" + _0x4faf8b.securityName + "</span>" + (_0x4faf8b.label ? "<span class=\"text-xs text-red-500 ml-2\">" + _0x4faf8b.label + "</span>" : "") + "</div>" + "<div class=\"flex items-center gap-4\">" + "<span class=\"stock-value " + (_0x4faf8b.f3 > 0 ? "text-red-500" : _0x4faf8b.f3 < 0 ? "text-green-500" : "text-gray-400") + "\">" + (_0x4faf8b.f3 != null ? _0x4faf8b.f3.toFixed(2) + "%" : "-") + "</span>" + "<span class=\"stock-market-cap text-gray-400\">" + _0x5ef1be(_0x4faf8b.f21) + "</span>" + "<span class=\"stock-code\" style=\"display:none;\">" + _0x4faf8b.securityCode + "</span>" + (_0x4faf8b.keywordList?.["length"] ? "<span id=\"" + _0x4faf8b.securityCode + "Arrow\" class=\"text-gray-400 cursor-pointer\" " + "onclick=\"toggleCollapse('" + _0x4faf8b.securityCode + "')\">⬇</span>" : "") + "</div>" + "</div>" + (_0x4faf8b.keywordList?.["length"] ? "<div id=\"" + _0x4faf8b.securityCode + "Details\" class=\"collapsible-content\" style=\"display: none;\">" + _0x4faf8b.keywordList.map(_0x5a5ac5 => "<div class=\"mt-2 text-sm text-gray-400\">" + _0x5a5ac5.introduction + "</div>").join("") + "</div>" : "<div class=\"collapsible-content\" style=\"display: none;\"><p class=\"text-gray-400\">无详细信息</p></div>") + "</a>";
    }
    var _0x59f300 = document.getElementById("stockList");
    _0x59f300 && (_0x59f300.innerHTML = _0x4178f9 + "<div class=\"space-y-4\"> " + "<div>" + "<div class=\"text-white mb-2\">涨停股票 (" + _0x1f5908.length + ")</div>" + _0x1f5908.map(_0x48767b).join("") + "</div>" + "<div>" + "<div class=\"text-white mb-2\">其他股票 (" + _0x14dbae.length + ")</div>" + _0x14dbae.map(_0x48767b).join("") + "</div>" + "</div>");
    var _0x5e99b4 = document.getElementById("collectStocksBtn");
    _0x5e99b4 && _0x5e99b4.addEventListener("click", function (_0x1ad1f0) {
      {
        _0x1ad1f0.preventDefault();
        var _0x24ea19 = document.querySelectorAll(".stock-item"),
          _0x2c7f92 = [];
        _0x24ea19.forEach(function (_0x32985a) {
          var _0x956d96 = _0x32985a.querySelector(".stock-code").textContent,
            _0x8192a0 = _0x956d96.replace(/^(sz|sh)?/, ""),
            _0x2bf740;
          if (_0x8192a0.startsWith("6")) _0x2bf740 = "1#" + _0x8192a0;else {
            if (_0x8192a0.startsWith("0") || _0x8192a0.startsWith("3")) _0x2bf740 = "0#" + _0x8192a0;else {
              if (_0x8192a0.startsWith("4") || _0x8192a0.startsWith("8") || _0x8192a0.startsWith("9")) _0x2bf740 = "2#" + _0x8192a0;else {
                return;
              }
            }
          }
          _0x2c7f92.push(_0x2bf740);
        });
        if (_0x2c7f92.length > 0) {
          var _0x4a5551 = _0x2c7f92.join("|"),
            _0x14ed66 = "http://www.treeid/AddToBlock_" + _0x4a5551;
          navigator.clipboard.writeText(_0x4a5551).then(function () {
            alert("股票代码已复制到剪贴板。");
            window.location.href = _0x14ed66;
          }).catch(function (_0x5a2e13) {
            var _0x4407db = document.createElement("textarea");
            _0x4407db.value = _0x4a5551;
            document.body.appendChild(_0x4407db);
            _0x4407db.select();
            try {
              document.execCommand("copy");
              window.location.href = _0x14ed66;
            } catch (_0x34c43e) {
              alert("复制到剪贴板失败: " + _0x34c43e);
            }
            document.body.removeChild(_0x4407db);
          });
        } else alert("没有可收集的股票。");
      }
    });
  }
  function _0x3c002b(_0x96b8eb, _0x1ffb28) {
    {
      _0x96b8eb.preventDefault();
      _0x393318 = _0x1ffb28;
      document.querySelectorAll("[data-theme-code]").forEach(_0x2f2133 => {
        _0x2f2133.classList.remove("border-blue-500");
        _0x2f2133.classList.add("border-gray-800");
      });
      const _0x486ea0 = _0x96b8eb.currentTarget;
      _0x486ea0.classList.remove("border-gray-800");
      _0x486ea0.classList.add("border-blue-500");
      _0x765757(_0x1ffb28);
    }
  }
  function _0x5d19e3() {
    if (_0x2670fc || !_0x36dc16) return;
    _0x2670fc = true;
    document.getElementById("loading").classList.remove("hidden");
    _0x52c6d0("https://emcfgdata.eastmoney.com/api/themeInvest/getThemeList", false, _0x50774b).then(function (_0x209b0c) {
      if (_0x209b0c && Array.isArray(_0x209b0c.list)) {
        {
          const _0x5c6a93 = _0x209b0c.list.map(_0x4a2d81 => ({
            "themeCode": _0x4a2d81.themeCode || "",
            "themeName": _0x4a2d81.themeName || "",
            "fex3": _0x4a2d81.fex3 || 0,
            "bf3": _0x4a2d81.bf3 || 0,
            "securityName": _0x4a2d81.securityName || "-",
            "f3": _0x4a2d81.f3 || 0
          }));
          _0x590783(_0x5c6a93, _0x50774b > 1);
          _0x36dc16 = _0x50774b * 30 < (_0x209b0c.total || 0);
          _0x50774b++;
        }
      } else console.error("Invalid data structure:", _0x209b0c);
      _0x2670fc = false;
      document.getElementById("loading").classList.add("hidden");
    }).catch(function (_0x5c08e3) {
      console.error("Load more themes error:", _0x5c08e3);
      _0x2670fc = false;
      document.getElementById("loading").classList.add("hidden");
    });
  }
  function _0x48b011(_0x108943, _0x3ae32f) {
    {
      (function () {})();
      var _0x5a2e75;
      return function () {
        var _0x4732e1 = this,
          _0xa06097 = arguments,
          _0x51ab34 = function () {
            _0x5a2e75 = null;
            _0x108943.apply(_0x4732e1, _0xa06097);
          };
        clearTimeout(_0x5a2e75);
        _0x5a2e75 = setTimeout(_0x51ab34, _0x3ae32f);
      };
    }
  }
  var _0x297312 = _0x48b011(function () {
    var _0x831ff1 = document.getElementById("allThemes");
    if (_0x831ff1.scrollHeight - _0x831ff1.scrollTop <= _0x831ff1.clientHeight + 100) {
      _0x5d19e3();
    }
  }, 200);
  function _0x38ee6c() {
    document.getElementById("todayHot").innerHTML = "<div class=\"text-gray-400 text-center\">加载中...</div>";
    document.getElementById("expectedHot").innerHTML = "<div class=\"text-gray-400 text-center\">加载中...</div>";
    document.getElementById("allThemes").innerHTML = "<div class=\"text-gray-400 text-center\">加载中...</div>";
    Promise.all([_0x52c6d0("https://emcfgdata.eastmoney.com/api/themeInvest/getTodayChance", false), _0x52c6d0("https://emcfgdata.eastmoney.com/api/themeInvest/getExpectHot", true)]).then(function (_0x253b45) {
      var _0x43cfb2 = _0x253b45[0],
        _0x106a14 = _0x253b45[1];
      _0x29e3e1(_0x43cfb2);
      _0x10e3f8(_0x106a14);
      _0x5d19e3();
      if (_0x43cfb2 && _0x43cfb2.length > 0) {
        _0x393318 = _0x43cfb2[0].themeCode;
        setTimeout(function () {
          var _0x1536fa = document.querySelector("[data-theme-code=\"" + _0x393318 + "\"]");
          _0x1536fa && (_0x1536fa.classList.remove("border-gray-800"), _0x1536fa.classList.add("border-blue-500"));
          _0x765757(_0x393318);
        }, 100);
      }
      var _0x446622 = document.getElementById("allThemes");
      if (_0x446622) {
        _0x446622.addEventListener("scroll", _0x297312);
      }
    }).catch(function (_0x31b863) {
      console.error("Initialize error:", _0x31b863);
      document.getElementById("todayHot").innerHTML = "<div class=\"text-red-500 text-center\">加载失败</div>";
      document.getElementById("expectedHot").innerHTML = "<div class=\"text-red-500 text-center\">加载失败</div>";
      document.getElementById("allThemes").innerHTML = "<div class=\"text-red-500 text-center\">加载失败</div>";
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    _0x38ee6c();
    document.querySelectorAll(".collapsible-content").forEach(_0x461c4e => _0x461c4e.style.display = "none");
  });
})();